# Using Lolly

A practical guide to actually *using* the app - opening a tool, working the canvas, exporting, saving, and sharing. Everything here runs **on your device**: no account, no upload, no internet required after the first load.

> New here? The [Quickstart](/info/quickstart.html) gets you making things in minutes, and [Lolly for Operators](/info/operators.html) covers installing/deploying the app; this page is about driving it once it's open.

## Opening a tool

The home screen is the **gallery** - every tool, grouped by category. Click a card to open the tool; if you've worked on it before, a **Continue** button resumes your most recent session. Use the search box to filter by name.

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Each tool is a split view: **controls** on one side, a live **preview** (the canvas) on the other. Change any control and the preview updates instantly.

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fchart-creator%3Fct%3Dhorizontal-bar%26t%3DQuarterly%2520revenue%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&format=svg&filename=vt-tool-split-view)

> A few tools (like **Layout Studio**) instead open as a **free canvas** - a chromeless, direct-manipulation surface where you drag, resize, rotate and snap boxes of text, shapes and images, and double-click to edit text in place. It exports through the same render path as every other tool, so the canvas *is* the file. See [The free canvas](#the-free-canvas-layout-studio) below.

## The canvas (preview)

The preview always shows exactly what will export.

**Desktop**

- **Zoom:** Cmd/Ctrl-scroll, or pinch on a trackpad - zoom centres on your pointer.
- **Pan:** hold **Space** and drag, or drag with the **middle mouse button**. (Plain clicks stay free for clicking parts of the design.)
- **Keyboard:** `0` = fit to window · `1` = 100% · `+` / `−` = zoom.
- **Zoom HUD:** the small `−  NN%  +  Fit` control in the corner. Click the percentage to toggle Fit ↔ 100%.

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&format=svg&filename=use-zoom-hud)

**Touch**

- **Pinch** to zoom, **drag** to pan, **double-tap** to reset to fit.

**Click to jump to a control:** click any element in the design and the matching sidebar input gets focus and scrolls into view - for a repeating row group it folds open the exact row you clicked, so editing what you see is one tap away.

A dimension change always snaps the view back to a clean fit.

### The free canvas (Layout Studio)

Free-canvas tools add a working surface *around* the artboard, like a designer's pasteboard:

- **Off-canvas staging.** Drag a box past the frame edge and it stays fully **visible and selectable** - park elements off to the side while you arrange the composition, then drag them back in. Everything outside the frame is **gently faded** so the export area always reads at a glance, and the frame keeps its shadow to mark exactly where the file begins.
- **Only the frame exports.** The exported file is bounded by the artboard - anything left outside (or the part of a box hanging over the edge) is simply cropped out of the output, in raster and vector formats alike.
- **Zoom out past Fit** (down to 20%) to see the whole pasteboard when you've staged things far outside the frame.
- **Resizable artboard.** Changing the export dimensions resizes the frame in place; boxes keep their positions, so you can reframe a layout around existing content.

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&format=svg&localize=1&filename=layout-studio)

### Drawing your own shapes (the pen)

Boxes, circles and rounded frames cover most layouts. When you need a shape that isn't in that list, draw it: the rail's **Pen** button (or the `P` key) puts you in drawing mode.

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&format=svg&filename=pen-editor-rail)

- **Click** to place a point. On the default curve type, **click and drag** pulls that point's handles out, which is how you draw a curve rather than a corner - hold **Alt** as you click for a hard corner instead. (On the other curve types every placed point is a corner and the drag does nothing; see **Spline type** below.)
- Points snap to the artboard and to your other boxes as you place them, drawing the same guides a normal drag does. Alt suppresses the grid while you draw, and both the grid and the edges while you drag a point afterwards.
- **Click your first point** to close the loop and finish in one move. Otherwise press **Enter**, double-click, or just switch tools - the drawing is kept, not thrown away.
- **Escape** works one rung at a time: the first press abandons the drawing and writes nothing, and a second leaves the pen.
- **Delete** while drawing drops the last point you placed.

The result is an ordinary box on the canvas. Move it, resize it, rotate it, group it, align it, restack it, give it a fill, a gradient, a shadow or an opacity - a path behaves like every other box, and none of those controls treat it differently.

