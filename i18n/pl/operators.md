# Lolly dla operatorów

### Odporna na przyszłość, wielowarstwowa strategia ochrony przed utratą danych i zapewnienia proweniencji – która przy okazji jest platformą do produkcji kreatywnej

Organizacyjny układ odpornościowy, który otacza to, co już robisz — dzięki czemu rutynowa praca kreatywna, której twoje zespoły potrzebują każdego dnia, odbywa się *wewnątrz* twojego perymetru, zamiast z niego wyciekać.

**Co z tego masz.** Zostajesz osobą, która powiedziała „tak” czemuś zarazem bezpiecznemu *i* lubianemu. Zamykasz lukę umożliwiającą eksfiltrację i likwidujesz kolejkę zleceń projektowych za jednym zamachem — rzadka wygrana w obszarze bezpieczeństwa, która sprawia, że jesteś bardziej, a nie mniej lubiany. Żadnych telefonów o 3 nad ranem, bo ktoś wysłał mailem pliki z zasobami marki do zewnętrznego wykonawcy albo wkleił dane klientów do przypadkowego narzędzia internetowego; mniej dostawców SaaS, umów i audytów na twojej głowie; oraz pełny ślad w git, na który możesz wskazać, gdy ktoś zapyta, kto co zatwierdził. Śpisz spokojnie.

Lolly zasługuje na swoje miejsce jako narzędzie kreatywne: likwiduje kolejkę projektową i oddaje w ręce każdego wyniki jakości produkcyjnej. Ale to, że *bezpiecznie* jest udostępnić je tak szeroko, wynika z architektury. Nic nie jest wysyłane na serwer, wszystko jest odtwarzalne, a każdy eksport może nieść kryptograficzny zapis swojego pochodzenia. Ta strona opowiada o bezpieczeństwie i wdrożeniu.

> **Jak to wygląda dzisiaj.** Właściwości bezpieczeństwa Lolly są mocne z założenia, a jego mechanizmy kryptograficzne i parsujące pliki przechodzą przez korporacyjne wzmacnianie infrastruktury SUSE. Pieczęcie, podpisywanie na urządzeniu i szyfrowanie opisane poniżej są już realne i możliwe do obrony, a dojrzewają w stronę niezależnej certyfikacji — więc tam, gdzie umowa wymaga certyfikowanej gwarancji, wdróż je jako element ochrony wielowarstwowej, dopóki ten proces się nie zakończy.

## Przewaga strategiczna

Zwykły sposób wykonywania rutynowej pracy kreatywnej to powierzchnia ryzyka: pliki wysyłane mailem do zewnętrznych wykonawców projektowych, zasoby marki wgrywane do kilkunastu edytorów SaaS, dane klientów wklejane do narzędzia internetowego obcej osoby, żeby „tylko szybko zrobić grafikę”. Każdy z tych przypadków to dane wymykające się spod twojej kontroli.

Lolly to odwraca. Praca, która *napędzała* te wycieki — karta z cytatem, zlokalizowany baner, identyfikator na wydarzenie, zredagowany zrzut ekranu — teraz odbywa się w narzędziu działającym na własnym urządzeniu pracownika, zgodnie z twoją marką, bez serwera w obiegu. Nie dodałeś kontroli na wierzchu ryzykownego procesu; zastąpiłeś ryzykowny proces takim, który od początku nie ma ścieżki eksfiltracji.

