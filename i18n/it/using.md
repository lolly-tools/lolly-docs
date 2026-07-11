# Usare Lolly

Una guida pratica per *usare* davvero l'app — aprire uno strumento, lavorare sul canvas, esportare, salvare e condividere. Tutto qui gira **sul tuo dispositivo**: nessun account, nessun caricamento, nessuna connessione richiesta dopo il primo caricamento.

> Sei nuovo qui? [Come iniziare](/info/getting-started.html) copre l'installazione/la distribuzione dell'app; questa pagina riguarda come usarla una volta aperta.

## Aprire uno strumento

La schermata iniziale è la **galleria** — tutti gli strumenti, raggruppati per categoria. Fai clic su una card per aprire lo strumento; se ci hai già lavorato prima, un pulsante **Continua** riprende la tua sessione più recente. Usa il campo di ricerca per filtrare per nome.

Ogni strumento è una vista divisa: **controlli** da un lato, un'**anteprima** dal vivo (il canvas) dall'altro. Cambia un controllo qualsiasi e l'anteprima si aggiorna all'istante.

> Alcuni strumenti (come **Layout Studio**) si aprono invece come **canvas libero** — una superficie priva di cornice, a manipolazione diretta, dove trascini, ridimensioni, ruoti e agganci riquadri di testo, forme e immagini, e fai doppio clic per modificare il testo sul posto. Esporta attraverso lo stesso percorso di rendering di ogni altro strumento, quindi il canvas *è* il file. Consulta [Il canvas libero](#the-free-canvas-layout-studio) più sotto.

## Il canvas (anteprima)

L'anteprima mostra sempre esattamente ciò che verrà esportato.

**Desktop**

- **Zoom:** scorri con Cmd/Ctrl, oppure pizzica su un trackpad — lo zoom si centra sul puntatore.
- **Spostamento (pan):** tieni premuto **Spazio** e trascina, oppure trascina con il **pulsante centrale del mouse**. (I clic semplici restano liberi per cliccare sulle parti del design.)
- **Tastiera:** `0` = adatta alla finestra · `1` = 100% · `+` / `−` = zoom.
- **HUD dello zoom:** il piccolo controllo `−  NN%  +  Fit` nell'angolo. Fai clic sulla percentuale per alternare tra Adatta ↔ 100%.

**Tocco**

- **Pizzica** per lo zoom, **trascina** per spostarti, **tocca due volte** per ripristinare l'adattamento.

**Clic per saltare a un controllo:** fai clic su un elemento qualsiasi del design e l'input corrispondente nella barra laterale riceve il focus e scorre fino a essere visibile — per un gruppo di righe ripetibili, apre esattamente la riga su cui hai cliccato, così modificare ciò che vedi è a un tocco di distanza.

Un cambio di dimensione riporta sempre la vista a un adattamento pulito.

### Il canvas libero (Layout Studio)

Gli strumenti a canvas libero aggiungono una superficie di lavoro *intorno* all'area di disegno, come il tavolo di montaggio di un designer:

- **Preparazione fuori canvas.** Trascina un riquadro oltre il bordo della cornice e resta completamente **visibile e selezionabile** — parcheggia gli elementi di lato mentre organizzi la composizione, poi trascinali di nuovo dentro. Tutto ciò che si trova fuori dalla cornice viene **sfumato dolcemente**, così l'area di esportazione si distingue sempre a colpo d'occhio, e la cornice mantiene la sua ombra per segnare esattamente dove inizia il file.
- **Solo la cornice viene esportata.** Il file esportato è delimitato dall'area di disegno — qualsiasi cosa resti fuori (o la parte di un riquadro che sporge oltre il bordo) viene semplicemente ritagliata dall'output, sia nei formati raster sia in quelli vettoriali.
- **Rimpicciolisci oltre Adatta** (fino al 20%) per vedere l'intero tavolo di montaggio quando hai preparato elementi molto fuori dalla cornice.
- **Area di disegno ridimensionabile.** Cambiare le dimensioni di esportazione ridimensiona la cornice sul posto; i riquadri mantengono le loro posizioni, così puoi reinquadrare un layout intorno al contenuto esistente.

## Su telefono

Su schermi stretti, il layout si riorganizza su una colonna:

- I **controlli diventano un foglio** in alto con una **maniglia di trascinamento** sul bordo inferiore. Trascina la maniglia per ridimensionarlo — si aggancia a **intravisto / metà / pieno** — oppure **tocca** la maniglia per alternare tra compresso ed espanso. L'anteprima riempie lo spazio sottostante e resta visibile mentre modifichi.
- Un pulsante flottante **Rendering** apre il foglio **Esportazione** — tutti i controlli di formato, dimensione, copia, salvataggio e download in un unico posto. Chiudilo toccando lo sfondo.

## Controlli (input)

Gli strumenti espongono solo gli input pensati per variare — tutto il resto (colori, layout, tipografia, logica) è bloccato dall'autore dello strumento, così qualsiasi cosa tu crei rispetta le regole che ha stabilito. Gli input includono testo, slider, selettori di colore, menu a tendina, date, selettori di immagini, e gruppi di righe ripetibili. Alcuni sono raggruppati in sezioni comprimibili.

**Reset:** *Cancella modifiche* riporta ogni input ai suoi valori predefiniti.

## I tuoi dati e la tua foto

**Profilo** (in alto a destra nella galleria) contiene il tuo nome, i tuoi dati di contatto, e una **foto** opzionale. Gli strumenti che richiedono questi campi li compilano automaticamente — configurali una volta e la tua firma email, i lockup e i badge si completano da soli. Puoi comunque sovrascrivere qualsiasi campo per singola sessione. Attiva **Usa i miei dati** per permettere a uno strumento di leggerli.

La tua foto e i tuoi dati vivono **solo su questo dispositivo**. Un profilo può essere più di te soltanto — un team o un ruolo che indossi di tanto in tanto. Consulta **[Profili](/info/profile.html)** per il quadro completo, incluso come mantenerne più di uno.

## Salvare e continuare

Fai clic su **Salva** per memorizzare gli input attuali come una sessione per quello strumento. Puoi mantenere più sessioni con nome per strumento; il pulsante **Continua** di ogni strumento riapre la più recente, e il **pulsante cronologia** (in alto a destra, accanto al tuo profilo) elenca ogni sessione salvata in tutti gli strumenti. Le sessioni sono locali al dispositivo. Per organizzarle, apri **Progetti** (più sotto).

## Progetti

**Progetti** — aprilo dalla scheda **Progetti** accanto a **Strumenti**, oppure da **Profilo → Archiviazione → Organizza in Progetti** — è la casa di tutto quello che hai salvato, e funziona come un gestore di file:

- **Cartelle annidabili.** Raggruppa le sessioni salvate in cartelle, e cartelle dentro altre cartelle, quanto in profondità vuoi. Crea una cartella, rinominala, o trascina un riquadro su un'altra cartella per spostarlo; un breadcrumb ti riporta indietro. Una cartella **Non categorizzati**, sempre presente, contiene tutto ciò che non è ancora stato archiviato.
- **Archivia subito il nuovo lavoro.** Dentro una cartella, **+ Nuovo strumento** apre uno strumento e archivia automaticamente il suo primo salvataggio in quella cartella.
- **Selezione multipla (desktop).** Seleziona la casella di un riquadro, trascina un riquadro di selezione sul canvas vuoto, oppure usa **Shift/Cmd-clic**; fai **clic destro** su un riquadro per il suo menu contestuale. Poi agisci sull'intera selezione in una volta sola.
- **Renderizza un'intera cartella o selezione.** **Renderizza cartella** esporta ogni sessione salvata in una cartella — incluse le sue sottocartelle — come un unico `.zip` annidato. **Renderizza selezione** fa lo stesso per qualsiasi selezione multipla, e una singola sessione si renderizza direttamente nel proprio file. Non serve Batch/Pro.
- **Condividi una sessione salvata.** Fai clic destro su una sessione → **Condividi link** per copiare un link che la riapre con esattamente gli stessi input (la finestra di dialogo Condividi completa — vedi sotto).

## Condividere un link

Ogni input viene catturato nell'URL della pagina, quindi un link *è* il design. Usa **Condividi** nei controlli di esportazione — o **Condividi link** su qualsiasi sessione salvata in Progetti — per aprire la finestra di dialogo **Condividi**: un link pronto da copiare più interruttori per cifrare il link e per decidere cosa succede quando viene aperto (schermo intero, il pannello di esportazione espanso, download automatico all'apertura con `&export`, o copia negli appunti con `&copy`).

