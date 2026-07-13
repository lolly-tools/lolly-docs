# Jak Lolly wypada na tle innych

Gdzie ta platforma wpisuje się w szerszy krajobraz narzędzi kreatywnych i gdzie celowo **nie** działa.

> **Status pilotażu:** Lolly to prototyp w zamkniętym pilotażu, a nie gotowy produkt, a jego bezpieczeństwo przechodzi obecnie rygorystyczne wzmacnianie infrastruktury po stronie SUSE, przygotowując się do skali korporacyjnej. To pozycjonowanie pokazuje, gdzie Lolly *chce* się znaleźć - strona [Wdrożenie i zarządzanie](/info/adoption-governance.html#status) opisuje, jak jest to testowane w praktyce.

## Krajobraz

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

- Szybkie generowanie zoperacjonalizowanych zasobów kreatywnych (kafelki wydarzeń, plakietki, podpisy, alerty)
- Swobodne rozmieszczanie na otwartym płótnie (Layout Studio), gdy elementy - kolory, typografia, ikony, obrazy - muszą pozostać zgodne z globalnymi ustawieniami marki
- Osadzanie gotowego projektu z Figmy, Illustratora, InDesign lub Penpot (Import projektu w Layout Studio), aby można go było edytować, zarządzać nim i deterministycznie renderować ponownie w każdym formacie Lolly
- Przepływy typu jeden-do-wielu „wypełnij trzy pola, otrzymaj gotowy zasób" - w tym masowe przebiegi z arkusza kalkulacyjnego/pliku CSV w siatce wsadowej `/pro` (wklej lub zaimportuj wiersze, jeden gotowy zasób na wiersz, pobierz jako plik zip)
- Zawsze aktywne, cykliczne materiały brandowane
- Zadania, w których centralna kontrola nad wyrazem marki liczy się bardziej niż swoboda ekspresji

## Do czego nie używać

- Treści szyte na miarę lub flagowe treści hero (billboardy, duże filmy)
- Unikalne prace kampanijne, które naprawdę wymagają projektanta
- Prace koncepcyjne, które muszą całkowicie wyjść poza system marki - otwarte płótno Lolly wciąż dostosowuje kolory, typografię i zasoby do globalnych ustawień marki, i o to właśnie chodzi

## Co zapewnia wyłącznie ta platforma

- **Ogromny potencjał projektowy dostarczany bezpiecznie w kontekście.** Narzędzia mogą wyrażać odważne pomysły projektowe w ramach twardo zakodowanych barier ochronnych.
- **Programowo definiowana automatyzacja treści, która zwraca gotowy zasób.** Dane wejściowe → gotowy plik. Żadnego „teraz zapisz to w swoim narzędziu projektowym i przetwórz dodatkowo".
- **Narzędzia komponują narzędzia.** Jedno narzędzie może osadzić render innego narzędzia i zwrócić go jako część jednego gotowego zasobu, bez powiązania kodu między narzędziami - prymityw, którego nie oferuje w tym krajobrazie żaden produkt typu otwarte płótno ani szablony DAM.
- **Neutralność wobec dostawcy.** Pełna kontrola nad funkcjami i kosztami. Silnik open source. Narzędzia i zasoby to treści śledzone w gicie, a nie zamknięte w bazie danych SaaS.
