<!--
DRAFT - not wired into docs/build.ts's `pages` array (~line 89, a hardcoded
list of explicit src: filenames - nothing globbed) and not reachable by
shotRecipe()'s directory scan either (readdirSync(__dirname) at ~line 610 is
plain and non-recursive, so it never looks inside docs/drafts/). Inert to
both the site build and the screenshot pipeline. Nothing below has been
captured - every image is a recipe only.

TRIAGE NOTE, for whoever picks this up: the "inventory pass" this batch of
drafts came out of named a short list of small UI items alongside the three
commissioned pages (collab, search, the favourites strip - the last one is
its own file, docs/drafts/favourites-strip.md). This file is that list,
triaged one item at a time, each checked against the shipped source (not
memory). All four below trace to the same work stretch as the favourites
strip - commit 863f0e29 ("Selection everywhere...") - which is also where the
hard-coded evidence lives. Two candidates from that same commit message are
deliberately NOT written up as sections:

  - "Roomier grid gaps" - a CSS spacing change (gallery/utilities/catalog grid
    gutters). Nothing to instruct or explain; a user has no decision to make
    and nothing to look for. Not docs-worthy on its own.
  - "canvas-op contract groundwork" - internal engine/runtime plumbing (a
    shared contract for canvas-editing operations), not a user-facing
    behaviour change yet. Nothing shipped here for an end-user page to
    describe; revisit once/if it surfaces as an actual feature.

Each section below is written as a self-contained bullet-list addition (icon
markers match docs/build.ts's DOC_ICONS table, verified against it directly -
star, folder, checklist, eyeoff, clock, link are all real keys there), with a
one-line note on exactly which existing page and bullet it extends. None of
these are big enough to be their own page - the whole point of triaging them
here rather than minting a page each.
-->

## 1. Selection everywhere (multi-select + context menu + bulk bar)

**Belongs in:** `docs/using.md`, extending the existing **"Multi-select (desktop)"** bullet under `## Projects` (line ~173) - that bullet is written as if multi-select is a Projects-only thing, and it no longer is. A short mention also belongs on the Catalogue's **"Tidy up"** bullet (line ~201).

Checked against `shells/web/src/lib/tile-select.ts` (the shared marquee/shift-range/checkbox engine) and each view's own `bulkBarCfg` (`views/gallery.ts`, `views/catalog.ts`, `views/projects.ts`). The same selection gesture and the same floating action bar (`lib/bulk-bar.ts`) now appear on **Tools, Utilities, the Catalogue and Projects** - previously Projects-only.

Suggested replacement text for the existing bullet:

- <!--i:checklist--> **Multi-select (desktop).** Tick a tile's checkbox, drag a selection box across empty space, or **Shift/Cmd-click**; **right-click** a tile for its context menu. Then act on the whole selection at once - the same gesture and the same floating action bar work on the Tools gallery, Utilities, the Catalogue and Projects, not just here.

What "the whole selection at once" actually offers differs a little by view, since not every action makes sense everywhere:

- **Tools / Utilities:** Favourite (or Unfavourite), Hide (or Unhide), Available offline (or Remove from offline), View sessions (jump to Projects filtered to the selected tools' saved sessions - see section 3 below), and Copy link when exactly one card is selected.
- **Catalogue:** Favourite and Hide apply to any selection; Duplicate, Download and Delete only appear once every selected item is one of your own uploads - a shared design-system asset is a permanent contract, so those three stay off it even in bulk.
- **Projects:** **Render selection**, **Move to…**, **New folder**, **Delete**, and **Edit together** when the selection is between two and eight single-tool sessions (it opens them side by side under one combined sidebar). Only the render half of that is on using.md today, so this view's row is an addition too, not a restatement - `bulkBarCfg` in `views/projects.ts`, checked directly.

![Two tool cards ticked in the Tools gallery, with the floating selection bar offering Available offline, View sessions, Favourite, Hide and Copy link](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-select%3D%22d3%22%5D&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-bulkbar-gallery)
<!--
SHOT NOTE (misc-bulkbar-gallery): drive targets `[data-select="qr-code"]` /
`[data-select="d3"]` - the `.tile-check[data-select="<ref>"]` checkbox button
confirmed directly in views/gallery.ts's card markup (the same attribute
cardMarkup gives every tile), so these two clicks tick both cards without
opening either tool.
-->

