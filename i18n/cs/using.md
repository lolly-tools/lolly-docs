# Používání Lolly

Praktický průvodce tím, jak aplikaci opravdu *používat* - otevření nástroje, práce s plátnem, export, ukládání a sdílení. Všechno tady běží **na tvém zařízení**: žádný účet, žádný upload, po prvním načtení není potřeba ani internet.

> Jsi tu poprvé? [Rychlý start](/info/quickstart.html) tě během pár minut naučí tvořit a [Lolly pro operátory](/info/operators.html) popisuje instalaci/nasazení aplikace; tahle stránka je o tom, jak ji ovládat, jakmile je otevřená.

## Otevření nástroje

![The grey Show hidden tools tile at the end of the grid, and one dimmed hidden tool card revealed beneath it with Unhide in its menu](/t/url-shot?url=%2F%23%2F&width=1440&height=680&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-bulk%3D%22hide%22%5D%3Bwait%3A300%3Bclick%3A.gtile--hiddenbox%3Bpress%3AEnd%3Bwait%3A800&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&rasterDpi=96&dark=1&filename=misc-hidden-tools)

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1)


Domovská obrazovka je **galerie** - všechny nástroje, seskupené podle kategorie. Klikni na kartu, čímž nástroj otevřeš; pokud jsi na něm už dřív pracoval/a, tlačítko **Pokračovat** obnoví tvou poslední relaci. Vyhledávací pole použij k filtrování podle názvu.

Každý nástroj je rozdělené zobrazení: na jedné straně **ovládací prvky**, na druhé straně živý **náhled** (plátno). Změň libovolný ovládací prvek a náhled se okamžitě aktualizuje.

