# FAQ

Najczęściej zadawane pytania wyświetlane w akordeonie na stronie startowej `/info`.

**Jak to utrzymywać:** każdy nagłówek `##` poniżej to pytanie; wszystko pod nim
(aż do następnego `##`) to odpowiedź. Odpowiedzi korzystają z tego samego lekkiego
markdownu co reszta strony - oddzielaj akapity pustą linią. Dodawaj, usuwaj lub
zmieniaj kolejność pytań tutaj i uruchom ponownie `npm run build:info` (albo `npm run dev:web`).
Wszystko powyżej pierwszego `##` (ten tytuł i te uwagi) jest ignorowane przez build.

## Co się dzieje, gdy wyrażę zgodę na stronie /profile?

Kiedy zaczynasz korzystać z Lolly, wszystko, co gdziekolwiek wpisujesz, jest w pełni prywatne, dopóki celowo nie zechcesz udostępnić tych informacji przez media lub link do udostępnienia (jeśli jesteś online).

Po zaznaczeniu zgody osadzamy część informacji z Twojego profilu jako proweniencję w zasobach i pakietach, aby zidentyfikować Cię jako źródło.

Lolly generuje dużą ilość treści. Stosujemy rygorystyczne podejście do minimalizacji danych, aby ograniczyć ryzyko.

### Czym są flagi funkcji?

Flagi funkcji włączają i wyłączają części Lolly. Zwykle kontroluje je administrator - w Lolly to Ty masz kontrolę.

## Jak zdobyć aplikacje mobilne lub desktopowe?

Każdy może rozpowszechniać własne aplikacje, a ich narzędzia i konfiguracja powinny się mocno różnić w zależności od odbiorców, dla których są przeznaczone. Nie ma więc jednej aplikacji, chyba że sam ją stworzysz albo dostaniesz ją od kogoś odpowiedniego.

## Skąd nazwa „Lolly Tools"?

**Lolly** Bo wolność jest słodka.
**Tools** - narzędzia są nieaktywne, gdy z nich nie korzystasz. Nie szpiegują Cię, nie uruchamiają tajnych programów,
zaprzęgnij je do pracy - Twoje polecenia, działania i warunki.

**Lolly** to australijskie, nowozelandzkie i brytyjskie określenie na „słodycze" lub „cukierki". Tak jak słodycze, narzędzia są bardzo smakowite dla tych, którzy ich potrzebują.

Śmiejemy się też z tego, ile czasu i pieniędzy oszczędzamy dzięki temu podejściu.

## Jakich przeszkód mogę się spodziewać przy wdrażaniu Lolly?

Lolly wpasowuje się wszędzie tam, gdzie już generujesz pliki - CLI to ten sam silnik
co aplikacja, więc potok uruchomiony o 2 w nocy nie może odbiegać od tego, co człowiek
widzi w podglądzie w przeglądarce. Tarcie przy wdrażaniu rzadko jest natury technicznej;
jest organizacyjne. Spodziewaj się tego:

**Trzeba stworzyć wyselekcjonowany katalog marki.** Lolly to platforma, a nie
gotowy pakiet Twoich szablonów. Przy *zarządzanym wdrożeniu* ktoś definiuje wspólny
katalog zasobów (logo, palety, czcionki jako stałe identyfikatory) i pisze manifest +
szablon dla każdego typu wyjścia. Pojedyncze osoby nie muszą jednak na to czekać - w
otwartej aplikacji każdy może wgrać własne pliki do katalogu i budować narzędzia w
Layout Studio od pierwszego dnia.

**Zarządzanie przez git jest opcjonalne - i nieznane osobom spoza inżynierii.** Jeśli prowadzisz
*wspólny, kontrolowany* katalog, zasada „recenzja PR-a *jest* moderacją" jest elegancka dla
inżynierów i obca większości zespołów odpowiedzialnych za markę i marketing. Jeśli osoby
decydujące o marce nie żyją w gicie, przyda Ci się przepływ pracy, który je z nim połączy - albo IT
po cichu stanie się strategicznym partnerem projektowym i szerszym instytucjonalnym strażnikiem
(co jest preferowane przez wiele długo działających środowisk produkcyjnych). Zespoły, które tego nie chcą,
po prostu to pomijają.

