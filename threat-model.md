# Threat Model & Trust Boundaries

The security reviewer's entry point. This page is an **index**, not fresh
analysis: nearly every fact below is already written down in the header comment
of the module that implements it, and each row points at the file and line where
you can read it for yourself. If a claim here and a module header disagree, the
module is right and this page is a bug.

Companion pages: [Security & Verification](/info/security.html)
(`docs/security-verification.md`) for the cryptographic standards and their test
coverage, [Server Surface](/info/server-surface.html) for the complete inventory
of anything that runs off-device, [Privacy Policy](/info/privacy.html) for what
data exists and where, and `docs/parser-inventory.md` for the file-format parsers
that read attacker-controlled bytes.

Line numbers here are indicative, not exact. The engine is now `1.103.0`
(`engine/src/version.ts:16`), and the citations below were captured against an
earlier engine, so many have drifted. Grep the quoted identifier rather than
trusting the number.

## What Lolly is, security-wise

**Rendering happens on the device.** The engine has no network calls at all, and
the shells need none at render or export time, with two declared exceptions: a
tool's allowlisted `host.net` fetch (the boundary row below) and the URL-capture
tool loading the address you give it. There is no upload step in the
normal path: opening a tool, editing inputs, previewing, exporting and verifying
a file all complete locally. Two optional server components exist (an MCP
endpoint and a Content Credentials certificate authority) and both are listed,
with their data handling, in [Server Surface](/info/server-surface.html).

**Tools are data, not bundled code.** A tool is a `tool.json` manifest, a
Handlebars `template.html`, optional `styles.css`, and an optional `hooks.js`,
synced to the client from a catalogue. New tools ship without an app update.
That is the product's central design choice and also its central security
consequence.

**Therefore the catalogue origin is the trust boundary.** Whoever controls the
bytes served under `/tools/` and `/catalog/` controls code that runs in the
user's page. There is no sandbox between a tool's `hooks.js` and the shell it
runs in. Lolly's answer is provenance rather than confinement: a deployment can
sign its catalogue at build time and pin the public key in the shell, and the
loader then refuses any tool file whose bytes do not match the signed digest
before the runtime compiles it
(`engine/src/catalog-integrity.ts`, plus `assertEnvelopeTrusted` at
`engine/src/loader.ts:200` and `assertFileIntegrity` at `:218`). That
enforcement is **off by default**, because no key ships in this repository
(`shells/web/src/catalog/integrity.ts:35`).

**There is no server-side retention to attack.** The reference deployment keeps
no copy of user content, no accounts for ordinary use, and no analytics. The one
piece of personal data that touches a server is an email address during optional
Content Credentials enrolment, held in request memory only
(`docs/privacy.md`, "Legal bases, retention and recipients").

## Trust boundaries

| Boundary | Entry point | Enforcement point | Test that proves it | Accepted residual risk |
|---|---|---|---|---|
| **Tool `hooks.js` → the host realm** | `engine/src/loader.ts` fetches `hooks.js` as text into `LoadedTool.hooksSource` (`:81`) | `getHookFactory` compiles it with `new Function('host', …)` at `engine/src/runtime.ts:1042`. The header at `:1030`–`:1038` states plainly that this is closure-scope injection and **not** isolation | `tests/runtime-hooks.test.ts` (the time-box contract) | Hooks execute in the realm's global scope, so in a browser shell they can reach `window`, `document` and `fetch` directly, and some shipping tools rely on it. The CSP `connect-src` allowlist limits where such a `fetch` can send data (the CSP boundary row below), but it cannot prevent the hook from running. `host.*` is the supported portable surface, not an enforced perimeter. Third-party or untrusted tool code is not safe to run. |
| **Hook runtime cost** | Any lifecycle hook invocation, via `runHook` (`engine/src/runtime.ts:280`) | Per-hook budgets in `HOOK_BUDGET_MS` (`engine/src/runtime.ts:116`): `onInit` 5000 ms, `onInput` 2000 ms, `beforeExport` 5000 ms, `afterExport` 5000 ms, `exportFile` 10000 ms | `tests/runtime-hooks.test.ts:61`, `:92` | The budget races an **async** result: on overrun no patch is applied and the late resolution is discarded, but the hook keeps running. A **synchronous** runaway cannot be preempted in-realm; it is only measured and warned after the fact, and its patch still applies. `onFrame` and `onLevel` are deliberately unbudgeted and are throttled by dropping overlapping frames instead. |
| **Tool ↔ engine version skew** | A manifest's `engineVersion` range, synced ahead of the binary | `satisfiesRange(ENGINE_VERSION, manifest.engineVersion)` at `engine/src/loader.ts:282` refuses the tool before its template or hooks are fetched | `tests/semver-range.test.ts` | A range comparator bug fails the wrong way in either direction. It is dependency-free code, so it is the thing under test rather than a vendored library. |
| **Catalogue origin → the loader** | Tool files fetched from the deployment's `/tools/` and `/catalog/` paths | `assertEnvelopeTrusted` (`engine/src/loader.ts:200`) and `assertFileIntegrity` (`:218`) check each fetched file against the signed envelope described in `engine/src/catalog-integrity.ts`. A signed-but-missing file is fatal, so a stripped `hooks.js` cannot silently mount a hook-less tool | `tests/catalog-integrity.test.ts` (tamper, strip, unsigned-extra and module-hook paths) | Inert unless the build pins `VITE_CATALOG_PUBLIC_KEY_JWK` (`shells/web/src/catalog/integrity.ts:35`). Unsigned catalogues keep working with a one-time console warning. A deployment that never signs has no integrity gate, only TLS and origin. |
| **URL query params → input values** | A shared link, a QR code, an embed, or CLI `--foo=bar` argv, parsed by `parseUrlState` in `engine/src/url-mode.ts` | The `RESERVED` set (`engine/src/url-mode.ts:246`) separates engine params from tool inputs. The parse loop skips reserved keys at `:374`, and every value is coerced against the declared input model rather than trusted | `tests/engine.test.ts:143` asserts `RESERVED` against an inline copy of the documented list | Query params are fully attacker-controlled. Any input is expressible in a URL by design, so a link can put a tool into any state the sidebar could. That is a feature. Treat a pasted Lolly link as untrusted content. |
| **Packed / encrypted URL state** | `z` (`PACK_PARAM`, `engine/src/url-pack.ts:48`) and `zx` (`ENC_PARAM`, `:189`) tokens on an untrusted link | `MAX_TOKEN` = 64 KiB rejects an absurd token before decoding and `MAX_UNPACKED` = 256 KiB aborts inflation (`engine/src/url-pack.ts:58`–`:59`). Both caps are applied symmetrically on the encrypted path (`:228`, `:244`). `zx` is AES-256-GCM under PBKDF2-SHA256 at `PBKDF2_ITERATIONS` = 210 000 (`:191`), stored per token so it can rise | `tests/url-pack.test.ts` | DEFLATE expands roughly 1000×, so the caps are the whole defence against a decompression bomb. They are numeric constants, not adaptive. A `zx` link's strength is the user's password. |
| **`host.net` allowlisted fetch** | A tool declaring `capabilities: ["network"]` plus a `network.allowlist` block (`schemas/tool.schema.json:226`, `:234`) | `createNetAPI` in `packages/node-shell/src/net.ts:18` (re-exported by `shells/web/src/bridge/net.ts`) rejects any non-matching URL before I/O (`:21`) and caps the response body at `MAX_RESPONSE_BYTES` = 64 MiB via a counting stream, not a trusted `Content-Length` (`:16`, `:33`). The wildcard form must follow a path separator (`matches`, `:50`; schema pattern at `:247`) so a prefix cannot bleed into a lookalike host. The web shell's boot host gets a permanently **empty** allowlist and a per-mount clone carries the scoped one (`shells/web/src/bridge/index.ts:145`–`:150`) | `tests/net-allowlist.test.ts` | **Enforcement is per shell, not in the engine.** Every shell builds host.net from the one shared module, so they agree today, but nothing structurally stops a new shell from wiring an unscoped `fetch` onto `host.net`. That is a silent-omission risk: the tool still works, the boundary is simply gone. A new shell must be reviewed against this row explicitly. |
| **Untrusted file bytes → format parsers** | Any user-supplied file: drag-and-drop on `/verify`, an `asset` or `file` input, a PDF or PPTX ingest | Per-parser bounds checks. The read-side DER/ASN.1 walker is the pattern to copy (`engine/src/der-read.ts`): every multi-byte length head is bounds-checked before its bytes are read, because an out-of-range `Uint8Array` read yields `undefined`, NaN-poisons the length and silently defeats a later overrun guard | `tests/fuzz-regression.test.ts` replays the saved crashers in `tests/fuzz/regressions/` (8 today) and runs a seeded sweep over the 22 targets in `tests/fuzz/targets.ts`: `c2pa-verify`, `cbor`, `media-sniff`, `pdf-map`, `x509`, `file-metadata`, `strip-metadata`, `video-meta`, `data-import`, `pptx-read`, `pptx-patch`, `pptx-bridge`, `icc`, `der-read`, `c2pa-extract`, `c2pa-containers`, `url-pack`, `wav`, `depth-hint`, `lut-parse`, `psd`, `xcf` | The fuzz sweep asserts only that a parser returns or throws promptly and within bounded allocation. It does not prove correctness, and parsers outside the 22 targets have unit coverage but no fuzz coverage. See `docs/parser-inventory.md` for the full parser list and each one's status. |
| **Template rendering → the page** | A tool's `template.html`, hydrated with input values by `hydrate` (`engine/src/template.ts:351`) | Handlebars, logic-less by design: `{{x}}` HTML-escapes, `{{{x}}}` is opt-in raw. No arbitrary JS in a template means no per-template XSS audit (`engine/src/template.ts:2`–`:15`). Helpers treat every argument as `unknown` and narrow immediately | `tests/engine.test.ts:595` (a `<script>` value comes out as `&lt;script&gt;`), `:636` (attribute-context escaping in the `media` helper) | `{{{x}}}` and the `markdown` helper emit raw HTML on purpose. A tool author who pipes a user input through triple-stache has opted out of escaping, and only tool review catches that. Tool review, not the engine, is the control. |
| **Crypto and signing** | Password and file inputs on the lock/sign paths; certificate and signature bytes on the verify paths | Primitives are delegated to WebCrypto: `globalThis.crypto.subtle` only, in `engine/src/pdf-crypto-r6.ts:32`, `engine/src/zip-crypto.ts:29`, `engine/src/x509.ts`, `engine/src/seal.ts`, `engine/src/c2pa.ts`. Deliberately hand-rolled, with no npm dependency: deterministic definite-length CBOR, the JUMBF box writer, COSE_Sign1 ES256 with a detached payload, minimal X.509 v3 certificates (`engine/src/c2pa.ts:16`–`:28`), the WinZip AES-CTR little-endian counter and PKWARE ZipCrypto keystream (`engine/src/zip-crypto.ts:16`–`:22`), and the DER walker. Randomness is **caller-supplied**, never generated inside these modules: `pdf-crypto-r6` takes the file key, four salts, the Perms tail and every per-object IV as parameters (`:9`–`:12`), and `zip-crypto` takes an injected `opts.rng` (`:13`) so both round-trip a fixed byte vector | `tests/pdf-crypto-r6.test.ts` and `tests/zip-crypto.test.ts` (both decrypt independently with `node:crypto`), `tests/c2pa*.test.ts` including `tests/c2pa-c2patool-conformance.test.ts`, `tests/x509.test.ts` for the certificate reader plus its issuance path end to end in `tests/ca-service.test.ts`. See [Security & Verification](/info/security.html) for the full matrix | There is **no `node:crypto` import anywhere in `engine/src`** (the only match is the word inside a comment at `engine/src/pdf-crypto-r6.ts:16`), so a shell that injects a weak `rng` or a bad key weakens the crypto with no engine-side check. The C2PA signing certificate is ephemeral and self-signed, so validators correctly report the signer as unknown: the container is what must be right, not the chain (`engine/src/c2pa.ts:12`). |
| **Service worker and PWA cache** | `shells/web/public/sw.js`, controlling every same-origin request once installed | Strategy is chosen per request, documented at `sw.js:1`–`:46`: navigations are network-first with a cached-shell fallback. Content-hashed build assets are cache-first, so a cached copy can never be stale. `/tools/` files are network-first with a timeout race. `/catalog/previews/` is stale-while-revalidate. The catalogue **index** files and the `/info` docs site bypass the worker entirely. Only a navigation the SPA actually owns may be written to the shell cache key — `isShellNavigation` (`:283`) rejects any path whose last segment is a filename, so a real static document cannot displace the app shell. Generation cache is `CACHE = 'lolly-v14'` (`:49`). Pinned offline tools live in the separate unversioned `PIN_CACHE = 'lolly-pins'` (`:57`), which `activate` never deletes (`:148`) | `shells/web/src/sw.test.ts` evaluates the real `sw.js` in a `node:vm` worker sandbox and drives navigations through the shipping fetch handler: the shell key survives an `/info` visit, `/info` is passed through rather than served, a filename path is never stored as the shell, and `activate` drops the previous generation | A service worker is a persistent same-origin cache an attacker would love to poison, and the pin bucket deliberately outlives cache-generation bumps. Its integrity rests entirely on the origin's TLS and on the fact that hashed asset filenames are immutable. `CACHE` must be bumped by hand on any change to `sw.js`. Self-poisoning was real and shipped: until v12 every navigation was written to the shell key, so reading an `/info` page replaced the cached app with that page and the next offline load served documentation instead of the app. `/info` is therefore reachable only online — making the docs work offline needs its own per-URL bucket, never the shell entry. |
| **Locale files → the shell DOM** | Translation JSON under `shells/web/src/locales/` (26+ locales), returned by `t()` (`shells/web/src/i18n.ts`) | Catalog strings intentionally contain markup (e.g. `'Up to <strong>{n}</strong> can be freed here'`, `views/profile.ts`), so the catalog value reaches `innerHTML` raw and **cannot be escaped without breaking that**. The control is review: **a locale PR is a code PR** — translation content executes in the shell exactly like shell source, and must be reviewed by a maintainer, never merged on trust. `t()` escapes interpolated *params* by default (`tRaw` is the audited opt-out), so only the reviewed catalog string itself is raw | `shells/web/src/i18n.test.ts` pins param escaping. There is no automated constraint on catalog markup yet | A malicious or compromised translation contribution is a stored XSS in the shell. A build-time validator constraining catalog strings to a small tag allowlist (`<strong>`, `<em>`, `<br>`, no attributes, no `<script>`/`href`/`url()`) is the planned hardening (SUSE assessment 2026-08, S6). |
| **Shell origin → browser-extension capture** | Any script executing on a Lolly origin can `window.postMessage` a `lolly-capture/page` message. `shells/chrome-extension/content.js` relays it to the background service worker, which holds `debugger` + `tabs` permissions and `<all_urls>` host access | Content scripts are scoped to `localhost:5173`, `lolly.tools`, `*.lolly.tools` in `manifest.json` (never `<all_urls>`), and the relay checks `event.source === window` plus an explicit `event.origin` allowlist mirroring those matches (`content.js`) | No automated test today. The boundary spans three repositories (web shell, extension, parent) and is invisible to any single-repo review — that is exactly why this row exists | Any XSS in the web shell escalates from "script in the Lolly origin" to DevTools-Protocol capture of any URL, including pages where the user is signed in elsewhere. This multiplies the severity of every shell-XSS row above. Treat shell sinks accordingly. A per-session handshake nonce for the relay is the planned hardening. |
| **Script in the origin → network exfiltration** | Any script that runs in a Lolly origin, a tool hook or an injected shell XSS, can call `fetch`, open a WebSocket, or append an `<iframe>` | The `Content-Security-Policy` header served on every response. `connect-src` names a fixed host set (`'self'`, `blob:`, `data:`, the two Google Fonts hosts, `api.somafm.com`, `registry.color.org`, `www.color.org`, and the two open-meteo hosts), so a script that runs still cannot post data to a host outside it. `frame-src`, `child-src` and `worker-src` carry no scheme-wide `https:` grant, so the `<iframe src>` exfiltration path is closed too. `object-src` is `'none'` and `base-uri` is `'none'`. The policy is defined identically in `vercel.json`, `shells/web/vercel.json`, and the `$lolly_csp` map in `deploy/docker/nginx.conf:31` | `tests/security-headers.test.ts` pins the three copies together, checks `connect-src` is neither absent nor `*`, and rejects a scheme-wide `https:` on any framing directive | This contains an executing script. It does not prevent the script from running: `script-src` keeps `'unsafe-eval'` because tool hooks use `new Function`. The CSP is defence-in-depth over the hooks boundary above, not a replacement for Worker isolation. A deployment that terminates TLS at its own reverse proxy and strips these headers loses the containment. |
| **MCP endpoint (server)** | `POST /api/mcp` and the OAuth 2.1 endpoints in `services/mcp/src/oauth.ts:22`–`:28`, plus the unauthenticated hot-link render route `GET /tool/<id>.<ext>` | Every artefact is an HMAC-signed value because Vercel functions share no store: `client_id` encodes its redirect URIs, the auth code encodes the PKCE challenge and target, tokens encode scope and expiry (`services/mcp/src/oauth.ts:6`–`:13`). TTLs: access 3600 s, refresh 30 d, code 60 s (`:41`–`:43`). The consent gate is the operator's `LOLLY_MCP_TOKEN` passphrase (`:15`–`:20`) | `services/mcp/test/oauth.test.ts` (full flow plus the refusal paths: bad passphrase, PKCE mismatch, expired code), `services/mcp/test/render-get.test.ts` | Authorisation is per-deployment-passphrase, not per-user identity. Anyone holding the shared token can connect a client. The render route is public by design and serves public catalogue tools only, with no Content Credentials. Disable it with `LOLLY_DISABLE_RENDER_GET=1`. See [Server Surface](/info/server-surface.html). |
| **CA service (server)** | `GET /api/ca/auth/:provider`, `GET /api/ca/callback/:provider`, `POST /api/ca/email/start`, `POST /api/ca/enroll` (`services/ca/handler.mjs:13`–`:16`) | OIDC state is a signed cookie with a 600 s TTL and a domain-separation tag (`STATE_TTL_SECONDS` and `STATE_TYP`, `handler.mjs:27`–`:30`). Bodies are capped at 64 KiB (`BODY_CAP`, `:29`). Origins are allowlisted. Enrolment requires proof-of-possession of the key being certified. Enrolment tokens are HMAC-signed with `TOKEN_TTL_SECONDS = 600` (`services/ca/lib/tokens.mjs:51`). Error logging is message-only, never the error object, because a stack can carry an enrolment URL (`handler.mjs:350`–`:352`) | `tests/ca-service.test.ts` (token scheme, proof-of-possession, the full issue path with an in-test root, the origin allowlist, the dev-provider gate) | Rate limiting is best-effort and **per-instance only**: a warm-instance map gives a 60 s per-address magic-link cooldown and 5 sends per IP per 60 s window (`handler.mjs:31`–`:60`), which resets on cold start and is not shared between serverless instances. Durable cross-instance limiting needs a shared KV or edge limiter and is tracked as a follow-up. See [Content Credentials Identity](/info/content-credentials-identity.html). |

## Residual risk register

Each of these is a known, accepted design choice. They are listed so a reviewer
can confirm we already know, and stop escalating them as findings.

| Risk | Where disclosed today | Why accepted | Planned mitigation |
|---|---|---|---|
| Tool hooks are not sandboxed. `new Function('host', …)` injects the bridge into closure scope but runs in the realm's globals, so a hook in a browser shell can reach `window`, `document` and `fetch`. | `engine/src/runtime.ts:1030`–`:1038`; `engine/src/runtime.ts:14`–`:18`; `CLAUDE.md`, "The runtime lifecycle" | Some shipping tools legitimately rely on realm access, and every tool in the catalogue is first-party reviewed content served from the deployment's own origin. Confinement would break tools without changing who can publish them. | The `Content-Security-Policy` shipped on every response already contains part of this. Its `connect-src` allowlist stops an executing hook posting data to a host outside the allowlist (`deploy/docker/nginx.conf:31`, `tests/security-headers.test.ts`). The hook still runs, so this is containment, not a sandbox. The full fix is Worker isolation. Until it ships, running third-party or untrusted tool code is out of scope, and the catalogue-signing path (`engine/src/catalog-integrity.ts`) is the control a deployment can turn on today. |
| A synchronous runaway hook cannot be preempted. | `engine/src/runtime.ts:102`–`:114` (the `HOOK_BUDGET_MS` doc comment); `tests/runtime-hooks.test.ts:4`–`:9` | There is no in-realm preemption in JavaScript. The overrun is measured and warned, and the blast radius is the user's own tab. | Follows Worker isolation: an off-thread hook can be terminated. |
| MCP OAuth authorization codes are not single-use. | `services/mcp/src/oauth.ts:6`–`:13` ("an auth code can't be hard one-time without a store") | Vercel functions share no memory or disk, so there is no code store to consume against. The standard mitigation is applied instead: a 60 s TTL (`CODE_TTL`, `:43`) plus mandatory PKCE. | A durable store, or an identity-bound flow, if the endpoint moves off stateless serverless. |
| CA enrolment tokens are stateless HMAC and not single-use. | `services/ca/handler.mjs:350`–`:352`, verbatim: "a short-lived (10-minute) stateless HMAC token - time-bounded, not single-use" | Same statelessness constraint. The token is bound to an OIDC-verified email and redeemable only with proof-of-possession of the enrolling key, and it issues a short-lived leaf certificate, not a durable credential. | A durable store, alongside the same change for the MCP codes. |
| The *Standard* zip lock is PKWARE ZipCrypto, which is weak against known-plaintext attack. | `engine/src/zip-crypto.ts:5`–`:8`; the export UI names the actual cipher; [Security & Verification](/info/security.html) labels the Standard tiers as deterrents | Deliberate compatibility tier: it opens in any unzip tool including Windows Explorer's built-in extract. The *Strong* tier (WinZip AE-2, AES-256) is present and one click away. | None planned. The fix is user-facing honesty, not a cipher change: keep both tiers named in the UI so nobody mistakes Standard for confidentiality. |
| The Imprint pixel watermark is security-through-obscurity. The chip key ships in public source and in the on-device detector, so a motivated adversary can subtract the mark cleanly. | `engine/src/pixel-watermark.ts:20`–`:25`, in those words | It is a complement to C2PA, never a replacement: honest cover against casual re-encoding and screenshotting, for the case where the credential has already been stripped. When a credential is intact, that is what is trusted. | None. A keyed scheme would need a key registry, which contradicts on-device-only verification. |
| LSB steganalysis has stated detection limits: LSB *matching* (±1) and low-rate embedding evade it, and a smooth synthetic gradient can false-positive. | `engine/src/steganalysis.ts:12`–`:18`, stated up front | The chi-square attack catches the naive-but-common case, which is what appears in the wild. Callers gate it to lossless PNG-family formats and surface it as an amber heuristic, never a verdict. | None. The mitigation is the presentation: it must never harden into a pass/fail claim. |
| Catalogue integrity enforcement is off unless a deployment pins a key. | `shells/web/src/catalog/integrity.ts:1`–`:15`; `engine/src/catalog-integrity.ts:29`–`:33` | No key can ship in a public repository, and signing is a per-deployment decision made where the catalogue is actually built. Unsigned catalogues must keep working for development. | Documented as an operator step. A reviewer assessing a specific deployment should check whether `VITE_CATALOG_PUBLIC_KEY_JWK` is set in that build. |

