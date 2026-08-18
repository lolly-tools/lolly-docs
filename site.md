
# Lolly - Landing page copy

Yours to make, yours to keep: finished files in seconds, on your own device.
Pick a tool, add your words, it comes out right: colours, fonts and layout are already sorted.
Identical where you want it, different how you want it.
Free, and it stays free: no account, no card, no catch.


---

## Marketers

### Everything finished, without the wait.

You need a quote card, an event tile, a localized signature - today, not next sprint. Lolly hands it back finished and on-brand, even if you've never opened a design tool. The rules live in the template, so the output comes out right.

- **Fill in a few fields, get the finished asset.** No fonts to pick, no colours to second-guess, no "is this the right logo?" The tool already knows. You bring the words.
- **Endless variations, one source of truth.** Localize a quote card into 12 languages, swap a brand lockup across 40 campaigns or make every size variant for every placement - without touching the design. Drive it all from a spreadsheet in the batch grid: paste or import a CSV, get one finished file per row.
- **No creative-agency bottleneck for routine assets.** Email signatures, event countdowns, quote cards, QR codes - everything your team needs on a Tuesday at 4pm, self-serve.
- **No procurement round for a picture.** No new subscription to approve, no licence to audit, no seat to buy for the person who needed one tile on a Tuesday.

---

## Sales

### Walk into every meeting with exactly what you need.

You're on the road, the deck is wrong, the customer asked for something specific. Lolly turns any device into an asset studio - no designer, no wait, no excuses.

- **Wait on nothing.** If you're on the road, there are no days left before your meeting, you need assets now. Generate them.
- **Fix the deck you already have.** Drop the PowerPoint on Lolly and its slides open straight away, so you can pick the ones worth keeping and reuse them as sharp vector art - then rebuild the deck from a few lines of Markdown and send back a native, editable `.pptx`.
- **One person, the whole campaign.** Every rep, in every region, working from the same rules, with the same finish.
- **World class experience.** Nothing looks rushed even though it was rendered instantly. Nothing is a one-off - so every interaction gets a little more polished than the last.
- **The work is already done when they ask.** A tool built the first time somebody needed this asset makes it again in seconds, at any hour, in any time zone.

---

## Journalists

### Your editorial toolkit, built for speed and precision.

Build your info-editorial style once, then generate publication-quality assets from live data as it happens.

- **Bring data directly into visuals.** Connect structured data to chart, map and table templates. Update the numbers; the layout takes care of itself.
- **Match your publication's style, exactly.** Tools are authored with hard-coded typographic and color constraints - your house style enforced at the template level, not as a loose guideline.
- **Print-ready or screen-ready.** Export SVG, CMYK PDF, high-res PNG or 60fps video from the same template. One source, every format your production desk needs.
- **Reusable formats for recurring stories.** Election results, quarterly earnings, weather events - build the template once and reuse it every time the story runs.

---

## Operations

### Industrial rigour for everyday output.

Not everything is marketing. Consignment labels, badge runs, compliance one-pagers, incident notices - output where the layout carries the meaning and the data can't be wrong. Lolly treats a consignment label with the same rigour it treats a campaign poster.

- **Structured data in, exact output.** Feed a CSV or JSON table and every field lands precisely where the template expects it - one finished file per row.
- **Physical precision.** Real units (mm/cm/in/pt), true DPI, bleed and crop marks. A label printer or a print shop gets exactly what it needs.
- **Logic runs inside the tool.** Barcodes, date maths, conditional layouts, contrast checks - computed at render time, not by hand.
- **Deterministic by design.** Same inputs, same file, every time. Auditable, repeatable, automatable from the CLI or a pipeline.

---

## Media & Creatives

### Stop doing things machines do best.

You design systems and solve problems, not one-offs. Lolly is the execution layer that turns your design decisions into tools your whole organization can use - without you in the loop for every asset.

- **The ceiling is the web platform itself.** Advanced filters, compositing, animation, generative design: every web technology is available to the template author, and whatever a browser can draw, a tool can export at production quality.
- **Tools compose tools.** One tool can embed another tool's output as a live asset - a name badge that renders its own QR code, a card that drops in a live chart - with no design tool and no manual compositing.
- **Author tools, not files.** Build a template that generates 10,000 social cards rather than making 10,000 social cards. Your time goes to the design problem, not the production run.
- **Eliminate the tedious.** Optimal typesetting, logo placement, map pin positioning, color contrast checks, export sizing - all resolved at the template layer. You define the rules once, leave the repetition to the machine.
- **Lock what shouldn't change, free what should.** Hard-code the brand constraints. Expose only the variables that are actually meant to vary. The tool becomes the creative guardrail.

---

## Developers

### Your build pipeline should include your visuals.

