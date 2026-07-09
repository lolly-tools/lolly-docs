# Lolly for Builders

The technical documentation. If you author tools, integrate Lolly into a pipeline, self-host it, or extend the platform, this is your section.

Lolly is a platform-agnostic **engine** that runs the same render path across several **shells** (web PWA, Tauri desktop/mobile, CLI, TUI). Tools are **data, not bundled code** — a manifest plus a template plus optional hooks — so new tools ship without an app update. Start with the [Overview](/info/overview.html) for the architecture, then follow the track that fits what you're building.

New to the platform? The **[Quickstart](/info/quickstart.html)** gets a brand and your first render in place before you go deep.

## Understand the architecture

- **[Overview](/info/overview.html)** — why Lolly exists, the engine/shell/tools separation, the capability bridge, and the settled architectural commitments.
- **[Design Tokens](/info/design-tokens.html)** — the DTCG token model brands are expressed in, and how tools consume them.

## Author tools

- **[Authoring Tools](/info/authoring-tools.html)** — the full guide: manifest, template, styles, hooks, composition, and publishing.
- **[Authoring Assets](/info/authoring-assets.html)** — catalog assets, tiers, locales, palettes, themable icons, and fonts.
- **[Host API](/info/host-api.html)** — the `HostV1` capability bridge every tool is written against (the only API tools see).
- **[URL Mode](/info/url-mode.html)** — every input as a URL parameter; reserved params, compact encoding, packed links.

## Run & integrate

- **[CLI](/info/cli.html)** — headless rendering; the same render path as the GUI, driven by `--foo=bar` argv.
- **[TUI](/info/tui.html)** — the interactive terminal shell.
- **[MCP Server](/info/mcp.html)** — the native endpoint that lets an AI agent discover and run tools.
- **[AI Agents](/info/ai-agents.html)** — driving Lolly from a model: a URL is the API.
- **[Chrome Extension](/info/extension.html)** — capture a live URL as an on-brand asset.

## Ship & operate it

- **[Build Guide](/info/build-guide.html)** — build every target: CLI, TUI, desktop, mobile.
- **[Deployment](/info/deployment.html)** — the web app, the apps, and the backend services; where each piece runs.
- **[Configuration](/info/configuration.html)** — profiles, brand packs, capability gating, feature flags, and catalog validation.

## Trust & data

- **[Content Credentials Identity](/info/content-credentials-identity.html)** — CA-issued signing for on-device C2PA; engine contracts and the operator runbook.
- **[Data Transfer](/info/data-transfer.html)** — the `lolly-backup` bundle: envelope, integrity, and cross-shell guarantees.
- **[About](/info/about.html)** — the project, its licence boundary, and the repository.