## What is not a boundary

These read like gaps and are not. Escalating them is a false positive.

- **`host.*` is not a sandbox.** It is a *portability* contract: the API that
  lets one tool run unchanged in a browser, in Tauri and in the CLI. It was
  never a confinement perimeter, and the module header says so.
- **URL parameters reaching any input is intended.** URL mode is first-class and
  the CLI is the same mechanism over argv, which is what keeps GUI and CLI from
  drifting. A link that sets a tool's every field is the feature working.
- **The hot-link render route being unauthenticated is intended.** It renders
  public catalogue tools from public catalogue data, emits no Content
  Credentials, and can be switched off with one environment variable.
- **`{{{x}}}` emitting raw HTML is intended.** Triple-stache is the documented
  opt-out from escaping, used by the `markdown` helper and by tools that build
  SVG strings in hooks. The escaping default is `{{x}}`.
- **The C2PA signer being self-signed and reported as untrusted is intended.**
  No real credential leaves the device, so what must be correct is the container
  and its byte binding, not the certificate chain. Verified identity is the
  separate, opt-in CA path.
- **`localStorage` holding interface preferences is intended.** Tool state never
  goes there. It goes through `host.state`, which resolves to IndexedDB, the
  filesystem or memory depending on the shell. `localStorage` carries theme,
  language, sizing and similar boot-time preferences only.
