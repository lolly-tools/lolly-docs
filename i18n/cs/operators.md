# Lolly pro provozovatele

### Strategie obrany do hloubky pro bezpečnost a intelligence - která shodou okolností je i platforma pro kreativní produkci

Zero-trust organizační imunitní systém, který obepíná to, co už děláte - takže rutinní kreativní práce, kterou vaše týmy potřebují každý den, probíhá *uvnitř* vašeho perimetru, místo aby z něj unikala.

**Co z toho máte vy.** Stanete se člověkem, který řekl ano něčemu bezpečnému *i* oblíbenému. Uzavřete cestu k úniku dat, získáte schopnost a jedním tahem zrušíte frontu požadavků - vzácná bezpečnostní výhra, díky které jste oblíbenější, ne méně. Žádný telefonát od právního oddělení ve tři ráno kvůli tomu, že embargované soubory nebo data zákazníků skončily v náhodném webovém nástroji; méně SaaS dodavatelů, smluv a auditů na vašem stole; a plně reprodukovatelná auditní stopa, na kterou můžete ukázat, když se někdo zeptá. Spíte lépe a pár dní tím i zpříjemníte.

Lolly není druhořadý kreativní nástroj: dává výstup produkční kvality do rukou každého a jeho zážitek tvorby vedený značkou nemá konkurenci. Důvod, proč je *bezpečné* ho rozdat široce, je architektonický: nic se nenahraje, co jste tam nedali sami, každý výsledek je reprodukovatelný a každý export může nést více vrstev kryptografických záznamů na úrovni oborového standardu. Bez ohledu na to, jak se dokument dostal na váš stůl, vidíte jeho úplný původ, zda s ním bylo manipulováno a zda ho dokážete znovu vytvořit pixel po pixelu.

> **Současný stav.** Bezpečnostní vlastnosti Lolly jsou už z návrhu silné a její kryptografická a soubor-parsovací jádra procházejí utužováním infrastruktury na podnikové úrovni SUSE. Níže uvedené pečetě, podepisování na zařízení a šifrování jsou reálné a obhajitelné už teď a dozrávají směrem k nezávislé certifikaci - takže tam, kde smlouva vyžaduje certifikovanou záruku, je nasaď jako obranu do hloubky, dokud tento proces neskončí.

## Strategická výhoda

Obvyklý způsob, jakým se dělá rutinní kreativní práce, je plocha rizika: soubory posílané mailem externím designovým dodavatelům, brandové assety nahrávané do desítky SaaS editorů, data zákazníků vkládaná do cizího webového nástroje, aby se "jen rychle udělala grafika". Každá z těchto věcí je data opouštějící vaši kontrolu.

Lolly to obrací. Práce, která *poháněla* tyto úniky - citátová karta, lokalizovaný banner, jmenovka na akci, redigovaný screenshot - teď probíhá v nástroji, který běží na vlastním zařízení zaměstnance, proti vaší značce, bez serveru v cestě. Nepřidali jste kontrolu nad rizikovým workflow; nahradili jste rizikový workflow takovým, který od základu nemá cestu k úniku dat.

- **Konfigurace patří tobě.** Jádro a shelly jsou open source (MPL-2.0). Nasaď si vlastní autentizaci, telemetrii nebo CA; hostuj to nebo ne; máš plnou kontrolu nad funkcemi a náklady, sledovanou v gitu, ne zamčenou v databázi SaaS.
- **Správa může být data, ne dashboard.** Když tuhle kontrolu chceš, spravuj katalog nástrojů jako Git repozitář - kontrola pull requestu se stane schválením značky, s úplnou auditní stopou a okamžitým vrácením každé šablony, ke které má tvůj tým přístup. Je to volba, ne povinnost, a patří přesně na jeden stůl: tvůrci pracují celé v appce, ukládají to, co vytvoří, jako **relaci** a předávají to dál jako odkaz ke sdílení, zálohu nebo živou spolupráci - nic z toho git nepotřebuje. Když si jedna z těch relací zaslouží stát se trvalým výchozím bodem, kdokoli spravuje nasazení, otevře odkaz, zapíše její hodnoty jako **šablonu** u toho nástroje v balíčku značky a commitne. Od té chvíle se objevuje ve výběru "New from template" u toho nástroje a lze na ni přímo odkázat jako `?template=<id>`. Git je uzamykací krok administrátora, použitý jednou, a nikdy něco, čeho by se musel dotýkat tvůrce. Viz [Přijetí a správa](/info/adoption-governance.html).
- **Zábrany jsou strukturální.** Omezení značky jsou napevno zakódovaná do šablon, ne publikovaná jako pokyny, které lze ignorovat. Špatný výstup není odrazován - je nezobrazitelný.

