# Lolly för utvecklare

Den tekniska dokumentationen – för dig som skapar verktyg, integrerar Lolly i en pipeline, driftar det själv, eller vidareutvecklar plattformen.

**Vad du får ut av det.** Bygg ett verktyg en gång, så slutar förfrågningarna komma tillbaka till dig. Det repetitiva "kan du inte bara göra en åt mig…" som äter upp dina eftermiddagar blir en mall som andra fyller i själva — korrekt, utan att du behöver vara inblandad. Ditt arbete är vanlig HTML/CSS/JS: versionshanterat, diffbart, granskningsbart och kör på en öppen motor utan inlåsning till en leverantör, så det förblir ditt. Automatisera produktionskörningen så går din tid till det intressanta problemet, inte den tiotusende exporten.

Lolly är en plattformsoberoende **motor** som kör samma renderingsväg genom flera **skal** (web-PWA, Tauri desktop/mobil, CLI, TUI). Verktyg är **data, inte medföljande kod** — ett manifest plus en mall plus valfria hooks — så nya verktyg levereras utan en appuppdatering. Börja med [Översikt](/info/overview.html) för arkitekturen, och följ sedan det spår som passar det du bygger.

Ny på plattformen? **[Snabbstart](/info/quickstart.html)** ser till att du har ett varumärke och din första rendering på plats innan du går på djupet.

## Förstå arkitekturen

- **[Översikt](/info/overview.html)** — varför Lolly finns, uppdelningen mellan motor/skal/verktyg, kapabilitetsbryggan och de fastslagna arkitektoniska besluten.
- **[Design Tokens](/info/design-tokens.html)** — DTCG-tokenmodellen som varumärken uttrycks i, och hur verktyg använder den.

## Skapa verktyg

- **[Skapa verktyg](/info/authoring-tools.html)** — den fullständiga guiden: manifest, mall, stilar, hooks, komposition och publicering.
- **[Skapa tillgångar](/info/authoring-assets.html)** — katalogtillgångar, nivåer, språkversioner, paletter, temaikoner och typsnitt.
- **[Host API](/info/host-api.html)** — `HostV1`-kapabilitetsbryggan som varje verktyg skrivs mot (det enda API:et verktygen ser).
- **[URL Mode](/info/url-mode.html)** — varje inmatning som en URL-parameter; reserverade parametrar, kompakt kodning, packade länkar.

## Kör och integrera

- **[CLI](/info/cli.html)** — huvudlös rendering; samma renderingsväg som GUI, styrd av `--foo=bar`-argv.
- **[TUI](/info/tui.html)** — det interaktiva terminalskalet.
- **[MCP Server](/info/mcp.html)** — den inbyggda ändpunkten som låter en AI-agent upptäcka och köra verktyg.
- **[AI-agenter](/info/ai-agents.html)** — att styra Lolly från en modell: en URL är API:et.
- **[Chrome-tillägg](/info/extension.html)** — fånga en levande URL som en återanvändbar tillgång.

## Släpp och driv det

- **[Byggguide](/info/build-guide.html)** — bygg alla mål: CLI, TUI, desktop, mobil.
- **[Driftsättning](/info/deployment.html)** — webbappen, apparna och backend-tjänsterna; var varje del körs.
- **[Konfiguration](/info/configuration.html)** — profiler, varumärkespaket, kapabilitetsspärrar, funktionsflaggor och katalogvalidering.

## Förtroende och data

- **[Content Credentials-identitet](/info/content-credentials-identity.html)** — CA-utfärdad signering för C2PA på enheten; motorns kontrakt och driftguiden för operatörer.
- **[Dataöverföring](/info/data-transfer.html)** — `lolly-backup`-paketet: kuvertformat, integritet och skalöverskridande garantier.
- **[Om](/info/about.html)** — projektet, dess licensgräns och repositoryt.
