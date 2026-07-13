# Szybki start

Lolly zamienia twoje reguły — kolory, typografię, układy, logikę — w narzędzia, których każdy może użyć do tworzenia gotowych plików: obrazów, PDF-ów, kart do mediów społecznościowych, wideo, wypełniając kilka pól. Nie ma się czego uczyć i nie trzeba niczego przesyłać: wszystko działa na twoim urządzeniu, online lub offline.

To jest strona, którą warto przeczytać jako pierwszą. Dwie rzeczy uczynią cię produktywnym: **dostosuj Lolly do siebie** oraz **wykorzystaj to, co już masz** (swoje pliki projektowe i tokeny). Wszystko inne jest o jeden link dalej.

> Dopiero zaczynasz z Lolly i chcesz po prostu coś stworzyć? Otwórz aplikację, wybierz dowolne narzędzie z galerii, wypełnij puste pola i naciśnij **Render**. Wróć tutaj, gdy zechcesz nadać temu *swoją* markę.

## 1. Dostosuj do siebie — skonfiguruj swój Design System

Twoja marka w Lolly to niewielki dokument **design tokens** — kolory, czcionki i kilka reguł — względem którego renderowane jest każde narzędzie. Ustaw go raz, a wszystko, co stworzysz, będzie zgodne z marką z założenia, a nie dzięki weryfikacji. Są trzy sposoby na start; wybierz ten, który pasuje do miejsca, gdzie twoja marka już się znajduje.

### Zacznij od zera (kreator design systemu)

Pierwsze uruchomienie przenosi cię na ekran **Start** (`#/start`) — [**Brand Studio**](/info/brand-studio.html). Nadaj nazwę i podaj kolor podstawowy, a Lolly *wyprowadzi* z niego kompletną, dostępną paletę — jasne/ciemne powierzchnie, tekst, akcenty — używając tej samej matematyki kolorów, której silnik używa wszędzie indziej. Wybierz czcionkę i masz działającą markę w niecałą minutę. Stamtąd pięć zakładek studia (Loga, Kolory, Typografia, Tokeny, Katalog) pozwala rozwinąć ją tak daleko, jak chcesz — dopracujesz dowolny element później, kiedy tylko wrócisz. Zawsze możesz wrócić do tego z panelu głównego (o ile nie używasz wersji Lolly z zablokowaną marką).

### Zaimportuj markę, którą już masz

Jeśli twoja marka jest już zapisana jako design tokens — z **Penpot**, **Tokens Studio** (Figma) lub dowolnego zwykłego pliku **DTCG** — wczytaj ją w całości, zamiast przepisywać od nowa. Dwie drogi:

- **W aplikacji:** [kreator design systemu: Brand Studio](/info/brand-studio.html) (`#/start`) przyjmuje plik tokenów, eksport z Penpot lub paczkę `LollyBrand` bezpośrednio — upuść ją, a paleta się rozświetli.
- **Z wiersza poleceń**, aby postawić reużywalną paczkę marki:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` przyjmuje wszystkie trzy kontenery, w których Penpot / Tokens Studio eksportują ten sam dokument — pojedynczy `tokens.json`, katalog (`$metadata.json` + pliki dla poszczególnych zestawów) lub archiwum `project.penpot`. Z opcją `--activate` rejestruje markę jako profil, przełącza się na nią i przebudowuje katalog. Zobacz [Konfiguracja](/info/configuration.html), aby dowiedzieć się, jak paczki marek i profile do siebie pasują.

### Dostrój ją w aplikacji

Gdy marka jest już aktywna, kształtuj ją dalej w [**Brand Studio**](/info/brand-studio.html) (`#/start`) — zmień kolor lub rolę, a każdy podgląd w całej aplikacji zaktualizuje się w trakcie pisania. (Zakładka **Design system** w panelu głównym pod `#/d` *pokazuje* markę tylko do odczytu; edytujesz ją w Studio.) Ta sama marka jest podsumowana na karcie **Profil → Twoja marka**. Czcionki są prawdziwe: wybierz z Google Fonts, a Lolly przechowa plik **na twoim urządzeniu** jako zasób marki, dzięki czemu twoja typografia działa offline i nic nie jest pobierane w czasie renderowania.

Kiedy będziesz zadowolony, **wyeksportuj markę jako paczkę `LollyBrand`** — pojedynczy plik, który współpracownik może zaimportować, aby uzyskać dokładnie tę samą paletę, czcionki i reguły. W ten sposób marka przemieszcza się między ludźmi i maszynami bez serwera pośrodku.

