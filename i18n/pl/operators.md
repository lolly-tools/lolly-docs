# Lolly dla operatorów

### Strategia bezpieczeństwa i wywiadu w głębi warstw - która akurat jest platformą do produkcji kreatywnej

System immunologiczny organizacji oparty na zero-trust, który otacza to, co już robisz - dzięki czemu rutynowa praca kreatywna, której twoje zespoły potrzebują na co dzień, odbywa się *wewnątrz* twojego perymetru zamiast z niego wyciekać.

**Co ty z tego masz.** Zostajesz osobą, która powiedziała tak czemuś zarazem bezpiecznemu *i* popularnemu. Jednym ruchem zamykasz lukę eksfiltracji, zyskujesz możliwości i kasujesz kolejkę zgłoszeń - rzadki przypadek wygranej w bezpieczeństwie, która sprawia, że jesteś bardziej lubiany, nie mniej. Żadnego telefonu z działu prawnego o 3 nad ranem, bo pliki objęte embargiem albo dane klientów trafiły do przypadkowego narzędzia webowego; mniej dostawców SaaS, umów i audytów na twoim biurku; oraz w pełni odtwarzalna ścieżka audytu, na którą możesz wskazać, gdy ktoś zapyta. Śpisz lepiej i przy okazji poprawiasz komuś dzień.

Lolly to nie narzędzie kreatywne drugiej kategorii: daje każdemu w ręce wynik jakości produkcyjnej, a doświadczenie tworzenia prowadzone marką nie ma sobie równych. Powód, dla którego *bezpiecznie* jest udostępniać je szeroko, ma naturę architektoniczną: nic się nie przesyła, czego sam tam nie umieściłeś, każdy wynik jest odtwarzalny, a każdy eksport może nieść wiele warstw wiodących w branży kryptograficznych zapisów. Bez względu na to, jak dokument trafił na twoje biurko, widzisz jego pełne pochodzenie, czy został zmodyfikowany i czy możesz go odtworzyć piksel w piksel.

> **Gdzie to dziś stoi.** Właściwości bezpieczeństwa Lolly są z założenia silne, a jego mechanizmy kryptografii i parsowania plików przechodzą przez klasy korporacyjnej hartowanie infrastruktury SUSE. Pieczęcie, podpisywanie na urządzeniu i szyfrowanie opisane poniżej są realne i obronne już dziś, a jednocześnie dojrzewają w kierunku niezależnej certyfikacji - więc tam, gdzie umowa wymaga certyfikowanej gwarancji, wdrażaj je jako ochronę w głębi warstw, dopóki ten proces się nie zakończy.

## Przewaga strategiczna

Zwyczajny sposób wykonywania rutynowej pracy kreatywnej to powierzchnia ryzyka: pliki wysyłane e-mailem do zewnętrznych podwykonawców projektowych, zasoby marki przesyłane do kilkunastu edytorów SaaS, dane klientów wklejane do obcego narzędzia webowego, żeby "po prostu szybko zrobić grafikę". Każde z tych działań to dane wymykające się spod twojej kontroli.

Lolly to odwraca. Praca, która *napędzała* te wycieki - karta z cytatem, zlokalizowany baner, plakietka wydarzenia, zredagowany zrzut ekranu - odbywa się teraz w narzędziu działającym na własnym urządzeniu pracownika, względem twojej marki, bez serwera w pętli. Nie dodałeś kontroli na wierzchu ryzykownego procesu; zastąpiłeś ryzykowny proces takim, który od początku nie ma żadnej ścieżki eksfiltracji.

