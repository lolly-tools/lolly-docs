# Jak Lolly wypada na tle innych

Gdzie ta platforma wpisuje się w szerszy krajobraz narzędzi kreatywnych i gdzie celowo **nie** działa.

> **Status pilotażu:** Lolly to prototyp w zamkniętym pilotażu, a nie gotowy produkt, a jego bezpieczeństwo przechodzi obecnie rygorystyczne wzmacnianie infrastruktury po stronie SUSE, przygotowując się do skali korporacyjnej. To pozycjonowanie pokazuje, gdzie Lolly *chce* się znaleźć - strona [Wdrożenie i zarządzanie](/info/adoption-governance.html#status) opisuje, jak jest to testowane w praktyce.

## Krajobraz

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

| Funkcja | Canva (Otwarte płótno) | Portale marki (szablony DAM) | Illustrator (Pro, desktop) | Figma / Penpot (Pro, online) | **Lolly (Najpierw ograniczenia)** |
|---|---|---|---|---|---|
| Masowe generowanie treści | częściowo | ✗ | ✗ | ✗ | **✓** |
| Działa w pełni offline | ✗ | ✗ | ✓ | częściowo | **✓** |
| Logika szablonów i twarde ograniczenia | ✗ | częściowo | ✗ | częściowo | **✓** |
| Nie wymaga umiejętności projektowych | częściowo | ✓ | ✗ | ✗ | **✓** |
| Automatyczne Content Credentials | ✗ | ✗ | częściowo | ✗ | **✓** |
| Narzędzia komponują inne narzędzia | ✗ | ✗ | ✗ | ✗ | **✓** |
| Otwarty silnik, bez uwięzienia w SaaS | ✗ | ✗ | ✗ | częściowo | **✓** |
| Poświadczenia treści C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opcjonalna proweniencja klasy śledczej | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplikacje mobilne i desktopowe | ✓ | ✗ | ✗ | częściowo | **✓** |
| Wiersz poleceń i TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Kształt luki jest jasny: nic w istniejącym krajobrazie nie daje nam wyników generatywnych, które byłyby najpierw oparte na ograniczeniach, zdolne do pracy offline, niewymagające umiejętności, dostępne wewnętrznie. Lolly ma teraz własne otwarte płótno - **Layout Studio**, swobodne płótno z bezpośrednią manipulacją - ale z decydującą różnicą względem kolumny Canva: kolory, typografia i zasoby na nim umieszczane są zgodne z globalnymi ustawieniami marki, więc nawet swobodne rozmieszczanie pozostaje najpierw oparte na ograniczeniach. Czym Lolly wciąż **nie** jest, to nieograniczony pakiet projektowy; projektanci nadal będą używać Illustratora i Figmy do prac szytych na miarę - a gdy taka praca musi stać się zarządzanym, odtwarzalnym zasobem, funkcja [Import projektu](/info/design-import.html) w Layout Studio przenosi gotowy plik Figma/Illustrator/Penpot na płótno jako edytowalne, zgodne z marką bloki.

## Do czego używać

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

- Szybkie generowanie zoperacjonalizowanych zasobów kreatywnych (kafelki wydarzeń, plakietki, podpisy, alerty)
- Swobodne rozmieszczanie na otwartym płótnie (Layout Studio), gdy elementy - kolory, typografia, ikony, obrazy - muszą pozostać zgodne z globalnymi ustawieniami marki
- Osadzanie gotowego projektu z Figmy, Illustratora, InDesign lub Penpot (Import projektu w Layout Studio), aby można go było edytować, zarządzać nim i deterministycznie renderować ponownie w każdym formacie Lolly
- Przepływy typu jeden-do-wielu „wypełnij trzy pola, otrzymaj gotowy zasób" - w tym masowe przebiegi z arkusza kalkulacyjnego/pliku CSV w siatce wsadowej `/pro` (wklej lub zaimportuj wiersze, jeden gotowy zasób na wiersz, pobierz jako plik zip)
- Zawsze aktywne, cykliczne materiały brandowane
- Zadania, w których centralna kontrola nad wyrazem marki liczy się bardziej niż swoboda ekspresji

Deck Studio dobrze pokazuje, gdzie jest tu sufit: cała prezentacja zadeklarowana jako dane, rozłożona na żywo na kanwie i wyeksportowana jako natywny, edytowalny PowerPoint.

## Do czego nie używać

- Treści szyte na miarę lub flagowe treści hero (billboardy, duże filmy)
- Unikalne prace kampanijne, które naprawdę wymagają projektanta
- Prace koncepcyjne, które muszą całkowicie wyjść poza system marki - otwarte płótno Lolly wciąż dostosowuje kolory, typografię i zasoby do globalnych ustawień marki, i o to właśnie chodzi

## Zatwierdzaj narzędzie, nie plik

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Każde inne narzędzie w tym krajobrazie produkuje *plik*, który potem trzeba sprawdzić - menedżer marki w wątku na Slacku, dział prawny przy klauzuli, runda zmian, kolejny przegląd. Lolly przenosi zatwierdzenie **o krok w górę strumienia**. Zasady marki - dokładne kody hex, licencjonowane pliki fontów, spady, odstępy - są wpisane na stałe w HTML i CSS narzędzia, więc szablon *fizycznie nie może* wypuścić zasobu niezgodnego z marką. Sam układ jest elementem nośnym.

Przestajesz więc zatwierdzać wyniki, a zaczynasz zatwierdzać **narzędzie**, które je tworzy. Zatwierdź je raz, a każdy zasób, jaki kiedykolwiek wytworzy, jest wstępnie zatwierdzony już z samej konstrukcji - bez człowieka w pętli, bez cyklu przeglądu, przy dowolnej skali.

To właśnie ta zmiana paradygmatu, którą faktycznie przynosi deterministyczny silnik: to nie szybsza wersja starego procesu zatwierdzania, to likwidacja tego procesu. Dla zespołu kreatywnego jest to bariera ochronna, a nie zamiennik - nadal rzucasz piłkę (dane, tekst, obraz), a kod jest tą bandą na torze do bowlingu, która utrzymuje każdy rzut poza rynną.

| Zatwierdzanie zasobów po staremu | Zatwierdzanie narzędzia, na sposób Lolly |
|---|---|
| Każdy gotowy plik sprawdzany osobno, jeden po drugim | Narzędzie sprawdzane raz |
| Zgłoszenie → projektant buduje → przegląd marki → kontrola prawna → zmiany → ponowny przegląd | Jedna zmiana parametru → gotowy zasób |
| Projektant, menedżer marki, dział prawny i zgłaszający - wszyscy w pętli | Sam producent |
| Dni na jeden zasób | Sekundy na jeden zasób |
| 10 000 zasobów = 10 000 cykli przeglądu | 10 000 zasobów = zero (szablon był już zatwierdzony) |

## Co zapewnia wyłącznie ta platforma

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Ogromny potencjał projektowy dostarczany bezpiecznie w kontekście.** Narzędzia mogą wyrażać odważne pomysły projektowe w ramach twardo zakodowanych barier ochronnych.
- **Programowo definiowana automatyzacja treści, która zwraca gotowy zasób.** Dane wejściowe → gotowy plik. Żadnego „teraz zapisz to w swoim narzędziu projektowym i przetwórz dodatkowo".
- **Narzędzia komponują narzędzia.** Jedno narzędzie może osadzić render innego narzędzia i zwrócić go jako część jednego gotowego zasobu, bez powiązania kodu między narzędziami - prymityw, którego nie oferuje w tym krajobrazie żaden produkt typu otwarte płótno ani szablony DAM.
- **Neutralność wobec dostawcy.** Pełna kontrola nad funkcjami i kosztami. Silnik open source. Narzędzia i zasoby to treści śledzone w gicie, a nie zamknięte w bazie danych SaaS.

Pierwszy z nich jest tym, którego najczęściej się nie docenia. Mapa miasta w jakości plakatowej, wyrysowana jako prawdziwe wektorowe ścieżki dróg i wody, z jednej listy rozwijanej i dwóch pól kolorów, których nie da się skierować poza markę:

