# Profielen - wie je bent wanneer je creëert

Een **profiel** is de werkidentiteit waar Lolly *als* creëert. Het is de kleine verzameling gegevens waar een tool uit kan putten, zodat je ze niet telkens opnieuw hoeft in te typen - je naam, contactgegevens, een optionele pasfoto, een paar voorkeuren - plus alles wat je verzamelt terwijl je werkt: opgeslagen sessies, geüploade afbeeldingen en de lokale activiteitenteller.

Alles in een profiel leeft **op het apparaat**, in de lokale database van de browser (IndexedDB in de web-PWA, het bestandssysteem in de Tauri-apps). Er is geen account en er wordt niets geüpload. Je beheert het onder **Profiel** (rechtsboven in de galerij); tools *lezen* het alleen ooit, en alleen de specifieke velden waarvoor ze zijn gebouwd om vooraf in te vullen.

> Een profiel gaat over *jou* (of wie hier ook creëert). Het is iets anders dan het **Platform** - de kleuren, lettertypen en globale instellingen van het merk - en dan **Mogelijkheden**, de catalogus van wat de app kan doen. Zie [Profiel versus Platform versus Mogelijkheden](#profile-vs-platform-vs-capabilities) aan het einde.

## Wat er in een profiel zit

| Onderdeel | Wat het is |
|---|---|
| **Naam** | Voor- en achternaam. |
| **Contact** | E-mail en telefoon. |
| **Locatie** | Stad en land. |
| **Pasfoto** | Een optionele foto, bijgesneden tot een vierkant en lokaal bewaard als afbeelding. Wordt gebruikt door tools zoals e-mailhandtekeningen, citaatkaarten, kleurblokken en dynamische lay-outs. |
| **Mijn gegevens gebruiken** | Eén opt-in schakelaar. Deze bepaalt of je persoonlijke gegevens meereizen als **herkomst** - de auteurs-/creditregel die in geëxporteerde bestanden wordt ingebed - en als de auteur bij **/pro**-batchruns. (Dit bepaalt niet of vooraf invullen werkt: zie [Hoe tools je profiel gebruiken](#how-tools-use-your-profile).) |
| **Voorkeuren** | Je thema (licht, donker of SUSE) en welke onderdelen van de app je hebt ingeschakeld via **Feature flags**. |
| **Jouw werk** | Opgeslagen sessies (met miniaturen) - georganiseerd in geneste mappen in **[Projecten](/info/using.html)** - je **Mijn afbeeldingen**-bibliotheek, en de lokale activiteitsstatistieken, allemaal gekoppeld aan dit profiel. |

Niets hiervan is verplicht. Een leeg profiel is een prima profiel; je vult alleen in wat je typewerk bespaart.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

## Een profiel is een context, niet alleen een persoon

Het woord "profiel" doet een vaste persoon vermoeden, maar in Lolly is het eigenlijk een **creatiecontext** - *wie je bent terwijl je dit ding maakt*. Die context kan drie verschillende vormen aannemen, en Lolly behandelt ze allemaal op dezelfde manier.

### Als individu

De standaard. Het profiel ben jij: je naam, je e-mail, je pasfoto. Stel het één keer in en je handtekening, je badge, je conferentie-lockup vullen zichzelf in. Dit is alles wat de meeste mensen ooit nodig zullen hebben.

### Als team

Een profiel hoeft niet één mens te zijn. Het kan staan voor een **team of functie binnen een organisatie**: de gedeelde naam van het team, een groepsinbox-adres (`events@…`), een afdeling, de pasfoto of het unitmerk van het team. Eén persoon stelt het in, exporteert het (zie hieronder), en de rest van het team laadt hetzelfde profiel - zodat alles wat het team produceert consistente gegevens draagt zonder dat iemand ze opnieuw hoeft in te voeren. Een gedeelde kiosk of een uitgeleende demolaptop kan met één teamprofiel draaien waarmee iedereen erachter creëert.

### Als functie - een rol die je soms draagt

Dit is het geval dat het starre model van "één persoon, één profiel" over het hoofd ziet. Misschien ben je **drie dagen per jaar eventmanager** en de rest van de tijd iets heel anders. Die drie dagen wil je eventgegevens, de eventinbox, misschien een event-submerk om je badges en bewegwijzering mee in te vullen; de andere 362 dagen wil je je normale identiteit terug.

In Lolly is die rol gewoon **een ander profiel dat je bij de hand houdt** - een opgeslagen bundel (volgende sectie) die je laadt voor het event en daarna weer opzij zet. De rol is een hoedje, geen nieuw account. Zet het op wanneer je het nodig hebt, doe het af wanneer je klaar bent.

## Eén installatie, één actief profiel - meerdere die je kunt bewaren

Op elk moment heeft een installatie **één actief profiel** - de gegevens die een tool op dit moment ziet. Er is geen profielwisselaar in de app; in plaats daarvan is elk profiel een **draagbare bundel** (een enkele `.zip`, zie [hieronder](#moving-a-profile-to-a-new-device)). Dat is bewust hetzelfde mechanisme als verhuizen naar een nieuw apparaat - een profiel is een bestand dat je kunt opslaan, kopiëren en laden.

Dus als je echt met meerdere contexten jongleert (jij, je team, het eventmanager-hoedje), bewaar je meerdere bundels en laad je degene die je nodig hebt:

- **Schoonste overstap:** **Profiel → Opslag → Al mijn gegevens wissen**, en **importeer** vervolgens de bundel voor de context waarin je stapt. Je creëert nu puur als dat profiel.
- **Gelaagd:** importeren *zonder* eerst te wissen **voegt samen** - het geïmporteerde profiel, de sessies en de afbeeldingen komen boven op wat er al is, waarbij alles met dezelfde naam wordt vervangen en de rest blijft staan. Handig om de opgeslagen sessies van één team in je eigen opstelling te trekken; niet wat je wilt als je een strikte rolgrens nodig hebt.
- **Naast elkaar:** omdat alles apparaatgebonden is, heeft een apart browserprofiel, een apart gebruikersaccount of een tweede geïnstalleerde PWA elk hun eigen onafhankelijke Lolly-profiel. Draai je persoonlijke installatie en de event-kiosk-installatie tegelijk, zonder te wisselen.

> Bewaar per context een bundel en hernoem de bestanden naar wat ze zijn (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Het bestand *is* het profiel.

## Een profiel verplaatsen naar een nieuw apparaat

Omdat een profiel volledig lokaal is, is de enige manier om het op een lege installatie te krijgen - een nieuwe laptop, een net gereset browser, de machine van een collega, een offline machine - door **het bestand mee te nemen**. Geen enkele login herstelt het voor je, en dat is precies het punt: er heeft nooit iets je apparaat verlaten.

Onder **Profiel → Opslag → Verplaatsen naar een ander apparaat**:

- **Mijn gegevens exporteren** downloadt één `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - genoemd naar het profiel waartoe het behoort, met een dagelijks volgnummer zodat herhaalde exports niet botsen (naamdelen vervallen wanneer het profiel ze niet heeft). Het bevat je profiel, elke opgeslagen sessie (met bijbehorende miniatuur), je geüploade afbeeldingen en je voorkeuren (thema, lay-out, lokale activiteitsstatistieken).
- **Gegevens importeren…** op de andere installatie leest dat bestand weer in, en je gaat precies verder waar je gebleven was.

De bundel is een gewone, zelfstandige zip, dus hij reist met **elk** middel - USB, AirDrop, een netwerkshare, e-mail naar jezelf - en het doelapparaat kan volledig offline zijn. Elk onderdeel heeft een checksum, zodat een bestand dat onderweg beschadigd raakt bij het importeren wordt opgemerkt in plaats van half kapot te worden hersteld. Importeren **voegt samen** (profiel/sessie/afbeelding met dezelfde naam wordt overschreven; al de rest blijft behouden), zodat een doel dat al in gebruik was nooit wordt gewist.

Wat niet meereist: de catalogus-cache (die download zichzelf opnieuw op het nieuwe apparaat) en de tools zelf (waarvan wordt aangenomen dat ze al aanwezig zijn).

Voor de exacte bundelindeling, het versiebeleid en de integriteitsregels, zie **[Gegevensoverdracht](/info/data-transfer.html)**; voor de end-to-end doorloop, **[Lolly gebruiken → Verplaatsen naar een ander apparaat](/info/using.html#moving-to-another-device)**.

## Hoe tools je profiel gebruiken

Een tool *vult* alleen ooit de profielvelden *vooraf in* die het expliciet is gebouwd om te koppelen:

**Expliciete koppeling.** Een tool-auteur markeert een invoerveld als afkomstig uit het profiel (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Wanneer de tool opent, wordt dat veld vooraf ingevuld vanuit je profiel - en je kunt het voor die ene sessie nog steeds overschrijven zonder het profiel te wijzigen. Vooraf invullen is een lokaal gemak en gebeurt ongeacht of **Mijn gegevens gebruiken** aan staat.

**De opt-in (herkomst).** Wanneer je een asset exporteert, reizen je gegevens optioneel mee als **herkomst** - een auteurs-/creditregel die wordt ingebed in de metadata van het bestand (PNG, PDF, SVG, …) - zodat een afgerond bestand kan aangeven wie het heeft gemaakt. *Dit* is wat **Mijn gegevens gebruiken** regelt: laat het uit staan en de export draagt nog steeds de "Made with Lolly" tool-/platformattributie, maar er wordt geen persoonlijke auteurs-/contactregel ingebed. (Dezelfde opt-in stelt de auteur in bij **/pro**-batchruns.) (Tool-auteurs: zie [Tools bouwen → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) en [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profiel versus Platform versus Mogelijkheden

Drie dingen staan dicht bij elkaar in de UI en zijn makkelijk te verwarren:

- **Profiel** - *jij* (of je team, of de rol waarin je zit): naam, contact, pasfoto, je opgeslagen werk. Persoonlijk, apparaatgebonden, draagbaar als bundel.
- **Platform** - het *merk*: kleuren, lettertypen en globale instellingen waartegen elke tool rendert. Gedeeld en consistent, niet persoonlijk.
- **Mogelijkheden** - *wat de app kan doen*: de volledige functieset en de tools die voor je beschikbaar zijn.

Een profiel verandert van wie een asset *afkomstig* is; het platform verandert hoe het *eruitziet*; mogelijkheden bepalen *wat je kunt maken*.

### "Profiel" betekent elders twee andere dingen - niet dit

Het woord wordt in het hele project op meerdere manieren gebruikt. Geen van beide is het persoonlijke profiel waarover deze pagina gaat:

- **Contentprofiel** - een build-time configuratie in `profiles.json` die een set toolpakketten koppelt aan een merkcatalogus (bijv. `suse`, `lolly-start`). Dit kiest een operator bij het deployen, en het is ook waarvan de `profile` **URL/CLI-parameter** bij export een *kleur*variant selecteert (de ICC/CMYK-persconditie - zie [URL Mode](/info/url-mode.html)). Beide gaan over de *build/output*, niet over *jou*. Zie [Configuratie](/info/configuration.html).
- **Identiteitsprofiel** - de optionele **geverifieerde Content Credentials-identiteit** die je kunt registreren (een kortlevend certificaat dat je e-mailadres koppelt aan je ondertekende exports). Dat is een ondertekeningsidentiteit, los van de naam-/contactvelden van het persoonlijke profiel, al bepaalt **Mijn gegevens gebruiken** of een van beide wordt ingebed. Zie [Content Credentials Identity](/info/content-credentials-identity.html).

## Privacy

Een profiel wordt nooit verzonden, geüpload of gebruikt om je te identificeren of te volgen - er is niets om toestemming voor te geven, alleen deze kennisgeving zodat je weet wat wordt bewaard. Wis alles op elk moment met **Profiel → Al mijn gegevens wissen**. Zie het [Privacybeleid](/info/privacy.html).
