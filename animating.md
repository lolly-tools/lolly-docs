# Animating: keyframes, depth and a camera

**Design** puts a timeline under the free canvas, and **Sequence Studio** is the same timeline with a video composition already in it. [Using Lolly](/info/using.html#timeline-sequence-studio) describes the timeline itself - the magnetic sequence row, the overlay lanes, the Always on strip, transitions and rendering - and [The sequence editor](/info/sequence-editor.html) covers editing in time. This page is about the layer above that: posing a box at one instant, lifting it off the page and flying a camera over the result.

Everything here runs on your device. Nothing plays on its own: the preview moves when you press play or drag the playhead, and what you see at any instant is exactly what an export of that instant contains.

## A keyframe is a pose at a moment

A keyframe records a box's position, its size, how see-through, how blurred and how far it lifts off the page - all at one instant. Two keyframes make a move, and Lolly fills in everything between them.

**+Keyframe** has two homes and one behaviour:

- the diamond at the end of the timeline's tool cluster, after the keyboard button;
- the diamond on the selected object's bar on the canvas, beside Duplicate and Delete.

`K` does the same from the keyboard. Whichever you use, the pose is written at the playhead for everything keyframable in the selection, in one commit - so one undo takes the whole thing back, even across a multi-selection.

If the thing you selected has no timing yet, that same press adds it to the timeline **and** writes its first keyframe together. One press, one undo step.

Each keyframe appears as a **diamond** on the clip's bar. `Alt + ←` and `Alt + →` step the playhead from one diamond to the next.

Nothing else creates a keyframe. Dragging a box, typing in a field or scrubbing the playhead never quietly adds one, which is the rule the whole feature is built on: nobody keyframes by accident.

A box that has never been animated shows one control instead - **Animate**, in its Keyframes group. Press it and a rest pose is written at the start of the clip, with everything exactly where it already was. From then on the box has a track, and the rest of this page applies to it.

## The playhead is the arm

There is no record button and no stopwatch. The playhead's position decides what an edit writes.

- **Parked on a diamond**, the canvas and the pose fields edit *that keyframe*. Drag the box, rotate it, resize it or type a number, and only that pose changes. A box resized on a diamond tweens its size between keyframes, and text inside it reflows as it goes.
- **Parked off every diamond**, the same edits change the box itself, which moves the whole animation with it. This is how you reposition a finished move without re-keying it.

The Keyframes group says which one you are in: its first line reads **Scene pose** off a diamond and **Keyframe @ 0:01.8** on one. Off a diamond the pose fields show the values the box is passing through at that instant, and all but Depth are inactive, because there is no keyframe to write to.

Scrubbing **latches onto diamonds**: drag the playhead near one and it snaps to it, so "edit the pose I can see" is the easy thing to do. Hold **Alt** to park between them.

Closing the timeline turns all of this off. The playhead is the arm, so the arm has to be visible.

## The Keyframes popup

The clip inspector is a row of grouped segments - **Time**, **Animate**, **Keyframes**, a speaker toggle for mute and the timed or always-on switch. Each segment shows one glance-value summary; press it and its controls open as a panel above the transport, wide enough to read.

The **Keyframes** panel holds everything one track can be edited with:

- the latch line, saying which keyframe you are on;
- the pose fields - **Depth**, **Scale**, **Opacity** and **Blur** (position, rotation and size are authored on the canvas instead);
- one row per keyframe: its time in milliseconds, its curve, **Duplicate** and **Delete**;
- **Remove N keyframes**, which is how you un-animate a box - the track is the animation, so removing it removes the state;
- the curve editor, docked at the bottom of the same panel.

Curves are the shipped set: **Linear**, **Ease out**, **Ease in**, **Ease in and out**, **Overshoot**, **Anticipate**, **Smooth**, **Snappy** and **Hold**, which keeps a value until the next keyframe. Drag a handle on the docked plot and the row switches to **Custom** with the curve you drew, so the presets are a way to learn the shape rather than a limit. A curve shapes movement; a fade always ramps evenly, whichever curve the keyframe carries.

Clicking a diamond selects it and opens this panel on that keyframe in one gesture. Dragging one moves it in time, and Alt-dragging leaves the original in place and drops a copy where you let go. Right-clicking one offers **Keyframe curve**, **Duplicate keyframe** and **Delete keyframe** without opening anything.

The keyframe rows are the keyboard and screen-reader route to the diamonds. Everything a diamond can do by pointer is a labelled button in that list.

## Depth lifts a box off the page

**Depth** is the first pose field, and it is the one that stays live even when you are parked between keyframes. It says how far the box stands above the surface: `0` is flat on the page, the slider scrubs the useful band of 0 to 300 and the number beside it takes anything from `-300` (sunken) to `900`.

- Off a diamond, Depth writes the box's own depth, so the box is simply lifted for as long as it runs.
- On a diamond, Depth poses that keyframe, so a box can rise and settle again.

Depth on its own changes how the camera sees the box: lifted layers move further and faster than the page behind them. To make the lift readable when nothing is moving, give the box a shadow that follows its depth. The object bar's **More** panel has a **Shadow** section whose **Apply to** row offers **Depth** beside Box, Text and Content; it derives a soft shadow from the box's own height above the page, so the higher the box, the further it casts.

The first time you move Depth, a **Camera** appears in the Always on strip. Depth already works without it - the camera box is what makes the shot itself editable.

## The camera

Select the **Camera** chip and the inspector swaps its Time and Animate groups for a **Camera** group.

Five moves write a complete track in one press, each one an ordinary set of keyframes you can then edit or delete:

| Move | What it does |
| --- | --- |
| **Push in** | Travels toward the artwork and stops. |
| **Pull back** | Starts close and settles at the resting frame. |
| **Pan across** | Slides sideways, so lifted layers part at different speeds. |
| **Rise** | Climbs over the composition, easing a little closer as it goes. |
| **Reveal** | Starts close and soft, then settles sharp at the resting frame. The depth-of-field demo. |

**Orbit** sits beside them, dimmed, and says why: it needs the angled camera that is still being built.

Under the moves are the camera's own channels - **Pan X** and **Pan Y**, **Dolly**, **Focus**, **Aperture** and **FOV strength** - each with the gesture that drives it. With the camera selected and the playhead inside its window, dragging empty canvas pans the shot and a plain scroll dollies it. Cmd/Ctrl-scroll still zooms *your view*, and Space-drag still pans your view: moving the shot and moving your own window onto it stay separate gestures. Clicking any box hands both back.

Two things to know about the model:

- A camera holding a **single pose** is the scene default. Pan it, dolly it or change its focus and the whole shot changes, with no keyframes involved.
- **Cuts come from a second camera.** Park the playhead where you want the cut, choose **Camera** from the timeline's `+` menu and click the canvas to drop it (the same two steps every kind added from the timeline takes). It arrives as a clip starting at that instant, and from there the shot looks through it.

**Focus** is a distance and **Aperture** is how shallow the focus is; at `0` everything is sharp, and raising it softens whatever sits away from the focus distance. **FOV strength** changes the perspective, not the magnification - it is a dolly (the camera's own Depth) that makes things bigger.

> Today's camera moves stay square to the page: it travels, but it does not tilt. Angled, point-of-view glides low over the artwork are being built.

## Lift layers: one SVG into a stack

A flat SVG is one picture. **Lift layers** turns it into a stack of boxes, one per layer of the drawing, so each layer can carry its own depth, keyframes and blur.

Right-click a box holding an SVG and choose **Lift layers** (it is also in the **More** panel on the object bar). The dialog reads the artwork, then says what it found - **6 layers found**, with the number of shapes in each. Press **Lift layers** to accept, and the box is replaced by that many boxes, in the same place, sharing a group, with their depth staggered and the Depth shadow already set. It is one commit, so one undo puts the original picture back.

The list is a plan, not a promise. On a screenshot exported from a Lolly canvas the layers really are the objects the editor knows about. On anything else - a page you captured, a drawing from another app - the split is read off the artwork's own groups and geometry, so read the list before you accept it. Artwork that is genuinely one layer says so and offers nothing to do.

## Exporting a move

The preview and the file are the same arithmetic, so what you see is what you get.

- **Video** - MP4 or WebM, rendered frame by frame at exact times rather than recorded off the screen. See [Exporting & Formats](/info/exporting.html).
- **A still** is the frame at the playhead. Park the playhead where the shot looks best and export.
- **A contact sheet** comes from the **Frames** field beside the output size: raise it and you get that many stills sampled across the sequence - see [stills from a timed composition](/info/exporting.html#stills-from-a-timed-composition).
- **SVG stays vector.** A posed frame exports as real transforms with real blur and shadow filters, not a picture of a moment.
- **PDF is partly vector.** Box and text shadows stay vector; the Depth shadow and the content shadow follow the shape of the artwork itself, so a box using either exports as an image embedded in the PDF, as does a blurred one.

A keyframe track is an ordinary part of the design, so it travels in the link like everything else: share the URL and the recipient opens the same move. (A long one packs itself into the short form - see [URL Mode](/info/url-mode.html).)
