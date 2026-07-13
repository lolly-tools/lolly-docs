# FAQ

Frequently asked questions shown in the accordion on the `/info` landing page.

**How to maintain:** each `##` heading below is a question; everything beneath it
(up to the next `##`) is the answer. Answers use the same lightweight markdown as
the rest of the site - separate paragraphs with a blank line. Add, remove, or
reorder questions here and re-run `npm run build:info` (or `npm run dev:web`).
Everything above the first `##` (this title and these notes) is ignored by the build.

## What happens when I opt-in on the /profile page?

When you first use Lolly, everything you type anywhere is fully private until you deliberately want that information out there via media or a share link (if online).

With the opt-in selected, we embed some of your profile information as provenance into assets and bundles to identify you as the source.

Lolly produces a large volume of content. We take a strict data minimization approach to prevent risk.

### What are the feature flags?

Feature flags turn parts of Lolly on or off. Usually an administrator controls these - with Lolly, you are in control.

## How do I get the mobile or desktop apps?

Anybody can distribute their own apps, the tools and configuration of those apps should vary widely depending on what audience it's intended for. So there's no one app unless you made it or someone relevant gives it to you.

## Why the name "Lolly Tools"?

**Lolly** Because freedom is sweet.
**Tools** are inactive when not being used. Not spying on you, running secret programs, 
Put it to work, your orders, actions, and terms.

**Lolly** is an Australian, New Zealand, British term for 'sweets' or 'candy'. Just like lollies, tools are very tasty for people needing them.

We're also laughing at the time and bills we are saving with this approach.

## What hurdles could I expect adopting Lolly?

Lolly slots in wherever you already generate files - the CLI is the same engine
as the App, so a pipeline run at 2am can't drift from what a person previews in a
browser. The friction to adoption is rarely technical; it's organisational. Expect these:

**A curated brand catalog has to be authored.** Lolly is a platform, not a
finished pack of your templates. For a *governed rollout*, someone defines the shared
asset catalog (logos, palettes, fonts as permanent IDs) and writes the manifest +
template for each output type. Individuals don't have to wait for that, though - in
the open app anyone can ingest their own files into the catalogue and build tools in
Layout Studio from day one.

**Governance-by-git is optional - and unfamiliar to non-engineers.** If you run a
*shared, controlled* catalog, "the PR review *is* the moderation" is elegant for
engineers and unfamiliar to most brand and marketing teams. If the people who own
brand decisions don't live in git, you'll want a workflow that bridges them - or IT
quietly becomes the strategic design partner and wider institutional gatekeeper
(preferred by many in long-running production environments). Teams that don't want
this simply skip it.

**It's deliberately narrow - frame it that way.** Lolly is not for bespoke or hero
content. It *is* your personal DAM - hydrated and supercharged by your design
system, tools and catalog - and it *does* have an open canvas (Layout Studio), but
even there colours, type and assets conform to the active design globals, so free
arrangement stays inside the system. Judged against Figma or Canva it will
look limited. Judged as what it is - operationalised, recurring, massive-scale asset
generation - nothing competes. The wrong framing is the most common set-back.

**Change management on the producing side.** Existing processes work today, even if
the output is off-brand. Re-pointing them at the engine means re-testing re-learning,
and "we can already makes files" becomes the excuse not to migrate. Start by converting
one high-visibility production quality output and showing the before/after side by side.

Lolly lifts everything up.


## What makes utilities different from tools?

**Basic Answer →** Utilities dont alawys need to render and therefore can get a different UX. 

**Real Answer →** The reason utilities are hostable inside Lolly Tools is to add yet-another 'convenience layer' of defence to disincentivise data-exfiltration. 

Why? Because it is known that every day, people take **confidential content they already have** and hand it to a
random website to perform one small mechanical operation:

- "**Compress this PDF**" → uploads a contract / payslip / board deck to unknown entities.
- "**convert HEIC to JPG**" → uploads personal photos (with GPS EXIF) to an ad-funded host
- "**crop / resize this image**" → uploads a product screenshot or unreleased asset
- "**format this JSON**" / "decode this JWT" → pastes API responses, tokens, secrets into a formatter
- "**merge these PDFs**" → uploads **two documents that should never share a server**

These sites and their massive clone long-tail are **not trustworthy by default** with
unknown retention, unknown jurisdictions, unknown subprocessors, and an ad/affiliate
business model that has every incentive to keep what you give them. The operation is
trivial; the **content is the cost.** 

We win the war for governance with excellent conveinece and service. 

## Can Lolly edit and render my Figma, Penpot, Illustrator or InDesign files?

Yes. Open **Layout Studio** and click **Import a design**: it accepts a native Figma **.fig** (Save local copy), a Penpot **.penpot** export, an Illustrator **.ai** or **.pdf**, an InDesign **.idml** (File → Export → InDesign Markup), or **any SVG** (the wide door - almost any design app exports it). Everything is parsed entirely on your device, no account or plugin needed.

Layers arrive as editable boxes on the open canvas: text stays retypable, shapes stay shapes, images join your on-device library, and type and colours conform to the brand globals. Save it and the layout becomes a reusable, URL-addressable template anyone with Lolly can refill - and you can mix in live tools (a QR code, a chart) that re-render on load. From there it renders like anything else in Lolly - SVG, PDF, PNG and the rest, reproducible from its URL. See [Import a design](/info/design-import.html).

## What happens on Aug 29?

The SUSE-branded tools leave the project, and new generic example tools defined by the user take over.

SUSE will operate its own Lolly to protect its trademarks.

## How much is SUSE keeping private? (aka when is the rug-pull)

SUSE's trademarks and branded tools are for demonstration only, until August 29. You can find an unbranded instance of Lolly at [lolly.ART](https://lolly.art).

SUSE is an enterprise open source infrastructure company with more than three decades of platform leadership. Its products include enterprise-tier Linux, Cloud Native, Edge, and AI infrastructure solutions.

From SUSE's perspective, this is about walking the talk on sovereignty and security. As of today, the likelihood SUSE productizes Lolly is near absolute zero.

Full disclosure: SUSE *is* building out internal tooling to integrate Lolly within its IT systems - that's about SUSE's internal set-up, not public vs. private development.

Speaking of the public side, Lolly aims to be built through [Open Build Service](https://openbuildservice.org/), with secure supply-chain artifacts delivered by the [SUSE Application Collection](https://apps.rancher.io/applications).

We'll build as much as we can in the open - you just won't see SUSE-branded tools for long, nor SUSE's internal workforce and commercial processes, which are unrelated to Lolly.

## What flavour is that Lolly logo?

Some say Lime, others say Mint and sometimes Apple, Lolly brings the sweetness, you make the flavour happen!