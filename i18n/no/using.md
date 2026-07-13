# Bruke Lolly

En praktisk guide til å faktisk *bruke* appen - åpne et verktøy, jobbe med canvaset, eksportere, lagre og dele. Alt her kjører **på enheten din**: ingen konto, ingen opplasting, ingen internettforbindelse kreves etter første innlasting.

> Ny her? [Hurtigstart](/info/quickstart.html) får deg i gang med å lage ting på minutter, og [Lolly for operatører](/info/operators.html) dekker installering/utrulling av appen; denne siden handler om å bruke den når den først er åpen.

## Åpne et verktøy

Hjemskjermen er **galleriet** - alle verktøy, gruppert etter kategori. Klikk på et kort for å åpne verktøyet; hvis du har jobbet med det før, gjenopptar en **Fortsett**-knapp din siste økt. Bruk søkefeltet for å filtrere etter navn.

Hvert verktøy er en delt visning: **kontroller** på den ene siden, en direkte **forhåndsvisning** (canvaset) på den andre. Endre en kontroll, så oppdateres forhåndsvisningen umiddelbart.

> Noen få verktøy (som **Layout Studio**) åpnes i stedet som et **fritt canvas** - en kromfri flate for direkte manipulasjon der du drar, endrer størrelse på, roterer og fester bokser med tekst, former og bilder, og dobbeltklikker for å redigere tekst direkte på stedet. Det eksporteres via samme renderingsvei som alle andre verktøy, så canvaset *er* filen. Se [Det frie canvaset](#the-free-canvas-layout-studio) nedenfor.

## Canvaset (forhåndsvisning)

Forhåndsvisningen viser alltid nøyaktig det som vil bli eksportert.

**Skrivebord**

- **Zoom:** Cmd/Ctrl-scroll, eller knip sammen på en styreflate - zoomen sentreres rundt pekeren.
- **Panorer:** hold nede **mellomrom** og dra, eller dra med **midterste museknapp**. (Vanlige klikk er fortsatt frie til å klikke på deler av designen.)
- **Tastatur:** `0` = tilpass til vindu · `1` = 100 % · `+` / `−` = zoom.
- **Zoom-HUD:** den lille kontrollen `−  NN%  +  Fit` i hjørnet. Klikk på prosenten for å veksle mellom Fit og 100 %.

**Berøring**

- **Knip** for å zoome, **dra** for å panorere, **dobbelttrykk** for å tilbakestille til tilpasset visning.

**Klikk for å hoppe til en kontroll:** klikk på et hvilket som helst element i designen, så får det tilsvarende inndatafeltet i sidepanelet fokus og rulles inn i visningen - for en gjentakende radgruppe folder den ut nøyaktig raden du klikket på, slik at å redigere det du ser er bare ett trykk unna.

En endring av dimensjonene fører alltid visningen tilbake til en ren tilpasning.

### Det frie canvaset (Layout Studio)

Verktøy med fritt canvas legger til en arbeidsflate *rundt* tegnebrettet, som en designers oppslagstavle:

- **Mellomlagring utenfor canvaset.** Dra en boks forbi rammens kant, og den forblir fullt **synlig og velgbar** - parker elementer til side mens du arrangerer komposisjonen, og dra dem så tilbake. Alt utenfor rammen er **svakt nedtonet**, slik at eksportområdet alltid er lett å oppfatte, og rammen beholder skyggen sin for å markere nøyaktig hvor filen begynner.
- **Bare rammen eksporteres.** Den eksporterte filen avgrenses av tegnebrettet - alt som blir liggende utenfor (eller den delen av en boks som henger over kanten) blir rett og slett beskåret bort fra resultatet, både i raster- og vektorformater.
- **Zoom ut forbi Fit** (ned til 20 %) for å se hele oppslagstavlen når du har plassert ting langt utenfor rammen.
- **Tegnebrett med justerbar størrelse.** Å endre eksportdimensjonene endrer størrelsen på rammen på stedet; boksene beholder posisjonene sine, slik at du kan ramme inn en layout på nytt rundt eksisterende innhold.

## På en telefon

På smale skjermer flyter layouten om til én kolonne:

- **Kontrollene blir et ark** øverst med et **draghåndtak** på nedre kant. Dra håndtaket for å endre størrelse - det smetter til **kikk / halv / full** - eller **trykk** på håndtaket for å veksle mellom sammenslått og utvidet. Forhåndsvisningen fyller plassen under og forblir synlig mens du redigerer.
- En flytende **Render**-knapp åpner arket **Eksport** - alle kontrollene for format, størrelse, kopiering, lagring og nedlasting på ett sted. Lukk det ved å trykke på bakgrunnen.

## Kontroller (inndata)

Verktøy eksponerer bare inndataene som er ment å variere - alt annet (farger, layout, typografi, logikk) er låst av verktøyforfatteren, slik at det du lager alltid oppfyller reglene forfatteren har satt. Inndata omfatter tekst, glidebrytere, fargevelgere, nedtrekksmenyer, datoer, bildevelgere og gjentakende radgrupper. Noen er gruppert under sammenleggbare seksjoner.

**Tilbakestill:** *Fjern endringer* tilbakestiller hver inndata til standardverdien.

## Dine detaljer og portrettbilde

**Profil** (øverst til høyre i galleriet) inneholder navnet ditt, kontaktdetaljer og et valgfritt **portrettbilde**. Verktøy som spør etter disse feltene, fyller dem inn automatisk - sett dem én gang, så fyller e-postsignaturen, lockupene og merkene dine seg selv inn. Du kan fortsatt overstyre et hvilket som helst felt per økt. Slå på **Bruk mine detaljer** slik at et verktøy kan lese dem.

Portrettbildet og detaljene dine finnes **bare på denne enheten**. En profil kan være mer enn bare deg - et team eller en rolle du trer inn i nå og da. Se **[Profiler](/info/profile.html)** for hele bildet, inkludert hvordan du kan ha mer enn én.

## Lagre og fortsette

Klikk **Lagre** for å lagre gjeldende inndata som en økt for det verktøyet. Du kan ha flere navngitte økter per verktøy; hvert verktøys **Fortsett**-knapp åpner den siste igjen, og **historikk-knappen** (øverst til høyre, ved siden av profilen din) lister opp hver lagrede økt på tvers av alle verktøy. Økter er enhetslokale. For å organisere dem, åpne **Prosjekter** (nedenfor).

## Prosjekter

**Prosjekter** - åpne det fra fanen **Prosjekter** ved siden av **Verktøy**, eller fra **Profil → Lagring → Organiser i Prosjekter** - er et hjem for alt du har lagret, og det fungerer som en filbehandler:

- **Mapper som kan nøstes.** Grupper lagrede økter i mapper, og mapper inni mapper, så dypt du vil. Opprett en mappe, gi den nytt navn, eller dra en flis til en annen mappe for å flytte den; en brødsmulesti fører deg tilbake opp. En alltid tilstedeværende mappe, **Ukategorisert**, inneholder alt som ennå ikke er arkivert.
- **Arkiver nytt arbeid direkte.** Inne i en mappe åpner **+ Nytt verktøy** et verktøy og arkiverer den første lagringen i den mappen automatisk.
- **Flervalg (skrivebord).** Kryss av en flis' avkrysningsboks, dra en markeringsboks over tomt canvas, eller **Shift/Cmd-klikk**; **høyreklikk** på en flis for kontekstmenyen. Utfør deretter en handling på hele utvalget samtidig.
- **Render en hel mappe eller et utvalg.** **Render mappe** eksporterer hver lagrede økt i en mappe - inkludert undermapper - som én nøstet `.zip`. **Render utvalg** gjør det samme for et hvilket som helst flervalg, og en enkelt økt rendres rett til sin egen fil. Ingen Batch/Pro nødvendig.
- **Del en lagret økt.** Høyreklikk på en økt → **Del lenke** for å kopiere en lenke som åpner den igjen med nøyaktig samme inndata (hele Del-dialogen - se nedenfor).

## Dele en lenke

Hver inndata fanges i sidens URL, så en lenke *er* designen. Bruk **Del** i eksportkontrollene - eller **Del lenke** på en lagret økt i Prosjekter - for å åpne **Del-dialogen**: en lenke klar til å kopieres, pluss brytere for å kryptere lenken og hva som skjer når den åpnes (fullskjerm, eksportpanelet utvidet, nedlasting-ved-åpning med `&export`, eller kopiering-til-utklippstavle med `&copy`).

En stor design ville gitt en lang URL, så dialogen tilbyr også en **Korteste lenke** som pakker hele tilstanden inn i en kompakt token - den lesbare formen er alltid tilgjengelig også. Lim den inn til en kollega, bokmerk den, eller commit den. (Fullstendige detaljer: [URL-modus](/info/url-mode.html).)

> Bilder du har lastet opp fra enheten din, er **ikke** inkludert i en delt lenke - de finnes bare på din maskin.

## Direktekamera (bevegelsesreaktive verktøy)

Fotofiltrene - Halftone, Scanline, Posterize, Duotone - viser en **Go live**-knapp der et kamera er tilgjengelig. Slå den på, så følger effekten webkameraet ditt bilde for bilde, slik at den reagerer på bevegelse; du kan ta opp resultatet som GIF, WebM eller MP4. Bilderutene leses og behandles **på enheten din** og forlater den aldri, og kameraet frigjøres i det øyeblikket du stopper eller forlater verktøyet. (En hvilken som helst bildevelger har også **Ta et bilde** for å fange én enkelt bilderute som et bilde på enheten.)

## Mine bilder

Når et verktøy lar deg legge til et bilde fra enheten din, skaleres det ned, strippes for EXIF/GPS, og lagres i det personlige biblioteket **Mine bilder** (under **Profil → Lagring**). Gjenbruk det i et hvilket som helst verktøy. Biblioteket har en øvre grense og er helt lokalt - administrer eller slett bilder der.

## Katalogen - ressursbiblioteket ditt

**Katalogen** (`#/c`, eller lenken **Katalog** i menyen) samler alt verktøyene dine kan hente fra - merkevarelogoer, bilder, lyd og bevegelse, gruppert etter type - og det er også der dine **egne kreative filer** bor. Ingen server, ingen adminkonsoll, ingen pull request: alt er på enheten din.

- **Ta med filene dine.** Dra et hvilket som helst bilde, SVG, lydklipp, video, Lottie, eller PDF inn på opplastingsområdet - eller klikk for å velge - og det havner i katalogen din umiddelbart, klart i hvert verktøys ressursvelger. Ta inn så mye du vil; det forlater aldri enheten din.
- **Favoritter det du bruker ofte.** ★ en ressurs (eller en merkevarefargeprøve) og den festes øverst i hver velger, slik at favorittlogoen eller -fargen din er ett klikk unna.
- **Rydd opp.** Omkategoriser en ressurs til en annen gruppe, skjul en delt merkevareressurs du ikke bruker (med **Vis skjulte** for å hente den tilbake), eller slett dine egne opplastinger for godt.

### Ta med paletten og skrifttypene dine hvor som helst

Katalogens **Fargeprøver**-panel er ikke bare til referanse - klikk på en farge for å kopiere den, eller **last ned hele merkevarepaletten** i formatet det andre verktøyet ditt snakker:

- **Designtokener (JSON)**, **CSS-variabler**, eller **CSS-klasser** - sett merkevaren rett inn i et stilark eller en build;
- **Adobe Swatch Exchange (.ase)** - last den inn i Illustrator eller Photoshop;
- **GIMP-palett (.gpl)** - for GIMP eller Inkscape.

**Skrifttyper**-panelet lister opp merkevarens skrifttyper med en **nedlasting** ved siden av hver, for lokal installasjon eller til et trykkeri. (Fanen Colours i [Brand Studio](/info/brand-studio.html) tilbyr den samme palettnedlastingen.)

Ressurser er den ene halvdelen av den åpne gjør-det-selv-veien; den andre er **å lage dine egne verktøy** - det frie canvaset (Layout Studio, beskrevet ovenfor) lar deg bygge ett visuelt, uten behov for kode.

## Lyd og tilgjengelighet

Lolly har som mål å være behagelig å bruke for alle. Grensesnittet er tastaturnavigerbart, egendefinerte kontroller har riktige etiketter for skjermlesere, og hvert verktøys direkte forhåndsvisning eksponeres som ett enkelt merket bilde som beskriver hva det lager.

Et skånsomt lag med **hjelpelyder** bekrefter det du gjør - å komme inn i galleriet, en gyldig eller ugyldig Content Credentials-sjekk, å lukke et panel, å bytte filter. Det er **påslått som standard**, men alltid valgfritt: slå av **Lyd** hvor enn bryteren vises (hver visnings alternativ-popover, eller **Profil**), og valget huskes.

Ved siden av den bryteren finnes **Neurospicy Mode** - et valgfritt, beroligende bakgrunnsfokusspor som spilles stille mens du arbeider. Å slå den på åpner en liten **spillerdokk** i det nederste hjørnet som følger deg gjennom appen; derfra kan du søke opp og velge et spor, hoppe frem og tilbake, justere volumet, og minimere eller lukke den. Sporlisten spenner over noen få kategorier - prosedurale *Lolly Sings*-melodier, ambiente looper og beats, ditt eget opplastede lydmateriale, og en håndfull direkte internett-**radio**-stasjoner (disse krever en tilkobling; alt annet spilles av offline). Den er **avslått som standard** og, som Lyd, huskes på tvers av økter og enheter. Å slå av Lyd demper også fokussporet.

## Lagring og personvern

Alt lagres i nettleserens lokale database (IndexedDB): profilen din, lagrede økter, opplastede bilder, og en mellomlagret kopi av nedlastet katalog­innhold. **Profil → Lagring** viser bruken og lar deg:

- **Tøm mellomlager** - fjern nedlastet katalog­innhold (synkroniseres på nytt ved neste innlasting).
- **Slett alle mine data** - fjerner profil, økter og bilder. *Kan ikke angres.*

Ingenting overføres noe sted. Ingen telemetri, ingen skybasert rendering.

## Flytte til en annen enhet

Fordi alt finnes på enheten din, lar **Profil → Lagring → Flytt til en annen enhet** deg ta med alt til en ny installasjon - ingen konto, ingen sky:

- **Eksporter mine data** laster ned én `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (navnedelene kommer fra profilen din og utelates hvis de ikke er satt; `<n>` er en teller per dag, slik at eksporter samme dag ikke kolliderer) som inneholder profilen din, hver lagrede økt (med miniatyrbilde), de opplastede bildene dine, og innstillingene dine (tema, sidepanelbredde, lokal aktivitetsstatistikk).
- **Importer data …** på den andre installasjonen leser den filen inn igjen. Den **slår sammen**: alt med samme navn (profilen din, en øktplass, et bilde) erstattes av den importerte kopien; alt annet på enheten beholdes. Lagrede økter kobles automatisk til de importerte bildene dine igjen.

Katalog­mellomlageret er ikke inkludert - det lastes ned på nytt av seg selv på den nye enheten. Pakken er en enkel zip-fil (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, format-ID `lolly-backup`), så den overlever e-post, USB eller AirDrop intakt, og er det samme formatet hvert skall leser. Hver del er sjekksummert, slik at en fil som er skadet under overføring, oppdages ved import i stedet for å bli gjenopprettet halvveis ødelagt. (Fullstendig formatspesifikasjon: [Dataoverføring](/info/data-transfer.html).)

## Importere en design (Figma, Penpot, Illustrator, InDesign)

Du kan ta med en eksisterende design inn i Lolly og fortsette å jobbe med den: åpne **Layout Studio**, klikk **Importer en design** i canvas-verktøylinjen, og velg en Figma **.fig** eller SVG, en Penpot **.penpot**, en Illustrator **.ai** / **.pdf**, eller en InDesign **.idml**. Lag blir redigerbare bokser på det frie canvaset - tekst forblir omskrivbar, bilder havner i **Mine bilder**, og skrift og farger tilpasser seg merkevarens globale verdier - deretter lagres, deles og rendres resultatet som en hvilken som helst annen økt. Tolkningen skjer helt og holdent på enheten din. Fullstendige detaljer: **[Importer en design](/info/design-import.html)**.

## Eksportere

Se **[Eksport og formater](/info/exporting.html)** for hele historien - valg av format, utdatastørrelse og trykkenheter, gjennomsiktighet, video, og kopiering/deling. Kort sagt: velg et format, still inn størrelsen om du trenger det, og **Last ned** (eller **Kopier** til utklippstavlen).

## Batch-modus (Pro)

For avanserte brukere rendrer **Batch** (lenket fra galleriet, sperret bak Pro-funksjonsflagget, som er påslått som standard) mange varianter på én gang - et rutenett der hver rad er et sett med inndata, eksportert sammen. Ideelt for å lokalisere et kort til et dusin språk, eller generere hver størrelsesvariant i én omgang. Fyll ut rader ved å skrive, lime inn direkte fra et regneark, eller importere en CSV (du kan også eksportere en tilbake), og still inn format, størrelse og utfilnavn per rad. Lagre et helt rutenett som en navngitt **batch-økt** som åpnes igjen fra galleriet, og last ned hver rad som én samlet `.zip`.

Batch er for å generere **mange varianter av én mal** på én gang. For å rendre på nytt økter du **allerede har lagret**, bruk **Prosjekter → Render mappe / Render utvalg** (ovenfor) - ingen Pro nødvendig.

## Offline og installasjon

Lolly er en PWA. Etter første innlasting fungerer den **offline** - installer den fra nettleserens adressefelt (eller *Legg til på Hjem-skjerm* på mobil) for en app-lignende, fullskjermsopplevelse. Den oppdaterer seg selv når du er tilkoblet igjen.