It arrives painted, too. The first path you draw takes the fill and stroke your brand gives a path, and after that each new path takes **whatever you last used** - set a fill once and keep drawing, rather than recolouring every shape. (In a tool whose brand says nothing about paths, a drawn path is stroked in the colour you watched it being drawn in, so it's never invisible.)

**Editing the points again.** Double-click the shape (or use **Edit points** on the object bar) and the points come back. Drag a point to move it, drag a handle to re-aim it, click anywhere on the curve to insert a point, rubber-band a group of points, and press Delete to remove the selected ones. A path always keeps at least two points, so you can't accidentally delete it out of existence.

**Spline type** decides what kind of curve runs through your points, and it's the choice worth understanding:

| Type | What it does |
|---|---|
| **Smooth (auto)** | The default. Works its own handle lengths out, so plain click-click-click gives a genuinely smooth curve with no handle-wrangling. If you do set a handle, it pins the *direction* and the curve keeps ownership of the length. |
| **Bezier handles** | The classic pen. Handles are the control points, and inserting a point never moves the curve. |
| **Through the points** | Passes exactly through every point you placed, no handles. |
| **B-spline** | Flows near the points rather than through them, for a softer shape. |
| **Straight lines** | A polyline. |

Switching an existing path to a type that works out its own handles asks first, because the handle lengths you set can't be recovered - switching to **Bezier handles** is always lossless. Mid-drawing there's no prompt: the switch applies straight to the draft, and any handles you'd already pulled go with it. On the types that own their handles, inserting a point reshapes the curve very slightly; on **Bezier handles** it doesn't.

Each point also carries a continuity rule, shown by its shape on canvas - square for **Corner** (handles move independently), round for **Smooth** (handles stay in line), round-with-a-ring for **Symmetric** (in line and equal length). Set it for any selected points and the curve re-satisfies it immediately.

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&filename=pen-path-geometry)

A drawn path travels in the link like everything else, so a shape you draw reopens from a share link and renders identically from the CLI. Nothing about it depends on the editor.

### Combining shapes (path operations)

Select two or more shapes, **right-click** the canvas (two-finger tap on touch) and the menu offers the operations you'd expect from a drawing app:

- **Union** merges them into one shape, keeping the topmost one's paint.
- **Subtract** cuts everything above away from the bottom shape.
- **Intersect** keeps only the overlap.
- **Exclude** keeps everything except the overlap.

Three more work on a single shape: **Outline stroke…** turns a stroke into a filled shape of the same outline (useful when you want to keep a weight exactly as drawn), **Offset path…** grows the silhouette outwards or, with a negative number, shrinks it inwards, and **Simplify** rebuilds a path with fewer segments at the same shape.

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&format=svg&filename=path-ops-boolean-result)

The result is a new path you can keep editing with the pen. Holes are real holes - a **Fill rule** control on the stroke panel decides whether overlapping contours fill (*non-zero*) or punch through (*even-odd*).

Two things these operations deliberately don't do. They **refuse rather than destroy**: ask to intersect two shapes that don't overlap and you're told there's nothing to keep, and nothing changes. And text and image boxes have no outline to work with, so they're left alone rather than approximated by their frame. A combined result is stored as plain Bezier curves, which is what a drawing app does too - the original spline type doesn't survive the operation.

## Timeline (Sequence Studio)

**Sequence Studio** adds *time* to the free canvas. Every box can start at a moment, run for a length, and animate in and out, and a timeline docked under the artboard is where you arrange them. Open it and there's already a sequence playing - a title card, a clip, an end card, a lower-third and a music bed - so the model is visible before you change anything.

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=png&tolerance=0.03&filename=seq-studio-timeline)

There are two kinds of row, and the difference is the whole idea:

- The **sequence row** is *magnetic*. Clips sit gapless, one after another, and dragging one reorders the run rather than leaving a hole. Delete a clip and the rest close up. This is your spine.
- **Overlay lanes** are free. A lower-third, a logo, a caption - anything that floats over the spine at its own time - gets its own lane and its own start.
- Below those, **Always on** collects the boxes with no timing at all: scenery that's simply present the whole way through. The `+` on a chip promotes one onto a lane; **Make always on** sends it back.

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=png&tolerance=0.03&filename=seq-studio-stage)

Opening the timeline gives it the keyboard, so Space and the arrow keys drive the playhead rather than the page - and because it opens by itself on a composition that already has timing, that's true the moment Sequence Studio loads.

