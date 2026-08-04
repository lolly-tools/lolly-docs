# The trade we never agreed to

Nobody sat us down and offered us the deal. It arrived one tool at a time, each step reasonable on its own, until the normal way to resize an image was to send it to a company none of us have met.

This page is about that accumulation. Not about villains, because most of it was built by people making sensible decisions inside incentives that pointed one way. The incentives are the problem, and they are the thing worth naming.

::: cols
## We did this easily

::: timeline
- <!--i:upload--> We uploaded a logo to a free converter, waited through an ad, and downloaded a file we hoped was the same picture.
- <!--i:lock--> We went back for artwork from eighteen months ago and found it behind a login for a plan the team had stopped paying for. The artwork was ours. The file was not reachable.
- <!--i:eyeoff--> We accepted cookies we did not read, on a site we visited once, to do something that took eleven seconds.
- <!--i:hash--> We sent a near-final campaign to a colleague, who sent it onward, and the version everyone uses now is one nobody can point back to.
- <!--i:pause--> We clicked "not now" on the same upsell for a year.
:::

## The cost

- <!--i:upload--> **Our content became the price.** A tool that runs on someone else's server has to be paid for, so the bill arrives as a subscription, an ad, a data broker or a training corpus. The upload was never technically necessary for resizing a picture. Browsers have done that locally for years.
- <!--i:lock--> **Our files became leverage.** Work kept in a format only one program opens is leverage over the person who made it, and leverage that expires with a card is not a partnership.
- <!--i:eyeoff--> **Our consent became paperwork.** Twelve toggles and a forty-page policy do not produce informed agreement. They produce legal cover, and one more task standing between us and the work.
- <!--i:hash--> **Our proof went missing.** For most of the last decade a file carried no reliable record of where it came from. That was survivable while making a convincing image still took a studio. It is not survivable now.
:::

None of it was carelessness. Each step was the reasonable one available at the time, and the incentives underneath were pointing the same way for everyone.

## The old way and the new way

| | The usual way | Here |
|---|---|---|
| **Friction** | Upload, queue, sign in, dismiss the upsell, download something you hope is right | Open a link and work. No account, no upload, no waiting on a stranger's server |
| **Risk** | Your file rests on someone else's disk, under their retention policy and their breach exposure | The file never leaves your device, so there is no second copy to leak |
| **Quality** | Silently re-encoded, resolution capped on the free tier, a watermark you pay to remove | Real vector out, print-ready colour, the same render on every device, nothing withheld |
| **Trust** | A policy you have to believe, rewritable at any time without telling you | An architecture you can check, and a signed credential travelling inside every export |
| **Ethics** | Your work becomes training data or an ad profile by default, and consent is a wall you click through | Nothing is collected, so nothing can be repurposed. AI declares itself, and access needs are settings rather than requests |

Each row is a claim you can test rather than a slogan, which is what the rest of this section is for.

## Trust what you can verify 

Every one of those has a fix that is architectural, not a promise in a policy document. The difference matters: a promise is a thing a company can change on a Tuesday, and an architecture is a thing you can check.

- <!--i:cpu--> **The work happens on your device.** Rendering, exporting, converting, stripping metadata: all of it runs in your browser, on your machine. Not as a privacy feature bolted on afterwards, but because that is where the engine lives. It follows that your content cannot be collected, sold or trained on by us, because it never arrives. See [Privacy](/info/privacy.html), and the complete list of what a server ever sees in [Server Surface](/info/server-surface.html).
- <!--i:download--> **Exports are ordinary files.** PNG, SVG, PDF, WebP, TIFF, and the rest. They open in software that has nothing to do with us, they keep working if this project disappears, and there is no export tier. Your last day using Lolly leaves you with everything you made. See [Exporting and Formats](/info/exporting.html) and [Data Transfer](/info/data-transfer.html).
- <!--i:seal--> **Provenance travels with the work.** Exports carry [Content Credentials](/info/content-credentials-identity.html) by default, recording what made a file and from what. Anyone can check it, including you, including on files we did not make. That turns "trust me" into a question with an answer. Try it on something you made: [Verify It Yourself](/info/verify-yourself.html).
- <!--i:globe--> **There is nothing to consent to.** No trackers, no analytics, no profile, no account required to use the tools. The engine is open source, works offline and needs no sign-in, so the usual consent surface has nothing to ask you about. [Security and Verification](/info/security.html) covers how to confirm that rather than take our word.
- <!--i:people--> **Accessibility is not a later release.** Motion, contrast, text size and preview intensity are preferences in the product, not accommodations you request. See [Inclusive Design](/info/inclusive-design.html).

## What this is not

It is not a claim that everyone doing it the other way acts in bad faith. Server-side software is a legitimate way to build things, and plenty of it is made carefully by people who would rather not be collecting what they collect.

It is not a claim that Lolly does everything those tools do. It does a narrower set of things without the trade.

And it is not a request for your trust. Trust is the thing we are trying to make unnecessary. Everything above is checkable, the code is public, and the [Threat Model](/info/threat-model.html) is honest about the limits. If the page and the code ever disagree, the code is the bug.
