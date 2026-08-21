# The Brand Studio

The **Brand Studio** at `#/start` is the one place you shape your brand - its logos, colours, type, the rest of your tokens and the files it keeps. Set it here once and every tool, page and export follows it *by construction*, not by review.

Changes preview **live across the whole app** as you make them, so you can see a colour or a font land everywhere before you commit it. It's all on-device: your brand files and tokens never leave your machine (picking a Google Font fetches that one family from Google, once, after a consent dialog), and the brand travels in a single [brand pack](#move-a-brand-between-devices) file.

> **This is the editor. The dashboard is the mirror.** The **Design system** tab on the Dashboard (`#/d`) *shows* your brand read-only; you *edit* it here at `#/start`. If you want to change a colour later, come back to the Brand Studio.

## The rooms

The studio is a set of **rooms** listed in a rail down the side - not steps. Nothing is numbered, nothing is gated on anything else and arriving in any of them is legitimate:

- **Overview** - the hub. What exists right now, at a glance, with a door into each room.
- **Colours** - add colours one at a time, assign roles or generate a whole palette from one.
- **Type** - the four faces the app, your tools and every export read.
- **Logos** - your marks, in every orientation and treatment.
- **Tokens** - corner radius, spacing, shadows and the rest of the system.
- **Files** - the image, audio and motion files your brand keeps.

On a phone the same list becomes a horizontal chip strip pinned under the header. Switching room never reloads anything - the editor keeps all its panels mounted and simply shows the one you asked for.

**Deep-link a room** with `#/start?area=<key>`. The keys are `overview`, `color` *(note the US spelling in the URL)*, `type`, `logos`, `tokens`, `catalogue` (the Files room - the panel key is a permanent contract, so the URL keeps the old name) and `versions`. `?tab=` is the long-standing alias for the same thing and still resolves, so old links and bookmarks keep working; anything unrecognised opens Overview rather than dead-ending.

Pinned to the **foot of the rail** are the actions that belong to the whole design system rather than to one room:

- **Add from…** - the source picker, for bringing a brand in from a file, a PDF, an image, a font or a website. See [Bring a brand in](#bring-a-brand-in) below.
- **Tray** - the candidates a scan turned up but hasn't committed. It stays hidden until a scan actually keeps something, and carries a count when it does; nothing in it changes your brand until you press Add on that row.
- **Export** - writes the whole brand as one `LollyBrand-…zip`.
- **Tokens (.json)** - the plain design-tokens document on its own, for a repo, a build step or another tokens tool.
- **Versions** - publish, activate and restore named copies of the design system. Hidden until there's something of your own to publish (or a `?area=versions` link asks for it by name).

![The studio room rail - Overview, Colours, Type, Logos, Tokens and Files](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&cropSelector=.ds-rail&format=svg&walker=1&localize=1&dark=1&filename=brand-studio&try=1)

## Overview

Overview is the room you land in, and it has two faces.

With **nothing set up yet** it offers two doors - **Start from a file** (design tokens, a Penpot project, a design system pack or an SVG) and **Start from scratch** (add one colour, then keep going whenever you like) - and a quiet **Explore the tools** exit under them, because leaving is a legitimate answer too.

Once a design system exists, the same room shows **what you have**: the palette and its colour count, the type families in force, how many logo slots are filled, how many tokens there are and the Files room. Every block is a door into its room. There are counts here, never a progress bar and never a finish card - nothing in this studio is owed.

## Logos

Start by emptying your folder of marks into the drop zone at the top: **"Drop marks here, or choose several at once"** takes as many files as you have in one go. Each file is read for its shape and its ink, then queued under **Waiting for a slot** as a chip that says what it thinks - *"Looks like the Horizontal primary"*, with the measurement it went on, and a **Place** button (**Replace**, where that slot is already filled). Where it isn't sure the chip says so plainly and offers **Change slot** instead, which lists all eight. Nothing is placed until you press something.

Two things happen around that queue. A mark with surplus empty margin gets a **trim offer** first - answer it or press Escape and the original file goes in untouched. And where a mark can furnish an empty sibling slot, the room offers the derived **mono** or **reverse** version as its own chip, marked *Generated*, which disappears again if you fill that slot another way.

Below that sits the grid every mark ends up in - **orientation × treatment** slots:

- **Orientations:** Horizontal (wordmark + symbol in a row) and Vertical (stacked, for square and tall spaces).
- **Treatments:** Primary, Primary reverse (for dark backgrounds), Mono (one colour) and Mono reverse.

That's eight optional slots. Click a slot to add a PNG, SVG, JPEG or WebP; click a filled slot to replace it. Every slot is optional and everything stays on this device.

![The logo matrix - each orientation across the top, each treatment as its own dashed slot, all of them optional](/t/url-shot?url=%2F%23%2Fstart%3Ftab%3Dlogos&width=1440&height=1600&dpi=192&waitMs=1600&cropSelector=.be-logo-grid&format=svg&walker=1&dark=1&filename=bs-logo-slots)

- **Custom marks** - add marks your brand names its own way (an icon, a crest, a favicon) under **Custom marks**; name it and choose a file.
- **More identities** - a sub-brand, product or event can have its own full set of logos. Use **+ Add another logo** and name it; your main set is simply "Your logo".
- **Upload an SVG and Lolly reads its colours.** On a brand-new install it quietly sets your primary colour from the logo and says so. On an existing brand it offers the colour as a suggestion instead - *"Found in the logo: #…"* with a **Use as primary** button beside it - over in the Colours room, where you can take it or dismiss it.

## Colours

The richest room, in two panes. The left is where you work; the right is your **live palette**. Drag the divider between them to resize (Enter on it collapses the palette out of the way).

![The Colours room - a primary colour derives ramps, specimen cards with contrast ratios and a live palette](/t/url-shot?url=%2F%23%2Fstart%3Farea%3Dcolor%26focus%3Dgenerate&width=1440&height=900&dpi=192&waitMs=1800&format=svg&walker=1&localize=1&dark=1&filename=brand-colours)

### Add a colour, then give it a job

**Add a colour** is the whole of the simple path: paste or pick a colour in any notation and it becomes exactly one token. Nothing is derived from it, nothing is suggested into it, nothing else is demanded. Paste a whole *list* of colours and each one becomes a chip you can add on its own.

**Roles** is the layer over the top - which colour plays each part. Roles are optional (a design system of three loose colours and no roles is a perfectly good one), any swatch can take one and the contrast readout is measured against the surface, APCA first.

### The expert wings

Four folded sections sit beneath those two. Open the one you want; each is deep-linkable as `#/start?area=color&focus=<wing>`:

- **Generate a starter palette** (`focus=generate`) - one colour into a full set of shades. Described below.
- **Shade curves** (`focus=curves`) - reshape a ramp point by point. Lightness, chroma and hue each get their own curve, switched with L / C / H, and the shades below rebake live as you drag.
- **Contrast** (`focus=contrast`) - **Contrast-lock** retones a ramp to hit APCA targets against a background you pick, each step keeping its own hue and chroma; **Rotate hue** turns the whole ramp bodily around the wheel, every shade keeping its lightness and chroma.
- **Print** (`focus=print`) - what the primary becomes on press: its automatic screen value, or a pinned CMYK build or a named spot ink instead.

### One colour, a whole palette

Inside **Generate a starter palette**, pick a **Primary colour** and Lolly works out a complete palette - light and dark surfaces, text, accents and full tint/shade ramps - using the same perceptual colour maths (OKLCH) the engine uses everywhere. Tune the derivation:

- **Scheme** - Mono, Complement, Analogous or Triad - sets how the secondary colour relates to your primary.
- **Shades** - a slider from 3 to 20 (default 5) controls how many steps each ramp generates.
- **Fine-tune** (folded) - **UI intensity** (Muted / Deep), **Contrast** (Comfort / High) and **Text on brand** (Auto / Light / Dark).

Nothing in this wing writes anything to your brand. It is a preview, live across the app so you can judge it, right up until you press **Replace palette** (below).

Below the primary you'll see live **Primary / Neutral / Secondary / Blend** ramps and Light and Dark specimen cards, each carrying its own contrast readout - the WCAG ratio with the APCA `Lc` figure beside it. **Click a step in the Neutral or Secondary ramp** to anchor that shade instead of the derived default.

![The four ramps stacked above light and dark specimen cards, each card carrying its own WCAG contrast ratio](/t/url-shot?url=%2F%23%2Fstart%3Farea%3Dcolor%26focus%3Dgenerate&width=1440&height=1400&dpi=192&waitMs=1800&css=.start-head%7Bdisplay%3Anone%7D&cropSelector=.be-preview&format=svg&walker=1&dark=1&filename=bs-colour-ramps)

### Build your palette (harmony generator)

Still in the same wing, **Build your palette** generates matching accent colours from your primary. Pick a **Harmony** - **Complementary**, **Adjacent**, **Triad**, **Tetrad** or **Analogous** (which brings its own **Accents** count, 2 to 5, and a hue **Angle** from 10° to 45°) - and each candidate arrives with an auto-generated human-readable name and a **+ Add** button. Adding one puts that colour in your palette immediately, one press to one token. *"Your palette, applied"* previews the whole set on real graphics.

![Generated accents, each with a swatch, an auto-generated name, its hex and an Add button](/t/url-shot?url=%2F%23%2Fstart%3Farea%3Dcolor%26focus%3Dgenerate&width=1440&height=900&dpi=192&waitMs=1800&css=.start-head%2C.be-colour%7Bdisplay%3Anone%7D&cropSelector=.be-candidates&walker=1&format=svg&dark=1&filename=bs-harmony-candidates)

### Committing a generated palette

**Replace palette** is the one control in this wing that writes anything, and it never writes straight away. Press it and a review card opens first, headed **"Replace the palette?"**, itemising exactly what is about to happen: how many roles stay as you assigned them, how many colours you added yourself are kept, how many shade curves get re-anchored, how many print locks re-pinned, how many hidden shades stay hidden, how many gradient stops keep their colour.

**Replace palette** on that card commits it; **Cancel** walks away and changes nothing. Once it has run, the card becomes **"Palette replaced."** with a single **Undo** already focused - and a checkpoint of the whole design system is taken *before* the swap, so "put it back the way it was" is a restore rather than a lost afternoon.

### The palette, the chart and each swatch

The right pane lists every colour your brand carries, grouped (Primary, Neutral, Secondary, Spectrum, Custom, Roles), each group foldable with its own **+ Add**. Below it, **Colour chart** folds open on two views of the same swatches: the **Wheel** (the OKLCH wheel - drag a dot to recolour it, click a dot to edit it or click empty space to drop a new swatch) and the **Gamut** chart, which shows where the displayable range actually ends. `#/start?area=color&focus=chart` opens the card directly, as `?wheel` always has.

![The palette pane, every group foldable, with the download pill parked at its bottom edge](/t/url-shot?url=%2F%23%2Fstart%3Farea%3Dcolor%26focus%3Dgenerate&width=1440&height=900&dpi=192&waitMs=1800&cropSelector=.be-split-side&walker=1&format=svg&dark=1&filename=bs-palette-pane)

![The OKLCH wheel - angle is hue, distance out is chroma and the greys ride a lightness rail down the side](/t/url-shot?url=%2F%23%2Fstart%3Ftab%3Dcolor%26wheel&width=1440&height=900&dpi=192&waitMs=2400&css=.start-head%2C.be-pal%2C.be-gradients%7Bdisplay%3Anone%7D&cropSelector=.be-pal-wheel&walker=1&format=svg&dark=1&filename=bs-colour-wheel)

Click any swatch to open its editor:

- **Rename** it.
- **Set the colour** - the picker opens on perceptual **OKLCH** sliders, with modes for **Hex**, **HSL**, **RGB** and **CMYK**; the value field reads *and* writes in whichever space is active, so you can paste a hex or type ink percentages. Note that entering CMYK sets the *screen* colour by conversion - to pin exact inks, use the print lock below.
- **Stored as** - choose how the swatch is persisted: **LCH** (the default - perceptual, wide-gamut, the best choice for editing), Hex, RGB or HSL. Override it when you need to pin an exact legacy hex or match an sRGB value.
- **Use as** - hand this swatch one of the brand roles directly, without going back to the Roles panel. (A role's own tile doesn't offer it - a role can't take a role.)
- **Print substitutes** (folded) - lock the colour's print behaviour:
  - **CMYK** - switch it from **Auto** to **Locked** to override the automatic sRGB→CMYK conversion with exact ink values (C/M/Y/K, 0–100).
  - **Spot colour** - switch it from **None** to **Set** to lock the swatch to a spot colour; give it a **Name** (e.g. `PANTONE 186 C`), an optional **Book** and an optional **Finish** (Ordinary ink by default) for when the ink is not an ink at all - a foil, an emboss or deboss, a spot varnish, a soft touch or a die cut, crease or perforation.
- **In other spaces** (folded) - the same idea widened: each row is a space this swatch can be expressed in, either derived from the canonical value or authored by you, and an authored one wins at export.

These print locks are what a press uses when you export a CMYK PDF or TIFF - see [Exporting](/info/exporting.html#colour-profiles).

**Deleting a swatch** is safe: derived ramp steps and theme roles are *hidden* (the underlying token keeps resolving, so nothing downstream breaks), while colours you added yourself are removed outright.

### Gradients

An optional **Gradients** panel builds blend tokens from your palette for backgrounds and accents. Skip it entirely if your brand doesn't do gradients. Each gradient has a preview, named stops (2–8) and an angle. The key behaviour: **a stop references a swatch**, so recolour that swatch and the gradient follows. Interpolation runs in OKLCH for clean blends. Delete a stop to trim the run.

### Take the palette elsewhere

The floating pill parked at the bottom edge of the palette pane downloads the whole palette as **Design tokens (JSON)**, **CSS variables**, **CSS classes**, **SCSS variables**, a **GIMP palette (.gpl)** or an **Adobe Swatch Exchange (.ase)** - so the brand drops straight into Illustrator, Figma, GIMP or a stylesheet. It sits outside the pane's scroller, so it keeps its seat however far the palette scrolls. (You can also download the palette from the [Catalogue](/info/using.html) view.)

## Type

The room leads with **four role cards** - the four faces the app, your tools and every export actually read. Each card shows what serves that role right now, set in that face, with a line of real copy under it:

- **Primary** - body copy, buttons and every tool.
- **Headings** - the display face for `h1`/`h2`.
- **Code** - a monospace face for code and data.
- **Italic** - a true italic companion for emphasis, quotations and asides.

Headings, code and italic each fall back to the primary until you assign them, so a one-font brand needs no decisions here at all. Nothing on a card commits anything: **Change** (or **Choose a face** on an empty role) opens the **compare stage** scoped to that role.

![The Type room - the role cards and a live specimen of each face doing its job](/t/url-shot?url=%2F%23%2Fstart%3Ftab%3Dtype&width=1440&height=900&dpi=192&waitMs=1800&format=svg&walker=1&dark=1&filename=brand-type)

### The compare stage

The stage opens **inline in the room**, not in a dialog, so the cards you came from stay on screen. Search a Google Fonts family (Inter, Fraunces, Space Grotesk…) or drop a font file, press **Add to the comparison** and the candidates stand side by side in the same words before any of them installs. Escape cancels and hands the keyboard back to the card you opened it from.

That is the one door in, which is why nothing enters your brand unseen. Below the stage sit the two management panels:

- **Fonts on this device** - every installed family, the roles it serves and a delete. **Add a face** here opens the same compare stage unscoped.
- **Your fonts** - upload a **TTF**, **OTF** or **WOFF** off your own machine. That's the path for a licensed corporate typeface you already own.

Either way the face stays on this device, renders in the app, in your tools and in every export, offline forever and travels in your brand pack - nothing is fetched at render time. Everything on Google Fonts ships under an open licence (OFL/Apache/UFL).

The **Type roles** panel at the foot shows a live specimen of each role - body and UI in the primary, an optional display face for the top headings, an italic for emphasis, a mono for code and data - so you can see the whole set working together.

![The Type roles specimen - heading, body, italic and code, each set in the face that role resolves to, with the face name beside it](/t/url-shot?url=%2F%23%2Fstart%3Ftab%3Dtype&width=1440&height=900&dpi=192&waitMs=2600&css=.start-head%2C.be-custom-fonts%2C.be-fonts%7Bdisplay%3Anone%7D&walker=1&format=svg&dark=1&filename=bs-type-specimen)

## Tokens

The rest of the design system, editable without touching code:

![The Tokens room - a corner-radius slider plus spacing, sizing, shadows and the rest of the system](/t/url-shot?url=%2F%23%2Fstart%3Ftab%3Dtokens&width=1440&height=900&dpi=192&waitMs=1600&format=svg&walker=1&dark=1&filename=brand-tokens)

- **Rounded corners** - a single radius slider (0–1.5rem) that cards, buttons and panels across the app follow.
- **More tokens** - add and edit **spacing**, **sizing**, **stroke width**, **opacity**, **rotation**, plain **numbers** and **shadows**. Pick a type, name it (*Gutter, Card shadow…*) and set its value. These are stored as standard [design tokens](/info/design-tokens.html) (DTCG) and travel with your brand.

## Files

Drop the files your brand keeps - logos aside - here: **vector**, **image**, **audio** and **motion** (video, Lottie, animated) assets. They land in your [Catalogue](/info/using.html), sorted into sections and ready in every tool's asset picker. Everything stays on this device. (The rail labels the room **Files**; the URL key stays `catalogue`, because a panel key is a permanent contract.)

## Bring a brand in

**Add from…** at the foot of the rail opens a two-stage picker. The first stage asks what you *have*, not what format it is:

- **Design tokens or a design file** - DTCG or Tokens Studio JSON, a Penpot project, a **zip of token sets**, a Lolly design system pack or an SVG.
- **PDF** - a deck or a guidelines file, read on this device for its colours, its marks and its embedded typefaces.
- **Image** - a screenshot or a photo; its colours are read on this device and nothing is uploaded.
- **Font file** - TTF, OTF or WOFF. Opens the Type room, where the face installs.
- **Website** - one page, read for its colours and type. This tile only appears on a device that can actually read a page, because a disabled tile advertising something nobody can press is worse than no tile at all. Where it does appear it names its reader plainly: fetched by the app on this device, or read through the browser extension in a background tab, signed in as you. Naming a URL only *prefills* the field - the fetch button is the consent, so a link somebody sends you can never start a read.

Pick the design-file source and the second stage is the card below: the accepted formats lead as icon tiles in preference order, and the whole card is one drop target - click anywhere on it or drag a file onto it. You can also drop a file straight onto the studio.

![The import card - the accepted formats lead as icon tiles, and the whole card is one drop target](/t/url-shot?url=%2F%23%2Fstart%3Fsource%3Dfile&width=1440&height=900&dpi=192&waitMs=1600&css=.start-import-modal%20.modal-msg%2C.start-import-modal%20.modal-title%7Bdisplay%3Anone%7D&cropSelector=.start-import-drop&walker=1&format=svg&dark=1&filename=bs-brand-import-formats)

What each design file gives you:

- a **LollyBrand** pack (`.zip`) - installs in one step;
- a **Penpot** export (`.penpot`) - pulls in its design tokens;
- a **Design Tokens** file (`.json`) - W3C DTCG;
- a **Tokens Studio** file (`.json`) - Tokens Studio;
- a **plain SVG** (`.svg`) - Lolly scans its colours and lets you pick which to keep, the first becoming your primary.

A source install takes a **checkpoint first**, so "revert to before the import" is one restore. And what a scan finds doesn't go straight in: candidates land in the **Tray**, where each one is added by its own press, through the room that owns that kind of material.

`#/start?source=<kind>` opens the picker on a given source (`file`, `pdf`, `image`, `font`, `url`), and `?import` opens it on the plain list.

## Move a brand between devices

**Export** at the foot of the rail writes a single **`LollyBrand-…zip`** - your tokens, fonts, logos and theme preference, with an integrity manifest it verifies on the way back in. Beside it, **Tokens (.json)** writes the plain design-tokens document on its own: no fonts, no logos, just the tokens, which is what a repo, a CI step or another tokens tool actually reads.

Bringing one back is **Add from… → Design tokens or a design file** (above), or a drag-and-drop onto the studio. This is how a colleague hands you a brand, or how you carry one to a second install - no account, no cloud. To bring in a brand from the command line instead, see [`ingest:brand`](/info/configuration.html#brand-packs).

## Versions

**Versions** at the foot of the rail is where a design system stops being a moving target. Publish one and you get a **permanent, named copy** kept on this device: it never changes afterwards, so a tool that pins it keeps drawing the same thing. The panel stays hidden until there's something of your own to publish, so a studio that never publishes never sees the controls.

Three things to know before you press anything, and the panel says all three before the press rather than after:

- **A version is permanent.** There's no delete yet, so the panel states what has been kept and that it stays kept rather than offering a button that lies.
- **Removals lead the compatibility card.** Added and changed tokens are news; a *removed* one is the thing that breaks a tool, so it's named first and called what it is.
- **Publishing can't be undone; restoring can.** *Restore latest from this version* is an ordinary edit to the head, so it goes onto the studio's undo stack and the panel offers you the **Undo** straight away.

You can **Publish only**, or **Publish and make active** - the difference being whether tools and the app follow that version from now on or keep following your latest edit. **Follow the latest again** puts every edit live the moment it's made. `#/start?area=versions` opens the panel directly.

## When the brand is fixed

Some builds ship a **locked brand** - its colours, fonts and tokens are what every tool and export use, and there's nothing to change. In that case the studio is replaced with a short note explaining that this build ships with a fixed brand and editing is turned off. This is deliberate: it's how an organisation guarantees everything stays on-brand.

## Where to go next

- **[Using Lolly](/info/using.html)** - the canvas, saving, projects and the catalogue.
- **[Design Tokens](/info/design-tokens.html)** - the token model your brand is expressed in.
- **[Exporting & formats](/info/exporting.html)** - print units, CMYK and the formats your brand renders into.