**Editing.** Drag a clip's middle to move or reorder it, drag within a few pixels of either end to trim it, and press **Split at playhead** (or `S`) to cut one clip into two. Split needs a clip with a real **Length** and the playhead a little way inside it, so an open-ended clip (the music bed, for one) can't be split. **Snap to edges** is on by default and snaps to clip edges, the playhead and whole seconds, with Alt to override. Every drag is a single undo step, and the drag preview runs the same arithmetic as the commit, so what you see while dragging is what you get.

Select a clip and the inspector gives you the same edits as numbers: **Length**, **Trim in** (how far into the source it starts), **Speed** as a set of fixed multipliers from ×0.25 to ×4, **Animate in** / **Animate out** with their lengths, and **Mute clip**. A clip on the magnetic row has no **Start** field on purpose - the row owns the order, so you drag to move it.

**Transitions** are presets, not keyframes: Fade, Pop, Grow, Rise, Drop, the four Slides, Zoom in and out, Tilt, Swoop, Spin, Drift, or **Cut (no animation)**. Distances scale with the object, so the same preset reads correctly on a full-frame card and a small badge. Between two adjacent clips on the sequence row there's a **seam chip**: click it and choose **Cut** or **Crossfade**, which applies at once and closes. Open the same chip again to change the **Length (ms)** and press **Done**. A crossfade is stored as a fade out of one and a fade into the next, and the export derives the actual dissolve from that pair - which is why a crossfade looks like two fades in the preview and a true handover in the file.

**Sound.** Add an **Audio** clip and it lives on the timeline like any other clip: waveform, trim, mute. (The generated bed the default session ships with is the one exception - it's synthesised at export time, so its bar stays plain and silent until you render.) Press the mic to **record a voiceover** straight onto the timeline, with a count-in and a level meter, and the take is saved as your own asset at the point you started. Music, dialogue and a clip's own soundtrack all reach the exported mix. (The export panel's **Audio track** is a different thing: one bed laid under the whole clip, with fade and ducking. The two coexist.)

**Rendering it.** A motion export is a **deterministic composite**, not a screen recording - each frame is decoded, drawn and encoded at an exact time, so the file doesn't depend on your machine keeping up, and there's no practical frame ceiling on MP4 or WebM. The timeline's own length sets the duration unless you type one. Content Credentials are stamped as on any other export. A still export gives you the frame at the playhead, or a whole contact sheet from the **Frames** field beside the output size - see [Exporting](/info/exporting.html#stills-from-a-timed-composition).

A few limits worth knowing: a sequence is capped at ten minutes, GIF and animated PNG buffer their frames so they stay short, audio is silent on a clip whose speed isn't ×1 (there's no time-stretching yet), and **Record live** is hidden here because the compositor is the better path.

Layout Studio has the same timeline, so you can time a layout without moving to another tool - it just can't export motion, so a timed layout comes out as a still or a contact sheet.

## On a phone

On narrow screens the layout reflows to one column:

- The **controls become a sheet** at the top with a **drag grip** on its lower edge. Drag the grip to resize it - it snaps to **peek / half / full** - or **tap** the grip to toggle collapsed ↔ expanded. The preview fills the space below and stays visible while you edit.
- A floating **Render** button opens the **Export** sheet - all the format, size, copy, save, and download controls in one place. Dismiss it by tapping the backdrop.

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&format=svg&filename=vt-phone-palette)

## Controls (inputs)

Tools expose only the inputs that are meant to vary - everything else (colours, layout, typography, logic) is locked in by the tool author, so whatever you make meets the rules the author set. Inputs include text, sliders, colour pickers, dropdowns, dates, image pickers, and repeating row groups. Some are grouped under collapsible sections.

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&format=svg&filename=use-tool-inputs)

**Reset:** *Clear changes* returns every input to its defaults.

## Your details & headshot

**Profile** (top-right of the gallery) holds your name, contact details, and an optional **headshot**. Tools that ask for those fields pre-fill them automatically - set them once and your email signature, lockups, and badges fill themselves in. You can still override any field per session. Opt in with **Use my details** so a tool may read them.

Your headshot and details live **only on this device**. A profile can be more than just you - a team or a role you step into now and then. See **[Profiles](/info/profile.html)** for the full picture, including keeping more than one.

## Saving & continuing

Click **Save** to store the current inputs as a session for that tool. You can keep multiple named sessions per tool; each tool's **Continue** button reopens your most recent, and the **history button** (top-right, beside your profile) lists every saved session across all tools. Sessions are device-local. To organise them, open **Projects** (below).

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&format=svg&filename=use-render-pill)

