# Content Credentials identity — CA-issued signing for on-device C2PA

Lolly embeds C2PA Content Credentials in every stampable export, signed **on
device**. Until now the signer was always an ephemeral self-signed certificate,
so every validator (including our own `/valid` view) reported
`signingCredential.untrusted`. That was the honest ceiling for a pure-offline,
open-source generator — a key shipped inside a client is extractable, and an
extracted key can sign lies, so no trust list will ever accept one.

This feature raises the ceiling without giving up offline signing or open
source, by separating **certificate issuance** (needs the network, occasional)
from **signing** (on device, always):

1. A small **Lolly CA service** (same Vercel project as the app, at
   `/api/ca/*`) holds the CA private key server-side and issues **short-lived
   X.509 certificates** (user-selectable lifetime — 7/30/90/365 days, default
   30) bound to a **user identity** verified via OIDC
   — SUSE (id.suse.com / Okta), GitHub, Google, or an email magic link.
2. The device generates a **non-extractable** ECDSA P-256 keypair (WebCrypto
   `extractable: false`, persisted in IndexedDB — even our own code cannot
   export it). Only a proof-of-possession leaves the device; never the key.
3. Exports sign **locally, offline**, with the cached certificate for its
   whole lifetime. Past expiry (or never enrolled) the export falls back to
   today's ephemeral self-signed path unchanged.
4. The verifier (`engine/src/c2pa-verify.ts`, the `/valid` view, and anyone
   running `c2patool --trust_anchors lolly-root.pem`) validates the chain
   against the pinned **Lolly root** and reports **trusted — signed by
   \<email\>** instead of untrusted.

## Why identity, not app identity

Lolly's engine and shells are open source. Once the code is public, "made with
Lolly" can never be a *cryptographic* claim — anyone can fork the repo and emit
bit-identical manifests. No certificate scheme fixes that, because the thing
being attested (the software) is copyable by design.

So the certificate attests **who signed, not what app signed**: the Subject
Alternative Name carries the OIDC-verified email. A fork can't impersonate a
Lolly user — it can only obtain certificates for *its own* users under our
issuance policy, or run its own CA whose root simply isn't our root. The
`generator_info` field saying "Lolly" remains self-asserted, and the verifier
copy keeps making that distinction.

This follows Kerckhoffs's principle as practised by Sigstore/Fulcio and
Let's Encrypt: **the repo holds no secrets — only protocol and public
anchors.** The CA *certificate* (public) is committed and served; the CA
*private key* lives only in Vercel env / KMS; the device key is generated
locally and non-extractable.

## Trust tiers (what a verifier can conclude)

| Tier | Signer | Verifier result |
|---|---|---|
| 0 | Ephemeral self-signed (offline / not enrolled) | `signingCredential.untrusted` — structure valid, signer anonymous |
| 1–2 | Device key + short-lived Lolly-CA cert (this feature) | `signingCredential.trusted` + identity email, for verifiers pinning the Lolly root |
| 3 (roadmap) | + RFC 3161 timestamp countersignature | proves *when* signed, so expired certs stay verifiable |
| 4 (roadmap) | C2PA conformance program (audited KMS custody) | green in third-party validators (Adobe Verify etc.) |

**Expired-credential honesty:** certificates are short-lived and there is no
trusted timestamp yet, so a file verified after the cert expired gets a
distinct `signingCredential.expired` warning — "identity was CA-verified, but
the time of signing cannot be proven" — never silently downgraded to
untrusted, never inflated to trusted.

## Credential lifetime (7 / 30 / 90 / 365 days, default 30)

Until the timestamp authority lands (Tier 3), the certificate window does
double duty: it bounds abuse (expiry is our only revocation) **and** it is how
long an exported file keeps its verified badge — the verifier compares the
cert window against *verification* time, not signing time. So the lifetime is
the user's call, offered at the moment the certificate is actually minted:

- **Not enrolled (ephemeral path):** the self-signed cert is generated fresh
  per export, so the **export panel's Content Credentials card** carries the
  7/30/90/365 select directly — it sets `dates.notBefore/notAfter` on that
  export's credential. Default 30 (previously a fixed 1 year). Fully offline.
