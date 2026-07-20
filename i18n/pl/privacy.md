# Polityka prywatności

*Ostatnia aktualizacja: 19 lipca 2026*

> **W prostych słowach.** Dokumenty, obrazy, filmy i pliki, które tworzysz w Lolly,
> zostają na Twoim urządzeniu. Do zwykłego użytku nie ma żadnych kont, sama aplikacja
> nie ustawia plików cookie, a w całym kodzie źródłowym nie ma analityki ani żadnych
> trackerów - to nie jest "nie wykorzystujemy tych danych", ich po prostu nie ma w
> źródle. Istnieje krótka, kompletna lista wyjątków, w których oprogramowanie w ogóle
> kontaktuje się z siecią, i każdy z nich jest opisany poniżej ze szczegółami: co
> wychodzi, do kogo i kiedy. Jedyny wyjątek, który dotyczy czegokolwiek osobistego, to
> logowanie, które musisz sam(a) świadomie rozpocząć. Jeśli czegoś nie ma w tym
> dokumencie, to się nie dzieje.

## Czego dotyczy ta polityka

Lolly to oprogramowanie open-source - silnik, kilka powłok aplikacji (webowa,
desktopowa, mobilna, CLI) oraz rozszerzenie do przeglądarki - które każdy może
uruchomić. Ta polityka ma dwie części:

- **Samo oprogramowanie**: co robi, a czego nie robi z Twoimi danymi, gdziekolwiek
  jest uruchomione. To jest właściwość kodu, więc jest prawdziwe dla każdego wdrożenia
  Lolly, naszego czy czyjegokolwiek innego.
- **lolly.tools**, referencyjne wdrożenie obsługiwane przez SUSE: konkretne decyzje
  podjęte przy uruchamianiu jego opcjonalnych elementów po stronie serwera (co jest
  logowane, przez jak długo, przez kogo).

Jeśli korzystasz z samodzielnie hostowanej lub firmowej instancji Lolly, opisane
poniżej zachowanie oprogramowania nadal obowiązuje, ale to *operator* tej instancji -
nie SUSE - odpowiada za wszystko po stronie serwera: za swój endpoint renderujący,
swój serwer MCP, swój urząd certyfikacji Content Credentials, jeśli taki prowadzi.
Poproś go o jego własną politykę; zobacz [Wdrażanie i zarządzanie](/info/adoption-governance.html),
aby dowiedzieć się, co wiąże się z obsługą Lolly.

## Aplikacja: co zostaje na Twoim urządzeniu

Webowa, desktopowa i mobilna powłoka Lolly uruchamiają cały silnik renderujący po
stronie klienta. Otwieranie narzędzia, wypełnianie danych wejściowych, podgląd i
eksport odbywają się na Twoim urządzeniu - żaden serwer nie jest zaangażowany, a
aplikacja działa offline po jednorazowym wczytaniu.

**Aplikacja nie ustawia żadnych plików cookie.** Aby działać, przechowuje niewielką
ilość danych **wyłącznie na Twoim urządzeniu**, nigdy nieprzesyłanych:

- **Preferencje interfejsu** - motyw, język, ustawienia dźwięku, rozmiar paska
  bocznego i powiększenia, wybory sortowania i widoku, które podpowiedzi wprowadzające
  już widziałeś(-aś) - w `localStorage`, dzięki czemu są dostępne, zanim aplikacja
  skończy się uruchamiać.
- **Lokalną pamięć podręczną katalogu narzędzi i podglądów zasobów**, dzięki czemu
  galeria działa bez połączenia.
- **Lokalne liczniki użycia** dla statystyk na Twojej karcie profilu (ile eksportów,
  które narzędzia) - niewielki, ograniczony blob w `localStorage`, nigdy nieodczytywany
  przez nas, nigdy nigdzie niewysyłany.
- **Twoje własne dokumenty, zapisane sesje, przesłane zasoby i czcionki** -
  przechowywane w IndexedDB na Twoim urządzeniu, nigdy nieprzesyłane, nigdy
  nieodczytywane przez nikogo poza Tobą.

Nic z tego nie jest udostępniane, sprzedawane ani wykorzystywane do identyfikowania czy
śledzenia Ciebie. Nie ma tu na co wyrażać zgody, bo nie zachodzi żadne zbieranie danych
- jest tylko ta informacja, żebyś wiedział(a), co jest przechowywane i gdzie. Wszystko
możesz w każdej chwili usunąć poprzez **Profil → Wyczyść wszystkie moje dane** albo
czyszcząc pamięć witryny w przeglądarce. (Zgodnie z art. 5 ust. 3 dyrektywy o prywatności
i łączności elektronicznej pamięć, która jest ściśle niezbędna dla usługi, o którą
poprosiłeś(-aś), nie wymaga zgody - jedynie przejrzystości, którą zapewniają zarówno ten
dokument, jak i informacja w aplikacji.)

Twoja własna kopia zapasowa tych danych - pakiet `lolly-backup` tworzony przez
**Eksportuj i wyrenderuj wszystko** - to plik, który zachowujesz i kontrolujesz. Nigdy
nie trafia na nasze serwery, chyba że sam(a) zdecydujesz się gdzieś go wysłać. Zobacz
[Przenoszenie danych](/info/data-transfer.html).

## Utility działające na urządzeniu

Niektóre narzędzia - **Strip Hidden Data**, **Compress PDF** i inne noszące plakietkę
**"Działa na Twoim urządzeniu"** - operują na pliku, który dostarczasz. Plik jest
wczytywany do pamięci w Twojej przeglądarce, przekształcany lokalnie i udostępniany z
powrotem do pobrania. Nigdy nie jest przesyłany, bo na tej drodze nie ma serwera, na
który miałby trafić. Te utility działają offline, a ich wynik nie zawiera żadnego naszego
znaku wodnego ani metadanych - sensem większości z nich jest usuwanie i ochrona danych, a
nie dodawanie ryzyka.

## Kiedy aplikacja kontaktuje się z siecią, w całości

Poniższa tabela to kompletna lista wszystkiego, co aplikacja pobiera lub wysyła przez
sieć. Jeśli czegoś tu nie ma, aplikacja tego nie robi.

| Co | Co faktycznie opuszcza Twoje urządzenie | Kiedy |
|---|---|---|
| Synchronizacja katalogu narzędzi | Nic osobistego - żądanie własnego, publicznego indeksu narzędzi i zasobów Lolly | Przy uruchamianiu, potem buforowane offline |
| Zadeklarowana przez narzędzie funkcja sieciowa | Cokolwiek to konkretne narzędzie żąda (np. kafelki mapy) do konkretnych hostów, które dopuszcza na liście w swoim manifeście | Tylko podczas korzystania z tego narzędzia |
| Google Fonts | Nazwa wybranej rodziny czcionek i Twój adres IP, do serwerów czcionek Google | Tylko jeśli dodasz Google Font w edytorze marki - jednorazowe pobranie na rodzinę, potem czcionka pozostaje na Twoim urządzeniu |
| Sprawdzenie podpisu SEAL | Pojedyncze zapytanie DNS o klucz publiczny, do domeny wskazanej wewnątrz sprawdzanego pliku | Tylko jeśli Weryfikacja znajdzie rekord SEAL w sprawdzanym przez Ciebie pliku - nigdy sam plik |
| Modele detektorów dogłębnego skanowania | Nic osobistego - jednorazowe pobranie modelu z tego samego źródła (nie od podmiotu trzeciego) | Tylko jeśli włączysz dogłębne skanowanie w Weryfikacji |
| Zdalna instancja | Cokolwiek serwuje wskazana przez Ciebie instancja, przez tę samą synchronizację katalogu opisaną powyżej | Tylko jeśli świadomie wskażesz powłoce inne wdrożenie Lolly |

Żadne z nich nie wysyłają Twoich dokumentów, projektów, sesji ani przesłanych plików
gdziekolwiek. Istnieją po to, by przynosić rzeczy *do* Twojego urządzenia (narzędzia,
czcionki, modele, klucz publiczny), a nigdy po to, by wysyłać rzeczy *z* niego, z
wyjątkami wskazanymi wprost w sekcjach poniżej.

## Bezpośrednio linkowane adresy URL renderowania

Sama aplikacja pozostaje w całości na Twoim urządzeniu. Osobno, i tylko jeśli z tego
korzystasz, lolly.tools (oraz każda samodzielnie hostowana instancja, która pozostawia to
włączone) odpowiada na **bezpośrednio linkowane adresy URL renderowania** -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - dzięki czemu udostępniony link
Lolly może pojawić się jako żywy obraz w pliku README, na wiki albo w panelu. Pobranie
jednego z tych adresów prosi serwer o wyrenderowanie **publicznych danych narzędzi i
katalogu** z danymi wejściowymi zapisanymi w adresie URL, i to jest cała wymiana:

- **Żadnych kont, żadnych plików cookie, żadnego stanu.** Endpoint jest anonimowy; nic
  nie jest przechowywane na żądanie, a nic na Twoim urządzeniu nie jest odczytywane. Twoje
  dokumenty, sesje i przesłane pliki nigdy nie opuszczają Twojej przeglądarki - nie mogą w
  ogóle pojawić się w tych linkach.
- **Dane wejściowe są publiczne z założenia** - są tym, co autor linku wpisał do adresu
  URL, i może je odczytać każdy, do kogo link dotrze. Nie umieszczaj sekretów w
  udostępnianym linku, Lolly udostępnia funkcję szyfrowania linków dla wrażliwych treści.
- Odpowiedzi są **buforowane i objęte limitem żądań** jak każdy publiczny obraz oraz
  oznaczone `noindex`, żeby wyszukiwarki nie indeksowały Twoich renderów.

Hostujesz Lolly samodzielnie i nie chcesz mieć publicznej powierzchni renderowania?
Ustaw `LOLLY_DISABLE_RENDER_GET=1`, a każdy z tych adresów URL zwróci 404.

## Serwer MCP (opcjonalny, dla agentów AI)

Do Lolly może też sięgnąć agent AI przez Model Context Protocol - endpoint obsługiwany
przez operatora (lolly.tools prowadzi taki; każdy może hostować własny, w tym całkowicie
odizolowany od sieci). Dzieli on postawę "bez kont" ścieżki renderowania oraz dwa
narzędzia, które z konieczności obsługują bajty plików:

- **`lolly_transform`** (uruchomienie utility działającego na urządzeniu po stronie
  serwera, w imieniu wywołującego agenta) oraz **`lolly_verify`** (sprawdzenie Content
  Credentials) - oba przyjmują bajty pliku od wywołującego. Są przetwarzane **w procesie,
  w pamięci**, a wynik jest zwracany w tym samym wywołaniu - plik nigdy nie jest zapisywany
  na dysku i nigdy nie jest przechowywany po zakończeniu żądania.
- Każde inne narzędzie - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - działa wyłącznie na parametrach (tekst, liczby, kolory, adresy
  URL, identyfikatory zasobów katalogu), tych samych danych wejściowych, które przyjmuje
  bezpośrednio linkowany adres URL renderowania.
- Dostęp odbywa się albo za pomocą współdzielonego tokena, który operator wydaje klientom,
  którym ufa, albo bezstanowo przez OAuth 2.1: krótkotrwałe podpisane tokeny weryfikowane
  wobec współdzielonego sekretu, nic nieprzechowywane po stronie serwera, a sam token nigdy
  nie jest zapisywany w logu ani w adresie URL renderowania.

## Tożsamość Content Credentials (logowanie, które musisz sam(a) rozpocząć)

Lolly może zapieczętować kryptograficzny **Content Credential** w Twoich eksportach, aby
każdy mógł zweryfikować, offline, że plik jest niezmieniony od chwili, gdy opuścił Lolly.
Tyle jest **domyślnie włączone i w pełni lokalne** - klucz podpisujący jest generowany na
Twoim urządzeniu, jest **niewyodrębnialny** (nie może go odczytać nawet własny kod Lolly),
a samo podpisywanie odbywa się offline. Ta sekcja dotyczy jednego *opcjonalnego* kroku
ponad tym: zapisania zweryfikowanej tożsamości, żeby Twoje eksporty mówiły "Zweryfikowano -
podpisano przez \<Twój e-mail\>" zamiast anonimowego klucza. **Jeśli pominiesz rejestrację,
nic z tej sekcji Cię nie dotyczy, a żadne dane osobowe nigdy nie opuszczają Twojego
urządzenia.**

Jeśli jednak się zarejestrujesz, oto dokładnie co się dzieje:

1. **Wybierasz metodę logowania** - GitHub, Google, SUSE (Okta) albo link przesłany
   e-mailem. W przypadku trzech dostawców OIDC jesteś przekierowywany(-a) na stronę
   logowania tego dostawcy, która podlega jego własnej polityce prywatności, nie naszej;
   usługa certyfikatów Lolly otrzymuje z powrotem jedynie zweryfikowany adres e-mail i
   nazwę dostawcy. W przypadku linku e-mailowego wpisany przez Ciebie adres jest
   przekazywany do **Resend**, transakcyjnego API poczty, wyłącznie po to, by dostarczyć
   ten jeden link.
2. **Krótkotrwały plik cookie chroni przekierowanie.** To jedyny plik cookie, jaki ustawia
   cały system Lolly: `lolly_ca_state`, `HttpOnly`, ograniczony do `/api/ca`, wygasający w
   ciągu dziesięciu minut. Niesie losową wartość, nie identyfikator śledzący, i istnieje
   tylko po to, by uniemożliwić sfałszowanie przekierowania OAuth. Jest usuwany, gdy tylko
   logowanie się zakończy.
3. **Twój adres IP jest wykorzystywany, na krótko, aby zapobiec nadużyciom** endpointów
   logowania (żeby jeden skrypt nie mógł zasypać skrzynki ani wyczerpać limitu e-maili) -
   przechowywany wyłącznie w pamięci serwera, przez przesuwne okno około jednej minuty,
   nigdy niezapisywany w logu ani nigdzie utrwalany.
4. **Usługa certyfikatów wydaje krótkotrwały certyfikat** (7, 30, 90 albo 365 dni, do
   Twojego wyboru, ograniczony polityką operatora), wiążący Twój zweryfikowany adres e-mail
   z publiczną połową pary kluczy wygenerowanej na Twoim urządzeniu. Prywatna połowa nigdy
   nie opuszcza Twojej przeglądarki.
5. **Wydanie jest logowane**: Twój adres e-mail, użyty dostawca, krótki skrót numeru
   seryjnego certyfikatu i jego data wygaśnięcia, zapisywane w logach operacyjnych usługi -
   oraz, tylko jeśli operator taki skonfigurował, do kontrolowanego przez niego webhooka. To
   jedyne miejsce, gdzie fragment Twoich danych osobowych jest przechowywany na serwerze, i
   istnieje po to, by można było wyśledzić naruszony lub błędnie wydany certyfikat oraz
   poddać audytowi samo wydawanie certyfikatów przez CA.
6. **Potem podpisywanie znów jest offline** przez całą żywotność certyfikatu. Eksport pliku
   nigdy nie kontaktuje się z usługą certyfikatów - kontaktowała się z nią tylko
   rejestracja.

