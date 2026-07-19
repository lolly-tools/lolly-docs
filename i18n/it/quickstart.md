# Guida rapida

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Lolly trasforma le tue regole - colori, tipografia, layout, logica - in strumenti che chiunque può usare per creare file finiti: immagini, PDF, card per i social, video, semplicemente compilando alcuni campi. Non c'è niente da imparare e niente da caricare: tutto gira sul tuo dispositivo, online o offline.

Questa è la prima pagina da leggere. Due cose ti rendono operativo da subito: **rendi Lolly tuo** (puntalo sul tuo brand), e **porta con te quello che hai già** (i tuoi file di design e i tuoi token). Tutto il resto è a un link di distanza.

> Sei nuovo di Lolly e vuoi solo creare qualcosa? Apri l'app, scegli uno strumento qualsiasi dalla galleria, compila i campi e premi **Rendering**. Torna qui quando vuoi che indossi *il tuo* brand.

## 1. Rendilo tuo - configura il tuo brand

Il tuo brand in Lolly è un piccolo documento di **design token** - colori, font e alcune regole - su cui ogni strumento renderizza. Configuralo una volta e tutto ciò che crei sarà in linea con il tuo brand per costruzione, non per revisione. Ci sono tre modi per iniziare; scegli quello più adatto a dove il tuo brand vive già.

### Parti da zero (il Brand Studio)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

Al primo avvio atterri sulla schermata **Start** (`#/start`) - il [**Brand Studio**](/info/brand-studio.html). Dagli un nome e un colore primario e Lolly *deriva* una palette completa e accessibile - superfici chiare/scure, testo, accenti - usando la stessa matematica del colore che il motore usa ovunque. Scegli un font e avrai un brand funzionante in meno di un minuto. Da lì, le cinque schede dello studio (Loghi, Colori, Tipografia, Token, Catalogo) ti permettono di spingerti quanto vuoi - perfeziona qualsiasi dettaglio più avanti, ogni volta che torni.

### Importa un brand che hai già

Se il tuo brand è già catturato come design token - da **Penpot**, **Tokens Studio** (Figma), o un qualsiasi file **DTCG** semplice - importalo in blocco invece di reinserirlo a mano. Due percorsi:

- **Nell'app:** il [Brand Studio](/info/brand-studio.html) (`#/start`) accetta direttamente un file di token, un'esportazione di Penpot, o un pacchetto `LollyBrand` - trascinalo dentro e la palette si accende.
- **Dalla riga di comando**, per creare un pacchetto di brand riutilizzabile:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` accetta tutti e tre i contenitori in cui Penpot / Tokens Studio esportano lo stesso documento - un singolo `tokens.json`, una cartella (`$metadata.json` + file per ogni set), o un archivio `project.penpot`. Con `--activate` registra il brand come profilo, vi passa e ricostruisce il catalogo. Consulta [Configurazione](/info/configuration.html) per capire come si combinano pacchetti di brand e profili.

### Perfezionalo nell'app

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

Una volta che un brand è attivo, continua a modellarlo nel [**Brand Studio**](/info/brand-studio.html) (`#/start`) - cambia un colore o un ruolo e ogni anteprima dell'app si aggiorna mentre scrivi. (La scheda **Design system** della dashboard su `#/d` *mostra* il brand in sola lettura; è nello Studio che lo modifichi.) Lo stesso brand è riassunto nella scheda **Profilo → Il tuo brand**. I font sono reali: scegli da Google Fonts e Lolly salva il file **sul tuo dispositivo** come asset di brand, così la tua tipografia viaggia offline e non viene scaricato nulla al momento del rendering.

Quando sei soddisfatto, **esporta il brand come pacchetto `LollyBrand`** - un unico file che un collega può importare per ottenere esattamente la stessa palette, gli stessi font e le stesse regole. È così che un brand si sposta tra persone e macchine senza un server in mezzo.

