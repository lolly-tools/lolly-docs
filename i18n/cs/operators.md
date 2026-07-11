# Lolly pro operátory

**Do budoucna odolná, vícevrstvá strategie prevence úniku dat (DLP) a ověřování původu, která se tváří jako kreativní platforma.**

Organizační imunitní systém, který obepíná to, co už děláš — takže běžná kreativní práce, kterou tvé týmy potřebují každý den, probíhá *uvnitř* tvého perimetru místo toho, aby z něj unikala.

**Co z toho budeš mít.** Staneš se tím, kdo řekl ano něčemu, co je zároveň bezpečné *i* oblíbené. Jedním tahem uzavřeš díru pro únik dat a zrušíš frontu designových požadavků — vzácné bezpečnostní vítězství, díky kterému tě budou mít radši, ne míň. Žádný telefonát ve 3 ráno kvůli tomu, že někdo poslal brandové soubory externímu dodavateli e-mailem nebo vložil data zákazníků do náhodného webového nástroje; méně SaaS dodavatelů, smluv a auditů na tvém stole; a kompletní git historie, na kterou můžeš ukázat, když se někdo zeptá, kdo co schválil. Budeš spát klidně.

Lolly si své místo jako kreativní nástroj zaslouží: ruší frontu designových požadavků a dává produkčně kvalitní výstup do rukou každému. Důvod, proč je bezpečné rozdat ho tak široko, je ale architektonický. Nic se nenahrává, všechno je reprodukovatelné a každý export může nést kryptografický záznam o svém původu. Tahle stránka je příběh o bezpečnosti a nasazení.

> **Na rovinu hned na začátku.** Bezpečnostní vlastnosti Lolly jsou silné *už ze své podstaty* a jeho kryptografické a souborové parsovací enginy právě procházejí přísným infrastrukturním hardeningem SUSE, který je připravuje na enterprise měřítko — v tomhle jsme opravdu dobří. Pečetě, podepisování na zařízení a šifrování popsané níže jsou reálné a obhajitelné; dokud hardening neproběhne, ber je jako vícevrstvou ochranu (defence-in-depth), ne jako certifikovanou kontrolu tam, kde je smluvně vyžadováno nezávislé ověření. Radši ti to řekneme rovnou.

## Strategická výhoda

Obvyklý způsob, jakým se běžná kreativní práce dělá, je jedna velká riziková plocha: soubory posílané e-mailem externím designovým dodavatelům, brandové assety nahrávané do desítky SaaS editorů, data zákazníků vkládaná do cizího webového nástroje jen proto, aby vznikla „rychlá grafika". Každý z těchto případů znamená data, která opouštějí tvou kontrolu.

Lolly to obrací naruby. Práce, která tyhle úniky *způsobovala* — citátová karta, lokalizovaný banner, jmenovka na akci, začerněný screenshot — teď probíhá v nástroji, který běží přímo na zařízení zaměstnance, proti tvému brandu, bez jakéhokoli serveru mezi tím. Nepřidal jsi kontrolu na vrchol rizikového procesu; nahradil jsi rizikový proces takovým, který od začátku žádnou cestu k úniku dat nemá.

- **Konfigurace je tvoje.** Engine a shelly jsou open source (MPL-2.0). Nasaď si vlastní autentizaci, telemetrii nebo CA; hostuj to, nebo ne; máš plnou kontrolu nad funkcemi i náklady, sledovanou v gitu, ne uzamčenou v SaaS databázi.
- **Governance je data, ne dashboard.** Katalog nástrojů je jediný zdroj pravdy, spravovaný jako Git repozitář — review pull requestů *je* moderace a máš kompletní audit trail i okamžitý rollback každé šablony, ke které se tví lidé mohou dostat. Viz [Zavádění a governance](/info/adoption-governance.html).
- **Mantinely jsou strukturální.** Brandová omezení jsou napevno zakódovaná v šablonách, ne publikovaná jako doporučení, která se dají ignorovat. Špatný výstup není jen nedoporučený — je nevytvořitelný.

## Zruš frontu požadavků a přitom množ obsah.

Jedním z cílů Lolly je **odklánění designových požadavků** (design-request deflection): běžné požadavky, které se vůbec nemusí dostat k designérovi, protože si člověk, který asset potřeboval, ho udělal sám, správně, během pár minut. Každý odkloněný tiket je zároveň zvýšením produktivity i jedním souborem méně, který mezi lidmi putuje.

Lolly je postavený tak, aby seděl na to, jak tvoje organizace skutečně funguje — neexistuje jediný správný způsob, jak ho nasadit:

- **Nasaď, neservíruj.** Distribuuj Lolly na zařízení přes tvůj stávající MDM (Intune, Jamf, Munki…). Běží lokálně jako desktopová/mobilní aplikace nebo offline PWA — funguje za jakýmkoli firewallem, v jakémkoli air-gapped prostředí, bez serveru, který by se musel udržovat, a s IT oddělením, které má tempo aktualizací plně pod kontrolou.
- **Jen servíruj.** Spusť jednu instanci uvnitř své sítě (nebo za VPN); uživatelé se k ní dostanou přes prohlížeč, nic se neinstaluje. Publikuješ nástroj jednou a všichni ho mají okamžitě k dispozici; napoj to na svůj IdP pro kontrolu přístupu.
- **Hybridně.** Lokální aplikace pro offline práci v terénu, vždy aktuální verze v prohlížeči pro vypůjčené počítače — obě míří na stejnou knihovnu nástrojů.

Kompletní přehled modelů nasazení a administrace najdeš v sekcích [Nasazení](/info/deployment.html) a [Konfigurace](/info/configuration.html).

## Utility proti úniku dat

Existuje kategorie nástrojů Lolly, která je *výslovně* určená k tomu, aby soubory zůstaly uvnitř perimetru. Utility na ochranu soukromí.


- **Odstranění skrytých dat**
 Odstraní polohu a všechny skryté identifikující informace z dokumentů a mediálních souborů.

- **Textový pomocník**  
Anonymizuj, kóduj, formátuj a uprav strukturovaný i nestrukturovaný text. 

- **Komprese PDF**
Zabraň riziku „krize s limitem na e-mail", kdy číhají nástroje třetích stran a data 

- **Komprese PDF**
Zabraň riziku „krize s limitem na e-mail", kdy číhají nástroje třetích stran a data unikají pryč z okna. 

Všechny tyto nástroje jsou transformace přímo na zařízení: vstoupí tvůj soubor nebo data, vystoupí vyčištěné bajty a **není žádný server, kam by se něco nahrávalo**. Jsou záměrným opakem typického nástroje typu „nahraj svůj soubor na cizí web a necháme ho vyčistit", po kterém by jinak sáhl dobře míněný zaměstnanec.



## Determinismus a reprodukovatelnost

Každý vstup nástroje lze vyjádřit jako parametr URL a stejné vstupy vytvoří stejný soubor. To má pro provozní tým dva důsledky:

- **URL je ten artefakt.** Commitni odkaz, asset si vygeneruj znovu podle potřeby — žádné binárky commitnuté do Gitu, žádné honění se za „poslední verzí" v chatu. ID assetů a nástrojů jsou trvalý kontrakt, takže odkaz vytvořený dnes bude fungovat i později.
- **CLI používá stejnou vykreslovací cestu** jako GUI, takže se build pipeline a aplikace nikdy nerozejdou. Generuj OG obrázky, karty na sociální sítě a datové vizualizace při buildu, reprodukovatelně.

## Ověřování původu a Content Credentials

Exporty mohou nést **Content Credentials** — podepsaný manifest [C2PA](https://c2pa.org) svázaný s hashem bajtů souboru. Tohle **manipulaci *odhalí*, ale *nezabrání* jí**: nezabrání to nikomu v úpravě souboru, ale jakákoli pozdější změna poruší pečeť a ověřovatel podporující C2PA to nahlásí. To je ta poctivá a užitečná vlastnost — manipulaci dokážeš *odhalit*, kryptograficky, offline.

- **Ve výchozím stavu zapnuto, přímo na zařízení.** Podpisový klíč se generuje na zařízení, nedá se z něj extrahovat (ani Lolly ho nedokáže přečíst) a podepisování probíhá lokálně — sítě se dotkne jedině volitelná *registrace* identity.
- **Úrovně důvěry.** Neregistrovaný export je strukturálně platný, ale podepsaný anonymně (`untrusted`). Zaregistruj si **ověřenou identitu** (krátkodobý certifikát od Lolly CA, navázaný na e-mail) a ověřovatelé, kteří pinují kořenový certifikát Lolly, nahlásí `trusted` + e-mail podepisující osoby. Důvěryhodná časová autorita a zelené hodnocení od validátoru třetí strany (shoda s C2PA) jsou na roadmapě, zatím nejsou dodané — úrovně jsou označené poctivě a soubor nikdy neukáže falešnou zelenou.
- **Platnost pověření** je na rozhodnutí operátora/uživatele v okamžiku podepisování: 7 / 30 / 90 / 365 dní, výchozí je 30.
- **Ověřování probíhá na zařízení.** Přetáhni jakýkoli soubor na `/valid` (nebo `lolly validate <file>`) a získáš offline zprávu o tom, jestli byl opravdu vytvořen v Lolly a od té doby nezměněn. Viz [Identita Content Credentials](/info/content-credentials-identity.html).

> **Známá mezera, řečeno na rovinu:** Ověřovatel Lolly zatím plně nečte manifesty C2PA verze **v2** od jiných tvůrců; a WebM nese manifest jako přílohu Matroska (pro WebM zatím neexistuje standardizované mapování C2PA), takže nástroje třetích stran ověří Lolly MP4, ale ne jeho WebM.

## Šifrování a heslování

Pro soubory, které musí cestovat uzamčené, se všechno odehrává přímo na zařízení:

- **Heslo pro otevření PDF** — *Standardní* je 40bitová RC4 překážka (dá se odemknout kdekoli, může cestovat v odkazu); *Silné* je **AES-256** (PDF 2.0), zadává se při exportu a nikdy nekončí v odkazu.
- **Uzamčená stažení** — ZIP, složka Projects nebo dávkový běh (batch run) se dají uzamknout celé: *Standardní* ZipCrypto (slabé, univerzální) nebo *Silné* **AES-256** (WinZip AE-2). Vícevrstvá ochrana (defence-in-depth): jakékoli PDF uvnitř Silného zipu je *navíc* individuálně uzamčené AES-256, takže zůstane uzamčené i po rozbalení.
- **Sdílené odkazy chráněné heslem** — celý stav odkazu je zašifrovaný AES-256 pod klíčem odvozeným pomocí PBKDF2; cestuje jen šifrovaný text, heslo nikdy není součástí odkazu a dešifrování probíhá v prohlížeči příjemce.

## Připraveno na air-gap

Lolly je navržený tak, aby běžel **bez sítě v okamžiku renderování**. Webový shell je offline-first PWA (service worker); fonty a WASM jsou uložené přímo na zařízení; stav nástroje se ukládá lokálně přes host bridge, nikdy ne přes `localStorage`. Jakýkoli nástroj, který se potřebuje dostat do sítě, tak dělá jedině přes **allowlistovanou** schopnost `host.net`, kterou musí deklarovat ve svém manifestu — shell, který ji neumí (nebo nechce) naplnit, ji nahradí prázdnou implementací (stub). Takže plně air-gapped instalace renderuje, exportuje, šifruje a ověřuje pověření, aniž by měla kam „zavolat domů".

## Co musíš vědět, než se na to spolehneš

Operátoři si zaslouží nejen tvrzení, ale i výhrady:

- **Hardening pro enterprise měřítko.** Jak už bylo řečeno na začátku — kryptografie a parsery právě procházejí přísným infrastrukturním hardeningem SUSE pro enterprise měřítko; jsou silné už ze své podstaty, ber je ale jako vícevrstvou ochranu tam, kde je smluvně vyžadováno nezávislé ověření.
- **Hooky nástrojů *nejsou* bezpečnostní sandbox.** Volitelný `hooks.js` nástroje běží s vloženým host bridge, ale v prohlížečovém shellu se vykonává v realmu stránky a *může* se dostat na `window`/`document`/`fetch`. Ke kódu nástroje přistupuj stejně jako ke každému kódu, který spouštíš — zkontroluj ho. Proto záleží na modelu „katalog jako Git review" a proto by se nedůvěryhodné nástroje třetích stran neměly spouštět, dokud nedorazí izolace přes Worker.
- **C2PA odhalí manipulaci, ale nezabrání jí**, a mezery zmíněné výše u čtení v2 a u WebM jsou reálné.
- **Úrovně šifrování se liší.** Zámky *Standardní* jsou jen odstrašující; skutečnou ochranou je jedině *Silné* (AES-256), a Silné soubory se neotevřou v každé starší čtečce.

## Kam pokračovat dál

- **[Zavádění a governance](/info/adoption-governance.html)** — persony, metrika odklánění požadavků a governance-jako-data v plné šíři.
- **[Nasazení](/info/deployment.html)** — deploy/serve/hybrid, MDM a self-hosting služeb.
- **[Konfigurace](/info/configuration.html)** — profily, brand packy, řízení přístupu ke schopnostem (capability gating) a feature flagy.
- **[Zásady ochrany osobních údajů](/info/privacy.html)** — formální prohlášení „nic nesbíráme, nic nenahráváme".