> Několik nástrojů (jako **Design**) se místo toho otevře jako **volné plátno** - plocha bez rozhraní pro přímou manipulaci, kde přetahuješ, měníš velikost, otáčíš a přichytáváš boxy s textem, tvary a obrázky, a dvojklikem upravuješ text přímo na místě. Exportuje se stejnou vykreslovací cestou jako u každého jiného nástroje, takže plátno *je* soubor. Viz [Volné plátno](#the-free-canvas-design) níže.

## Plátno (náhled)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

Náhled vždy zobrazuje přesně to, co se exportuje.

**Desktop**

- **Přiblížení:** Cmd/Ctrl + kolečko myši, nebo sevření prstů (pinch) na trackpadu - přiblížení se vystředí na tvůj kurzor.
- **Posun:** podrž **Space** a táhni, nebo táhni **prostředním tlačítkem myši**. (Obyčejné kliknutí zůstává volné pro klikání na části návrhu.)
- **Klávesnice:** `0` = přizpůsobit oknu · `1` = 100% · `+` / `−` = přiblížení.
- **HUD přiblížení:** malý ovládací prvek `−  NN%  +  Fit` v rohu. Klikni na procenta pro přepnutí mezi Přizpůsobit ↔ 100 %.

**Dotyk**

- **Sevření prstů** pro přiblížení, **tažení** pro posun, **dvojité ťuknutí** pro reset na přizpůsobené zobrazení.

**Kliknutím přejdeš na ovládací prvek:** klikni na libovolný prvek v návrhu a odpovídající vstup v postranním panelu získá fokus a posune se do viditelné oblasti - u opakující se skupiny řádků se rozbalí přesně ten řádek, na který jsi klikl/a, takže úprava toho, co vidíš, je vzdálená jedno ťuknutí.

Změna rozměrů vždy vrátí zobrazení zpět na čisté přizpůsobení.

### Volné plátno (Design)

![Design's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=design)

Nástroje s volným plátnem přidávají pracovní plochu *kolem* kresebné plochy, podobně jako grafikova podložka (pasteboard):

- **Odkládání mimo plátno.** Přetáhni box za okraj kresebné plochy a zůstane plně **viditelný a vybratelný** - zaparkuj prvky stranou, zatímco skládáš kompozici, a pak je přetáhni zpátky dovnitř. Všechno mimo kresebnou plochu je **jemně ztlumené**, takže exportovaná oblast je vždy na první pohled zřejmá, a kresebná plocha si drží svůj stín, který přesně vyznačuje, kde soubor začíná.
- **Exportuje se jen kresebná plocha.** Exportovaný soubor je ohraničený kresebnou plochou - cokoli zůstane venku (nebo část boxu přesahující přes okraj) se z výstupu jednoduše ořízne, stejně u rastrových i vektorových formátů.
- **Oddal se pod úroveň Přizpůsobit** (až na 20 %), abys viděl/a celou podložku, když máš prvky odložené daleko mimo kresebnou plochu.
- **Kresebná plocha se dá měnit.** Změna exportních rozměrů změní velikost rámu na místě; boxy si zachovají své pozice, takže můžeš přerámovat rozložení kolem existujícího obsahu.

## Na telefonu

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

Na úzkých obrazovkách se rozložení překreslí do jednoho sloupce:

- **Ovládací prvky se stanou panelem** nahoře s **úchytem pro tažení** na spodním okraji. Přetažením úchytu změníš jeho velikost - přichytává se na **nahlédnutí / polovina / plná** - nebo **ťukni** na úchyt pro přepnutí mezi sbaleným a rozbaleným stavem. Náhled vyplní prostor pod ním a zůstává viditelný, zatímco upravuješ.
- Plovoucí tlačítko **Vykreslit** otevře panel **Export** - všechny ovládací prvky pro formát, velikost, kopírování, ukládání a stahování na jednom místě. Zavřeš ho ťuknutím na pozadí.

## Ovládací prvky (vstupy)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

Nástroje zpřístupňují jen ty vstupy, které se mají měnit - všechno ostatní (barvy, rozložení, typografie, logika) je pevně dané autorem nástroje, takže cokoli vytvoříš, splňuje pravidla, která autor nastavil. Vstupy zahrnují text, posuvníky, výběr barvy, rozbalovací nabídky, data, výběr obrázků a opakující se skupiny řádků. Některé jsou seskupené do rozbalovacích sekcí.

**Reset:** *Vymazat změny* vrátí každý vstup na jeho výchozí hodnotu.

## Tvoje údaje a fotka

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (vpravo nahoře v galerii) uchovává tvé jméno, kontaktní údaje a volitelnou **fotku**. Nástroje, které se na tyto údaje ptají, je automaticky předvyplní - nastav si je jednou a tvůj e-mailový podpis, lockupy a odznaky se doplní samy. Kterékoli pole pak stále můžeš pro danou relaci přepsat. Zapni **Použít mé údaje**, aby si je nástroj mohl přečíst.

Tvoje fotka a údaje žijí **jen na tomto zařízení**. Profil může být víc než jen ty - tým nebo role, do které se čas od času vžiješ. Kompletní obrázek, včetně vedení více profilů najednou, najdeš v **[Profily](/info/profile.html)**.

## Ukládání a pokračování

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

Klikni na **Uložit** a aktuální vstupy se uloží jako relace pro daný nástroj. U každého nástroje můžeš mít víc pojmenovaných relací; tlačítko **Pokračovat** u každého nástroje znovu otevře tvou poslední relaci a **tlačítko historie** (vpravo nahoře, vedle profilu) vypisuje všechny uložené relace napříč nástroji. Relace jsou uložené jen na tomto zařízení. Chceš-li je uspořádat, otevři **Projekty** (níže).

## Projekty

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Projekty** - otevřeš je z karty **Projekty** vedle **Nástroje**, nebo z **Profil → Úložiště → Uspořádat v Projektech** - jsou domovem pro všechno, co sis uložil/a, a fungují jako správce souborů:

- **Vnořitelné složky.** Seskup uložené relace do složek a složky do dalších složek, tak hluboko, jak chceš. Vytvoř složku, přejmenuj ji, nebo přetáhni dlaždici na jinou složku, aby se do ní přesunula; drobečková navigace tě provede zpátky nahoru. Vždy přítomná složka **Netříděné** obsahuje všechno, co ještě nebylo zařazeno.
- **Zakládej novou práci rovnou tam.** Uvnitř složky **+ Nový nástroj** otevře nástroj a jeho první uložení automaticky založí do dané složky.
- **Vícenásobný výběr (desktop).** Zaškrtni políčko u dlaždice, přetáhni výběrový obdélník přes prázdnou plochu, nebo použij **Shift/Cmd-klik**; **klikni pravým tlačítkem** na dlaždici pro kontextovou nabídku. Pak proveď akci na celém výběru najednou.
- **Vykresli celou složku nebo výběr.** **Vykreslit složku** exportuje každou uloženou relaci ve složce - včetně jejích podsložek - jako jeden vnořený `.zip`. **Vykreslit výběr** dělá totéž pro jakýkoli vícenásobný výběr a jednotlivá relace se vykreslí rovnou do vlastního souboru. Není potřeba Batch/Pro.
- **Sdílej uloženou relaci.** Klikni pravým tlačítkem na relaci → **Sdílet odkaz** a zkopíruje se odkaz, který ji znovu otevře se stejnými vstupy (celý dialog Sdílet - viz níže).

## Sdílení odkazu

Každý vstup je zachycený v URL adrese stránky, takže odkaz *je* návrh. Použij **Sdílet** v ovládacích prvcích exportu - nebo **Sdílet odkaz** u kterékoli uložené relace v Projektech - a otevře se **dialog Sdílet**: odkaz připravený ke zkopírování plus přepínače pro šifrování odkazu a pro to, co se stane při jeho otevření (celá obrazovka, rozbalený panel exportu, stažení při otevření pomocí `&export`, nebo zkopírování do schránky pomocí `&copy`). 

Velký návrh by znamenal dlouhou URL adresu, takže dialog nabízí i **Nejkratší odkaz**, který zabalí celý stav do kompaktního tokenu - čitelná podoba je ale vždy po ruce taky. Vlož ho kolegovi, přidej do záložek, nebo ho commitni. (Plné detaily: [Režim URL](/info/url-mode.html).)

> Obrázky, které jsi nahrál/a ze svého zařízení, **nejsou** součástí sdíleného odkazu - existují jen na tvém počítači.

## Živá kamera (nástroje reagující na pohyb)

Fotografické **filtry** - Halftone, Scanline, Posterize, Duotone - zobrazují tlačítko **Živě** tam, kde je dostupná kamera. Zapni ho a efekt sleduje obraz z webkamery snímek po snímku, takže reaguje na pohyb; výsledek si můžeš nahrát jako GIF, WebM nebo MP4. Snímky se čtou a zpracovávají **na tvém zařízení** a nikdy ho neopustí, a kamera se uvolní ve chvíli, kdy zastavíš nebo opustíš nástroj. (Každý výběr obrázku má také tlačítko **Pořídit fotku** pro zachycení jednoho snímku jako obrázku uloženého na zařízení.)

## Moje obrázky

![The View and sort popover in Projects open, with a theme row, a View choice of Preview or List, and Name, Date added and Last modified under Sort](/t/url-shot?url=%2F%23%2Fp&width=900&height=700&dpi=192&waitMs=1400&drive=click%3A.projects-viewopts&cropSelector=.projects-viewmenu&walker=1&format=svg&dark=1&filename=misc-projects-sort)

![Two tool cards ticked in the Tools gallery, with the floating selection bar offering Available offline, View sessions, Favourite, Hide and Copy link](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&drive=click%3A%5Bdata-select%3D%22qr-code%22%5D%3Bclick%3A%5Bdata-select%3D%22mesh-gradient%22%5D&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&dark=1&filename=misc-bulkbar-gallery)

Když ti nástroj umožní přidat obrázek z tvého zařízení, zmenší se, zbaví se EXIF/GPS dat a uloží se do tvé osobní knihovny **Moje obrázky** (pod **Profil → Úložiště**). Znovu ho použij v libovolném nástroji. Knihovna má omezenou kapacitu a je čistě lokální - obrázky tam spravuješ nebo mažeš.

## Katalog - tvoje knihovna assetů

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

**Katalog** (`#/c`, nebo odkaz **Katalog** v nabídce) shromažďuje všechno, z čeho tvé nástroje mohou čerpat - brandová loga, obrázky, audio a pohyb, seskupené podle druhu - a je to zároveň místo, kde žijí i tvoje **vlastní kreativní soubory**. Žádný server, žádná administrátorská konzole, žádný pull request: všechno je na tvém zařízení.

- **Přines si svoje soubory.** Přetáhni jakýkoli obrázek, SVG, zvukový klip, video, Lottie nebo PDF na oblast pro nahrávání - nebo klikni a vyber - a okamžitě přistane v tvém katalogu, připravený ve výběru assetů každého nástroje. Nahraj si, kolik chceš; nikdy to neopustí tvé zařízení.
- **Označ si oblíbené to, po čem saháš.** Dej assetu (nebo brandovému vzorku) ★ a připne se na začátek každého výběru, takže tvoje oblíbené logo nebo barva je na jedno kliknutí.
- **Ukliď si.** Přeřaď asset do jiné skupiny, skryj sdílený brandový asset, který nepoužíváš (a **Zobrazit skryté** ho vrátí zpět), nebo úplně smaž své vlastní nahrané soubory.

### Vezmi si svou paletu a písma kamkoli

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Panel **Vzorky** v Katalogu není jen pro referenci - klikni na barvu a zkopíruj ji, nebo **stáhni celou brandovou paletu** ve formátu, kterým mluví tvůj druhý nástroj:

- **Design tokeny (JSON)**, **CSS proměnné**, nebo **CSS třídy** - vlož brand rovnou do stylopisu nebo buildu;
- **Adobe Swatch Exchange (.ase)** - načti ho do Illustratoru nebo Photoshopu;
- **GIMP paleta (.gpl)** - pro GIMP nebo Inkscape.

Panel **Písma** vypisuje tvé brandové řezy s **tlačítkem stažení** u každého, abys je nainstaloval/a lokálně nebo předal/a do tiskárny. (Záložka Barvy v [Brand Studiu](/info/brand-studio.html) nabízí stejné stažení palety.)

Assety jsou jedna polovina otevřené cesty „udělej si sám"; ta druhá je **tvorba vlastních nástrojů** - volné plátno (Design, popsané výše) ti umožní jeden postavit vizuálně, bez psaní kódu.

## Zvuk a přístupnost

Lolly usiluje o to, aby se s ním dalo pohodlně pracovat úplně každému. Rozhraní je ovladatelné klávesnicí, vlastní ovládací prvky mají řádné popisky pro čtečky obrazovky a živý náhled každého nástroje je zpřístupněný jako jeden popsaný obrázek popisující, co vytváří.

Jemná vrstva **doprovodných zvuků** potvrzuje, co děláš - příchod do galerie, kontrola platných vs. neplatných Content Credentials, zavření panelu, přepnutí filtru. Je to **ve výchozím stavu zapnuté**, ale vždy volitelné: vypni **Zvuk** kdekoli, kde se přepínač objeví (v popupu možností každého zobrazení, nebo v **Profilu**), a volba se zapamatuje.

Vedle tohoto přepínače je **Neurospicy Mode** - volitelná, konejšivá podkresová stopa pro soustředění, která tiše hraje, zatímco pracuješ. Když ji zapneš, otevře se v dolním rohu malý **dok přehrávače**, který tě provází celou aplikací; z něj můžeš vyhledat a vybrat stopu, přeskakovat vpřed a zpět, nastavit hlasitost a přehrávač minimalizovat nebo zavřít. Seznam stop zahrnuje několik kategorií - procedurální melodie *Lolly Sings*, ambientní smyčky a beaty, tvoje vlastní nahrané audio a hrstku živých internetových **rádiových** stanic (ty potřebují připojení; všechno ostatní hraje offline). Je **ve výchozím stavu vypnutý** a stejně jako Zvuk se pamatuje napříč relacemi a zařízeními. Vypnutí Zvuku ztlumí i stopu pro soustředění.

## Úložiště a soukromí

Všechno se ukládá do lokální databáze tvého prohlížeče (IndexedDB): tvůj profil, uložené relace, nahrané obrázky a mezipaměť staženého obsahu katalogu. **Profil → Úložiště** ukazuje využití a umožňuje ti:

- **Vymazat mezipaměť** - zahodit stažený obsah katalogu (při dalším načtení se znovu synchronizuje).
- **Vymazat všechna moje data** - smazat profil, relace a obrázky. *Nelze vrátit zpět.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear)

Nic se nikam neodesílá. Žádná telemetrie, žádné cloudové vykreslování.

## Přechod na jiné zařízení

Protože všechno žije na tvém zařízení, **Profil → Úložiště → Přesunout na jiné zařízení** ti umožní přenést úplně všechno do druhé instalace - bez účtu, bez cloudu:

- **Exportovat moje data** stáhne jeden soubor `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (části názvu pocházejí z tvého profilu a pokud nejsou nastavené, vynechají se; `<n>` je denní počítadlo, aby si exporty ze stejného dne nekolidovaly) obsahující tvůj profil, každou uloženou relaci (s náhledem), tvoje nahrané obrázky a tvoje preference (motiv, šířku postranního panelu, lokální statistiky aktivity).
- **Importovat data…** na druhé instalaci ten soubor zase načte. **Sloučí** je: cokoli se stejným názvem (tvůj profil, slot relace, obrázek) se nahradí importovanou kopií; všechno ostatní na daném zařízení zůstane zachováno. Uložené relace se automaticky znovu propojí s tvými importovanými obrázky.

Mezipaměť katalogu není součástí - na novém zařízení se stáhne znovu. Balíček je obyčejný zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id formátu `lolly-backup`), takže přežije e-mail, USB nebo AirDrop neporušený a je to stejný formát, který čte každá shell. Každá část má kontrolní součet, takže soubor poškozený při přenosu se odhalí při importu, místo aby se obnovil napůl rozbitý. (Plná specifikace formátu: [Přenos dat](/info/data-transfer.html).)

## Import návrhu (Figma, Penpot, Illustrator, InDesign)

Existující návrh můžeš přenést do Lolly a pokračovat v práci na něm: otevři **Design**, klikni na **Importovat návrh** na panelu nástrojů plátna a vyber Figma **.fig** nebo SVG, Penpot **.penpot**, Illustrator **.ai** / **.pdf**, nebo InDesign **.idml**. Vrstvy se stanou editovatelnými boxy na volném plátně - text zůstává přepisovatelný, obrázky se uloží do **Moje obrázky**, a písmo a barvy se přizpůsobí globálním hodnotám značky - pak se výsledek ukládá, sdílí a vykresluje jako každá jiná relace. Parsování probíhá celé na tvém zařízení. Plné detaily: **[Import návrhu](/info/design-import.html)**.

## Export

Kompletní příběh najdeš v **[Export a formáty](/info/exporting.html)** - výběr formátu, výstupní velikosti a tiskových jednotek, průhlednosti, videa a kopírování/sdílení. Ve zkratce: vyber formát, podle potřeby nastav velikost a **Stáhnout** (nebo **Kopírovat** do schránky).

## Dávkové zpracování (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

Pro pokročilé uživatele **Dávkové zpracování** (odkaz z galerie, uzamčené za feature flagem Pro, který je ve výchozím stavu zapnutý) vykreslí spoustu variant najednou - mřížku, kde je každý řádek sadou vstupů, exportovaných dohromady. Ideální pro lokalizaci karty do desítky jazyků nebo pro vygenerování každé velikostní varianty na jeden zátah. Řádky vyplníš psaním, vložením přímo z tabulkového procesoru, nebo importem CSV (jedno si můžeš i exportovat zpátky), a pro každý řádek nastavíš formát, velikost a název výstupního souboru. Celou mřížku ulož jako pojmenovanou **dávkovou relaci**, která se znovu otevře z galerie, a stáhni každý řádek jako jeden `.zip`.

Dávkové zpracování slouží k vygenerování **mnoha variant jedné šablony** najednou. Pro opětovné vykreslení relací, které jsi **už uložil/a**, použij **Projekty → Vykreslit složku / Vykreslit výběr** (výše) - Pro není potřeba.

## Offline a instalace

Lolly je PWA. Po prvním načtení funguje **offline** - nainstaluj si ji z adresního řádku prohlížeče (nebo přes *Add to Home Screen* na mobilu) pro zážitek podobný aplikaci, na celou obrazovku. Aktualizuje se sama, jakmile jsi znovu online.
