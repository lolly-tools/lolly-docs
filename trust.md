# Trust

Most software asks you to trust it. This section is the opposite: every claim Lolly makes about your content, your data and its own behaviour is written down here with the mechanism that enforces it, so you can check rather than believe.


## Where did this content come from?

The media Lolly renders carries [Content Credentials](/info/content-credentials-identity.html) by default - a signed record of what made it, from what and when. When a file arrives with a history already attached, Lolly preserves it rather than flattening it, so the chain stays intact through an edit.

- <!--i:seal--> [**Content Credentials**](/info/content-credentials-identity.html) - what gets signed, what the signature proves and who the signer is.
- <!--i:cpu--> [**Content Credentials - Engineering**](/info/content-credentials-engineering.html) - the C2PA implementation itself: manifests, ingredients, action histories, formats.
- <!--i:sunburst--> [**Our AI Stance**](/info/ai-stance.html) - where AI is welcome, where it is not and why AI-generated content declares itself.

## Can I check that for myself?

You can, and you should - the point of provenance is that it does not need our word.

- <!--i:checklist--> [**Verify It Yourself**](/info/verify-yourself.html) - walk the claims on this site against a real export, step by step.
- <!--i:shieldcheck--> [**Security & Verification**](/info/security.html) - how the code is built, signed and checked.
- <!--i:lock--> [**Threat Model**](/info/threat-model.html) - what Lolly defends against, and what it explicitly does not.
- <!--i:code--> [**Parser Inventory**](/info/parser-inventory.html) - every format Lolly parses, because parsers are where untrusted input meets your device.
- <!--i:server--> [**Server Surface**](/info/server-surface.html) - the complete list of what a server ever sees.

## What happens to my data?

Lolly renders on your device. That is not a privacy posture bolted on afterwards - it is the architecture, and it is why most of the usual questions have short answers.

- <!--i:eyeoff--> [**Privacy Policy**](/info/privacy.html) - what is collected, what is not and what leaves your device.
- <!--i:convert--> [**Data Transfer**](/info/data-transfer.html) - moving your work in and out, with nothing held hostage.
- <!--i:people--> [**Inclusive Design**](/info/inclusive-design.html) - who the software is built to work for.

## Why this is free

**We built Lolly for ourselves.** SUSE needed thousands of on-brand files, each with its name sealed inside, made without handing anything to outside services. So we built a tool that does all of it on the device, and released it as open source, like everything else we make. We keep maintaining it because we use it every day. **There is no obligation:** everything here works with or without us.

---

If you find a place where these pages and the code disagree, the code is the bug - and the [repository is public](https://github.com/lolly-tools/lolly) so you can prove it either way.
