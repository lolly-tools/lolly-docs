# Deployment guide

> **Scope.** This page is *where each piece runs*: the delivery models, which artefact goes to which host, and what the optional services need. The [Build Guide](/info/build-guide.html) is *how each artefact is produced* - toolchain prerequisites, per-platform build and signing steps, the container image. Anything about compilers, SDKs or store submission belongs there; anything about hosting, routing and rollout belongs here.

Lolly has no single deployment - it's an engine plus several shells, and you ship the ones your organisation needs. This guide covers each target: the hosted web app, the desktop/mobile apps, and the two backend services.

## Choose a delivery model

The same build serves three postures - pick per team, not per organisation:

- **Deploy, don't serve** - distribute the desktop/mobile app or the offline PWA to devices via your MDM (Intune, Jamf, Munki). Runs locally, offline, air-gapped; IT owns the update cadence.
- **Serve only** - run one hosted instance inside your network or behind a VPN; users reach it in a browser with nothing installed. Publish once, everyone updates instantly.
- **Hybrid** - both, pointed at the same tool library.

See [Lolly for Operators](/info/operators.html) for the security rationale behind each.

## The web shell

The web shell is a static PWA built by Vite, with two *optional* serverless API functions alongside it.

```bash
npm ci                 # preinstall checks the submodules are present; postinstall builds the profile views
npm run build:web      # ONNX runtime copy, /info, per-tool + per-view OG images, then the Vite bundle
# output: shells/web/dist/
```

`build:web` is a chain: `build:ort` (copies onnxruntime-web's WASM and loader files into `shells/web/public/ort/`, which are gitignored and regenerated at build time), then `build:info` (the `/info` docs site), then the two OG image generators, then the shell bundle - so a plain `vite build` inside `shells/web` is *not* enough on its own.

### Any static host - including air-gapped

The web build is plain static files, so this is the simplest and most portable path. Serve `shells/web/dist/` from any static host, CDN, or an internal file server, with a single catch-all rewrite to `index.html` for client-side routing. Once loaded the PWA keeps working offline, and **Profile → Available offline** turns that from best-effort caching into a guarantee: users download the whole app, their tools, the catalogue (whole or by tag) and the docs ahead of a disconnection, with a progress bar and per-part sizes. That makes this the air-gapped path too: drop the static bundle behind your firewall (or into an MDM-delivered app) and nothing phones home. The build emits `dist/precache.json` (the app's own file inventory) and `/info/manifest.json` (the docs site's) - the download manager reads both, so keep them in the deployed bundle. If you don't need the optional services below, this is all you need.

### With the optional services

To add the AI-agent (MCP) or verified-identity (CA) endpoints, deploy the two functions under `api/` (`api/mcp/**`, `api/ca/**`) to any serverless platform, or self-host the `services/mcp` / `services/ca` submodules as long-running processes. Route the app's `/api/mcp` and `/api/ca` paths to them, and keep a SPA catch-all for everything else. Two details the reference `vercel.json` in this repo pins down: the clean routes get their **own** rewrites to prerendered per-view HTML so a shared link carries real OG tags (`/d` → `/view/d.html`, likewise `/v`, `/c`, `/p`, `/profile`, and `/t/:id` → `/t/:id.html`), and the catch-all is written to **exclude the API prefix** (`/((?!api/).*)` → `/index.html`, listed last) so it can't swallow the function routes. In a hosted or serverless build, materialise the `tools/` and `catalog/` **profile views as real copies** rather than symlinks (symlinks don't survive a function bundle) - the profile build's `--copy` flag does this. See [Configuration](/info/configuration.html) for the profile-view mechanics.

## Desktop & mobile apps

The Tauri shells wrap the same engine and web assets in a native binary.

```bash
npm run build:desktop   # macOS / Windows / Linux (shells/tauri-desktop)
npm run build:android   # APK + AAB (shells/tauri-mobile)
npm run build:ios       # .ipa    (shells/tauri-mobile)
```

Signing, notarisation, and store submission are platform-specific - the [Build Guide](/info/build-guide.html) covers the prerequisites (Rust toolchain, Xcode, Android SDK) and the per-store steps. Distribute the resulting binaries through your MDM like any other managed app.

## The backend services (optional)

Two small services back optional features. Neither is required to render or export - the app is fully functional without them.

| Service | What it powers | Build | Hosting |
|---|---|---|---|
| **MCP server** (`services/mcp`, `api/mcp`) | The AI-agent endpoint - lets a model discover and run tools over MCP | `npm run build:mcp-fn` | A serverless function on any platform, or self-host the `services/mcp` submodule |
| **CA service** (`services/ca`, `api/ca`) | Content-Credentials **identity** - issues short-lived signing certificates for verified C2PA | `npm run build:ca-fn` | A serverless function on any platform, or self-host; needs `services/ca/.env` |

The CA service holds policy server-side (certificate-day limits, allowed providers) and never sees a signing key - those are generated and kept on the user's device. See [Content Credentials Identity](/info/content-credentials-identity.html) for the operator runbook (root of trust, provider setup) and [MCP Server](/info/mcp.html) for the endpoint and auth model.

## Publishing tools

Tools are **data, not code** - a manifest, a template, and optional hooks in a directory. You never redeploy the app to ship a tool.

In the open app, anyone can make their own tools right there: save a Layout Studio editing session as a tool and ingest creative files into the catalogue, all on-device, no build step. That's the everyday path for individuals and teams.

For a **shared catalog** that many people sync, merge the tool into the directory your instance reads and run the catalog build; clients pick it up on next sync:

```bash
npm run build:catalog     # regenerate catalog/tools/index.json + asset checksums
npm run validate:catalog  # enforce schema + invariants (fails CI on drift)
```

If you want change control, manage that directory as a Git repository so tool changes get pull-request review and a full audit trail - an option, not a requirement. Which tools a given instance exposes is a [Configuration](/info/configuration.html) concern (profiles + brand packs), not a code change.