Images are build artifacts. Treat them that way. Lolly runs from the CLI so you can generate assets the same way you generate everything else - repeatably, automatically and as part of your workflow.

- **Put the model on the sketch, not the press.** Generating press-quality media by prompt is expensive and lands close rather than right. A tool makes the same file every time, for nothing.
- **Reproducible outputs.** Same inputs produce the same file, every time. Commit a URL, regenerate on demand - no more checking in images or chasing the latest version from Slack.
- **Get media out of your codebase.** Generate OG images, QR codes, social cards and data visuals at build time instead of storing binaries in Git.
- **Execute logic inside assets.** Tools like Code Canvas and Chart Creator let you place real content - code snippets, structured data, live values - inside production-quality templates without building a custom renderer.
- **Zero lock-in.** Open source engine, local compute, no API keys, no rate limits.

```bash
lolly qr-code --url=https://suse.com --output=og-qr.svg
lolly wordmark --text="Ship it." --output=wordmark.png
```

---

## AI Agents

### Tell your model to use a tool, not hallucinate.

A URL with parameters is a few tokens. A creative brief plus image generation is thousands - and the result still isn't press-quality. Lolly gives your agent a deterministic, reviewable creative layer, ready for production.


- **Production Quality doesn't drift.** Tools produce production quality artwork at a fraction of the compute - done locally. Tools are hard-coded. When your model gets lazy, the layout won't. The typographic rules, the color values, the spacing - they're structural, not prompted.
- **Save tokens at scale.** Generating a custom event card from a URL costs a fraction of what it costs to prompt-engineer the same output through a generative model.
- **Put data where it belongs.** Structured inputs map to structured templates. Speaker names, session times, product versions - placed precisely where the design expects them, every time.
- **Deterministic, auditable, version-controlled.** Every output is reproducible from its inputs. No stochastic surprises in production assets.

```
Use Lolly to invite the team to KubeCon.

Parameters:
  title: "KubeCon 2026"
  date: "2026-11-10"
  location: "Atlanta"

Output the file URL.
```

---

## IT and security teams at large enterprises

### Creative files shouldn't be a security risk.

Every time someone uploads a file to a third-party service to "just make it look right," that's a data exfiltration event waiting to happen. Lolly eliminates the problem at the source - creative production stays on-premise and under your control.

- **Data stays on the device.** No cloud rendering, no analytics, no telemetry - and no network request at all beyond the handful a user explicitly triggers, each one named in the [privacy policy](/info/privacy.html). What colleagues create stays on their machine. On-device utilities help you out - nothing is uploaded. Even encryption and passwords happens on-device..
- **Self-host for full air-gap control.** Deploy on your own infrastructure; the two optional server components can be omitted entirely. [Sovereign production](/info/sovereign-production.html) states the whole posture, and [Server Surface](/info/server-surface.html) is the complete inventory.
- **Reduce vendor surface area.** One open-source platform replaces a sprawl of SaaS subscriptions for creative production. Fewer vendors means fewer contracts, fewer audits and fewer breach vectors.
- **Enforce brand governance at the infrastructure level.** Tools are authored once and distributed as data - not files, not manual processes. What goes out the door is exactly what was approved to go out the door.
- **Get critical information into human-readable formats instantly.** Incident communications, compliance reports, executive briefings - structured data becomes publication-quality output in seconds, no design bottleneck.
- **Hardening, in the open.** Lolly's cryptography and file-parsing engines are going through SUSE's infrastructure hardening: the experts behind more than three decades of security technology and services for the world's largest enterprises. Content Credentials and local encryption are strong by design. See [Adoption & governance](/info/adoption-governance.html#status).

---

## What you get

**A powerful creative production platform.** The Lolly engine works to achieve the highest quality each format can produce on your hardware, without comrpromise.

**100% free and open source.** No SaaS fees, no usage limits, no vendor dependency.

**Works everywhere.** Web PWA, Mac, Windows, Linux, iOS, Android, CLI, terminal TUI - same engine, same output.

**Formats, in and out.** Dozens in, dozens out and many of them both ways - the full breakdown is on the [Formats page](/info/formats.html), and every format in detail on the [Exporting page](/info/exporting.html).

**Production quality.** Outlined type, Spot color support, 60FPS · Media fit for the studio.


## The Tools


Think of it like a vending machine for design. Make a selection, get a result. Every time.

A tool is a ready-to-use creative template that knows exactly what it's making and how. Give it a headline, a date, a number - and it produces a finished asset, to spec.

No design experience needed. No decisions about fonts, colors or spacing - the tool already knows best. Whether you're a designer, a marketer, a developer or an AI agent, the output is the same.

Tools are authored once by the people who know the brand, and then used by everyone else - from a web browser, a phone, the command line or an automated pipeline. The design decisions are locked in at the template level. The only thing left to do is fill in the content.
