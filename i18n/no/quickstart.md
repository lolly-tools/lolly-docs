# Hurtigstart

Lolly omgjør reglene dine — farger, typografi, layouter, logikk — til verktøy som hvem som helst kan bruke for å lage ferdige filer: bilder, PDF-er, sosiale kort, video, ved å fylle inn noen få felt. Det finnes ingenting å lære og ingenting å laste opp: alt kjører på enheten din, på nett eller offline.

Dette er siden du bør lese først. To ting gjør deg produktiv: **gjør Lolly til din egen** (rett den mot merkevaren din), og **ta inn det du allerede har** (designfilene og tokenene dine). Alt annet er bare et klikk unna.

> Ny i Lolly og vil bare lage noe? Åpne appen, velg et hvilket som helst verktøy fra galleriet, fyll inn feltene, og trykk **Render**. Kom tilbake hit når du vil at det skal bære *din* merkevare.

## 1. Gjør den til din — konfigurer merkevaren din

Merkevaren din i Lolly er et lite **designtokens**-dokument — farger, skrifttyper og noen få regler — som hvert verktøy rendres mot. Sett den opp én gang, så er alt du lager merkevareriktig av natur, ikke gjennom en gjennomgang. Det finnes tre veier inn; velg den som passer der merkevaren din allerede finnes.

### Start fra bunnen (Brand Studio)

Første gang du åpner appen, havner du på skjermen **Start** (`#/start`) — [**Brand Studio**](/info/brand-studio.html). Gi den et navn og en primærfarge, så *utleder* Lolly en komplett, tilgjengelig palett fra den — lyse/mørke flater, tekst, aksenter — med den samme fargematematikken motoren bruker overalt ellers. Velg en skrifttype, og du har en fungerende merkevare på under et minutt. Derfra lar studioets fem faner (Logos, Colours, Type, Tokens, Catalogue) deg ta det så langt du vil — finpuss hva som helst senere, når du enn kommer tilbake.

### Importer en merkevare du allerede har

Hvis merkevaren din allerede er fanget som designtokener — fra **Penpot**, **Tokens Studio** (Figma), eller en vanlig **DTCG**-fil — kan du ta den inn i sin helhet i stedet for å skrive den inn på nytt. To veier:

- **I appen:** [Brand Studio](/info/brand-studio.html) (`#/start`) tar imot en tokenfil, en Penpot-eksport, eller en `LollyBrand`-pakke direkte — slipp den inn, så tennes paletten.
- **Fra kommandolinjen**, for å sette opp en gjenbrukbar merkevarepakke:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` tar imot alle de tre formatene Penpot/Tokens Studio eksporterer det samme dokumentet i — en enkelt `tokens.json`, en mappe (`$metadata.json` + filer per sett), eller et `project.penpot`-arkiv. Med `--activate` registreres merkevaren som en profil, byttes det til den, og katalogen bygges på nytt. Se [Konfigurasjon](/info/configuration.html) for hvordan merkevarepakker og profiler henger sammen.

### Finjuster den i appen

Når en merkevare er aktiv, fortsetter du å forme den i [**Brand Studio**](/info/brand-studio.html) (`#/start`) — endre en farge eller en rolle, og hver forhåndsvisning i appen oppdateres mens du skriver. (Dashbordets fane **Designsystem** på `#/d` *viser* merkevaren skrivebeskyttet; det er i Studio du redigerer den.) Den samme merkevaren oppsummeres på kortet **Profil → Din merkevare**. Skrifttyper er ekte: velg fra Google Fonts, og Lolly lagrer filen **på enheten din** som en merkevareressurs, slik at typografien din fungerer offline og ingenting hentes ved rendering.

Når du er fornøyd, **eksporter merkevaren som en `LollyBrand`-pakke** — en enkelt fil en kollega kan importere for å få nøyaktig samme palett, skrifttyper og regler. Slik flyttes en merkevare mellom mennesker og maskiner uten en server i midten.

