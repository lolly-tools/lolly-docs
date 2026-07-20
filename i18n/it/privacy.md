# Informativa sulla privacy

*Ultimo aggiornamento: 19 luglio 2026*

> **In parole semplici.** I documenti, le immagini, i video e i file che crei in
> Lolly restano sul tuo dispositivo. Non ci sono account per l'uso ordinario,
> nessun cookie proveniente dall'app stessa, e nessuna analitica o tracker in
> alcun punto del codice - non "non usiamo i dati", ma genuinamente assenti dal
> sorgente. Esiste un elenco breve e completo di eccezioni in cui il software
> comunica con una rete, e ognuna di esse è descritta qui sotto nei dettagli:
> cosa esce, verso chi, e quando. L'unica eccezione che coinvolge qualcosa di
> personale è un accesso che devi avviare esplicitamente. Se non è in questo
> documento, non accade.

## Cosa copre questa informativa

Lolly è software open source - un engine, diversi shell dell'app (web, desktop,
mobile, CLI) e un'estensione del browser - che chiunque può eseguire. Questa
informativa ha due parti:

- **Il software in sé**: cosa fa e cosa non fa con i tuoi dati, ovunque venga
  eseguito. Questa è una proprietà del codice, quindi vale per ogni deployment di
  Lolly, il nostro o quello di chiunque altro.
- **lolly.tools**, il deployment di riferimento gestito da SUSE: le scelte
  specifiche fatte nell'esecuzione delle sue parti opzionali lato server (cosa
  viene registrato, per quanto tempo, da chi).

Se stai usando un'istanza di Lolly self-hosted o enterprise, il comportamento del
software descritto qui sotto vale comunque, ma l'*operatore* di quell'istanza -
non SUSE - è responsabile di tutto ciò che avviene lato server: il suo endpoint
di rendering, il suo server MCP, la sua autorità di certificazione per le Content
Credentials, se ne gestisce una. Chiedi a loro la loro informativa; vedi
[Adozione e governance](/info/adoption-governance.html) per capire cosa comporta
gestire Lolly.

## L'app: cosa resta sul tuo dispositivo

Gli shell web, desktop e mobile di Lolly eseguono l'intero engine di rendering
lato client. Aprire uno strumento, compilare gli input, l'anteprima e
l'esportazione avvengono tutti sul tuo dispositivo - nessun server è coinvolto, e
l'app funziona offline una volta caricata.

**L'app non imposta alcun cookie.** Per funzionare, conserva una piccola quantità
di dati **solo sul tuo dispositivo**, mai trasmessi:

- **Preferenze dell'interfaccia** - tema, lingua, impostazioni del suono,
  dimensione barra laterale/zoom, scelte di ordinamento e visualizzazione, quali
  suggerimenti di onboarding hai visto - in `localStorage`, così sono disponibili
  prima ancora che l'app abbia finito di avviarsi.
- **Una cache offline del catalogo degli strumenti e delle anteprime degli
  asset**, così la galleria funziona senza connessione.
- **Contatori di utilizzo locali** per le statistiche della tua card di profilo
  (quante esportazioni, quali strumenti) - un piccolo blob limitato in
  `localStorage`, mai letto da noi, mai inviato da nessuna parte.
- **I tuoi documenti, le sessioni salvate, gli asset e i font caricati** -
  archiviati in IndexedDB sul tuo dispositivo, mai caricati, mai letti da nessuno
  se non da te.

Niente di tutto questo viene condiviso, venduto, o usato per identificarti o
tracciarti. Non c'è nulla a cui dare consenso, perché non avviene alcuna raccolta
- solo questo avviso, così sai cosa viene conservato e dove. Cancella tutto in
qualsiasi momento con **Profilo → Cancella tutti i miei dati**, oppure cancellando
l'archiviazione del sito nel tuo browser. (Ai sensi dell'art. 5(3) della Direttiva
ePrivacy, l'archiviazione strettamente necessaria per il servizio che hai
richiesto non richiede consenso - solo trasparenza, che è ciò che sono sia questo
documento sia l'avviso nell'app.)

Il tuo backup personale di questi dati - il bundle `lolly-backup` prodotto da
**Esporta e renderizza tutto** - è un file che tieni e controlli tu. Non tocca mai
i nostri server a meno che tu non scelga di inviarlo da qualche parte tu stesso.
Vedi [Trasferimento dei dati](/info/data-transfer.html).

## Utilità sul dispositivo

Alcuni strumenti - **Strip Hidden Data**, **Compress PDF** e altri che portano il
badge **"Funziona sul tuo dispositivo"** - operano su un file che fornisci tu. Il
file viene letto in memoria nel tuo browser, trasformato localmente, e restituito
come download. Non viene mai caricato, perché non c'è alcun server nel percorso a
cui caricarlo. Queste utilità funzionano offline, e il loro output non porta alcuna
filigrana né metadato nostro - lo scopo della maggior parte di esse è rimuovere e
proteggere i dati, non aggiungere rischio.

## Quando l'app comunica con una rete, per intero

La tabella qui sotto è l'elenco completo di tutto ciò che l'app recupera o invia su
una rete. Se non è qui, l'app non lo fa.

| Cosa | Cosa esce davvero dal tuo dispositivo | Quando |
|---|---|---|
| Sincronizzazione del catalogo degli strumenti | Niente di personale - una richiesta dell'indice pubblico di strumenti e asset di Lolly | All'avvio, poi in cache offline |
| Una capacità di rete dichiarata da uno strumento | Ciò che quello specifico strumento richiede (ad esempio i tile della mappa) verso gli host specifici che elenca nella sua allowlist nel manifest | Solo mentre usi quello strumento |
| Google Fonts | Il nome della famiglia di font scelta e il tuo indirizzo IP, verso i server dei font di Google | Solo se aggiungi un Google Font nell'editor del brand - un recupero una tantum per famiglia, poi risiede sul tuo dispositivo |
| Verifica della firma SEAL | Una singola risoluzione DNS per una chiave pubblica, verso il dominio indicato all'interno del file da verificare | Solo se Verify trova un record SEAL in un file che verifichi - mai il file stesso |
| Modelli del rilevatore deep-scan | Niente di personale - un download di modello una tantum dallo stesso origin (non da terze parti) | Solo se attivi la scansione approfondita di Verify |
| Istanza remota | Ciò che l'istanza che indichi restituisce, tramite la stessa sincronizzazione del catalogo descritta sopra | Solo se punti esplicitamente lo shell verso un altro deployment di Lolly |

Nessuno di questi invia i tuoi documenti, progetti, sessioni o file caricati da
nessuna parte. Esistono per portare cose *verso* il tuo dispositivo (strumenti,
font, modelli, una chiave pubblica), mai per inviare cose *da* esso, con le
eccezioni indicate esplicitamente nelle sezioni qui sotto.

## URL di rendering in hot-link

