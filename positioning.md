# How Lolly compares

Where this platform fits in the wider creative-tools landscape, and where it deliberately does **not** play.

> **Pilot status:** Lolly is a closed-pilot prototype, not a finished product, and its security is currently undergoing SUSE's strict infrastructure hardening, preparing for enterprise scale. This positioning is where Lolly *aims* to sit - the [Adoption & Governance](/info/adoption-governance.html#status) page covers how that's being tested in practice.

## Landscape

| Capability | Canva (Open canvas) | Brand portals (DAM templating) | Illustrator (Desktop pro) | Figma / Penpot (Online pro) | **Lolly (Constraints-first)** |
|---|---|---|---|---|---|
| Mass content generation | partial | ✗ | ✗ | ✗ | **✓** |
| Works fully offline | ✗ | ✗ | ✓ | partial | **✓** |
| Template logic & hard constraints | ✗ | partial | ✗ | partial | **✓** |
| No design skill required | partial | ✓ | ✗ | ✗ | **✓** |
| Automatic Content Credentials | ✗ | ✗ | partial | ✗ | **✓** |
| Tools compose other tools | ✗ | ✗ | ✗ | ✗ | **✓** |
| Open engine, not SaaS-locked | ✗ | ✗ | ✗ | partial | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in forensic-level provenance | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobile and Desktop Apps | ✓ | ✗ | ✗ | partial | **✓** |
| Command Line & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |


The shape of the gap is clear: nothing in the existing landscape gives us constraints-first, offline-capable, low-skill, internally accessible, generative output. Lolly now ships an open canvas of its own - **Layout Studio**, a direct-manipulation free canvas - but with a decisive difference from the Canva column: colours, type and assets placed on it conform to the brand globals, so even free arrangement stays constraints-first. What Lolly still is **not** is an unconstrained design suite; designers will continue to use Illustrator and Figma for bespoke work - and when that work needs to become a governed, reproducible asset, Layout Studio's [Import a design](/info/design-import.html) brings the finished Figma/Illustrator/Penpot file onto the canvas as editable, brand-conformed boxes.

## Use it for

- Rapid generation of operationalised creative assets (event tiles, badges, signatures, alerts)
- Free-form arrangement on the open canvas (Layout Studio) when the pieces - colours, type, icons, images - must stay conformed to the brand globals
- Landing a finished Figma, Illustrator, InDesign or Penpot design (Layout Studio's Import a design) so it can be edited, governed and re-rendered deterministically in every Lolly format
- One-to-many "fill in three fields, get the finished asset" flows - including bulk runs from a spreadsheet/CSV in the `/pro` batch grid (paste or import rows, one finished asset per row, download as a zip)
- Always-on, recurring branded outputs
- Things where central control of brand expression matters more than expressive flexibility

## Do not use it for

- Bespoke or flagship hero content (billboards, major videos)
- Unique campaign work that genuinely needs a designer
- Ideation that needs to escape the brand system entirely - Lolly's open canvas still conforms colours, type and assets to the brand globals, and that's the point

## Approve the tool, not the file

Every other tool in the landscape produces a *file* that then has to be checked - a brand manager in a Slack thread, legal on the disclaimer, a round of changes, another review. Lolly moves the approval **one step upstream**. The brand rules - exact hex codes, licensed font files, bleed margins, spacing - are hard-coded into the tool's HTML and CSS, so the template *physically cannot* emit an off-brand asset. The layout itself is load-bearing.

So you stop approving outputs and start approving the **tool** that makes them. Approve it once, and every asset it ever produces is pre-approved by construction - no human in the loop, no review cycle, at any volume.

This is the paradigm shift the deterministic engine actually delivers: it isn't a faster version of the old approval process, it removes the process. For the creative team it's a guard-rail, not a replacement - you still throw the ball (the data, the copy, the image) and the code is the bumper lane that keeps every throw out of the gutter.

| Approving assets the old way | Approving the tool, the Lolly way |
|---|---|
| Every finished file is checked, one at a time | The tool is checked once |
| Request → designer builds → brand review → legal check → changes → re-review | One parameter change → finished asset |
| Designer, brand manager, legal and requester all in the loop | The producer, on their own |
| Days per asset | Seconds per asset |
| 10,000 assets = 10,000 review cycles | 10,000 assets = zero (the template was already approved) |

## What this uniquely provides

- **Wild design potential delivered safely in context.** Tools can express adventurous design ideas inside hard coded guard-rails.
- **Software-defined content automation that returns the final asset.** Input → final file. No "now save it from your design tool and post-process it."
- **Tools compose tools.** One tool can embed another tool's render and return it as part of a single finished asset, with no tool-to-tool code coupling - a primitive no open-canvas or DAM-templating product in the landscape offers.
- **Vendor neutrality.** Full feature and cost control. Open-source engine. Tools and assets are git-tracked content, not locked in a SaaS database.
