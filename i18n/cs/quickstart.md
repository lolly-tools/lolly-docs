# Rychlý start

Lolly mění tvá pravidla — barvy, písmo, rozvržení, logiku — na nástroje, které může kdokoli použít k vytvoření hotových souborů: obrázků, PDF, sociálních karet, videa, prostým vyplněním pár polí. Není se co učit a nic se nenahrává: všechno běží na tvém zařízení, online i offline.

Tohle je stránka, kterou si přečti jako první. K produktivitě tě dostanou dvě věci: **udělej si Lolly svým** (nasměruj ho na svou značku) a **přines si, co už máš** (své návrhové soubory a tokeny). Všechno ostatní je jen odkaz daleko.

> Nový v Lolly a chceš si jen něco vytvořit? Otevři aplikaci, vyber libovolný nástroj z galerie, vyplň políčka a klikni na **Render**. Vrať se sem, až budeš chtít, aby to neslo *tvou* značku.

## 1. Udělej si Lolly vlastní — nastav svou značku

Tvá značka v Lolly je malý dokument s **design tokeny** — barvy, písma a pár pravidel — podle kterého vykresluje každý nástroj. Nastavíš ji jednou a všechno, co vytvoříš, je v souladu se značkou už ze své podstaty, ne díky kontrole. Vedou k tomu tři cesty; vyber tu, která odpovídá tomu, kde tvá značka už dnes žije.

### Začni od nuly (průvodce)

Při prvním spuštění se ocitneš na obrazovce **Start** (`#/start`). Zadej název a primární barvu a Lolly z nich *odvodí* kompletní, přístupnou paletu — světlé/tmavé plochy, text, akcenty — pomocí stejné barevné matematiky, kterou engine používá všude jinde. Vyber písmo a za necelou minutu máš funkční značku. Cokoli z toho můžeš kdykoli později doladit.

### Importuj značku, kterou už máš

Pokud je tvá značka už zachycená jako design tokeny — z **Penpot**, **Tokens Studio** (Figma), nebo jakéhokoli obyčejného souboru **DTCG** — přenes ji celou, místo ručního přepisování. Vedou k tomu dvě cesty:

- **V aplikaci:** obrazovka Start a editor *Tvá značka* přijmou soubor s tokeny (nebo balíček `LollyBrand`) přímo — stačí ho přetáhnout dovnitř a paleta se rozsvítí.
- **Z příkazové řádky** pro vytvoření znovupoužitelného balíčku značky:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` přijímá všechny tři kontejnery, ve kterých Penpot / Tokens Studio exportují tentýž dokument — jediný soubor `tokens.json`, adresář (`$metadata.json` + soubory po jednotlivých sadách), nebo archiv `project.penpot`. S `--activate` registruje značku jako profil, přepne se na ni a znovu sestaví katalog. Viz [Konfigurace](/info/configuration.html), jak spolu balíčky značek a profily souvisí.

### Dolaď ji v aplikaci

Jakmile je značka aktivní, je editor **Tvá značka** na dashboardu (`#/d`) živý — změníš barvu nebo roli a každý náhled na stránce se aktualizuje při psaní. Stejná značka je shrnutá na kartě **Profil → Tvá značka**. Písma jsou opravdová: vyber si z Google Fonts a Lolly uloží soubor **na tvém zařízení** jako součást značky, takže tvé písmo funguje i offline a při renderování se nic nestahuje.

Až budeš spokojený/á, **exportuj značku jako balíček `LollyBrand`** — jediný soubor, který kolega může importovat a získat naprosto stejnou paletu, písma a pravidla. Takhle se značka přesouvá mezi lidmi a stroji bez serveru uprostřed.

> **Tokeny značky fungují obousměrně.** Protože značka Lolly *je* tokeny DTCG — formát, který Penpot nativně čte i zapisuje a Tokens Studio přináší do Figma — paleta, se kterou navrhuješ, a paleta, kterou Lolly *vynucuje*, jsou jeden a tentýž dokument, ne dva seznamy, které ručně udržuješ v souladu. Viz [Design tokeny](/info/design-tokens.html).

## 2. Přines si, co už máš

