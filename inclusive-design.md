# Lolly Inclusive Design Policy

*Last updated: 30 July 2026*

> **Our ethos.** An open source community includes all of us. Software that anyone
> can read, run and change only earns that openness when anyone can actually use
> it - whatever they see, hear, process, speak or believe. So we treat
> accommodation as a form of celebration, never a compromise: a preference that
> makes Lolly calmer, louder, larger or more familiar for someone is not a
> degraded mode of the product. It is the product, meeting one more of us where
> they are.

## What this policy covers

Lolly is a creative tool: people come here to make things that represent them.
That shapes every accommodation below in one specific way - **adjusting the app
never adjusts your work**. Accessibility preferences restyle Lolly's own
interface: menus, cards, navigation, type. They are engineered never to reach
inside the tool canvas or the export pipeline, and automated tests fail our
builds if a preference could move a single pixel of an exported file. You should
never have to choose between a comfortable app and a faithful render.

## Accessibility

Beyond following the platform's own signals (system dark mode, the OS
reduced-motion preference), Lolly ships explicit, opt-in accessibility
preferences on your profile:

- **Reduce motion** turns off transitions, slides and animated flourishes in the
  app, and combines with (never overrides) your operating system's setting.
  Animated exports keep moving exactly as designed.
- **High contrast** strengthens borders, text and focus rings around your work.
  Your brand colours and canvas stay exactly as you set them.
- **Large text** grows the app's type and icon glyphs without reflowing your
  designs, so what you export is byte-identical.
- **Hide colourful previews** swaps the gallery's preview artwork for calm icon
  and text cards, and softens project thumbnails to a single brand hue so they
  stay recognisable without the colour noise. Full colour returns the moment you
  step inside a tool, so the one place high-stimulus imagery appears is the one
  place you chose to work on it.

Alongside the preferences: controls carry accessible names and pressed states,
changes are announced to screen readers, overlays close on Escape, keyboard
focus is visible and strengthened further under high contrast, and every one of
these switches is a plain, always-visible card on the profile page - findable by
someone who can barely read the page as it is, which is the moment it matters.

## Reduced and enhanced stimulation

Neurodivergent people are not one audience with one need. The same brain that is
overwhelmed by a wall of colourful thumbnails on a hard day may seek strong
sensory input on another, so Lolly accommodates in both directions, always
opt-in:

- **Turning it down.** Reduce motion and Hide colourful previews strip the
  interface back to icons, text and one accent colour. Navigation stays busy-free
  for people with ADHD, autistic people and dyslexic people who find dense,
  high-variance imagery hard to scan; nothing you need (favourites, pinning,
  actions) is taken away in the calmer presentation.
- **Turning it up.** Neurospicy Mode is a deliberate sensory layer - focus
  loops, an atmosphere mixer with individually levelled ambient beds, procedural
  music and interface sound effects - for people who focus best with rich input.
  It is off by default and never auto-plays before you ask.
- **Sound is separable.** Every audible layer has its own switch, so "visuals
  calm, sound rich" and the reverse are both real configurations, not a single
  accessibility bundle someone else composed for you.

## Language and localization priority

- Lolly's interface and documentation are translated into more than 25
  languages, and we **prioritise languages by how many people speak them**, not
  by market revenue - Hindi, Bengali, Urdu and Indonesian arrived in the same
  waves as French and German.
- Right-to-left scripts are first-class: Arabic ships with full RTL layout, not
  a mirrored afterthought.
- Languages are distinct, not interchangeable: Indonesian and Malay are separate
  catalogs, Traditional and Simplified Chinese are separate catalogs, and the
  language attribute is set before first paint so Han characters and script
  fallbacks render correctly for your language, not a lookalike.
- The language menu lists every language in its own name and script, and can be
  ordered by speaker population, so finding yours never requires knowing its
  English name.

## Cultural inclusion

- The neutral starting brand assumes nothing about who you are; Lolly exists so
  your own identity, palette and type replace ours in minutes.
- Type is treated as a cultural surface: uploaded and Google fonts are shaped
  with proper text shaping across scripts, so names, diacritics and non-Latin
  text export as correctly drawn outlines rather than tofu or substitutions.
- Copy avoids idioms and culture-bound references that translate poorly, and
  translators receive clean, bare strings rather than sentences with markup
  fragments baked in.

## Ethical commitments

- **Privacy by architecture.** Your work stays on your device. There are no
  trackers or analytics in the codebase, and the few network touchpoints are
  enumerated in the [Privacy Policy](/info/privacy.html). Accessibility and
  language preferences are stored in your own profile, on your device - a
  disability or a language is never telemetry.
- **Honest provenance.** Exports can carry Content Credentials, and
  AI-generated content is labelled as such. We believe audiences deserve to know
  how media was made, and creators deserve tools that can prove their work is
  theirs.
- **No dark patterns.** Preferences are plain switches that do what they say,
  defaults are dormant until you choose them, and platform conventions (native
  scrolling, browser shortcuts, standard dialogs) are respected rather than
  hijacked.
- **Open source.** The engine, shells and community tools are public. Every
  claim in this document is checkable in the source, and several are enforced by
  tests that fail the build when broken - the additive-by-default rule for
  accessibility attributes, the ban on preferences reaching exports, and the
  keeping-in-step of the app's two copies of each preference.

## Holding ourselves to it

Inclusive design here is a policy in the engineering sense: invariants with
tests, not aspirations with adjectives. When an accommodation and a feature
conflict, we redesign the feature (when a 'hide previews' setting also hid icons
off utility cards, the fix was to keep the actions, not to excuse the loss). If
something in Lolly excludes you - a missing language, an overwhelming moment, an
assumption we baked in without noticing - that is a bug. Tell us:
[fitzy@suse.com](mailto:fitzy@suse.com).