- **Enrolled (CA identity):** the cert is fixed at enrolment, so the same
  7/30/90/365 select lives in **Profile → Content Credentials** next to the
  provider buttons; the chosen `days` rides the `/api/ca/enroll` POST and the
  CA clamps it (allowed set {7, 30, 90, 365}, anything else → `CA_CERT_DAYS`
  default 30, hard-capped by `CA_CERT_MAX_DAYS` default 365 — policy stays
  server-side). The export panel then shows *"Signed as \<email\> · verified
  until \<date\>"* in place of the picker, with a renew nudge when expiry is
  near. A per-export choice can't exist here — you can't sign with validity
  your certificate doesn't have, and re-issuing at export time would break
  offline signing.
- **URL / CLI:** `c2pa` is a reserved URL-mode param (see docs/url-mode.md):
  `?c2pa=90` on a share/deep-link URL turns the credential on with a 90-day
  ephemeral window (and pre-sets the export panel), `c2pa=off` forces it off,
  and the CLI accepts the same as `--c2pa=90` — stamping its native `svg`
  output with the ephemeral path (enrolment is a browser feature).

## Architecture

```
┌───────────── device (open source) ─────────────┐   ┌── Vercel bt project ──┐
│ WebCrypto P-256 keypair (non-extractable, IDB) │   │ /api/ca/* function     │
│ shells/web/src/bridge/identity.ts              │──▶│ services/ca/handler    │
│   enroll: popup OIDC → PoP → cert (cached)    │◀──│  - OIDC verify         │
│   signer(): {sign, chain} while cert valid     │   │  - PoP verify          │
│ export path: embedC2pa(..., {signer})          │   │  - X.509 issue (ES256) │
│ verify path: verifyC2pa(..., {trustAnchors})   │   │ CA key: env/KMS only   │
└────────────────────────────────────────────────┘   └────────────────────────┘
```

**Deliberately NOT a bridge capability.** Tools never touch identity —
enrollment is app-level (profile UI) and the signer is consumed inside the
shell's own export implementation. `HostV1` is unchanged; no tool can observe
or depend on enrollment. The engine additions are ordinary options
(`opts.signer`, `opts.trustAnchors`) on existing pure functions.

## Engine contracts (frozen)

Ships as **ENGINE_VERSION 1.11.0** (additive — a `// 1.11.0 — additive: …`
changelog block above the const in `engine/src/index.ts`). `HostV1` is
untouched; nothing here is a bridge capability.

### `engine/src/x509.ts` (new — DER/X.509 authority extracted from c2pa.ts)

Pure module shared by the ephemeral path, the CA service, and tests. No DOM,
`globalThis.crypto` only. The DER writer helpers (`der`, `derSeq`, `derSet`,
`derOctet`, `derUint`, `derOid`, `derTime`, `ecdsaRawToDer`) and
`generateSigner` move here from c2pa.ts (c2pa.ts re-imports; **byte-identical
output** — the existing c2pa test suite is the regression harness). New:

```js
export function pemToDer(pem)                      // -> Uint8Array
export function derToPem(der, label)               // 'CERTIFICATE' | 'PRIVATE KEY'
export async function generateCaRoot({ commonName, organization, days })
  // -> { certDer, pkcs8Der }  self-signed CA:TRUE root, ES256 P-256, keyCertSign
export async function issueLeafCert({
  caCertDer, caPrivateKey,                          // issuer (CryptoKey or pkcs8 Uint8Array)
  spkiDer,                                          // subject public key (CSR-less PoP flow)
  email, commonName, organization,                  // SAN rfc822Name + CN + O
  days,                                             // enrollment default 30
})  // -> Uint8Array cert DER
```

