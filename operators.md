# Lolly for Operators

**A future-proof, defence-in-depth data-loss-prevention & provenance strategy masquerading as a creative platform.**

The organizational immune system that wraps around what you already do — so the routine creative work your teams need every day happens *inside* your perimeter instead of leaking out of it.

Lolly earns its place as a creative tool: it deletes the design queue and puts production-quality output in everyone's hands. But the reason it's *safe* to hand out that widely is architectural. Nothing uploads, everything is reproducible, and every export can carry a cryptographic record of where it came from. This page is the security and rollout story.

> **Honest framing first.** Lolly's security properties are strong *by design*; they have **not** been independently audited or certified. The seals, on-device signing, and encryption below are real and defensible — but where independent assurance is legally required, treat them as defence-in-depth, not as a certified control. We'd rather you know that up front.

## The strategic advantage

The usual way routine creative work gets done is a liability surface: files emailed to external design contractors, brand assets uploaded to a dozen SaaS editors, customer data pasted into a stranger's web tool to "just make a quick graphic." Every one of those is data leaving your control.

Lolly inverts it. The work that *drove* those leaks — the quote card, the localized banner, the event badge, the redacted screenshot — now happens on a tool that runs on the employee's own device, against your brand, with no server in the loop. You didn't add a control on top of a risky workflow; you replaced the risky workflow with one that has no exfiltration path to begin with.

- **Configuration is yours.** The engine and shells are open source (MPL-2.0). Overlay your own auth, telemetry, or CA; host it or don't; you hold full feature and cost control, git-tracked, not locked in a SaaS database.
- **Governance is data, not a dashboard.** The tool catalog is the source of truth, managed as a Git repository — pull-request review *is* the moderation, and you get a full audit trail and instant rollback of every template your workforce can touch. See [Adoption & Governance](/info/adoption-governance.html).
- **Guard-rails are structural.** Brand constraints are hard-coded into templates, not published as guidelines people can ignore. The wrong output isn't discouraged — it's unrepresentable.

## Delete the request queue while proliferating content.

One goal of Lolly **design-request deflection**: routine requests that never need to reach a designer because the person who needed the asset made it themselves, correctly, in minutes. Every deflected ticket is both a productivity win and one fewer file changing hands.

Lolly is built to fit how your organisation actually operates — there's no single right way to deploy it:

- **Deploy, don't serve.** Ship Lolly to devices through your existing MDM (Intune, Jamf, Munki…). It runs locally as a desktop/mobile app or an offline PWA — works behind any firewall, in any air-gapped environment, with no server to maintain and IT in control of the update cadence.
- **Serve only.** Run one instance inside your network (or behind a VPN); users reach it in a browser, nothing installed. Publish a tool once, everyone has it immediately; pair with your IdP for access control.
- **Hybrid.** Local apps for offline field work, an always-current browser version for borrowed machines — both pointed at the same tool library.

The full deploy models and administration walkthrough live in [Deployment](/info/deployment.html) and [Configuration](/info/configuration.html).

## Anti-exfiltration utilities

A category of Lolly tools exists *specifically* to keep files inside the perimeter. The privacy utilities.


- **Strip hidden data**
 Remove location and all hidden identifying information from documents and media files.

- **Text Helper**  
Anonymize, encode, format, and manipulate structured and unstructured text. 

- **Compress PDF**
Prevent any chance of 'email limit crisis' where third party web tools prey and data 

- **Compress PDF**
Prevent any chance of 'email limit crisis' where third party web tools prey and data falls out the window. 

All of these are on-device transforms: your file or data goes in, cleaned bytes come out, and **there is no server to upload to**. They are the deliberate opposite of the typical "upload your file to a stranger's website to clean it" tool that a well-meaning employee reaches for otherwise.



## Determinism & reproducibility

Every tool input is expressible as a URL parameter, and the same inputs produce the same file. That has two operator consequences:

- **A URL is the artifact.** Commit the link, regenerate the asset on demand — no binaries checked into Git, no chasing "the latest version" in chat. Asset and tool IDs are permanent contracts, so a link minted today still resolves later.
- **The CLI is the same render path** as the GUI, so build pipelines and the app never drift. Generate OG images, social cards, and data visuals at build time, reproducibly.

