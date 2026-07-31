# Profili - chi sei quando crei

Un **profilo** è l'identità di lavoro con cui Lolly *crea*. È il piccolo insieme di dati da cui uno strumento può attingere così non devi reinserirli ogni volta - il tuo nome, i dati di contatto, una foto opzionale, alcune preferenze - più tutto ciò che accumuli mentre lavori: sessioni salvate, immagini caricate, e il conteggio dell'attività locale.

Tutto quello che c'è in un profilo vive **sul dispositivo**, nel database locale del browser (IndexedDB sulla PWA web, il filesystem sulle app Tauri). Non c'è nessun account e niente viene caricato. Lo gestisci sotto **Profilo** (in alto a destra nella galleria); gli strumenti lo *leggono* soltanto, e solo i campi specifici per cui sono stati costruiti per la precompilazione.

> Un profilo riguarda *te* (o chiunque stia creando qui). È distinto dalla **Piattaforma** - i colori, i font e le impostazioni globali del brand - e dalle **Capacità**, il catalogo di ciò che l'app può fare. Consulta [Profilo contro Piattaforma contro Capacità](#profile-vs-platform-vs-capabilities) alla fine.

## Cosa c'è in un profilo

Le preferenze sono l'unica parte che cambia l'aspetto con cui l'app ti si presenta. Le card dei temi sono anteprime dal vivo e si applicano nel momento in cui ne scegli una, solo su questo dispositivo.

![Three theme cards, each previewing its own type and colour, with the active one flagged](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=1400&dpi=192&waitMs=1600&walker=1&format=svg&cropSelector=.profile-card--appearance&dark=1&filename=pd-theme-picker)

