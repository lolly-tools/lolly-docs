# Content Credentials identity - verified signing for on-device C2PA

> **In plain terms.** Every image, PDF, or video you export from Lolly can carry a
> **Content Credential** - a signed [C2PA](https://c2pa.org) manifest, created
> entirely on your device - that proves the file hasn't been altered since it left
> Lolly, and (once you enrol an identity) records *who* signed it. Anyone can check
> it offline: hit **Verify** in the app (the shield in the bottom bar), drop in a
> file, and Lolly reports the result on-device. **Nothing is uploaded** - not the
> file, not the check. This page is the user-facing story; the [engineering &
> operator guide](/info/content-credentials-engineering.html) covers how it's built
> and how to run the CA service.

## What you get

- **Tamper-evidence, on by default.** The credential is a cryptographic seal over
  the exported bytes. Change a pixel and the seal breaks - the verifier says so.
- **Verifiable identity, when you want it.** Enrol once (SUSE, GitHub, Google, or
  an email link) and your exports are signed by a short-lived certificate that
  names *you*. Verifiers pinning the Lolly root then report **Verified - signed by
  \<your email\>** instead of an anonymous signer. Enrolment is optional; skip it
  and you still get tamper-evidence from an anonymous on-device signer.
- **Honest about its limits.** A credential is never inflated or silently
  downgraded. If a certificate has expired, you get a distinct *expired* state
  ("the bytes still match, but the short-lived signing certificate has lapsed"),
  never a false green and never a misleading red. See the verdicts below.
- **Private and offline.** The signing key is generated on your device and is
  **non-extractable** - even Lolly's own code can't read it. Signing happens
  locally; only certificate *issuance* ever touches the network, and only when you
  choose to enrol.

## Verifying a file

The **Verify** tab (canonical `/verify`; the aliases `/valid` and `/v` redirect to
it) checks any file's credential entirely on-device. It reads the whole C2PA
manifest store - Lolly's own credentials **and** credentials written by other C2PA
tools (it reads both C2PA 1.x and 2.x claims, so files from cameras, Adobe apps,
Google's Gemini, and other generators verify too) - and headlines the result with
one honest verdict:

| Verdict | What it means |
|---|---|
| **Made with Lolly** | The credential is intact and records a Lolly export - the file hasn't changed since it was made. (Integrity plus the maker's claim, from an on-device key.) |
| **Verified** | The file matches what it signed **and** the signing certificate chains to the pinned Lolly CA root - integrity plus a CA-verified identity. |
| **Delivered by Lolly** | A genuine catalog asset Lolly distributed but didn't author - chains to the Lolly root, so it's intact and its origin is CA-verified; who made it is recorded below. |
| **Likely made with Lolly** | An amber middle ground: the credential's own signature and everything it references check out and it records a Lolly export, but the file's bytes no longer match the hard binding - it was probably re-saved, re-encoded, or re-uploaded through something that left the manifest intact. |
| **Credential intact** | The structure checks out and the bytes match, but the signer isn't identified (an anonymous on-device key). |
| **Credential expired** | The bytes still match exactly - nothing was modified - but the short-lived signing certificate has lapsed, so the credential no longer validates. |
| **Credential broken** | The file carries Content Credentials, but they no longer match its bytes - modified after signing, or the manifest is damaged. |
| **No Content Credentials** | Nothing to verify - the file carries no C2PA manifest. |

A file whose credential **declares AI-generated content** also gets an **AI** badge
alongside the verdict (whether the generator authored that declaration or Lolly
detected a known generative source type). The page also shows the recorded edit
history, the "made from" ingredients, and - when present - the CA-verified signer's
email and issuer.

The same check runs in the CLI (`lolly validate <file>`) and in any third-party
C2PA validator pointed at the public Lolly root
(`c2patool --trust_anchors lolly-root.pem`).

## Why identity, not app identity

Lolly's engine and shells are open source. Once the code is public, "made with
Lolly" can never be a *cryptographic* claim - anyone can fork the repo and emit
bit-identical manifests. No certificate scheme fixes that, because the thing
being attested (the software) is copyable by design.

So the certificate attests **who signed, not what app signed**: the Subject
Alternative Name carries the OIDC-verified email. A fork can't impersonate a
Lolly user - it can only obtain certificates for *its own* users under our
issuance policy, or run its own CA whose root simply isn't our root. The
"Lolly" generator name in the manifest remains self-asserted, and the verifier
copy keeps making that distinction (which is why "Made with Lolly" is the maker's
claim, while "Verified" is the cryptographic one).

This follows Kerckhoffs's principle as practised by Sigstore/Fulcio and
Let's Encrypt: **the repo holds no secrets - only protocol and public
anchors.** The CA *certificate* (public) is committed and served; the CA
*private key* lives only in the host's environment store (or a KMS); the device
key is generated locally and non-extractable.

## Trust tiers (what a verifier can conclude)

| Tier | Signer | Verifier result |
|---|---|---|
| 0 | Ephemeral self-signed (offline / not enrolled) | Structure valid, signer anonymous ("Credential intact" / "Made with Lolly") |
| 1–2 | Device key + short-lived Lolly-CA cert | CA-verified identity ("Verified" / "Delivered by Lolly") for verifiers pinning the Lolly root |
| 3 (roadmap) | + RFC 3161 timestamp countersignature | proves *when* signed, so expired certs stay verifiable |
| 4 (roadmap) | C2PA conformance program (audited KMS custody) | green in third-party validators (Adobe Verify etc.) |

**Expired-credential honesty:** certificates are short-lived and there is no
trusted timestamp yet, so a file verified after the cert expired gets a
distinct *expired* verdict - the bytes still match, but the time of signing can't
be proven - never silently downgraded to broken, never inflated to verified.

## Credential lifetime (7 / 30 / 90 / 365 days, default 30)

Until the timestamp authority lands (Tier 3), the certificate window does
double duty: it bounds abuse (expiry is our only revocation) **and** it is how
long an exported file keeps its verified badge - the verifier compares the
cert window against *verification* time, not signing time. So the lifetime is
the user's call, offered at the moment the certificate is actually minted:

- **Not enrolled (ephemeral path):** the self-signed cert is generated fresh
  per export, so the **export panel's Content Credentials card** carries the
  7/30/90/365 select directly - it sets the credential's validity window on that
  export. Default 30. Fully offline.
- **Enrolled (CA identity):** the cert is fixed at enrolment, so the same
  7/30/90/365 select lives in **Profile → Content Credentials** next to the
  provider buttons; the CA clamps the chosen value to the allowed set
  {7, 30, 90, 365} (policy stays server-side). The export panel then shows
  *"Signed as \<email\> · verified until \<date\>"* in place of the picker, with a
  renew nudge when expiry is near. A per-export choice can't exist here - you
  can't sign with validity your certificate doesn't have, and re-issuing at export
  time would break offline signing.
- **URL / CLI:** `c2pa` is a reserved URL-mode param (see [URL Mode](/info/url-mode.html)):
  `?c2pa=90` on a share/deep-link URL turns the credential on with a 90-day
  ephemeral window (and pre-sets the export panel), `c2pa=off` forces it off,
  and the CLI accepts the same as `--c2pa=90` - stamping its native `svg`
  output with the ephemeral path (enrolment is a browser feature).

---

For the device/CA architecture, the engine contracts, the CA service protocol and
environment, the web-shell wiring, the one-time operator setup, the threat model,
and the roadmap (RFC 3161 timestamps, transparency log, SUSE SSO), see the
[Content Credentials - engineering & operator guide](/info/content-credentials-engineering.html).
