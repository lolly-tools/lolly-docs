# Profiler - vem du är när du skapar

En **profil** är den arbetsidentitet som Lolly skapar *som*. Det är den lilla uppsättningen detaljer som ett verktyg kan hämta från, så att du slipper skriva in dem varje gång - ditt namn, kontaktuppgifter, ett valfritt porträttfoto, några inställningar - plus allt du samlar på dig medan du arbetar: sparade sessioner, uppladdade bilder och den lokala aktivitetsräkningen.

Allt i en profil finns **på enheten**, i webbläsarens lokala databas (IndexedDB i webb-PWA:n, filsystemet i Tauri-apparna). Det finns inget konto och inget laddas upp. Du hanterar den under **Profil** (uppe till höger i galleriet); verktyg *läser* den bara någonsin, och endast de specifika fälten de är byggda för att förifylla.

> En profil handlar om *dig* (eller den som skapar här). Den skiljer sig från **Plattformen** - varumärkets färger, typsnitt och globala inställningar - och från **Funktioner**, katalogen över vad appen kan göra. Se [Profil vs plattform vs funktioner](#profile-vs-platform-vs-capabilities) i slutet.

## Vad som finns i en profil

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Del | Vad det är |
|---|---|
| **Namn** | Förnamn och efternamn. |
| **Kontakt** | E-post och telefon. |
| **Plats** | Stad och land. |
| **Porträttfoto** | Ett valfritt foto, beskuret till en kvadrat och sparat som en lokal bild. Används av verktyg som e-postsignaturer, citatkort, färgblock och dynamiska layouter. |
| **Använd mina uppgifter** | En enda opt-in-brytare. Den styr om dina personliga uppgifter följer med som **proveniens** - raden med upphovsperson/kredit inbäddad i exporterade filer - och som upphovsperson vid **/pro**-batchkörningar. (Den styr inte förifyllning: se [Hur verktyg använder din profil](#how-tools-use-your-profile).) |
| **Inställningar** | Ditt tema (ljust, mörkt eller SUSE) och vilka delar av appen du har aktiverat via **Funktionsflaggor**. |
| **Ditt arbete** | Sparade sessioner (med miniatyrer) - organiserade i nästlade mappar under **[Projekt](/info/using.html)** - ditt bibliotek **Mina bilder**, och lokal aktivitetsstatistik, allt kopplat till denna profil. |

Inget av detta är obligatoriskt. En tom profil är en fullt godtagbar profil; du fyller bara i det som besparar dig onödigt skrivande.

## En profil är ett sammanhang, inte bara en person

Ordet "profil" antyder en fast person, men i Lolly är det egentligen ett **skapande sammanhang** - *vem du är medan du gör den här saken*. Det sammanhanget kan ha tre olika former, och Lolly hanterar dem alla på samma sätt.

### Som individ

Standardläget. Profilen är du: ditt namn, din e-post, ditt porträttfoto. Ställ in den en gång så fyller din signatur, din bricka och din konferenslockup i sig själva. Det här är allt de flesta någonsin behöver.

### Som ett team

En profil behöver inte vara en enskild människa. Den kan representera ett **team eller en funktion inom en organisation**: teamets gemensamma namn, en gruppinkorgsadress (`events@…`), en avdelning, teamets porträttfoto eller enhetsmärke. En person ställer in den, exporterar den (se nedan), och resten av teamet läser in samma profil - så att allt teamet producerar bär konsekventa uppgifter utan att någon behöver mata in dem på nytt. En delad kiosk eller en utlånad demo-dator kan köra en enda teamprofil som alla bakom den skapar som.

### Som en funktion - en roll du bär ibland

Det här är fallet som den stelbenta modellen "en person, en profil" missar. Du kanske är **eventansvarig tre dagar om året** och något helt annat resten av tiden. De där tre dagarna vill du ha eventuppgifter, eventinkorgen, kanske ett event-undervarumärke som fyller i dina brickor och skyltar; de andra 362 vill du ha tillbaka din vanliga identitet.

I Lolly är den rollen bara **ännu en profil du har till hands** - ett sparat paket (nästa avsnitt) du läser in för eventet och lägger åt sidan efteråt. Rollen är en hatt, inte ett nytt konto. Ta på den när du behöver den, ta av den när du är klar.

## En installation, en aktiv profil - men du kan ha flera

I varje given stund har en installation **en aktiv profil** - de uppgifter ett verktyg ser just nu. Det finns ingen profilväxlare inbyggd i appen; istället är varje profil ett **portabelt paket** (en enda `.zip`, se [nedan](#moving-a-profile-to-a-new-device)). Det är medvetet samma mekanism som att flytta till en ny enhet - en profil är en fil du kan spara, kopiera och läsa in.

Så om du verkligen jonglerar flera sammanhang (du, ditt team, eventansvarig-hatten), håller du flera paket och läser in det du behöver:

- **Renaste bytet:** **Profil → Lagring → Rensa alla mina data**, och läs sedan in paketet för det sammanhang du går in i via **Importera**. Nu skapar du helt och hållet som den profilen.
- **Skiktning:** att importera *utan* att först rensa **slår samman** - den importerade profilen, sessionerna och bilderna hamnar ovanpå det som redan finns, ersätter allt med samma namn och lämnar resten orört. Praktiskt för att dra in ett teams sparade sessioner i din egen uppsättning; inte vad du vill ha om du behöver en tydlig rollgräns.
- **Sida vid sida:** eftersom allt är knutet till enheten bär en separat webbläsarprofil, ett separat användarkonto eller en andra installerad PWA var sin egen oberoende Lolly-profil. Kör din personliga installation och event-kioskinstallationen samtidigt, utan att behöva växla.

> Håll ett paket per sammanhang och döp om filerna efter vad de är (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Filen *är* profilen.

## Flytta en profil till en ny enhet

Eftersom en profil är helt lokal är det enda sättet att få den till en tom installation - en ny bärbar dator, en nyligen återställd webbläsare, en kollegas maskin, en offline-burk - att **ta med filen**. Ingen inloggning återställer den åt dig, och det är hela poängen: inget lämnade någonsin din enhet från början.

Under **Profil → Lagring → Flytta till en annan enhet**:

- **Exportera mina data** laddar ner en `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - döpt efter den profil den tillhör, med ett dagligt sekvensnummer så att upprepade exporter inte krockar (namndelar utelämnas när profilen saknar dem). Den innehåller din profil, varje sparad session (med sin miniatyr), dina uppladdade bilder och dina inställningar (tema, layout, lokal aktivitetsstatistik).
- **Importera data…** på den andra installationen läser in den filen igen och du fortsätter precis där du slutade.

Paketet är en enkel, självständig zip-fil, så den kan färdas på **vilket** sätt som helst - USB, AirDrop, en nätverksdelning, e-post till dig själv - och målet kan vara helt offline. Varje del är checksummerad, så en fil som skadats under transporten fångas upp vid import istället för att återställas halvtrasig. Import **slår samman** (profil/session/bild med samma namn skrivs över; allt annat behålls), så den suddar aldrig ut ett mål som redan är i bruk.

Det som inte följer med: katalogcachen (den laddas ner igen på den nya enheten) och själva verktygen (antas redan finnas där).

För exakt paketlayout, versionspolicy och integritetsregler, se **[Dataöverföring](/info/data-transfer.html)**; för hela genomgången steg för steg, **[Använda Lolly → Flytta till en annan enhet](/info/using.html#moving-to-another-device)**.

## Hur verktyg använder din profil

Ett verktyg *förifyller* bara någonsin de profilfält det uttryckligen är byggt för att binda till:

**Explicit bindning.** En verktygsförfattare markerar ett inmatningsfält som hämtat från profilen (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). När verktyget öppnas förifylls det fältet från din profil - och du kan fortfarande skriva över det för just den sessionen utan att ändra profilen. Förifyllning är en lokal bekvämlighet och sker oavsett om **Använd mina uppgifter** är på eller inte.

**Opt-in:et (proveniens).** När du exporterar en tillgång följer dina uppgifter valfritt med som **proveniens** - en rad med upphovsperson/kredit inbäddad i filens metadata (PNG, PDF, SVG, …) - så att en färdig tillgång kan visa vem som gjorde den. *Det* är vad **Använd mina uppgifter** styr: låt den vara av så bär exporten fortfarande attributionen "Made with Lolly" för verktyg/plattform, men ingen personlig rad med upphovsperson/kontakt bäddas in. (Samma opt-in sätter upphovspersonen på **/pro**-batchkörningar.) (Verktygsförfattare: se [Skapa verktyg → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) och [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs plattform vs funktioner

Tre saker ligger nära varandra i gränssnittet och är lätta att blanda ihop:

- **Profil** - *du* (eller ditt team, eller rollen du är i just nu): namn, kontakt, porträttfoto, ditt sparade arbete. Personlig, enhetslokal, portabel som ett paket.
- **Plattform** - *varumärket*: färger, typsnitt och globala inställningar som varje verktyg renderas mot. Delad och konsekvent, inte personlig.
- **Funktioner** - *vad appen kan göra*: hela funktionsutbudet och verktygen som är tillgängliga för dig.

En profil ändrar vem en tillgång är *från*; plattformen ändrar hur den *ser ut*; funktioner är *vad du kan skapa*.

## Integritet

En profil skickas aldrig, laddas aldrig upp och används aldrig för att identifiera eller spåra dig - det finns inget att samtycka till, bara den här notisen så att du vet vad som sparas. Rensa allt när som helst med **Profil → Rensa alla mina data**. Se [Integritetspolicyn](/info/privacy.html).
