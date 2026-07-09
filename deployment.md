# Deployment guide

Lolly has no single deployment — it's an engine plus several shells, and you ship the ones your organisation needs. This guide covers each target: the hosted web app, the desktop/mobile apps, and the two backend services. For the low-level per-platform build steps, the [Build Guide](/info/build-guide.html) is the companion reference; this page is the "where does each piece run" overview.

## Choose a delivery model

The same build serves three postures — pick per team, not per organisation:

- **Deploy, don't serve** — distribute the desktop/mobile app or the offline PWA to devices via your MDM (Intune, Jamf, Munki). Runs locally, offline, air-gapped; IT owns the update cadence.
- **Serve only** — run one hosted instance inside your network or behind a VPN; users reach it in a browser with nothing installed. Publish once, everyone updates instantly.
- **Hybrid** — both, pointed at the same tool library.

See [Lolly for Operators](/info/operators.html) for the security rationale behind each.

## The web shell

The web shell is a static PWA built by Vite, with two serverless API functions alongside it.

```bash
npm ci                 # installs workspace deps; postinstall builds the profile views
npm run build:web      # builds /info, per-tool + per-view OG images, then the Vite bundle
# output: shells/web/dist/
```

`build:web` runs `build:info` (the `/info` docs site) first, then the OG image generators, then the shell bundle — so a plain `vite build` inside `shells/web` is *not* enough on its own.

### On Vercel

The repo ships a `vercel.json` wired for a git build:

- **Build command:** `npm run build:web && npm run build:mcp-fn && npm run build:ca-fn`
- **Output directory:** `shells/web/dist`
- **Functions:** `api/mcp/**` and `api/ca/**` (the MCP and CA services, below), with the `tools/` and `catalog/` views bundled in via `includeFiles`.
- **Rewrites** map the app's clean routes (`/d`, `/c`, `/p`, `/profile`, `/t/:id`) and the MCP/CA/OAuth well-known paths; everything else falls through to the SPA `index.html`.
- **Redirects** funnel the `www.` host and the alternate `lolly.*` domains to the canonical `lolly.tools`.

Because Vercel runs the build with `VERCEL=1`, `postinstall` materialises the `tools/` and `catalog/` **profile views as real copies** rather than symlinks (symlinks don't survive the function bundle), and those views are `.vercelignore`d so they never enter the git-tracked source. The API functions live under `api/` with their own `rootDirectory` handling — see [Configuration](/info/configuration.html).

### Any static host

The web build is plain static files. If you don't need the MCP/CA services, serve `shells/web/dist/` from any static host or an internal file server, with a catch-all rewrite to `index.html` for client-side routing. The PWA then works fully offline once loaded.

## Desktop & mobile apps

The Tauri shells wrap the same engine and web assets in a native binary.

```bash
npm run build:desktop   # macOS / Windows / Linux (shells/tauri-desktop)
npm run build:android   # APK + AAB (shells/tauri-mobile)
npm run build:ios       # .ipa    (shells/tauri-mobile)
```

Signing, notarisation, and store submission are platform-specific — the [Build Guide](/info/build-guide.html) and [iOS build notes](/info/build-guide.html) cover prerequisites (Rust toolchain, Xcode, Android SDK) and the per-store steps. Distribute the resulting binaries through your MDM like any other managed app.

## The backend services (optional)

Two small services back optional features. Neither is required to render or export — the app is fully functional without them.

| Service | What it powers | Build | Hosting |
|---|---|---|---|
| **MCP server** (`services/mcp`, `api/mcp`) | The AI-agent endpoint — lets a model discover and run tools over MCP | `npm run build:mcp-fn` | Vercel function, or self-host the `services/mcp` submodule |
| **CA service** (`services/ca`, `api/ca`) | Content-Credentials **identity** — issues short-lived signing certificates for verified C2PA | `npm run build:ca-fn` | Vercel function, or self-host; needs `services/ca/.env` |

The CA service holds policy server-side (certificate-day limits, allowed providers) and never sees a signing key — those are generated and kept on the user's device. See [Content Credentials Identity](/info/content-credentials-identity.html) for the operator runbook (root of trust, provider setup) and [MCP Server](/info/mcp.html) for the endpoint and auth model.

## Publishing tools

Tools are **data, not code** — a manifest, a template, and optional hooks in a directory. You don't redeploy the app to ship a tool: merge the tool into the directory your instance reads, run the catalog build, and clients pick it up on next sync.

```bash
npm run build:catalog     # regenerate catalog/tools/index.json + asset checksums
npm run validate:catalog  # enforce schema + invariants (fails CI on drift)
```

Manage that directory as a Git repository so tool changes get pull-request review and a full audit trail. Which tools a given instance exposes is a [Configuration](/info/configuration.html) concern (profiles + brand packs), not a code change.
