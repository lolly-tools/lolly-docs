# Používání Lolly

Praktický průvodce tím, jak aplikaci opravdu *používat* — otevření nástroje, práce s plátnem, export, ukládání a sdílení. Všechno tady běží **na tvém zařízení**: žádný účet, žádný upload, po prvním načtení není potřeba ani internet.

> Jsi tu poprvé? [Začínáme](/info/getting-started.html) popisuje instalaci/nasazení aplikace; tahle stránka je o tom, jak ji ovládat, jakmile je otevřená.

## Otevření nástroje

Domovská obrazovka je **galerie** — všechny nástroje, seskupené podle kategorie. Klikni na kartu, čímž nástroj otevřeš; pokud jsi na něm už dřív pracoval/a, tlačítko **Pokračovat** obnoví tvou poslední relaci. Vyhledávací pole použij k filtrování podle názvu.

Každý nástroj je rozdělené zobrazení: na jedné straně **ovládací prvky**, na druhé straně živý **náhled** (plátno). Změň libovolný ovládací prvek a náhled se okamžitě aktualizuje.

> Několik nástrojů (jako **Layout Studio**) se místo toho otevře jako **volné plátno** — plocha bez rozhraní pro přímou manipulaci, kde přetahuješ, měníš velikost, otáčíš a přichytáváš boxy s textem, tvary a obrázky, a dvojklikem upravuješ text přímo na místě. Exportuje se stejnou vykreslovací cestou jako u každého jiného nástroje, takže plátno *je* soubor. Viz [Volné plátno](#the-free-canvas-layout-studio) níže.

## Plátno (náhled)

Náhled vždy zobrazuje přesně to, co se exportuje.

**Desktop**

- **Přiblížení:** Cmd/Ctrl + kolečko myši, nebo sevření prstů (pinch) na trackpadu — přiblížení se vystředí na tvůj kurzor.
- **Posun:** podrž **Space** a táhni, nebo táhni **prostředním tlačítkem myši**. (Obyčejné kliknutí zůstává volné pro klikání na části návrhu.)
- **Klávesnice:** `0` = přizpůsobit oknu · `1` = 100% · `+` / `−` = přiblížení.
- **HUD přiblížení:** malý ovládací prvek `−  NN%  +  Fit` v rohu. Klikni na procenta pro přepnutí mezi Přizpůsobit ↔ 100 %.

**Dotyk**

- **Sevření prstů** pro přiblížení, **tažení** pro posun, **dvojité ťuknutí** pro reset na přizpůsobené zobrazení.

**Kliknutím přejdeš na ovládací prvek:** klikni na libovolný prvek v návrhu a odpovídající vstup v postranním panelu získá fokus a posune se do viditelné oblasti — u opakující se skupiny řádků se rozbalí přesně ten řádek, na který jsi klikl/a, takže úprava toho, co vidíš, je vzdálená jedno ťuknutí.

Změna rozměrů vždy vrátí zobrazení zpět na čisté přizpůsobení.

### Volné plátno (Layout Studio)

Nástroje s volným plátnem přidávají pracovní plochu *kolem* kresebné plochy, podobně jako grafikova podložka (pasteboard):

- **Odkládání mimo plátno.** Přetáhni box za okraj kresebné plochy a zůstane plně **viditelný a vybratelný** — zaparkuj prvky stranou, zatímco skládáš kompozici, a pak je přetáhni zpátky dovnitř. Všechno mimo kresebnou plochu je **jemně ztlumené**, takže exportovaná oblast je vždy na první pohled zřejmá, a kresebná plocha si drží svůj stín, který přesně vyznačuje, kde soubor začíná.
- **Exportuje se jen kresebná plocha.** Exportovaný soubor je ohraničený kresebnou plochou — cokoli zůstane venku (nebo část boxu přesahující přes okraj) se z výstupu jednoduše ořízne, stejně u rastrových i vektorových formátů.
- **Oddal se pod úroveň Přizpůsobit** (až na 20 %), abys viděl/a celou podložku, když máš prvky odložené daleko mimo kresebnou plochu.
- **Kresebná plocha se dá měnit.** Změna exportních rozměrů změní velikost rámu na místě; boxy si zachovají své pozice, takže můžeš přerámovat rozložení kolem existujícího obsahu.

## Na telefonu

Na úzkých obrazovkách se rozložení překreslí do jednoho sloupce:

- **Ovládací prvky se stanou panelem** nahoře s **úchytem pro tažení** na spodním okraji. Přetažením úchytu změníš jeho velikost — přichytává se na **nahlédnutí / polovina / plná** — nebo **ťukni** na úchyt pro přepnutí mezi sbaleným a rozbaleným stavem. Náhled vyplní prostor pod ním a zůstává viditelný, zatímco upravuješ.
- Plovoucí tlačítko **Vykreslit** otevře panel **Export** — všechny ovládací prvky pro formát, velikost, kopírování, ukládání a stahování na jednom místě. Zavřeš ho ťuknutím na pozadí.

## Ovládací prvky (vstupy)

Nástroje zpřístupňují jen ty vstupy, které se mají měnit — všechno ostatní (barvy, rozložení, typografie, logika) je pevně dané autorem nástroje, takže cokoli vytvoříš, splňuje pravidla, která autor nastavil. Vstupy zahrnují text, posuvníky, výběr barvy, rozbalovací nabídky, data, výběr obrázků a opakující se skupiny řádků. Některé jsou seskupené do rozbalovacích sekcí.

**Reset:** *Vymazat změny* vrátí každý vstup na jeho výchozí hodnotu.

## Tvoje údaje a fotka

**Profil** (vpravo nahoře v galerii) uchovává tvé jméno, kontaktní údaje a volitelnou **fotku**. Nástroje, které se na tyto údaje ptají, je automaticky předvyplní — nastav si je jednou a tvůj e-mailový podpis, lockupy a odznaky se doplní samy. Kterékoli pole pak stále můžeš pro danou relaci přepsat. Zapni **Použít mé údaje**, aby si je nástroj mohl přečíst.

Tvoje fotka a údaje žijí **jen na tomto zařízení**. Profil může být víc než jen ty — tým nebo role, do které se čas od času vžiješ. Kompletní obrázek, včetně vedení více profilů najednou, najdeš v **[Profily](/info/profile.html)**.

## Ukládání a pokračování

Klikni na **Uložit** a aktuální vstupy se uloží jako relace pro daný nástroj. U každého nástroje můžeš mít víc pojmenovaných relací; tlačítko **Pokračovat** u každého nástroje znovu otevře tvou poslední relaci a **tlačítko historie** (vpravo nahoře, vedle profilu) vypisuje všechny uložené relace napříč nástroji. Relace jsou uložené jen na tomto zařízení. Chceš-li je uspořádat, otevři **Projekty** (níže).

## Projekty

**Projekty** — otevřeš je z karty **Projekty** vedle **Nástroje**, nebo z **Profil → Úložiště → Uspořádat v Projektech** — jsou domovem pro všechno, co sis uložil/a, a fungují jako správce souborů:

- **Vnořitelné složky.** Seskup uložené relace do složek a složky do dalších složek, tak hluboko, jak chceš. Vytvoř složku, přejmenuj ji, nebo přetáhni dlaždici na jinou složku, aby se do ní přesunula; drobečková navigace tě provede zpátky nahoru. Vždy přítomná složka **Netříděné** obsahuje všechno, co ještě nebylo zařazeno.
- **Zakládej novou práci rovnou tam.** Uvnitř složky **+ Nový nástroj** otevře nástroj a jeho první uložení automaticky založí do dané složky.
- **Vícenásobný výběr (desktop).** Zaškrtni políčko u dlaždice, přetáhni výběrový obdélník přes prázdnou plochu, nebo použij **Shift/Cmd-klik**; **klikni pravým tlačítkem** na dlaždici pro kontextovou nabídku. Pak proveď akci na celém výběru najednou.
- **Vykresli celou složku nebo výběr.** **Vykreslit složku** exportuje každou uloženou relaci ve složce — včetně jejích podsložek — jako jeden vnořený `.zip`. **Vykreslit výběr** dělá totéž pro jakýkoli vícenásobný výběr a jednotlivá relace se vykreslí rovnou do vlastního souboru. Není potřeba Batch/Pro.
- **Sdílej uloženou relaci.** Klikni pravým tlačítkem na relaci → **Sdílet odkaz** a zkopíruje se odkaz, který ji znovu otevře se stejnými vstupy (celý dialog Sdílet — viz níže).

## Sdílení odkazu

Každý vstup je zachycený v URL adrese stránky, takže odkaz *je* návrh. Použij **Sdílet** v ovládacích prvcích exportu — nebo **Sdílet odkaz** u kterékoli uložené relace v Projektech — a otevře se **dialog Sdílet**: odkaz připravený ke zkopírování plus přepínače pro šifrování odkazu a pro to, co se stane při jeho otevření (celá obrazovka, rozbalený panel exportu, stažení při otevření pomocí `&export`, nebo zkopírování do schránky pomocí `&copy`). 

Velký návrh by znamenal dlouhou URL adresu, takže dialog nabízí i **Nejkratší odkaz**, který zabalí celý stav do kompaktního tokenu — čitelná podoba je ale vždy po ruce taky. Vlož ho kolegovi, přidej do záložek, nebo ho commitni. (Plné detaily: [Režim URL](/info/url-mode.html).)

> Obrázky, které jsi nahrál/a ze svého zařízení, **nejsou** součástí sdíleného odkazu — existují jen na tvém počítači.

## Živá kamera (nástroje reagující na pohyb)

Fotografické **filtry** — Halftone, Scanline, Posterize, Duotone — zobrazují tlačítko **Živě** tam, kde je dostupná kamera. Zapni ho a efekt sleduje obraz z webkamery snímek po snímku, takže reaguje na pohyb; výsledek si můžeš nahrát jako GIF, WebM nebo MP4. Snímky se čtou a zpracovávají **na tvém zařízení** a nikdy ho neopustí, a kamera se uvolní ve chvíli, kdy zastavíš nebo opustíš nástroj. (Každý výběr obrázku má také tlačítko **Pořídit fotku** pro zachycení jednoho snímku jako obrázku uloženého na zařízení.)

## Moje obrázky

Když ti nástroj umožní přidat obrázek z tvého zařízení, zmenší se, zbaví se EXIF/GPS dat a uloží se do tvé osobní knihovny **Moje obrázky** (pod **Profil → Úložiště**). Znovu ho použij v libovolném nástroji. Knihovna má omezenou kapacitu a je čistě lokální — obrázky tam spravuješ nebo mažeš.

## Zvuk a přístupnost

Lolly usiluje o to, aby se s ním dalo pohodlně pracovat úplně každému. Rozhraní je ovladatelné klávesnicí, vlastní ovládací prvky mají řádné popisky pro čtečky obrazovky a živý náhled každého nástroje je zpřístupněný jako jeden popsaný obrázek popisující, co vytváří.

Jemná vrstva **doprovodných zvuků** potvrzuje, co děláš — příchod do galerie, kontrola platných vs. neplatných Content Credentials, zavření panelu, přepnutí filtru. Je to **ve výchozím stavu zapnuté**, ale vždy volitelné: vypni **Zvuk** kdekoli, kde se přepínač objeví (v popupu možností každého zobrazení, nebo v **Profilu**), a volba se zapamatuje.

Vedle tohoto přepínače je **Neurospicy Mode** — volitelný, konejšivý podkresový beat pro soustředění, který tiše hraje ve smyčce, zatímco pracuješ. Vyber smyčku z pilulkovitého selektoru, přehraj nebo pozastav ji tlačítkem vedle něj a nastav její hlasitost; je **ve výchozím stavu vypnutý** a stejně jako Zvuk se pamatuje napříč relacemi a zařízeními. Vypnutí Zvuku ztlumí i smyčku pro soustředění.

## Úložiště a soukromí

Všechno se ukládá do lokální databáze tvého prohlížeče (IndexedDB): tvůj profil, uložené relace, nahrané obrázky a mezipaměť staženého obsahu katalogu. **Profil → Úložiště** ukazuje využití a umožňuje ti:

- **Vymazat mezipaměť** — zahodit stažený obsah katalogu (při dalším načtení se znovu synchronizuje).
- **Vymazat všechna moje data** — smazat profil, relace a obrázky. *Nelze vrátit zpět.*

Nic se nikam neodesílá. Žádná telemetrie, žádné cloudové vykreslování.

## Přechod na jiné zařízení

Protože všechno žije na tvém zařízení, **Profil → Úložiště → Přesunout na jiné zařízení** ti umožní přenést úplně všechno do druhé instalace — bez účtu, bez cloudu:

- **Exportovat moje data** stáhne jeden soubor `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (části názvu pocházejí z tvého profilu a pokud nejsou nastavené, vynechají se; `<n>` je denní počítadlo, aby si exporty ze stejného dne nekolidovaly) obsahující tvůj profil, každou uloženou relaci (s náhledem), tvoje nahrané obrázky a tvoje preference (motiv, šířku postranního panelu, lokální statistiky aktivity).
- **Importovat data…** na druhé instalaci ten soubor zase načte. **Sloučí** je: cokoli se stejným názvem (tvůj profil, slot relace, obrázek) se nahradí importovanou kopií; všechno ostatní na daném zařízení zůstane zachováno. Uložené relace se automaticky znovu propojí s tvými importovanými obrázky.

Mezipaměť katalogu není součástí — na novém zařízení se stáhne znovu. Balíček je obyčejný zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id formátu `lolly-backup`), takže přežije e-mail, USB nebo AirDrop neporušený a je to stejný formát, který čte každá shell. Každá část má kontrolní součet, takže soubor poškozený při přenosu se odhalí při importu, místo aby se obnovil napůl rozbitý. (Plná specifikace formátu: [Přenos dat](/info/data-transfer.html).)

## Import návrhu (Figma, Penpot, Illustrator, InDesign)

Existující návrh můžeš přenést do Lolly a pokračovat v práci na něm: otevři **Layout Studio**, klikni na **Importovat návrh** na panelu nástrojů plátna a vyber Figma **.fig** nebo SVG, Penpot **.penpot**, Illustrator **.ai** / **.pdf**, nebo InDesign **.idml**. Vrstvy se stanou editovatelnými boxy na volném plátně — text zůstává přepisovatelný, obrázky se uloží do **Moje obrázky**, a písmo a barvy se přizpůsobí globálním hodnotám značky — pak se výsledek ukládá, sdílí a vykresluje jako každá jiná relace. Parsování probíhá celé na tvém zařízení. Plné detaily: **[Import návrhu](/info/design-import.html)**.

## Export

Kompletní příběh najdeš v **[Export a formáty](/info/exporting.html)** — výběr formátu, výstupní velikosti a tiskových jednotek, průhlednosti, videa a kopírování/sdílení. Ve zkratce: vyber formát, podle potřeby nastav velikost a **Stáhnout** (nebo **Kopírovat** do schránky).

## Dávkové zpracování (Pro)

Pro pokročilé uživatele **Dávkové zpracování** (odkaz z galerie, uzamčené za feature flagem Pro, který je ve výchozím stavu zapnutý) vykreslí spoustu variant najednou — mřížku, kde je každý řádek sadou vstupů, exportovaných dohromady. Ideální pro lokalizaci karty do desítky jazyků nebo pro vygenerování každé velikostní varianty na jeden zátah. Řádky vyplníš psaním, vložením přímo z tabulkového procesoru, nebo importem CSV (jedno si můžeš i exportovat zpátky), a pro každý řádek nastavíš formát, velikost a název výstupního souboru. Celou mřížku ulož jako pojmenovanou **dávkovou relaci**, která se znovu otevře z galerie, a stáhni každý řádek jako jeden `.zip`.

Dávkové zpracování slouží k vygenerování **mnoha variant jedné šablony** najednou. Pro opětovné vykreslení relací, které jsi **už uložil/a**, použij **Projekty → Vykreslit složku / Vykreslit výběr** (výše) — Pro není potřeba.

## Offline a instalace

Lolly je PWA. Po prvním načtení funguje **offline** — nainstaluj si ji z adresního řádku prohlížeče (nebo přes *Add to Home Screen* na mobilu) pro zážitek podobný aplikaci, na celou obrazovku. Aktualizuje se sama, jakmile jsi znovu online.
