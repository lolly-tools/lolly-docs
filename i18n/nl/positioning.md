# Hoe Lolly zich verhoudt

Waar dit platform past in het bredere landschap van creatieve tools, en waar het bewust **niet** meespeelt.

> **Pilotstatus:** Lolly is een prototype in gesloten pilot, geen afgerond product, en de beveiliging ervan ondergaat momenteel SUSE's strikte infrastructuurhardening, ter voorbereiding op enterprise-schaal. Deze positionering is waar Lolly naar *streeft* - de pagina [Adoptie & Governance](/info/adoption-governance.html#status) beschrijft hoe dat in de praktijk wordt getest.

## Landschap

![Design's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

| Mogelijkheid | Canva (open canvas) | Merkportals (DAM-templating) | Illustrator (desktop pro) | Figma / Penpot (online pro) | **Lolly (constraints-first)** |
|---|---|---|---|---|---|
| Massale contentgeneratie | gedeeltelijk | ✗ | ✗ | ✗ | **✓** |
| Werkt volledig offline | ✗ | ✗ | ✓ | gedeeltelijk | **✓** |
| Templatelogica & harde constraints | ✗ | gedeeltelijk | ✗ | gedeeltelijk | **✓** |
| Geen ontwerpvaardigheden vereist | gedeeltelijk | ✓ | ✗ | ✗ | **✓** |
| Automatische Content Credentials | ✗ | ✗ | gedeeltelijk | ✗ | **✓** |
| Tools combineren andere tools | ✗ | ✗ | ✗ | ✗ | **✓** |
| Open engine, geen SaaS-lock-in | ✗ | ✗ | ✗ | gedeeltelijk | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Opt-in forensische herkomstregistratie | ✗ | ✗ | ✗ | ✗ | **✓** |
| Mobiele en desktop-apps | ✓ | ✗ | ✗ | gedeeltelijk | **✓** |
| Command line & TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

De vorm van het gat is duidelijk: niets in het bestaande landschap biedt ons constraints-first, offline-geschikte, laagdrempelige, intern toegankelijke, generatieve output. Lolly levert nu ook een eigen open canvas - **Design**, een vrij canvas met direct-manipulatie - maar met een doorslaggevend verschil ten opzichte van de Canva-kolom: kleuren, typografie en assets die erop geplaatst worden, conformeren aan de brand-globals, zodat zelfs vrije opmaak constraints-first blijft. Wat Lolly nog steeds **niet** is, is een onbeperkte ontwerpsuite; ontwerpers blijven Illustrator en Figma gebruiken voor maatwerk - en wanneer dat werk een beheerd, reproduceerbaar asset moet worden, brengt Design's [Ontwerp importeren](/info/design-import.html) het afgeronde Figma-, Illustrator- of Penpot-bestand als bewerkbare, brand-conforme vakken op het canvas.

## Gebruik het voor

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio is een goede maatstaf voor het plafond hier: een hele slidedeck als data gedeclareerd, live op het canvas opgemaakt, en geëxporteerd als een native bewerkbare PowerPoint.

- Snelle generatie van operationele creatieve assets (eventtegels, badges, handtekeningen, meldingen)
- Vrije opmaak op het open canvas (Design) wanneer de onderdelen - kleuren, typografie, iconen, afbeeldingen - conform de brand-globals moeten blijven
- Een afgerond Figma-, Illustrator-, InDesign- of Penpot-ontwerp binnenhalen (Design's Ontwerp importeren) zodat het bewerkt, beheerd en deterministisch opnieuw gerenderd kan worden in elk Lolly-formaat
- One-op-veel-flows van het type "vul drie velden in, krijg het afgeronde asset" - inclusief bulkverwerking vanuit een spreadsheet/CSV in het `/pro` batch-grid (plak of importeer rijen, één afgerond asset per rij, download als zip)
- Altijd-aan, terugkerende branded output
- Situaties waarin centrale controle over merkexpressie belangrijker is dan expressieve vrijheid

## Gebruik het niet voor

- Maatwerk of vlaggenschip hero-content (billboards, grote video's)
- Uniek campagnewerk dat echt een ontwerper nodig heeft
- Ideevorming die volledig buiten het merksysteem moet treden - Lolly's open canvas conformeert kleuren, typografie en assets nog steeds aan de brand-globals, en dat is precies het punt

## Keur de tool goed, niet het bestand

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Elke andere tool in het landschap produceert een *bestand* dat daarna gecontroleerd moet worden - een brandmanager in een Slack-thread, legal over de disclaimer, een ronde wijzigingen, nog een review. Lolly verplaatst de goedkeuring **één stap stroomopwaarts**. De merkregels - exacte hexcodes, gelicentieerde fontbestanden, afloopmarges, spatiëring - zitten hardgecodeerd in de HTML en CSS van de tool, dus de template *kan fysiek niet* een asset buiten het merk opleveren. De layout zelf is dragend.

Je keurt dus geen output meer goed, maar de **tool** die het maakt. Keur die één keer goed, en elk asset dat hij ooit produceert is door zijn constructie al voorgekeurd - geen mens in de lus, geen reviewcyclus, bij elk volume.

Dit is de paradigmaverschuiving die de deterministische engine echt levert: het is geen snellere versie van het oude goedkeuringsproces, het schaft het proces af. Voor het creatieve team is het een guard-rail, geen vervanging - jij gooit nog steeds de bal (de data, de tekst, de afbeelding) en de code is de bumperbaan die elke worp uit de goot houdt.

| Assets goedkeuren, op de oude manier | De tool goedkeuren, op de Lolly-manier |
|---|---|
| Elk afgerond bestand wordt gecontroleerd, één voor één | De tool wordt één keer gecontroleerd |
| Aanvraag → ontwerper bouwt → merkreview → legal check → wijzigingen → nieuwe review | Één parameterwijziging → afgerond asset |
| Ontwerper, brandmanager, legal en aanvrager allemaal in de lus | De producer, helemaal alleen |
| Dagen per asset | Seconden per asset |
| 10.000 assets = 10.000 reviewcycli | 10.000 assets = nul (de template was al goedgekeurd) |

## Wat dit uniek biedt

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Wild ontwerppotentieel, veilig geleverd binnen context.** Tools kunnen avontuurlijke ontwerpideeën uiten binnen hardgecodeerde guard-rails.
- **Softwaregedefinieerde contentautomatisering die het uiteindelijke asset oplevert.** Input → eindbestand. Geen "sla het nu op vanuit je ontwerptool en verwerk het achteraf".
- **Tools combineren tools.** Eén tool kan de render van een andere tool insluiten en teruggeven als onderdeel van één afgerond asset, zonder tool-naar-tool codekoppeling - een primitief dat geen enkel open-canvas- of DAM-templating-product in het landschap biedt.
- **Leveranciersneutraliteit.** Volledige controle over features en kosten. Open-source engine. Tools en assets zijn git-getrackte content, niet vastgezet in een SaaS-database.

De eerste daarvan wordt het meest onderschat. Een stadsplan van posterkwaliteit, getekend als echte vectorpaden voor wegen en water, uit een dropdown en twee kleurvelden die niet buiten het merk gericht kunnen worden:

