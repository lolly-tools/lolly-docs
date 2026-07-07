# The Lolly MCP server

Lolly ships a native **[Model Context Protocol](https://modelcontextprotocol.io) server** — a single endpoint any MCP client (claude.ai, Claude Code, an agent runtime, an IDE) connects to directly. It exposes the tool catalogue and the render path as callable tools, so an agent can discover a tool, fill its declared inputs, and get back an on-brand file plus an editable `lolly.tools` link. Because tools sync to the server as **data**, new tools appear with no server update.

It is the programmatic sibling of [driving Lolly from a URL](/info/ai-agents.html): same render path, same reproducible output — just reached over MCP instead of a hand-built link.

## Two hosted endpoints

The render path has two tiers, so there are two endpoints. **They share the same access token** and the same tools — the only difference is which output formats each can produce.

| Endpoint | Tier | Produces |
|---|---|---|
| `https://mcp.lolly.tools/mcp` | **Full** (headless browser) | **Everything** — vector, all raster (`png`/`jpg`/`webp`/…), print PDF (incl. CMYK + crop marks), and animation/video (`gif`/`apng`/`webm`/`mp4`). |
| `https://lolly.tools/api/mcp` | **Lightweight** (serverless, no browser) | Vector (`svg`/`eps`/`emf`/`pdf`), data/text formats, and `png` for SVG-native tools. |

Use the **full** endpoint (`mcp.lolly.tools`) unless you have a reason not to — it is a superset. The lightweight endpoint runs browser-free on the same infrastructure as `lolly.tools`, and is handy for quick vector/data work.

> A render on either endpoint is **byte-for-byte what a user's export produces** — the server honours the full parameter contract (width/height/unit/dpi/colour profile/PDF password), and never watermarks or embeds anything a user's own download wouldn't.

## The five tools

| Tool | Does |
|---|---|
| `lolly_list_tools` | List / search the catalogue (by text, status, category, format, capability). |
| `lolly_describe_tool` | One tool's full input JSON Schema, supported formats, canvas size, and examples. |
| `lolly_build_url` | Build a shareable, editable link + raw render URL — **without** rendering. |
| `lolly_render` | Render a tool to a file — returns the bytes plus the editable link. |
| `lolly_transform` | Run an on-device file utility (`strip-data`, `compress-pdf`) on a file you supply. |

The intended flow is `lolly_list_tools` → `lolly_describe_tool` (read the exact input schema) → `lolly_render`.

## Any format, transparently

`lolly_render` returns whatever format the tool declares — the server decides how to produce it, and the agent never has to know which engine ran:

- **Vector** — `svg`, `pdf`, `pdf-cmyk`, `eps`, `emf`, `dxf` (cut file)
- **Raster** — `png`, `jpg`, `webp`, `avif`, `tiff`, `cmyk-tiff`, `ico`
- **Animation / video** — `gif`, `apng`, `webp-anim`, `svg-anim` (vector), `webm`, `mp4`
- **Documents & data** — `pptx` (PowerPoint), `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `zip`

Formats are **per-tool** — you can only request one a tool declares (`lolly_describe_tool` lists them). Ask a QR tool for `svg` and you get vector; ask an animated-ad tool for `mp4` and you get video — the call shape is identical either way. Animation, print PDF and HTML-layout raster require the **full** endpoint.

## Connect a client

Both endpoints authenticate against the same shared access token, which your Lolly operator holds. It is never printed in a link or a log.

### claude.ai — as a custom connector (OAuth)

The endpoint is also a stateless **OAuth 2.1** authorization server, so it drops straight into the connector UI:

1. In claude.ai, open **Customize → Connectors** and click **`+` → Add custom connector** (Pro/Max). On **Team/Enterprise** this is admin-gated: an **Owner** adds it once under **Organization settings → Connectors → Add → Custom → Web**, after which members find it under Customize → Connectors and click **Connect**.
2. URL: `https://mcp.lolly.tools/mcp` — leave the OAuth Client ID / Secret blank; the server registers your client automatically (dynamic client registration).
3. It auto-discovers the OAuth server and opens a consent page. Paste the access token and **Allow** — done.

Then ask Claude to *"list the Lolly tools"* or *"render the color-block tool as a PNG."*

### Claude Code / any HTTP client — with a bearer token

The endpoint also accepts the raw token directly, so scripted clients skip the OAuth dance:

```bash
claude mcp add --transport http lolly https://mcp.lolly.tools/mcp \
  --header "Authorization: Bearer <your-access-token>"
```

A quick smoke test with `curl` (expect a JSON list of the five tools; no token returns `401`):

```bash
curl -s -X POST https://mcp.lolly.tools/mcp \
  -H "authorization: Bearer <your-access-token>" \
  -H "content-type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'
```

During local development you can also run the server over **stdio** — no token needed. See the [Build Guide](/info/build-guide.html).

## Authentication & security

- **Fail-closed.** With no token configured the endpoint returns `401` — it never silently becomes an open server.
- **Stateless OAuth 2.1.** The client registration, authorization code, and access/refresh tokens are all short-lived **signed values** verified with a shared secret on each call — nothing is stored server-side. PKCE (S256) protects the flow, so a captured link can't be replayed.
- **The token stays out of band.** It is the bearer for scripted clients and the passphrase on the consent page; it never appears in a render URL or a log line.

## Self-host it

The full endpoint is the one part of Lolly that is a **server-side add-on**, not an on-device component — producing the full format range means driving a **headless browser against a built web shell**, which runs as a hosted service (a container or worker), not offline or at the edge. The on-device shells — [web PWA](/info/using.html), desktop, mobile and [CLI](/info/cli.html) — remain the offline / air-gapped path.

You can run the full server yourself — including fully air-gapped — as a container that ships the scoped Chromium and a prebuilt web shell. See the [Build Guide](/info/build-guide.html) and the deployment notes in `services/mcp/`.

## Why this beats prompting an image model

- **Quality doesn't drift.** Layout, type, colour and spacing are structural — hard-coded by the tool author, not prompted. A lazy model can't degrade them.
- **Cheap.** A tool call is a handful of tokens versus thousands for a brief + generation — and the result is production-grade.
- **Deterministic & auditable.** Every output is reproducible from its inputs.
- **One design, many outputs.** Change `format`/`unit`/`width` to emit the same design as SVG, print PDF, and a social MP4 from one set of inputs.
