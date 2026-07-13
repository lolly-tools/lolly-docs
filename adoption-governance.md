# Adoption & Governance

> Lolly is an internal prototype in a closed pilot - a fast-moving behavioural experiment inside the enterprise, not a finished product. This page is the honest account of who it's for, how people are meant to adopt it, how we'll know if it's working, and who governs what it produces.

Most of this platform's documentation describes what Lolly *can do*. This page describes what Lolly is *doing right now*: running a pilot, gathering evidence, and trying to change a behaviour - how ordinary, non-designer colleagues get an on-brand file made.

## Status

**Lolly is a closed-pilot prototype. Treat it as one.**

- **It hasn't finished its pilot.** The pilot is in progress and has not completed. Features, defaults, claims and even the tool catalog can still change as we learn. There is more to share on **August 29**.
- **Its security is hardening for enterprise scale.** Lolly's cryptography and file-parsing engines - including the C2PA provenance seals, the X.509 identity handling, and on-device PDF/ZIP/link encryption - are currently undergoing SUSE's strict infrastructure hardening, preparing for enterprise scale. We're really good at this. They are strong *by design*; while that hardening completes, don't rely on them where an independent assurance is contractually required.
- **It is arithmetically robust and evidentially empty.** The engine is deterministic and the maths is sound, but the product was, in effect, born yesterday. **SUSE is customer number one.** There is very little real-world adoption data yet.
- **If you're using it, we need your story.** The architecture is done; the evidence is not. What actually improves Lolly from here is real usage - what worked, what didn't, and what you managed to make. See [We need your story](#we-need-your-story).

This framing is deliberate. Judged as a finished marvel, Lolly will disappoint. Judged as a pilot trying to prove a specific behavioural change - routine creative work, done safely, without a designer in the loop - it has a clear job and a clear way to measure whether it's doing it.

## Who Lolly is for

Adoption succeeds or fails on the **producer** - the non-designer who has to make something on-brand and, today, either waits for a designer or does it off-brand in whatever tool they have. Everyone else in this table exists to make that person's path frictionless.

| User | Who they are | The friction Lolly removes | What they adopt |
|---|---|---|---|
| **The producer** | Marketers, sales, events, ops, comms - non-designers who need finished, on-brand files | "I need this now, I don't want to break the brand, and I don't want to wait for design" | The app: pick a tool, fill in fields, get the asset |
| **The brand owner / designer** | The people who own how the brand looks | Re-typing the same layout, policing off-brand output after the fact | Authoring tools & the asset catalog - encoding the rules once |
| **The developer / platform team** | Engineers who automate and deploy | Storing binaries in Git, custom renderers, cloud image bills | The CLI, URL mode, MCP endpoints, self-hosting |
| **The AI agent** | Automated workflows that produce assets | Token-expensive, drifting, un-auditable image generation | The MCP tools - deterministic renders from parameters |
| **IT & security** | The people accountable for data leaving the building | Colleagues uploading sensitive files to random web tools | On-device utilities, air-gapped deployment, governance-as-data |

The pilot's centre of gravity is the **producer**. If producers don't self-serve, nothing else matters - the developer integrations and the governance model are means to that end.

## What onboarding looks like

### The first 15 minutes (any producer)

1. **Open Lolly** - the web app needs no install, no account, no sign-up. Nothing you type leaves your device.
2. **Pick a tool** that matches what you need (an event tile, a quote card, a signature).
3. **Fill in the fields.** No fonts, colours or spacing to decide - the tool already holds the brand rules.
4. **Get the file.** Download it, copy a share link, or export a batch. Done.
5. **Save the session** so you (or a teammate) can reopen and re-render it later.

The measure of a good onboarding here is blunt: *did they leave with a finished, on-brand file, without asking anyone?*

### The brand owner / designer

Onboarding is about handing over control of the rules, not the output:

1. Define the **asset catalog** - logos, palettes, fonts as permanent IDs.
2. Author the **tools** most in demand (start with the two or three asset types your team asks for weekly).
3. Convert **one high-visibility output** and show the before/after side by side - this is the single most effective adoption lever.
4. Set the **guard-rails**: lock what must never change, expose only what's meant to vary.

### The developer / platform team

1. Run a tool from the **CLI** to see the same engine the app uses (`lolly qr-code --url=… --output=…`).
2. Wire a render into a **build step** or an **MCP endpoint**.
3. Decide the **deployment shape**: hosted PWA, self-hosted, or air-gapped runner pods.

### IT & security

1. Confirm the **data posture**: no telemetry, no backend, nothing uploaded by default.
2. Scope the **pilot** to a low-risk context while the security audit is still outstanding (see [Status](#status)).
3. Decide who owns **governance** - see [Governance](#governance) below.

## Measuring adoption

We measure a behavioural change, not feature usage. The north-star is **design-ticket deflection**: routine creative requests that are now self-served and never reach the design queue at all.

| Signal | What it tells us | Type |
|---|---|---|
| **Activation** | Share of invited pilot users who render at least one *real* asset | Leading |
| **Self-serve rate** | Assets produced without a design ticket | Leading |
| **Time-to-asset** | Brief → finished file, in minutes not days | Leading |
| **Tool coverage** | Share of routine asset types that have a matching tool | Leading |
| **Repeat use** | Users who come back within a 30-day window | Leading |
| **Design-ticket deflection** | Routine requests that never reach the design queue | **Lagging / north-star** |
| **Story capture** | Concrete before/after cases collected from real users | Qualitative |

A leading signal moving without deflection following is a warning: people are trying Lolly but the work is still landing on a designer's desk. Deflection is the number that says the behaviour actually changed.

### The 90-day pilot cycle

Adoption runs on a **90-day** feedback loop. Each cycle:

1. **Weeks 1–2 - Onboard a cohort.** Bring in one team, author the tools they most need, remove the obvious blockers.
2. **Weeks 3–10 - Use and observe.** Watch the leading signals; collect stories; fix what's in the way.
3. **Weeks 11–12 - Review and re-aim.** Read the deflection number, decide which tools and which next cohort come next.

The 90-day cycle is the *cadence*. It is not the goal - it's how often we re-check whether the goal is moving.

### From cycle to deflection target

The goal the cycle serves is deflection, and it should ramp. The pilot targets **30% design-ticket deflection by month 6** - roughly one in three routine requests self-served away from the design queue.

| Month | Focus | Target deflection |
|---|---|---|
| Month 1 | Onboard first cohort; author first tools | baseline (~0%) |
| Month 2 | First self-serve wins | ~5% |
| Month 3 | End of first 90-day cycle; review | ~10% |
| Month 4 | Expand the tool catalog | ~18% |
| Month 5 | Onboard second cohort | ~25% |
| Month 6 | **Target** | **30%** |

30% is deliberately a *pilot* target, not an end state. It's the threshold that says the behaviour change is real and worth scaling - not a ceiling on what deflection could eventually reach.

## Governance (when you want it)

Most people just make things - author their own tools in Layout Studio and ingest their own files into the catalogue, entirely in-app, with no git and no approval step. Governance is what you reach for when an organisation wants a **shared, controlled** catalog: an option that runs the rules the way engineering runs code - **the rules are data, and changing them is a reviewable change.**

- **A shared catalog can be the source of truth.** Tools and assets are git-tracked content - a manifest, a template, optional hooks. What ships is exactly what was approved to ship.
- **Review can be the moderation.** With that model, a change to a tool or asset is a pull request. It's elegant for engineers and unfamiliar to most brand and marketing teams - plan for that gap. If the people who own brand decisions don't live in git, you'll want a workflow that bridges them, or IT quietly becomes the strategic design gatekeeper (which some long-running production environments actually prefer). Teams that don't need this simply skip it.
- **Guard-rails are structural, not advisory.** Brand constraints are hard-coded in the tool; even the open canvas (Layout Studio) conforms colours, type and assets to the brand globals. Off-brand output isn't policed after the fact - it's prevented at authoring time.
- **Feature flags put control local.** Parts of Lolly can be turned on or off per deployment. Usually an administrator owns those; with Lolly, whoever runs the deployment does.
- **Configuration is yours.** A deployment can overlay its own authentication, telemetry, or Certificate Authority to meet corporate compliance - none of it is on by default.

The most common adoption set-back is not technical; it's **framing and change management**. Existing processes work today even when the output is off-brand, and "we can already make files" becomes the excuse not to migrate. The counter is to convert one high-visibility output well and let the before/after make the case. See the [FAQ on adoption hurdles](/info/index.html#faq-what-hurdles-could-i-expect-adopting-lolly).

## We need your story

Because Lolly collects no telemetry and phones nothing home, **we genuinely do not know who runs it or how well it's working** - and that's by design. The flip side is that the pilot depends on you telling us.

If you are piloting Lolly, the most valuable thing you can contribute is a concrete before/after: what you used to do, what you did with Lolly, how long it took, and where it fell short. That evidence - not more architecture - is what moves this from a promising prototype to something proven.

## Honest limitations

To keep the framing straight, the things Lolly is *not* yet:

- **Not yet independently certified.** See [Status](#status). The cryptography and parsers are undergoing SUSE's strict infrastructure hardening for enterprise scale, not yet certified by an independent party.
- **Not a finished product.** It's a pilot; expect rough edges and change.
- **Not a turnkey pack of your templates.** Lolly is a platform - someone has to author the catalog and the tools before producers can self-serve.
- **Not for hero content.** It's for operationalised, recurring, massive-scale asset generation. Judged against Figma or Canva it will look narrow - that narrowness is the point.
- **Not yet backed by evidence.** The maths is robust; the track record is a day old. Help us change that.