**Jest celowo wąskie - tak to przedstawiaj.** Lolly nie służy do treści szytych na miarę
ani flagowych. *Jest* Twoim osobistym DAM-em - nasyconym i wzmocnionym przez Twój system
projektowy, narzędzia i katalog - i *ma* otwarte płótno (Layout Studio), ale nawet tam
kolory, typografia i zasoby podporządkowują się aktywnym globalnym ustawieniom projektu, więc
swobodne układanie pozostaje w obrębie systemu. Oceniane względem Figmy czy Canvy będzie
wyglądać na ograniczone. Oceniane jako to, czym jest - zoperacjonalizowane, powtarzalne
generowanie zasobów na masową skalę - nie ma sobie równych. Błędne przedstawienie to
najczęstsza przeszkoda.

**Zarządzanie zmianą po stronie produkcji.** Istniejące procesy działają dzisiaj, nawet jeśli
wynik jest niezgodny z marką. Przekierowanie ich na silnik oznacza ponowne testowanie i ponowną naukę,
a „przecież już potrafimy tworzyć pliki" staje się wymówką, by nie migrować. Zacznij od przekonwertowania
jednego dobrze widocznego wyjścia o jakości produkcyjnej i pokazania obok siebie stanu przed i po.

Lolly podnosi wszystko na wyższy poziom.


## Czym narzędzia użytkowe różnią się od narzędzi?

**Podstawowa odpowiedź →** Narzędzia użytkowe nie zawsze muszą renderować, więc mogą mieć inny interfejs.

**Prawdziwa odpowiedź →** Powodem, dla którego narzędzia użytkowe można hostować w Lolly Tools, jest dodanie kolejnej „warstwy wygody" jako obrony, która zniechęca do wyprowadzania danych.

Dlaczego? Bo wiadomo, że codziennie ludzie biorą **poufne treści, które już mają**, i przekazują je
losowej stronie, by wykonać jedną małą, mechaniczną operację:

- „**Skompresuj ten PDF**" → wgrywa umowę / pasek płacowy / prezentację dla zarządu do nieznanych podmiotów.
- „**przekonwertuj HEIC na JPG**" → wgrywa prywatne zdjęcia (z danymi GPS EXIF) do hosta finansowanego z reklam
- „**przytnij / zmień rozmiar tego obrazu**" → wgrywa zrzut ekranu produktu lub niewydany zasób
- „**sformatuj ten JSON**" / „zdekoduj ten JWT" → wkleja odpowiedzi API, tokeny, sekrety do formatera
- „**scal te pliki PDF**" → wgrywa **dwa dokumenty, które nigdy nie powinny trafić na jeden serwer**

Te strony i ich olbrzymi długi ogon klonów **domyślnie nie są godne zaufania** - nieznany
okres przechowywania, nieznane jurysdykcje, nieznani podprzetwarzający i reklamowo-afiliacyjny
model biznesowy, który ma wszelkie powody, by zatrzymać to, co im dajesz. Operacja jest
trywialna; **kosztem są treści.**

Wojnę o ład wygrywamy dzięki znakomitej wygodzie i obsłudze.

## Czy Lolly może edytować i renderować moje pliki Figma, Penpot, Illustrator lub InDesign?

Tak. Otwórz **Layout Studio** i kliknij **Importuj projekt**: przyjmuje natywny plik Figma **.fig** (Save local copy), eksport Penpot **.penpot**, plik Illustratora **.ai** lub **.pdf**, plik InDesign **.idml** (File → Export → InDesign Markup) albo **dowolny SVG** (szerokie drzwi - eksportuje go niemal każda aplikacja projektowa). Wszystko jest przetwarzane w całości na Twoim urządzeniu, bez konta ani wtyczki.

Warstwy pojawiają się jako edytowalne pola na otwartym płótnie: tekst pozostaje do przepisania, kształty pozostają kształtami, obrazy dołączają do Twojej biblioteki na urządzeniu, a typografia i kolory podporządkowują się globalnym ustawieniom marki. Zapisz je, a układ staje się szablonem wielokrotnego użytku, adresowalnym przez URL, który każdy z Lolly może ponownie wypełnić - i możesz wpleść żywe narzędzia (kod QR, wykres), które renderują się na nowo przy wczytaniu. Stamtąd renderuje się jak wszystko inne w Lolly - SVG, PDF, PNG i reszta, odtwarzalne z jego URL-a. Zobacz [Importuj projekt](/info/design-import.html).

## Czy Lolly może zmienić markę istniejącej prezentacji PowerPoint?

Tak - na dwa sposoby, oba na Twoim urządzeniu. Narzędzie **Rebrand a Deck** pobiera plik `.pptx` i zamienia jego motyw, zakodowane na sztywno kolory oraz czcionki na Twoją markę, podczas gdy wykresy, SmartArt i animacje pozostają nietknięte - w efekcie otrzymujesz z powrotem plik `.pptx`. Możesz też otworzyć prezentację w **Deck Builder** (Wczytaj → upuść plik), aby edytować ją slajd po slajdzie jako swobodne obiekty, już dopasowane do marki, i wyeksportować jako PPTX, PDF lub wideo. Upuszczenie pliku `.pptx` w obszarze przesyłania zamiast tego zapisuje wybrane przez Ciebie slajdy jako zasoby SVG w Twojej bibliotece. Zobacz [Importuj projekt → Decki i dokumenty](/info/design-import.html#decks-and-documents).

## Co się stanie 29 sierpnia?

Narzędzia z marką SUSE opuszczają projekt, a ich miejsce zajmują nowe, ogólne przykładowe narzędzia definiowane przez użytkownika.

SUSE będzie prowadzić własne Lolly, aby chronić swoje znaki towarowe.

## Ile SUSE zachowuje dla siebie? (czyli kiedy nastąpi „rug-pull")

Znaki towarowe SUSE i markowe narzędzia służą wyłącznie do demonstracji, do 29 sierpnia. Instancję Lolly bez marki znajdziesz pod adresem [lolly.ART](https://lolly.art).

SUSE to firma zajmująca się infrastrukturą open source klasy korporacyjnej, z ponad trzema dekadami przywództwa w dziedzinie platform. Jej produkty obejmują rozwiązania infrastrukturalne klasy enterprise: Linux, Cloud Native, Edge oraz AI.

Z perspektywy SUSE chodzi o to, by nie tylko mówić, ale i działać w zakresie suwerenności i bezpieczeństwa. Na dziś prawdopodobieństwo, że SUSE przekształci Lolly w produkt, jest bliskie zeru.

Pełna jawność: SUSE *rzeczywiście* rozbudowuje wewnętrzne narzędzia, aby zintegrować Lolly ze swoimi systemami IT - chodzi o wewnętrzną konfigurację SUSE, a nie o rozwój publiczny kontra prywatny.

Jeśli chodzi o stronę publiczną, Lolly ma być budowane przez [Open Build Service](https://openbuildservice.org/), a bezpieczne artefakty łańcucha dostaw dostarcza [SUSE Application Collection](https://apps.rancher.io/applications).

Zbudujemy tyle, ile się da, w otwarty sposób - po prostu nie będziesz długo widzieć narzędzi z marką SUSE ani wewnętrznego zespołu i procesów komercyjnych SUSE, które nie są związane z Lolly.

## Jaki smak ma to logo Lolly?

Jedni mówią, że limonka, inni że mięta, a czasem jabłko - Lolly wnosi słodycz, a Ty tworzysz smak!