## Projects

**Projects** - open it from the **Projects** tab beside **Tools**, or from **Profile → Storage → Organise in Projects** - is a home for everything you've saved, and it works like a file manager:

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&format=svg&localize=1&filename=projects)

- **Folders that nest.** Group saved sessions into folders, and folders inside folders, as deep as you like. Create a folder, rename it, or drag a tile onto another folder to move it; a breadcrumb walks you back up. An always-present **Uncategorised** folder holds anything not yet filed.
- **File new work straight in.** Inside a folder, **+ New tool** opens a tool and files its first save into that folder automatically.
- **Multi-select (desktop).** Tick a tile's checkbox, drag a selection box across empty canvas, or **Shift/Cmd-click**; **right-click** a tile for its context menu. Then act on the whole selection at once.
- **Render a whole folder or selection.** **Render folder** exports every saved session in a folder - including its sub-folders - as one nested `.zip`. **Render selection** does the same for any multi-selection, and a single session renders straight to its own file. No Batch/Pro needed.
- **Share a saved session.** Right-click a session → **Share link** to copy a link that reopens it with the exact same inputs (the full Share dialog - see below).

## Sharing a link

Every input is captured in the page URL, so a link *is* the design. Use **Share** in the export controls - or **Share link** on any saved session in Projects - to open the **Share dialog**: a ready-to-copy link plus toggles for encrypting the link and what happens when it's opened (fullscreen, the export panel expanded, download-on-open with `&export`, or copy-to-clipboard with `&copy`). 

A big design would make a long URL, so the dialog also offers a **Shortest link** that packs the whole state into a compact token - the readable form is always there too. Paste it to a colleague, bookmark it, or commit it. (Full details: [URL Mode](/info/url-mode.html).)

> Images you uploaded from your device are **not** included in a shared link - they only exist on your machine.

## Live camera (motion-reactive tools)

Every photo **Filter** - Halftone, Scanline, Posterize, Duotone, Pixel Stretch and Voronoi Cells - shows a **Go live** button where a camera is available. Turn it on and the effect tracks your webcam frame by frame, so it reacts to movement; you can record the result to GIF, WebM or MP4. Frames are read and processed **on your device** and never leave it, and the camera is released the moment you stop or leave the tool. (Any image picker also has **Take a photo** to grab a single frame as an on-device image.)

## My images

When a tool lets you add an image from your device, it's kept exactly as it arrived - so a Content Credential on it still verifies - and saved to your personal **My images** library (under **Profile → Storage**). Only a genuinely huge file asks whether to keep or resize it. Reuse it across any tool. To scrub EXIF/GPS as images come in, turn on **Strip metadata from uploads** in your profile. There's no cap: the library is entirely local and limited only by your device's storage - manage or delete images there.

## The Catalogue - your asset library

The **Catalogue** (`#/c`, or the **Catalogue** link in the menu) gathers everything your tools can draw on - brand logos, images, audio, and motion, grouped by kind - and it's where your **own creative files** live too. No server, no admin console, no pull request: it's all on your device.

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=catalogue)

- **Bring your files in.** Drag any image, SVG, audio clip, video, Lottie, PDF or PowerPoint deck onto the upload area - or click to choose - and it lands in your catalogue instantly, ready in every tool's asset picker. A multi-page PDF or a `.pptx` asks which pages or slides to keep - each becomes an SVG asset. Ingest as much as you like; it never leaves your device.
- **Favourite what you reach for.** ★ an asset (or a brand swatch) and it pins to the top of every picker, so your go-to logo or colour is one click away.
- **Tidy up.** Recategorise an asset into a different group, hide a shared brand asset you don't use (with **Show hidden** to bring it back), or delete your own uploads outright.

### Take your palette and fonts anywhere

The Catalogue's **Swatches** panel isn't just for reference - click a colour to copy it, or **download the whole brand palette** in the format your other tool speaks:

- **Design tokens (JSON)**, **CSS variables**, or **CSS classes** - drop the brand straight into a stylesheet or a build;
- **Adobe Swatch Exchange (.ase)** - load it into Illustrator or Photoshop;
- **GIMP palette (.gpl)** - for GIMP or Inkscape.

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=192&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&format=png&filename=use-swatch-downloads)

