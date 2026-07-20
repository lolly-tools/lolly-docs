# FAQ

Domande frequenti mostrate nell'accordion nella pagina di destinazione `/info`.

**Come mantenere questo file:** ogni titolo `##` qui sotto è una domanda; tutto ciò che si trova
sotto di esso (fino al `##` successivo) è la risposta. Le risposte usano lo stesso markdown
leggero del resto del sito - separa i paragrafi con una riga vuota. Aggiungi, rimuovi o
riordina le domande qui e riesegui `npm run build:info` (o `npm run dev:web`).
Tutto ciò che precede il primo `##` (questo titolo e queste note) viene ignorato dalla build.

## Cosa succede quando attivo l'opt-in nella pagina /profile?

Quando usi Lolly per la prima volta, tutto ciò che digiti in qualsiasi punto resta completamente privato finché non decidi deliberatamente di renderlo pubblico tramite un media o un link di condivisione (se sei online).

Con l'opt-in selezionato, incorporiamo alcune informazioni del tuo profilo come provenienza negli asset e nei bundle, per identificarti come fonte.

Lolly produce un grande volume di contenuti. Adottiamo un approccio rigoroso di minimizzazione dei dati per prevenire i rischi.

### Cosa sono le feature flags?

Le feature flags attivano o disattivano parti di Lolly. Di solito sono controllate da un amministratore - con Lolly, il controllo è tuo.

## Come ottengo le app mobile o desktop?

Chiunque può distribuire le proprie app; gli strumenti e la configurazione di queste app dovrebbero variare molto a seconda del pubblico a cui sono destinate. Quindi non esiste un'unica app, a meno che tu non l'abbia creata tu stesso o qualcuno di rilevante te la fornisca.

## Perché il nome "Lolly Tools"?

**Lolly** Perché la libertà è dolce.
**Tools** sono inattivi quando non vengono usati. Non ti spiano, non eseguono programmi segreti,
Mettili al lavoro: i tuoi ordini, le tue azioni, le tue condizioni.

**Lolly** è un termine australiano, neozelandese e britannico per "caramelle" o "dolciumi". Proprio come le caramelle, gli strumenti sono molto gustosi per chi ne ha bisogno.

Ridiamo anche del tempo e dei soldi che risparmiamo con questo approccio.

## Quali ostacoli potrei aspettarmi adottando Lolly?

Lolly si inserisce ovunque tu già generi file - la CLI è lo stesso motore
dell'app, quindi una pipeline eseguita alle 2 del mattino non può divergere da ciò che una
persona vede in anteprima in un browser. L'attrito nell'adozione è raramente tecnico;
è organizzativo. Ecco cosa aspettarsi:

**Va creato un catalogo di marca curato.** Lolly è una piattaforma, non un
pacchetto già pronto dei tuoi template. Per un *rollout governato*, qualcuno definisce il
catalogo condiviso degli asset (loghi, palette, font come ID permanenti) e scrive il
manifest + template per ogni tipo di output. I singoli però non devono aspettare che
questo accada - nell'app aperta chiunque può importare i propri file nel catalogo e
costruire strumenti in Layout Studio fin dal primo giorno.

**La governance-by-git è opzionale - e poco familiare a chi non è sviluppatore.** Se gestisci un
catalogo *condiviso e controllato*, "la revisione della PR *è* la moderazione" è elegante per
gli sviluppatori ma poco familiare per la maggior parte dei team di marca e marketing. Se le
persone che possiedono le decisioni di marca non vivono in git, ti servirà un workflow
che faccia da ponte con loro - oppure l'IT diventa silenziosamente il partner strategico di
design e il guardiano istituzionale più ampio (preferito da molti in ambienti di
produzione di lunga data). I team che non vogliono questo, semplicemente lo saltano.

**È deliberatamente ristretto - presentalo così.** Lolly non è per contenuti su misura o
contenuti hero. *È* il tuo DAM personale - idratato e potenziato dal tuo design
system, dagli strumenti e dal catalogo - e *ha* davvero un canvas aperto (Layout Studio), ma
anche lì colori, tipografia e asset si conformano alle variabili di design globali attive, così la
disposizione libera resta dentro il sistema. Confrontato con Figma o Canva
sembrerà limitato. Giudicato per ciò che è - generazione di asset operazionalizzata, ricorrente,
su scala massiva - niente compete. L'inquadramento sbagliato è l'intoppo più comune.

**Gestione del cambiamento sul lato della produzione.** I processi esistenti funzionano oggi,
anche se l'output non rispetta il brand. Ripuntarli verso il motore significa nuovi test e un
nuovo apprendimento, e "sappiamo già creare file" diventa la scusa per non migrare. Inizia convertendo
un output di produzione ad alta visibilità e mostrando il prima/dopo affiancati.

Lolly solleva tutto quanto.


## Cosa distingue le utilità dagli strumenti?

**Risposta semplice →** Le utilità non hanno sempre bisogno di renderizzare e quindi possono avere una UX diversa.

**Risposta vera →** Il motivo per cui le utilità possono essere ospitate dentro Lolly Tools è aggiungere un ulteriore "livello di comodità" di difesa per disincentivare l'esfiltrazione di dati.

