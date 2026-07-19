# Lolly per gli operatori

### Una strategia di sicurezza e intelligence a difesa in profondità - che per puro caso è anche una piattaforma di produzione creativa

Il sistema immunitario organizzativo zero-trust che si avvolge attorno a ciò che già fai - così che il lavoro creativo di routine di cui i tuoi team hanno bisogno ogni giorno avvenga *dentro* il tuo perimetro invece di fuoriuscirne.

**Cosa ci guadagni.** Diventi la persona che ha detto sì a qualcosa di sicuro *e* popolare allo stesso tempo. Chiudi una falla di esfiltrazione, acquisisci capacità ed elimini una coda di richieste in un'unica mossa - la rara vittoria di sicurezza che ti rende più apprezzato, non meno. Niente più telefonate alle 3 del mattino dall'ufficio legale perché file riservati o dati dei clienti sono finiti in uno strumento web qualsiasi; meno fornitori SaaS, contratti e audit sul tuo piatto; e una traccia di audit interamente riproducibile a cui puoi rimandare quando qualcuno chiede. Dormi meglio, e nel farlo rallegri qualche giornata.

Lolly non è uno strumento creativo di serie B: mette output di qualità professionale nelle mani di tutti, e l'esperienza di creazione guidata dal brand non ha eguali. Il motivo per cui è *sicuro* distribuirlo così ampiamente è architetturale: non viene caricato nulla che tu non abbia messo lì, ogni risultato è riproducibile, e ogni esportazione può portare più livelli di registri crittografici tra i migliori del settore. Indipendentemente da come un documento sia arrivato sulla tua scrivania, puoi vederne la provenienza completa, se è stato manomesso, e se puoi ricrearlo pixel per pixel.

> **A che punto siamo oggi.** Le proprietà di sicurezza di Lolly sono solide per progettazione, e i suoi motori di crittografia e di analisi dei file stanno attraversando l'irrobustimento dell'infrastruttura di livello enterprise di SUSE. I sigilli, la firma sul dispositivo e la crittografia descritti di seguito sono reali e difendibili già ora, e stanno maturando verso una certificazione indipendente - quindi dove un contratto richiede una garanzia certificata, distribuiscili come difesa in profondità mentre quel processo si completa.

## Il vantaggio strategico

Il modo abituale in cui viene svolto il lavoro creativo di routine è una superficie di rischio: file inviati via email a contrattisti di design esterni, asset di brand caricati su una dozzina di editor SaaS, dati dei clienti incollati nello strumento web di uno sconosciuto per "fare giusto una grafica veloce". Ognuno di questi casi è un dato che esce dal tuo controllo.

Lolly ribalta la situazione. Il lavoro che *causava* quelle fughe - la card di citazione, il banner localizzato, il badge per l'evento, lo screenshot redatto - avviene ora su uno strumento che gira sul dispositivo stesso del dipendente, contro il tuo brand, senza alcun server nel mezzo. Non hai aggiunto un controllo sopra un flusso di lavoro rischioso; hai sostituito il flusso di lavoro rischioso con uno che, fin dall'inizio, non ha alcuna via di esfiltrazione.

- **La configurazione è tua.** Il motore e le shell sono open source (MPL-2.0). Sovrapponi la tua autenticazione, telemetria o CA; ospitalo oppure no; mantieni il pieno controllo su funzionalità e costi, tracciato in Git, senza restare bloccato in un database SaaS.
- **La governance può essere dati, non una dashboard.** Quando vuoi quel controllo, gestisci il catalogo degli strumenti come repository Git - la revisione delle pull request diventa l'approvazione del brand, con una traccia di audit completa e il rollback istantaneo di ogni template che la tua forza lavoro può toccare. È un'opzione, non un obbligo: i team che vogliono solo creare cose realizzano i propri strumenti in Layout Studio e importano i propri file nel catalogo, interamente all'interno dell'app, senza mai toccare Git. Vedi [Adozione e governance](/info/adoption-governance.html).
- **I guard-rail sono strutturali.** I vincoli di brand sono scritti direttamente nei template, non pubblicati come linee guida che le persone possono ignorare. Il risultato sbagliato non viene scoraggiato - è irrappresentabile.

## Elimina la coda delle richieste moltiplicando i contenuti.

Uno degli obiettivi di Lolly è la **deviazione delle richieste di design**: richieste di routine che non hanno mai bisogno di arrivare a un designer perché la persona che aveva bisogno dell'asset l'ha creato da sola, correttamente, in pochi minuti. Ogni ticket deviato è insieme una vittoria di produttività e un file in meno che cambia mano.

Lolly è pensato per adattarsi al modo in cui la tua organizzazione funziona davvero - non esiste un unico modo giusto per distribuirlo:

- **Distribuisci, non servire.** Consegna Lolly ai dispositivi tramite il tuo MDM esistente (Intune, Jamf, Munki…). Gira localmente come app desktop/mobile o come PWA offline - funziona dietro qualsiasi firewall, in qualsiasi ambiente air-gap, senza server da mantenere e con l'IT al comando del ritmo degli aggiornamenti.
- **Solo servire.** Esegui un'unica istanza dentro la tua rete (o dietro una VPN); gli utenti la raggiungono dal browser, senza installare nulla. Pubblica uno strumento una volta e tutti lo hanno immediatamente; abbinalo al tuo IdP per il controllo degli accessi.
- **Ibrido.** App locali per il lavoro sul campo offline, una versione browser sempre aggiornata per i dispositivi in prestito - entrambe puntate sulla stessa libreria di strumenti.

I modelli di distribuzione completi e la guida all'amministrazione si trovano in [Distribuzione](/info/deployment.html) e [Configurazione](/info/configuration.html).

## Utilità anti-esfiltrazione

Una categoria di strumenti Lolly - le utilità per la privacy - esiste *appositamente* per mantenere i file dentro il perimetro.

- **Strip hidden data**
 Rimuove la posizione e tutte le informazioni identificative nascoste da documenti e file multimediali.

- **Text Helper**  
Anonimizza, codifica, formatta e manipola testo strutturato e non strutturato.

- **Compress PDF**
Comprime un PDF troppo pesante sul dispositivo, così nessuno ricorre a un sito di terze parti per "comprimere il mio PDF" nel momento in cui un file è troppo grande per essere inviato via email - esattamente il punto in cui i dati scappano dalla finestra.

Tutte queste sono trasformazioni sul dispositivo: il tuo file o i tuoi dati entrano, escono byte puliti, e **non c'è alcun server a cui caricarli**. Sono l'opposto deliberato del tipico strumento "carica il tuo file sul sito di uno sconosciuto per pulirlo" a cui altrimenti ricorrerebbe un dipendente in buona fede.

## Determinismo e riproducibilità

Ogni input di uno strumento è esprimibile come parametro URL, e gli stessi input producono lo stesso file. Questo ha due conseguenze per l'operatore:

- **Un URL è l'artefatto.** Committa il link, rigenera l'asset a richiesta - nessun binario versionato in Git, nessuna caccia a "l'ultima versione" in chat. Gli ID di asset e strumenti sono contratti permanenti, quindi un link creato oggi si risolve ancora in futuro.
- **La CLI segue lo stesso percorso di rendering** della GUI, quindi le pipeline di build e l'app non divergono mai. Genera immagini OG, card social e visual basati sui dati in fase di build, in modo riproducibile.

## Provenienza e Content Credentials