The **Fonts** panel lists your brand faces with a **download** beside each, to install locally or hand to a print shop. (The [Brand Studio](/info/brand-studio.html)'s Colours tab offers the same palette download.)

Assets are one half of the open, do-it-yourself path; the other is **making your own tools** - the free canvas (Layout Studio, described above) lets you build one visually, no code required.

## Sound & accessibility

Lolly aims to be comfortable to use for everyone. The interface is keyboard-navigable, custom controls carry proper labels for screen readers, and every tool's live preview is exposed as a single labelled image describing what it's making.

A gentle layer of **assistive sounds** confirms what you do - arriving in the gallery, a valid vs. invalid Content Credentials check, closing a panel, switching a filter. It's **off by default**: turn **Sound** on anywhere the switch appears (each view's options popover, or **Profile**), and the choice is remembered.

Beside that switch is **Neurospicy Mode** - an optional, calming background focus track that plays quietly while you work. Turning it on opens a small **player dock** in the bottom corner that follows you across the app; from it you can search and pick a track, skip forward and back, set the volume, and minimise or close it. The track list spans a few categories - procedural *Lolly Sings* tunes, ambient loops and beats, your own uploaded audio, and a handful of live internet **radio** stations (these need a connection; everything else plays offline). It's **off by default** and, like Sound, is remembered across sessions and devices. Turning Sound off mutes the focus track too.

## Storage & privacy

Everything is stored in your browser's local database (IndexedDB): your profile, saved sessions, uploaded images, and a cache of downloaded catalog content. **Profile → Storage** shows usage and lets you:

- **Clear cache** - drop downloaded catalog content (re-syncs next load).
- **Clear all my data** - wipe profile, sessions, and images. *Cannot be undone.*

Nothing is transmitted anywhere. No telemetry, no cloud rendering.

## Moving to another device

Because everything lives on your device, **Profile → Storage → Move to another device** lets you carry it all to a second install - no account, no cloud:

- **Export my data** downloads a single `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (the name parts come from your profile and are dropped if unset; `<n>` is a per-day counter so same-day exports don't collide) containing your profile, every saved session (with its thumbnail), your uploaded images, and your preferences (theme, sidebar width, local activity stats).
- **Import data…** on the other install reads that file back in. It **merges**: anything with the same name (your profile, a session slot, an image) is replaced by the imported copy; everything else on that device is kept. Saved sessions re-link to your imported images automatically.

The catalog cache isn't included - it re-downloads itself on the new device. The bundle is a plain zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, format id `lolly-backup`), so it survives email, USB, or AirDrop intact and is the same format every shell reads. Each part is checksummed, so a file damaged in transit is caught on import rather than restored half-broken. (Full format spec: [Data Transfer](/info/data-transfer.html).)

## Importing a design (Figma, Penpot, Illustrator, InDesign)

You can bring an existing design into Lolly and keep working on it: open **Layout Studio**, click **Import a design** in the canvas toolbar, and choose a Figma **.fig** or SVG, a Penpot **.penpot**, an Illustrator **.ai** / **.pdf**, or an InDesign **.idml**. Layers become editable boxes on the free canvas - text stays retypable, images land in **My images**, and type and colours conform to the brand globals - then the result saves, shares and renders like any other session. The parse happens entirely on your device. Full detail: **[Import a design](/info/design-import.html)**.

## Exporting

See **[Exporting & Formats](/info/exporting.html)** for the full story - choosing a format, output size and print units, transparency, video, and copy/share. In short: pick a format, set the size if you need to, and **Download** (or **Copy** to the clipboard).

## Batch (Pro) mode

For power users, **Batch** (linked from the gallery, gated behind the Pro feature flag, which defaults on) renders many variations at once - a grid where each row is a set of inputs, exported together. Ideal for localising a card into a dozen languages or generating every size variant in one pass. Fill rows by typing, pasting straight from a spreadsheet, or importing a CSV (you can export one back too), and set per-row format, size, and output filename. Save a whole grid as a named **batch session** that reopens from the gallery, and download every row as a single `.zip`.

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&format=svg&filename=use-batch-toolbar)

Batch is for generating **many variants of one template** at once. To re-render sessions you've **already saved**, use **Projects → Render folder / Render selection** (above) - no Pro needed.

## Offline & install

Lolly is a PWA. After the first load it works **offline** - install it from your browser's address bar (or *Add to Home Screen* on mobile) for an app-like, full-screen experience. It updates itself when you're back online.