**c2pa-rs compatibility is non-negotiable in the leaf profile** (it hard-fails
otherwise): subject MUST carry an `O=` attribute, EKU MUST be
id-kp-emailProtection (`1.3.6.1.5.5.7.3.4` — anyEKU is rejected), keyUsage
digitalSignature critical, SKI + AKI present, plus SAN rfc822Name = the
verified email. Serial: random with the ephemeral path's stable-width trick.

### `engine/src/c2pa.ts`

`embedC2pa(bytes, format, opts)` and `embedC2paInPdf(bytes, opts)` gain one
optional field. `buildC2paManifest` already threads `signer`; the embedders
switch their internal `generateSigner(dates)` calls (c2pa.ts:721 and :1435) to
`opts.signer ?? await generateSigner(dates)`:

```js
opts.signer = {
  privateKey,                        // CryptoKey (P-256, 'sign') — the normal device path
  // OR sign: async (sigStructureBytes) => Uint8Array(64)  // raw r||s, NOT DER
  certDer,                           // leaf DER (back-compat single-cert shape)
  chain,                             // Uint8Array[] leaf-first — wins over certDer in x5chain
}
```

Inside `coseSign1Detached`: x5chain label 33 becomes
`signer.chain ?? [signer.certDer]`, and the sign step becomes
`signer.sign ? await signer.sign(sigStructure) : subtle.sign(…, signer.privateKey, sigStructure)`.
Two-pass safety: chain bytes are captured once per embed (byte-identical
across passes), ES256 signatures are fixed 64 bytes, alg stays hardcoded −7 —
**P-256 only** by contract. `sign()` runs up to ~11× per embed (probe +
fixed-point rounds + pass 2), fine for a WebCrypto key; a future
user-presence key would need dummy probe signatures.

### `engine/src/c2pa-verify.ts`

```js
verifyC2pa(bytes, { trustAnchors } = {})   // trustAnchors: Uint8Array[] (root cert DER)
```

Zero-options behaviour stays byte-identical (contract tests guard it). With
anchors: capture the FULL x5chain (today only `chain[0]` is read), verify
leaf-signed-by-anchor — issuer-name DER bytes match anchor subject bytes +
ECDSA P-256/SHA-256 over the leaf's tbsCertificate using the anchor SPKI
(needs the missing DER→raw ECDSA-Sig-Value converter: strip INTEGER pads,
left-pad r/s to 32, skip the BIT STRING unused-bits byte). `parseCertificate`
is extended **additively** (tbsBytes, rawSignature, issuerBytes/subjectBytes,
sanEmails) — existing fields unchanged.

Check-row semantics (the `signingCredential.untrusted` exact string is
matched in 3 places — engine verdict :1013, valid.ts `isExpiredOnly` :63,
valid.ts `isExpectedRow` :69 — all stay coherent):

- Chain verifies + leaf inside validity → `pass('signingCredential.trusted',
  'signing certificate chains to a pinned CA root — verified identity: <email>')`
  **instead of** the unconditional untrusted fail; `report.trusted = true`,
  `report.signer.identity = { email, issuer }`.
- Chain verifies but leaf now outside validity → the existing
  `signingCredential.expired` fail already fires (:915–920); additionally set
  `report.signer.identity` (identity was CA-verified; signing time unprovable
  — no TSA yet). `report.trusted` stays false.
- No anchors / no chain to an anchor → today's unconditional untrusted fail,
  byte-identical.

### CLI

`lolly validate <file> [--json] [--trust-anchor <root.pem>]` — same
verifier, same report; the flag loads PEM → DER and passes `trustAnchors`.

## CA service (`services/ca/`)

Zero-dependency Node (node:http + WebCrypto), importing `engine/src/x509.ts`.
Added to the root `workspaces` array (named `@lolly/ca-service`). Runs three
ways from one `handler.mjs`:

- `node services/ca/server.mjs` — local dev on `:8787` (Vite proxies
  `/api/ca` → `http://localhost:8787`; the string-shorthand proxy preserves
  the path, so the handler always routes on the full `/api/ca/*` prefix).
