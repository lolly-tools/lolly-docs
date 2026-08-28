# Lolly per gli operatori

### Una strategia di sicurezza e intelligence in profondità - che per caso è anche una piattaforma di produzione creativa

Il sistema immunitario organizzativo zero-trust che avvolge ciò che già fai - così il lavoro creativo di routine di cui i tuoi team hanno bisogno ogni giorno avviene *dentro* il tuo perimetro invece di trapelare fuori.

**Cosa ci guadagni.** Sei la persona che ha detto sì a qualcosa di sicuro *e* popolare allo stesso tempo. Chiudi un buco di esfiltrazione, guadagni capacità ed elimini una coda di richieste in un'unica mossa - la rara vittoria di sicurezza che ti rende più apprezzato, non meno. Niente più chiamate alle 3 del mattino dal legale perché file riservati o dati dei clienti sono finiti in un tool web qualsiasi; meno fornitori SaaS, contratti e audit da gestire; e una traccia di audit completamente riproducibile a cui puntare quando qualcuno chiede. Dormi meglio, e allieti qualche giornata facendolo.

Lolly non è uno strumento creativo di serie B: mette output di qualità professionale nelle mani di tutti, e l'esperienza di creazione guidata dal brand non ha rivali. Il motivo per cui è *sicuro* distribuirlo su larga scala è architetturale: nulla viene caricato che tu non abbia messo lì, ogni risultato è riproducibile e ogni export può portare più livelli di registri crittografici tra i migliori del settore. Non importa come un documento sia arrivato sulla tua scrivania, puoi vederne l'intera provenienza, se è stato manomesso e se puoi ricrearlo pixel per pixel.

> **Lo stato attuale.** Le proprietà di sicurezza di Lolly sono solide per progettazione, e i suoi motori di crittografia e di analisi dei file stanno attraversando l'irrobustimento dell'infrastruttura di livello enterprise di SUSE. I sigilli, la firma sul dispositivo e la crittografia qui sotto sono reali e difendibili già ora, e stanno maturando verso una certificazione indipendente - quindi dove un contratto richiede una garanzia certificata, distribuiscili come difesa in profondità mentre quel processo si completa.

## Il vantaggio strategico

Il modo consueto in cui viene svolto il lavoro creativo di routine è una superficie di rischio: file inviati via email a contractor di design esterni, asset di brand caricati su una dozzina di editor SaaS, dati dei clienti incollati nel tool web di uno sconosciuto per "fare velocemente una grafica". Ognuno di questi casi è dato che esce dal tuo controllo.

Lolly ribalta tutto questo. Il lavoro che *causava* quelle perdite - la quote card, il banner localizzato, il badge per l'evento, lo screenshot redatto - ora avviene su un tool che gira sul dispositivo del dipendente stesso, contro il tuo brand, senza alcun server nel mezzo. Non hai aggiunto un controllo sopra un flusso di lavoro rischioso; hai sostituito il flusso di lavoro rischioso con uno che non ha percorso di esfiltrazione fin dall'inizio.

- **La configurazione è tua.** Il motore e le shell sono open source (MPL-2.0). Sovrapponi la tua autenticazione, telemetria o CA; ospitalo o no; mantieni il controllo completo su funzionalità e costi, tracciato con git, non chiuso in un database SaaS.
- **La governance può essere dati, non una dashboard.** Quando vuoi quel controllo, gestisci il catalogo strumenti come un repository Git - la revisione delle pull request diventa approvazione del marchio, con una traccia di audit completa e un ripristino istantaneo di ogni modello che il tuo team può toccare. È un'opzione, non un obbligo, e appartiene a un'unica postazione: chi crea lavora interamente dentro l'app, salvando ciò che fa come una **sessione** e trasmettendola come link di condivisione, backup o collaborazione dal vivo - niente di tutto ciò richiede git. Quando una di quelle sessioni merita di diventare un punto di partenza permanente, chi gestisce il deployment apre il link, salva i suoi valori come **modello** su quello strumento nel pack del marchio e fa commit. Da quel momento compare nel selettore "Nuovo da modello" dello strumento ed è collegabile direttamente come `?template=<id>`. Git è il passo di blocco dell'amministratore, usato una volta, e mai qualcosa che chi crea debba toccare. Vedi [Adozione e governance](/info/adoption-governance.html).
- **Le barriere di protezione sono strutturali.** I vincoli di marchio sono codificati in modo fisso nei modelli, non pubblicati come linee guida che le persone possano ignorare. Il risultato sbagliato non è solo scoraggiato - è irrappresentabile.

> **Governi l'intera staffetta.** Un creativo scrive le regole e uno sviluppatore le scala, ma è l'operatore a rendere sicuro far girare quel ciclo di vita in tutta l'organizzazione - lo stesso tool che permette a un rappresentante di servirsi da solo su un aereo è quello che puoi vincolare tramite revisione Git, distribuire tramite il tuo MDM e verificare crittograficamente. Guarda come i ruoli si compongono in [Il ciclo di vita di una campagna](/info/overview.html#the-lifecycle-of-a-campaign), e come lo governi in [Adoption & Governance](/info/adoption-governance.html).

## Elimina la coda di richieste moltiplicando i contenuti.

Uno degli obiettivi di Lolly è la **deflessione delle richieste di design**: richieste di routine che non hanno mai bisogno di raggiungere un designer perché la persona che aveva bisogno dell'asset lo ha realizzato da sé, correttamente, in pochi minuti. Ogni ticket deflesso è sia una vittoria di produttività sia un file in meno che cambia di mano.

Lolly è costruito per adattarsi a come la tua organizzazione opera davvero - non esiste un unico modo giusto di distribuirlo:

- **Distribuisci, non servire.** Spedisci Lolly sui dispositivi tramite il tuo MDM esistente (Intune, Jamf, Munki…). Gira localmente come app desktop/mobile o come PWA offline - funziona dietro qualsiasi firewall, in qualsiasi ambiente air-gapped, senza server da mantenere e con l'IT in controllo del ritmo degli aggiornamenti.
- **Solo servire.** Fai girare un'unica istanza dentro la tua rete (o dietro una VPN); gli utenti la raggiungono in un browser, nulla da installare. Pubblica un tool una volta, tutti lo hanno immediatamente; abbinalo al tuo IdP per il controllo degli accessi.
- **Ibrido.** App locali per il lavoro sul campo offline, una versione browser sempre aggiornata per macchine in prestito - entrambe puntate sulla stessa libreria di tool.

I modelli di deployment completi e la guida all'amministrazione si trovano in [Deployment](/info/deployment.html) e [Configuration](/info/configuration.html).

## Utilità anti-esfiltrazione

Una categoria di tool Lolly - le utilità per la privacy - esiste *specificamente* per tenere i file dentro il perimetro.


- **Rimuovi dati nascosti**
 Rimuove la posizione e tutte le informazioni identificative nascoste da documenti e file multimediali.

- **Text Helper**  
Anonimizza, codifica, formatta e manipola testo strutturato e non strutturato. 

- **Compress PDF**
Riduci un PDF troppo grande sul dispositivo, così nessuno finisce su un sito "comprimi il mio PDF" di terze parti nel momento in cui un file è troppo grande per essere inviato via email - esattamente il punto in cui i dati sfuggono di mano. 

Tutte queste sono trasformazioni sul dispositivo: il tuo file o dato entra, escono byte puliti e **non c'è alcun server a cui caricarlo**. Sono l'opposto deliberato del tipico strumento "carica il tuo file sul sito di uno sconosciuto per pulirlo" a cui un dipendente ben intenzionato altrimenti ricorrerebbe.

