# Lolly voor Bouwers

De technische documentatie — voor iedereen die tools schrijft, Lolly in een pipeline integreert, het zelf host, of het platform uitbreidt.

**Wat levert het jou op.** Bouw een tool één keer en het verzoek komt niet meer bij je terug. Het steeds terugkerende "kun je even een … voor me maken" dat je middagen opslokt, wordt een sjabloon dat andere mensen zelf invullen — correct, zonder dat jij ertussen hoeft te zitten. Je werk is gewoon HTML/CSS/JS: versiebeheerd, diffbaar, review-baar, en draait op een open engine zonder vendor lock-in, dus het blijft van jou. Automatiseer de productierun en je tijd gaat naar het interessante probleem, niet naar de tienduizendste export.

Lolly is een platformonafhankelijke **engine** die hetzelfde renderpad gebruikt op meerdere **shells** (web PWA, Tauri desktop/mobile, CLI, TUI). Tools zijn **data, geen gebundelde code** — een manifest plus een template plus optionele hooks — zodat nieuwe tools verschijnen zonder app-update. Begin met het [Overzicht](/info/overview.html) voor de architectuur, en volg dan het traject dat past bij wat je bouwt.

Nieuw bij het platform? De **[Quickstart](/info/quickstart.html)** zet een merk en je eerste render neer voordat je de diepte ingaat.

## De architectuur begrijpen

- **[Overzicht](/info/overview.html)** — waarom Lolly bestaat, de scheiding tussen engine/shell/tools, de capability bridge, en de vastgelegde architecturale keuzes.
- **[Design Tokens](/info/design-tokens.html)** — het DTCG-tokenmodel waarin merken worden uitgedrukt, en hoe tools deze gebruiken.

## Tools schrijven

- **[Tools schrijven](/info/authoring-tools.html)** — de volledige handleiding: manifest, template, styles, hooks, compositie, en publiceren.
- **[Assets schrijven](/info/authoring-assets.html)** — catalogusassets, tiers, locales, paletten, thema-ondersteunende iconen en lettertypen.
- **[Host API](/info/host-api.html)** — de `HostV1` capability bridge waartegen elke tool wordt geschreven (de enige API die tools zien).
- **[URL Mode](/info/url-mode.html)** — elke input als een URL-parameter; gereserveerde params, compacte encoding, packed links.

## Draaien & integreren

- **[CLI](/info/cli.html)** — headless rendering; hetzelfde renderpad als de GUI, aangestuurd door `--foo=bar` argv.
- **[TUI](/info/tui.html)** — de interactieve terminal-shell.
- **[MCP Server](/info/mcp.html)** — het native endpoint waarmee een AI-agent tools kan ontdekken en uitvoeren.
- **[AI Agents](/info/ai-agents.html)** — Lolly aansturen vanuit een model: een URL is de API.
- **[Chrome Extension](/info/extension.html)** — leg een live URL vast als herbruikbare asset.

## Uitrollen & beheren

- **[Build Guide](/info/build-guide.html)** — bouw elk doel: CLI, TUI, desktop, mobile.
- **[Deployment](/info/deployment.html)** — de webapp, de apps, en de backend-services; waar elk onderdeel draait.
- **[Configuration](/info/configuration.html)** — profielen, brand packs, capability gating, feature flags, en catalogusvalidatie.

## Vertrouwen & data

- **[Content Credentials Identity](/info/content-credentials-identity.html)** — door een CA uitgegeven ondertekening voor on-device C2PA; engine-contracten en het operator-runbook.
- **[Data Transfer](/info/data-transfer.html)** — de `lolly-backup`-bundel: envelope, integriteit, en cross-shell garanties.
- **[About](/info/about.html)** — het project, de licentiegrens, en de repository.
