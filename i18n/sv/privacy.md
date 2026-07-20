# Integritetspolicy

*Senast uppdaterad: 19 juli 2026*

> **Kort och gott.** Dokumenten, bilderna, videorna och filerna du skapar i Lolly
> stannar på din enhet. Det finns inga konton för vanlig användning, inga kakor från
> själva appen, och ingen analys eller spårning någonstans i kodbasen - inte "vi
> använder inte datan" utan genuint frånvarande i källkoden. Det finns en kort,
> fullständig lista över undantag där programvaran över huvud taget pratar med ett
> nätverk, och vart och ett av dem beskrivs nedan i detalj: vad som lämnar enheten,
> till vem och när. Det enda undantaget som rör något personligt är en inloggning som
> du själv uttryckligen måste starta. Om det inte står i det här dokumentet så sker
> det inte.

## Vad den här policyn omfattar

Lolly är öppen källkod - en motor, flera app-skal (webb, skrivbord, mobil, CLI) och
ett webbläsartillägg - som vem som helst kan köra. Den här policyn har två delar:

- **Själva programvaran**: vad den gör och inte gör med din data, var den än körs. Det
  är en egenskap hos koden, så det gäller varje Lolly-driftsättning, vår eller någon
  annans.
- **lolly.tools**, referensdriftsättningen som SUSE driver: de specifika val som görs
  vid körning av dess valfria serverdelar (vad som loggas, hur länge och av vem).

Om du använder en självhostad Lolly-instans eller en företagsinstans gäller
fortfarande programvarans beteende nedan, men det är *operatören* av den instansen -
inte SUSE - som ansvarar för allt på serversidan: deras renderingsslutpunkt, deras
MCP-server, deras certifikatutfärdare för Content Credentials, om de driver en sådan.
Be dem om deras egen policy; se [Adoption och styrning](/info/adoption-governance.html)
för vad det innebär att driva Lolly.

## Appen: vad som stannar på din enhet

Lollys webb-, skrivbords- och mobilskal kör hela renderingsmotorn på klientsidan. Att
öppna ett verktyg, fylla i inmatningar, förhandsgranska och exportera sker allt på din
enhet - ingen server är inblandad, och appen fungerar offline när den väl har laddats.

**Appen sätter inga kakor.** För att fungera behåller den en liten mängd data **enbart
på din enhet**, aldrig överförd:

- **Gränssnittsinställningar** - tema, språk, ljudinställningar, storlek på
  sidopanel/zoom, val av sortering och vy, vilka introduktionstips du har sett - i
  `localStorage`, så att de är tillgängliga innan appen har startat klart.
- **En offlinecache av verktygskatalogen och förhandsvisningar av tillgångar**, så att
  galleriet fungerar utan anslutning.
- **Lokala användningsräknare** för statistiken på ditt profilkort (hur många exporter,
  vilka verktyg) - en liten begränsad blob i `localStorage`, aldrig läst av oss, aldrig
  skickad någonstans.
- **Dina egna dokument, sparade sessioner, uppladdade tillgångar och typsnitt** -
  lagrade i IndexedDB på din enhet, aldrig uppladdade, aldrig lästa av någon annan än
  dig.

Inget av detta delas, säljs eller används för att identifiera eller spåra dig. Det
finns inget att samtycka till, eftersom ingen insamling sker - bara den här
informationen, så att du vet vad som sparas och var. Radera allt när som helst med
**Profil → Rensa all min data**, eller genom att rensa webbplatsens lagring i din
webbläsare. (Enligt ePrivacy-direktivet art. 5(3) kräver lagring som är strikt
nödvändig för den tjänst du bett om inget samtycke - bara transparens, vilket är vad
både det här dokumentet och informationen i appen är.)

Din egen säkerhetskopia av denna data - `lolly-backup`-paketet som skapas av
**Exportera och rendera allt** - är en fil som du behåller och kontrollerar. Den rör
aldrig våra servrar om du inte själv väljer att skicka den någonstans. Se
[Dataöverföring](/info/data-transfer.html).

## Hjälpverktyg som körs på enheten

