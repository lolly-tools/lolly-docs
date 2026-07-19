# Profily - kým jsi, když tvoříš

**Profil** je pracovní identita, ve které Lolly tvoří. Je to malá sada údajů, ze kterých si nástroj může vzít potřebné informace, abys je nemusel/a pořád dokola vypisovat znovu - tvé jméno, kontaktní údaje, volitelná profilovka, pár preferencí - plus všechno, co se nasbírá během práce: uložené relace, nahrané obrázky a místní přehled aktivity.

Všechno v profilu zůstává **na zařízení**, v místní databázi prohlížeče (IndexedDB u webové PWA, souborový systém u aplikací Tauri). Neexistuje žádný účet a nic se nikam nenahrává. Spravuješ ho v sekci **Profile** (vpravo nahoře v galerii); nástroje z něj vždy jen *čtou*, a to jen konkrétní pole, pro která byly postavené, aby je předvyplnily.

> Profil je o *tobě* (nebo o tom, kdo právě tvoří). Je to něco jiného než **Platform** - barvy, fonty a globální nastavení značky - a jiného než **Capabilities**, katalog toho, co aplikace umí. Viz [Profil vs Platforma vs Možnosti](#profile-vs-platform-vs-capabilities) na konci.

## Co je v profilu

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

| Část | Co to je |
|---|---|
| **Name** | Jméno a příjmení. |
| **Contact** | E-mail a telefon. |
| **Location** | Město a země. |
| **Headshot** | Volitelná fotka, oříznutá na čtverec a uložená jako místní obrázek. Používají ji nástroje jako e-mailové podpisy, citátové karty, barevné bloky a dynamická rozvržení. |
| **Use my details** | Jediný přepínač typu opt-in. Určuje, jestli tvé osobní údaje jedou s sebou jako **provenance** - řádek autora/kreditu vložený do exportovaných souborů - a jako autor u dávkových běhů **/pro**. (Nereguluje předvyplňování: viz [Jak nástroje používají tvůj profil](#how-tools-use-your-profile).) |
| **Preferences** | Tvůj motiv (light, dark nebo SUSE) a které části aplikace máš zapnuté přes **Feature flags**. |
| **Your work** | Uložené relace (s náhledy) - uspořádané do vnořených složek v sekci **[Projekty](/info/using.html)** - tvá knihovna **My images** a místní statistiky aktivity, to vše svázané s tímto profilem. |

Nic z toho není povinné. Prázdný profil je naprosto v pořádku - vyplníš si jen to, co ti ušetří psaní.

## Profil je kontext, ne jen osoba

Slovo „profil" navozuje dojem jedné pevně dané osoby, ale v Lolly je to spíš **kontext tvoření** - *kým jsi, zatímco něco vytváříš*. Ten kontext může mít tři různé podoby a Lolly se ke všem chová stejně.

### Jako jednotlivec

Výchozí případ. Profil jsi ty: tvé jméno, tvůj e-mail, tvá profilovka. Nastavíš ho jednou a tvůj podpis, tvůj odznak, tvůj konferenční lockup se pak vyplní samy. Tohle bude stačit většině lidí.

### Jako tým

Profil nemusí patřit jednomu člověku. Může zastupovat **tým nebo funkci v rámci organizace**: sdílený název týmu, skupinovou e-mailovou adresu (`events@…`), oddělení, týmovou profilovku nebo značku jednotky. Jeden člověk ho nastaví, exportuje (viz níže) a zbytek týmu si načte stejný profil - takže všechno, co tým vytvoří, ponese konzistentní údaje, aniž by je musel kdokoli znovu zadávat. Sdílený kiosek nebo zapůjčený demo notebook může běžet na jediném týmovém profilu, se kterým tvoří všichni, kdo k němu přijdou.

### Jako funkce - role, kterou si občas oblékneš

Tohle je případ, který strohý model „jeden člověk, jeden profil" nepokrývá. Můžeš být **manažer/ka akce tři dny v roce** a zbytek roku úplně někdo jiný. Ty tři dny chceš mít po ruce údaje k akci, e-mail akce, možná dílčí značku akce, aby se ti vyplnily odznaky a značení; zbylých 362 dní chceš zpátky svou běžnou identitu.

V Lolly je taková role prostě **další profil, který máš po ruce** - uložený balíček (viz další oddíl), který si načteš na akci a pak zase odložíš. Role je klobouk, ne nový účet. Nasadíš si ho, když ho potřebuješ, a sundáš, když jsi hotový/á.

## Jedna instalace, jeden aktivní profil - víc jich můžeš mít v zásobě

V danou chvíli má instalace **jeden aktivní profil** - údaje, které nástroj právě vidí. V aplikaci není žádný přepínač profilů; místo toho je každý profil **přenosný balíček** (jeden `.zip`, viz [níže](#moving-a-profile-to-a-new-device)). Je to záměrně stejný mechanismus jako přesun na nové zařízení - profil je soubor, který můžeš uložit, zkopírovat a načíst.

Pokud tedy opravdu žongluješ s víc kontexty (ty, tvůj tým, role manažera akce), stačí mít víc balíčků a načíst si ten, který zrovna potřebuješ:

- **Nejčistší přepnutí:** **Profile → Storage → Clear all my data**, a pak **Import** balíčku pro kontext, do kterého vstupuješ. Teď tvoříš čistě jako daný profil.
- **Vrstvení:** import *bez* předchozího smazání dat **sloučí** - importovaný profil, relace a obrázky se přidají k tomu, co už tam je, přičemž nahradí vše se stejným názvem a zbytek ponechá. Hodí se, když chceš do svého nastavení natáhnout uložené relace jednoho týmu; nehodí se, pokud potřebuješ čistou hranici mezi rolemi.
- **Vedle sebe:** protože je všechno vázané na zařízení, samostatný profil prohlížeče, samostatný uživatelský účet nebo druhá nainstalovaná PWA má vždy svůj vlastní nezávislý profil Lolly. Můžeš mít spuštěnou svou osobní instalaci i instalaci pro kiosek na akci současně, bez přepínání.

> Drž si jeden balíček na kontext a přejmenuj soubory tak, aby bylo jasné, co jsou (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Soubor *je* profil.

## Přesun profilu na nové zařízení

Protože je profil čistě lokální, jediný způsob, jak ho dostat do čisté instalace - na nový notebook, čerstvě resetovaný prohlížeč, kolegův počítač, offline stroj - je **přenést soubor**. Žádné přihlášení ti ho neobnoví, a to je právě smysl: nic z tvého zařízení nikdy neodešlo.

V sekci **Profile → Storage → Move to another device**:

- **Export my data** stáhne jeden soubor `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - pojmenovaný podle profilu, ke kterému patří, s denním pořadovým číslem, aby se opakované exporty nepřepisovaly (části názvu, které profil nemá, se vynechají). Obsahuje tvůj profil, každou uloženou relaci (s náhledem), tvé nahrané obrázky a tvé preference (motiv, rozvržení, místní statistiky aktivity).
- **Import data…** na druhé instalaci soubor načte zpět a pokračuješ přesně tam, kde jsi skončil/a.

Balíček je obyčejný, samostatný zip, takže se dá přenést **jakýmkoliv** způsobem - přes USB, AirDrop, síťové úložiště, e-mail sám sobě - a cíl může být úplně offline. Každá část má kontrolní součet, takže soubor poškozený při přenosu se odhalí při importu, místo aby se obnovil napůl rozbitý. Import **slučuje** (profil/relace/obrázek se stejným názvem se přepíše, zbytek zůstane zachovaný), takže nikdy nesmaže cíl, který se už používal.

Co se nepřenáší: cache katalogu (na novém zařízení se sama znovu stáhne) a samotné nástroje (předpokládá se, že už tam jsou).

Přesnou strukturu balíčku, politiku verzí a pravidla integrity najdeš v **[Přenos dat](/info/data-transfer.html)**; kompletní návod krok za krokem v **[Using Lolly → Přesun na jiné zařízení](/info/using.html#moving-to-another-device)**.

## Jak nástroje používají tvůj profil

Nástroj vždy jen *předvyplní* ta pole profilu, pro která byl výslovně postavený:

**Explicitní vazba.** Autor nástroje označí vstup, že čerpá z profilu (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Když se nástroj otevře, tento vstup se předvyplní z tvého profilu - a ty ho pro danou relaci pořád můžeš přepsat, aniž by se změnil samotný profil. Předvyplnění je jen místní pohodlí a děje se bez ohledu na to, jestli je zapnuté **Use my details**.

**Opt-in (provenance).** Když exportuješ asset, tvé údaje mohou volitelně jet s sebou jako **provenance** - řádek autora/kreditu vložený do metadat souboru (PNG, PDF, SVG, …) - aby hotový asset mohl říct, kdo ho vytvořil. *Tohle* je to, co řídí **Use my details**: necháš-li ho vypnuté, export pořád ponese atribuci nástroje/platformy „Made with Lolly", ale žádný osobní řádek autora/kontaktu se nevloží. (Stejný opt-in nastavuje autora u dávkových běhů **/pro**.) (Autoři nástrojů: viz [Tvorba nástrojů → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) a [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs Platforma vs Možnosti

Tři věci, které v UI sedí blízko sebe a snadno se pletou:

- **Profile** - *ty* (nebo tvůj tým, nebo role, ve které zrovna jsi): jméno, kontakt, profilovka, tvá uložená práce. Osobní, vázané na zařízení, přenosné jako balíček.
- **Platform** - *značka*: barvy, fonty a globální nastavení, vůči kterým se vykresluje každý nástroj. Sdílené a konzistentní, ne osobní.
- **Capabilities** - *co aplikace umí*: celá sada funkcí a nástroje, které máš k dispozici.

Profil mění, *od koho* asset je; platforma mění, *jak vypadá*; možnosti určují, *co dokážeš vytvořit*.

## Soukromí

Profil se nikdy nikam nepřenáší, nenahrává ani nepoužívá k tvé identifikaci či sledování - není tu co odsouhlasit, jen toto upozornění, abys věděl/a, co se uchovává. Kdykoliv všechno smaž přes **Profile → Clear all my data**. Viz [Zásady ochrany osobních údajů](/info/privacy.html).