## Provenance & Content Credentials

Exports can carry **Content Credentials** — a signed [C2PA](https://c2pa.org) manifest bound to a hash of the file's bytes. This is **tamper-*evident*, not tamper-*proof***: it does not prevent anyone from altering a file, but any later change breaks the seal and a C2PA-aware verifier reports it. That's the honest and useful property — you can *detect* alteration, cryptographically, offline.

- **On by default, on-device.** The signing key is generated on the device, is non-extractable (even Lolly can't read it), and signing happens locally — only optional identity *enrolment* ever touches the network.
- **Trust tiers.** An un-enrolled export is structurally valid but signed anonymously (`untrusted`). Enrol a **verified identity** (short-lived certificate from the Lolly CA, tied to an email) and verifiers pinning the Lolly root report `trusted` + the signer's email. A trusted timestamp authority and third-party-validator green (C2PA conformance) are on the roadmap, not shipped — the tiers are labelled honestly and a file never shows a false green.
- **Credential lifetime** is the operator/user's call at signing time: 7 / 30 / 90 / 365 days, default 30.
- **Verification is on-device.** Drop any file on `/valid` (or `lolly validate <file>`) for an offline report of whether it was genuinely made with Lolly and unchanged since. See [Content Credentials Identity](/info/content-credentials-identity.html).

> **Known gap, stated plainly:** Lolly's verifier does not yet fully read C2PA claim **v2** manifests from other producers; and WebM carries the manifest as a Matroska attachment (no standardised C2PA mapping exists yet for WebM), so third-party tools verify Lolly's MP4 but not its WebM.

## Encryption & passwording

For files that must travel locked, everything happens on-device:

- **PDF open-password** — *Standard* is a 40-bit RC4 deterrent (opens anywhere, may travel in a link); *Strong* is **AES-256** (PDF 2.0), typed at export and never put in a link.
- **Locked downloads** — a ZIP, a Projects folder, or a batch run can be locked whole: *Standard* ZipCrypto (weak, universal) or *Strong* **AES-256** (WinZip AE-2). Defence-in-depth: any PDF inside a Strong zip is *also* individually AES-256-locked, so it stays locked after unpacking.
- **Password-gated share links** — the whole link state is AES-256-encrypted under a PBKDF2-derived key; only ciphertext travels, the password is never in the link, and decryption happens in the recipient's browser.

## Air-gap ready

Lolly is designed to run with **no network at render time**. The web shell is an offline-first PWA (service worker); fonts and WASM are stored on-device; tool state is persisted locally through the host bridge, never `localStorage`. Any tool that reaches the network does so only through an **allowlisted** `host.net` capability it must declare in its manifest — a shell that can't (or won't) fulfil it stubs it out. So a fully air-gapped install renders, exports, encrypts, and verifies credentials with nothing to phone home to.

## What you must know before you rely on it

Operators deserve the caveats, not just the claims:

- **Not externally audited.** As stated at the top — strong by design, not certified.
- **Tool hooks are *not* a security sandbox.** A tool's optional `hooks.js` runs with the host bridge injected, but in a browser shell it executes in the page's realm and *can* reach `window`/`document`/`fetch`. Treat tool code the way you treat any code you run — review it. This is why the catalog-as-Git-review model matters, and why untrusted third-party tools should not be run until Worker isolation ships.
- **C2PA is tamper-evident, not tamper-proof**, and the v2-read / WebM gaps above are real.
- **Encryption tiers differ.** *Standard* locks are deterrents; only *Strong* (AES-256) is real protection, and Strong files don't open in every legacy reader.

## Where to go next

- **[Adoption & Governance](/info/adoption-governance.html)** — personas, the deflection metric, and governance-as-data in full.
- **[Deployment](/info/deployment.html)** — deploy/serve/hybrid, MDM, and self-hosting the services.
- **[Configuration](/info/configuration.html)** — profiles, brand packs, capability gating, and feature flags.
- **[Privacy Policy](/info/privacy.html)** — the formal "collects nothing, uploads nothing" statement.
