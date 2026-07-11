# Come si confronta Lolly

Dove si colloca questa piattaforma nel panorama più ampio degli strumenti creativi, e dove deliberatamente **non** gioca.

> **Stato del pilota:** Lolly è un prototipo in pilota chiuso, non un prodotto finito, e la sua sicurezza sta attualmente attraversando il rigoroso irrobustimento dell'infrastruttura di SUSE, in preparazione alla scala enterprise. Questo posizionamento è dove Lolly *punta* a collocarsi — la pagina [Adozione e governance](/info/adoption-governance.html#status) spiega come viene messo alla prova nella pratica.

## Panorama

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


La portata del divario è chiara: niente nel panorama esistente ci offre un output generativo basato su vincoli, capace di funzionare offline, con basse competenze richieste e accessibile internamente. Lolly include ora un proprio canvas aperto — **Layout Studio**, un canvas libero a manipolazione diretta — ma con una differenza decisiva rispetto alla colonna di Canva: i colori, la tipografia e gli asset collocati su di esso si conformano alle variabili globali di marca, così che anche la disposizione libera resti basata su vincoli. Ciò che Lolly ancora **non** è: una suite di design senza vincoli; i designer continueranno a usare Illustrator e Figma per il lavoro su misura — e quando quel lavoro ha bisogno di diventare un asset governato e riproducibile, [Importa un design](/info/design-import.html) di Layout Studio porta il file Figma/Illustrator/Penpot finito sul canvas come riquadri modificabili e conformati al brand.

## Usalo per

- Generazione rapida di asset creativi operazionalizzati (tessere per eventi, badge, firme, allerte)
- Disposizione libera sul canvas aperto (Layout Studio) quando gli elementi — colori, tipografia, icone, immagini — devono restare conformi alle variabili globali di marca
- Portare un design finito da Figma, Illustrator, InDesign o Penpot (la funzione Importa un design di Layout Studio), così che possa essere modificato, governato e renderizzato di nuovo in modo deterministico in ogni formato di Lolly
- Flussi uno-a-molti del tipo "compila tre campi, ottieni l'asset finito" — comprese esecuzioni in massa da un foglio di calcolo/CSV nella griglia batch `/pro` (incolla o importa righe, un asset finito per riga, scarica come zip)
- Output di marca sempre attivi e ricorrenti
- Casi in cui il controllo centralizzato dell'espressione di marca conta più della flessibilità espressiva

## Non usarlo per

- Contenuti hero su misura o di punta (cartelloni pubblicitari, grandi video)
- Lavoro di campagna unico che ha davvero bisogno di un designer
- Ideazione che ha bisogno di uscire completamente dal sistema di marca — il canvas aperto di Lolly continua comunque a conformare colori, tipografia e asset alle variabili globali di marca, ed è proprio questo il punto

## Ciò che questo offre in modo unico

- **Potenziale di design audace, offerto in sicurezza e nel contesto.** Gli strumenti possono esprimere idee di design audaci entro barriere di protezione codificate.
- **Automazione dei contenuti definita via software, che restituisce l'asset finale.** Input → file finale. Niente "adesso salvalo dal tuo strumento di design e rielaboralo".
- **Gli strumenti compongono strumenti.** Uno strumento può incorporare il render di un altro strumento e restituirlo come parte di un unico asset finito, senza alcun accoppiamento di codice da strumento a strumento — una primitiva che nessun prodotto di canvas aperto o di template DAM nel panorama offre.
- **Neutralità rispetto al fornitore.** Pieno controllo su funzionalità e costi. Motore open source. Strumenti e asset sono contenuti tracciati in git, non bloccati in un database SaaS.
