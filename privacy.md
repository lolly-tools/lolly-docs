# Privacy Policy

*Last updated: 19 July 2026*

> **In plain terms.** The documents, images, videos and files you make in Lolly stay
> on your device. There are no accounts for ordinary use, no cookies from the app
> itself, and no analytics or trackers anywhere in the codebase - not "we don't use
> the data," genuinely not present in the source. A short, complete list of
> exceptions exists where the software talks to a network at all, and every one of
> them is described below in specifics: what leaves, to whom, and when. The only
> exception that involves anything personal is a sign-in you have to explicitly
> start. If it isn't in this document, it doesn't happen.

## What this policy covers

Lolly is open-source software - an engine, several app shells (web, desktop,
mobile, CLI), and a browser extension - that anyone can run. This policy has two
parts:

- **The software itself**: what it does and doesn't do with your data, wherever it
  runs. This is a property of the code, so it's true of every Lolly deployment,
  ours or anyone else's.
- **lolly.tools**, the reference deployment SUSE operates: the specific choices
  made running its optional server-side pieces (what's logged, for how long, by
  whom).

If you're using a self-hosted or enterprise Lolly instance, the software behaviour
below still applies, but the *operator* of that instance - not SUSE - is
responsible for anything server-side: their render endpoint, their MCP server,
their Content Credentials certificate authority, if they run one. Ask them for
their own policy; see [Adoption & Governance](/info/adoption-governance.html) for
what operating Lolly involves.

## The app: what stays on your device

Lolly's web, desktop and mobile shells run the entire render engine client-side.
Opening a tool, filling in inputs, previewing and exporting all happen on your
device - no server is involved, and the app works offline once loaded.

**The app sets no cookies.** To function, it keeps a small amount of data **on
your device only**, never transmitted:

- **Interface preferences** - theme, language, sound settings, sidebar/zoom
  sizing, sort and view choices, which onboarding tips you've seen - in
  `localStorage`, so they're available before the app has finished booting.
- **An offline cache of the tool catalogue and asset previews**, so the gallery
  works without a connection.
- **Local usage counters** for your profile card's stats (how many exports, which
  tools) - a small bounded blob in `localStorage`, never read by us, never sent
  anywhere.
- **Your own documents, saved sessions, uploaded assets and fonts** - stored in
  IndexedDB on your device, never uploaded, never read by anyone but you.

None of this is shared, sold, or used to identify or track you. There is nothing
to consent to, because there is no collection happening - only this notice, so you
know what's kept and where. Wipe all of it at any time with **Profile → Clear all
my data**, or by clearing the site's storage in your browser. (Under the ePrivacy
Directive Art. 5(3), storage that is strictly necessary for the service you asked
for doesn't require consent - only transparency, which is what this document and
the in-app notice both are.)

Your own backup of this data - the `lolly-backup` bundle produced by **Export &
render everything** - is a file you keep and control. It never touches our
servers unless you choose to send it somewhere yourself. See [Data
Transfer](/info/data-transfer.html).

## On-device utilities

Some tools - **Strip Hidden Data**, **Compress PDF**, and others carrying the
**"Runs on your device"** badge - operate on a file you provide. The file is read
into memory in your browser, transformed locally, and offered back as a download.
It is never uploaded, because there is no server in the path to upload it to.
These utilities work offline, and their output carries no watermark or metadata of
ours - the point of most of them is to remove & protect data, not add risk.

## When the app talks to a network, in full

The table below is the complete list of everything the app fetches or sends over a
network. If it isn't here, the app doesn't do it.

| What | What actually leaves your device | When |
|---|---|---|
| Tool catalogue sync | Nothing personal - a request for Lolly's own public tool and asset index | On startup, then cached offline |
| A tool's declared network capability | Whatever that specific tool requests (e.g. map tiles) to the specific host(s) it allowlists in its manifest | Only while using that tool |
| Google Fonts | The chosen font family name and your IP address, to Google's font servers | Only if you add a Google Font in the brand editor - a one-time fetch per family, then it lives on your device |
| SEAL signature check | A single DNS lookup for a public key, to the domain named inside the file being checked | Only if Verify finds a SEAL record in a file you check - never the file itself |
| Deep-scan detector models | Nothing personal - a one-time same-origin model download (not a third party) | Only if you opt into Verify's deep scan |
| Remote instance | Whatever the instance you name serves back, over the same catalogue sync described above | Only if you explicitly point the shell at another Lolly deployment |

