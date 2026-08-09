# Come si confronta Lolly

Dove si colloca questa piattaforma nel panorama più ampio degli strumenti creativi, e dove deliberatamente **non** gioca.

> **Stato del pilota:** Lolly è un prototipo in pilota chiuso, non un prodotto finito, e la sua sicurezza sta attualmente attraversando il rigoroso irrobustimento dell'infrastruttura di SUSE, in preparazione alla scala enterprise. Questo posizionamento è dove Lolly *punta* a collocarsi - la pagina [Adozione e governance](/info/adoption-governance.html#status) spiega come viene messo alla prova nella pratica.

## Panorama

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Funzionalità | Canva (canvas aperto) | Portali di marca (template DAM) | Illustrator (professionale desktop) | Figma / Penpot (professionale online) | **Lolly (basato su vincoli)** |
|---|---|---|---|---|---|
| Generazione di contenuti in massa | parziale | ✗ | ✗ | ✗ | **✓** |
| Funziona completamente offline | ✗ | ✗ | ✓ | parziale | **✓** |
| Logica dei template e vincoli rigidi | ✗ | parziale | ✗ | parziale | **✓** |
| Nessuna competenza di design richiesta | parziale | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatiche | ✗ | ✗ | parziale | ✗ | **✓** |
| Gli strumenti compongono altri strumenti | ✗ | ✗ | ✗ | ✗ | **✓** |
| Motore aperto, non vincolato a un SaaS | ✗ | ✗ | ✗ | parziale | **✓** |
| Content Credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenienza forense opzionale | ✗ | ✗ | ✗ | ✗ | **✓** |
| App mobili e desktop | ✓ | ✗ | ✗ | parziale | **✓** |
| Riga di comando e TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

La portata del divario è chiara: niente nel panorama esistente ci offre un output generativo basato su vincoli, capace di funzionare offline, con basse competenze richieste e accessibile internamente. Lolly include ora un proprio canvas aperto - **Layout Studio**, un canvas libero a manipolazione diretta - ma con una differenza decisiva rispetto alla colonna di Canva: i colori, la tipografia e gli asset collocati su di esso si conformano alle variabili globali di marca, così che anche la disposizione libera resti basata su vincoli. Ciò che Lolly ancora **non** è: una suite di design senza vincoli; i designer continueranno a usare Illustrator e Figma per il lavoro su misura - e quando quel lavoro ha bisogno di diventare un asset governato e riproducibile, [Importa un design](/info/design-import.html) di Layout Studio porta il file Figma/Illustrator/Penpot finito sul canvas come riquadri modificabili e conformati al brand.

## Usalo per

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio è una buona misura del limite raggiungibile qui: un'intera presentazione dichiarata come dati, impaginata dal vivo sul canvas ed esportata come un PowerPoint nativo e modificabile.

- Generazione rapida di asset creativi operazionalizzati (tessere per eventi, badge, firme, allerte)
- Disposizione libera sul canvas aperto (Layout Studio) quando gli elementi - colori, tipografia, icone, immagini - devono restare conformi alle variabili globali di marca
- Portare un design finito da Figma, Illustrator, InDesign o Penpot (la funzione Importa un design di Layout Studio), così che possa essere modificato, governato e renderizzato di nuovo in modo deterministico in ogni formato di Lolly
- Flussi uno-a-molti del tipo "compila tre campi, ottieni l'asset finito" - comprese esecuzioni in massa da un foglio di calcolo/CSV nella griglia batch `/pro` (incolla o importa righe, un asset finito per riga, scarica come zip)
- Output di marca sempre attivi e ricorrenti
- Casi in cui il controllo centralizzato dell'espressione di marca conta più della flessibilità espressiva

## Non usarlo per

- Contenuti hero su misura o di punta (cartelloni pubblicitari, grandi video)
- Lavoro di campagna unico che ha davvero bisogno di un designer
- Ideazione che ha bisogno di uscire completamente dal sistema di marca - il canvas aperto di Lolly continua comunque a conformare colori, tipografia e asset alle variabili globali di marca, ed è proprio questo il punto

## Approva lo strumento, non il file

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Ogni altro strumento del panorama produce un *file* che poi va controllato: un brand manager in un thread di Slack, il legale sul disclaimer, un giro di modifiche, un'altra revisione. Lolly sposta l'approvazione **un passo più a monte**. Le regole di marca - codici hex esatti, file di font in licenza, margini di abbondanza, spaziature - sono codificate nell'HTML e nel CSS dello strumento, quindi il template *non può fisicamente* produrre un asset fuori marca. Il layout stesso è portante.

Così smetti di approvare gli output e inizi ad approvare lo **strumento** che li genera. Approvalo una volta e ogni asset che produrrà sarà pre-approvato per costruzione: nessuna persona nel giro, nessun ciclo di revisione, a qualunque volume.

È questo il cambio di paradigma che il motore deterministico offre davvero: non è una versione più rapida del vecchio processo di approvazione, elimina il processo. Per il team creativo è una barriera di protezione, non un sostituto - la palla la lanci ancora tu (i dati, il testo, l'immagine) e il codice è la sponda della pista che tiene ogni tiro fuori dalla canaletta.

| Approvare gli asset alla vecchia maniera | Approvare lo strumento, alla maniera di Lolly |
|---|---|
| Ogni file finito viene controllato, uno per uno | Lo strumento viene controllato una volta sola |
| Richiesta → il designer costruisce → revisione del brand → controllo legale → modifiche → nuova revisione | Un parametro cambiato → asset finito |
| Designer, brand manager, legale e richiedente, tutti coinvolti | Il produttore, da solo |
| Giorni per asset | Secondi per asset |
| 10.000 asset = 10.000 cicli di revisione | 10.000 asset = zero (il template era già approvato) |

## Ciò che questo offre in modo unico

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Potenziale di design audace, offerto in sicurezza e nel contesto.** Gli strumenti possono esprimere idee di design audaci entro barriere di protezione codificate.
- **Automazione dei contenuti definita via software, che restituisce l'asset finale.** Input → file finale. Niente "adesso salvalo dal tuo strumento di design e rielaboralo".
- **Gli strumenti compongono strumenti.** Uno strumento può incorporare il render di un altro strumento e restituirlo come parte di un unico asset finito, senza alcun accoppiamento di codice da strumento a strumento - una primitiva che nessun prodotto di canvas aperto o di template DAM nel panorama offre.
- **Neutralità rispetto al fornitore.** Pieno controllo su funzionalità e costi. Motore open source. Strumenti e asset sono contenuti tracciati in git, non bloccati in un database SaaS.

Il primo di questi è quello che si tende a sottovalutare. Una mappa cittadina in qualità poster, disegnata con veri tracciati vettoriali di strade e acqua, a partire da un menu a tendina e due campi colore che non possono puntare fuori dal brand:

