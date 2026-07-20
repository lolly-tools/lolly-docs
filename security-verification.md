# Security & Verification

A security reviewer's summary of the cryptography behind Lolly's Content Credentials, verification, and encryption — the standards it implements, the primitives it uses, how trust is earned, and how all of it is tested. This is the public companion to the deeper [Content Credentials — Engineering](/info/content-credentials-engineering.html) guide; the operator narrative lives in [Lolly for Operators](/info/operators.html).

The short version: **verification is entirely on-device, the crypto is standards-based and built on the platform's own WebCrypto engine, and every claim is backed by a test** — known-answer vectors, adversarial forgery/replay tests, fuzzing, and conformance against independent tools.

## Verification is on-device

Everything Lolly verifies, it verifies **locally, offline, without uploading the file**. Dropping a file on `/verify` (or `lolly validate <file>`) parses it, walks its Content Credential, re-checks the signature and the byte-hash binding, and renders a verdict — all in your browser or on your machine. There is no verification server.

The engine's crypto core is **platform-agnostic and uses only `globalThis.crypto` / WebCrypto** — no bespoke crypto library, no Node-only APIs, and **no network calls anywhere in the engine**. The single network-capable path in the whole verification surface is an optional DNS-over-HTTPS lookup of a **SEAL** signer's public key — and even that never sends the file, only fetches a public key the shell (not the engine) requests.

## Standards implemented

| Area | Standard |
|---|---|
| Content Credentials | **C2PA 2.x** (reads v1 + v2 manifests from any producer) |
| Signing certificates | **RFC 5280** (X.509/PKIX), C2PA cert profile §14.5.1 |
| Signature container | **RFC 9052 / 9360** (COSE_Sign1) |
| Serialization | **RFC 8949** (deterministic CBOR) |
| Key fingerprinting | **RFC 7638** (JWK thumbprint) |
| Credential boxing | **ISO 19566-5** (JUMBF) |
| Video binding | **ISO 14496-12** (BMFF) |
| PDF encryption | **ISO 32000-2 §7.6.4** (PDF 2.0 AES-256, R6) |
| Zip encryption | **PKWARE APPNOTE** + **WinZip AE-2** |
| Byte-level signatures | **SEAL** (verification) |
| Durable soft binding | **Adobe TrustMark** (read) |
| Supply chain | **CycloneDX 1.5** (SBOM) |

## Cryptographic primitives

- **Signing** (Content Credentials, catalog integrity, issued certificates): **ECDSA P-256 / ES256** with **SHA-256**. The on-device signing key is generated per session and is non-extractable — even Lolly can't read it.
- **Verifying** (to accept the whole C2PA ecosystem): **ECDSA** P-256/384/521, **RSA** PKCS#1 v1.5, **RSA-PSS**, and **Ed25519**.
- **Encryption**: **AES-256** for the *Strong* PDF lock (PDF 2.0 / R6) and *Strong* locked downloads (WinZip AE-2), with **PBKDF2** key derivation and **HMAC** authentication. *Standard* tiers (40-bit RC4 for PDF, ZipCrypto for zip) are deliberately labelled as quick, universal **deterrents** — reach for *Strong* for anything sensitive.
- **Hashing**: **SHA-256** throughout (SHA-384/512 where a curve or algorithm requires it).

All of the above run on the platform's audited WebCrypto implementation. The two symmetric ciphers use a small in-house block layer only because WebCrypto exposes no raw AES block — this is used **encrypt-only, over your own content**, never as a decryption oracle.

## How "trusted" is earned

Lolly reports the trust a file can actually *prove*, in explicit tiers:

- **`valid`** — the credential is structurally intact and the byte-hash binding holds: the file is unaltered since signing. An un-enrolled export is `valid` but signed **anonymously** (`untrusted`) — that's the default, and it's honest.
- **`trusted`** — additionally, the signer's certificate chain **cryptographically reaches a pinned trust anchor** *and* the claim signature verifies under that signer's key *and* nothing else failed. Both conditions together are what make a copied ("replayed") signer certificate worthless to an attacker: it can't produce a claim signature that verifies under the real owner's non-extractable key.