- **Konfiguracja jest twoja.** Silnik i powłoki są open source (MPL-2.0). Nałóż własne uwierzytelnianie, telemetrię czy CA; hostuj to albo nie; masz pełną kontrolę nad funkcjami i kosztami, śledzoną w git, a nie zamkniętą w bazie danych SaaS.
- **Zarządzanie może być danymi, nie panelem.** Gdy chcesz taką kontrolę, zarządzaj katalogiem narzędzi jako repozytorium Git - recenzja pull requestów staje się zatwierdzeniem marki, z pełną ścieżką audytu i natychmiastowym cofnięciem każdego szablonu, do którego ma dostęp twoja załoga. To opcja, nie obowiązek, i spoczywa dokładnie na jednym biurku: twórcy pracują całkowicie w aplikacji, zapisując to, co tworzą, jako **sesję** i przekazując ją dalej jako link do udostępnienia, kopię zapasową lub współpracę na żywo - nic z tego nie wymaga gita. Gdy jedna z tych sesji zasługuje na to, by stać się trwałym punktem wyjścia, osoba zarządzająca wdrożeniem otwiera link, zapisuje jego wartości jako **szablon** tego narzędzia w pakiecie marki i zatwierdza commitem. Od tej chwili pojawia się w selektorze "Nowy z szablonu" tego narzędzia i jest dostępny przez głęboki link jako `?template=<id>`. Git to krok blokujący administratora, użyty raz, i nigdy nie jest czymś, czego musi dotknąć twórca. Zobacz [Wdrażanie i zarządzanie](/info/adoption-governance.html).
- **Zabezpieczenia są strukturalne.** Ograniczenia marki są zaszyte na stałe w szablonach, a nie publikowane jako wytyczne, które można zignorować. Błędny wynik nie jest odradzany - jest niemożliwy do przedstawienia.