Un design complesso genererebbe un URL lungo, quindi la finestra di dialogo offre anche un **Link più corto** che comprime l'intero stato in un token compatto — la forma leggibile è comunque sempre disponibile. Incollalo a un collega, salvalo nei preferiti, o mettilo in un commit. (Dettagli completi: [Modalità URL](/info/url-mode.html).)

> Le immagini che hai caricato dal tuo dispositivo **non** sono incluse in un link condiviso — esistono solo sulla tua macchina.

## Camera dal vivo (strumenti reattivi al movimento)

I **Filtri** foto — Halftone, Scanline, Posterize, Duotone — mostrano un pulsante **Vai in diretta** dove è disponibile una fotocamera. Attivalo e l'effetto segue la tua webcam fotogramma per fotogramma, così reagisce al movimento; puoi registrare il risultato in GIF, WebM o MP4. I fotogrammi vengono letti ed elaborati **sul tuo dispositivo** e non lo lasciano mai, e la fotocamera viene rilasciata nel momento in cui fermi o lasci lo strumento. (Anche qualsiasi selettore di immagini ha **Scatta una foto** per catturare un singolo fotogramma come immagine sul dispositivo.)

## Le mie immagini

Quando uno strumento ti permette di aggiungere un'immagine dal tuo dispositivo, questa viene ridimensionata, ripulita dai dati EXIF/GPS, e salvata nella tua libreria personale **Le mie immagini** (sotto **Profilo → Archiviazione**). Riutilizzala in qualsiasi strumento. La libreria ha un limite ed è interamente locale — gestisci o elimina le immagini da lì.