W przypadku lolly.tools konkretnie: SUSE obsługuje usługę certyfikatów i przechowuje te
logi wydawania. Zobacz [Twoje prawa](#your-rights) poniżej, aby dowiedzieć się, jak
zapytać o wpis lub go usunąć.

## Rozszerzenie do przeglądarki

Rozszerzenie do przeglądarki **Lolly URL Screenshot** nie zbiera, nie przechowuje ani nie
przesyła żadnych danych osobowych. Bez analityki, bez śledzenia, bez zdalnego serwera.

**Co robi.** Kiedy poprosisz aplikację webową Lolly o zrzut ekranu jakiegoś adresu URL,
rozszerzenie otwiera tę stronę w tymczasowej karcie w tle, przechwytuje ją w Twojej
przeglądarce za pomocą DevTools Protocol, zwraca obraz do aplikacji i zamyka kartę.
Wszystko dzieje się lokalnie, na Twoim własnym urządzeniu i w Twojej sieci.

**Dane.**

- **Niczego nie zbieramy.** Rozszerzenie nie ma żadnych serwerów i samo nie wykonuje
  żadnych żądań sieciowych.
- **Przechwycone obrazy** trafiają prosto do aplikacji Lolly w tej samej przeglądarce -
  rozszerzenie nigdy ich nie przesyła.
- **Adresy URL, które przechwytujesz**, są wykorzystywane wyłącznie do wczytania tej jednej
  strony na potrzeby tego jednego zrzutu ekranu. Nie są rejestrowane ani udostępniane.

**Uprawnienia.**

- **`debugger`** - aby przechwycić wyrenderowaną stronę za pomocą DevTools Protocol (tego
  samego mechanizmu, którego używa aplikacja desktopowa Lolly).
- **`tabs`** - aby otwierać i zamykać tymczasową kartę, w której wczytuje się strona.
- **Dostęp do hostów (`<all_urls>`)** - ponieważ strona, którą wybierzesz do przechwycenia,
  może znajdować się w dowolnej witrynie. Chrome pokazuje to przy instalacji jako szerokie
  ostrzeżenie o uprawnieniach; rozszerzenie odwiedza wyłącznie adres URL, który mu podasz.

Żadne z tych uprawnień nie służy do odczytywania, monitorowania ani przesyłania Twojej
aktywności w sieci poza tym jednym żądanym przechwyceniem.

## Logi infrastruktury

Jak każda witryna, serwery stojące za lolly.tools - i za dowolnym wdrożeniem Lolly -
generują standardowe logi dostępu serwera WWW za każdym razem, gdy jakiekolwiek żądanie w
ogóle do nich dociera: adres IP, żądaną ścieżkę, znacznik czasu, klienta użytkownika,
przechowywane przez ograniczony czas na potrzeby bezpieczeństwa i zapobiegania nadużyciom.
To bazowe zachowanie hostingu, a nie coś, co Lolly dodaje na wierzchu, i nigdy nie zawiera
zawartości Twoich dokumentów, bo te nigdy nie docierają do serwera. Jedynym celowym
wyjątkiem jest plik, który wprost przekazujesz do wywołania MCP `lolly_transform` lub
`lolly_verify`, a który jest przetwarzany w pamięci i nigdy niezapisywany na dysku ani w
logu, jak opisano powyżej.

## Prywatność dzieci

Lolly świadomie nie zbiera danych osobowych od nikogo, w żadnym wieku, w zwykłym toku
korzystania z aplikacji - nie ma czego zbierać. Jedyne miejsce, gdzie dane osobowe (adres
e-mail) są kiedykolwiek gromadzone, to rejestracja Content Credentials, opisana powyżej,
która nie jest skierowana do dzieci ani dla nich przeznaczona.

## Twoje prawa

Ponieważ niemal wszystko, czego dotyka Lolly, jest przechowywane wyłącznie na Twoim własnym
urządzeniu, większość tego, co prawo o ochronie danych nazywa "Twoimi prawami" - dostęp,
sprostowanie, usunięcie, przenoszenie - to rzeczy, które możesz zrobić sam(a), od razu, bez
proszenia kogokolwiek: Twoje dane żyją w pamięci Twojej przeglądarki, w postaci, którą
możesz obejrzeć, wyeksportować (**Eksportuj i wyrenderuj wszystko**, powyżej) albo usunąć
(**Profil → Wyczyść wszystkie moje dane**).

W przypadku jednego fragmentu danych osobowych, który może trafić na serwer - Twojego adresu
e-mail, jeśli zarejestrowałeś(-aś) się do Content Credentials - skontaktuj się z nami
(poniżej), aby zapytać, co przechowujemy, lub poprosić o usunięcie go z aktywnych logów.
Usunięcie wpisu z logu nie unieważnia już wydanego certyfikatu (jest on z założenia
krótkotrwały i po prostu wygasa); powoduje jedynie, że ten wpis przestaje pojawiać się w
przyszłych eksportach logu.

Nie sprzedajemy danych. Nie mamy żadnych na sprzedaż.

## Zmiany w tej polityce

Data na górze zmienia się za każdym razem, gdy zmienia się ten dokument. Zmiana, która
modyfikuje to, co opuszcza Twoje urządzenie, lub to, co jest przechowywane, dostaje własny
wiersz tutaj, a nie cichą edycję - jeśli chcesz zobaczyć, co się zmieniło, zapytaj
(poniżej) albo porównaj z [publicznym źródłem](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Kontakt

Pytania albo prośba w ramach "Twoich praw" powyżej: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). W przypadku samodzielnie hostowanej lub firmowej
instancji Lolly skontaktuj się zamiast tego z tym, kto ją obsługuje - SUSE i projekt open
source Lolly nie przechowują żadnych danych dla wdrożeń, których nie prowadzą.