Perché? Perché è risaputo che ogni giorno le persone prendono **contenuti riservati che hanno già** e li affidano a un
sito web qualsiasi per eseguire una piccola operazione meccanica:

- "**Comprimi questo PDF**" → carica un contratto / una busta paga / una presentazione del consiglio verso entità sconosciute.
- "**converti HEIC in JPG**" → carica foto personali (con EXIF GPS) su un host finanziato dalla pubblicità
- "**ritaglia / ridimensiona questa immagine**" → carica uno screenshot di prodotto o un asset non ancora pubblicato
- "**formatta questo JSON**" / "decodifica questo JWT" → incolla risposte API, token, segreti in un formattatore
- "**unisci questi PDF**" → carica **due documenti che non dovrebbero mai condividere un server**

Questi siti e la loro enorme coda lunga di cloni **non sono affidabili per impostazione predefinita**, con
conservazione sconosciuta, giurisdizioni sconosciute, subprocessori sconosciuti, e un modello di business
pubblicità/affiliazione che ha ogni interesse a tenersi ciò che gli dai. L'operazione è
banale; è **il contenuto ad avere un costo.**

Vinciamo la guerra della governance con un'eccellente comodità e un servizio eccellente.

## Lolly può modificare e renderizzare i miei file Figma, Penpot, Illustrator o InDesign?

Sì. Apri **Layout Studio** e clicca su **Importa un design**: accetta un file Figma nativo **.fig** (Save local copy), un'esportazione Penpot **.penpot**, un file Illustrator **.ai** o **.pdf**, un file InDesign **.idml** (File → Export → InDesign Markup), oppure **qualsiasi SVG** (la porta larga - quasi ogni app di design lo esporta). Tutto viene analizzato interamente sul tuo dispositivo, senza bisogno di account o plugin.

I livelli arrivano come riquadri modificabili sul canvas aperto: il testo resta modificabile, le forme restano forme, le immagini si uniscono alla tua libreria sul dispositivo, e la tipografia e i colori si conformano alle variabili globali di marca. Salvalo e il layout diventa un template riutilizzabile e indirizzabile via URL che chiunque abbia Lolly può compilare di nuovo - e puoi mescolarci strumenti dal vivo (un codice QR, un grafico) che vengono renderizzati di nuovo al caricamento. Da lì si renderizza come qualsiasi altra cosa in Lolly - SVG, PDF, PNG e il resto, riproducibile dal suo URL. Vedi [Importa un design](/info/design-import.html).

## Lolly può rimarchiare una presentazione PowerPoint esistente?

Sì - in due modi, entrambi sul tuo dispositivo. L'utilità **Rebrand a Deck** prende un `.pptx` e ne sostituisce il tema, i colori e i font hardcoded con quelli del tuo brand, mentre grafici, SmartArt e animazioni restano invariati - ottieni di nuovo un `.pptx`. Oppure apri la presentazione in **Deck Builder** (Load → trascina il file) per modificarla slide per slide come oggetti liberi, già allineati al brand, ed esportarla in PPTX, PDF o video. Trascinare invece un `.pptx` su un'area di upload archivia le slide che scegli come asset SVG nella tua libreria. Vedi [Importa un design → Presentazioni e documenti](/info/design-import.html#decks-and-documents).

## Cosa succede il 29 agosto?

Gli strumenti a marchio SUSE lasciano il progetto, e nuovi strumenti di esempio generici definiti dall'utente prendono il loro posto.

SUSE gestirà una propria istanza di Lolly per proteggere i propri marchi registrati.

## Quanto sta tenendo privato SUSE? (ovvero: quando arriva il rug-pull)

I marchi registrati e gli strumenti a marchio di SUSE servono solo a scopo dimostrativo, fino al 29 agosto. Puoi trovare un'istanza di Lolly senza marchio su [lolly.ART](https://lolly.art).

SUSE è un'azienda di infrastrutture open source per le imprese, con oltre tre decenni di leadership nelle piattaforme. I suoi prodotti includono soluzioni di infrastruttura Linux, Cloud Native, Edge e AI di livello enterprise.

Dal punto di vista di SUSE, si tratta di essere coerenti tra i fatti e le parole in materia di sovranità e sicurezza. A oggi, la probabilità che SUSE trasformi Lolly in un prodotto commerciale è vicina allo zero assoluto.

Per totale trasparenza: SUSE *sta* effettivamente costruendo strumenti interni per integrare Lolly nei propri sistemi IT - questo riguarda l'assetto interno di SUSE, non una scelta tra sviluppo pubblico e privato.

Parlando del lato pubblico, Lolly punta a essere costruito tramite [Open Build Service](https://openbuildservice.org/), con artefatti di supply chain sicuri distribuiti dalla [SUSE Application Collection](https://apps.rancher.io/applications).

Costruiremo il più possibile in modo aperto - semplicemente non vedrai ancora a lungo gli strumenti a marchio SUSE, né la forza lavoro interna di SUSE e i suoi processi commerciali, che non hanno nulla a che fare con Lolly.

## Che gusto ha quel logo Lolly?

Alcuni dicono Lime, altri dicono Menta e a volte Mela - Lolly porta la dolcezza, sei tu a creare il gusto!
