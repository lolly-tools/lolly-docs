<!--
DRAFT - not wired into docs/build.ts's `pages` array (~line 89, a hardcoded
list of explicit src: filenames - nothing globbed) and not reachable by
shotRecipe()'s directory scan either (readdirSync(__dirname) at ~line 610 is
plain and non-recursive, so it never looks inside docs/drafts/). Inert to both
the site build and the screenshot pipeline until someone moves this content
up into a real page. Nothing in this pass has been captured - every image
below is a recipe only.

SUGGESTED HOME: docs/using.md, as a new subsection under "## Opening a tool"
(right after the existing gallery screenshot at using.md line ~11, before
"Each tool is a split view..."). Working title below, "## Your favourites
strip", assumes that placement - rename the heading level if it lands
elsewhere. Neither recipe below asks for `sweep=1`, deliberately: using.md
already carries exactly 4 (gallery, layout-studio, seq-studio-timeline,
pv-storage-clear), which IS docs/build.ts's MAX_SWEEPS_PER_PAGE, so anything
here that wanted one would have to take it off an existing shot first.

Every fact below was checked against shells/web/src/components/featured-row.ts,
shells/web/src/views/gallery.ts (the mount/star/hide/view-mode wiring),
shells/web/src/lib/favourites.ts, shells/web/src/bridge/profile.ts and
shells/web/src/data-transfer.ts (PREF_KEYS, the portable-backup part list) -
not from memory. Two separate storage facts are load-bearing here and must
not get merged into one sentence when this lands: the favourites LIST lives
on the user profile (IndexedDB, part of a profile export); the Gallery/Cover
Flow DISPLAY MODE lives in a bare localStorage key that isn't even in
PREF_KEYS, so it never rides along in a profile export either.

Also worth flagging for whoever merges this in: using.md line 200 already has
a DIFFERENT "favourite" - "★ Favourite what you reach for" under the
Catalogue section, which stars a CATALOGUE ASSET (profile.favouriteAssets,
pins it to the top of every asset picker). This page's star is a different
list entirely (profile.favourites, tools and utility views, promotes into
this strip). Same verb, same glyph, two unrelated lists - the doc should say
so once, wherever the two sections end up sitting relative to each other.
-->

## Your favourites strip

Star a tool (or, on Utilities, a utility card) and a big, cinematic tile for it appears in a strip above the grid. It's the fastest way back to the handful of things you actually use - built by you, one star at a time, not pre-loaded with anyone's idea of what you'll want.

A fresh install shows none of this. There's no starter set: the strip simply doesn't exist until you star your first thing, and it collapses away again if you ever get back down to zero.

![The Tools gallery with two favourited tools drifting past in the strip above the grid](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-fav%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-fav%3D%22d3%22%5D%3Bwait%3A800&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=fav-strip-gallery)
<!--
SHOT NOTE (fav-strip-gallery): the two drive clicks star `qr-code` and `d3` -
both already used elsewhere in using.md - so the strip has real, deterministic
content regardless of whatever the capture profile happened to have starred
before. `captureNeutralPinned()` (lib/capture-neutral.ts) already forces the
strip into Gallery/filmstrip mode for any automated capture and freezes the
cross-fade, so no extra flag is needed to avoid Cover Flow here.
-->

### Starring and unstarring

The star lives in three places, and all three write to the same list:

- **On the card itself** - the ★ in its corner. Click it once to add, again to remove.
- **In its right-click menu** - **Add to favourites** / **Remove from favourites**.
- **In the selection bar** - tick a card's checkbox (or several: ⌘/Ctrl-click, Shift-click a range, or drag a box across empty space) and an action bar appears along the bottom with a **Favourite** button that stars, or unstars, the whole selection in one go. Right-clicking inside a selection offers the same **Favourite** / **Unfavourite** row.