Nezačínáš od nuly. Lolly otevírá návrhářskou práci a otevřené formáty, které už vlastníš.

### Otevřené návrhové soubory

Hotová práce z **Figma, Penpot, Illustrator, InDesign nebo jakékoli aplikace pro SVG** nemusí zůstat uzamčená v aplikaci, ve které vznikla. Otevři **Layout Studio**, klikni na **Importovat návrh** a soubor se otevře jako *živé rozvržení* — ne jako zploštělý obrázek. Z každé vrstvy se stane editovatelný box: text zůstává přepisovatelný, tvary zůstávají tvary, obrázky se uloží do tvé knihovny a složitá vektorová grafika se zachová věrně. Vše dorazí už přizpůsobené písmům a barevným pravidlům tvé značky.

| Co máš | Jak to přinést |
|---|---|
| Rám z Figma | Nativní `.fig` (File → Save local copy), nebo export do SVG |
| Návrh z Penpot | Jeho export `.penpot`, nebo jakékoli SVG |
| Soubor z Illustratoru | Nativní `.ai` (kompatibilní s PDF) nebo `.pdf` — otevře se přímo |
| Rozvržení z InDesignu | `.idml` (File → Export → InDesign Markup) |
| Cokoli jiného | **Jakékoli SVG** — univerzální dveře dovnitř |

Celý import probíhá **na tvém zařízení** — soubor se zpracuje v tvém prohlížeči a nic se nenahrává na server. Všechny podrobnosti, a přesně co se přenese, najdeš v [Import návrhu](/info/design-import.html).

### Od jednorázovky k šabloně

A tady je ten zisk: importované rozvržení je obyčejná relace Layout Studia, takže jakmile ji **uložíš**, žije na URL adrese. Kdokoli s Lolly může tuto URL otevřít, změnit text, vyměnit obrázek a vyrenderovat si vlastní verzi — bez návrhářské aplikace, a uzamčené části zůstanou uzamčené. Z jednorázového návrhu se stane znovupoužitelný nástroj. To je celá myšlenka, a dosáhneš jí, aniž bys napsal/a jediný řádek konfigurace.

### Otevřená data a otevřené nástroje

[Sada komunitních nástrojů](/info/builders.html) je open source a nezávislá na značce — QR kódy, mapy ulic, filtry, nástroje na ochranu soukromí — a jakmile ji aktivuješ, vykresluje se podle *tvé* značky. Nástrojům můžeš dodat i svá vlastní otevřená data: vlož nebo přetáhni tabulku **CSV** nebo **JSON** a opakující se pole nástroje se z ní vyplní, jeden hotový výstup na řádek.

## 3. Vytvoř něco a pak to sdílej nebo automatizuj

S aktivní značkou a materiálem po ruce vytvoří každý nástroj hotový soubor:

- **Vyrenderuj** libovolný nástroj do **SVG, PDF, PNG, JPG, WebP, videa** a dalších formátů — ve skutečných tiskových rozměrech a fyzických jednotkách, když je potřebuješ. Viz [Export a formáty](/info/exporting.html).
- **Sdílej odkaz.** Stav každého nástroje je URL adresa, takže hotový výstup je reprodukovatelný a adresovatelný přes parametry — ulož si odkaz a znovu ho vygeneruj, kdykoli potřebuješ.
- **Dělej to hromadně.** Řiď šablonu z tabulky v [hromadné mřížce](/info/exporting.html): jeden hotový výstup na řádek.
- **Automatizuj to.** Stejné renderování běží z [CLI](/info/cli.html) i z [AI agenta](/info/ai-agents.html) — URL adresa je API.

## Kam dál

Tři cesty, podle toho, proč jsi tady:

- **[Lolly pro tvůrce](/info/creators.html)** — tvoříš věci. Výhody a jak z aplikace vytěžit maximum.
- **[Lolly pro vývojáře](/info/builders.html)** — vytváříš nástroje, integruješ a nasazuješ. Technická dokumentace.
- **[Lolly pro provozovatele](/info/operators.html)** — zodpovídáš za značku, bezpečnost a nasazení napříč organizací.