## 2. Hidden tools

**Belongs in:** `docs/using.md`, a new bullet under `## Opening a tool` (near the top, alongside the gallery/search description at line ~9).

Checked against `shells/web/src/lib/hidden-tools.ts` and the `hiddenBox`/`showHiddenTools` wiring in `views/gallery.ts`. Hiding a tool never uninstalls it and never breaks a link already pointing at it - it only removes the tile from the grid you browse. Two precise points the first draft of this bullet got loose, both verified: the single-card menu row is labelled **Hide tool** / **Unhide tool** for a tool (a utility card's is plain **Hide** / **Unhide**, and the bulk bar's is plain **Hide** / **Unhide** too); and a hidden tool is filtered out of the gallery grid's own typing as well, so "still findable by search" is NOT true on the page you hid it from - the honest promise is the deep link.

Suggested new bullet:

- <!--i:eyeoff--> **Hide a tool you never use.** Right-click a card (or select several and use the selection bar) → **Hide tool**. It drops out of the grid, and out of what typing in the grid finds; a grey **Show hidden tools (N)** tile at the very end reveals them again, dimmed, each with **Unhide tool** in its own menu. Hiding is only about your grid - the tool still opens from a saved link or a bookmark, and it stays exactly where it was for everyone else.

![The grey Show hidden tools tile at the end of the grid, and one dimmed hidden tool card revealed beneath it with Unhide in its menu](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-bulk%3D%22hide%22%5D%3Bwait%3A300%3Bclick%3A.gtile--hiddenbox&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-hidden-tools)
<!--
SHOT NOTE (misc-hidden-tools): there is no standalone per-card "hide" button
(unlike the always-visible fav/pin corner icons) - Hide only exists inside a
tile's right-click menu or the bulk bar, both confirmed in views/gallery.ts.
The recipe goes the bulk-bar route since it needs no `|right` context-menu
step: tick the card (`[data-select="qr-code"]`, the same checkbox hook as
section 1), click the bar's Hide button (`[data-bulk="hide"]` - the literal
`data-bulk` value bulkBarHtml() writes, confirmed in lib/bulk-bar.ts), then
click the grey reveal tile (`.gtile--hiddenbox`, confirmed in gallery.ts).
-->

Right-clicking a single card and choosing **Hide tool** reaches the same toggle, without needing a selection first.

## 3. Jumping to a tool's saved sessions

**Belongs in:** `docs/using.md`, under `## Projects`, extending the area around the **"Render a whole folder or selection"** bullet (line ~174) - a short new bullet, or folded into that one.

Checked against `sessionToolIds()`/`viewSessionsForSelection()` in `views/gallery.ts` and the `?tools=` handling in `views/projects.ts`. Select one or more tools on the Tools gallery (or Utilities) and choose **View sessions** from the selection bar, or from the right-click menu of a selection, and Projects opens filtered to exactly the saved sessions made with those tools - a flat list, exited with its own **Clear**.

One label trap, verified in `tileMenuHtml()`: **View sessions** only exists once something is SELECTED. Right-clicking a single unselected card instead offers **N saved sessions**, which opens that tool's own history dialog rather than navigating to Projects. Don't write the two as the same door.

Suggested new bullet:

- <!--i:link--> **Jump straight to a tool's saved work.** Tick one or more tools on the Tools gallery and choose **View sessions** from the selection bar - Projects opens showing only the sessions made with those tools, with a **Clear** to get back to the full view.

![Projects showing a flat, filtered list of sessions for two chosen tools, with a status line reading the tool names and a Clear link](/t/url-shot?url=%2F%23%2Fp%3Ftools%3Dqr-code%2Cd3&width=1440&height=900&dpi=192&waitMs=1400&walker=1&format=svg&dark=1&filename=misc-sessions-by-tool)
<!--
SHOT NOTE (misc-sessions-by-tool): unlike the recipes above, this one has no
drive= that can manufacture its own content - a saved session isn't a click
away, it has to already exist. The `?tools=` view (views/projects.ts,
toolsBodyHtml()) shows whatever real qr-code/d3 sessions the capture
browser's profile already holds; on the same fresh-per-shot context the rest
of this pipeline uses (see build-docs-shots.ts's per-shot `browser.
newContext()`), that's none, and the flat list renders empty. This is the
same dependency using.md's own existing `projects` screenshot (line ~169)
already has - whatever real folders/sessions show there came from the
capture browser's accumulated state, not from this recipe's URL alone -
so it's a known, pre-existing gap in the pipeline, not a new one. Capture
pass: save a session from each tool first, or accept an empty-list shot and
crop tighter to just the status line if the list itself doesn't matter here.
-->

## 4. Sorting Projects, and folders always leading

**Belongs in:** `docs/using.md`, under `## Projects`, extending the **"Folders that nest"** bullet (line ~171) or added as its own bullet immediately after it.

Checked against `SortBy` and `sortFolders()`/`sortSessions()` in `views/projects.ts`. Two separate, verified facts:

- **Real sort options.** Open **View & sort** (Projects names its control that, not "Sort & filter" like the Tools gallery - `views/projects.ts` line ~724) and Projects offers **Name**, **Date added**, **Last modified** (the default) and, only while you're inside a folder rather than standing at the top level, **By tool**. The choice is remembered (kept in this browser's own storage under `lolly:projectsSort`, like the favourites-strip view mode - not part of a profile export).
- **Folders always lead.** Whatever sort is active, folders are listed before loose (uncategorised) sessions at the top level - the sort only reorders within each group, the file-manager convention of containers first so the structure reads before the contents.

Suggested addition, right after the existing "Folders that nest" bullet:

- <!--i:clock--> **Sort your own way.** **View & sort** offers **Name**, **Date added**, **Last modified** (the default) and, inside a folder, **By tool**. Folders always come first regardless of which sort is active - the sort only orders the sessions and folders within their own group.

![The View and sort popover in Projects open, with a theme row, a View choice of Preview or List, and Name, Date added and Last modified under Sort](/t/url-shot?url=%2F%23%2Fp&width=900&height=700&dpi=192&waitMs=1400&drive=click%3A.projects-viewopts&cropSelector=.projects-viewmenu&walker=1&format=svg&dark=1&filename=misc-projects-sort)
<!--
SHOT NOTE (misc-projects-sort): trigger button confirmed as
`.filter-fab.projects-viewopts` in views/projects.ts (openViewOpts() is bound
to `.projects-viewopts` specifically) - `.projects-viewopts` alone is the
more specific hook, so that's what drives the click. The popover it opens
(`.projects-viewmenu`, also confirmed directly in openViewOpts()) is body-
appended, not nested under the Projects root, so cropSelector finds it
regardless. "By tool" only appears inside a folder - this recipe captures at
the Projects ROOT (`url=/#/p`), so if the real capture pass wants "By tool"
visible too, point url= at a real folder instead: the route is a path
segment, `/#/p/<folderId>` (confirmed in main.ts's hash router - `parts[0]
=== 'p'` reads `folderId` from `parts[1]`), not a query param. Same caveat as
misc-sessions-by-tool though: a folder has to already EXIST in the capture
profile, which a per-shot fresh context has none of.
Also: the popover is not sort-only. openViewOpts() writes a theme segment, a
"View" pair (Preview / List) and a sound segment around the Sort rows, so the
alt text names them - do not re-caption this as "the sort menu".
-->