![Strip Hidden Data: il file arriva sulla tela e il badge dichiara chiaramente che non viene caricato nulla](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper è lo stesso patto, ma per il testo anziché per i file. È il banco di lavoro a schede che un dipendente andrebbe altrimenti a cercare sul sito di uno sconosciuto, e non dichiara alcun input perché nulla di ciò che tocca lascia mai la pagina.

![Il banco di lavoro di Text Helper - una fila di schede operazione sopra una card che dichiara che nulla di ciò che incolli lascia il tuo dispositivo](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF completa il set: l'allegato troppo grande si riduce sotto un livello di qualità che scegli tu, sulla macchina che già lo contiene.

![Compress PDF - un livello di qualità e un interruttore scala di grigi a sinistra, una zona di rilascio per il tuo PDF a destra e nessun caricamento in nessun punto](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinismo e riproducibilità

Ogni input di uno strumento è esprimibile come parametro URL, e gli stessi input producono lo stesso file. Questo ha due conseguenze operative:

- **Un URL è l'artefatto.** Fai commit del link, rigenera l'asset su richiesta - nessun binario committato in Git, nessuna caccia "all'ultima versione" in chat. Gli ID di asset e strumento sono contratti permanenti, quindi un link creato oggi si risolve ancora in seguito.
- **La CLI è lo stesso percorso di rendering** della GUI, quindi le pipeline di build e l'app non divergono mai. Genera immagini OG, social card e visualizzazioni di dati in fase di build, in modo riproducibile.

Prompt to Image è il determinismo nella sua forma più semplice: il testo è l'intero input, l'immagine composta è l'intero output e lo stesso testo si compone sempre allo stesso modo.

![Prompt to Image - un blocco di testo del prompt composto in un'immagine quadrata, senza nulla nel risultato che non fosse già nell'input](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Provenienza e Content Credentials

![La zona di rilascio di Verify accetta qualsiasi file, da qualsiasi fonte, e lo legge senza alcuna chiamata di rete](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Le esportazioni possono portare **Content Credentials** - un manifesto [C2PA](https://c2pa.org) firmato e legato a un hash dei byte del file. Qualsiasi modifica successiva al file rompe il sigillo, quindi un verificatore compatibile con C2PA **rileva l'alterazione crittograficamente, offline**. La credenziale è a prova di manomissione in senso *evidente*: segnala la manomissione anziché prevenirla, ed è esattamente ciò che rende possibile una verifica completamente offline.

- **Attiva di default, sul dispositivo.** La chiave di firma è generata sul dispositivo, non è estraibile (nemmeno Lolly può leggerla) e la firma avviene localmente - solo l'*iscrizione* opzionale dell'identità tocca mai la rete.
- **Livelli di fiducia.** Un'esportazione non iscritta è ben formata ma firmata in modo anonimo (`untrusted`). Iscrivi un'**identità verificata** (certificato a breve durata dalla CA di Lolly, legato a un'email) e i verificatori che ancorano la root di Lolly riportano `trusted` + l'email del firmatario. Un'autorità di timestamp affidabile e un badge di conformità C2PA da parte di un validatore terzo sono nella roadmap. Ogni livello è esplicito, e un file dichiara solo la fiducia che può dimostrare.
- **La durata della credenziale** è una scelta dell'operatore/utente al momento della firma: 7 / 30 / 90 / 365 giorni, default 30.
- **Il Lolly Imprint.** Un secondo segnale complementare, **attivo di default**: una filigrana a pixel invisibile incorporata nelle esportazioni raster (e nei raster renderizzati da Lolly all'interno di un PDF/PPTX, mai in un'immagine incorporata propria dell'utente). Dove la credenziale muore a qualsiasi modifica del contenitore, l'Imprint sopravvive a un nuovo salvataggio o a uno screenshot - un indizio duraturo "questi pixel sono passati per Lolly", solo di presenza, nessun dato personale. È sicurezza tramite offuscamento, non una difesa irrobustita, e integra la credenziale invece di sostituirla. `imprint=0` per disattivarlo.
- **Content Credentials durature (opzionali).** Un'esportazione raster può inoltre portare un marchio *duraturo* invisibile che codifica un identificatore di soft-binding, così la credenziale C2PA può essere recuperata anche dopo che un caricamento sui social o un nuovo salvataggio hanno rimosso i metadati del file - il caso in cui una credenziale normale andrebbe persa. È solo raster e costa un passaggio di codifica neurale, quindi è disattivata di default (`durable=1` per attivarla). Lolly riconosce oggi il proprio marchio duraturo offline su `/verify`; il recupero da parte di strumenti terzi (ad es. Adobe) seguirà una volta che la risoluzione del soft-binding del settore sarà in atto.
- **La verifica avviene sul dispositivo.** Rilascia qualsiasi file su `/verify` (o `lolly validate <file>`) per un report offline su se sia stato realmente creato con Lolly e rimasto invariato da allora. La vista Verify sul web segnala anche i contenuti generati dall'IA, rileva il Lolly Imprint, verifica le firme **SEAL** (una firma a livello di byte - con zero richieste di rete: il motore riceve un risolutore di chiave DNS *iniettato* e nessuna shell ne inietta uno oggi, quindi un record che porta la propria chiave inline `pk=` si verifica interamente offline mentre uno con chiave DNS riporta "nessun risolutore di chiave e nessuna chiave inline" invece di contattare l'esterno - vedi `SealPublicKeyResolver` in `engine/src/seal.ts`), esegue opzionalmente una scansione approfondita per filigrane a pixel di terze parti (un download una tantum del modello sul dispositivo) e rivela i dati nascosti - tutto senza caricare il file. Vedi [Content Credentials Identity](/info/content-credentials-identity.html).

> **Note di interoperabilità.** Lolly verifica oggi offline le proprie credenziali e molte di terze parti, inclusa la lettura dei manifesti C2PA claim **v2** di altri produttori. Due contenitori restano in corso d'opera, entrambi perché C2PA non ha ancora una mappatura standardizzata per essi, quindi Lolly porta la credenziale in un posto proprio e il verificatore di Lolly è quello che la rilegge: **WebM** (il manifesto viaggia come allegato Matroska) e **Ogg/Opus** (un campo `C2PA=` nell'intestazione dei commenti OpusTags, con quell'intervallo di byte escluso dal binding così che l'audio faccia comunque hash in modo identico). Tutto il resto è marcato secondo specifica - gli strumenti di terze parti verificano MP4, M4A, MP3, WAV, PNG, JPEG e PDF di Lolly senza modifiche. Vedi `engine/src/c2pa-containers.ts` per entrambe le mappature; convergeranno sullo standard una volta stabilizzato.

## Crittografia e protezione con password

Per i file che devono viaggiare bloccati, tutto avviene sul dispositivo:

![La card del blocco nel pannello di esportazione: una password e una scelta esplicita tra i due livelli](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Password di apertura PDF** - *Standard* è un deterrente RC4 a 40 bit (si apre ovunque, può viaggiare in un link); *Strong* è **AES-256** (PDF 2.0), digitata all'esportazione e mai inserita in un link.
- **Download bloccati** - uno ZIP, una cartella Progetti o un'esecuzione batch possono essere bloccati per intero: *Standard* ZipCrypto (debole, universale) o *Strong* **AES-256** (WinZip AE-2). Difesa in profondità: qualsiasi PDF dentro uno zip Strong è *anche* bloccato individualmente in AES-256, quindi resta bloccato dopo l'estrazione.
- **Link di condivisione protetti da password** - l'intero stato del link è cifrato in AES-256 sotto una chiave derivata con PBKDF2; viaggia solo il testo cifrato, la password non è mai nel link e la decifratura avviene nel browser del destinatario.

## Pronto per l'air-gap

L'air-gap è una **modalità di deployment di prima classe**, non una modalità speciale - Lolly funziona senza rete al momento del rendering fin da subito. La shell web è una PWA offline-first (service worker); i font e il WASM sono conservati sul dispositivo; lo stato degli strumenti è persistito localmente tramite il bridge host, mai in `localStorage`. Il modo supportato perché uno strumento raggiunga la rete è una capacità `host.net` **con allowlist** che dichiara nel proprio manifest - una shell che non può (o non vuole) soddisfarla la sostituisce con uno stub. Si tratta di un contratto di portabilità più che di un confine imposto (vedi la nota sugli hook qui sotto), motivo per cui rivedere il codice degli strumenti resta il controllo - anche se su un dispositivo air-gapped non c'è comunque nulla da raggiungere in nessuna direzione. Distribuisci le shell ai dispositivi tramite il tuo MDM, oppure servi un'istanza dentro la tua rete, e un'installazione completamente air-gapped renderizza, esporta, cifra e verifica le credenziali senza nulla da contattare all'esterno.

## Cose utili da sapere

Alcune cose che vale la pena avere chiare prima di distribuirlo:

- **Irrobustimento in corso.** La crittografia e i parser stanno attraversando l'irrobustimento su scala enterprise di SUSE (vedi sopra) - solidi per progettazione già oggi; distribuisci come difesa in profondità dove un contratto richiede una garanzia certificata.
- **Gli hook degli strumenti *non* sono una sandbox di sicurezza.** L'`hooks.js` opzionale di uno strumento viene eseguito con il bridge host iniettato, ma in una shell browser esegue nel realm della pagina e *può* raggiungere `window`/`document`/`fetch`. Tratta il codice di uno strumento come tratteresti qualsiasi codice che esegui - rivedilo. È per questo che un'organizzazione che gestisce un catalogo condiviso può filtrarlo tramite revisione Git; in ogni caso, esegui solo strumenti che hai revisionato finché non arriverà l'isolamento tramite Worker.
- **Le Content Credentials sono a prova di manomissione in senso evidente.** Rilevano l'alterazione invece di prevenirla - vedi le note di interoperabilità sopra.
- **Due livelli di crittografia.** I blocchi *Standard* sono deterrenti rapidi e universali; *Strong* (AES-256) è protezione completa - scegli Strong per qualsiasi cosa sensibile, tenendo presente che richiede un lettore moderno.

## Autonomo, o governato da un control plane

Due forme, e scegli per ogni deployment. **Autonomo è l'impostazione predefinita e non richiede alcun server:** Lolly renderizza sul dispositivo, ogni chi crea lavora dentro l'app, e la governance git-come-dati descritta sopra è del tutto opzionale - una singola organizzazione può eseguire questo repository senza ospitare nulla. **Quando vuoi un controllo a livello di intera organizzazione, aggiungi un control plane.** [lolly.work](https://lolly.work) è un servizio separato, open source (MPL-2.0), che ospiti tu stesso - o che puoi provare nell'ambiente sandbox ospitato -, che governa la shell dal vivo: accesso protetto da SSO, policy di feature flag / esportazione / filigrana, overlay degli input degli strumenti, federazione dei cataloghi, approvazioni e un registro di audit concatenato con hash, tutto servito alla shell senza cambiare una riga di codice qui. È agnostico rispetto al marchio (configurazione più il montaggio di un pack), consuma il motore e i pack di questo repository senza modificarli, e non diventa mai il percorso di rendering: Lolly continua a renderizzare sul dispositivo per progettazione. OSS = libertà individuale; OSS + control plane = libertà organizzativa.

## Dove andare adesso

- **[Sicurezza e verifica](/info/security.html)** - gli standard, i primitivi, il modello di fiducia e i test alla base delle credenziali e della crittografia sopra.
- **[Adozione e governance](/info/adoption-governance.html)** - persone, la metrica di deflessione e la governance come dato, in dettaglio.
- **[Deployment](/info/deployment.html)** - deploy/serve/ibrido, MDM e self-hosting dei servizi.
- **[Configurazione](/info/configuration.html)** - profili, brand pack, gating delle capacità e feature flag.
- **[Informativa sulla privacy](/info/privacy.html)** - la dichiarazione formale di cosa viene e non viene raccolto, conservato e inviato.
- **[Superficie server](/info/server-surface.html)** - l'inventario completo di ciò che gira lato server (due componenti opzionali) rispetto a ciò che gira sul dispositivo.
