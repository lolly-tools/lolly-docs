# Lolly para sa mga Builder

Ang teknikal na dokumentasyon — para sa kahit sino na gumagawa ng mga tool, nag-i-integrate ng Lolly sa isang pipeline, nag-se-self-host nito, o nag-e-extend ng platform.

**Ano ang mapapala mo.** Gumawa ng tool nang isang beses at hindi na babalik-balik sa'yo ang request. Ang paulit-ulit na "pwede mo ba akong gawan ng…" na kumakain ng iyong hapon ay magiging isang template na ang ibang tao mismo ang magpu-fill in — nang tama, nang wala ka na sa loop. Ang iyong trabaho ay plain HTML/CSS/JS: version-controlled, diffable, reviewable, at tumatakbo sa isang open engine na walang vendor lock-in, kaya nananatili itong sa'yo. I-automate ang production run at mapupunta na ang oras mo sa interesting na problema, hindi sa ika-sampung-libong export.

Ang Lolly ay isang platform-agnostic **engine** na nagpapatakbo ng parehong render path sa ilang **shells** (web PWA, Tauri desktop/mobile, CLI, TUI). Ang mga tool ay **data, hindi bundled code** — isang manifest kasama ang template at optional na hooks — kaya ang mga bagong tool ay naililipat (ship) nang walang app update. Magsimula sa [Overview](/info/overview.html) para sa architecture, tapos sundan ang track na bagay sa ginagawa mo.

Bago sa platform? Ang **[Quickstart](/info/quickstart.html)** ay naghahanda ng brand at ng first render mo bago ka pumunta nang malalim.

## Unawain ang architecture

- **[Overview](/info/overview.html)** — kung bakit umiiral ang Lolly, ang paghihiwalay ng engine/shell/tools, ang capability bridge, at ang mga naisaayos nang architectural commitment.
- **[Design Tokens](/info/design-tokens.html)** — ang DTCG token model kung saan ipinapahayag ang mga brand, at kung paano ito ginagamit (consume) ng mga tool.

## Gumawa ng mga tool

- **[Authoring Tools](/info/authoring-tools.html)** — ang kumpletong gabay: manifest, template, styles, hooks, composition, at publishing.
- **[Authoring Assets](/info/authoring-assets.html)** — mga catalog asset, tiers, locales, palettes, themable icons, at fonts.
- **[Host API](/info/host-api.html)** — ang `HostV1` capability bridge na kinasusulatan ng bawat tool (ang tanging API na nakikita ng mga tool).
- **[URL Mode](/info/url-mode.html)** — bawat input bilang isang URL parameter; reserved params, compact encoding, packed links.

## Patakbuhin at i-integrate

- **[CLI](/info/cli.html)** — headless rendering; ang parehong render path gaya ng GUI, na dinidiktahan ng `--foo=bar` argv.
- **[TUI](/info/tui.html)** — ang interactive terminal shell.
- **[MCP Server](/info/mcp.html)** — ang native endpoint na nagbibigay-daan sa isang AI agent na tumuklas (discover) at magpatakbo ng mga tool.
- **[AI Agents](/info/ai-agents.html)** — pagpapatakbo sa Lolly mula sa isang model: ang URL mismo ang API.
- **[Chrome Extension](/info/extension.html)** — kumuha (capture) ng live URL bilang isang reusable asset.

## I-ship at patakbuhin ito

- **[Build Guide](/info/build-guide.html)** — i-build ang bawat target: CLI, TUI, desktop, mobile.
- **[Deployment](/info/deployment.html)** — ang web app, ang mga app, at ang backend services; kung saan tumatakbo ang bawat piraso.
- **[Configuration](/info/configuration.html)** — mga profile, brand pack, capability gating, feature flags, at catalog validation.

## Tiwala at datos

- **[Content Credentials Identity](/info/content-credentials-identity.html)** — CA-issued signing para sa on-device C2PA; mga engine contract at ang operator runbook.
- **[Data Transfer](/info/data-transfer.html)** — ang `lolly-backup` bundle: envelope, integrity, at cross-shell guarantees.
- **[About](/info/about.html)** — ang proyekto, ang hangganan (boundary) ng lisensya nito, at ang repository.
