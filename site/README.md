# docs/site - the landing page as data

The `/info` front door (plans/177) is built by `docs/build.ts`, but its COPY
lives here so it can be edited like any other docs page. One file per beat,
top to bottom:

| File | Beat | Notes |
|---|---|---|
| `hero-chrome.json` | 1 - hero | `lead` + the five cycling `cycle[]` words (each `slug` is the receipt page) and the two `ctas[]`. The tagline and one-liner under them are `docs/site.md`. |
| `covers.json` | 2 - covers | No heading row above the fan by design. `covers[]`: `img` is a path under `/info/shots/` (a committed docs shot, or a posed still in `docs/shots/covers/`), `href` an app route, `name`/`promise`/`alt` copy. Add `video` (a WebM under `/info/shots/`, e.g. `covers/3d.webm`) to make a cover a 6-8 s loop with `img` as its poster - Audiogram and 3D ship that way. |
| `whatwhy.json` | 3 - what / why | The two columns. `stats[].count` names a LIVE counter (`tools`, `formatsOut`, `formatsIn`, `languages`) so no number is ever typed here. `why.statement` is the page's ONE offline claim (tests/docs-claims.test.ts pins it; the long form lives on trust.md). |
| `persona.json` | 4 - who is it for | `doors[]` → `lanes[]`. A lane's `cta.href` is `/` (the app) or an app route (`#/tool/design`); `doc` is the docs page. `links[]` are optional and each carries a docs `slug` or an app `href` (`#/tool/redact`); `note` is code, not copy. `mascot` names a credentialed `.webp` in `shells/web/public/info/mascots/` - on a door it rides the top tab, on a lane it sits figure-sized beside the pane's copy. |
| `work.json` | 4b - lolly.work | The organisation band: `eyebrow`, `heading`, `body`, and two external `links[]` (the hosted sandbox at lolly.work, the lolly-work repository). Product-level copy only. |
| `behind.json` | 5 - who is behind this | `sceptic` is FINAL copy pinned byte-identical in three homes (here, faq.md, trust.md). |

The other files here - `downloads.json`, `import.json`, `formats.json`,
`formats-catalog.json` - are bands hosted by the install, design-import and
formats pages, read by the same build.

## How each file localises

Two mechanisms, and the difference matters:

- **The five beat files are English-only.** Every copy string in them is looked
  up through the site catalogue (`docs/i18n/<lang>/site.json`) by
  `localizeSiteJson` in build.ts, keyed by the English text - the same
  English-as-key contract the nav and sidebar use. `scripts/translate.ts`'s
  `site` corpus walks these files, so a changed string becomes a pending key on
  the next wave and ships English until then (the identity fallback). Keys
  named in `LANDING_I18N_SKIP` (`href`, `slug`, `class`, `img`, `video`,
  `mascot`, `id`, `count`, `note`) are never copy and never translated.
- **`import.json` and `formats.json` keep locale twins** at
  `docs/i18n/<lang>/site/<name>` (the older mechanism); `downloads.json` and
  `formats-catalog.json` have none.

Register rules for the door (the dictionary and overclaim bans, say-offline-
once, one esoteric term) are enforced by `tests/docs-claims.test.ts` over these
files, and the vernacular gate (`scripts/check-docs-vernacular.ts`) scans them
with the rest of the English sources.