> **Zarządzasz całą sztafetą.** Twórca autoryzuje reguły, a deweloper skaluje je, ale to operator sprawia, że ten cykl życia jest bezpieczny do uruchomienia w całej organizacji - to samo narzędzie, które pozwala przedstawicielowi obsłużyć się samemu w samolocie, możesz bramkować przez recenzję Git, wdrażać przez swój MDM i weryfikować kryptograficznie. Zobacz, jak te role się sumują w [Cyklu życia kampanii](/info/overview.html#the-lifecycle-of-a-campaign), i jak nimi zarządzać w [Wdrażanie i zarządzanie](/info/adoption-governance.html).

## Skasuj kolejkę zgłoszeń, mnożąc jednocześnie treści.

Jednym z celów Lolly jest **odciążanie od zgłoszeń projektowych**: rutynowe prośby, które nigdy nie muszą dotrzeć do projektanta, ponieważ osoba potrzebująca zasobu stworzyła go sama, poprawnie, w kilka minut. Każde odciążone zgłoszenie to zarazem wygrana produktywności i o jeden plik mniej zmieniający ręce.

Lolly jest zbudowana tak, by pasować do tego, jak twoja organizacja faktycznie działa - nie ma jednego słusznego sposobu jej wdrożenia:

- **Wdrażaj, nie serwuj.** Dystrybuuj Lolly na urządzenia przez istniejący MDM (Intune, Jamf, Munki…). Działa lokalnie jako aplikacja desktopowa/mobilna albo offline'owy PWA - działa za dowolnym firewallem, w dowolnym środowisku odizolowanym od sieci, bez serwera do utrzymania, a IT ma kontrolę nad tempem aktualizacji.
- **Tylko serwuj.** Uruchom jedną instancję wewnątrz swojej sieci (lub za VPN); użytkownicy dostają się do niej w przeglądarce, bez instalacji niczego. Opublikuj narzędzie raz, wszyscy mają je natychmiast; połącz z własnym IdP dla kontroli dostępu.
- **Hybrydowo.** Lokalne aplikacje do pracy w terenie offline, zawsze aktualna wersja przeglądarkowa na pożyczonych maszynach - obie wskazują na tę samą bibliotekę narzędzi.

Pełne modele wdrożenia i przewodnik po administracji znajdują się w [Wdrożenie](/info/deployment.html) i [Konfiguracja](/info/configuration.html).

## Narzędzia przeciw eksfiltracji

Kategoria narzędzi Lolly - narzędzia prywatności - istnieje *specjalnie* po to, by utrzymać pliki wewnątrz perymetru.


- **Usuń ukryte dane**
 Usuń lokalizację i wszystkie ukryte informacje identyfikujące z dokumentów i plików multimedialnych.

- **Text Helper**  
Anonimizuj, koduj, formatuj i przetwarzaj tekst strukturalny i niestrukturalny. 

- **Compress PDF**
Zmniejsz zbyt duży plik PDF na urządzeniu, żeby nikt nie sięgał po zewnętrzną stronę typu "compress my PDF" w chwili, gdy plik jest za duży, by wysłać go mailem - a to dokładnie tam dane wymykają się na zewnątrz. 

Wszystkie to przekształcenia wykonywane na urządzeniu: Twój plik lub dane wchodzą, oczyszczone bajty wychodzą, a **nie ma żadnego serwera, na który trzeba by je wysłać**. To celowe przeciwieństwo typowego narzędzia "prześlij plik na stronę obcej firmy, żeby go oczyścić", po które sięga dobrze myślący pracownik w innym wypadku.

![Strip Hidden Data: plik trafia na płótno, a plakietka jasno stwierdza, że nic nie jest przesyłane](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper to ta sama umowa, tylko dla tekstu zamiast plików. To warsztat z zakładkami, którego pracownik szukałby inaczej na obcej stronie, i nie deklaruje żadnych danych wejściowych, bo nic, czego dotyka, nigdy nie opuszcza strony.

![Warsztat Text Helper - pasek zakładek operacji nad kartą stwierdzającą, że nic, co wklejasz, nie opuszcza Twojego urządzenia](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF dopełnia zestaw: zbyt duży załącznik kurczy się zgodnie z wybranym przez Ciebie ustawieniem jakości, na komputerze, na którym już się znajduje.

![Compress PDF - poziom jakości i przełącznik skali szarości po lewej, strefa upuszczania własnego pliku PDF po prawej i żadnego przesyłania nigdzie](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinizm i powtarzalność

Każde dane wejściowe narzędzia można wyrazić jako parametr URL, a te same dane wejściowe tworzą ten sam plik. Ma to dwie konsekwencje operacyjne:

- **URL jest artefaktem.** Zatwierdź link w commicie, generuj zasób na żądanie - żadnych plików binarnych w Git, żadnego pogoni za "najnowszą wersją" na czacie. Identyfikatory zasobów i narzędzi to trwałe kontrakty, więc link utworzony dziś nadal działa później.
- **CLI korzysta z tej samej ścieżki renderowania** co GUI, więc pipeline'y budowania i aplikacja nigdy się nie rozjeżdżają. Generuj obrazy OG, karty społecznościowe i wizualizacje danych w czasie budowania, w sposób powtarzalny.

Prompt to Image to determinizm w najczystszej postaci: tekst jest całym wejściem, złożony obraz jest całym wyjściem, a ten sam tekst zawsze składa się tak samo.

![Prompt to Image - blok tekstu promptu złożony w kwadratowy obraz, bez niczego w wyniku, czego nie było w wejściu](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Pochodzenie i Content Credentials

![Strefa upuszczania Verify przyjmuje dowolny plik, z dowolnego źródła, i odczytuje go bez żadnego zapytania sieciowego](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Eksporty mogą nieść **Content Credentials** - podpisany manifest [C2PA](https://c2pa.org) powiązany z hashem bajtów pliku. Każda późniejsza zmiana pliku łamie pieczęć, więc weryfikator zgodny z C2PA **wykrywa zmiany kryptograficznie, offline**. Poświadczenie jest odporne na manipulację w sensie *wykrywalności*: sygnalizuje manipulację, zamiast jej zapobiegać, co właśnie umożliwia w pełni offline'ową weryfikację.

- **Domyślnie włączone, na urządzeniu.** Klucz podpisujący jest generowany na urządzeniu, jest nieeksportowalny (nawet Lolly nie może go odczytać), a podpisywanie odbywa się lokalnie - jedynie opcjonalna *rejestracja* tożsamości kiedykolwiek łączy się z siecią.
- **Poziomy zaufania.** Eksport bez rejestracji jest poprawnie sformowany, ale podpisany anonimowo (`untrusted`). Zarejestruj **zweryfikowaną tożsamość** (krótkotrwały certyfikat z Lolly CA, powiązany z adresem e-mail), a weryfikatory przypinające root Lolly zgłoszą `trusted` + adres e-mail podpisującego. Zaufany urząd znacznika czasu i zielone światło zewnętrznego walidatora (zgodność z C2PA) są w planach. Każdy poziom jest jawny, a plik zawsze rości sobie tylko tyle zaufania, ile może udowodnić.
- **Czas życia poświadczenia** to decyzja operatora/użytkownika w momencie podpisywania: 7 / 30 / 90 / 365 dni, domyślnie 30.
- **Lolly Imprint.** Drugi, uzupełniający sygnał, który jest **domyślnie włączony**: niewidoczny znak wodny na pikselach wypiekany w eksportach rastrowych (oraz rastrach renderowanych przez Lolly wewnątrz PDF/PPTX, nigdy we własnym osadzonym obrazie użytkownika). Tam, gdzie poświadczenie ginie przy każdej zmianie kontenera, Imprint przetrwa ponowny zapis lub zrzut ekranu - trwała wskazówka "te piksele przeszły przez Lolly", tylko obecność, bez danych osobowych. To bezpieczeństwo przez zaciemnienie, a nie utwardzona obrona, i uzupełnia poświadczenie zamiast je zastępować. `imprint=0` pozwala zrezygnować.
- **Trwałe Content Credentials (opcjonalne).** Eksport rastrowy może dodatkowo nieść niewidoczny znak *trwały*, kodujący identyfikator miękkiego powiązania, dzięki czemu poświadczenie C2PA można odzyskać nawet po tym, jak przesłanie do serwisu społecznościowego lub ponowny zapis usunęły metadane pliku - w przypadku, gdy zwykłe poświadczenie zostałoby utracone. Działa wyłącznie na rastrach i kosztuje przebieg kodowania neuronowego, więc jest domyślnie wyłączony (`durable=1`, by go włączyć). Lolly rozpoznaje dziś swój trwały znak offline w `/verify`; odzyskiwanie przez narzędzia zewnętrzne (np. Adobe) nastąpi, gdy branżowe rozwiązanie miękkiego powiązania zostanie wdrożone.
- **Weryfikacja odbywa się na urządzeniu.** Upuść dowolny plik w `/verify` (lub `lolly validate <file>`), by uzyskać offline'owy raport, czy plik rzeczywiście powstał w Lolly i nie zmienił się od tego czasu. Widok Verify w wersji webowej oznacza też treści wygenerowane przez AI, wykrywa Lolly Imprint, weryfikuje podpisy **SEAL** (podpis na poziomie bajtów - bez żadnych zapytań sieciowych: silnik przyjmuje *wstrzykiwany* resolver kluczy DNS, a żadna powłoka go dziś nie wstrzykuje, więc rekord niosący własny wbudowany klucz `pk=` weryfikuje się w pełni offline, podczas gdy rekord kluczowany przez DNS zgłasza "brak resolvera kluczy i brak klucza wbudowanego", zamiast łączyć się z siecią - zobacz `SealPublicKeyResolver` w `engine/src/seal.ts`), opcjonalnie skanuje dogłębnie w poszukiwaniu zewnętrznych znaków wodnych na pikselach (jednorazowe pobranie modelu na urządzenie) i ujawnia ukryte dane - wszystko bez przesyłania pliku. Zobacz [Content Credentials Identity](/info/content-credentials-identity.html).

> **Uwagi o interoperacyjności.** Lolly weryfikuje dziś offline zarówno własne poświadczenia, jak i wiele poświadczeń firm trzecich, w tym odczyt manifestów claim **v2** C2PA od innych producentów. Dwa kontenery są wciąż w toku, oba dlatego, że C2PA nie ma dla nich jeszcze ustandaryzowanego mapowania, więc Lolly przechowuje poświadczenie we własnym miejscu, a to weryfikator Lolly je odczytuje: **WebM** (manifest jedzie jako załącznik Matroska) oraz **Ogg/Opus** (pole `C2PA=` w nagłówku komentarza OpusTags, przy czym ten zakres bajtów jest wykluczony z powiązania, więc audio nadal hashuje się identycznie). Wszystko inne jest znakowane zgodnie ze specyfikacją - narzędzia firm trzecich weryfikują pliki MP4, M4A, MP3, WAV, PNG, JPEG i PDF z Lolly od razu. Zobacz `engine/src/c2pa-containers.ts` dla obu mapowań; zbiegają się one ze standardem, gdy ten się ustabilizuje.

## Szyfrowanie i hasła

Dla plików, które muszą podróżować zablokowane, wszystko dzieje się na urządzeniu:

![Karta blokady w panelu eksportu: hasło i jawny wybór między dwoma poziomami](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Hasło otwarcia PDF** - *Standard* to 40-bitowe zabezpieczenie RC4 (otwiera się wszędzie, może podróżować w linku); *Strong* to **AES-256** (PDF 2.0), wpisywane przy eksporcie i nigdy nieumieszczane w linku.
- **Zablokowane pobrania** - ZIP, folder Projects lub przebieg wsadowy można zablokować w całości: *Standard* ZipCrypto (słabe, uniwersalne) lub *Strong* **AES-256** (WinZip AE-2). Ochrona wielowarstwowa: każdy PDF wewnątrz zipu Strong jest *dodatkowo* zablokowany indywidualnie AES-256, więc pozostaje zablokowany po rozpakowaniu.
- **Linki udostępniania chronione hasłem** - cały stan linku jest zaszyfrowany AES-256 pod kluczem wyprowadzonym przez PBKDF2; podróżuje wyłącznie szyfrogram, hasło nigdy nie znajduje się w linku, a deszyfrowanie odbywa się w przeglądarce odbiorcy.

## Gotowość do pracy w trybie air-gap

Praca w izolacji sieciowej (air-gap) to **wdrożenie pierwszej klasy**, a nie tryb specjalny - Lolly działa bez sieci w czasie renderowania od razu po instalacji. Powłoka webowa to PWA typu offline-first (service worker); czcionki i WASM są przechowywane na urządzeniu; stan narzędzia jest zapisywany lokalnie przez most hosta, nigdy w `localStorage`. Wspieranym sposobem, w jaki narzędzie może dotrzeć do sieci, jest funkcja `host.net` z **listą dozwolonych adresów**, którą deklaruje w swoim manifeście - powłoka, która tego nie potrafi (lub nie chce), zastępuje ją zaślepką. To kontrakt przenośności, a nie wymuszona granica (zobacz uwagę o hookach poniżej), dlatego przegląd kodu narzędzia pozostaje mechanizmem kontroli - choć na urządzeniu w izolacji i tak nie ma dokąd sięgnąć. Dostarcz powłoki na urządzenia przez swoje MDM albo udostępnij jedną instancję wewnątrz swojej sieci, a w pełni odizolowana instalacja renderuje, eksportuje, szyfruje i weryfikuje poświadczenia bez niczego, do czego mogłaby zadzwonić do domu.

## Warto wiedzieć

Kilka rzeczy warto mieć jasnych, zanim to wdrożysz:

- **Utwardzanie w toku.** Kryptografia i parsery przechodzą przez utwardzanie w skali korporacyjnej SUSE (patrz wyżej) - dziś mocne z założenia; wdrażaj jako ochronę wielowarstwową tam, gdzie kontrakt wymaga certyfikowanej gwarancji.
- **Hooki narzędzi *nie są* piaskownicą bezpieczeństwa.** Opcjonalny plik `hooks.js` narzędzia działa z wstrzykniętym mostem hosta, ale w powłoce przeglądarkowej wykonuje się w obrębie strony i *może* sięgnąć do `window`/`document`/`fetch`. Traktuj kod narzędzia tak, jak każdy kod, który uruchamiasz - przeglądaj go. Dlatego organizacja prowadząca wspólny katalog może kontrolować go przez przegląd w Git; tak czy inaczej, uruchamiaj tylko narzędzia, które przejrzałeś, dopóki nie pojawi się izolacja Worker.
- **Content Credentials są odporne na manipulację w sensie wykrywalności.** Wykrywają zmiany, zamiast im zapobiegać - zobacz uwagi o interoperacyjności powyżej.
- **Dwa poziomy szyfrowania.** Blokady *Standard* to szybkie, uniwersalne zabezpieczenia odstraszające; *Strong* (AES-256) to pełna ochrona - sięgaj po Strong przy wszystkim wrażliwym, pamiętając, że wymaga nowoczesnego czytnika.

## Dokąd dalej

- **[Security & Verification](/info/security.html)** - standardy, prymitywy, model zaufania i testy stojące za poświadczeniami i szyfrowaniem opisanymi powyżej.
- **[Adoption & Governance](/info/adoption-governance.html)** - persony, wskaźnik odchylenia i governance-as-data w pełni.
- **[Deployment](/info/deployment.html)** - deploy/serve/hybrid, MDM i samodzielne hostowanie usług.
- **[Configuration](/info/configuration.html)** - profile, pakiety marki, bramkowanie funkcji i flagi funkcji.
- **[Privacy Policy](/info/privacy.html)** - formalne oświadczenie o tym, co jest, a co nie jest zbierane, przechowywane i wysyłane.
- **[Server Surface](/info/server-surface.html)** - pełny spis tego, co działa po stronie serwera (dwa opcjonalne komponenty), w porównaniu z tym, co działa na urządzeniu.
