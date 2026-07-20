# Časté dotazy

Často kladené otázky zobrazené v harmonice na vstupní stránce `/info`.

**Jak to udržovat:** každý nadpis `##` níže je otázka; vše pod ním
(až po další `##`) je odpověď. Odpovědi používají stejný odlehčený markdown jako
zbytek webu - jednotlivé odstavce odděluj prázdným řádkem. Otázky zde přidávej,
odebírej nebo přeskupuj a poté znovu spusť `npm run build:info` (nebo `npm run dev:web`).
Vše nad prvním `##` (tento nadpis a tyto poznámky) build ignoruje.

## Co se stane, když se na stránce /profile přihlásím k opt-in?

Když Lolly poprvé použiješ, vše, co kamkoli napíšeš, zůstává plně soukromé, dokud sám/sama nebudeš chtít tuto informaci zveřejnit přes médium nebo sdílený odkaz (pokud jsi online).

Po zvolení opt-in vložíme některé tvé profilové informace jako záznam o původu do assetů a balíčků, abychom tě označili jako zdroj.

Lolly vytváří velké množství obsahu. Abychom omezili riziko, uplatňujeme přísný přístup minimalizace dat.

### Co jsou feature flags?

Feature flags zapínají nebo vypínají části Lolly. Obvykle je ovládá administrátor - u Lolly máš kontrolu ty.

## Jak získám mobilní nebo desktopovou aplikaci?

Kdokoli může distribuovat vlastní aplikace, nástroje a konfigurace těchto aplikací se budou výrazně lišit podle toho, pro jaké publikum jsou určené. Neexistuje tedy jedna jediná aplikace, pokud sis ji nevytvořil/a sám/sama, nebo ti ji nedal někdo relevantní.

## Proč název „Lolly Tools“?

**Lolly** Protože svoboda je sladká.
**Tools** jsou neaktivní, když se nepoužívají. Nešpehují tě, nespouštějí tajné programy,
dáš jim práci ty - tvé příkazy, akce a podmínky.

**Lolly** je australský, novozélandský a britský výraz pro „sladkosti“ neboli „bonbóny“. A stejně jako bonbóny, i nástroje jsou pro ty, kdo je potřebují, náramně lákavé.

Také se smějeme času a účtům, které tímto přístupem šetříme.

## Jaké překážky mě čekají při zavádění Lolly?

Lolly zapadne kamkoli, kde už dnes generuješ soubory - CLI používá stejný engine
jako aplikace, takže pipeline spuštěná ve 2 ráno se nemůže rozejít s tím, co si člověk
prohlíží v prohlížeči. Tření při zavádění bývá málokdy technické; je organizační. Počítej s tímto:

**Kurátorovaný katalog značky se musí vytvořit.** Lolly je platforma, ne hotový
balíček tvých šablon. Pro *řízené zavedení* někdo definuje sdílený katalog assetů
(loga, palety, fonty jako trvalá ID) a napíše manifest a šablonu pro každý typ
výstupu. Jednotlivci na to ale nemusí čekat - v otevřené aplikaci si každý může
vložit vlastní soubory do katalogu a stavět nástroje v Layout Studio už od
prvního dne.

**Governance přes git je volitelná - a lidem mimo vývojáře cizí.** Pokud provozuješ
*sdílený, řízený* katalog, věta „PR review *je* moderace“ zní elegantně pro
vývojáře, ale většině brand a marketingových týmů je cizí. Pokud lidé, kteří rozhodují
o značce, nežijí v gitu, budeš potřebovat workflow, který je propojí - jinak se IT
tiše stane strategickým partnerem pro design a širším institucionálním strážcem
(to je stav, který mnozí v dlouhodobě běžících produkčních prostředích preferují).
Týmy, které o to nestojí, to prostě přeskočí.

**Je záměrně úzce zaměřené - tak to i prezentuj.** Lolly není pro zakázkový nebo
hero obsah. *Je* to tvůj osobní DAM - nasycený a poháněný tvým design systémem,
nástroji a katalogem - a *má* otevřené plátno (Layout Studio), ale i tam se barvy,
typografie a assety řídí aktivními globálními hodnotami designu, takže volné
uspořádání zůstává uvnitř systému. Ve srovnání s Figmou nebo Canvou bude působit
omezeně. Posuzováno jako to, čím skutečně je - operacionalizovaná, opakovaná,
masivní generace assetů - mu nikdo nekonkuruje. Špatné rámování je nejčastější
zádrhel při zavádění.

**Change management na straně tvorby.** Stávající procesy dnes fungují, i když
výstup neodpovídá značce. Přesměrovat je na engine znamená nové testování a nové
učení, a věta „my už soubory umíme dělat“ se stane výmluvou, proč nepřecházet. Začni
tím, že převedeš jeden viditelný produkční výstup a ukážeš srovnání před/po vedle sebe.

Lolly pozvedne všechno.


## Čím se utility liší od nástrojů?

**Základní odpověď →** Utility nemusí vždy renderovat, a proto mohou mít jiné UX.

**Skutečná odpověď →** Důvod, proč lze utility hostovat uvnitř Lolly Tools, je přidat další „vrstvu pohodlí“ jako obranu, která odrazuje od exfiltrace dat.

Proč? Protože je známo, že lidé každý den berou **důvěrný obsah, který už mají** a předávají ho
náhodnému webu, aby provedl jednu malou mechanickou operaci:

- „**Zkomprimuj tenhle PDF**“ → nahraješ smlouvu / výplatní pásku / prezentaci pro představenstvo neznámým subjektům.
- „**převeď HEIC na JPG**“ → nahraješ osobní fotky (s GPS EXIF daty) na server financovaný reklamou
- „**ořízni / změň velikost tohohle obrázku**“ → nahraješ screenshot produktu nebo dosud nezveřejněný asset
- „**naformátuj tenhle JSON**“ / „dekóduj tenhle JWT“ → vložíš odpovědi API, tokeny a tajné klíče do formátovacího nástroje
- „**sluč tyhle PDF**“ → nahraješ **dva dokumenty, které by nikdy neměly sdílet server**

Tyto weby a jejich obrovský dlouhý ocas klonů **nejsou ve výchozím stavu důvěryhodné** -
mají neznámou dobu uchovávání dat, neznámé jurisdikce, neznámé subzpracovatele a
reklamní/affiliate obchodní model, který má každý důvod si ponechat, co mu dáš. Samotná
operace je triviální; **obsah je ta cena.**

Válku o governance vyhráváme skvělým pohodlím a službou.

## Umí Lolly upravit a vyrenderovat moje soubory z Figmy, Penpotu, Illustratoru nebo InDesignu?

Ano. Otevři **Layout Studio** a klikni na **Importuj návrh**: přijímá nativní Figma soubor **.fig** (Save local copy), export z Penpotu **.penpot**, Illustrator **.ai** nebo **.pdf**, InDesign **.idml** (File → Export → InDesign Markup), nebo **jakékoli SVG** (široká brána - skoro každá návrhářská aplikace ho umí exportovat). Všechno se zpracovává výhradně na tvém zařízení, není potřeba účet ani plugin.

Vrstvy se objeví jako editovatelné boxy na otevřeném plátně: text zůstává přepsatelný, tvary zůstávají tvary, obrázky se přidají do tvé knihovny na zařízení a typografie a barvy se řídí globálními hodnotami značky. Ulož to a layout se stane znovupoužitelnou šablonou adresovatelnou přes URL, kterou může kdokoli s Lolly znovu naplnit - a můžeš do ní zamíchat živé nástroje (QR kód, graf), které se při načtení znovu vyrenderují. Odtud se renderuje stejně jako cokoli jiného v Lolly - SVG, PDF, PNG a další, reprodukovatelné z jeho URL. Viz [Importuj návrh](/info/design-import.html).

## Umí Lolly rebrandovat existující prezentaci v PowerPointu?

Ano - dvěma způsoby, oba přímo na tvém zařízení. Utilita **Rebrand a Deck** vezme soubor `.pptx` a přepne motiv, natvrdo zadané barvy a fonty na tvou značku, zatímco grafy, SmartArt a animace projdou beze změny - zpátky dostaneš `.pptx`. Nebo otevři prezentaci v **Deck Builderu** (Load → přetáhni soubor) a uprav ji snímek po snímku jako volně umístěné objekty, už napasované na značku, a exportuj PPTX, PDF nebo video. Když místo toho přetáhneš `.pptx` na nahrávací plochu, uloží se vybrané snímky jako SVG assety do tvé knihovny. Viz [Importuj návrh → Prezentace a dokumenty](/info/design-import.html#decks-and-documents).

## Co se stane 29. srpna?

SUSE brandované nástroje z projektu odejdou a nahradí je nové obecné ukázkové nástroje definované uživatelem.

SUSE bude provozovat vlastní Lolly, aby ochránila své ochranné známky.

## Kolik si SUSE nechává v soukromí? (jinak řečeno, kdy přijde rug-pull)

Ochranné známky SUSE a brandované nástroje slouží pouze k demonstraci, a to až do 29. srpna. Nebrandovanou instanci Lolly najdeš na [lolly.ART](https://lolly.art).

SUSE je podnikový poskytovatel open source infrastruktury s více než třemi desetiletími vedoucí pozice na trhu platforem. Mezi její produkty patří podnikový Linux, Cloud Native, Edge a AI infrastrukturní řešení.

Z pohledu SUSE jde o to, aby slova o suverenitě a bezpečnosti odpovídala činům. K dnešnímu dni je pravděpodobnost, že SUSE udělá z Lolly komerční produkt, téměř nulová.

Pro úplnost: SUSE *skutečně* buduje interní nástroje pro integraci Lolly do svých IT systémů - to se ale týká interního nastavení SUSE, ne veřejného versus soukromého vývoje.

Co se týče veřejné strany, Lolly má ambici vznikat prostřednictvím [Open Build Service](https://openbuildservice.org/), se zabezpečenými artefakty dodavatelského řetězce dodávanými přes [SUSE Application Collection](https://apps.rancher.io/applications).

Vybudujeme toho co nejvíc otevřeně - jen už dlouho neuvidíš SUSE brandované nástroje, ani interní pracovní sílu a komerční procesy SUSE, které s Lolly nesouvisí.

## Jakou příchuť má to logo Lolly?

Někdo říká limetka, jiný máta a někdy jablko - Lolly přináší sladkost, příchuť si uděláš ty!