None of these send your documents, projects, sessions or uploaded files anywhere.
They exist to bring things *to* your device (tools, fonts, models, a public key),
never to send things *from* it, with the exceptions named explicitly in the
sections below.

## Hot-linked render URLs

The app itself stays entirely on your device. Separately, and only if you use it,
lolly.tools (and any self-hosted instance that leaves it enabled) answers
**hot-link render URLs** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
so a shared Lolly link can appear as a live image in a README, a wiki or a
dashboard. Fetching one of those URLs asks the server to render **public tool and
catalogue data** with the inputs written into the URL, and that is the entire
exchange:

- **No accounts, no cookies, no state.** The endpoint is anonymous; nothing is
  stored per request, and nothing on your device is read. Your documents,
  sessions and uploads never leave your browser - they cannot appear in these
  links at all.
- **The inputs are public by construction** - they are whatever the link's author
  typed into the URL, readable by anyone the link reaches. Don't put secrets in a
  shared link, Lolly makes a link encryption feature for sensitive content available.
- Responses are **cached and rate-limited** like any public image, and marked
  `noindex` so search engines don't index your renders.

Self-hosting Lolly and don't want a public render surface? Set
`LOLLY_DISABLE_RENDER_GET=1` and every one of these URLs returns 404.

## The MCP server (optional, for AI agents)

Lolly can also be reached by an AI agent over the Model Context Protocol - an
operator-run endpoint (lolly.tools runs one; anyone can self-host their own,
including fully air-gapped). It shares the render path's no-accounts posture,
plus two tools that necessarily handle file bytes:

- **`lolly_transform`** (run an on-device utility server-side, on the calling
  agent's behalf) and **`lolly_verify`** (check Content Credentials) both accept
  a file's bytes from the caller. They are processed **in-process, in memory**,
  and the result is returned in that same call - the file is never written to
  disk and never stored once the request completes.
- Every other tool - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - works from parameters only (text, numbers, colours,
  URLs, catalogue asset ids), the same inputs a hot-link render URL takes.
- Access is either a shared token the operator issues to clients they trust, or
  stateless OAuth 2.1: short-lived signed tokens verified against a shared
  secret, nothing stored server-side, and the token itself is never written to a
  log or a render URL.

## Content Credentials identity (a sign-in you have to start yourself)

Lolly can seal a cryptographic **Content Credential** into your exports so anyone
can verify, offline, that a file is unaltered since it left Lolly. That much is
**on by default and fully local** - the signing key is generated on your device,
is **non-extractable** (not even Lolly's own code can read it), and signing itself
happens offline. This section covers the one *optional* step on top of that:
enrolling a verified identity, so your exports say "Verified - signed by
\<your email\>" instead of an anonymous key. **If you skip enrolment, nothing in
this section applies to you, and no personal data ever leaves your device.**

If you do enrol, here is exactly what happens:

1. **You choose a sign-in method** - GitHub, Google, SUSE (Okta), or an emailed
   link. For the three OIDC providers, you're redirected to that provider's own
   login page, governed by their privacy policy, not ours; Lolly's certificate
   service receives back only a verified email address and the provider's name.
   For the email link, the address you type is passed to **Resend**, a
   transactional email API, solely to deliver that one link.
2. **A short-lived cookie protects the redirect.** This is the one cookie the
   entire Lolly system sets: `lolly_ca_state`, `HttpOnly`, scoped to `/api/ca`,
   expiring within ten minutes. It carries a random value, not a tracking
   identifier, and exists only to stop the OAuth redirect being forged. It is
   cleared as soon as sign-in completes.
3. **Your IP address is used, briefly, to prevent abuse** of the sign-in
   endpoints (so one script can't spam an inbox or exhaust the email quota) - held
   in server memory only, for a sliding window of about a minute, never written
   to a log or persisted anywhere.
4. **The certificate service issues a short-lived certificate** (7, 30, 90 or 365
   days, your choice, capped by the operator's policy) binding your verified
   email to the public half of the keypair generated on your device. The private
   half never leaves your browser.
5. **The issuance is logged**: your email address, the provider you used, a short
   hash of the certificate's serial number, and its expiry date, written to the
   service's operational logs - and, only if the operator has configured one, to
   a webhook they control. This is the one place a piece of your personal data is
   retained on a server, and it exists so a compromised or misissued certificate
   can be traced and so the CA's own issuance can be audited.
6. **After that, signing is offline again** for the certificate's whole lifetime.
   Exporting a file never contacts the certificate service - only enrolling did.

For lolly.tools specifically: SUSE operates the certificate service and holds
these issuance logs. See [Your rights](#your-rights) below for how to ask about
or remove an entry.

## The browser extension

The **Lolly URL Screenshot** browser extension does not collect, store, or
transmit any personal data. No analytics, no tracking, no remote server.

**What it does.** When you ask the Lolly web app to screenshot a URL, the
extension opens that page in a temporary background tab, captures it in your
browser using the DevTools Protocol, hands the image back to the app, and closes
the tab. Everything happens locally, on your own device and network.

**Data.**

- **We collect nothing.** The extension has no servers and makes no network
  requests of its own.
- **Captured images** go straight to the Lolly app in the same browser - never
  uploaded by the extension.
- **The URLs you capture** are used only to load that one page for that one
  screenshot. They are not logged or shared.

**Permissions.**

- **`debugger`** - to capture the rendered page via the DevTools Protocol (the
  same mechanism the Lolly desktop app uses).
- **`tabs`** - to open and close the temporary tab the page loads in.
- **Host access (`<all_urls>`)** - because the page you choose to capture can be
  on any site. Chrome surfaces this at install time as a broad permission
  warning; the extension only ever visits the URL you give it.

None of these are used to read, monitor, or transmit your browsing beyond that
one requested capture.

## Infrastructure logs

Like any website, the servers behind lolly.tools - and behind any Lolly
deployment - generate standard web-server access logs whenever a request reaches
them at all: IP address, requested path, timestamp, user agent, kept for a
limited window for security and abuse prevention. That's baseline hosting
behaviour, not something Lolly adds on top, and it never contains the contents of
your documents, because those never reach a server to begin with. The one
deliberate exception is a file you explicitly hand to an MCP `lolly_transform` or
`lolly_verify` call, which is processed in memory and never written to disk or a
log, as described above.

## Children's privacy

Lolly does not knowingly collect personal information from anyone, of any age, in
the ordinary course of using the app - there is nothing to collect. The one place
personal information (an email address) is ever gathered is Content Credentials
enrolment, described above, which is not directed at or intended for children.

## Your rights

Because almost everything Lolly touches is stored only on your own device, most of
what data-protection law calls "your rights" - access, correction, deletion,
portability - are things you can already do yourself, instantly, without asking
anyone: your data lives in your browser's storage, in a form you can inspect,
export (**Export & render everything**, above), or delete (**Profile → Clear all
my data**).

For the one piece of personal data that can end up on a server - your email
address, if you enrolled for Content Credentials - contact us (below) to ask what
we hold or to have it removed from active logs. Removing a log entry doesn't
revoke a certificate already issued (it's short-lived by design and simply
expires); it stops that entry appearing in future exports of the log.

We don't sell data. We don't have any to sell.

## Changes to this policy

The date at the top changes whenever this document does. A change that alters
what leaves your device or what's retained gets its own line here, not a silent
edit - if you want to see what changed, ask (below) or compare against the
[public source](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contact

Questions, or a request under "Your rights" above: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). For a self-hosted or enterprise Lolly
instance, contact whoever operates it instead - SUSE and the Lolly open source 
project hold no data for deployments it doesn't run.
