# Lolly pentru dezvoltatori

Documentația tehnică — pentru oricine creează instrumente, integrează Lolly într-un pipeline, îl găzduiește singur sau extinde platforma.

**Ce câștigi tu din asta.** Construiește un instrument o singură dată, iar cererea nu mai revine la tine. Veșnicul „poți să-mi faci repede un…” care îți mănâncă după-amiezile devine un template pe care alții îl completează singuri — corect, fără ca tu să fii în buclă. Munca ta e HTML/CSS/JS simplu: versionată, diffabilă, revizuibilă și rulează pe un motor deschis, fără dependență de furnizor — așa că rămâne a ta. Automatizează rularea de producție, iar timpul tău se duce spre problema interesantă, nu spre al zecemiilea export.

Lolly este un **motor** agnostic de platformă care rulează același traseu de randare pe mai multe **shell-uri** (web PWA, Tauri desktop/mobil, CLI, TUI). Instrumentele sunt **date, nu cod împachetat** — un manifest plus un template plus hook-uri opționale — astfel încât instrumentele noi sunt livrate fără o actualizare a aplicației. Începe cu [Prezentare generală](/info/overview.html) pentru arhitectură, apoi urmează traseul potrivit pentru ceea ce construiești.

Ești nou pe platformă? **[Pornire rapidă](/info/quickstart.html)** pune la punct un brand și primul tău render înainte să intri în profunzime.

## Înțelege arhitectura

- **[Prezentare generală](/info/overview.html)** — de ce există Lolly, separarea motor/shell/instrumente, podul de capabilități și angajamentele arhitecturale stabilite definitiv.
- **[Design Tokens](/info/design-tokens.html)** — modelul de tokeni DTCG în care sunt exprimate brandurile și cum îi consumă instrumentele.

## Creează instrumente

- **[Crearea instrumentelor](/info/authoring-tools.html)** — ghidul complet: manifest, template, stiluri, hook-uri, compunere și publicare.
- **[Crearea resurselor](/info/authoring-assets.html)** — resurse din catalog, niveluri, localizări, palete, icoane tematizabile și fonturi.
- **[Host API](/info/host-api.html)** — podul de capabilități `HostV1` pe baza căruia e scris fiecare instrument (singura API pe care o văd instrumentele).
- **[URL Mode](/info/url-mode.html)** — fiecare input ca parametru URL; parametri rezervați, codificare compactă, linkuri împachetate.

## Rulează și integrează

- **[CLI](/info/cli.html)** — randare headless; același traseu de randare ca GUI-ul, condus de argumente `--foo=bar`.
- **[TUI](/info/tui.html)** — shell-ul interactiv de terminal.
- **[Server MCP](/info/mcp.html)** — endpoint-ul nativ care permite unui agent AI să descopere și să ruleze instrumente.
- **[Agenți AI](/info/ai-agents.html)** — controlează Lolly dintr-un model: un URL este API-ul.
- **[Extensia Chrome](/info/extension.html)** — capturează un URL live ca resursă reutilizabilă.

## Livrează și operează

- **[Ghidul de build](/info/build-guide.html)** — construiește fiecare țintă: CLI, TUI, desktop, mobil.
- **[Deployment](/info/deployment.html)** — aplicația web, aplicațiile și serviciile backend; unde rulează fiecare componentă.
- **[Configurare](/info/configuration.html)** — profiluri, pachete de brand, condiționare prin capabilități, feature flags și validarea catalogului.

## Încredere și date

- **[Identitate Content Credentials](/info/content-credentials-identity.html)** — semnare emisă de o CA pentru C2PA pe dispozitiv; contractele motorului și runbook-ul operatorului.
- **[Transfer de date](/info/data-transfer.html)** — pachetul `lolly-backup`: plic, integritate și garanții între shell-uri.
- **[Despre](/info/about.html)** — proiectul, limitele licenței sale și repository-ul.