Le esportazioni possono portare **Content Credentials** - un manifest [C2PA](https://c2pa.org) firmato e vincolato a un hash dei byte del file. Qualsiasi modifica successiva al file rompe il sigillo, quindi un verificatore compatibile con C2PA **rileva l'alterazione in modo crittografico, offline**. La credenziale è a prova di manomissione in senso *rilevabile*: segnala la manomissione invece di impedirla, ed è esattamente questo che rende possibile una verifica interamente offline.

- **Attiva di default, sul dispositivo.** La chiave di firma viene generata sul dispositivo, non è estraibile (nemmeno Lolly può leggerla), e la firma avviene localmente - solo l'*iscrizione* opzionale dell'identità arriva mai a toccare la rete.
- **Livelli di fiducia.** Un'esportazione non iscritta è strutturalmente valida ma firmata in modo anonimo (`untrusted`). Iscrivi un'**identità verificata** (certificato di breve durata emesso dalla CA di Lolly, legato a un'email) e i verificatori che si affidano alla root di Lolly riportano `trusted` + l'email del firmatario. Un'autorità di timestamping affidabile e il via libera di un validatore terzo (conformità C2PA) sono nella roadmap. Ogni livello è esplicito, e un file dichiara solo la fiducia che può dimostrare.
- **La durata della credenziale** è una scelta dell'operatore/utente al momento della firma: 7 / 30 / 90 / 365 giorni, predefinita 30.
- **Il Lolly Imprint.** Un secondo segnale complementare, **attivo di default**: una filigrana a pixel invisibile incorporata nelle esportazioni raster (e nei raster renderizzati da Lolly all'interno di un PDF/PPTX, mai nell'immagine incorporata dall'utente). Laddove la credenziale muore a qualsiasi modifica del contenitore, l'Imprint sopravvive a un nuovo salvataggio o a uno screenshot - un indizio duraturo del tipo "questi pixel sono passati attraverso Lolly", di sola presenza, senza dati personali. È sicurezza tramite offuscamento, non una difesa irrobustita, e completa la credenziale invece di sostituirla. `imprint=0` per disattivarla.
- **Durable Content Credentials (opt-in).** Un'esportazione raster può inoltre portare un marchio *durevole* invisibile che codifica un identificatore di soft-binding, così la credenziale C2PA può essere recuperata anche dopo che un caricamento sui social o un nuovo salvataggio ha rimosso i metadati del file - il caso in cui una credenziale normale andrebbe persa. È disponibile solo per il raster e richiede un passaggio di codifica neurale, quindi è disattivata di default (`durable=1` per attivarla). Oggi Lolly riconosce offline il proprio marchio durevole su `/verify`; il recupero da parte di strumenti di terze parti (per esempio Adobe) seguirà non appena la risoluzione di soft-binding a livello di settore sarà in atto.
- **La verifica avviene sul dispositivo.** Trascina qualsiasi file su `/verify` (oppure `lolly validate <file>`) per un report offline su se è stato realmente creato con Lolly e non è cambiato da allora. La vista Verify sul web segnala anche i contenuti generati dall'IA, rileva il Lolly Imprint, verifica le firme **SEAL** (una firma a livello di byte con chiave nel DNS - l'unico contatto con la rete è una ricerca della chiave nel DNS, mai il file), esegue opzionalmente una scansione approfondita per filigrane a pixel di terze parti (con un download del modello sul dispositivo una tantum), e mostra i dati nascosti - tutto senza caricare il file. Vedi [Identità Content Credentials](/info/content-credentials-identity.html).

> **Note sull'interoperabilità.** Oggi Lolly verifica offline le proprie credenziali e molte di terze parti, inclusa la lettura dei manifest di rivendicazione C2PA **v2** di altri produttori. Resta in corso un solo elemento di interoperabilità: il WebM - che non ha ancora una mappatura C2PA standardizzata, quindi Lolly allega il manifest come parte Matroska (gli strumenti di terze parti verificano l'MP4 di Lolly senza configurazioni aggiuntive; il WebM seguirà non appena lo standard si consoliderà).

## Crittografia e password

Per i file che devono viaggiare bloccati, tutto avviene sul dispositivo:

- **Password di apertura PDF** - *Standard* è un deterrente RC4 a 40 bit (si apre ovunque, può viaggiare in un link); *Forte* è **AES-256** (PDF 2.0), digitata all'esportazione e mai inserita in un link.
- **Download bloccati** - uno ZIP, una cartella Progetti o un'esecuzione batch possono essere bloccati per intero: *Standard* ZipCrypto (debole, universale) o *Forte* **AES-256** (WinZip AE-2). Difesa in profondità: qualsiasi PDF dentro uno zip Forte è *anche* bloccato individualmente in AES-256, quindi resta bloccato dopo l'estrazione.
- **Link di condivisione protetti da password** - l'intero stato del link è cifrato in AES-256 sotto una chiave derivata con PBKDF2; viaggia solo il testo cifrato, la password non è mai nel link, e la decifratura avviene nel browser del destinatario.

## Pronto per l'air-gap

L'air-gap è una **modalità di distribuzione di prima classe**, non una modalità speciale - Lolly funziona senza rete al momento del rendering, di serie. La shell web è una PWA offline-first (service worker); i font e il WASM sono memorizzati sul dispositivo; lo stato degli strumenti viene persistito localmente tramite il ponte dell'host, mai con `localStorage`. Qualsiasi strumento che raggiunge la rete lo fa solo tramite una capacità `host.net` **con lista consentita**, che deve dichiarare nel proprio manifest - una shell che non può (o non vuole) soddisfarla la disattiva. Distribuisci le shell ai dispositivi tramite il tuo MDM, oppure servi un'istanza dentro la tua rete, e un'installazione completamente air-gap renderizza, esporta, cifra e verifica le credenziali senza nulla a cui rispondere all'esterno.

## Buono a sapersi

Alcune cose che vale la pena avere chiare prima di distribuirlo:

- **Irrobustimento in corso.** La crittografia e i parser stanno attraversando l'irrobustimento su scala enterprise di SUSE (vedi sopra) - oggi solidi per progettazione; distribuiscili come difesa in profondità dove un contratto richiede una garanzia certificata.
- **Gli hook degli strumenti *non* sono un sandbox di sicurezza.** L'`hooks.js` opzionale di uno strumento gira con il ponte dell'host iniettato, ma in una shell browser viene eseguito nel realm della pagina e *può* raggiungere `window`/`document`/`fetch`. Tratta il codice degli strumenti come tratteresti qualsiasi codice che esegui - revisionalo. Questo è il motivo per cui un'organizzazione che gestisce un catalogo condiviso può controllarlo tramite la revisione Git; in ogni caso, esegui solo strumenti che hai revisionato finché non sarà disponibile l'isolamento tramite Worker.
- **Le Content Credentials sono a prova di manomissione rilevabile.** Rilevano l'alterazione invece di impedirla - vedi le note sull'interoperabilità sopra.
- **Due livelli di crittografia.** I blocchi *Standard* sono deterrenti rapidi e universali; *Forte* (AES-256) è protezione piena - scegli Forte per qualsiasi cosa sensibile, tenendo conto che richiede un lettore moderno.

## Dove andare adesso

- **[Adozione e governance](/info/adoption-governance.html)** - personas, la metrica di deviazione e la governance-come-dati in dettaglio.
- **[Distribuzione](/info/deployment.html)** - distribuzione/servizio/ibrido, MDM e self-hosting dei servizi.
- **[Configurazione](/info/configuration.html)** - profili, brand pack, controllo delle capacità e feature flag.
- **[Informativa sulla privacy](/info/privacy.html)** - la dichiarazione formale "non raccoglie nulla, non carica nulla".
