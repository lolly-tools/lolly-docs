# Jak si Lolly stojí v porovnání

Kam tahle platforma zapadá do širšího prostředí kreativních nástrojů a kde záměrně **nehraje**.

> **Stav pilotního provozu:** Lolly je prototyp v uzavřeném pilotním provozu, ne hotový produkt, a jeho zabezpečení teď prochází přísným zpevňováním infrastruktury podle SUSE jako příprava na podnikové měřítko. Tohle pozicování je tam, kam Lolly *směřuje* - stránka [Zavádění a správa](/info/adoption-governance.html#status) popisuje, jak se to v praxi testuje.

## Přehled trhu

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Funkce | Canva (otevřené plátno) | Brand portály (DAM šablonování) | Illustrator (Desktop pro) | Figma / Penpot (Online pro) | **Lolly (omezení na prvním místě)** |
|---|---|---|---|---|---|
| Hromadná tvorba obsahu | částečně | ✗ | ✗ | ✗ | **✓** |
| Funguje plně offline | ✗ | ✗ | ✓ | částečně | **✓** |
| Logika šablon a pevná omezení | ✗ | částečně | ✗ | částečně | **✓** |
| Nevyžaduje grafické dovednosti | částečně | ✓ | ✗ | ✗ | **✓** |
| Automatické Content Credentials | ✗ | ✗ | částečně | ✗ | **✓** |
| Nástroje skládají jiné nástroje | ✗ | ✗ | ✗ | ✗ | **✓** |
| Otevřený engine, bez uzamčení v SaaS | ✗ | ✗ | ✗ | částečně | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Volitelná provenience na forenzní úrovni | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobilní a desktopové aplikace | ✓ | ✗ | ✗ | částečně | **✓** |
| Příkazová řádka a TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Tvar mezery na trhu je jasný: nic v současném prostředí nenabízí generativní výstup, který by byl zároveň založený na omezeních, funkční offline, nenáročný na dovednosti a interně přístupný. Lolly teď má i své vlastní otevřené plátno - **Layout Studio**, volné plátno s přímou manipulací - ale s rozhodujícím rozdílem oproti sloupci Canva: barvy, typografie a assety na něm umístěné se řídí globálními hodnotami značky, takže i volné uspořádání zůstává založené na omezeních. Co Lolly pořád **není**, je neomezená sada nástrojů pro design; designéři budou pro zakázkovou práci nadále používat Illustrator a Figma - a když se z téhle práce má stát řízený, reprodukovatelný asset, funkce Layout Studia [Import návrhu](/info/design-import.html) přenese hotový soubor z Figmy/Illustratoru/Penpotu na plátno jako editovatelné bloky v souladu se značkou.

## Použij to pro

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

- Rychlou tvorbu provozně nasazených kreativních assetů (dlaždice na akce, odznaky, podpisy, upozornění)
- Volné uspořádání na otevřeném plátně (Layout Studio), když prvky - barvy, typografie, ikony, obrázky - musí zůstat v souladu s globálními hodnotami značky
- Přenesení hotového návrhu z Figmy, Illustratoru, InDesignu nebo Penpotu (funkce Import návrhu v Layout Studiu), aby ho šlo upravovat, řídit a deterministicky znovu vykreslit v jakémkoli formátu Lolly
- Postupy typu "one-to-many" - "vyplň tři pole, dostaneš hotový asset" - včetně hromadných běhů z tabulky/CSV v dávkové mřížce `/pro` (vlož nebo importuj řádky, jeden hotový asset na řádek, stáhni jako zip)
- Trvalé, opakovaně generované výstupy v souladu se značkou
- Situace, kdy je centrální kontrola nad vyjádřením značky důležitější než tvůrčí volnost

Deck Studio je dobrým měřítkem toho, kam strop sahá: celá prezentace deklarovaná jako data, rozvržená naživo na plátně a exportovaná jako nativní editovatelný PowerPoint.

## Nepoužívej to pro

- Zakázkový nebo vlajkový hero obsah (billboardy, velké video produkce)
- Jedinečnou kampaňovou práci, která opravdu potřebuje designéra
- Ideaci, která se má úplně vymanit ze systému značky - otevřené plátno Lolly i tak podřizuje barvy, typografii a assety globálním hodnotám značky, a to je záměr

## Schvaluj nástroj, ne soubor

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Každý jiný nástroj na trhu produkuje *soubor*, který se pak musí zkontrolovat - správce značky ve slackovém vlákně, právník kvůli disclaimeru, kolo změn, další revize. Lolly posouvá schvalování **o krok proti proudu**. Pravidla značky - přesné hex kódy, licencované soubory fontů, spadávky, rozestupy - jsou pevně zadrátovaná v HTML a CSS nástroje, takže šablona *fyzicky nemůže* vydat asset mimo značku. Samo rozvržení je nosné.

Takže přestaneš schvalovat výstupy a začneš schvalovat **nástroj**, který je vyrábí. Schval ho jednou a každý asset, který kdy vyrobí, je předem schválený už svou konstrukcí - žádný člověk ve smyčce, žádný revizní cyklus, v jakémkoli objemu.

Tohle je ten posun paradigmatu, který deterministický engine skutečně přináší: není to rychlejší verze starého schvalovacího procesu, ten proces to ruší. Pro kreativní tým je to mantinel, ne náhrada - pořád hodíš míč (data, texty, obrázek) a kód je ta bariéra v bowlingové dráze, která drží každý hod mimo žlábek.

| Schvalování assetů starou cestou | Schvalování nástroje, cestou Lolly |
|---|---|
| Každý hotový soubor se kontroluje, jeden po druhém | Nástroj se zkontroluje jednou |
| Zadání → designér staví → revize značky → právní kontrola → změny → další revize | Jedna změna parametru → hotový asset |
| Designér, správce značky, právník i zadavatel jsou ve smyčce | Producent, sám za sebe |
| Dny na jeden asset | Sekundy na jeden asset |
| 10 000 assetů = 10 000 revizních cyklů | 10 000 assetů = nula (šablona už schválená byla) |

## Co tohle nabízí jedinečně

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Divoký designový potenciál doručený bezpečně v kontextu.** Nástroje mohou vyjádřit odvážné designové nápady uvnitř pevně daných mantinelů.
- **Softwarově definovaná automatizace obsahu, která vrací hotový asset.** Vstup → finální soubor. Žádné "teď to ulož z návrhového nástroje a dodatečně zpracuj."
- **Nástroje skládají nástroje.** Jeden nástroj může vložit vykreslený výstup jiného nástroje a vrátit ho jako součást jednoho hotového assetu, bez jakéhokoli provázání kódu mezi nástroji - primitivum, které nenabízí žádný produkt s otevřeným plátnem ani DAM šablonováním na trhu.
- **Nezávislost na dodavateli.** Plná kontrola nad funkcemi i náklady. Open-source engine. Nástroje a assety jsou obsah sledovaný v gitu, ne uzamčený v databázi SaaS.

První z nich lidé nejčastěji podceňují. Mapa města v plakátové kvalitě, nakreslená jako skutečné vektorové cesty ulic a vodních ploch, z jednoho rozbalovacího seznamu a dvou barevných polí, která nelze nasměrovat mimo značku:

