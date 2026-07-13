# Profile - kim jesteś, gdy tworzysz

**Profil** to robocza tożsamość, *jako* którą tworzy Lolly. To niewielki zestaw danych, z których narzędzie może korzystać, żebyś nie musiał wpisywać ich za każdym razem - twoje imię i nazwisko, dane kontaktowe, opcjonalne zdjęcie profilowe, kilka preferencji - plus wszystko, co gromadzisz podczas pracy: zapisane sesje, przesłane obrazy oraz lokalne zestawienie aktywności.

Wszystko w profilu znajduje się **na urządzeniu**, w lokalnej bazie danych przeglądarki (IndexedDB w webowej aplikacji PWA, system plików w aplikacjach Tauri). Nie ma konta i nic nie jest przesyłane. Zarządzasz nim w sekcji **Profil** (prawy górny róg galerii); narzędzia zawsze tylko go *odczytują* i wyłącznie te konkretne pola, do których wstępnego wypełniania zostały stworzone.

> Profil dotyczy *ciebie* (lub kogokolwiek, kto tu tworzy). Różni się od **Platformy** - kolorów marki, czcionek i ustawień globalnych - oraz od **Możliwości**, katalogu tego, co potrafi aplikacja. Zobacz [Profil a Platforma a Możliwości](#profile-vs-platform-vs-capabilities) na końcu.

## Co zawiera profil

| Element | Co to jest |
|---|---|
| **Imię i nazwisko** | Imię oraz nazwisko. |
| **Kontakt** | E-mail i telefon. |
| **Lokalizacja** | Miasto i kraj. |
| **Zdjęcie profilowe** | Opcjonalne zdjęcie, przycięte do kwadratu i przechowywane jako lokalny obraz. Używane przez narzędzia takie jak podpisy e-mail, karty z cytatami, bloki kolorów i dynamiczne układy. |
| **Użyj moich danych** | Pojedynczy przełącznik zgody. Decyduje, czy twoje dane osobowe są dołączane jako **pochodzenie** - wiersz autora/informacji o autorstwie osadzony w eksportowanych plikach - oraz jako autor w zadaniach wsadowych **/pro**. (Nie kontroluje wstępnego wypełniania: zobacz [Jak narzędzia korzystają z twojego profilu](#how-tools-use-your-profile).) |
| **Preferencje** | Twój motyw (jasny, ciemny lub SUSE) oraz to, które części aplikacji włączyłeś za pomocą **Flag funkcji**. |
| **Twoja praca** | Zapisane sesje (z miniaturami) - uporządkowane w zagnieżdżone foldery w sekcji **[Projekty](/info/using.html)** - twoja biblioteka **Moje obrazy** oraz lokalne statystyki aktywności, wszystko powiązane z tym profilem. |

Nic z tego nie jest wymagane. Pusty profil to całkowicie dobry profil; wypełniasz tylko to, co oszczędza ci pisania.

## Profil to kontekst, a nie tylko osoba

Słowo „profil" sugeruje jedną, stałą osobę, ale w Lolly to tak naprawdę **kontekst tworzenia** - *kim jesteś, gdy tworzysz daną rzecz*. Ten kontekst może przybierać trzy różne formy, a Lolly obsługuje je wszystkie tak samo.

### Jako osoba

Wariant domyślny. Profil to ty: twoje imię i nazwisko, twój e-mail, twoje zdjęcie profilowe. Ustaw je raz, a twój podpis, twój identyfikator i twój układ konferencyjny wypełnią się same. To wszystko, czego większość ludzi kiedykolwiek potrzebuje.

### Jako zespół

Profil nie musi być pojedynczym człowiekiem. Może reprezentować **zespół lub funkcję w organizacji**: wspólną nazwę zespołu, adres skrzynki grupowej (`events@…`), dział, zdjęcie zespołu lub znak jednostki. Jedna osoba go konfiguruje, eksportuje (zobacz niżej), a reszta zespołu wczytuje ten sam profil - dzięki czemu wszystko, co zespół tworzy, zawiera spójne dane bez konieczności ponownego wpisywania ich przez kogokolwiek. Współdzielony kiosk lub wypożyczony laptop demonstracyjny może korzystać z jednego profilu zespołu, jako który tworzy każdy, kto z niego korzysta.

### Jako funkcja - rola, którą czasem przyjmujesz

To przypadek, który pomija sztywny model „jedna osoba, jeden profil". Możesz być **menedżerem wydarzeń przez trzy dni w roku**, a przez resztę czasu kimś zupełnie innym. Przez te trzy dni chcesz mieć dane wydarzenia, skrzynkę wydarzenia, może pod-markę wydarzenia, żeby wypełnić identyfikatory i oznakowanie; przez pozostałe 362 dni chcesz odzyskać swoją zwykłą tożsamość.

W Lolly ta rola to po prostu **kolejny profil, który masz pod ręką** - zapisany pakiet (następna sekcja), który wczytujesz na czas wydarzenia i odkładasz na bok po jego zakończeniu. Rola to kapelusz, a nie nowe konto. Zakładaj go, gdy go potrzebujesz, i zdejmuj, gdy skończysz.

## Jedna instalacja, jeden aktywny profil - wiele możesz zachować

W danej chwili instalacja ma **jeden aktywny profil** - dane, które narzędzie widzi teraz. Nie ma przełącznika profili w aplikacji; zamiast tego każdy profil jest **przenośnym pakietem** (pojedynczy plik `.zip`, zobacz [niżej](#moving-a-profile-to-a-new-device)). To celowo ten sam mechanizm, co przeniesienie na nowe urządzenie - profil to plik, który możesz zapisać, skopiować i wczytać.

Jeśli więc naprawdę żonglujesz kilkoma kontekstami (ty, twój zespół, kapelusz menedżera wydarzeń), trzymasz kilka pakietów i wczytujesz ten, którego potrzebujesz:

- **Najczystsze przełączenie:** **Profil → Pamięć → Wyczyść wszystkie moje dane**, a następnie **Importuj** pakiet dla kontekstu, w który wchodzisz. Teraz tworzysz wyłącznie jako ten profil.
- **Nakładanie:** import *bez* wcześniejszego czyszczenia **scala** dane - importowany profil, sesje i obrazy trafiają na to, co już jest, zastępując wszystko o tej samej nazwie i pozostawiając resztę. Przydatne do przeniesienia zapisanych sesji jednego zespołu do własnej konfiguracji; nie jest tym, czego chcesz, gdy potrzebujesz czystej granicy między rolami.
- **Obok siebie:** ponieważ wszystko jest ograniczone do urządzenia, osobny profil przeglądarki, osobne konto użytkownika lub druga zainstalowana aplikacja PWA - każde z nich niesie własny, niezależny profil Lolly. Uruchamiaj swoją osobistą instalację i instalację kiosku wydarzenia jednocześnie, bez przełączania.

> Trzymaj po jednym pakiecie na kontekst i zmieniaj nazwy plików tak, by odzwierciedlały ich zawartość (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Plik *jest* profilem.

## Przenoszenie profilu na nowe urządzenie

Ponieważ profil jest w całości lokalny, jedynym sposobem, by przenieść go na pustą instalację - nowy laptop, świeżo zresetowaną przeglądarkę, komputer współpracownika, maszynę offline - jest **przeniesienie pliku**. Żadne logowanie go za ciebie nie przywróci, i o to właśnie chodzi: nic nigdy nie opuściło twojego urządzenia.

W sekcji **Profil → Pamięć → Przenieś na inne urządzenie**:

- **Eksportuj moje dane** pobiera jeden plik `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - nazwany według profilu, do którego należy, z numerem sekwencyjnym na dzień, aby powtarzane eksporty nie kolidowały ze sobą (części nazwy są pomijane, gdy profil ich nie ma). Zawiera twój profil, każdą zapisaną sesję (wraz z jej miniaturą), twoje przesłane obrazy oraz twoje preferencje (motyw, układ, lokalne statystyki aktywności).
- **Importuj dane…** na drugiej instalacji wczytuje ten plik z powrotem, a ty kontynuujesz dokładnie tam, gdzie skończyłeś.

Pakiet to zwykły, samowystarczalny plik zip, więc podróżuje **dowolnym** sposobem - przez USB, AirDrop, udział sieciowy, e-mail do samego siebie - a urządzenie docelowe może być całkowicie offline. Każda część ma sumę kontrolną, dzięki czemu plik uszkodzony w trakcie przesyłania jest wykrywany podczas importu, a nie przywracany w połowie zepsuty. Import **scala** dane (profil/sesja/obraz o tej samej nazwie jest nadpisywany; cała reszta jest zachowywana), więc nigdy nie kasuje urządzenia docelowego, które było już w użyciu.

Co nie jest przenoszone: pamięć podręczna katalogu (pobiera się ponownie na nowym urządzeniu) oraz same narzędzia (zakłada się, że są już obecne).

Dokładny układ pakietu, zasady wersjonowania i reguły integralności znajdziesz w **[Transfer danych](/info/data-transfer.html)**; pełny przewodnik krok po kroku - **[Korzystanie z Lolly → Przenoszenie na inne urządzenie](/info/using.html#moving-to-another-device)**.

## Jak narzędzia korzystają z twojego profilu

Narzędzie zawsze tylko *wstępnie wypełnia* te pola profilu, do których powiązania zostało wyraźnie stworzone:

**Jawne powiązanie.** Autor narzędzia oznacza wejście jako pobierające dane z profilu (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Gdy narzędzie się otwiera, to wejście wstępnie wypełnia się z twojego profilu - i nadal możesz je nadpisać na czas tej jednej sesji bez zmiany profilu. Wstępne wypełnianie to lokalne udogodnienie i działa niezależnie od tego, czy opcja **Użyj moich danych** jest włączona.

**Zgoda (pochodzenie).** Gdy eksportujesz zasób, twoje dane opcjonalnie są dołączane jako **pochodzenie** - wiersz autora/informacji o autorstwie osadzony w metadanych pliku (PNG, PDF, SVG, …) - dzięki czemu gotowy zasób może wskazywać, kto go stworzył. To właśnie kontroluje opcja **Użyj moich danych**: pozostaw ją wyłączoną, a eksport nadal będzie nosił atrybucję narzędzia/platformy „Made with Lolly", ale żaden osobisty wiersz autora/kontaktu nie zostanie osadzony. (Ta sama zgoda ustawia autora w zadaniach wsadowych **/pro**.) (Autorzy narzędzi: zobacz [Tworzenie narzędzi → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) oraz [Host API → `host.profile`](/info/host-api.html#host-profile).)

## Profil a Platforma a Możliwości

Trzy rzeczy sąsiadują ze sobą w interfejsie i łatwo je pomylić:

- **Profil** - *ty* (lub twój zespół, lub rola, w której jesteś): imię i nazwisko, kontakt, zdjęcie profilowe, twoja zapisana praca. Osobisty, lokalny na urządzeniu, przenośny jako pakiet.
- **Platforma** - *marka*: kolory, czcionki i ustawienia globalne, względem których renderuje każde narzędzie. Wspólna i spójna, nie osobista.
- **Możliwości** - *to, co potrafi aplikacja*: pełny zestaw funkcji i narzędzia dostępne dla ciebie.

Profil zmienia to, *od kogo* pochodzi zasób; platforma zmienia to, *jak wygląda*; możliwości to *to, co możesz stworzyć*.

## Prywatność

Profil nigdy nie jest przesyłany, wysyłany ani używany do identyfikowania lub śledzenia ciebie - nie ma na co wyrażać zgody, jest tylko ta informacja, żebyś wiedział, co jest przechowywane. Skasuj to wszystko w dowolnej chwili za pomocą **Profil → Wyczyść wszystkie moje dane**. Zobacz [Politykę prywatności](/info/privacy.html).
