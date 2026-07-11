# Informativa sulla privacy

*Ultimo aggiornamento: giugno 2026*

## L'app Lolly

Lolly funziona interamente nel tuo browser. **Non raccogliamo nulla, non trasmettiamo nulla, e non abbiamo server che vedono i tuoi dati.** Non ci sono analitiche, non c'è tracciamento, e nessuna terza parte di alcun tipo.

**Nessun cookie, da nessuna parte.** Lolly non imposta mai un cookie. Per far funzionare l'app, conserva una piccola quantità di dati **sul tuo dispositivo**, tutti strettamente necessari per una funzione che stai usando:

- **Il tuo tema chiaro/scuro** e alcune preferenze dell'interfaccia (larghezza della barra laterale, zoom).
- **Una cache offline del catalogo degli strumenti**, così la galleria si carica comunque senza connessione.
- **Contatori di utilizzo solo locali** per le piccole statistiche nella tua card di profilo — questi non vengono mai inviati da nessuna parte.
- **I tuoi documenti e le sessioni salvate**, archiviati localmente nel browser (IndexedDB) così il tuo lavoro persiste tra una visita e l'altra.

Niente di tutto questo viene condiviso, caricato, o usato per identificarti o tracciarti, quindi non c'è nulla a cui dare consenso — solo questo avviso, così sai cosa viene conservato. Puoi cancellare tutto in qualsiasi momento con **Profilo → Cancella tutti i miei dati**, oppure cancellando l'archiviazione del sito nel tuo browser.

Questo sito di documentazione (`/info`) è ancora più leggero: non imposta **alcun cookie**, memorizza solo la tua preferenza chiaro/scuro sul dispositivo, e serve tutto — font inclusi — direttamente da lolly.tools, senza richieste a CDN o a terze parti.

## Utilità sul dispositivo

Alcuni strumenti sono **utilità** che lavorano su un file fornito *da te* — per esempio **Strip Hidden Data**, che mostra i dati nascosti in un'immagine o in un PDF (posizione GPS, fotocamera, autore, editor e metadati del documento) e ti restituisce una copia pulita, oppure **Compress PDF**, che riduce un PDF ricomprimendo le sue immagini direttamente sul tuo dispositivo.

Queste funzionano **interamente nel tuo browser**. Il file che scegli viene letto in memoria sul tuo dispositivo, trasformato localmente, e restituito come download. **Non viene mai caricato** — non c'è alcun server a cui caricarlo. La copia pulita non porta filigrana né alcun metadato identificativo nostro; il punto è proprio *rimuovere* dati, non aggiungerne. Non viene memorizzato nulla dopo che te ne vai, e queste utilità funzionano offline. Vedrai un badge **"Funziona sul tuo dispositivo — niente viene caricato"** su ciascuna di esse.

Questo è l'opposto del tipico sito web "comprimi questo PDF" / "converti questo HEIC", che carica il tuo file sul server di uno sconosciuto per fare un lavoro che il tuo browser può fare localmente.

## L'estensione del browser

L'estensione del browser **Lolly URL Screenshot** non raccoglie, non archivia e non trasmette alcun dato personale. Nessuna analitica, nessun tracciamento, nessun server remoto.

## Cosa fa

Quando chiedi all'app web di Lolly ([lolly.tools](https://lolly.tools)) di catturare uno screenshot di un URL, l'estensione apre quella pagina in una scheda temporanea in background, la cattura nel tuo browser usando il DevTools Protocol, restituisce l'immagine all'app, e chiude la scheda. Tutto avviene localmente, sul tuo dispositivo e sulla tua rete.

## Dati

- **Non raccogliamo nulla.** L'estensione non ha server e non effettua alcuna richiesta di rete propria.
- **Le immagini catturate** vanno direttamente all'app Lolly nello stesso browser — mai caricate dall'estensione.
- **Gli URL che catturi** vengono usati solo per caricare quella singola pagina per quello specifico screenshot. Non vengono registrati né condivisi.

## Permessi

- **`debugger`** — per catturare la pagina renderizzata tramite il DevTools Protocol (lo stesso meccanismo usato dall'app desktop di Lolly).
- **Accesso alle schede** — per aprire e chiudere la scheda temporanea in cui la pagina viene caricata.
- **Accesso host** — perché la pagina che scegli di catturare può trovarsi su qualsiasi sito.

Nessuno di questi permessi viene usato per leggere, monitorare o trasmettere la tua navigazione.

## Contatti

Domande? Consulta [lolly.tools](https://lolly.tools).
