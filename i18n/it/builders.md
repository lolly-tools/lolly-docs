# Lolly per gli sviluppatori

La documentazione tecnica — per chi crea strumenti, integra Lolly in una pipeline, ne cura l'hosting in autonomia o estende la piattaforma.

**Cosa ci guadagni.** Crea uno strumento una volta e la richiesta smette di tornare da te. Il classico "puoi farmi solo un…" che ti divora i pomeriggi diventa un template che altre persone compilano da sole — correttamente, senza che tu debba intervenire. Il tuo lavoro è puro HTML/CSS/JS: versionato, confrontabile (diff), verificabile, e gira su un motore aperto senza vincoli di fornitore, quindi resta tuo. Automatizza la produzione in serie e il tuo tempo va al problema interessante, non alla decimillesima esportazione.

Lolly è un **motore** indipendente dalla piattaforma che esegue lo stesso percorso di rendering su diverse **shell** (PWA web, Tauri desktop/mobile, CLI, TUI). Gli strumenti sono **dati, non codice incluso** — un manifest più un template più hook opzionali — così i nuovi strumenti vengono pubblicati senza un aggiornamento dell'app. Inizia dalla [Panoramica](/info/overview.html) per l'architettura, poi segui il percorso adatto a ciò che stai costruendo.

Nuovo sulla piattaforma? La **[Guida rapida](/info/quickstart.html)** imposta un brand e il tuo primo render prima che tu vada più a fondo.

## Comprendere l'architettura

- **[Panoramica](/info/overview.html)** — perché Lolly esiste, la separazione motore/shell/strumenti, il ponte delle capacità, e gli impegni architetturali consolidati.
- **[Design Token](/info/design-tokens.html)** — il modello di token DTCG in cui vengono espressi i brand, e come gli strumenti li consumano.

## Creare strumenti

- **[Creazione di strumenti](/info/authoring-tools.html)** — la guida completa: manifest, template, stili, hook, composizione e pubblicazione.
- **[Creazione di asset](/info/authoring-assets.html)** — asset del catalogo, livelli, locale, palette, icone temabili e font.
- **[API Host](/info/host-api.html)** — il ponte delle capacità `HostV1` su cui è scritto ogni strumento (l'unica API che gli strumenti vedono).
- **[Modalità URL](/info/url-mode.html)** — ogni input come parametro URL; parametri riservati, codifica compatta, link compattati.

## Eseguire e integrare

- **[CLI](/info/cli.html)** — rendering headless; lo stesso percorso di rendering della GUI, guidato da argv `--foo=bar`.
- **[TUI](/info/tui.html)** — la shell di terminale interattiva.
- **[Server MCP](/info/mcp.html)** — l'endpoint nativo che permette a un agente IA di scoprire ed eseguire strumenti.
- **[Agenti IA](/info/ai-agents.html)** — pilotare Lolly da un modello: un URL è l'API.
- **[Estensione Chrome](/info/extension.html)** — cattura un URL dal vivo come asset riutilizzabile.

## Distribuire e gestirlo

- **[Guida alla build](/info/build-guide.html)** — compila ogni target: CLI, TUI, desktop, mobile.
- **[Distribuzione](/info/deployment.html)** — l'app web, le app, e i servizi backend; dove gira ciascun pezzo.
- **[Configurazione](/info/configuration.html)** — profili, brand pack, controllo delle capacità, feature flag, e validazione del catalogo.

## Fiducia e dati

- **[Identità Content Credentials](/info/content-credentials-identity.html)** — firma emessa da una CA per il C2PA sul dispositivo; contratti del motore e il runbook dell'operatore.
- **[Trasferimento dati](/info/data-transfer.html)** — il bundle `lolly-backup`: busta, integrità, e garanzie tra shell.
- **[Informazioni](/info/about.html)** — il progetto, il confine della sua licenza, e il repository.