L'app in sé resta interamente sul tuo dispositivo. Separatamente, e solo se lo usi,
lolly.tools (e qualsiasi istanza self-hosted che lo lascia abilitato) risponde agli
**URL di rendering in hot-link** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>`
- così che un link Lolly condiviso possa apparire come immagine live in un README,
in un wiki o in una dashboard. Recuperare uno di questi URL chiede al server di
renderizzare **dati pubblici di strumenti e catalogo** con gli input scritti
nell'URL, e questo è l'intero scambio:

- **Nessun account, nessun cookie, nessuno stato.** L'endpoint è anonimo; nulla
  viene archiviato per richiesta, e nulla sul tuo dispositivo viene letto. I tuoi
  documenti, sessioni e caricamenti non lasciano mai il tuo browser - non possono
  proprio apparire in questi link.
- **Gli input sono pubblici per costruzione** - sono ciò che l'autore del link ha
  digitato nell'URL, leggibile da chiunque il link raggiunga. Non mettere segreti
  in un link condiviso, Lolly mette a disposizione una funzione di cifratura dei
  link per i contenuti sensibili.
- Le risposte sono **in cache e con rate limit** come qualsiasi immagine pubblica,
  e contrassegnate `noindex` così i motori di ricerca non indicizzano i tuoi
  render.

Stai facendo self-hosting di Lolly e non vuoi una superficie di rendering
pubblica? Imposta `LOLLY_DISABLE_RENDER_GET=1` e ognuno di questi URL restituisce
404.

## Il server MCP (opzionale, per agenti AI)

Lolly può anche essere raggiunta da un agente AI tramite il Model Context Protocol
- un endpoint gestito da un operatore (lolly.tools ne gestisce uno; chiunque può
farne il self-hosting, incluso in modalità completamente air-gapped). Condivide la
postura senza account del percorso di rendering, più due strumenti che
necessariamente gestiscono i byte dei file:

- **`lolly_transform`** (esegue un'utilità sul dispositivo lato server, per conto
  dell'agente chiamante) e **`lolly_verify`** (verifica le Content Credentials)
  accettano entrambi i byte di un file dal chiamante. Vengono elaborati
  **in-process, in memoria**, e il risultato viene restituito in quella stessa
  chiamata - il file non viene mai scritto su disco e mai archiviato una volta
  completata la richiesta.
- Ogni altro strumento - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - lavora solo con parametri (testo, numeri, colori, URL,
  id di asset del catalogo), gli stessi input che accetta un URL di rendering in
  hot-link.
- L'accesso avviene tramite un token condiviso che l'operatore rilascia ai client
  di cui si fida, oppure tramite OAuth 2.1 stateless: token firmati di breve
  durata verificati contro un segreto condiviso, nulla archiviato lato server, e
  il token stesso non viene mai scritto in un log o in un URL di rendering.

## Identità Content Credentials (un accesso che devi avviare tu stesso)

Lolly può sigillare una **Content Credential** crittografica nelle tue
esportazioni così che chiunque possa verificare, offline, che un file non sia
stato alterato da quando ha lasciato Lolly. Questo è **attivo di default e
completamente locale** - la chiave di firma viene generata sul tuo dispositivo, è
**non estraibile** (nemmeno il codice di Lolly può leggerla), e la firma stessa
avviene offline. Questa sezione riguarda l'unico passaggio *opzionale* aggiuntivo:
registrare un'identità verificata, così che le tue esportazioni dicano "Verificato
- firmato da \<la tua email\>" invece che con una chiave anonima. **Se salti la
registrazione, nulla in questa sezione ti riguarda, e nessun dato personale lascia
mai il tuo dispositivo.**

Se invece ti registri, ecco esattamente cosa succede:

1. **Scegli un metodo di accesso** - GitHub, Google, SUSE (Okta), o un link
   inviato via email. Per i tre provider OIDC, vieni reindirizzato alla pagina di
   login del provider stesso, regolata dalla loro informativa sulla privacy, non
   dalla nostra; il servizio di certificazione di Lolly riceve indietro solo un
   indirizzo email verificato e il nome del provider. Per il link via email,
   l'indirizzo che digiti viene passato a **Resend**, un'API email transazionale,
   unicamente per recapitare quel singolo link.
2. **Un cookie di breve durata protegge il reindirizzamento.** Questo è l'unico
   cookie che l'intero sistema Lolly imposta: `lolly_ca_state`, `HttpOnly`, con
   ambito `/api/ca`, in scadenza entro dieci minuti. Porta un valore casuale, non
   un identificatore di tracciamento, ed esiste solo per impedire che il
   reindirizzamento OAuth venga falsificato. Viene cancellato non appena l'accesso
   è completato.
3. **Il tuo indirizzo IP viene usato, brevemente, per prevenire abusi** degli
   endpoint di accesso (così che uno script non possa inondare una casella di
   posta o esaurire la quota email) - conservato solo nella memoria del server,
   per una finestra scorrevole di circa un minuto, mai scritto in un log né
   persistito da nessuna parte.
4. **Il servizio di certificazione rilascia un certificato di breve durata** (7,
   30, 90 o 365 giorni, a tua scelta, con un tetto dato dalla policy
   dell'operatore) che lega la tua email verificata alla metà pubblica della
   coppia di chiavi generata sul tuo dispositivo. La metà privata non lascia mai il
   tuo browser.
5. **Il rilascio viene registrato**: il tuo indirizzo email, il provider che hai
   usato, un breve hash del numero di serie del certificato, e la sua data di
   scadenza, scritti nei log operativi del servizio - e, solo se l'operatore ne ha
   configurato uno, in un webhook che controlla lui. Questo è l'unico punto in cui
   un elemento dei tuoi dati personali viene conservato su un server, ed esiste
   così che un certificato compromesso o rilasciato per errore possa essere
   tracciato e così che il rilascio della CA stessa possa essere sottoposto ad
   audit.
6. **Dopo di ciò, la firma torna a essere offline** per l'intera durata di vita del
   certificato. Esportare un file non contatta mai il servizio di certificazione -
   solo la registrazione lo faceva.

Per lolly.tools nello specifico: SUSE gestisce il servizio di certificazione e
detiene questi log di rilascio. Vedi [I tuoi diritti](#your-rights) qui sotto per
come chiedere informazioni su una voce o rimuoverla.

## L'estensione del browser

L'estensione del browser **Lolly URL Screenshot** non raccoglie, non archivia e non
trasmette alcun dato personale. Nessuna analitica, nessun tracciamento, nessun
server remoto.

**Cosa fa.** Quando chiedi all'app web di Lolly di catturare uno screenshot di un
URL, l'estensione apre quella pagina in una scheda temporanea in background, la
cattura nel tuo browser usando il DevTools Protocol, restituisce l'immagine
all'app, e chiude la scheda. Tutto avviene localmente, sul tuo dispositivo e sulla
tua rete.

**Dati.**

- **Non raccogliamo nulla.** L'estensione non ha server e non effettua alcuna
  richiesta di rete propria.
- **Le immagini catturate** vanno direttamente all'app Lolly nello stesso browser
  - mai caricate dall'estensione.
- **Gli URL che catturi** vengono usati solo per caricare quella singola pagina per
  quello specifico screenshot. Non vengono registrati né condivisi.

**Permessi.**

- **`debugger`** - per catturare la pagina renderizzata tramite il DevTools
  Protocol (lo stesso meccanismo usato dall'app desktop di Lolly).
- **`tabs`** - per aprire e chiudere la scheda temporanea in cui la pagina viene
  caricata.
- **Accesso host (`<all_urls>`)** - perché la pagina che scegli di catturare può
  trovarsi su qualsiasi sito. Chrome lo presenta al momento dell'installazione come
  un ampio avviso di permesso; l'estensione visita sempre e solo l'URL che le dai.

Nessuno di questi viene usato per leggere, monitorare o trasmettere la tua
navigazione oltre quella singola cattura richiesta.

## Log dell'infrastruttura

Come qualsiasi sito web, i server dietro lolly.tools - e dietro qualsiasi
deployment di Lolly - generano log di accesso standard del server web ogni volta
che una richiesta li raggiunge: indirizzo IP, percorso richiesto, timestamp, user
agent, conservati per una finestra limitata per sicurezza e prevenzione degli
abusi. Questo è comportamento di hosting di base, non qualcosa che Lolly aggiunge, e
non contiene mai il contenuto dei tuoi documenti, perché quelli non raggiungono mai
un server in primo luogo. L'unica eccezione deliberata è un file che consegni
esplicitamente a una chiamata MCP `lolly_transform` o `lolly_verify`, che viene
elaborato in memoria e mai scritto su disco o in un log, come descritto sopra.

## Privacy dei minori

Lolly non raccoglie consapevolmente informazioni personali da nessuno, di
qualsiasi età, nel corso ordinario dell'uso dell'app - non c'è nulla da
raccogliere. L'unico punto in cui informazioni personali (un indirizzo email)
vengono mai raccolte è la registrazione alle Content Credentials, descritta sopra,
che non è rivolta né destinata ai minori.

## I tuoi diritti

Poiché quasi tutto ciò che Lolly tocca è archiviato solo sul tuo dispositivo, gran
parte di ciò che la legge sulla protezione dei dati chiama "i tuoi diritti" -
accesso, rettifica, cancellazione, portabilità - sono cose che puoi già fare da
solo, all'istante, senza chiedere a nessuno: i tuoi dati risiedono nello storage
del tuo browser, in una forma che puoi ispezionare, esportare (**Esporta e
renderizza tutto**, sopra), o cancellare (**Profilo → Cancella tutti i miei
dati**).

Per l'unico elemento di dati personali che può finire su un server - il tuo
indirizzo email, se ti sei registrato per le Content Credentials - contattaci (qui
sotto) per chiedere cosa deteniamo o per farlo rimuovere dai log attivi. Rimuovere
una voce di log non revoca un certificato già rilasciato (è di breve durata per
progettazione e semplicemente scade); interrompe la comparsa di quella voce nelle
future esportazioni del log.

Non vendiamo dati. Non ne abbiamo da vendere.

## Modifiche a questa informativa

La data in cima cambia ogni volta che questo documento cambia. Una modifica che
altera cosa esce dal tuo dispositivo o cosa viene conservato ottiene una propria
riga qui, non una modifica silenziosa - se vuoi vedere cosa è cambiato, chiedi (qui
sotto) oppure confronta con il [sorgente pubblico](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contatti

Domande, o una richiesta ai sensi di "I tuoi diritti" qui sopra: **Andy
Fitzsimon**, [fitzy@suse.com](mailto:fitzy@suse.com). Per un'istanza di Lolly
self-hosted o enterprise, contatta invece chi la gestisce - SUSE e il progetto open
source Lolly non detengono dati per i deployment che non gestiscono.
