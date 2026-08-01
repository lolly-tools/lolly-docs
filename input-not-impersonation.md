# Input, not impersonation

An AI agent is welcome to fill in the inputs. It is not welcome to claim it is you. That sounds like a slogan until you try to draw the line, so this page draws it, then shows what happens when something crosses it.

## The line

**Input is everything an agent can legitimately supply.** The words, the source image, the colour, the four hundred rows of a batch, the twenty-six locales to render into. Inputs are the whole surface an agent gets, and a tool renders them the same way no matter who typed them. A person filling those fields at 2am and an agent filling them at 2am produce the same asset, and the asset is no less legitimate for having been made quickly.

**Impersonation is claiming to be someone.** Not "this looks like their brand", but "this came from them". The claim, not the pixels.

Worth being clear about what an agent is really doing when it supplies an input. It is carrying a decision, and the decision was triggered somewhere by a person, no matter how many systems or left turns it took to arrive. Automation moves decisions; it does not originate them. That is why an agent filling in a tool is unremarkable, and an agent asserting an identity is not.

The distinction holds up because inputs and identity are two different things travelling in a file. The pixels are output, and anyone with an image editor can approximate a brand's output. The claim is an identity assertion, and that is cryptographic. You cannot approximate a signature. You either hold the key or you do not.

So Lolly does not try to stop agents making things, which would be both futile and pointless. It makes the claim impossible to fake, and makes every export state plainly what it actually is.

## Agents are a supported audience

Worth saying clearly, because "AI policy" usually means restriction. Agents get the same tools people get, through the [MCP server](/info/mcp.html), [URL mode](/info/url-mode.html) and the [CLI](/info/cli.html). They run inside identical constraints. A tool that cannot emit an off-brand asset for a person cannot emit one for an agent either, because the constraint lives in the tool, not in a check on who is asking.

What no agent gets is a way to pass its output off as something it is not. Neither does a person. The enforcement was never about the requester.

## Example scenario: a rogue agent tries to be SUSE

Take the adversarial case. An autonomous agent decides to publish a security advisory that appears to come from SUSE. It is capable, unsupervised, and it has everything a public user has: the open source engine, the public app, the brand's real colours and typefaces from published material.

Here is where it gets, step by step.

::: timeline
- <!--i:palette--> **It renders a convincing asset.** Yes. It can. This is the part no software prevents, and pretending otherwise would be the dishonest version of this page. The engine is open, the fonts are public, and a determined forger with any design tool reaches the same place.
- <!--i:seal--> **It exports the file, and the file describes itself.** Every export carries [Content Credentials](/info/content-credentials-identity.html) by default. The agent does not get to skip this quietly. The manifest records what produced the file, when, and from which ingredients.
- <!--i:lock--> **It tries to sign as SUSE, and cannot.** This is the wall. Signing with an organisation's identity requires that organisation's key, obtained through an enrolment that a human starts and controls. An agent working from the public app gets an on-device credential that identifies itself, in plain words, as `Lolly (self-signed, on-device)`. Verification of that file reports a signer who is anonymous. Not "verified as SUSE". Not silence that a reader might mistake for endorsement. It says what it is.
- <!--i:hash--> **It tries to edit the credential to say SUSE.** The manifest is signed, and the signature covers a hash of the bytes. Changing the issuer breaks the signature. A verifier reports a broken credential, which is a louder signal than no credential at all.
- <!--i:trash--> **It strips the credential instead.** Now the file has no provenance, which is exactly the state of a file from nowhere. It cannot claim SUSE authorship, and it fails the check any recipient can run in seconds. Lolly-rendered rasters also carry a [pixel imprint](/info/url-mode.html) that survives a metadata strip, so "made with Lolly, credential removed" often remains detectable. That imprint is an integrity hint rather than a hardened guarantee, and the [Threat Model](/info/threat-model.html) says so.
- <!--i:sparkle--> **It launders the AI origin.** If the agent generated imagery elsewhere and brings it in, opening that file records the incoming material's AI declaration on Lolly's own manifest. Removing the original's credentials does not remove the flag, because it was copied forward at the moment of ingest. The export still says its source was AI-generated.
- <!--i:globe--> **It publishes anyway.** It can. What it cannot do is produce a file that answers "did SUSE make this?" with yes. Anyone can drop the file into [Verify](/#/verify) and get an anonymous signer, a broken credential or no credential. Meanwhile a genuine SUSE export answers with a CA-verified identity. The forgery does not need to be blocked. It needs to be distinguishable, and it is.
:::

## What this does not claim

- **Not detection of every fake.** Lolly cannot tell you that an image made in other software is a forgery. Nothing can. It can tell you what a file does and does not carry.
- **Not a guarantee anyone checks.** Provenance only helps when someone verifies, which is why verification is free, offline, needs no account and takes one drag. Making it easy is the only lever available.
- **Not proof of truth.** A credential proves origin and integrity, not that the content is accurate. A signed advisory from a verified signer can still be wrong. That is a matter for editors, not cryptography.
- **Not protection from a stolen key.** If an organisation's signing credential is compromised, files can be signed in its name until it is revoked. Credentials are short-lived for that reason. See [Trust tiers](/info/content-credentials-identity.html) for what a verifier can actually conclude at each level.

The honest summary: an agent can make something that looks like your brand, and it cannot make something that proves it is your brand. The first has always been true. The second is new, and it is the part worth building.