| Parte | Cos'è |
|---|---|
| **Nome** | Nome e cognome. |
| **Contatto** | Email e telefono. |
| **Località** | Città e paese. |
| **Foto** | Una foto opzionale, ritagliata a quadrato e conservata come immagine locale. Usata da strumenti come firme email, schede di citazione, blocchi di colore e layout dinamici. |
| **Usa i miei dati** | Un unico interruttore di adesione. Controlla se i tuoi dati personali viaggiano come **provenienza** - la riga di autore/credito incorporata nei file esportati - e come autore nelle esecuzioni batch di **/pro**. (Non condiziona la precompilazione: consulta [Come gli strumenti usano il tuo profilo](#how-tools-use-your-profile).) |
| **Preferenze** | Il tuo tema (chiaro, scuro, o SUSE) e quali parti dell'app hai attivato tramite i **Feature flag**. |
| **Il tuo lavoro** | Sessioni salvate (con miniature) - organizzate in cartelle annidate in **[Progetti](/info/using.html)** - la tua libreria **Le mie immagini**, e le statistiche di attività locale, tutto associato a questo profilo. |

Niente di tutto questo è obbligatorio. Un profilo vuoto è un profilo perfettamente valido; compili solo quello che ti risparmia di scrivere.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&walker=1&localize=1&dark=1&filename=profile-details&sweep=1)

## Un profilo è un contesto, non solo una persona

La parola "profilo" suggerisce una persona fissa unica, ma in Lolly è in realtà un **contesto di creazione** - *chi sei mentre crei questa cosa*. Quel contesto può assumere tre forme diverse, e Lolly le gestisce tutte allo stesso modo.

### Come individuo

![The headshot control, empty until you upload a photo that then stays on this device](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&cropSelector=.profile-side&walker=1&dark=1&filename=pd-profile-headshot)

L'impostazione predefinita. Il profilo sei tu: il tuo nome, la tua email, la tua foto. Configuralo una volta e la tua firma, il tuo badge, il tuo lockup per conferenze si completano tutti da soli. Questo è tutto ciò di cui la maggior parte delle persone avrà mai bisogno.

### Come team

Un profilo non deve per forza essere una singola persona. Può rappresentare un **team o una funzione all'interno di un'organizzazione**: il nome condiviso del team, un indirizzo di posta di gruppo (`events@…`), un dipartimento, la foto o il simbolo dell'unità del team. Una persona lo configura, lo esporta (vedi sotto), e il resto del team carica lo stesso profilo - così tutto ciò che il team produce porta dati coerenti senza che nessuno debba reinserirli. Un chiosco condiviso o un laptop demo in prestito può eseguire un unico profilo di team con cui chiunque lo usi crea.

### Come funzione - un ruolo che indossi ogni tanto

Questo è il caso che il modello rigido "una persona, un profilo" non contempla. Potresti essere un **event manager per tre giorni l'anno** e qualcosa di completamente diverso per il resto del tempo. In quei tre giorni vuoi i dati dell'evento, la casella di posta dell'evento, magari una sottomarca dell'evento per compilare i tuoi badge e la tua segnaletica; negli altri 362 vuoi indietro la tua identità normale.

In Lolly, quel ruolo è semplicemente **un altro profilo che tieni a portata di mano** - un pacchetto salvato (sezione successiva) che carichi per l'evento e metti da parte dopo. Il ruolo è un cappello, non un nuovo account. Indossalo quando ti serve, toglilo quando hai finito.

## Un'installazione, un profilo attivo - puoi conservarne molti

Archiviazione è il punto in cui vivono entrambe le metà della cosa: l'indicatore rende conto di ogni byte che questa installazione sta conservando, categoria per categoria, e i pulsanti sotto sono il modo per svuotarla o per portarla con te.

![The storage meter, breaking down saved sessions, images and cache against what the browser actually reports](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=1440&height=1800&dpi=192&waitMs=2400&css=.store-manages%2C.storage-subsection%2C.storage-actions%7Bdisplay%3Anone%7D&walker=1&format=svg&cropSelector=.store-meter&dark=1&filename=pd-storage-meter)

In ogni momento un'installazione ha **un profilo attivo** - i dati che uno strumento vede in questo momento. Non c'è un selettore di profilo dentro l'app; invece, ogni profilo è un **pacchetto portatile** (un unico `.zip`, vedi [sotto](#moving-a-profile-to-a-new-device)). È deliberatamente lo stesso meccanismo del passaggio a un nuovo dispositivo - un profilo è un file che puoi salvare, copiare e caricare.

Quindi se gestisci davvero più contesti contemporaneamente (tu, il tuo team, il cappello da event manager), conservi più pacchetti e carichi quello che ti serve:

- <!--i:trash--> **Il passaggio più pulito:** **Profilo → Archiviazione → Cancella tutti i miei dati**, poi **Importa** il pacchetto per il contesto in cui stai entrando. Ora crei esclusivamente come quel profilo.
- <!--i:layers--> **Sovrapposizione:** importare *senza* cancellare prima **unisce** - il profilo, le sessioni e le immagini importate si aggiungono sopra a quello che c'è già, sostituendo tutto ciò che ha lo stesso nome e lasciando il resto. Utile per portare le sessioni salvate di un team nella tua configurazione; non è quello che vuoi se hai bisogno di un confine netto tra ruoli.
- <!--i:monitor--> **Fianco a fianco:** poiché tutto è limitato al dispositivo, un profilo del browser separato, un account utente separato, o una seconda PWA installata portano ciascuno il proprio profilo Lolly indipendente. Esegui la tua installazione personale e l'installazione del chiosco dell'evento allo stesso tempo, senza dover cambiare.

> Conserva un pacchetto per ogni contesto e rinomina i file per quello che sono (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Il file *è* il profilo.

## Spostare un profilo su un nuovo dispositivo

![The two buttons that move a whole install: Export my data writes one zip, Import data reads it back](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=1440&height=1800&dpi=192&waitMs=2400&css=.store-manages%7Bdisplay%3Anone%7D&walker=1&format=svg&cropSelector=.storage-subsection&dark=1&filename=pd-transfer-controls&sweep=1)

Poiché un profilo è interamente locale, l'unico modo per portarlo su un'installazione vuota - un nuovo laptop, un browser appena resettato, il computer di un collega, una macchina offline - è **portare il file con te**. Nessun login lo ripristina al posto tuo, ed è proprio questo il punto: niente è mai uscito dal tuo dispositivo, per cominciare.

Sotto **Profilo → Archiviazione → Passa a un altro dispositivo**:

- <!--i:download--> **Esporta i miei dati** scarica un `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - nominato in base al profilo a cui appartiene, con un numero di sequenza giornaliero così le esportazioni ripetute non entrano in conflitto (le parti del nome vengono omesse quando il profilo non le ha). Contiene il tuo profilo, ogni sessione salvata (con la sua miniatura), le tue immagini caricate, e le tue preferenze (tema, layout, statistiche di attività locale).
- <!--i:upload--> **Importa dati…** sull'altra installazione rilegge quel file e riprendi esattamente da dove avevi lasciato.

Il pacchetto è uno zip semplice e autonomo, quindi viaggia con **qualsiasi** mezzo - USB, AirDrop, una condivisione di rete, un'email a te stesso - e la destinazione può essere completamente offline. Ogni parte ha un checksum, così un file danneggiato durante il trasferimento viene rilevato all'importazione invece di essere ripristinato a metà. L'importazione **unisce** (profilo/sessione/immagine con lo stesso nome vengono sovrascritti; tutto il resto viene mantenuto), quindi non cancella mai una destinazione già in uso.

Quello che non viaggia: la cache del catalogo (si riscarica da sola sul nuovo dispositivo) e gli strumenti stessi (si presume siano già presenti).

Per la struttura esatta del pacchetto, la politica delle versioni, e le regole di integrità, consulta **[Trasferimento dati](/info/data-transfer.html)**; per il percorso completo passo dopo passo, **[Usare Lolly → Passare a un altro dispositivo](/info/using.html#moving-to-another-device)**.

## Come gli strumenti usano il tuo profilo

![The single Use my details switch, sitting beside Save Profile and off until you turn it on](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&cropSelector=.profile-check&walker=1&dark=1&filename=pd-use-my-details)

Uno strumento *precompila* solo i campi del profilo per cui è stato esplicitamente costruito per associarsi:

**Associazione esplicita.** L'autore di uno strumento contrassegna un input perché attinga dal profilo (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Quando lo strumento si apre, quell'input si precompila dal tuo profilo - e puoi comunque sovrascriverlo per quella singola sessione senza modificare il profilo. La precompilazione è una comodità locale e avviene indipendentemente dal fatto che **Usa i miei dati** sia attivo o meno.

**L'adesione volontaria (provenienza).** Quando esporti un asset, i tuoi dati viaggiano facoltativamente come **provenienza** - una riga di autore/credito incorporata nei metadati del file (PNG, PDF, SVG, …) - così un asset finito può dire chi lo ha creato. *Questo* è ciò che governa **Usa i miei dati**: lascialo disattivato e l'esportazione porterà comunque l'attribuzione strumento/piattaforma "Made with Lolly", ma nessuna riga personale di autore/contatto viene incorporata. (La stessa adesione volontaria imposta l'autore nelle esecuzioni batch di **/pro**.) (Autori di strumenti: consulta [Creare strumenti → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) e [API host → `host.profile`](/info/host-api.html#host-profile).)

## Profilo contro Piattaforma contro Capacità

Tre elementi si trovano vicini nell'interfaccia e sono facili da confondere:

- <!--i:people--> **Profilo** - *tu* (o il tuo team, o il ruolo che ricopri): nome, contatto, foto, il tuo lavoro salvato. Personale, locale al dispositivo, portatile come pacchetto.
- <!--i:palette--> **Piattaforma** - il *brand*: colori, font, e impostazioni globali su cui renderizza ogni strumento. Condivisa e coerente, non personale.
- <!--i:sliders--> **Capacità** - *cosa può fare l'app*: l'insieme completo delle funzionalità e degli strumenti disponibili per te.

Un profilo cambia da chi *proviene* un asset; la piattaforma cambia il suo *aspetto*; le capacità sono *cosa puoi creare*.

### "Profilo" significa altre due cose altrove - non questa

![The Verified identity card, phone-width: the certificate lifetime picker and the enrolment step beneath it - the identity profile, separate from your personal details](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Didentity-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23identity-section&dark=1&filename=pv-identity-enrol)

La parola è sovraccarica di significati in tutto il progetto. Nessuno dei due è il profilo personale di cui parla questa pagina:

- <!--i:box--> **Profilo di contenuto** - una configurazione a tempo di build in `profiles.json` che associa un insieme di pacchetti di strumenti a un catalogo di brand (per esempio `suse`, `lolly-start`). È quello che un operatore sceglie al momento del deployment, ed è anche quello che il **parametro URL/CLI** `profile` seleziona come variante di *colore* al momento dell'esportazione (la condizione di stampa ICC/CMYK - consulta [Modalità URL](/info/url-mode.html)). Entrambi riguardano il *build/output*, non *te*. Consulta [Configurazione](/info/configuration.html).
- <!--i:seal--> **Profilo di identità** - l'opzionale **identità Content Credentials verificata** che puoi registrare (un certificato a breve durata che collega la tua email alle tue esportazioni firmate). Quella è un'identità di firma, distinta dai campi nome/contatto del profilo personale, sebbene **Usa i miei dati** governi se l'una o l'altra vengono incorporate. Consulta [Identità Content Credentials](/info/content-credentials-identity.html).

## Privacy

Un profilo non viene mai trasmesso, caricato, o usato per identificarti o tracciarti - non c'è niente a cui acconsentire, solo questo avviso perché tu sappia cosa viene conservato. Cancella tutto in qualsiasi momento con **Profilo → Cancella tutti i miei dati**. Consulta l'[Informativa sulla privacy](/info/privacy.html).
</content>
