# Deployment guide

Lolly has no single deployment - it's an engine plus several shells, and you ship the ones your organisation needs. This guide covers each target: the hosted web app, the desktop/mobile apps, and the two backend services. For the low-level per-platform build steps, the [Build Guide](/info/build-guide.html) is the companion reference; this page is the "where does each piece run" overview.

## Choose a delivery model

The same build serves three postures - pick per team, not per organisation:

- **Deploy, don't serve** - distribute the desktop/mobile app or the offline PWA to devices via your MDM (Intune, Jamf, Munki). Runs locally, offline, air-gapped; IT owns the update cadence.
- **Serve only** - run one hosted instance inside your network or behind a VPN; users reach it in a browser with nothing installed. Publish once, everyone updates instantly.
- **Hybrid** - both, pointed at the same tool library.

See [Lolly for Operators](/info/operators.html) for the security rationale behind each.

## The web shell

The web shell is a static PWA built by Vite, with two *optional* serverless API functions alongside it.

```bash
npm ci                 # installs workspace deps; postinstall builds the profile views
npm run build:web      # builds /info, per-tool + per-view OG images, then the Vite bundle
# output: shells/web/dist/
```

`build:web` runs `build:info` (the `/info` docs site) first, then the OG image generators, then the shell bundle - so a plain `vite build` inside `shells/web` is *not* enough on its own.

### Any static host - including air-gapped

The web build is plain static files, so this is the simplest and most portable path. Serve `shells/web/dist/` from any static host, CDN, or an internal file server, with a single catch-all rewrite to `index.html` for client-side routing. Once loaded the PWA runs **fully offline** - which makes this the air-gapped path too: drop the static bundle behind your firewall (or into an MDM-delivered app) and nothing phones home. If you don't need the optional services below, this is all you need.

### With the optional services

To add the AI-agent (MCP) or verified-identity (CA) endpoints, deploy the two functions under `api/` (`api/mcp/**`, `api/ca/**`) to any serverless platform, or self-host the `services/mcp` / `services/ca` submodules as long-running processes. Route the app's `/api/mcp` and `/api/ca` paths to them, and let the SPA catch-all (`/(.*)` → `index.html`) handle the app's clean routes (`/d`, `/c`, `/p`, `/v`, `/profile`, `/t/:id`). In a hosted or serverless build, materialise the `tools/` and `catalog/` **profile views as real copies** rather than symlinks (symlinks don't survive a function bundle) - the profile build's `--copy` flag does this. See [Configuration](/info/configuration.html) for the profile-view mechanics.

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
