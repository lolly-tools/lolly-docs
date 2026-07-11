# Jak si Lolly stojí v porovnání

Kam tahle platforma zapadá do širšího prostředí kreativních nástrojů a kde záměrně **nehraje**.

> **Stav pilotního provozu:** Lolly je prototyp v uzavřeném pilotním provozu, ne hotový produkt, a jeho zabezpečení teď prochází přísným zpevňováním infrastruktury podle SUSE jako příprava na podnikové měřítko. Tohle pozicování je tam, kam Lolly *směřuje* — stránka [Zavádění a správa](/info/adoption-governance.html#status) popisuje, jak se to v praxi testuje.

## Přehled trhu

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


Tvar mezery na trhu je jasný: nic v současném prostředí nenabízí generativní výstup, který by byl zároveň založený na omezeních, funkční offline, nenáročný na dovednosti a interně přístupný. Lolly teď má i své vlastní otevřené plátno — **Layout Studio**, volné plátno s přímou manipulací — ale s rozhodujícím rozdílem oproti sloupci Canva: barvy, typografie a assety na něm umístěné se řídí globálními hodnotami značky, takže i volné uspořádání zůstává založené na omezeních. Co Lolly pořád **není**, je neomezená sada nástrojů pro design; designéři budou pro zakázkovou práci nadále používat Illustrator a Figma — a když se z téhle práce má stát řízený, reprodukovatelný asset, funkce Layout Studia [Import návrhu](/info/design-import.html) přenese hotový soubor z Figmy/Illustratoru/Penpotu na plátno jako editovatelné bloky v souladu se značkou.

## Použij to pro

- Rychlou tvorbu provozně nasazených kreativních assetů (dlaždice na akce, odznaky, podpisy, upozornění)
- Volné uspořádání na otevřeném plátně (Layout Studio), když prvky — barvy, typografie, ikony, obrázky — musí zůstat v souladu s globálními hodnotami značky
- Přenesení hotového návrhu z Figmy, Illustratoru, InDesignu nebo Penpotu (funkce Import návrhu v Layout Studiu), aby ho šlo upravovat, řídit a deterministicky znovu vykreslit v jakémkoli formátu Lolly
- Postupy typu "one-to-many" — "vyplň tři pole, dostaneš hotový asset" — včetně hromadných běhů z tabulky/CSV v dávkové mřížce `/pro` (vlož nebo importuj řádky, jeden hotový asset na řádek, stáhni jako zip)
- Trvalé, opakovaně generované výstupy v souladu se značkou
- Situace, kdy je centrální kontrola nad vyjádřením značky důležitější než tvůrčí volnost

## Nepoužívej to pro

- Zakázkový nebo vlajkový hero obsah (billboardy, velké video produkce)
- Jedinečnou kampaňovou práci, která opravdu potřebuje designéra
- Ideaci, která se má úplně vymanit ze systému značky — otevřené plátno Lolly i tak podřizuje barvy, typografii a assety globálním hodnotám značky, a to je záměr

## Co tohle nabízí jedinečně

- **Divoký designový potenciál doručený bezpečně v kontextu.** Nástroje mohou vyjádřit odvážné designové nápady uvnitř pevně daných mantinelů.
- **Softwarově definovaná automatizace obsahu, která vrací hotový asset.** Vstup → finální soubor. Žádné "teď to ulož z návrhového nástroje a dodatečně zpracuj."
- **Nástroje skládají nástroje.** Jeden nástroj může vložit vykreslený výstup jiného nástroje a vrátit ho jako součást jednoho hotového assetu, bez jakéhokoli provázání kódu mezi nástroji — primitivum, které nenabízí žádný produkt s otevřeným plátnem ani DAM šablonováním na trhu.
- **Nezávislost na dodavateli.** Plná kontrola nad funkcemi i náklady. Open-source engine. Nástroje a assety jsou obsah sledovaný v gitu, ne uzamčený v databázi SaaS.