> **I token di brand vanno e vengono in entrambe le direzioni.** Poiché il brand di Lolly *è* token DTCG - il formato che Penpot legge e scrive in modo nativo e che Tokens Studio porta in Figma - la palette con cui *progetti* e la palette che Lolly *applica* sono un unico documento, non due liste che tieni sincronizzate a mano. Consulta [Design Token](/info/design-tokens.html).

## 2. Porta con te quello che hai già

Non parti da una pagina vuota. Lolly apre il lavoro di design e i formati aperti che possiedi già.

### File di design open source

Il lavoro finito in **Figma, Penpot, Illustrator, InDesign, o qualsiasi app SVG** non deve per forza restare chiuso nell'app in cui l'hai disegnato. Apri **Layout Studio**, fai clic su **Importa un design**, e il file si apre come un *layout vivo* - non un'immagine appiattita. Ogni livello diventa un riquadro modificabile: il testo resta modificabile, le forme restano forme, le immagini finiscono nella tua libreria, e la grafica vettoriale complessa viene preservata fedelmente. Arriva già conforme ai tuoi font e alle tue regole di colore di brand.

| Se hai | Importalo come |
|---|---|
| Un frame di Figma | `.fig` nativo (File → Salva copia locale), oppure un'esportazione SVG |
| Un design di Penpot | La sua esportazione `.penpot`, o un qualsiasi SVG |
| Un file di Illustrator | `.ai` nativo (compatibile PDF) o `.pdf` - si apre direttamente |
| Un layout di InDesign | `.idml` (File → Esporta → InDesign Markup) |
| Qualsiasi altra cosa | **Un qualsiasi SVG** - la porta universale |

L'intera importazione avviene **sul tuo dispositivo** - il file viene analizzato nel tuo browser e niente viene caricato. I dettagli completi, e cosa esattamente viene mantenuto, sono in [Importare un design](/info/design-import.html).

### Da un progetto singolo a un template

Ecco il vantaggio: un layout importato è una normale sessione di Layout Studio, quindi non appena lo **salvi**, vive a un URL. Chiunque abbia Lolly può aprire quell'URL, cambiare le parole, sostituire un'immagine, e renderizzare la propria versione - senza nessuna app di design, e le parti bloccate restano bloccate. Un design creato una volta diventa uno strumento riutilizzabile. Questa è tutta l'idea, raggiunta senza scrivere una riga di configurazione.

### Dati aperti e strumenti aperti

Il [set di strumenti della community](/info/builders.html) è open source e agnostico rispetto al brand - codici QR, mappe stradali, filtri, utilità per la privacy - e renderizza sul *tuo* brand nel momento in cui lo attivi. Alimenta gli strumenti anche con i tuoi dati aperti: incolla o trascina una tabella **CSV** o **JSON** e i campi ripetibili di uno strumento si compilano da essa, un asset finito per riga.

## 3. Crea qualcosa, poi condividilo o automatizzalo

Con un brand attivo e il tuo materiale a portata di mano, ogni strumento produce un file finito:

- **Renderizza** qualsiasi strumento in **SVG, PDF, PNG, JPG, WebP, video**, e altro ancora - a dimensioni di stampa reali e in unità fisiche quando ti servono. Consulta [Esportazione e formati](/info/exporting.html).
- **Condividi un link.** Ogni stato di uno strumento è un URL, quindi un asset finito è riproducibile e indirizzabile per parametri - salva il link, rigeneralo quando vuoi.
- **Fallo in massa.** Guida un template da un foglio di calcolo nella [griglia batch](/info/exporting.html): un asset finito per riga.
- **Automatizzalo.** Lo stesso rendering funziona dalla [CLI](/info/cli.html) e da un [agente IA](/info/ai-agents.html) - un URL è l'API.

## Dove andare adesso

Tre percorsi, a seconda di cosa sei venuto a fare:

- **[Lolly per i creatori](/info/creators.html)** - crei cose. I vantaggi, e come ottenere il massimo dall'app.
- **[Lolly per gli sviluppatori](/info/builders.html)** - crei strumenti, integri e distribuisci. La documentazione tecnica.
- **[Lolly per gli operatori](/info/operators.html)** - sei responsabile del brand, della sicurezza e della diffusione in un'organizzazione.