Trust anchors are **public certificates only** — the C2PA ecosystem roots (Google, Adobe, the CAI trust list, camera makers, AI providers) plus Lolly's own public root. **Presence on the list never confers trust by itself** — trust always requires the live chain walk and signature check above. Chain walking is bounded (a capped number of intermediates, parsed defensively) so a hostile certificate chain can't exhaust resources.

There is **no timestamp authority yet**, so an authentic-but-*expired* signature surfaces the signer's identity while staying `trusted: false` — it proves *who*, not *when*. An RFC 3161 timestamp countersignature is on the roadmap.

## Complementary provenance signals

Beyond the C2PA credential, Verify surfaces several read-only signals — each an honest heuristic that only ever *adds* confidence, never a false alarm:

- **The Lolly Imprint** — an invisible pixel watermark, on by default, that survives a screenshot or re-save (where the credential dies to any container change). Presence-only, no personal data. It is **security-through-obscurity — casual-stripping cover, not a hardened defence** — and complements the credential rather than replacing it.
- **SEAL** byte-level signatures, **AI-generated-content** declarations, third-party **pixel-watermark** deep scans (opt-in, one-time on-device model download), and **hidden-data** detection — all computed locally.

Lolly's provenance strategy is **read-broad, embed-narrow**: it *reads* many signals but only ever *writes* C2PA (plus its own Imprint), which keeps the write-side attack surface small.

## How it's assured

Every cryptographic claim above is backed by an automated test in the repository (`npm test`):

- **Known-answer tests (KATs).** Byte-for-byte fixed vectors: the CBOR encoder, the PDF R6 encryption vector, the zip CRC/AE-2 output, and the canonical-JSON signing form are each pinned to an exact expected byte string, so an accidental change is caught immediately.
- **Adversarial tests.** Signer-replay, lifted-signature, forged-intermediate, and identity-impersonation attempts are all asserted to resolve to *untrusted*; tampering any covered byte (inside the manifest, the claim, an assertion, or the file body) is asserted to break the correct check.
- **Fuzzing.** Hostile, truncated, and deeply-nested inputs are run through the C2PA, CBOR, and X.509 parsers with a regression corpus, asserting they **fail closed** — no crash, no runaway recursion or allocation.
- **Independent conformance.** Lolly's output is validated by the reference tools it interoperates with — **c2patool** (C2PA), **qpdf** (PDF), and Adobe's own reference implementation for TrustMark — and Lolly's verifier is proven against a manifest signed by an entirely independent producer, not just its own round-trip.
- **Supply chain.** A full **CycloneDX SBOM** is generated deterministically and **drift-checked in CI**, and `npm audit` **blocks** any high- or critical-severity dependency advisory from landing.

The cryptography and parsers are additionally undergoing **SUSE's enterprise-scale security hardening**. They are strong by design today; where a contract calls for certified assurance, deploy Lolly as one layer of defence-in-depth.

## Design boundaries (worth having straight)

- **Content Credentials are tamper-*evident*, not tamper-*proof*.** They detect alteration cryptographically and offline; they don't prevent it. That is exactly what makes fully offline verification possible.
- **The on-device signer is anonymous by design** unless you enrol a verified identity. No real credential ever leaves the device.
- **Tool hooks are not a security sandbox.** A tool's optional `hooks.js` runs with the host bridge injected but, in a browser shell, executes in the page's realm. Run only tools you've reviewed until Worker isolation ships — an org running a shared catalog can gate it through Git review.
- **Interoperability:** WebM has no standardised C2PA mapping yet, so Lolly attaches the manifest as a Matroska part (its own verifier reads it; MP4 verifies in third-party tools out of the box).

## Where to go next

- **[Content Credentials — Engineering](/info/content-credentials-engineering.html)** — the engine contracts, trust anchors, CA service, and threat model in full.
- **[Content Credentials Identity](/info/content-credentials-identity.html)** — how verified-identity enrolment and the Lolly CA work.
- **[Lolly for Operators](/info/operators.html)** — provenance, encryption, and air-gap deployment in context.
- **[Privacy Policy](/info/privacy.html)** — the formal "collects nothing, uploads nothing" statement.
