# Zásady ochrany osobních údajů

*Naposledy aktualizováno: červen 2026*

## Aplikace Lolly

Lolly běží celá v tvém prohlížeči. **Nic nesbíráme, nic nepřenášíme a nemáme žádné servery, které by viděly tvá data.** Není tu žádná analytika, žádné sledování a žádná třetí strana jakéhokoli druhu.

**Žádné cookies — nikde.** Lolly nikdy nenastavuje cookie. Aby aplikace fungovala, uchovává malé množství dat **přímo na tvém zařízení**, a to výhradně to, co je nezbytné pro funkci, kterou právě používáš:

- **Tvé světlé/tmavé téma** a několik preferencí rozhraní (šířka postranního panelu, přiblížení).
- **Offline mezipaměť katalogu nástrojů**, díky které se galerie načte i bez připojení.
- **Čistě lokální počítadla používání** pro drobné statistiky na tvé profilové kartě — ty se nikam neodesílají.
- **Tvé vlastní dokumenty a uložené relace**, uchovávané lokálně v prohlížeči (IndexedDB), aby tvá práce zůstala zachovaná mezi návštěvami.

Nic z toho se nesdílí, nenahrává ani nepoužívá k tvé identifikaci či sledování, takže tu není nic, s čím bys musel(a) souhlasit — jen toto oznámení, abys věděl(a), co se uchovává. Kdykoli to všechno můžeš smazat pomocí **Profil → Smazat všechna má data**, nebo vymazáním úložiště stránky v prohlížeči.

Tento dokumentační web (`/info`) je ještě lehčí: nenastavuje **žádné cookies**, na tvém zařízení ukládá jen preferenci světlého/tmavého tématu a všechno — včetně fontů — servíruje přímo z lolly.tools, bez CDN nebo požadavků na třetí strany.

## Nástroje běžící na zařízení

Některé nástroje jsou tzv. **utility**, které pracují se souborem, jenž *ty* poskytneš — například **Strip Hidden Data**, který zobrazí skrytá data v obrázku nebo PDF (poloha GPS, fotoaparát, autor, editor a metadata dokumentu) a vrátí ti čistou kopii, nebo **Compress PDF**, který zmenší PDF přeenkódováním jeho obrázků přímo na tvém zařízení.

Tyto nástroje běží **celé v tvém prohlížeči**. Soubor, který vybereš, se načte do paměti na tvém zařízení, lokálně se zpracuje a nabídne se ti zpět ke stažení. **Nikdy se nenahrává** — není totiž žádný server, kam by se nahrával. Vyčištěná kopie neobsahuje žádný vodoznak ani žádná naše vlastní identifikační metadata; smyslem je data *odebrat*, ne přidávat. Po odchodu se nic neukládá a tyto utility fungují i offline. Na každé z nich uvidíš odznak **„Běží na tvém zařízení — nic se nenahrává"**.

To je pravý opak typických webů typu „zkomprimuj toto PDF" / „převeď tento HEIC", které nahrají tvůj soubor na server cizí osoby, aby udělaly práci, kterou tvůj prohlížeč zvládne lokálně.

## Rozšíření prohlížeče

Rozšíření prohlížeče **Lolly URL Screenshot** nesbírá, neukládá ani nepřenáší žádné osobní údaje. Žádná analytika, žádné sledování, žádný vzdálený server.

## Co dělá

Když požádáš webovou aplikaci Lolly ([lolly.tools](https://lolly.tools)), aby vyfotila snímek obrazovky URL adresy, rozšíření otevře danou stránku v dočasné záložce na pozadí, zachytí ji v tvém prohlížeči pomocí DevTools Protocol, předá obrázek zpět aplikaci a záložku zavře. Vše se odehrává lokálně, na tvém vlastním zařízení a síti.

## Údaje

- **Nic nesbíráme.** Rozšíření nemá žádné servery a samo neprovádí žádné síťové požadavky.
- **Zachycené obrázky** jdou přímo do aplikace Lolly ve stejném prohlížeči — rozšíření je nikdy nenahrává.
- **URL adresy, které zachytíš,** se použijí jen k načtení té jedné stránky pro ten jeden snímek. Nejsou zaznamenávány ani sdíleny.

## Oprávnění

- **`debugger`** — k zachycení vykreslené stránky pomocí DevTools Protocol (stejný mechanismus, jaký používá desktopová aplikace Lolly).
- **Přístup k záložkám** — k otevření a zavření dočasné záložky, do které se stránka načítá.
- **Přístup k hostitelům** — protože stránka, kterou se rozhodneš zachytit, může být na jakémkoli webu.

Žádné z nich se nepoužívají ke čtení, sledování ani přenosu tvého prohlížení.

## Kontakt

Máš otázky? Podívej se na [lolly.tools](https://lolly.tools).
