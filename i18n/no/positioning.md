# Hvordan Lolly sammenlignes

Hvor denne plattformen passer inn i det bredere landskapet av kreative verktøy, og hvor den bevisst **ikke** er med.

> **Pilotstatus:** Lolly er en prototype i en lukket pilot, ikke et ferdig produkt, og sikkerheten gjennomgår for tiden SUSEs strenge infrastrukturherding, i forberedelse til virksomhetsskala. Denne posisjoneringen er der Lolly *sikter* mot å befinne seg — siden [Innføring og styring](/info/adoption-governance.html#status) dekker hvordan dette testes i praksis.

## Landskap

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


Gapet er tydelig: ingenting i det eksisterende landskapet gir oss begrensningsstyrt, offlinekapabel, lavterskel, internt tilgjengelig, generativt resultat. Lolly leverer nå en egen åpen canvas — **Layout Studio**, en fri canvas for direkte manipulasjon — men med en avgjørende forskjell fra Canva-kolonnen: farger, typografi og ressurser som plasseres på den, følger merkevarens globale verdier, slik at selv fri utforming forblir begrensningsstyrt. Det Lolly fortsatt **ikke** er, er en ubegrenset designsuite; designere vil fortsette å bruke Illustrator og Figma til skreddersydd arbeid — og når det arbeidet må bli en styrt, reproduserbar ressurs, bringer Layout Studios [Importer en design](/info/design-import.html) den ferdige Figma-/Illustrator-/Penpot-filen inn på canvaset som redigerbare, merkevaretilpassede bokser.

## Bruk det til

- Rask generering av operasjonaliserte kreative ressurser (arrangementsfliser, brikker, signaturer, varsler)
- Fri utforming på den åpne canvasen (Layout Studio) når elementene — farger, typografi, ikoner, bilder — må holde seg til merkevarens globale verdier
- Å lande en ferdig Figma-, Illustrator-, InDesign- eller Penpot-design (Layout Studios Importer en design) slik at den kan redigeres, styres og rendres på nytt deterministisk i alle Lolly-formater
- En-til-mange-flyter av typen «fyll ut tre felt, få den ferdige ressursen» — inkludert masseoppgaver fra et regneark/CSV i `/pro`-batch-rutenettet (lim inn eller importer rader, én ferdig ressurs per rad, last ned som en zip)
- Alltid på, tilbakevendende merkevaretilpassede resultater
- Ting der sentral kontroll over merkevareuttrykket betyr mer enn uttrykksfull fleksibilitet

## Ikke bruk det til

- Skreddersydd eller flaggskip hero-innhold (reklametavler, større videoproduksjoner)
- Unikt kampanjearbeid som virkelig krever en designer
- Idéutvikling som må bryte helt løs fra merkevaresystemet — Lollys åpne canvas holder fortsatt farger, typografi og ressurser innenfor merkevarens globale verdier, og det er selve poenget

## Hva dette tilbyr som er unikt

- **Vilt designpotensial levert trygt i kontekst.** Verktøy kan uttrykke dristige designideer innenfor hardkodede sikkerhetsrekkverk.
- **Programvaredefinert innholdsautomatisering som returnerer den ferdige ressursen.** Inndata → ferdig fil. Ingen «nå må du lagre det fra designverktøyet og etterbehandle det».
- **Verktøy komponerer verktøy.** Ett verktøy kan bygge inn et annet verktøys rendering og returnere den som en del av én ferdig ressurs, uten noen kodekobling mellom verktøyene — en grunnfunksjon som ingen produkter for åpen canvas eller DAM-maler i landskapet tilbyr.
- **Leverandørnøytralitet.** Full kontroll over funksjoner og kostnader. Åpen kildekode-motor. Verktøy og ressurser er git-sporet innhold, ikke låst inne i en SaaS-database.