> **Řídíš celou štafetu.** Kreativec autoruje pravidla a vývojář je škáluje, ale bezpečný provoz v rámci celé organizace zajišťuje operátor - stejný nástroj, který dovolí obchodnímu zástupci si poradit sám v letadle, je ten, který můžeš zgatovat přes Git review, nasadit přes svůj MDM a kryptograficky ověřit. Podívej se, jak se role sčítají v [Životní cyklus kampaně](/info/overview.html#the-lifecycle-of-a-campaign), a jak to řídíš v [Adopce a governance](/info/adoption-governance.html).

## Smaž frontu požadavků a přitom množ obsah.

Jedním z cílů Lolly je **odklon požadavků na design**: rutinní požadavky, které nikdy nemusí dorazit k designérovi, protože si člověk, který asset potřeboval, ho vytvořil sám, správně, za pár minut. Každý odkloněný tiket je zároveň zisk produktivity a o jeden soubor méně, který mění majitele.

Lolly je postavená tak, aby seděla na to, jak tvoje organizace skutečně funguje - neexistuje jeden správný způsob nasazení:

- **Nasaď, neservíruj.** Dodej Lolly na zařízení přes svůj stávající MDM (Intune, Jamf, Munki…). Běží lokálně jako desktopová/mobilní aplikace nebo offline PWA - funguje za jakýmkoli firewallem, v jakémkoli air-gapped prostředí, bez serveru k údržbě, s IT plně v kontrole nad tempem aktualizací.
- **Jen servíruj.** Spusť jednu instanci ve své síti (nebo za VPN); uživatelé se k ní dostanou přes prohlížeč, nic se neinstaluje. Publikuj nástroj jednou a má ho každý okamžitě; napoj na svého IdP pro kontrolu přístupu.
- **Hybrid.** Lokální aplikace pro offline práci v terénu, vždy aktuální verze v prohlížeči pro vypůjčené počítače - obojí míří na stejnou knihovnu nástrojů.

Kompletní modely nasazení a průvodce administrací najdeš v [Nasazení](/info/deployment.html) a [Konfigurace](/info/configuration.html).

## Nástroje proti exfiltraci

Kategorie nástrojů Lolly - utility na ochranu soukromí - existuje *přímo za tím účelem*, aby soubory udržela uvnitř perimetru.


- **Strip hidden data**
 Odstraní polohu a všechny skryté identifikující informace z dokumentů a mediálních souborů.

- **Text Helper**  
Anonymizuje, kóduje, formátuje a upravuje strukturovaný i nestrukturovaný text. 

- **Compress PDF**
Zmenší předimenzované PDF přímo na zařízení, aby nikdo v okamžiku, kdy je soubor moc velký na e-mail, nesáhl po webu třetí strany typu "zkomprimuj mi PDF" - což je přesně místo, kudy data utíkají ven oknem. 

Všechny tyto jsou transformace přímo na zařízení: vstoupí tvůj soubor nebo data, vyjdou vyčištěné bajty a **neexistuje žádný server, kam by se nahrávalo**. Jsou záměrným opakem typického nástroje "nahraj svůj soubor na cizí web, aby ho vyčistil", po kterém jinak sáhne dobře míněný zaměstnanec.

![Strip Hidden Data: soubor dorazí na plátno a odznak jasně uvádí, že se nic nenahrává](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper je stejná dohoda, jen pro text místo souborů. Je to sešitová pracovní deska, po které by zaměstnanec jinak pátral na cizím webu, a nedeklaruje vůbec žádné vstupy, protože nic, čeho se dotkne, stránku nikdy neopustí.

![Pracovní deska Text Helperu - lišta záložek s operacemi nad kartou, která uvádí, že nic z toho, co vložíš, neopustí tvé zařízení](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF doplňuje sadu: předimenzovaná příloha se zmenší podle úrovně kvality, kterou zvolíš, na stroji, který ji už drží.

![Compress PDF - vlevo úroveň kvality a přepínač do stupňů šedi, vpravo zóna pro upuštění vlastního PDF a nikde žádné nahrávání](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinismus a reprodukovatelnost

Každý vstup nástroje lze vyjádřit jako parametr URL a stejné vstupy dávají stejný soubor. To má dva důsledky pro operátora:

- **URL je artefakt.** Commitni odkaz, asset vygeneruj na vyžádání znovu - žádné binárky commitnuté do gitu, žádné honění "poslední verze" v chatu. ID assetu a nástroje jsou trvalé smlouvy, takže odkaz vyražený dnes se rozřeší i později.
- **CLI je stejná renderovací cesta** jako GUI, takže build pipeline a aplikace se nikdy nerozejdou. Generuj OG obrázky, sociální karty a datové vizualizace v čase buildu, reprodukovatelně.

Prompt to Image je determinismus v té nejčistší podobě: text je celý vstup, sázený obrázek je celý výstup a stejný text se vysází vždy stejně.

![Prompt to Image - blok textu promptu vysázený do čtvercového obrázku, kde ve výsledku není nic, co by nebylo na vstupu](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Provenience a Content Credentials

![Zóna pro upuštění souboru u Verify přijme jakýkoli soubor z jakéhokoli zdroje a přečte ho bez síťového volání](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Exporty mohou nést **Content Credentials** - podepsaný manifest [C2PA](https://c2pa.org) vázaný na hash bajtů souboru. Jakákoli pozdější změna souboru pečeť poruší, takže verifikátor znalý C2PA **odhalí úpravu kryptograficky, offline**. Přihláška je tamper-*evidentní*: úpravu spíš odhalí, než jí zabrání, a přesně to je to, co umožňuje plně offline ověřování.

- **Ve výchozím stavu zapnuto, přímo na zařízení.** Podpisový klíč se generuje na zařízení, je neexportovatelný (ani Lolly ho nepřečte) a podepisování probíhá lokálně - sítě se dotkne jen volitelný krok *registrace* identity.
- **Úrovně důvěry.** Neregistrovaný export je formálně v pořádku, ale podepsaný anonymně (`untrusted`). Zaregistruj **ověřenou identitu** (krátkodobý certifikát z Lolly CA, navázaný na e-mail) a verifikátory, které přišpendlují kořen Lolly, nahlásí `trusted` + e-mail podepisujícího. Důvěryhodná časová autorita a zelená od validátoru třetí strany (shoda s C2PA) jsou na roadmapě. Každá úroveň je explicitní a soubor si nikdy nenárokuje víc důvěry, než dokáže doložit.
- **Životnost přihlášky** je na rozhodnutí operátora nebo uživatele v okamžiku podpisu: 7 / 30 / 90 / 365 dní, výchozí 30.
- **Lolly Imprint.** Druhý, doplňkový signál, který je **ve výchozím stavu zapnutý**: neviditelný pixelový vodoznak zapečený do rastrových exportů (a do rastrů vyrenderovaných Lolly uvnitř PDF/PPTX, nikdy do uživatelova vlastního vloženého obrázku). Tam, kde přihláška zaniká při jakékoli změně kontejneru, Imprint přežije re-save nebo screenshot - trvalá nápověda "tyto pixely prošly Lolly", pouze přítomnostní, bez osobních dat. Je to bezpečnost skrze neprůhlednost, ne tvrdá obrana, a doplňuje přihlášku, ne že by ji nahrazovala. `imprint=0` to vypne.
- **Trvalé Content Credentials (opt-in).** Rastrový export může navíc nést neviditelnou *trvalou* značku, která kóduje identifikátor s měkkou vazbou, takže C2PA přihlášku lze obnovit i poté, co nahrání na sociální síť nebo re-save odstranilo metadata souboru - přesně případ, kdy by se běžná přihláška ztratila. Je jen pro rastr a stojí neurální encode průchod, takže je ve výchozím stavu vypnutá (zapneš ji `durable=1`). Lolly svou vlastní trvalou značku dnes rozpozná offline na `/verify`; obnova nástroji třetích stran (např. Adobe) přijde, jakmile bude na místě řešení měkké vazby napříč odvětvím.
- **Ověřování probíhá na zařízení.** Upusť libovolný soubor na `/verify` (nebo `lolly validate <file>`) a získáš offline zprávu o tom, jestli byl skutečně vytvořen v Lolly a od té doby nezměněn. Webové zobrazení Verify navíc označí AI generovaný obsah, detekuje Lolly Imprint, ověří podpisy **SEAL** (podpis na úrovni bajtů - bez jediného síťového požadavku: engine přijímá *injektovaný* resolver DNS klíče a žádný shell ho dnes neinjektuje, takže záznam nesoucí vlastní inline klíč `pk=` se ověří plně offline, zatímco záznam klíčovaný přes DNS nahlásí "no key resolver and no inline key" místo toho, aby síť oslovil - viz `SealPublicKeyResolver` v `engine/src/seal.ts`), volitelně hloubkově skenuje pixelové vodoznaky třetích stran (jednorázové stažení modelu na zařízení) a odhalí skrytá data - to vše bez nahrávání souboru. Viz [Content Credentials Identity](/info/content-credentials-identity.html).

> **Poznámky k interoperabilitě.** Lolly dnes offline ověřuje své vlastní přihlášky i řadu přihlášek třetích stran, včetně čtení manifestů C2PA claim **v2** od jiných tvůrců. Dva kontejnery zůstávají rozpracované, oba z toho důvodu, že pro ně C2PA zatím nemá standardizované mapování, takže Lolly nese přihlášku na vlastním místě a je to verifikátor Lolly, kdo ji zpětně čte: **WebM** (manifest jede jako příloha Matroska) a **Ogg/Opus** (pole `C2PA=` v hlavičce komentářů OpusTags, přičemž tento rozsah bajtů je z vazby vyloučen, takže audio pořád hashuje identicky). Všechno ostatní se razí podle specifikace - nástroje třetích stran ověří Lolly MP4, M4A, MP3, WAV, PNG, JPEG a PDF rovnou po vybalení. Obě mapování viz `engine/src/c2pa-containers.ts`; jakmile se to ustálí, sblíží se se standardem.

## Šifrování a heslování

Pro soubory, které musí cestovat uzamčené, se všechno odehrává na zařízení:

![Karta se zámkem v exportním panelu: heslo a explicitní volba mezi oběma úrovněmi](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **PDF heslo pro otevření** - *Standard* je 40bitová zábrana RC4 (otevře se kdekoli, může cestovat v odkazu); *Strong* je **AES-256** (PDF 2.0), zadaná při exportu a nikdy nevkládaná do odkazu.
- **Uzamčená stažení** - ZIP, složku Projects nebo dávkový běh lze uzamknout jako celek: *Standard* ZipCrypto (slabé, univerzální) nebo *Strong* **AES-256** (WinZip AE-2). Obrana do hloubky: jakékoli PDF uvnitř Strong zipu je *navíc* jednotlivě uzamčeno AES-256, takže zůstane uzamčené i po rozbalení.
- **Odkazy na sdílení chráněné heslem** - celý stav odkazu je zašifrovaný AES-256 pod klíčem odvozeným přes PBKDF2; cestuje jen šifrovaný text, heslo v odkazu nikdy není a dešifrování probíhá v prohlížeči příjemce.

## Připraveno na air-gap

Air-gap je **plnohodnotné nasazení**, ne zvláštní režim - Lolly rovnou z výroby běží při renderování bez sítě. Webový shell je offline-first PWA (service worker); fonty a WASM jsou uložené na zařízení; stav nástroje se ukládá lokálně přes host bridge, nikdy přes `localStorage`. Podporovaný způsob, jak se nástroj dostane k síti, je funkce `host.net` na **allowlistu**, kterou deklaruje ve svém manifestu - shell, který ji nedokáže (nebo nechce) splnit, ji nahradí zástupným řešením. Je to smlouva o přenositelnosti, ne vynucená hranice (viz poznámka k hookům níže), a proto zůstává kontrolou review kódu nástroje - i když na air-gapped zařízení stejně není kam se natáhnout, ani v jednom směru. Dodej shelly na zařízení přes svůj MDM, nebo servíruj jednu instanci ve své síti, a plně air-gapped instalace renderuje, exportuje, šifruje a ověřuje přihlášky, aniž by měla komu volat domů.

## Dobré vědět

Pár věcí, které stojí za to mít jasné, než to nasadíš:

- **Zpevňování probíhá.** Kryptografie a parsery procházejí zpevňováním v rozsahu SUSE enterprise (viz výše) - dnes silné svým návrhem; nasazuj jako obranu do hloubky tam, kde smlouva vyžaduje certifikovanou jistotu.
- **Hooky nástroje *nejsou* bezpečnostní sandbox.** Volitelný `hooks.js` nástroje běží s injektovaným host bridge, ale v prohlížečovém shellu se vykonává v realmu stránky a *dokáže* se natáhnout k `window`/`document`/`fetch`. Zacházej s kódem nástroje jako s jakýmkoli kódem, který spouštíš - projdi ho reviewem. Proto může organizace, která provozuje sdílený katalog, zgatovat ho přes Git review; v obou případech spouštěj jen nástroje, které jsi prošel reviewem, dokud nedorazí izolace přes Worker.
- **Content Credentials jsou tamper-evidentní.** Odhalí úpravu, spíš než aby jí zabránily - viz poznámky k interoperabilitě výše.
- **Dvě úrovně šifrování.** *Standard* zámky jsou rychlá, univerzální zábrana; *Strong* (AES-256) je plná ochrana - pro cokoli citlivého sáhni po Strong, s vědomím, že chce moderní čtečku.

## Samostatně, nebo pod kontrolní vrstvou

Dvě podoby, a ty si vybíráš pro každé nasazení. **Samostatný režim je výchozí a nepotřebuje server:** Lolly vykresluje na zařízení, každý tvůrce pracuje v appce a výše popsaná správa git-jako-data je zcela volitelná - jedna organizace může tento repozitář provozovat bez čehokoli hostovaného. **Když chceš kontrolu napříč celou organizací, přidej kontrolní vrstvu.** [lolly.work](https://lolly.work) je samostatná open source (MPL-2.0) služba, kterou hostuješ sám - nebo ji vyzkoušíš v hostované pískovišti - a která živě řídí shell: přihlášení bráněné přes SSO, politiku feature flagů / exportu / vodoznaku, překryvy vstupů nástrojů, federaci katalogů, schvalování a hash-řetězený auditní log, to vše doručované do shellu bez změny kódu tady. Je nezávislá na značce (konfigurace plus připojený balíček), využívá jádro a balíčky tohoto repozitáře beze změny a nikdy se nestává vykreslovací cestou: Lolly stále vykresluje na zařízení z podstaty. OSS = svoboda jednotlivce; OSS + kontrolní vrstva = organizační svoboda.

## Kam dál

- **[Bezpečnost a ověřování](/info/security.html)** - standardy, primitiva, model důvěry a testování za výše uvedenými přihláškami a šifrováním.
- **[Adopce a governance](/info/adoption-governance.html)** - persony, metrika odklonu a governance jako data v plném rozsahu.
- **[Nasazení](/info/deployment.html)** - deploy/serve/hybrid, MDM a self-hosting služeb.
- **[Konfigurace](/info/configuration.html)** - profily, brand packy, gatování funkcí a feature flagy.
- **[Zásady ochrany soukromí](/info/privacy.html)** - formální prohlášení o tom, co se sbírá, ukládá a odesílá a co ne.
- **[Serverová plocha](/info/server-surface.html)** - kompletní přehled toho, co běží na straně serveru (dvě volitelné komponenty) oproti tomu, co běží na zařízení.