![A single tool card's ★ in the corner, filled to show it's already favourited](/t/url-shot?url=%2F%23%2F&width=700&height=420&dpi=192&waitMs=1600&drive=click%3A%5Bdata-fav%3D%22qr-code%22%5D&cropSelector=%5Bdata-tool-id%3D%22qr-code%22%5D&walker=1&format=svg&dark=1&filename=fav-star-toggle)

The same star works on a **utility** card in the Utilities view - Verify & Inspect, Colour Lab, Take a PDF apart, Spreadsheet and the rest. They aren't tools (no saved sessions, nothing to keep offline), but the strip treats a starred one exactly the same way: a tile of its own, icon-led since there's no preview to show.

> Not the strip you're after? The **★ Favourites** pill in **Sort & filter** shows the same starred set as an ordinary filtered list in the grid below, instead of the drifting strip up top - useful if you'd rather scan a plain list.

### Gallery or Cover Flow

Open **Sort & filter → Featured view** to choose how the strip itself looks:

- **Gallery** - a slow, calm filmstrip that drifts sideways on its own and pauses the moment you touch it.
- **Cover Flow** - the same tiles fanned out in 3-D, one centred and upright, the rest tucked back at an angle; drag or flick through them, then press **Open** on whichever one is centred.

A new install opens on Cover Flow at desktop width and on the plain filmstrip on a phone-width screen - the fan doesn't hold up that narrow yet - but the moment you pick one yourself, that choice sticks and stops guessing.

<!--
No screenshot of the Featured-view switch itself, and not for the same reason
as the Cover Flow note below - this one is a genuine pipeline gap, not a
vector-rendering one, worth fixing rather than working around:

The "Featured view" control only exists in the DOM at all when
`featuredEntries.length > 0` at the moment views/gallery.ts's innerHTML
template string is built (line ~685) - a ONE-TIME evaluation at mount, from
whatever the profile's favourites already were when the page loaded. A star
click afterwards (drive=click:[data-fav=...]) calls refreshFeatured(), which
is a live, imperative DOM update - it repopulates .featured-mount and
toggles .gallery's has-featured class directly - but it never re-runs the
outer template string, so the popover block that was written out empty stays
empty. A single page load that starts with zero favourites can star as many
tools as it likes via drive= and will still never make this control appear.
Reaching it needs the capture browser's PROFILE to already hold a favourite
BEFORE this page's first paint - i.e. seeded storage, the same shape as the
fixed `lolly-welcome-dismissed` / `theme` seeds build-docs-shots.ts already
sets via ctx.addInitScript(), just for `profile.favourites` too - which the
current pipeline has no per-recipe hook for. Add one there, not here, rather
than shipping a recipe that quietly captures an empty popover section.
-->

<!--
Deliberately no Cover Flow screenshot anywhere on this page: it fans its
covers with a 3-D rotateY, and the vector walker's parseCssMatrix refuses a
3-D matrix (mis-scaled or blank covers). It also keeps its rAF loop running
just to hold the fan's layout, so it can never sit fully still for a capture
either. Same documented blocker as the gallery's own Cover Flow shots
(CLAUDE.md, "Docs screenshots are vector"). Prose only for that mode.
-->

### This is local, not part of the design system

Your starred tools are saved onto your **profile** - the same on-device record that holds your name, your headshot and your other preferences (see [Profiles](/info/profile.html)). In plain terms:

- It's saved **on this device**, in the browser's own local database. No account, nothing uploaded.
- It has nothing to do with the **design system** - the colours, fonts and tools the app was set up with. Starring a tool is a personal shortcut for you; it changes nothing about what anyone else's install shows.
- It **doesn't follow you** anywhere on its own. The one way it travels is the same way your whole profile does - export a portable backup and import it on another device - and that's a deliberate, occasional action you take, never an ambient sync running in the background.

Even the choice between **Gallery** and **Cover Flow** is more local still: it lives in a small preference kept only in this one browser's own storage, and it isn't part of that profile export at all. A new device always starts back on the plain default, no matter how many profiles you've moved around.