Vissa verktyg - **Strip Hidden Data**, **Compress PDF** och andra som bär märkningen
**"Runs on your device"** - arbetar med en fil du tillhandahåller. Filen läses in i
minnet i din webbläsare, omvandlas lokalt och erbjuds tillbaka som en nedladdning. Den
laddas aldrig upp, eftersom det inte finns någon server i vägen att ladda upp den till.
Dessa hjälpverktyg fungerar offline, och deras utdata bär ingen vattenstämpel eller
några metadata från oss - poängen med de flesta av dem är att ta bort och skydda data,
inte att lägga till risk.

## När appen pratar med ett nätverk, i sin helhet

Tabellen nedan är den fullständiga listan över allt som appen hämtar eller skickar över
ett nätverk. Om det inte står här gör appen det inte.

| Vad | Vad som faktiskt lämnar din enhet | När |
|---|---|---|
| Synk av verktygskatalog | Inget personligt - en förfrågan om Lollys egna publika verktygs- och tillgångsindex | Vid uppstart, sedan cachat offline |
| Ett verktygs deklarerade nätverksfunktion | Vad än det specifika verktyget begär (t.ex. kartrutor) till den eller de specifika värdar det tillåtlistar i sitt manifest | Endast medan du använder det verktyget |
| Google Fonts | Det valda typsnittsfamiljenamnet och din IP-adress, till Googles typsnittsservrar | Endast om du lägger till ett Google-typsnitt i varumärkesredigeraren - en engångshämtning per familj, sedan lever det på din enhet |
| SEAL-signaturkontroll | En enda DNS-uppslagning efter en publik nyckel, till domänen som anges inuti filen som kontrolleras | Endast om Verify hittar en SEAL-post i en fil du kontrollerar - aldrig själva filen |
| Detektormodeller för djupskanning | Inget personligt - en engångsnedladdning av modeller från samma ursprung (inte en tredje part) | Endast om du väljer att aktivera Verifys djupskanning |
| Fjärrinstans | Vad än instansen du anger levererar tillbaka, över samma katalogsynk som beskrivs ovan | Endast om du uttryckligen pekar skalet mot en annan Lolly-driftsättning |

Inget av detta skickar dina dokument, projekt, sessioner eller uppladdade filer
någonstans. De finns för att föra saker *till* din enhet (verktyg, typsnitt, modeller,
en publik nyckel), aldrig för att skicka saker *från* den, med de undantag som
uttryckligen nämns i avsnitten nedan.

## Direktlänkade render-URL:er

Själva appen stannar helt på din enhet. Separat, och endast om du använder det, svarar
lolly.tools (och varje självhostad instans som lämnar det aktiverat) på **direktlänkade
render-URL:er** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - så att en delad
Lolly-länk kan visas som en levande bild i en README, en wiki eller en dashboard. Att
hämta en av dessa URL:er ber servern att rendera **publik verktygs- och katalogdata**
med de inmatningar som skrivits in i URL:en, och det är hela utbytet:

- **Inga konton, inga kakor, inget tillstånd.** Slutpunkten är anonym; inget lagras per
  förfrågan, och inget på din enhet läses. Dina dokument, sessioner och uppladdningar
  lämnar aldrig din webbläsare - de kan inte alls dyka upp i dessa länkar.
- **Inmatningarna är publika till sin konstruktion** - de är vad än länkens
  upphovsperson skrev in i URL:en, läsbara för alla som länken når. Lägg inte
  hemligheter i en delad länk; Lolly tillhandahåller en funktion för länkkryptering för
  känsligt innehåll.
- Svar är **cachade och hastighetsbegränsade** som vilken publik bild som helst, och
  märkta `noindex` så att sökmotorer inte indexerar dina renderingar.

Självhostar du Lolly och vill inte ha en publik renderingsyta? Sätt
`LOLLY_DISABLE_RENDER_GET=1` så returnerar var och en av dessa URL:er 404.

## MCP-servern (valfri, för AI-agenter)

Lolly kan också nås av en AI-agent över Model Context Protocol - en slutpunkt som drivs
av en operatör (lolly.tools kör en; vem som helst kan självhosta sin egen, inklusive
helt luftgapad). Den delar renderingsvägens hållning utan konton, plus två verktyg som
med nödvändighet hanterar filbytes:

- **`lolly_transform`** (kör ett hjälpverktyg på serversidan, på den anropande agentens
  vägnar) och **`lolly_verify`** (kontrollera Content Credentials) tar båda emot en fils
  bytes från anroparen. De behandlas **i processen, i minnet**, och resultatet
  returneras i samma anrop - filen skrivs aldrig till disk och lagras aldrig när
  förfrågan väl har slutförts.
- Alla andra verktyg - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - arbetar enbart utifrån parametrar (text, tal, färger, URL:er,
  katalogtillgångs-id:n), samma inmatningar som en direktlänkad render-URL tar.
- Åtkomst är antingen en delad token som operatören utfärdar till klienter de litar på,
  eller tillståndslös OAuth 2.1: kortlivade signerade tokens som verifieras mot en delad
  hemlighet, inget lagras på serversidan, och själva token skrivs aldrig till en logg
  eller en render-URL.

## Content Credentials-identitet (en inloggning du själv måste starta)

Lolly kan försegla en kryptografisk **Content Credential** i dina exporter så att vem
som helst kan verifiera, offline, att en fil är oförändrad sedan den lämnade Lolly. Så
mycket är **på som standard och helt lokalt** - signeringsnyckeln genereras på din
enhet, är **icke-extraherbar** (inte ens Lollys egen kod kan läsa den), och själva
signeringen sker offline. Det här avsnittet handlar om det enda *valfria* steget utöver
det: att registrera en verifierad identitet, så att dina exporter säger "Verified -
signed by \<din e-post\>" i stället för en anonym nyckel. **Om du hoppar över
registreringen gäller inget i det här avsnittet dig, och ingen personlig data lämnar
någonsin din enhet.**

Om du registrerar dig, här är exakt vad som händer:

1. **Du väljer en inloggningsmetod** - GitHub, Google, SUSE (Okta) eller en länk via
   e-post. För de tre OIDC-leverantörerna omdirigeras du till leverantörens egen
   inloggningssida, som styrs av deras integritetspolicy, inte vår; Lollys
   certifikattjänst får bara tillbaka en verifierad e-postadress och leverantörens namn.
   För e-postlänken skickas adressen du skriver in till **Resend**, ett API för
   transaktionsmejl, enbart för att leverera just den länken.
2. **En kortlivad kaka skyddar omdirigeringen.** Detta är den enda kaka som hela
   Lolly-systemet sätter: `lolly_ca_state`, `HttpOnly`, begränsad till `/api/ca`, som
   upphör inom tio minuter. Den bär ett slumpmässigt värde, inte en
   spårningsidentifierare, och finns bara för att hindra OAuth-omdirigeringen från att
   förfalskas. Den rensas så snart inloggningen är klar.
3. **Din IP-adress används, kortvarigt, för att förhindra missbruk** av
   inloggningsslutpunkterna (så att ett skript inte kan spamma en inkorg eller tömma
   e-postkvoten) - hålls endast i serverns minne, under ett glidande fönster på ungefär
   en minut, aldrig skriven till en logg eller sparad någonstans.
4. **Certifikattjänsten utfärdar ett kortlivat certifikat** (7, 30, 90 eller 365 dagar,
   ditt val, begränsat av operatörens policy) som binder din verifierade e-post till den
   publika halvan av nyckelparet som genererats på din enhet. Den privata halvan lämnar
   aldrig din webbläsare.
5. **Utfärdandet loggas**: din e-postadress, leverantören du använde, en kort hash av
   certifikatets serienummer och dess utgångsdatum, skrivet till tjänstens driftloggar -
   och, endast om operatören har konfigurerat en, till en webhook de kontrollerar. Detta
   är det enda ställe där en bit av din personliga data behålls på en server, och det
   finns för att ett komprometterat eller felaktigt utfärdat certifikat ska kunna spåras
   och för att CA:ns eget utfärdande ska kunna granskas.
6. **Efter det är signeringen offline igen** under certifikatets hela livstid. Att
   exportera en fil kontaktar aldrig certifikattjänsten - bara registreringen gjorde det.

