# Polityka prywatności

*Ostatnia aktualizacja: czerwiec 2026*

## Aplikacja Lolly

Lolly działa w całości w Twojej przeglądarce. **Niczego nie zbieramy, niczego nie przesyłamy i nie mamy żadnych serwerów, które widziałyby Twoje dane.** Nie ma analityki, nie ma śledzenia i nie ma żadnych podmiotów trzecich.

**Żadnych plików cookie — nigdzie.** Lolly nigdy nie zapisuje pliku cookie. Aby aplikacja działała, przechowuje niewielką ilość danych **na Twoim własnym urządzeniu** — wyłącznie takich, które są ściśle niezbędne dla funkcji, z której korzystasz:

- **Twój jasny/ciemny motyw** oraz kilka ustawień interfejsu (szerokość paska bocznego, powiększenie).
- **Lokalną pamięć podręczną katalogu narzędzi**, dzięki której galeria wczytuje się nawet bez połączenia.
- **Wyłącznie lokalne liczniki użycia** dla małych statystyk na Twojej karcie profilu — nigdy nie są nigdzie wysyłane.
- **Twoje własne dokumenty i zapisane sesje**, przechowywane lokalnie w przeglądarce (IndexedDB), aby Twoja praca zachowała się między wizytami.

Nic z tego nie jest udostępniane, przesyłane ani wykorzystywane do identyfikowania czy śledzenia Ciebie, więc nie ma tu na co wyrażać zgody — jest tylko ta informacja, żebyś wiedział(a), co jest przechowywane. Wszystko możesz w każdej chwili usunąć poprzez **Profil → Wyczyść wszystkie moje dane** albo czyszcząc pamięć witryny w przeglądarce.

Ta strona z dokumentacją (`/info`) jest jeszcze lżejsza: nie zapisuje **żadnych plików cookie**, przechowuje na Twoim urządzeniu jedynie preferencję jasnego/ciemnego motywu i serwuje wszystko — w tym czcionki — z samej lolly.tools, bez CDN ani żądań do podmiotów trzecich.

## Narzędzia działające na urządzeniu

Niektóre narzędzia to **utility**, które działają na pliku dostarczonym *przez Ciebie* — na przykład **Strip Hidden Data**, które pokazuje ukryte dane w obrazie lub pliku PDF (lokalizację GPS, aparat, autora, edytora oraz metadane dokumentu) i zwraca czystą kopię, albo **Compress PDF**, które zmniejsza plik PDF, ponownie kodując jego obrazy bezpośrednio na Twoim urządzeniu.

Działają one **w całości w Twojej przeglądarce**. Wybrany przez Ciebie plik jest wczytywany do pamięci na Twoim urządzeniu, przekształcany lokalnie i udostępniany z powrotem do pobrania. **Nigdy nie jest przesyłany** — nie ma serwera, na który miałby trafić. Oczyszczona kopia nie zawiera żadnego znaku wodnego ani naszych własnych metadanych identyfikujących; cały sens polega na tym, by dane *usunąć*, a nie dodać. Nic nie jest przechowywane po Twoim wyjściu, a te utility działają offline. Na każdym z nich zobaczysz plakietkę **„Działa na Twoim urządzeniu — nic nie jest przesyłane”**.

To przeciwieństwo typowej strony „skompresuj ten PDF” / „przekonwertuj ten HEIC”, która przesyła Twój plik na cudzy serwer, żeby wykonać pracę, którą Twoja przeglądarka może wykonać lokalnie.

## Rozszerzenie do przeglądarki

Rozszerzenie do przeglądarki **Lolly URL Screenshot** nie zbiera, nie przechowuje ani nie przesyła żadnych danych osobowych. Bez analityki, bez śledzenia, bez zdalnego serwera.

## Co robi

Kiedy poprosisz aplikację webową Lolly ([lolly.tools](https://lolly.tools)) o zrzut ekranu jakiegoś adresu URL, rozszerzenie otwiera tę stronę w tymczasowej karcie w tle, przechwytuje ją w Twojej przeglądarce za pomocą DevTools Protocol, zwraca obraz do aplikacji i zamyka kartę. Wszystko dzieje się lokalnie, na Twoim własnym urządzeniu i w Twojej sieci.

## Dane

- **Niczego nie zbieramy.** Rozszerzenie nie ma żadnych serwerów i samo nie wykonuje żadnych żądań sieciowych.
- **Przechwycone obrazy** trafiają prosto do aplikacji Lolly w tej samej przeglądarce — rozszerzenie nigdy ich nie przesyła.
- **Adresy URL, które przechwytujesz**, są wykorzystywane wyłącznie do wczytania tej jednej strony na potrzeby tego jednego zrzutu ekranu. Nie są rejestrowane ani udostępniane.

## Uprawnienia

- **`debugger`** — aby przechwycić wyrenderowaną stronę za pomocą DevTools Protocol (tego samego mechanizmu, którego używa aplikacja desktopowa Lolly).
- **Dostęp do kart** — aby otwierać i zamykać tymczasową kartę, w której wczytuje się strona.
- **Dostęp do hostów** — ponieważ strona, którą wybierzesz do przechwycenia, może znajdować się w dowolnej witrynie.

Żadne z tych uprawnień nie służy do odczytywania, monitorowania ani przesyłania Twojej aktywności w sieci.

## Kontakt

Masz pytania? Zajrzyj na [lolly.tools](https://lolly.tools).