- **Biome lint findings are not security findings.** Linting is advisory and not
  a CI gate, and the baseline carries thousands of pre-existing entries. A clean
  lint run is not a precondition for anything.

## Verify these claims yourself

Nothing here needs to be taken on trust. Everything runs from a clone.

```bash
git submodule update --init --recursive   # BEFORE npm install; workspaces need every package.json
npm install

npm test                       # the whole suite: tests/, packages/core/test/, shells/web/src/**, services/mcp/test/
node --test "tests/**/*.test.ts"   # just the repo-root engine/contract suite (quote the glob)

# the boundary tests named above, individually
node --test tests/runtime-hooks.test.ts tests/net-allowlist.test.ts \
            tests/catalog-integrity.test.ts tests/semver-range.test.ts \
            tests/url-pack.test.ts tests/zip-crypto.test.ts tests/pdf-crypto-r6.test.ts

# untrusted-input fuzzing
node --test tests/fuzz-regression.test.ts     # replays tests/fuzz/regressions/ + a seeded sweep, ~seconds
FUZZ_ITERS=50000 node tests/fuzz/run.ts       # the standalone discovery soak
```

The fuzz harness lives in `tests/fuzz/` (`prng.ts`, `mutate.ts`, `targets.ts`,
saved crashers in `regressions/`) and is shared between the in-suite regression
test and the soak runner, so both exercise the same code path. `FUZZ_ITERS`
sets the length (300 in the suite, 2500 for a bare `run.ts`). `FUZZ_SCRATCH` and
`FUZZ_KEEP` control where in-flight inputs are written and whether they survive.
See `tests/README.md` for the layout and the gated tests.

CI runs eight jobs (`.github/workflows/ci.yml`): `test`, `typecheck`,
`validate-catalog`, `smoke` (render every tool headlessly), `build` (production
build plus a boot-path JS bundle budget), `api-bundles` (rebuilds the generated
`api/mcp` and `api/ca` esbuild bundles and fails on any drift), `render-action`
(a self-test of the composite render action) and `audit` (`npm audit`, high and
critical). Lint is not among them, by design.

## Reporting

Vulnerability reporting, safe harbour and scope are in
[`SECURITY.md`](https://github.com/lolly-tools/lolly/blob/main/SECURITY.md) at
the repository root. Report privately to
[fitzy+security@suse.com](mailto:fitzy+security@suse.com) rather than opening a
public issue.