Specifikt för lolly.tools: SUSE driver certifikattjänsten och innehar dessa
utfärdandeloggar. Se [Dina rättigheter](#your-rights) nedan för hur du frågar om eller
tar bort en post.

## Webbläsartillägget

Webbläsartillägget **Lolly URL Screenshot** samlar inte in, lagrar eller överför någon
personlig data. Ingen analys, ingen spårning, ingen fjärrserver.

**Vad det gör.** När du ber Lolly-webbappen att ta en skärmbild av en URL öppnar
tillägget den sidan i en tillfällig bakgrundsflik, fångar den i din webbläsare med hjälp
av DevTools Protocol, lämnar tillbaka bilden till appen och stänger fliken. Allt sker
lokalt, på din egen enhet och ditt eget nätverk.

**Data.**

- **Vi samlar inte in något.** Tillägget har inga servrar och gör inga egna
  nätverksförfrågningar.
- **Fångade bilder** går direkt till Lolly-appen i samma webbläsare - laddas aldrig upp
  av tillägget.
- **URL:erna du fångar** används endast för att ladda just den sidan för just den
  skärmbilden. De loggas eller delas inte.

**Behörigheter.**

- **`debugger`** - för att fånga den renderade sidan via DevTools Protocol (samma
  mekanism som Lolly-skrivbordsappen använder).
- **`tabs`** - för att öppna och stänga den tillfälliga flik som sidan laddas i.
- **Värdåtkomst (`<all_urls>`)** - eftersom sidan du väljer att fånga kan finnas på
  vilken webbplats som helst. Chrome visar detta vid installationen som en bred
  behörighetsvarning; tillägget besöker bara den URL du ger det.

Inget av detta används för att läsa, övervaka eller överföra din surfning utöver den
enda begärda fångsten.

## Infrastrukturloggar

Som vilken webbplats som helst genererar servrarna bakom lolly.tools - och bakom varje
Lolly-driftsättning - vanliga åtkomstloggar för webbservrar närhelst en förfrågan över
huvud taget når dem: IP-adress, begärd sökväg, tidsstämpel, user agent, sparade under en
begränsad tid för säkerhet och för att förhindra missbruk. Det är grundläggande
hostningsbeteende, inte något som Lolly lägger till ovanpå, och det innehåller aldrig
innehållet i dina dokument, eftersom de aldrig når en server över huvud taget. Det enda
avsiktliga undantaget är en fil som du uttryckligen lämnar till ett MCP-anrop till
`lolly_transform` eller `lolly_verify`, som behandlas i minnet och aldrig skrivs till
disk eller en logg, som beskrivs ovan.

## Barns integritet

Lolly samlar inte medvetet in personuppgifter från någon, oavsett ålder, i den vanliga
användningen av appen - det finns inget att samla in. Det enda ställe där personuppgifter
(en e-postadress) någonsin samlas in är registreringen för Content Credentials, som
beskrivs ovan, som varken riktar sig till eller är avsedd för barn.

## Dina rättigheter

Eftersom nästan allt som Lolly berör lagras enbart på din egen enhet är det mesta av det
som dataskyddslagstiftningen kallar "dina rättigheter" - åtkomst, rättelse, radering,
portabilitet - saker du redan kan göra själv, omedelbart, utan att fråga någon: din data
finns i din webbläsares lagring, i en form du kan inspektera, exportera (**Exportera och
rendera allt**, ovan) eller radera (**Profil → Rensa all min data**).

För den enda personuppgift som kan hamna på en server - din e-postadress, om du
registrerade dig för Content Credentials - kontakta oss (nedan) för att fråga vad vi
innehar eller för att få den borttagen från aktiva loggar. Att ta bort en loggpost
återkallar inte ett redan utfärdat certifikat (det är kortlivat till sin design och
upphör helt enkelt); det hindrar den posten från att dyka upp i framtida exporter av
loggen.

Vi säljer inte data. Vi har ingen att sälja.

## Ändringar i den här policyn

Datumet högst upp ändras varje gång det här dokumentet gör det. En ändring som förändrar
vad som lämnar din enhet eller vad som behålls får sin egen rad här, inte en tyst
redigering - om du vill se vad som ändrades, fråga (nedan) eller jämför mot [den publika
källkoden](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontakt

Frågor, eller en begäran enligt "Dina rättigheter" ovan: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). För en självhostad Lolly-instans eller
företagsinstans, kontakta i stället den som driver den - SUSE och Lolly-projektet med
öppen källkod innehar ingen data för driftsättningar det inte kör.