- **Konfiguracja należy do ciebie.** Silnik i powłoki są otwartoźródłowe (MPL-2.0). Nałóż własne uwierzytelnianie, telemetrię lub CA; hostuj to albo nie; masz pełną kontrolę nad funkcjami i kosztami, śledzoną w git, a nie zamkniętą w bazie danych SaaS.
- **Zarządzanie może być danymi, a nie panelem.** Gdy chcesz takiej kontroli, zarządzaj katalogiem narzędzi jak repozytorium Git — recenzja pull requestów staje się zatwierdzaniem zgodności z marką, z pełnym śladem audytowym i natychmiastowym wycofaniem każdego szablonu, którego mogą dotknąć twoi pracownicy. To opcja, a nie obowiązek: zespoły, które chcą po prostu tworzyć, piszą własne narzędzia w Layout Studio i wprowadzają własne pliki do katalogu, w całości w aplikacji, nigdy nie dotykając git. Zobacz [Adopcja i zarządzanie](/info/adoption-governance.html).
- **Zabezpieczenia są wbudowane strukturalnie.** Ograniczenia marki są zapisane na stałe w szablonach, a nie publikowane jako wytyczne, które ludzie mogą ignorować. Niewłaściwy wynik nie jest zniechęcany — jest niemożliwy do wyrażenia.

## Zlikwiduj kolejkę zgłoszeń, mnożąc treści.

Jeden z celów Lolly to **odciążanie ze zgłoszeń projektowych**: rutynowe zgłoszenia, które nigdy nie muszą trafić do projektanta, bo osoba, która potrzebowała zasobu, zrobiła go sama, poprawnie, w kilka minut. Każde odciążone zgłoszenie to zarówno wygrana w produktywności, jak i jeden plik mniej zmieniający właściciela.

Lolly jest zbudowane tak, by pasować do tego, jak faktycznie działa twoja organizacja — nie ma jednego właściwego sposobu jego wdrożenia:

- **Wdrażaj, nie serwuj.** Dostarcz Lolly na urządzenia za pomocą istniejącego MDM (Intune, Jamf, Munki…). Działa lokalnie jako aplikacja desktopowa/mobilna lub offline'owa PWA — działa za dowolną zaporą sieciową, w każdym środowisku odseparowanym od sieci, bez serwera do utrzymania i z działem IT kontrolującym tempo aktualizacji.
- **Tylko serwuj.** Uruchom jedną instancję wewnątrz swojej sieci (lub za VPN); użytkownicy sięgają po nią w przeglądarce, bez żadnej instalacji. Opublikuj narzędzie raz, a każdy ma je od razu; połącz z twoim IdP, aby kontrolować dostęp.
- **Hybrydowo.** Aplikacje lokalne do pracy w terenie bez sieci, zawsze aktualna wersja przeglądarkowa na pożyczone maszyny — obie wskazujące na tę samą bibliotekę narzędzi.

Pełne modele wdrożenia i przewodnik administracyjny znajdziesz w [Wdrożenie](/info/deployment.html) oraz [Konfiguracja](/info/configuration.html).

## Narzędzia zapobiegające eksfiltracji

Istnieje kategoria narzędzi Lolly *specjalnie* po to, by trzymać pliki wewnątrz perymetru. Narzędzia ochrony prywatności.


- **Usuń ukryte dane**
 Usuń lokalizację i wszystkie ukryte informacje identyfikujące z dokumentów i plików multimedialnych.

- **Text Helper**  
Anonimizuj, koduj, formatuj i przetwarzaj tekst ustrukturyzowany oraz nieustrukturyzowany. 

- **Kompresuj PDF**
Zapobiegaj wszelkim „kryzysom limitu maila”, w których żerują zewnętrzne narzędzia internetowe, a dane 

- **Kompresuj PDF**
Zapobiegaj wszelkim „kryzysom limitu maila”, w których żerują zewnętrzne narzędzia internetowe, a dane wypadają przez okno. 

Wszystkie te operacje to przekształcenia na urządzeniu: twój plik lub dane wchodzą, wychodzą oczyszczone bajty i **nie ma serwera, na który cokolwiek jest wysyłane**. Są celowym przeciwieństwem typowego narzędzia typu „wgraj swój plik na stronę obcej osoby, żeby go wyczyścić”, po które w innym wypadku sięga pełen dobrych intencji pracownik.



