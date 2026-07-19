# Lolly pro operátory

### Vícevrstvá (defence-in-depth) bezpečnostní a zpravodajská strategie - která je jen shodou okolností kreativní produkční platformou

Zero-trust organizační imunitní systém, který obepíná to, co už děláš - takže běžná kreativní práce, kterou tvé týmy potřebují každý den, probíhá *uvnitř* tvého perimetru místo toho, aby z něj unikala.

**Co z toho budeš mít.** Staneš se tím, kdo řekl ano něčemu, co je zároveň bezpečné *i* oblíbené. Jedním tahem uzavřeš díru pro únik dat, získáš novou schopnost a zrušíš frontu požadavků - vzácné bezpečnostní vítězství, díky kterému tě budou mít radši, ne míň. Žádný telefonát ve 3 ráno od právního oddělení kvůli tomu, že se embargované soubory nebo data zákazníků dostaly do náhodného webového nástroje; méně SaaS dodavatelů, smluv a auditů na tvém stole; a plně reprodukovatelný audit trail, na který můžeš ukázat, když se někdo zeptá. Budeš spát klidněji a zpříjemníš tím pár dní.

Lolly není žádný kreativní nástroj druhé kategorie: dává produkčně kvalitní výstup do rukou každému a zážitek z tvorby vedené brandem nemá konkurenci. Důvod, proč je bezpečné rozdat ho tak široko, je ale architektonický: nic se nenahrává, co jsi tam sám nevložil, každý výsledek je reprodukovatelný a každý export může nést hned několik vrstev špičkových kryptografických záznamů. Bez ohledu na to, jak se dokument dostal na tvůj stůl, uvidíš jeho úplný původ, jestli s ním bylo manipulováno a jestli ho dokážeš znovu vytvořit pixel po pixelu.

> **Kde to stojí dnes.** Bezpečnostní vlastnosti Lolly jsou silné už ze své podstaty a jeho kryptografické a souborové parsovací enginy procházejí infrastrukturním hardeningem na enterprise úrovni od SUSE. Pečetě, podepisování na zařízení a šifrování popsané níže jsou reálné a obhajitelné už teď a dozrávají směrem k nezávislé certifikaci - takže tam, kde smlouva vyžaduje certifikované ujištění, nasaď je jako vícevrstvou ochranu (defence-in-depth), zatímco tento proces probíhá.

## Strategická výhoda

Obvyklý způsob, jakým se běžná kreativní práce dělá, je jedna velká riziková plocha: soubory posílané e-mailem externím designovým dodavatelům, brandové assety nahrávané do desítky SaaS editorů, data zákazníků vkládaná do cizího webového nástroje jen proto, aby vznikla „rychlá grafika". Každý z těchto případů znamená data, která opouštějí tvou kontrolu.

Lolly to obrací naruby. Práce, která tyhle úniky *způsobovala* - citátová karta, lokalizovaný banner, jmenovka na akci, začerněný screenshot - teď probíhá v nástroji, který běží přímo na zařízení zaměstnance, proti tvému brandu, bez jakéhokoli serveru mezi tím. Nepřidal jsi kontrolu na vrchol rizikového procesu; nahradil jsi rizikový proces takovým, který od začátku žádnou cestu k úniku dat nemá.

- **Konfigurace je tvoje.** Engine a shelly jsou open source (MPL-2.0). Nasaď si vlastní autentizaci, telemetrii nebo CA; hostuj to, nebo ne; máš plnou kontrolu nad funkcemi i náklady, sledovanou v gitu, ne uzamčenou v SaaS databázi.
- **Governance může být data, ne dashboard.** Když tuhle kontrolu chceš, spravuj katalog nástrojů jako Git repozitář - review pull requestů se stává schvalováním brandu, s kompletním audit trailem a okamžitým rollbackem každé šablony, ke které se tví lidé mohou dostat. Je to možnost, ne povinnost: týmy, které chtějí prostě jen tvořit, si své vlastní nástroje autorsky vytvoří v Layout Studiu a nahrají si vlastní soubory do katalogu, celé v aplikaci, a gitu se nikdy ani nedotknou. Viz [Zavádění a governance](/info/adoption-governance.html).
- **Mantinely jsou strukturální.** Brandová omezení jsou napevno zakódovaná v šablonách, ne publikovaná jako doporučení, která se dají ignorovat. Špatný výstup není jen nedoporučený - je nevytvořitelný.

## Zruš frontu požadavků a přitom množ obsah.

Jedním z cílů Lolly je **odklánění designových požadavků** (design-request deflection): běžné požadavky, které se vůbec nemusí dostat k designérovi, protože si člověk, který asset potřeboval, ho udělal sám, správně, během pár minut. Každý odkloněný tiket je zároveň zvýšením produktivity i jedním souborem méně, který mezi lidmi putuje.

Lolly je postavený tak, aby seděl na to, jak tvoje organizace skutečně funguje - neexistuje jediný správný způsob, jak ho nasadit:

- **Nasaď, neservíruj.** Distribuuj Lolly na zařízení přes tvůj stávající MDM (Intune, Jamf, Munki…). Běží lokálně jako desktopová/mobilní aplikace nebo offline PWA - funguje za jakýmkoli firewallem, v jakémkoli air-gapped prostředí, bez serveru, který by se musel udržovat, a s IT oddělením, které má tempo aktualizací plně pod kontrolou.
- **Jen servíruj.** Spusť jednu instanci uvnitř své sítě (nebo za VPN); uživatelé se k ní dostanou přes prohlížeč, nic se neinstaluje. Publikuješ nástroj jednou a všichni ho mají okamžitě k dispozici; napoj to na svůj IdP pro kontrolu přístupu.
- **Hybridně.** Lokální aplikace pro offline práci v terénu, vždy aktuální verze v prohlížeči pro vypůjčené počítače - obě míří na stejnou knihovnu nástrojů.

Kompletní přehled modelů nasazení a administrace najdeš v sekcích [Nasazení](/info/deployment.html) a [Konfigurace](/info/configuration.html).

## Utility proti úniku dat

Jedna kategorie nástrojů Lolly - utility na ochranu soukromí - existuje *výslovně* proto, aby soubory zůstávaly uvnitř perimetru.

- **Odstranění skrytých dat**  
Odstraní polohu a všechny skryté identifikující informace z dokumentů a mediálních souborů.

- **Textový pomocník**  
Anonymizuj, kóduj, formátuj a uprav strukturovaný i nestrukturovaný text.

- **Komprese PDF**  
Zmenši předimenzované PDF přímo na zařízení, takže nikdo nesáhne po webu třetí strany na „zkomprimování mého PDF" ve chvíli, kdy je soubor na e-mail moc velký - a přesně tam data unikají z okna.

Všechny tyto nástroje jsou transformace přímo na zařízení: vstoupí tvůj soubor nebo data, vystoupí vyčištěné bajty a **není žádný server, kam by se něco nahrávalo**. Jsou záměrným opakem typického nástroje typu „nahraj svůj soubor na cizí web a necháme ho vyčistit", po kterém by jinak sáhl dobře míněný zaměstnanec.

## Determinismus a reprodukovatelnost

Každý vstup nástroje lze vyjádřit jako parametr URL a stejné vstupy vytvoří stejný soubor. To má pro provozní tým dva důsledky:

- **URL je ten artefakt.** Commitni odkaz, asset si vygeneruj znovu podle potřeby - žádné binárky commitnuté do Gitu, žádné honění se za „poslední verzí" v chatu. ID assetů a nástrojů jsou trvalý kontrakt, takže odkaz vytvořený dnes bude fungovat i později.
- **CLI používá stejnou vykreslovací cestu** jako GUI, takže se build pipeline a aplikace nikdy nerozejdou. Generuj OG obrázky, karty na sociální sítě a datové vizualizace při buildu, reprodukovatelně.

## Ověřování původu a Content Credentials

Exporty mohou nést **Content Credentials** - podepsaný manifest [C2PA](https://c2pa.org) svázaný s hashem bajtů souboru. Jakákoli pozdější změna souboru poruší pečeť, takže ověřovatel podporující C2PA **odhalí úpravu kryptograficky, offline**. Pověření je tamper-*evident* (prokazatelně narušitelné): manipulaci spíš označí, než aby jí zabránilo, což je přesně to, co umožňuje plně offline ověření.

- **Ve výchozím stavu zapnuto, přímo na zařízení.** Podpisový klíč se generuje na zařízení, nedá se z něj extrahovat (ani Lolly ho nedokáže přečíst) a podepisování probíhá lokálně - sítě se dotkne jedině volitelná *registrace* identity.
- **Úrovně důvěry.** Neregistrovaný export je strukturálně platný, ale podepsaný anonymně (`untrusted`). Zaregistruj si **ověřenou identitu** (krátkodobý certifikát od Lolly CA, navázaný na e-mail) a ověřovatelé, kteří pinují kořenový certifikát Lolly, nahlásí `trusted` + e-mail podepisující osoby. Důvěryhodná časová autorita a zelené hodnocení od validátoru třetí strany (shoda s C2PA) jsou na roadmapě. Každá úroveň je explicitní a soubor si nikdy nenárokuje víc důvěry, než dokáže prokázat.
- **Platnost pověření** je na rozhodnutí operátora/uživatele v okamžiku podepisování: 7 / 30 / 90 / 365 dní, výchozí je 30.
- **Lolly Imprint.** Druhý, doplňkový signál, který je **ve výchozím stavu zapnutý**: neviditelný pixelový vodoznak zapečený do rastrových exportů (a do rastrů, které vykreslila Lolly uvnitř PDF/PPTX, nikdy do vlastního vloženého obrázku uživatele). Zatímco pověření zanikne při jakékoli změně kontejneru, Imprint přežije opětovné uložení nebo screenshot - trvalá stopa „tyhle pixely prošly Lolly", jen přítomnost, žádná osobní data. Je to security-through-obscurity, ne tvrdá ochrana, a doplňuje pověření, místo aby ho nahrazoval. Vypnout ho jde přes `imprint=0`.
- **Durable Content Credentials (volitelné).** Rastrový export může navíc nést neviditelnou *durable* značku, která kóduje identifikátor soft-bindingu, takže pověření C2PA lze obnovit i poté, co nahrání na sociální síť nebo opětovné uložení odstranilo metadata souboru - tedy přesně v případě, kdy by běžné pověření bylo ztraceno. Funguje jen pro rastry a stojí neuronový enkódovací průchod navíc, takže je ve výchozím stavu vypnutá (zapneš ji přes `durable=1`). Lolly dnes rozpozná vlastní durable značku offline na `/verify`; obnovení nástroji třetích stran (např. Adobe) bude následovat, jakmile bude hotové odvětvové řešení pro soft-binding.
- **Ověřování probíhá na zařízení.** Přetáhni jakýkoli soubor na `/verify` (nebo `lolly validate <file>`) a získáš offline zprávu o tom, jestli byl opravdu vytvořen v Lolly a od té doby nezměněn. Webové zobrazení Verify navíc označí AI generovaný obsah, detekuje Lolly Imprint, ověří podpisy **SEAL** (podpis na úrovni bajtů zakotvený v DNS - jediný dotek sítě je vyhledání klíče v DNS, nikdy samotný soubor), volitelně hloubkově proskenuje soubor na vodoznaky třetích stran (jednorázové stažení modelu přímo na zařízení) a odhalí skrytá data - to všechno bez nahrávání souboru kamkoli. Viz [Identita Content Credentials](/info/content-credentials-identity.html).

> **Poznámky k interoperabilitě.** Lolly dnes offline ověří svá vlastní pověření i řadu pověření třetích stran, včetně čtení manifestů C2PA claim **v2** od jiných tvůrců. Jedna položka pro interoperabilitu ještě zbývá: WebM - pro který zatím neexistuje standardizované mapování C2PA, takže Lolly připojuje manifest jako část Matroska (nástroje třetích stran ověří Lolly MP4 rovnou; WebM bude následovat, jakmile se standard ustálí).

## Šifrování a heslování

Pro soubory, které musí cestovat uzamčené, se všechno odehrává přímo na zařízení:

- **Heslo pro otevření PDF** - *Standardní* je 40bitová RC4 překážka (dá se odemknout kdekoli, může cestovat v odkazu); *Silné* je **AES-256** (PDF 2.0), zadává se při exportu a nikdy nekončí v odkazu.
- **Uzamčená stažení** - ZIP, složka Projects nebo dávkový běh (batch run) se dají uzamknout celé: *Standardní* ZipCrypto (slabé, univerzální) nebo *Silné* **AES-256** (WinZip AE-2). Vícevrstvá ochrana (defence-in-depth): jakékoli PDF uvnitř Silného zipu je *navíc* individuálně uzamčené AES-256, takže zůstane uzamčené i po rozbalení.
- **Sdílené odkazy chráněné heslem** - celý stav odkazu je zašifrovaný AES-256 pod klíčem odvozeným pomocí PBKDF2; cestuje jen šifrovaný text, heslo nikdy není součástí odkazu a dešifrování probíhá v prohlížeči příjemce.

## Připraveno na air-gap

Air-gap je **plnohodnotné nasazení**, ne zvláštní režim - Lolly běží bez sítě v okamžiku renderování rovnou po vybalení. Webový shell je offline-first PWA (service worker); fonty a WASM jsou uložené přímo na zařízení; stav nástroje se ukládá lokálně přes host bridge, nikdy ne přes `localStorage`. Jakýkoli nástroj, který se dostává do sítě, tak dělá jedině přes **allowlistovanou** schopnost `host.net`, kterou musí deklarovat ve svém manifestu - shell, který ji neumí (nebo nechce) naplnit, ji nahradí prázdnou implementací (stub). Distribuuj shelly na zařízení přes svůj MDM, nebo spusť jednu instanci uvnitř své sítě, a plně air-gapped instalace renderuje, exportuje, šifruje a ověřuje pověření, aniž by měla kam „zavolat domů".

## Dobré vědět

Pár věcí, které je dobré mít ujasněné, než to nasadíš:

- **Hardening probíhá.** Kryptografie a parsery procházejí hardeningem na enterprise úrovni od SUSE (viz výše) - dnes silné už ze své podstaty; tam, kde smlouva vyžaduje certifikované ujištění, nasaď je jako vícevrstvou ochranu.
- **Hooky nástrojů *nejsou* bezpečnostní sandbox.** Volitelný `hooks.js` nástroje běží s vloženým host bridge, ale v prohlížečovém shellu se vykonává v realmu stránky a *může* se dostat na `window`/`document`/`fetch`. Ke kódu nástroje přistupuj stejně jako ke každému kódu, který spouštíš - zkontroluj ho. Proto může organizace, která provozuje sdílený katalog, hlídat přístup přes Git review; ať tak či onak, spouštěj jen nástroje, které jsi zkontroloval, dokud nedorazí izolace přes Worker.
- **Content Credentials jsou tamper-evident.** Manipulaci spíš odhalí, než aby jí zabránily - viz poznámky k interoperabilitě výše.
- **Dvě úrovně šifrování.** Zámky *Standardní* jsou rychlé, univerzální odstrašující prostředky; *Silné* (AES-256) je plná ochrana - po Silném sáhni u čehokoli citlivého, s tím, že chce moderní čtečku.

## Kam pokračovat dál

- **[Zavádění a governance](/info/adoption-governance.html)** - persony, metrika odklánění požadavků a governance-jako-data v plné šíři.
- **[Nasazení](/info/deployment.html)** - deploy/serve/hybrid, MDM a self-hosting služeb.
- **[Konfigurace](/info/configuration.html)** - profily, brand packy, řízení přístupu ke schopnostem (capability gating) a feature flagy.
- **[Zásady ochrany osobních údajů](/info/privacy.html)** - formální prohlášení „nic nesbíráme, nic nenahráváme".
