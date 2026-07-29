# Server Surface

The complete inventory of Lolly's server-side components. This page exists so
that one statement can be made precisely: **the core product — rendering,
exporting, and verifying — runs entirely on your device**, and everything that
does *not* run on your device is listed below, with what it does, what it
holds, and what happens if you turn it off.

If a Lolly deployment exposes a network endpoint that is not on this page, it
is not part of Lolly.

## The shape of a deployment

A Lolly deployment is a **static web application** (the PWA the browser loads
and then runs locally, offline-capable) plus **two optional server components**.
Neither is in the path of normal use: opening a tool, editing, previewing,
exporting, and verifying a file all complete with no request to either. A
deployment that omits both is a fully working Lolly.

| Component | Route | Purpose | Optional? |
|---|---|---|---|
| Web shell | `/` (static files) | The app itself, served once, runs on-device | The app *is* this |
| MCP endpoint | `/api/mcp` (and the hosted `mcp.lolly.tools`) | Lets AI agents discover and render tools over [MCP](https://modelcontextprotocol.io) | Yes — remove it and the app is unaffected |
| Hot-link render | `GET /tool/<id>.<ext>` (part of the MCP function) | Renders a public catalogue tool from a plain URL — **public, unauthenticated by design** (public tool + catalogue data only; no Content Credentials) | Yes — disable with `LOLLY_DISABLE_RENDER_GET=1` |
| MCP OAuth discovery | `/.well-known/oauth-authorization-server`, `/.well-known/oauth-protected-resource` (part of the MCP function) | Standard OAuth 2.1 metadata for MCP connector registration | Removed with the MCP endpoint |
| CA service | `/api/ca` | Issues short-lived signing certificates so exports can carry a **verified identity** in their Content Credentials | Yes — without it, exports still sign, anonymously |

## MCP endpoint (`services/mcp`, `api/mcp`)

**What it does.** Exposes the catalogue and render path as MCP tools
(`lolly_list_tools`, `lolly_describe_tool`, `lolly_build_url`, `lolly_render`,
`lolly_transform`, `lolly_verify`) so an AI agent can produce finished,
rule-bound assets. The serverless tier renders browser-free formats; the full
endpoint at `mcp.lolly.tools` drives a headless browser for
raster/PDF/animation/video.

**Authentication.** MCP tool calls require OAuth 2.1 (as an MCP connector) or
a bearer access token held by the operator. Two deliberate exceptions: the
hot-link render route `GET /tool/<id>.<ext>` is public and unauthenticated
(it serves only public tool + catalogue data, never signs output, and can be
disabled with `LOLLY_DISABLE_RENDER_GET=1`), and an operator can opt the whole
endpoint into anonymous mode with `LOLLY_MCP_ALLOW_ANONYMOUS=1` (off by
default).

**What it stores.** Nothing persistent. Requests are processed and the
rendered bytes returned; there is no user database and no stored render
history. Operational logging is the platform's function logging, covered by
the [Privacy Policy](/info/privacy.html).

**`lolly_transform`** operates on a file supplied in the call, in memory, for
that call only — nothing is written server-side.

Full reference: [MCP Server](/info/mcp.html).

## CA service (`services/ca`, `api/ca`)

**What it does.** Content Credentials **identity enrolment**: you verify an
identity — OpenID Connect (Google, SUSE IdP), GitHub OAuth with a verified
address, or an emailed magic link (inbox control) — your browser generates a
**non-extractable** keypair on-device, and the service issues a time-limited
X.509 certificate binding that public key to your verified identity. Your
private key never leaves your device and never transits the service.

**What it stores.** No account database, and deliberately **no issuance log**
(a privacy decision, documented in the [Privacy Policy](/info/privacy.html)).
Certificate lifetime is user-selectable — 7, 30, 90 or 365 days, defaulting to
30 and capped by the deployment (`CA_CERT_MAX_DAYS`). Expiry is the recall
mechanism: there is no revocation infrastructure, so the lifetime you pick
bounds misuse of a lost device. The service
holds its own signing material and OIDC client secrets as deployment secrets.

**If it's off**, exports still carry a full, verifiable Content Credential —
signed anonymously, which is the default anyway.

Full reference: [Content Credentials Identity](/info/content-credentials-identity.html)
and the [engineering deep-dive](/info/content-credentials-engineering.html).

## What is deliberately *not* here

- **No render server for the app.** The app never uploads your inputs or
  assets to produce an export.
- **No verification server.** Dropping a file on Verify parses and checks it
  locally; the file is never uploaded.
- **No telemetry or analytics backend.** There is no endpoint receiving usage
  data; an automated test (`tests/no-trackers.test.ts`) enforces that no
  analytics or tracking SDK appears anywhere in the shipped source.
- **No user accounts** in the app. Identity enrolment (above) is the only
  sign-in anywhere, it is opt-in, and it produces a certificate on your
  device, not an account on a server.

The complete list of every network request the *app* itself can make (fonts,
catalog sync, the optional endpoints above) is maintained in the
[Privacy Policy](/info/privacy.html#when-the-app-talks-to-a-network-in-full).

## For self-hosters

Both components are ordinary processes you can run, omit, or replace — see
[Deployment](/info/deployment.html). If you operate them, you are the operator
of record for their logging and data handling; the
[Privacy Policy](/info/privacy.html) explains the split between what the
software does (true everywhere) and what an operator chooses.

Security reports for any of the above: see
[SECURITY.md](https://github.com/lolly-tools/lolly/blob/main/SECURITY.md) /
`/.well-known/security.txt`.