## Suoni e accessibilità

Lolly punta a essere comodo da usare per tutti. L'interfaccia è navigabile da tastiera, i controlli personalizzati hanno etichette appropriate per gli screen reader, e l'anteprima dal vivo di ogni strumento è esposta come una singola immagine etichettata che descrive cosa sta creando.

Un delicato strato di **suoni assistivi** conferma quello che fai — l'arrivo nella galleria, una verifica valida o non valida delle Content Credentials, la chiusura di un pannello, il cambio di un filtro. È **attivo per impostazione predefinita** ma sempre facoltativo: disattiva **Suono** ovunque compaia l'interruttore (il popover delle opzioni di ogni vista, oppure **Profilo**), e la scelta viene ricordata.

Accanto a quell'interruttore c'è la **Modalità Neurospicy** — una traccia di sottofondo opzionale e rilassante per la concentrazione, che suona piano mentre lavori. Attivarla apre un piccolo **dock del player** nell'angolo in basso che ti segue in tutta l'app; da lì puoi cercare e scegliere una traccia, saltare avanti e indietro, regolare il volume, e ridurre a icona o chiudere il player. L'elenco delle tracce copre alcune categorie — brani procedurali *Lolly Sings*, loop e beat ambientali, i tuoi audio caricati, e una manciata di stazioni **radio** internet dal vivo (queste richiedono una connessione; tutto il resto suona offline). È **disattivata per impostazione predefinita** e, come il Suono, viene ricordata tra sessioni e dispositivi. Disattivare il Suono silenzia anche la traccia di concentrazione.

## Archiviazione e privacy

Tutto viene memorizzato nel database locale del tuo browser (IndexedDB): il tuo profilo, le sessioni salvate, le immagini caricate, e una cache dei contenuti del catalogo scaricati. **Profilo → Archiviazione** mostra l'utilizzo e ti permette di:

- **Svuota cache** — elimina i contenuti del catalogo scaricati (si risincronizzano al prossimo caricamento).
- **Cancella tutti i miei dati** — elimina profilo, sessioni e immagini. *Non può essere annullato.*

Niente viene trasmesso da nessuna parte. Nessuna telemetria, nessun rendering nel cloud.

## Passare a un altro dispositivo

Poiché tutto vive sul tuo dispositivo, **Profilo → Archiviazione → Passa a un altro dispositivo** ti permette di portare tutto su una seconda installazione — senza account, senza cloud:

- **Esporta i miei dati** scarica un unico `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (le parti del nome provengono dal tuo profilo e vengono omesse se non impostate; `<n>` è un contatore giornaliero così le esportazioni fatte lo stesso giorno non entrano in conflitto) contenente il tuo profilo, ogni sessione salvata (con la sua miniatura), le tue immagini caricate, e le tue preferenze (tema, larghezza della barra laterale, statistiche di attività locale).
- **Importa dati…** sull'altra installazione rilegge quel file. **Unisce**: qualsiasi elemento con lo stesso nome (il tuo profilo, uno slot di sessione, un'immagine) viene sostituito dalla copia importata; tutto il resto su quel dispositivo viene mantenuto. Le sessioni salvate si ricollegano automaticamente alle immagini importate.

La cache del catalogo non è inclusa — si riscarica da sola sul nuovo dispositivo. Il pacchetto è uno zip semplice (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, id di formato `lolly-backup`), quindi sopravvive intatto a email, USB, o AirDrop ed è lo stesso formato che ogni shell legge. Ogni parte ha un checksum, così un file danneggiato durante il trasferimento viene rilevato all'importazione invece di essere ripristinato a metà. (Specifica completa del formato: [Trasferimento dati](/info/data-transfer.html).)

## Importare un design (Figma, Penpot, Illustrator, InDesign)

Puoi portare un design esistente in Lolly e continuare a lavorarci: apri **Layout Studio**, fai clic su **Importa un design** nella barra degli strumenti del canvas, e scegli un **.fig** o SVG di Figma, un **.penpot** di Penpot, un **.ai** / **.pdf** di Illustrator, o un **.idml** di InDesign. I livelli diventano riquadri modificabili sul canvas libero — il testo resta modificabile, le immagini finiscono in **Le mie immagini**, e la tipografia e i colori si conformano alle variabili globali di brand — poi il risultato si salva, si condivide e si renderizza come qualsiasi altra sessione. L'analisi avviene interamente sul tuo dispositivo. Dettagli completi: **[Importare un design](/info/design-import.html)**.

## Esportare

Consulta **[Esportazione e formati](/info/exporting.html)** per la storia completa — scegliere un formato, la dimensione di output e le unità di stampa, la trasparenza, il video, e copia/condivisione. In breve: scegli un formato, imposta la dimensione se ti serve, e **Scarica** (oppure **Copia** negli appunti).

## Modalità Batch (Pro)

Per gli utenti avanzati, **Batch** (collegato dalla galleria, protetto dietro il feature flag Pro, attivo per impostazione predefinita) renderizza molte varianti insieme — una griglia dove ogni riga è un insieme di input, esportati tutti insieme. Ideale per localizzare una card in una dozzina di lingue o generare ogni variante di dimensione in un solo passaggio. Compila le righe digitando, incollando direttamente da un foglio di calcolo, o importando un CSV (puoi anche esportarne uno), e imposta formato, dimensione e nome del file di output per ogni riga. Salva un'intera griglia come **sessione batch** con nome che si riapre dalla galleria, e scarica ogni riga come un unico `.zip`.

Batch serve per generare **molte varianti di un template** in una volta sola. Per rirenderizzare sessioni che hai **già salvato**, usa **Progetti → Renderizza cartella / Renderizza selezione** (più sopra) — non serve Pro.

## Offline e installazione

Lolly è una PWA. Dopo il primo caricamento funziona **offline** — installala dalla barra degli indirizzi del tuo browser (o *Aggiungi alla schermata Home* su mobile) per un'esperienza a schermo intero, simile a un'app. Si aggiorna da sola quando torni online.