## Determinizm i odtwarzalność

Każde wejście narzędzia da się wyrazić jako parametr URL, a te same dane wejściowe dają ten sam plik. To ma dwie konsekwencje dla operatora:

- **URL jest artefaktem.** Zatwierdź (commit) link, generuj zasób na żądanie — żadnych binariów w Git, żadnego ścigania „najnowszej wersji” na czacie. Identyfikatory zasobów i narzędzi to trwałe kontrakty, więc link wygenerowany dziś rozwiąże się także później.
- **CLI to ta sama ścieżka renderowania** co GUI, więc potoki budowania i aplikacja nigdy się nie rozjeżdżają. Generuj obrazy OG, karty społecznościowe i wizualizacje danych na etapie budowania, w sposób odtwarzalny.

## Proweniencja i Content Credentials

Eksporty mogą nieść **Content Credentials** — podpisany manifest [C2PA](https://c2pa.org) powiązany z hashem bajtów pliku. Każda późniejsza zmiana pliku łamie pieczęć, więc weryfikator obsługujący C2PA **wykrywa modyfikację kryptograficznie, offline**. Poświadczenie jest odporne na manipulację w sposób *widoczny*: sygnalizuje manipulację, a nie zapobiega jej, co jest dokładnie tym, co umożliwia w pełni offline'ową weryfikację.

- **Włączone domyślnie, na urządzeniu.** Klucz podpisujący jest generowany na urządzeniu, jest niemożliwy do wyodrębnienia (nawet Lolly nie może go odczytać), a podpisywanie odbywa się lokalnie — jedynie opcjonalna *rejestracja* tożsamości w ogóle dotyka sieci.
- **Poziomy zaufania.** Niezarejestrowany eksport jest poprawny strukturalnie, ale podpisany anonimowo (`untrusted`). Zarejestruj **zweryfikowaną tożsamość** (krótkotrwały certyfikat z Lolly CA, powiązany z adresem e-mail), a weryfikatory przypinające korzeń Lolly zgłoszą `trusted` + adres e-mail podpisującego. Zaufany urząd znaczników czasu oraz zielone światło zewnętrznego walidatora (zgodność z C2PA) są w planach. Każdy poziom jest jawny, a plik zawsze deklaruje tylko takie zaufanie, jakie potrafi udowodnić.
- **Okres ważności poświadczenia** to decyzja operatora/użytkownika w chwili podpisywania: 7 / 30 / 90 / 365 dni, domyślnie 30.
- **Weryfikacja odbywa się na urządzeniu.** Przeciągnij dowolny plik na `/valid` (lub `lolly validate <file>`), aby uzyskać offline'owy raport o tym, czy naprawdę powstał w Lolly i czy od tego czasu pozostał niezmieniony. Zobacz [Tożsamość Content Credentials](/info/content-credentials-identity.html).

> **Uwagi o interoperacyjności.** Lolly już dziś weryfikuje offline własne poświadczenia oraz wiele poświadczeń zewnętrznych. Dwie kwestie interoperacyjności są w toku: pełne odczytywanie manifestów roszczeń C2PA w wersji **v2** od innych producentów oraz WebM — który nie ma jeszcze ustandaryzowanego mapowania C2PA, więc Lolly dołącza manifest jako część Matroska (narzędzia zewnętrzne weryfikują pliki MP4 z Lolly od ręki; WebM dołączy, gdy standard się ustabilizuje).

## Szyfrowanie i zabezpieczanie hasłem

W przypadku plików, które muszą podróżować zablokowane, wszystko dzieje się na urządzeniu:

- **Hasło otwarcia PDF** — *Standard* to 40-bitowy środek odstraszający RC4 (otwiera się wszędzie, może podróżować w linku); *Silny* to **AES-256** (PDF 2.0), wpisywany przy eksporcie i nigdy nieumieszczany w linku.
- **Zablokowane pobrania** — cały plik ZIP, folder Projects lub przebieg wsadowy można zablokować w całości: *Standard* ZipCrypto (słaby, uniwersalny) lub *Silny* **AES-256** (WinZip AE-2). Ochrona wielowarstwowa: każdy PDF wewnątrz silnego ZIP-a jest *dodatkowo* indywidualnie zablokowany AES-256, więc pozostaje zablokowany po rozpakowaniu.
- **Linki udostępniania chronione hasłem** — cały stan linku jest szyfrowany AES-256 kluczem wyprowadzonym przez PBKDF2; podróżuje wyłącznie szyfrogram, hasło nigdy nie znajduje się w linku, a odszyfrowanie odbywa się w przeglądarce odbiorcy.

## Gotowe na air-gap

Air-gap to **pełnoprawne wdrożenie**, a nie tryb specjalny — Lolly domyślnie działa bez sieci w momencie renderowania. Powłoka webowa to PWA działające w trybie offline-first (service worker); czcionki i WASM są przechowywane na urządzeniu; stan narzędzia jest utrwalany lokalnie przez mostek hosta, nigdy w `localStorage`. Każde narzędzie, które sięga do sieci, robi to wyłącznie przez zadeklarowaną w swoim manifeście funkcję `host.net` znajdującą się na **liście dozwolonych** — powłoka, która nie może (lub nie chce) jej spełnić, zastępuje ją zaślepką. Dostarcz powłoki na urządzenia przez swój MDM albo uruchom jedną instancję wewnątrz sieci, a instalacja w pełni odseparowana od sieci renderuje, eksportuje, szyfruje i weryfikuje poświadczenia, nie mając dokąd „zadzwonić do domu”.

## Warto wiedzieć

Kilka rzeczy, które warto mieć jasne, zanim je wdrożysz:

- **Wzmacnianie w toku.** Kryptografia i parsery przechodzą przez wzmacnianie w skali korporacyjnej SUSE (patrz wyżej) — mocne z założenia już dziś; wdrażaj jako element ochrony wielowarstwowej tam, gdzie umowa wymaga certyfikowanej gwarancji.
- **Hooki narzędzi *nie* są piaskownicą bezpieczeństwa.** Opcjonalny `hooks.js` narzędzia działa z wstrzykniętym mostkiem hosta, ale w powłoce przeglądarkowej wykonuje się w kontekście strony i *może* sięgnąć do `window`/`document`/`fetch`. Traktuj kod narzędzia tak, jak traktujesz każdy uruchamiany kod — przejrzyj go. Właśnie dlatego organizacja korzystająca ze współdzielonego katalogu może kontrolować go przez recenzję w Git; tak czy inaczej uruchamiaj tylko te narzędzia, które sprawdziłeś, dopóki nie pojawi się izolacja w Workerach.
- **Content Credentials są odporne na manipulację w sposób wykrywalny.** Wykrywają modyfikację, a nie zapobiegają jej — zobacz uwagi o interoperacyjności powyżej.
- **Dwa poziomy szyfrowania.** Blokady *Standard* to szybkie, uniwersalne środki odstraszające; *Silny* (AES-256) to pełna ochrona — sięgaj po Silny w przypadku wszystkiego, co wrażliwe, pamiętając, że wymaga nowoczesnego czytnika.

## Dokąd dalej

- **[Adopcja i zarządzanie](/info/adoption-governance.html)** — persony, wskaźnik odciążenia i pełne zarządzanie-jako-dane.
- **[Wdrożenie](/info/deployment.html)** — wdrażanie/serwowanie/hybryda, MDM i samodzielny hosting usług.
- **[Konfiguracja](/info/configuration.html)** — profile, pakiety marki, bramkowanie funkcji i flagi funkcji.
- **[Polityka prywatności](/info/privacy.html)** — formalne oświadczenie „nic nie zbiera, nic nie wysyła”.