- `api/ca/[...path].js` at the **repo root** — a standard Vercel function
  entry that imports the same handler. `npx vercel build` traces the imports
  (handler + engine x509) into `.vercel/output/functions` automatically — no
  custom bundling. The service worker already bypasses `/api/` and Vercel
  serves functions before rewrites, so the SPA catch-all never swallows it.
- Imported directly by `tests/ca-service.test.ts` (pure logic tested without
  a socket).

### Protocol

| Route | Purpose |
|---|---|
| `GET /api/ca/root.pem` | The public Lolly root — for `c2patool --trust_anchors` and humans |
| `GET /api/ca/auth/:provider?origin=` | Start OIDC (`suse` \| `github` \| `google`); sets HMAC state cookie, redirects to provider |
| `GET /api/ca/callback/:provider` | Code exchange → verified email → mints a 10-min **enrollment token**; returns a tiny page that `postMessage`s the token to `origin` and closes |
| `POST /api/ca/email/start` `{email}` | Magic link via Resend; the link lands on `/api/ca/email/verify` which finishes like a callback |
| `POST /api/ca/enroll` `{token, spki, pop, days?}` | Verify token HMAC+expiry, verify PoP (ECDSA over the token bytes with the presented SPKI), issue a leaf valid for `days` ∈ {7, 30, 90, 365} (anything else → `CA_CERT_DAYS`, capped at `CA_CERT_MAX_DAYS`) → `{cert, chain, identity, notAfter}` (PEM) |

Notes:

- **CSR-less enrollment.** The client sends its raw SPKI plus a
  proof-of-possession signature over the enrollment token instead of a
  PKCS#10 CSR — same soundness, no ASN.1 CSR parser server-side.
- **Stateless.** Enrollment tokens are HMAC-signed values (email, provider,
  exp) — no session store. Replay within the 10-minute window re-issues a
  cert for the same identity+key, which is harmless.
- **Issuance log.** Every issued cert is logged (JSON to stdout → Vercel
  logs; optional `CA_LOG_WEBHOOK` POST). A public append-only transparency
  log is the Tier-3 upgrade.
- **Dev provider.** With `CA_DEV_FAKE_PROVIDER=1` (never set in prod), a
  `dev` provider authenticates instantly as `dev@example.com` so the full
  enroll→sign→verify loop is testable with zero OAuth secrets.

### Environment variables (Vercel project `bt` → also `.env` for local)

| Var | What |
|---|---|
| `CA_ROOT_KEY_PEM` | PKCS8 PEM of the root private key (**the only secret that matters**) |
| `CA_ROOT_CERT_PEM` | PEM of the root cert (public, also committed) |
| `CA_SERVICE_SECRET` | Random 32+ bytes; HMAC for state cookies + enrollment tokens |
| `CA_CERT_DAYS` | Default leaf lifetime in days when the client doesn't choose (default `30`) |
| `CA_CERT_MAX_DAYS` | Hard cap on any requested lifetime (default `365`) |
| `CA_ALLOWED_ORIGINS` | Comma list, e.g. `https://lolly.tools,http://localhost:5173` |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub OAuth app |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth client (web) |
| `SUSE_ISSUER` | `https://id.suse.com` (Okta OIDC discovery) |
| `SUSE_CLIENT_ID` / `SUSE_CLIENT_SECRET` | id.suse.com OIDC app |
| `RESEND_API_KEY` / `EMAIL_FROM` | Email magic links |
| `CA_DEV_FAKE_PROVIDER` | `1` only in local dev |

## Web shell

- `shells/web/src/bridge/identity.ts` — the identity manager:
  `status()`, `enroll(provider)` (popup + postMessage + PoP + cert cache),
  `signer()` (null unless a valid cert is cached), `forget()`. Keypair and
  cert live in a dedicated IndexedDB store; CryptoKey objects structured-clone
  into IDB natively.
- Export path passes `signer` into `embedC2pa*` when available — one line at
  the existing call site; ephemeral fallback is the engine default.
- `/profile` gains a **Content Credentials** section: enrollment status
  ("Signing as andy@… via GitHub — renews Jul 10"), four provider buttons,
  and Forget this device.