> **Tokeny marki działają w obie strony.** Ponieważ marka Lolly *to* tokeny DTCG — format, który Penpot natywnie odczytuje i zapisuje, a Tokens Studio wnosi do Figmy — paleta, *z którą* projektujesz, i paleta, którą Lolly *egzekwuje*, to jeden dokument, a nie dwie listy synchronizowane ręcznie. Zobacz [Design Tokens](/info/design-tokens.html).

## 2. Wykorzystaj to, co już masz

Nie zaczynasz od pustej strony. Lolly otwiera pracę projektową i otwarte formaty, które już posiadasz.

### Pliki projektowe open source

Gotowa praca w **Figmie, Penpot, Illustratorze, InDesignie lub dowolnej aplikacji SVG** nie musi pozostać zamknięta w programie, w którym ją narysowano. Otwórz **Layout Studio**, kliknij **Import a design**, a plik otworzy się jako *żywy układ* — a nie spłaszczony obrazek. Każda warstwa staje się edytowalnym boksem: tekst pozostaje możliwy do przepisania, kształty pozostają kształtami, obrazy trafiają do twojej biblioteki, a złożona grafika wektorowa jest wiernie zachowana. Dociera już dopasowana do krojów i reguł kolorów twojej marki.

| Masz | Wczytaj jako |
|---|---|
| Ramkę z Figmy | Natywny `.fig` (File → Save local copy) lub eksport SVG |
| Projekt z Penpot | Jego eksport `.penpot` lub dowolny SVG |
| Plik z Illustratora | Natywny `.ai` (zgodny z PDF) lub `.pdf` — otwiera się bezpośrednio |
| Układ z InDesigna | `.idml` (File → Export → InDesign Markup) |
| Cokolwiek innego | **Dowolny SVG** — uniwersalne wejście |

Cały import odbywa się **na twoim urządzeniu** — plik jest parsowany w twojej przeglądarce i nic nie jest przesyłane. Pełne szczegóły oraz to, co dokładnie zostaje przeniesione, znajdziesz w [Import a design](/info/design-import.html).

### Od jednorazowego projektu do szablonu

Oto korzyść: zaimportowany układ to zwykła sesja Layout Studio, więc gdy go **zapiszesz**, żyje pod adresem URL. Każdy, kto ma Lolly, może otworzyć ten URL, zmienić słowa, podmienić obraz i wyrenderować własną wersję — bez aplikacji projektowej, a zablokowane części pozostają zablokowane. Jednorazowy projekt staje się reużywalnym narzędziem. To cała idea, osiągnięta bez pisania choćby jednej linijki konfiguracji.

### Otwarte dane i otwarte narzędzia

[Zestaw narzędzi społecznościowych](/info/builders.html) jest open source i niezależny od marki — kody QR, mapy ulic, filtry, narzędzia do prywatności — i renderuje się względem *twojej* marki w chwili, gdy ją aktywujesz. Nakarm narzędzia także własnymi otwartymi danymi: wklej lub upuść tabelę **CSV** albo **JSON**, a powtarzalne pola narzędzia wypełnią się z niej, dając jeden gotowy zasób na wiersz.

## 3. Stwórz coś, a potem udostępnij lub zautomatyzuj

Z aktywną marką i materiałem w ręku każde narzędzie tworzy gotowy plik:

- **Renderuj** dowolne narzędzie do **SVG, PDF, PNG, JPG, WebP, wideo** i więcej — w prawdziwych rozmiarach druku i jednostkach fizycznych, gdy tego potrzebujesz. Zobacz [Eksport i formaty](/info/exporting.html).
- **Udostępnij link.** Każdy stan narzędzia to URL, więc gotowy zasób jest odtwarzalny i adresowalny parametrami — zatwierdź link, generuj na żądanie.
- **Rób to masowo.** Zasil szablon z arkusza kalkulacyjnego w [siatce wsadowej](/info/exporting.html): jeden gotowy zasób na wiersz.
- **Zautomatyzuj to.** Ten sam render działa z [CLI](/info/cli.html) i z [agenta AI](/info/ai-agents.html) — URL jest API.

## Dokąd dalej

Trzy ścieżki, zależnie od tego, po co tu jesteś:

- **[Lolly dla twórców](/info/creators.html)** — tworzysz rzeczy. Zalety i jak wycisnąć z aplikacji jak najwięcej.
- **[Lolly dla budowniczych](/info/builders.html)** — tworzysz narzędzia, integrujesz i wdrażasz. Dokumentacja techniczna.
- **[Lolly dla operatorów](/info/operators.html)** — odpowiadasz za markę, bezpieczeństwo i wdrożenie w organizacji.
