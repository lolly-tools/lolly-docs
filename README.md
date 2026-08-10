# Lolly documentation

This directory is its own repository ([`lolly-tools/lolly-docs`](https://github.com/lolly-tools)),
consumed by the [`lolly`](https://github.com/lolly-tools/lolly) monorepo as a git submodule at
`docs/`. It holds the prose documentation **and** the generator for the `/info` site
(`docs/build.ts`), which is why it only builds from within the monorepo: it reads sibling paths
such as `engine/`, `../README.md` and `shells/web/public/info/` that exist only in that layout.
Run `npm run build:info` from the repo root, never from here.

New contributors should start with [`CONTRIBUTING.md`](../CONTRIBUTING.md) at the repo root, which
owns the setup steps, the profile workflow and the submodule ownership table.

## How this index is grouped

The sections below mirror the **pathways** declared in `docs/build.ts`, so the index cannot drift
from the site. `build.ts` is the source of the grouping, in two structures:

- `pages` (`docs/build.ts:61-108`) maps each markdown source to a slug, a title and a `pathway`
  (`quickstart`, `creators`, `builders` or `operators`). A doc with no entry here gets no `/info`
  page at all.
- `SIDEBARS` (`docs/build.ts:142-222`) is the per-pathway sidebar. A page may appear in more than
  one pathway's sidebar; its own `pathway` only decides which sidebar renders while you are
  reading it.

If you add a markdown file to this directory, register it in both structures or add it to the
"Not in the site nav" table below with the reason.

**Audience** is one of: *end user* (someone making assets), *tool author* (someone writing tools or
driving Lolly programmatically), *operator* (someone deploying, configuring or governing an
instance), *contributor* (someone changing the platform itself), *security* (someone reviewing the
security posture).

## Entry points

| Doc | Audience | What it covers |
|---|---|---|
| [site.md](site.md) | end user | Copy for the `/info` landing page. Registered as the `index` page with `isLanding: true`, so it renders as the front door rather than an article. |
| [quickstart.md](quickstart.md) | end user | The one page to read first: make Lolly wear your brand, bring in the design files and tokens you already have, then pick a pathway. Its own pathway hub. |

## For Creators

| Doc | Audience | What it covers |
|---|---|---|
| [creators.md](creators.md) | end user | Pathway hub. Why a non-designer would use Lolly, and where each creator task is documented. |
| [using.md](using.md) | end user | Driving the app: opening a tool, working the canvas, exporting, saving, sharing, moving to another device. |
| [brand-studio.md](brand-studio.md) | end user | The Brand Studio at `#/start`: logos, colours, type, tokens and files, plus how a brand pack moves between devices. |
| [profile.md](profile.md) | end user | Profiles as the on-device working identity a tool pre-fills from, and how they differ from the platform brand and from capabilities. |
| [search.md](search.md) | end user | The one field at the bottom of every screen: which routes carry it, what each provider reaches (tools, saved sessions, the catalogue, settings, docs), the spotlight chord, and what it deliberately does not index. |
| [favourites.md](favourites.md) | end user | Starring a tool and the strip it earns above the grid, the Gallery/Cover Flow view choice, and why the list travels with a profile export while the view mode stays on the device. |
| [design-import.md](design-import.md) | end user | Bringing a Figma, Penpot, Illustrator or InDesign file into Layout Studio as an editable session, parsed entirely on device. |
| [sequence-editor.md](sequence-editor.md) | end user | Editing in time: which clip a canvas click edits, onion-skin ghosts, split scope and Join, reversible detach audio, and trimming (pointer and keyboard). |
| [collaborate.md](collaborate.md) | end user | Two devices editing one tool session live: the invite ceremony (link, QR, code door), the matching plates that confirm the peer, presence and focus rings, beaming files across, and why it still works with no internet. |
| [exporting.md](exporting.md) | end user | Choosing a format, setting output size, and the three paths that produce a file (canvas render, generated text/data, on-device transform). |
| [positioning.md](positioning.md) | end user | Where Lolly sits against Canva, brand portals, Illustrator and Figma/Penpot, and where it deliberately does not play. |

## For Builders

| Doc | Audience | What it covers |
|---|---|---|
| [builders.md](builders.md) | tool author | Pathway hub. The technical map: author tools, integrate, self-host, extend. |
| [overview.md](overview.md) | contributor | **The architecture document.** The three-layer separation (engine, shells, tool/brand packs), the capability-bridge boundary, the repository layout, the ten architectural commitments, and where the engine ends and the host begins. Opens with the product rationale, so use its navigation note to jump straight to the architecture. |
| [design-tokens.md](design-tokens.md) | tool author | The DTCG token model as the single source of truth for brand primitives, and what round-trips with Penpot and Tokens Studio. |
| [authoring-tools.md](authoring-tools.md) | tool author | The tool anatomy (`tool.json`, template, hooks), the input types, and publishing via the generated catalog index. |
| [authoring-assets.md](authoring-assets.md) | tool author | Catalog assets: the `type` enum from `schemas/asset.schema.json`, asset anatomy, versioning and the permanent-id rule. |
| [host-api.md](host-api.md) | tool author | The `HostV1` capability bridge every tool calls into, and which shell implements what. |
| [url-mode.md](url-mode.md) | tool author | Expressing any tool state as URL parameters, the reserved params, and the compact-encoding opt-ins. |
| [cli.md](cli.md) | tool author | `lolly` as URL mode under a different transport, for pipelines, CI and batch generation. |
| [tui.md](tui.md) | tool author | The interactive terminal shell: browse, fill inputs, save projects and export without a browser. |
| [mcp.md](mcp.md) | tool author | The native MCP server, its two hosted tiers, and the callable tools it exposes. |
| [ai-agents.md](ai-agents.md) | tool author | Driving Lolly from an agent by building a URL or CLI command instead of generating pixels. |
| [extension.md](extension.md) | end user | The Lolly URL Screenshot browser extension, which gives the web app page capture that a browser tab cannot do alone. |
| [build-guide.md](build-guide.md) | operator | Per-target build steps: CLI binary, desktop app, mobile apps, and the web shell as a container image. |
| [ios-build.md](ios-build.md) | contributor | The full iOS walkthrough for `shells/tauri-mobile`: prerequisites, one-time init, the simulator dev loop, code signing, camera permissions. Sits next to the Build Guide under Builders, which links to it. |
| [deployment.md](deployment.md) | operator | Where each piece runs, and the delivery postures (distribute to devices, host the PWA, run the services). |
| [configuration.md](configuration.md) | operator | Profiles, brand packs, tool sets and per-tool capabilities as files rather than in-app settings. |
| [content-credentials-identity.md](content-credentials-identity.md) | end user | What a Content Credential is, what enrolling an identity adds, and how anyone checks a file. |
| [content-credentials-engineering.md](content-credentials-engineering.md) | security | The engineering companion: device/CA architecture, engine contracts, the CA service, web-shell wiring, one-time operator setup. |
| [data-transfer.md](data-transfer.md) | contributor | The `lolly-backup` bundle format spec: what a bundle carries, what it deliberately does not, and the round-trip contract. |

The Builders sidebar also carries an **About** entry, which renders the repo-root
[`../README.md`](../README.md) rather than a file in this directory.

## For Operators

| Doc | Audience | What it covers |
|---|---|---|
| [operators.md](operators.md) | operator | Pathway hub. The security and governance case for handing a creative tool to everyone. |
| [adoption-governance.md](adoption-governance.md) | operator | The honest pilot account: current status, who it is for, how adoption is measured, who governs the output. |
| [security-verification.md](security-verification.md) | security | A reviewer's summary of the cryptography behind Content Credentials, verification and encryption, and the tests behind each claim. |
| [threat-model.md](threat-model.md) | security | Trust boundaries, the residual-risk register, what is explicitly *not* a boundary, and the commands to verify each claim. An index into module headers, with file and line for every row. |
| [parser-inventory.md](parser-inventory.md) | security | Every engine module that turns attacker-controlled bytes into structure, with its declared bounds, its test, and its fuzz status. |
| [server-surface.md](server-surface.md) | operator | The complete inventory of server-side components, so the "runs on your device" claim can be stated precisely. |
| [verify-yourself.md](verify-yourself.md) | security | Falsifiable procedures with exact commands and expected output for the privacy and security claims. |
| [privacy.md](privacy.md) | end user | The privacy policy: on-device data, no accounts for ordinary use, no analytics. |

## Not in the site nav

| Doc | Audience | What it covers |
|---|---|---|
| [faq.md](faq.md) | end user | Intentionally not a page. `loadFaqs` in `build.ts` parses each `##` heading as a question and compiles the lot into the landing page's FAQ accordion, with per-question `#faq-…` anchors other surfaces deep-link to. |
| README.md | contributor | This index. |

[content-credentials-engineering.md](content-credentials-engineering.md) is a half-case: it has a
`pages` entry so `/info/content-credentials-engineering.html` is built, but no `SIDEBARS` item, so
it is reachable only through the cross-links in
[content-credentials-identity.md](content-credentials-identity.md).

Both kinds of gap are now mechanically enforced rather than described here. `npm run check:docs-nav`
(`scripts/check-docs-nav.ts`, a CI step in the typecheck job) fails when a `docs/*.md` has no `pages`
entry, when a `pages` entry has no `SIDEBARS` item, or when a `src` no longer exists — and both
tables above are its **declared exceptions**, `NOT_PAGES` and `NOT_IN_SIDEBAR`, each carrying the
reason it is exempt. Add a doc without registering it and CI says so; exempt one and you have to
write down why. That guard is what closed the `ios-build.md` orphan (2026-07-30), which sat
unreachable from `/info` for as long as it existed.

## Everything else in this directory

| Path | What it is |
|---|---|
| `build.ts` | The `/info` site generator. Owns `pages`, `NAV`, `SIDEBARS`, the FAQ loader, and the inline CSS. |
| `og-image.ts` | Per-page Open Graph image generation. A page only gets its own `og/<slug>.png` reference when that image exists. |
| `site/` | Landing-page content fragments (`about.md`, `opensource.md` and the sibling JSON), loaded by the landing build rather than published as pages. |
| `i18n/<lang>/` | Translations of the localised subset (currently 26 locales). A translated file is used when present, and the English source is the fallback, never a 404. |
| `shots/` | Screenshot assets used by the docs. |
