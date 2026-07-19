# Profiler - hvem du er når du skaper

En **profil** er arbeidsidentiteten Lolly skaper *som*. Det er den lille samlingen med detaljer et verktøy kan hente fra, slik at du slipper å skrive dem inn på nytt hver gang - navnet ditt, kontaktdetaljer, et valgfritt portrettbilde, noen få innstillinger - pluss alt du samler opp mens du jobber: lagrede økter, opplastede bilder, og den lokale aktivitetstellingen.

Alt i en profil finnes **på enheten**, i nettleserens lokale database (IndexedDB i web-PWA-en, filsystemet i Tauri-appene). Det finnes ingen konto, og ingenting lastes opp. Du administrerer den under **Profil** (øverst til høyre i galleriet); verktøy *leser* den bare noensinne, og kun de spesifikke feltene de er bygget for å forhåndsutfylle.

> En profil handler om *deg* (eller den som skaper her). Den er forskjellig fra **Plattformen** - merkevarens farger, skrifttyper og globale innstillinger - og fra **Funksjoner**, katalogen over hva appen kan gjøre. Se [Profil vs. plattform vs. funksjoner](#profile-vs-platform-vs-capabilities) til slutt.

## Hva som er i en profil

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Del | Hva det er |
|---|---|
| **Navn** | Fornavn og etternavn. |
| **Kontakt** | E-post og telefon. |
| **Sted** | By og land. |
| **Portrettbilde** | Et valgfritt bilde, beskåret til en firkant og lagret som et lokalt bilde. Brukes av verktøy som e-postsignaturer, sitatkort, fargeblokker og dynamiske layouter. |
| **Bruk mine detaljer** | En enkelt opt-in-bryter. Den styrer om de personlige detaljene dine følger med som **opprinnelse** - linjen med forfatter/kreditering innebygd i eksporterte filer - og som forfatter på **/pro**-batchkjøringer. (Den styrer ikke forhåndsutfylling: se [Hvordan verktøy bruker profilen din](#how-tools-use-your-profile).) |
| **Innstillinger** | Temaet ditt (lyst, mørkt eller SUSE) og hvilke deler av appen du har aktivert via **Funksjonsflagg**. |
| **Arbeidet ditt** | Lagrede økter (med miniatyrbilder) - organisert i nøstede mapper i **[Prosjekter](/info/using.html)** - biblioteket ditt **Mine bilder**, og den lokale aktivitetsstatistikken, alt knyttet til denne profilen. |

Ingenting av dette er obligatorisk. En blank profil er en helt utmerket profil; du fyller bare inn det som sparer deg for skriving.

## En profil er en kontekst, ikke bare en person

Ordet «profil» antyder én fast person, men i Lolly er det egentlig en **skapende kontekst** - *hvem du er mens du lager denne tingen*. Den konteksten kan ha tre ulike former, og Lolly håndterer alle på samme måte.

### Som enkeltperson

Standardvalget. Profilen er deg: navnet ditt, e-posten din, portrettbildet ditt. Sett den opp én gang, så fyller signaturen din, merket ditt og konferanselockupen din seg selv inn. Dette er alt de fleste noensinne vil trenge.

### Som et team

En profil trenger ikke være ett enkelt menneske. Den kan representere et **team eller en funksjon i en organisasjon**: teamets felles navn, en gruppe-innboksadresse (`events@…`), en avdeling, teamets portrettbilde eller enhetsmerke. Én person setter den opp, eksporterer den (se nedenfor), og resten av teamet laster inn den samme profilen - slik at alt teamet produserer bærer konsekvente detaljer uten at noen må skrive dem inn på nytt. En delt kiosk eller en utlånt demo-bærbar kan kjøre én enkelt teamprofil som alle bak den skaper som.

### Som en funksjon - en rolle du bærer iblant

Dette er tilfellet den rigide modellen «én person, én profil» går glipp av. Du kan være en **eventansvarlig tre dager i året** og noe helt annet resten av tiden. De tre dagene vil du ha eventdetaljer, event-innboksen, kanskje en event-undermerkevare som fyller ut merkene og skiltingen din; de andre 362 vil du ha din vanlige identitet tilbake.

I Lolly er den rollen bare **en annen profil du har for hånden** - en lagret pakke (neste seksjon) du laster inn for eventet og legger til side etterpå. Rollen er en hatt, ikke en ny konto. Ta den på når du trenger den, ta den av når du er ferdig.

## Én installasjon, én aktiv profil - men du kan ha flere

I ethvert øyeblikk har en installasjon **én aktiv profil** - detaljene et verktøy ser akkurat nå. Det finnes ingen profilbytter inne i appen; i stedet er hver profil en **portabel pakke** (en enkelt `.zip`, se [nedenfor](#moving-a-profile-to-a-new-device)). Det er bevisst den samme mekanismen som å flytte til en ny enhet - en profil er en fil du kan lagre, kopiere og laste inn.

Så hvis du virkelig sjonglerer flere kontekster (deg, teamet ditt, eventansvarlig-hatten), holder du på flere pakker og laster inn den du trenger:

- **Reneste bytte:** **Profil → Lagring → Slett alle mine data**, og deretter **Importer** pakken for konteksten du går inn i. Nå skaper du utelukkende som den profilen.
- **Lagvis:** å importere *uten* å tømme først **slår sammen** - den importerte profilen, øktene og bildene havner oppå det som allerede er der, og erstatter alt med samme navn mens resten beholdes. Praktisk for å dra inn et teams lagrede økter i ditt eget oppsett; ikke det du vil ha hvis du trenger en ren rollegrense.
- **Side om side:** fordi alt er avgrenset til enheten, bærer en separat nettleserprofil, en separat brukerkonto, eller en andre installert PWA hver sin egen uavhengige Lolly-profil. Kjør din personlige installasjon og eventkiosk-installasjonen samtidig, uten å måtte bytte.

> Hold én pakke per kontekst og gi filene nytt navn etter hva de er (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Filen *er* profilen.

## Flytte en profil til en ny enhet

Fordi en profil er helt lokal, er den eneste måten å få den inn på en blank installasjon - en ny bærbar datamaskin, en nylig tilbakestilt nettleser, en kollegas maskin, en offline-boks - å **ta med filen**. Ingen innlogging gjenoppretter den for deg, og det er hele poenget: ingenting forlot noensinne enheten din i utgangspunktet.

Under **Profil → Lagring → Flytt til en annen enhet**:

- **Eksporter mine data** laster ned én `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - oppkalt etter profilen den tilhører, med et sekvensnummer per dag slik at gjentatte eksporter ikke kolliderer (navnedeler utelates når profilen mangler dem). Den inneholder profilen din, hver lagrede økt (med miniatyrbilde), de opplastede bildene dine, og innstillingene dine (tema, layout, lokal aktivitetsstatistikk).
- **Importer data …** på den andre installasjonen leser den filen inn igjen, og du fortsetter nøyaktig der du slapp.

Pakken er en enkel, selvstendig zip-fil, så den kan reise på **en hvilken som helst** måte - USB, AirDrop, en nettverksdeling, e-post til deg selv - og målet kan være helt offline. Hver del er sjekksummert, slik at en fil som er skadet under overføring, oppdages ved import i stedet for å bli gjenopprettet halvveis ødelagt. Import **slår sammen** (profil/økt/bilde med samme navn overskrives; alt annet beholdes), så den sletter aldri et mål som allerede er i bruk.

Det som ikke følger med: katalog­mellomlageret (det laster seg ned på nytt på den nye enheten) og selve verktøyene (antas allerede å være til stede).

For den eksakte pakkestrukturen, versjonspolicyen og integritetsreglene, se **[Dataoverføring](/info/data-transfer.html)**; for hele gjennomgangen fra start til slutt, **[Bruke Lolly → Flytte til en annen enhet](/info/using.html#moving-to-another-device)**.

## Hvordan verktøy bruker profilen din

Et verktøy *forhåndsutfyller* bare noensinne de profilfeltene det eksplisitt er bygget for å binde til:

**Eksplisitt binding.** En verktøyforfatter markerer en inndata som hentet fra profilen (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Når verktøyet åpnes, forhåndsutfylles den inndataen fra profilen din - og du kan fortsatt overstyre den for den ene økten uten å endre profilen. Forhåndsutfylling er en lokal bekvemmelighet og skjer uansett om **Bruk mine detaljer** er på eller ikke.

**Opt-inn (opprinnelse).** Når du eksporterer en ressurs, følger detaljene dine valgfritt med som **opprinnelse** - en linje med forfatter/kreditering innebygd i filens metadata (PNG, PDF, SVG, …) - slik at en ferdig ressurs kan si hvem som laget den. *Dette* er det **Bruk mine detaljer** styrer: la den stå av, og eksporten bærer fortsatt attribusjonen «Made with Lolly» for verktøy/plattform, men ingen personlig forfatter-/kontaktlinje bygges inn. (Den samme opt-innen setter forfatteren på **/pro**-batchkjøringer.) (Verktøyforfattere: se [Lage verktøy → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) og [Host-API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs. plattform vs. funksjoner

Tre ting ligger nær hverandre i grensesnittet og er lette å forveksle:

- **Profil** - *deg* (eller teamet ditt, eller rollen du er i): navn, kontakt, portrettbilde, arbeidet ditt som er lagret. Personlig, enhetslokal, portabel som en pakke.
- **Plattform** - *merkevaren*: farger, skrifttyper og globale innstillinger hvert verktøy rendres mot. Delt og konsekvent, ikke personlig.
- **Funksjoner** - *hva appen kan gjøre*: hele funksjonssettet og verktøyene som er tilgjengelige for deg.

En profil endrer hvem en ressurs er *fra*; plattformen endrer hvordan den *ser ut*; funksjoner er *hva du kan lage*.

## Personvern

En profil overføres aldri, lastes aldri opp, og brukes aldri til å identifisere eller spore deg - det er ingenting å samtykke til, bare denne merknaden slik at du vet hva som lagres. Slett alt når som helst med **Profil → Slett alle mine data**. Se [Personvernerklæringen](/info/privacy.html).
