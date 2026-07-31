# Hvordan Lolly sammenlignes

Hvor denne plattformen passer inn i det bredere landskapet av kreative verktøy, og hvor den bevisst **ikke** er med.

> **Pilotstatus:** Lolly er en prototype i en lukket pilot, ikke et ferdig produkt, og sikkerheten gjennomgår for tiden SUSEs strenge infrastrukturherding, i forberedelse til virksomhetsskala. Denne posisjoneringen er der Lolly *sikter* mot å befinne seg - siden [Innføring og styring](/info/adoption-governance.html#status) dekker hvordan dette testes i praksis.

## Landskap

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Funksjon | Canva (Åpen canvas) | Merkevareportaler (DAM-maler) | Illustrator (profesjonelt skrivebordsprogram) | Figma / Penpot (profesjonelt, nettbasert) | **Lolly (Begrensningsstyrt)** |
|---|---|---|---|---|---|
| Massegenerering av innhold | delvis | ✗ | ✗ | ✗ | **✓** |
| Fungerer helt offline | ✗ | ✗ | ✓ | delvis | **✓** |
| Mallogikk og harde begrensninger | ✗ | delvis | ✗ | delvis | **✓** |
| Ingen designkompetanse kreves | delvis | ✓ | ✗ | ✗ | **✓** |
| Automatiske Content Credentials | ✗ | ✗ | delvis | ✗ | **✓** |
| Verktøy komponerer andre verktøy | ✗ | ✗ | ✗ | ✗ | **✓** |
| Åpen motor, ikke SaaS-låst | ✗ | ✗ | ✗ | delvis | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Valgfri forensisk opprinnelse | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobil- og skrivebordsapper | ✓ | ✗ | ✗ | delvis | **✓** |
| Kommandolinje og TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Gapet er tydelig: ingenting i det eksisterende landskapet gir oss begrensningsstyrt, offlinekapabel, lavterskel, internt tilgjengelig, generativt resultat. Lolly leverer nå en egen åpen canvas - **Layout Studio**, en fri canvas for direkte manipulasjon - men med en avgjørende forskjell fra Canva-kolonnen: farger, typografi og ressurser som plasseres på den, følger merkevarens globale verdier, slik at selv fri utforming forblir begrensningsstyrt. Det Lolly fortsatt **ikke** er, er en ubegrenset designsuite; designere vil fortsette å bruke Illustrator og Figma til skreddersydd arbeid - og når det arbeidet må bli en styrt, reproduserbar ressurs, bringer Layout Studios [Importer en design](/info/design-import.html) den ferdige Figma-/Illustrator-/Penpot-filen inn på canvaset som redigerbare, merkevaretilpassede bokser.

## Bruk det til

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio er et godt mål på taket her: en hel presentasjon deklarert som data, lagt ut live på canvasen og eksportert som en innebygd redigerbar PowerPoint.

- Rask generering av operasjonaliserte kreative ressurser (arrangementsfliser, brikker, signaturer, varsler)
- Fri utforming på den åpne canvasen (Layout Studio) når elementene - farger, typografi, ikoner, bilder - må holde seg til merkevarens globale verdier
- Å lande en ferdig Figma-, Illustrator-, InDesign- eller Penpot-design (Layout Studios Importer en design) slik at den kan redigeres, styres og rendres på nytt deterministisk i alle Lolly-formater
- En-til-mange-flyter av typen «fyll ut tre felt, få den ferdige ressursen» - inkludert masseoppgaver fra et regneark/CSV i `/pro`-batch-rutenettet (lim inn eller importer rader, én ferdig ressurs per rad, last ned som en zip)
- Alltid på, tilbakevendende merkevaretilpassede resultater
- Ting der sentral kontroll over merkevareuttrykket betyr mer enn uttrykksfull fleksibilitet

## Ikke bruk det til

- Skreddersydd eller flaggskip hero-innhold (reklametavler, større videoproduksjoner)
- Unikt kampanjearbeid som virkelig krever en designer
- Idéutvikling som må bryte helt løs fra merkevaresystemet - Lollys åpne canvas holder fortsatt farger, typografi og ressurser innenfor merkevarens globale verdier, og det er selve poenget

## Godkjenn verktøyet, ikke filen

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Alle andre verktøy i landskapet produserer en *fil* som deretter må kontrolleres - en merkevareansvarlig i en Slack-tråd, juridisk på ansvarsfraskrivelsen, en runde endringer, enda en gjennomgang. Lolly flytter godkjenningen **ett steg oppstrøms**. Merkevarereglene - eksakte heksadesimalkoder, lisensierte fontfiler, utfallsmarger, avstander - er hardkodet i verktøyets HTML og CSS, så malen *kan fysisk ikke* sende ut en ressurs som bryter med merkevaren. Selve layouten er bærende.

Så du slutter å godkjenne utdata og begynner å godkjenne **verktøyet** som lager den. Godkjenn det én gang, og hver ressurs det noen gang produserer, er forhåndsgodkjent i kraft av konstruksjonen - ingen mennesker i løkken, ingen gjennomgangssyklus, uansett volum.

Dette er paradigmeskiftet den deterministiske motoren faktisk leverer: det er ikke en raskere versjon av den gamle godkjenningsprosessen, det fjerner prosessen. For det kreative teamet er det et sikkerhetsrekkverk, ikke en erstatning - du kaster fortsatt ballen (dataene, teksten, bildet), og koden er kantvernet som holder hvert kast unna renna.

| Å godkjenne ressurser på den gamle måten | Å godkjenne verktøyet, på Lolly-måten |
|---|---|
| Hver ferdige fil kontrolleres, én om gangen | Verktøyet kontrolleres én gang |
| Forespørsel → designeren bygger → merkevaregjennomgang → juridisk sjekk → endringer → ny gjennomgang | Én parameterendring → ferdig ressurs |
| Designer, merkevareansvarlig, juridisk og bestiller alle i løkken | Produsenten, helt alene |
| Dager per ressurs | Sekunder per ressurs |
| 10 000 ressurser = 10 000 gjennomgangssykluser | 10 000 ressurser = null (malen var allerede godkjent) |

## Hva dette tilbyr som er unikt

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Vilt designpotensial levert trygt i kontekst.** Verktøy kan uttrykke dristige designideer innenfor hardkodede sikkerhetsrekkverk.
- **Programvaredefinert innholdsautomatisering som returnerer den ferdige ressursen.** Inndata → ferdig fil. Ingen «nå må du lagre det fra designverktøyet og etterbehandle det».
- **Verktøy komponerer verktøy.** Ett verktøy kan bygge inn et annet verktøys rendering og returnere den som en del av én ferdig ressurs, uten noen kodekobling mellom verktøyene - en grunnfunksjon som ingen produkter for åpen canvas eller DAM-maler i landskapet tilbyr.
- **Leverandørnøytralitet.** Full kontroll over funksjoner og kostnader. Åpen kildekode-motor. Verktøy og ressurser er git-sporet innhold, ikke låst inne i en SaaS-database.

Den første av dem er den folk undervurderer. Et bykart i posterkvalitet, tegnet som ekte vektorbaner for veier og vann, fra en nedtrekksmeny og to fargefelt som ikke kan rettes utenfor merkevaren:

