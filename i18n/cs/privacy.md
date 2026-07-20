# Zásady ochrany osobních údajů

*Naposledy aktualizováno: 19. července 2026*

> **Jednoduše řečeno.** Dokumenty, obrázky, videa a soubory, které v Lolly vytvoříš,
> zůstávají na tvém zařízení. Pro běžné používání nejsou žádné účty, samotná aplikace
> nepoužívá žádné cookies a v celém zdrojovém kódu nejsou žádné analytiky ani sledovací
> nástroje - není to ve smyslu "data nepoužíváme", ale skutečně nejsou přítomné ve zdroji.
> Existuje krátký a úplný seznam výjimek, kdy software vůbec komunikuje se sítí, a každá
> z nich je níže popsána konkrétně: co odchází, komu a kdy. Jediná výjimka, která se týká
> čehokoli osobního, je přihlášení, které musíš výslovně sám(a) spustit. Pokud to není
> v tomto dokumentu, tak se to neděje.

## Čeho se tyto zásady týkají

Lolly je open-source software - engine, několik aplikačních shellů (web, desktop,
mobil, CLI) a rozšíření prohlížeče - který může kdokoli provozovat. Tyto zásady mají dvě
části:

- **Samotný software**: co dělá a nedělá s tvými daty, ať běží kdekoli. To je vlastnost
  kódu, takže to platí pro každé nasazení Lolly, ať už naše nebo kohokoli jiného.
- **lolly.tools**, referenční nasazení, které provozuje SUSE: konkrétní volby učiněné při
  provozu jeho volitelných serverových částí (co se loguje, jak dlouho a kým).

Pokud používáš samostatně hostovanou nebo podnikovou instanci Lolly, chování softwaru
níže stále platí, ale za cokoli na straně serveru odpovídá *provozovatel* té instance -
nikoli SUSE: jeho render endpoint, jeho MCP server, jeho certifikační autorita pro
Content Credentials, pokud nějakou provozuje. Zeptej se ho na jeho vlastní zásady; viz
[Adopce a správa](/info/adoption-governance.html) o tom, co provozování Lolly obnáší.

## Aplikace: co zůstává na tvém zařízení

Webový, desktopový a mobilní shell Lolly spouští celý render engine na straně klienta.
Otevření nástroje, vyplnění vstupů, náhled i export se odehrávají na tvém zařízení -
žádný server v tom není a aplikace funguje offline, jakmile se jednou načte.

**Aplikace nenastavuje žádné cookies.** Aby fungovala, uchovává malé množství dat
**pouze na tvém zařízení**, nikdy je nepřenáší:

- **Preference rozhraní** - téma, jazyk, nastavení zvuku, velikost postranního panelu
  a přiblížení, volby řazení a zobrazení, které úvodní tipy jsi už viděl(a) - v
  `localStorage`, aby byly dostupné ještě předtím, než aplikace dokončí načítání.
- **Offline mezipaměť katalogu nástrojů a náhledů assetů**, aby galerie fungovala
  i bez připojení.
- **Lokální počítadla používání** pro statistiky na tvé profilové kartě (kolik exportů,
  které nástroje) - malý omezený blob v `localStorage`, který nikdy nečteme a nikam se
  neodesílá.
- **Tvé vlastní dokumenty, uložené relace, nahrané assety a fonty** - uložené v IndexedDB
  na tvém zařízení, nikdy se nenahrávají a nikdo kromě tebe je nečte.

Nic z toho se nesdílí, neprodává ani nepoužívá k tvé identifikaci či sledování. Není tu
s čím souhlasit, protože žádné sbírání dat neprobíhá - jen toto oznámení, abys věděl(a),
co se uchovává a kde. Kdykoli to všechno smaž pomocí **Profil → Smazat všechna má data**,
nebo vymazáním úložiště stránky v prohlížeči. (Podle směrnice o soukromí a elektronických
komunikacích, čl. 5 odst. 3, ukládání, které je nezbytně nutné pro službu, o kterou jsi
požádal(a), nevyžaduje souhlas - jen transparentnost, což je právě to, čím jsou tento
dokument i oznámení v aplikaci.)

Tvá vlastní záloha těchto dat - balíček `lolly-backup` vytvořený pomocí **Exportovat
a vyrenderovat vše** - je soubor, který si uchováváš a máš pod kontrolou. Nikdy se
nedostane na naše servery, pokud se ho sám(a) nerozhodneš někam odeslat. Viz [Přenos
dat](/info/data-transfer.html).

## Nástroje běžící na zařízení

Některé nástroje - **Strip Hidden Data**, **Compress PDF** a další, které nesou odznak
**"Běží na tvém zařízení"** - pracují se souborem, jenž poskytneš. Soubor se načte do
paměti v tvém prohlížeči, lokálně se zpracuje a nabídne se ti zpět ke stažení. Nikdy se
nenahrává, protože v cestě není žádný server, kam by se nahrával. Tyto utility fungují
offline a jejich výstup nenese žádný náš vodoznak ani metadata - smyslem většiny z nich
je data odebrat a chránit, ne přidávat riziko.

## Když aplikace komunikuje se sítí, v úplnosti

Tabulka níže je úplný seznam všeho, co aplikace přes síť stahuje nebo odesílá. Pokud to
tady není, aplikace to nedělá.

| Co | Co skutečně opouští tvé zařízení | Kdy |
|---|---|---|
| Synchronizace katalogu nástrojů | Nic osobního - požadavek na vlastní veřejný index nástrojů a assetů Lolly | Při spuštění, poté uloženo offline |
| Deklarovaná síťová schopnost nástroje | Cokoli si daný konkrétní nástroj vyžádá (např. dlaždice map) vůči konkrétnímu hostiteli (hostitelům), které si povolí ve svém manifestu | Pouze během používání daného nástroje |
| Google Fonts | Název zvoleného fontu a tvá IP adresa, na fontové servery Googlu | Pouze pokud v editoru značky přidáš Google Font - jednorázové stažení na každý font, poté zůstává na tvém zařízení |
| Kontrola podpisu SEAL | Jediný DNS dotaz na veřejný klíč, vůči doméně uvedené uvnitř kontrolovaného souboru | Pouze pokud Verify najde záznam SEAL v souboru, který kontroluješ - nikdy samotný soubor |
| Modely detektoru pro hloubkovou kontrolu | Nic osobního - jednorázové stažení modelu ze stejného původu (nikoli třetí strana) | Pouze pokud si zvolíš hloubkovou kontrolu ve Verify |
| Vzdálená instance | Cokoli ti servíruje instance, kterou uvedeš, přes stejnou synchronizaci katalogu popsanou výše | Pouze pokud shell výslovně nasměruješ na jiné nasazení Lolly |

Nic z toho neodesílá tvé dokumenty, projekty, relace ani nahrané soubory nikam. Jejich
smyslem je přinášet věci *na* tvé zařízení (nástroje, fonty, modely, veřejný klíč),
nikdy posílat věci *z* něj, s výjimkami výslovně uvedenými v částech níže.

## Hot-link render URL adresy

Samotná aplikace zůstává celá na tvém zařízení. Odděleně, a jen pokud to použiješ,
lolly.tools (a jakákoli samostatně hostovaná instance, která to nechá zapnuté) odpovídá
na **hot-link render URL adresy** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
aby se sdílený odkaz na Lolly mohl zobrazit jako živý obrázek v README, na wiki nebo na
dashboardu. Stažení jedné z těchto URL adres požádá server, aby vyrenderoval **veřejná
data nástrojů a katalogu** se vstupy zapsanými do URL adresy, a to je celá výměna:

- **Žádné účty, žádné cookies, žádný stav.** Endpoint je anonymní; nic se neukládá na
  jednotlivý požadavek a nic na tvém zařízení se nečte. Tvé dokumenty, relace a nahrané
  soubory nikdy neopustí tvůj prohlížeč - v těchto odkazech se vůbec nemohou objevit.
- **Vstupy jsou veřejné už ze své podstaty** - jsou to cokoli, co autor odkazu napsal do
  URL adresy, čitelné kýmkoli, ke komu se odkaz dostane. Nedávej do sdíleného odkazu
  tajné údaje, Lolly nabízí funkci pro šifrování odkazů pro citlivý obsah.
- Odpovědi jsou **ukládány do mezipaměti a limitovány počtem** jako jakýkoli veřejný
  obrázek a označeny `noindex`, aby vyhledávače tvé rendery neindexovaly.

Hostuješ Lolly sám(a) a nechceš veřejnou render plochu? Nastav
`LOLLY_DISABLE_RENDER_GET=1` a každá z těchto URL adres vrátí 404.

## MCP server (volitelný, pro AI agenty)

Lolly lze také oslovit AI agentem přes Model Context Protocol - endpoint provozovaný
provozovatelem (lolly.tools jeden provozuje; kdokoli si může hostovat vlastní, včetně
plně odpojeného od sítě). Sdílí postoj render cesty "žádné účty", plus dva nástroje,
které nutně pracují s bajty souboru:

- **`lolly_transform`** (spuštění utility běžící na zařízení na straně serveru, jménem
  volajícího agenta) a **`lolly_verify`** (kontrola Content Credentials) oba přijímají
  bajty souboru od volajícího. Zpracují se **v procesu, v paměti** a výsledek se vrátí
  v témže volání - soubor se nikdy nezapisuje na disk a nikdy se neukládá poté, co
  požadavek skončí.
- Každý další nástroj - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - pracuje pouze z parametrů (text, čísla, barvy, URL adresy, id
  assetů z katalogu), tedy ze stejných vstupů, jaké přijímá hot-link render URL adresa.
- Přístup je buď sdílený token, který provozovatel vydává klientům, jimž důvěřuje, nebo
  bezstavový OAuth 2.1: krátkodobé podepsané tokeny ověřované proti sdílenému tajemství,
  nic se neukládá na straně serveru a samotný token se nikdy nezapisuje do logu ani do
  render URL adresy.

## Identita Content Credentials (přihlášení, které musíš sám(a) spustit)

Lolly umí do tvých exportů zapečetit kryptografický **Content Credential**, takže kdokoli
může offline ověřit, že soubor je od chvíle, kdy opustil Lolly, nezměněný. To je
**ve výchozím stavu zapnuté a plně lokální** - podpisový klíč se generuje na tvém zařízení,
je **neextrahovatelný** (nemůže ho přečíst ani vlastní kód Lolly) a samotné podepisování
probíhá offline. Tato část se týká jednoho *volitelného* kroku navíc: zaregistrování
ověřené identity, aby tvé exporty říkaly "Ověřeno - podepsal(a) \<tvůj e-mail\>" místo
anonymního klíče. **Pokud registraci přeskočíš, nic z této části se tě netýká a žádná
osobní data nikdy neopustí tvé zařízení.**

Pokud se zaregistruješ, tady je přesně, co se stane:

1. **Zvolíš si způsob přihlášení** - GitHub, Google, SUSE (Okta) nebo e-mailem zaslaný
   odkaz. U tří poskytovatelů OIDC jsi přesměrován(a) na vlastní přihlašovací stránku
   daného poskytovatele, řídící se jeho zásadami ochrany soukromí, nikoli našimi;
   certifikační služba Lolly dostane zpět jen ověřenou e-mailovou adresu a název
   poskytovatele. U e-mailového odkazu se adresa, kterou napíšeš, předá službě **Resend**,
   transakčnímu e-mailovému API, výhradně za účelem doručení toho jednoho odkazu.
2. **Krátkodobá cookie chrání přesměrování.** To je jediná cookie, kterou celý systém
   Lolly nastavuje: `lolly_ca_state`, `HttpOnly`, s rozsahem na `/api/ca`, s platností do
   deseti minut. Nese náhodnou hodnotu, nikoli sledovací identifikátor, a existuje jen
   proto, aby zabránila zfalšování OAuth přesměrování. Vymaže se, jakmile se přihlášení
   dokončí.
3. **Tvá IP adresa se krátce používá k prevenci zneužití** přihlašovacích endpointů (aby
   jeden skript nemohl zaplavit schránku nebo vyčerpat e-mailovou kvótu) - drží se pouze
   v paměti serveru, po klouzavé okno zhruba jedné minuty, nikdy se nezapisuje do logu ani
   nikam neuchovává.
4. **Certifikační služba vydá krátkodobý certifikát** (7, 30, 90 nebo 365 dní, dle tvé
   volby, s horní hranicí danou zásadami provozovatele), který váže tvůj ověřený e-mail
   na veřejnou polovinu páru klíčů vygenerovaného na tvém zařízení. Soukromá polovina
   nikdy neopustí tvůj prohlížeč.
5. **Vydání se loguje**: tvá e-mailová adresa, poskytovatel, kterého jsi použil(a), krátký
   hash sériového čísla certifikátu a datum jeho platnosti se zapíší do provozních logů
   služby - a, jen pokud provozovatel nějaký nakonfiguroval, do webhooku, který má pod
   kontrolou. To je jediné místo, kde se část tvých osobních dat uchovává na serveru,
   a existuje proto, aby bylo možné dohledat kompromitovaný nebo chybně vydaný certifikát
   a aby bylo možné auditovat vlastní vydávání ze strany CA.
6. **Poté je podepisování zase offline** po celou dobu platnosti certifikátu. Export
   souboru nikdy nekontaktuje certifikační službu - to dělala jen registrace.

Konkrétně pro lolly.tools: SUSE provozuje certifikační službu a drží tyto logy vydávání.
Viz [Tvá práva](#your-rights) níže o tom, jak se zeptat na záznam nebo ho odstranit.

## Rozšíření prohlížeče

Rozšíření prohlížeče **Lolly URL Screenshot** nesbírá, neukládá ani nepřenáší žádné osobní
údaje. Žádná analytika, žádné sledování, žádný vzdálený server.

**Co dělá.** Když požádáš webovou aplikaci Lolly, aby vyfotila snímek obrazovky URL
adresy, rozšíření otevře danou stránku v dočasné záložce na pozadí, zachytí ji v tvém
prohlížeči pomocí DevTools Protocol, předá obrázek zpět aplikaci a záložku zavře. Vše se
odehrává lokálně, na tvém vlastním zařízení a síti.

**Údaje.**

- **Nic nesbíráme.** Rozšíření nemá žádné servery a samo neprovádí žádné síťové požadavky.
- **Zachycené obrázky** jdou přímo do aplikace Lolly ve stejném prohlížeči - rozšíření je
  nikdy nenahrává.
- **URL adresy, které zachytíš,** se použijí jen k načtení té jedné stránky pro ten jeden
  snímek. Nejsou zaznamenávány ani sdíleny.

**Oprávnění.**

- **`debugger`** - k zachycení vykreslené stránky pomocí DevTools Protocol (stejný
  mechanismus, jaký používá desktopová aplikace Lolly).
- **`tabs`** - k otevření a zavření dočasné záložky, do které se stránka načítá.
- **Přístup k hostitelům (`<all_urls>`)** - protože stránka, kterou se rozhodneš zachytit,
  může být na jakémkoli webu. Chrome to při instalaci zobrazuje jako široké varování
  o oprávněních; rozšíření navštíví vždy jen tu URL adresu, kterou mu zadáš.

Žádné z nich se nepoužívají ke čtení, sledování ani přenosu tvého prohlížení nad rámec
toho jednoho vyžádaného zachycení.

## Logy infrastruktury

Jako každý web i servery za lolly.tools - a za jakýmkoli nasazením Lolly - generují
standardní přístupové logy webového serveru, kdykoli k nim vůbec dorazí požadavek: IP
adresa, požadovaná cesta, časové razítko, user agent, uchovávané po omezenou dobu kvůli
bezpečnosti a prevenci zneužití. To je základní chování hostingu, ne něco, co Lolly
přidává navíc, a nikdy to neobsahuje obsah tvých dokumentů, protože ty se na server vůbec
nedostanou. Jedinou záměrnou výjimkou je soubor, který výslovně předáš volání MCP
`lolly_transform` nebo `lolly_verify`, jenž se zpracuje v paměti a nikdy se nezapíše na
disk ani do logu, jak je popsáno výše.

## Soukromí dětí

Lolly vědomě nesbírá osobní informace od nikoho, jakéhokoli věku, v běžném průběhu
používání aplikace - není tu co sbírat. Jediné místo, kde se osobní informace (e-mailová
adresa) vůbec shromažďuje, je registrace do Content Credentials, popsaná výše, která není
zaměřena na děti ani pro ně určena.

## Tvá práva

Protože skoro vše, čeho se Lolly dotýká, je uloženo jen na tvém vlastním zařízení, většina
toho, co zákon o ochraně osobních údajů nazývá "tvými právy" - přístup, oprava, výmaz,
přenositelnost - jsou věci, které už můžeš udělat sám(a), okamžitě a bez toho, aby ses
někoho ptal(a): tvá data žijí v úložišti tvého prohlížeče, ve formě, kterou si můžeš
prohlédnout, exportovat (**Exportovat a vyrenderovat vše**, výše) nebo smazat (**Profil →
Smazat všechna má data**).

Pro jedinou část osobních dat, která může skončit na serveru - tvou e-mailovou adresu,
pokud jsi se zaregistroval(a) pro Content Credentials - nás kontaktuj (níže), abys zjistil(a),
co držíme, nebo abys to nechal(a) odstranit z aktivních logů. Odstranění záznamu z logu
neodvolá již vydaný certifikát (ten je záměrně krátkodobý a jednoduše vyprší); zastaví to
jen, aby se ten záznam objevoval v budoucích exportech logu.

Data neprodáváme. Žádná k prodeji nemáme.

## Změny těchto zásad

Datum nahoře se změní pokaždé, když se změní tento dokument. Změna, která mění to, co
opouští tvé zařízení nebo co se uchovává, dostane svůj vlastní řádek zde, ne tichou úpravu -
pokud chceš vidět, co se změnilo, zeptej se (níže) nebo porovnej s [veřejným zdrojem](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontakt

Otázky nebo žádost podle "Tvá práva" výše: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). U samostatně hostované nebo podnikové instance
Lolly kontaktuj toho, kdo ji provozuje - SUSE ani open source projekt Lolly nedrží žádná
data pro nasazení, která neprovozují.