> **Merkevaretokener går begge veier.** Fordi Lollys merkevare *er* DTCG-tokener — formatet Penpot leser og skriver nativt, og som Tokens Studio bringer til Figma — er paletten du designer *med*, og paletten Lolly *håndhever*, ett og samme dokument, ikke to lister du synkroniserer for hånd. Se [Designtokener](/info/design-tokens.html).

## 2. Ta inn det du allerede har

Du starter ikke på et blankt ark. Lolly åpner designarbeidet og de åpne formatene du allerede eier.

### Designfiler med åpen kildekode

Ferdig arbeid i **Figma, Penpot, Illustrator, InDesign, eller en hvilken som helst SVG-app** trenger ikke forbli låst inne i appen du tegnet det i. Åpne **Layout Studio**, klikk **Importer en design**, og filen åpnes som en *levende layout* — ikke et flatt bilde. Hvert lag blir en redigerbar boks: tekst forblir omskrivbar, former forblir former, bilder havner i biblioteket ditt, og kompleks vektorgrafikk bevares trofast. Den ankommer allerede tilpasset merkevarens skrifttyper og fargeregler.

| Du har | Ta det inn som |
|---|---|
| En Figma-ramme | Native `.fig` (Fil → Lagre lokal kopi), eller en SVG-eksport |
| En Penpot-design | Dens `.penpot`-eksport, eller en hvilken som helst SVG |
| En Illustrator-fil | Native `.ai` (PDF-kompatibel) eller `.pdf` — åpnes direkte |
| Et InDesign-oppsett | `.idml` (Fil → Eksporter → InDesign Markup) |
| Noe annet | **En hvilken som helst SVG** — den universelle inngangen |

Hele importen skjer **på enheten din** — filen tolkes i nettleseren din, og ingenting lastes opp. Fullstendige detaljer, og nøyaktig hva som overføres, finner du i [Importer en design](/info/design-import.html).

### Fra engangsjobb til mal

Her er gevinsten: en importert layout er en vanlig Layout Studio-økt, så så snart du **lagrer** den, lever den på en URL. Alle med Lolly kan åpne den URL-en, endre teksten, bytte ut et bilde, og rendere sin egen versjon — ingen designapp nødvendig, og de låste delene forblir låst. En engangsdesign blir et gjenbrukbart verktøy. Det er hele ideen, oppnådd uten å skrive en eneste linje konfigurasjon.

### Åpen data og åpne verktøy

[Community-verktøysettet](/info/builders.html) er åpen kildekode og merkevareuavhengig — QR-koder, bykart, filtre, personvernverktøy — og det rendres mot *din* merkevare i det øyeblikket du aktiverer det. Mat verktøyene med din egen åpne data også: lim inn eller slipp en **CSV**- eller **JSON**-tabell, så fylles et verktøys gjentakende felter fra den, én ferdig ressurs per rad.

## 3. Lag noe, del eller automatiser det

Med en aktiv merkevare og materialet ditt klart, produserer hvert verktøy en ferdig fil:

- **Render** et hvilket som helst verktøy til **SVG, PDF, PNG, JPG, WebP, video**, og mer — i ekte trykkstørrelser og fysiske enheter når du trenger det. Se [Eksport og formater](/info/exporting.html).
- **Del en lenke.** Hver verktøytilstand er en URL, så en ferdig ressurs er reproduserbar og parameteradresserbar — commit lenken, regenerer ved behov.
- **Gjør det i bulk.** Driv en mal fra et regneark i [batch-rutenettet](/info/exporting.html): én ferdig ressurs per rad.
- **Automatiser det.** Den samme renderingen kjører fra [CLI](/info/cli.html) og fra en [AI-agent](/info/ai-agents.html) — en URL er API-et.

## Hvor du kan gå videre

Tre veier videre, avhengig av hva du er her for å gjøre:

- **[Lolly for skapere](/info/creators.html)** — du lager ting. Fordelene, og hvordan du får mest mulig ut av appen.
- **[Lolly for utviklere](/info/builders.html)** — du lager verktøy, integrerer og distribuerer. Den tekniske dokumentasjonen.
- **[Lolly for operatører](/info/operators.html)** — du er ansvarlig for merkevare, sikkerhet og utrulling i en organisasjon.