- `/valid` (and `/verify`) passes the pinned root as `trustAnchors` and
  renders the trusted state: shield goes green-with-identity, facts show the
  verified email + issuer.
- The pinned root lives in `shells/web/src/ca-root.ts` (a PEM string; empty
  placeholder until the real root is generated — everything degrades to
  today's behaviour while empty) and is also served at
  `https://lolly.tools/api/ca/root.pem`.

## Operator runbook (one-time setup — the parts only you can do)

1. **Generate the root** (anywhere, then guard the key):

   ```bash
   node services/ca/scripts/gen-root.mjs   # writes lolly-root-cert.pem + lolly-root-key.pem
   ```

   Commit/paste `lolly-root-cert.pem` into `shells/web/src/ca-root.ts`.
   **Never commit the key.** Store it in a password manager, then:

   ```bash
   npx vercel env add CA_ROOT_KEY_PEM production   # paste the key PEM
   npx vercel env add CA_ROOT_CERT_PEM production
   npx vercel env add CA_SERVICE_SECRET production # e.g. `openssl rand -hex 32`
   npx vercel env add CA_ALLOWED_ORIGINS production # https://lolly.tools
   ```

2. **Register OIDC apps** (callback URL for all three:
   `https://lolly.tools/api/ca/callback/<provider>`; add the
   `http://localhost:8787/api/ca/callback/<provider>` variant for dev):
   - **GitHub** → Settings → Developer settings → OAuth Apps → New.
     Scope used: `user:email`. Set `GITHUB_CLIENT_ID`/`SECRET`.
   - **Google** → console.cloud.google.com → Credentials → OAuth client
     (Web). Scopes: `openid email`. Set `GOOGLE_CLIENT_ID`/`SECRET`.
   - **id.suse.com (Okta)** → your Okta admin → Applications → Create App
     Integration → OIDC Web App. Scopes: `openid email`. Set `SUSE_ISSUER`
     (the issuer from the app's OIDC discovery), `SUSE_CLIENT_ID`/`SECRET`.
   - **Email** → resend.com API key + verified sender → `RESEND_API_KEY`,
     `EMAIL_FROM`.

3. **Set the env vars** on the `bt` project (all `production`, and add a
   `preview` copy so preview deploys can exercise it):

   ```bash
   npx vercel env add CA_ROOT_KEY_PEM production      # paste the key PEM
   npx vercel env add CA_ROOT_CERT_PEM production
   npx vercel env add CA_SERVICE_SECRET production    # openssl rand -hex 32
   npx vercel env add CA_ALLOWED_ORIGINS production    # https://lolly.tools
   # …plus the provider creds from step 2. Do NOT set CA_DEV_FAKE_PROVIDER in prod.
   ```

4. **Deploy.** The CA lives at repo-root `api/ca/[...path].js` (a Vercel
   function) importing `services/ca/` + `engine/src/x509.ts`; both are
   committed, and Vercel compiles `api/` independently of the Vite build. The
   `vercel.json` catch-all `"/(.*)" → /index.html` is an *afterFiles* rewrite,
   so `/api/ca/*` resolves to the function first — it is **not** swallowed by
   the SPA fallback. Two ways to ship:
   - **Git push** (Andy's default — previews are committed, so a push builds
     the same output): the function ships automatically. Just push.
   - **Prebuilt** — use `npx vercel build` (NOT the old hand-staged
     `cp dist .vercel/output/static` recipe, which produces **no**
     `functions/` dir and would drop the CA):

     ```bash
     npx vercel build --prod            # build:web + compiles api/ca into .vercel/output/functions
     npx vercel deploy --prebuilt --prod
     ```

   Either way, confirm it's live: `curl https://lolly.tools/api/ca/health`
   should return JSON (`{"ok":true,…}`), **not** the SPA's HTML. If it returns
   HTML, the function wasn't compiled — check the project's **Root Directory**
   is the repo root (so repo-root `api/` is in scope), not `shells/web`.

5. **Local dev** (no secrets needed thanks to the dev provider):

   ```bash
   CA_DEV_FAKE_PROVIDER=1 CA_SERVICE_SECRET=dev node services/ca/server.mjs &
   npm run dev:web        # Vite proxies /api/ca → :8787
   ```

## Threat model (abridged)

- **Repo is public** → contains no secrets; root cert is public by design.
- **Device key theft** → key is non-extractable; even XSS can at worst *use*
  it while the page is open, bounded by the cert lifetime and per-identity
  revocation at the CA.
- **CA key theft** → catastrophic for trust, as with any CA; mitigations:
  env-only storage now, KMS/HSM at Tier 4, short leaf lifetimes limit the
  blast radius of a missed revocation.
- **Fork abuse** → forks can request certs only through our OIDC-gated,
  origin-allowlisted, rate-limitable endpoint, and only for identities they
  actually control.
- **Token replay** → 10-minute expiry + PoP binding to a specific keypair.

## Roadmap

1. RFC 3161 timestamp countersignature in the same enroll/export round trip
   → `signingCredential.expired` becomes provable-time trusted.
2. Public append-only issuance transparency log (Rekor-shaped).
3. CLI signer support (`--c2pa-cert`/`--c2pa-key`) for CI pipelines.
4. C2PA conformance program: audited KMS custody → the official trust list →
   green in Adobe Verify et al.

### SSO — two distinct jobs, one identity provider

id.suse.com (Keycloak) shows up in **two** places that must not be conflated.
Both reuse the same OIDC client, but they answer different questions. Detailed
implementation plans (local, under `plans/`): **`plans/sso-signing.md`** and
**`plans/sso-tool-access.md`** — the summaries below are the roadmap view.

5. **Complete SUSE SSO for *signing*** (deepens the identity in this doc —
   "who signed"; full plan → `plans/sso-signing.md`). Today SUSE is one
   enrolment provider among several and each enrolment is a fresh popup. Bring
   it to true SSO:
   - **Session reuse / silent renewal.** While the id.suse.com session is
     live, a cert nearing expiry re-issues in the background via OIDC
     `prompt=none` — no weekly popup, no interaction. This is what makes short
     (7-day) certs painless and is the natural companion to Tier 3 timestamps.
   - **Org / domain enforcement.** Optional issuance policy
     (`CA_REQUIRE_ISSUER=suse`, `CA_ALLOWED_EMAIL_DOMAINS=suse.com`) so a SUSE
     deployment mints certs only for SUSE identities, and SUSE becomes the
     default IdP (other providers opt-in).
   - **Richer provenance identity.** Carry the SSO group / role / org-unit into
     the certificate (an OU or SAN otherName) so a credential can attest
     "signed by a SUSE employee," not just an email — gated on the realm
     releasing those claims. Feeds the CreativeWork author assertion.

6. **SSO for *tool access*** (a NEW authorization axis — "who may use the
   app," separate from signing; full plan → `plans/sso-tool-access.md`). Gate
   who can open the app, specific tools, or gated features behind SUSE SSO:
   - **Shell-level auth guard, never the engine.** The engine stays
     platform-agnostic; access control is a host/shell concern. The web shell
     gains an auth gate in front of the gallery/tool routes, configurable as
     fully-gated, or per-tool / per-capability (a `tool.json` `access` policy
     the host enforces, mirroring how `capabilities` gate today).
   - **One IdP, two purposes.** Reuse the same id.suse.com/Keycloak OIDC the CA
     uses, so a signed-in user is already enrol-ready for signing; sign-in for
     *access* and identity for *signing* share a session.
   - **Session handling.** A lightweight `/api/auth/*` companion to `/api/ca/*`
     on the same Vercel project (httpOnly session cookie, PKCE, refresh),
     with role/group-based tool visibility.
   - **OSS-safe by default.** Access-gating is deployment policy: **off** in the
     open-source build so public lolly.tools stays open, enabled only by
     configuration so a SUSE-internal deployment can lock it down. Keep it out
     of `engine/` and behind a shell config flag so the open-sourcing split
     stays clean.
