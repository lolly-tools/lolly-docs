# Our AI stance

Lolly was built in the middle of the biggest change in how media gets made since the printing press, by people who are neither panicked about AI nor breathless about it. This page states the project's position plainly and pairs every claim with the mechanism that enforces it, so you can verify rather than trust.

> "We're drinking like the tap could turn off at any moment. It won't - today's AI is the worst it will ever be. If we survive the flood, it won't be by hoarding what's in the rusty water tank down the hill, full of sediment. It will be by irrigating and reclaiming land for a prosperous future."
>
> - Andy Fitzsimon, Architect of Lolly

![A supercell storm bearing down on an outback homestead - a lone vehicle on a dirt road, the rusty tank and windmill below, floodwater on the way](/info/ai-stance-storm.png)

Gemini Generated Image - Signed by Google LLC - [Verify this now](https://lolly.tools/verify)

The image is from where Andy grew up, and it decodes like this: the scarcity posture toward AI - grab what you can, ship it fast, worry later - is drinking spoiled tank water while the rain sets in and floodwater races across the plains toward you. Generated content is about to be effectively infinite. When something becomes infinite, its value moves to whatever remains scarce around it: trust, provenance, brand coherence and human judgment. Lolly is not a bigger bucket for the flood. It is irrigation - channels that direct the water, and soil where things actually grow.

## The stance, in five commitments

- <!--i:layers--> **AI is welcome as labour, never as impersonation.** Agents are first-class users of Lolly: they run the same tools people do, through the [MCP server](/info/mcp.html) and [URL mode](/info/url-mode.html), inside exactly the same constraints. A tool that cannot emit an off-brand asset for a person cannot emit one for an agent either - the guard-rails do not care who is throwing the ball. What no agent gets to do is pass its output off as something it is not.
- <!--i:shieldcheck--> **AI declares itself.** When AI generated the pixels, the export says so: a machine-readable assertion in the file's Content Credentials and a visible GEN AI badge when anyone verifies it. Lolly also reads and surfaces the AI declarations of files made elsewhere, including SynthID watermarks. Audiences deserve to know how media was made - that sentence appears on our [Inclusive Design](/info/inclusive-design.html) page as an ethical commitment, and this is the machinery behind it.
- <!--i:check--> **Provenance is default-on.** Exports carry [Content Credentials](/info/content-credentials-identity.html) by default, not as a buried setting. The chain covers edits and ingredients, so a work's history travels with it. You can [verify this yourself](/info/verify-yourself.html) on any file Lolly produces.
- <!--i:people--> **People stay the authors.** In Lolly, every input is a decision a person made - the words, the image, the palette, the call that needed judgment. Tools scale that judgment; they do not replace it. The tedious parts are what get automated: the brand-checking, the re-exporting at every size, the hand-localising. What remains is the authorship.
- <!--i:globe--> **Channels, not buckets.** Today's models are the floor, not the ceiling, so we refuse to build anything whose value depends on hoarding access to them. The engine is open source, renders on your own device and works offline. There is no model moat, no usage meter, no scarcity business attached to the flood itself. The durable investment is the infrastructure around the water - and that infrastructure is what we give away.

## What this is not

- Not a ban. Tools may use AI where it serves the work, and agents are a supported audience - see [AI Agents](/info/ai-agents.html).
- Not a purity claim. Lolly reads provenance broadly and writes it honestly; it does not pretend to detect every generated pixel on the internet.
- Not a moral panic. The flood is not the enemy. Unattributed water is.

## How to hold us to it

Every commitment above is enforced in the open codebase, not in a policy PDF: the provenance path, the GEN AI labelling and the no-trackers guarantee all ship with tests, and the [Verify It Yourself](/info/verify-yourself.html) page walks you through checking the claims against a real export. If you find a place where the code and this page disagree, the code is the bug.
