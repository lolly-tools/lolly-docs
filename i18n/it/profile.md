# Profili — chi sei quando crei

Un **profilo** è l'identità di lavoro con cui Lolly *crea*. È il piccolo insieme di dati da cui uno strumento può attingere così non devi reinserirli ogni volta — il tuo nome, i dati di contatto, una foto opzionale, alcune preferenze — più tutto ciò che accumuli mentre lavori: sessioni salvate, immagini caricate, e il conteggio dell'attività locale.

Tutto quello che c'è in un profilo vive **sul dispositivo**, nel database locale del browser (IndexedDB sulla PWA web, il filesystem sulle app Tauri). Non c'è nessun account e niente viene caricato. Lo gestisci sotto **Profilo** (in alto a destra nella galleria); gli strumenti lo *leggono* soltanto, e solo i campi specifici per cui sono stati costruiti per la precompilazione.

> Un profilo riguarda *te* (o chiunque stia creando qui). È distinto dalla **Piattaforma** — i colori, i font e le impostazioni globali del brand — e dalle **Capacità**, il catalogo di ciò che l'app può fare. Consulta [Profilo contro Piattaforma contro Capacità](#profile-vs-platform-vs-capabilities) alla fine.

## Cosa c'è in un profilo

| Parte | Cos'è |
|---|---|
| **Nome** | Nome e cognome. |
| **Contatto** | Email e telefono. |
| **Località** | Città e paese. |
| **Foto** | Una foto opzionale, ritagliata a quadrato e conservata come immagine locale. Usata da strumenti come firme email, schede di citazione, blocchi di colore e layout dinamici. |
| **Usa i miei dati** | Un unico interruttore di adesione. Controlla se i tuoi dati personali viaggiano come **provenienza** — la riga di autore/credito incorporata nei file esportati — e come autore nelle esecuzioni batch di **/pro**. (Non condiziona la precompilazione: consulta [Come gli strumenti usano il tuo profilo](#how-tools-use-your-profile).) |
| **Preferenze** | Il tuo tema (chiaro, scuro, o SUSE) e quali parti dell'app hai attivato tramite i **Feature flag**. |
| **Il tuo lavoro** | Sessioni salvate (con miniature) — organizzate in cartelle annidate in **[Progetti](/info/using.html)** — la tua libreria **Le mie immagini**, e le statistiche di attività locale, tutto associato a questo profilo. |

Niente di tutto questo è obbligatorio. Un profilo vuoto è un profilo perfettamente valido; compili solo quello che ti risparmia di scrivere.

## Un profilo è un contesto, non solo una persona

La parola "profilo" suggerisce una persona fissa unica, ma in Lolly è in realtà un **contesto di creazione** — *chi sei mentre crei questa cosa*. Quel contesto può assumere tre forme diverse, e Lolly le gestisce tutte allo stesso modo.

### Come individuo

L'impostazione predefinita. Il profilo sei tu: il tuo nome, la tua email, la tua foto. Configuralo una volta e la tua firma, il tuo badge, il tuo lockup per conferenze si completano tutti da soli. Questo è tutto ciò di cui la maggior parte delle persone avrà mai bisogno.

### Come team

Un profilo non deve per forza essere una singola persona. Può rappresentare un **team o una funzione all'interno di un'organizzazione**: il nome condiviso del team, un indirizzo di posta di gruppo (`events@…`), un dipartimento, la foto o il simbolo dell'unità del team. Una persona lo configura, lo esporta (vedi sotto), e il resto del team carica lo stesso profilo — così tutto ciò che il team produce porta dati coerenti senza che nessuno debba reinserirli. Un chiosco condiviso o un laptop demo in prestito può eseguire un unico profilo di team con cui chiunque lo usi crea.

### Come funzione — un ruolo che indossi ogni tanto

Questo è il caso che il modello rigido "una persona, un profilo" non contempla. Potresti essere un **event manager per tre giorni l'anno** e qualcosa di completamente diverso per il resto del tempo. In quei tre giorni vuoi i dati dell'evento, la casella di posta dell'evento, magari una sottomarca dell'evento per compilare i tuoi badge e la tua segnaletica; negli altri 362 vuoi indietro la tua identità normale.

In Lolly, quel ruolo è semplicemente **un altro profilo che tieni a portata di mano** — un pacchetto salvato (sezione successiva) che carichi per l'evento e metti da parte dopo. Il ruolo è un cappello, non un nuovo account. Indossalo quando ti serve, toglilo quando hai finito.

## Un'installazione, un profilo attivo — puoi conservarne molti

In ogni momento un'installazione ha **un profilo attivo** — i dati che uno strumento vede in questo momento. Non c'è un selettore di profilo dentro l'app; invece, ogni profilo è un **pacchetto portatile** (un unico `.zip`, vedi [sotto](#moving-a-profile-to-a-new-device)). È deliberatamente lo stesso meccanismo del passaggio a un nuovo dispositivo — un profilo è un file che puoi salvare, copiare e caricare.

Quindi se gestisci davvero più contesti contemporaneamente (tu, il tuo team, il cappello da event manager), conservi più pacchetti e carichi quello che ti serve:

- **Il passaggio più pulito:** **Profilo → Archiviazione → Cancella tutti i miei dati**, poi **Importa** il pacchetto per il contesto in cui stai entrando. Ora crei esclusivamente come quel profilo.
- **Sovrapposizione:** importare *senza* cancellare prima **unisce** — il profilo, le sessioni e le immagini importate si aggiungono sopra a quello che c'è già, sostituendo tutto ciò che ha lo stesso nome e lasciando il resto. Utile per portare le sessioni salvate di un team nella tua configurazione; non è quello che vuoi se hai bisogno di un confine netto tra ruoli.
- **Fianco a fianco:** poiché tutto è limitato al dispositivo, un profilo del browser separato, un account utente separato, o una seconda PWA installata portano ciascuno il proprio profilo Lolly indipendente. Esegui la tua installazione personale e l'installazione del chiosco dell'evento allo stesso tempo, senza dover cambiare.

> Conserva un pacchetto per ogni contesto e rinomina i file per quello che sono (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Il file *è* il profilo.

## Spostare un profilo su un nuovo dispositivo

Poiché un profilo è interamente locale, l'unico modo per portarlo su un'installazione vuota — un nuovo laptop, un browser appena resettato, il computer di un collega, una macchina offline — è **portare il file con te**. Nessun login lo ripristina al posto tuo, ed è proprio questo il punto: niente è mai uscito dal tuo dispositivo, per cominciare.

Sotto **Profilo → Archiviazione → Passa a un altro dispositivo**:

- **Esporta i miei dati** scarica un `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` — nominato in base al profilo a cui appartiene, con un numero di sequenza giornaliero così le esportazioni ripetute non entrano in conflitto (le parti del nome vengono omesse quando il profilo non le ha). Contiene il tuo profilo, ogni sessione salvata (con la sua miniatura), le tue immagini caricate, e le tue preferenze (tema, layout, statistiche di attività locale).
- **Importa dati…** sull'altra installazione rilegge quel file e riprendi esattamente da dove avevi lasciato.

Il pacchetto è uno zip semplice e autonomo, quindi viaggia con **qualsiasi** mezzo — USB, AirDrop, una condivisione di rete, un'email a te stesso — e la destinazione può essere completamente offline. Ogni parte ha un checksum, così un file danneggiato durante il trasferimento viene rilevato all'importazione invece di essere ripristinato a metà. L'importazione **unisce** (profilo/sessione/immagine con lo stesso nome vengono sovrascritti; tutto il resto viene mantenuto), quindi non cancella mai una destinazione già in uso.

Quello che non viaggia: la cache del catalogo (si riscarica da sola sul nuovo dispositivo) e gli strumenti stessi (si presume siano già presenti).

Per la struttura esatta del pacchetto, la politica delle versioni, e le regole di integrità, consulta **[Trasferimento dati](/info/data-transfer.html)**; per il percorso completo passo dopo passo, **[Usare Lolly → Passare a un altro dispositivo](/info/using.html#moving-to-another-device)**.

## Come gli strumenti usano il tuo profilo

Uno strumento *precompila* solo i campi del profilo per cui è stato esplicitamente costruito per associarsi:

**Associazione esplicita.** L'autore di uno strumento contrassegna un input perché attinga dal profilo (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Quando lo strumento si apre, quell'input si precompila dal tuo profilo — e puoi comunque sovrascriverlo per quella singola sessione senza modificare il profilo. La precompilazione è una comodità locale e avviene indipendentemente dal fatto che **Usa i miei dati** sia attivo o meno.

**L'adesione volontaria (provenienza).** Quando esporti un asset, i tuoi dati viaggiano facoltativamente come **provenienza** — una riga di autore/credito incorporata nei metadati del file (PNG, PDF, SVG, …) — così un asset finito può dire chi lo ha creato. *Questo* è ciò che governa **Usa i miei dati**: lascialo disattivato e l'esportazione porterà comunque l'attribuzione strumento/piattaforma "Made with Lolly", ma nessuna riga personale di autore/contatto viene incorporata. (La stessa adesione volontaria imposta l'autore nelle esecuzioni batch di **/pro**.) (Autori di strumenti: consulta [Creare strumenti → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) e [API host → `host.profile`](/info/host-api.html#host-profile).)

## Profilo contro Piattaforma contro Capacità

Tre elementi si trovano vicini nell'interfaccia e sono facili da confondere:

- **Profilo** — *tu* (o il tuo team, o il ruolo che ricopri): nome, contatto, foto, il tuo lavoro salvato. Personale, locale al dispositivo, portatile come pacchetto.
- **Piattaforma** — il *brand*: colori, font, e impostazioni globali su cui renderizza ogni strumento. Condivisa e coerente, non personale.
- **Capacità** — *cosa può fare l'app*: l'insieme completo delle funzionalità e degli strumenti disponibili per te.

Un profilo cambia da chi *proviene* un asset; la piattaforma cambia il suo *aspetto*; le capacità sono *cosa puoi creare*.

## Privacy

Un profilo non viene mai trasmesso, caricato, o usato per identificarti o tracciarti — non c'è niente a cui acconsentire, solo questo avviso perché tu sappia cosa viene conservato. Cancella tutto in qualsiasi momento con **Profilo → Cancella tutti i miei dati**. Consulta l'[Informativa sulla privacy](/info/privacy.html).
