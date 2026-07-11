# Hoe Lolly zich verhoudt

Waar dit platform past in het bredere landschap van creatieve tools, en waar het bewust **niet** meespeelt.

> **Pilotstatus:** Lolly is een prototype in gesloten pilot, geen afgerond product, en de beveiliging ervan ondergaat momenteel SUSE's strikte infrastructuurhardening, ter voorbereiding op enterprise-schaal. Deze positionering is waar Lolly naar *streeft* — de pagina [Adoptie & Governance](/info/adoption-governance.html#status) beschrijft hoe dat in de praktijk wordt getest.

## Landschap

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


De vorm van het gat is duidelijk: niets in het bestaande landschap biedt ons constraints-first, offline-geschikte, laagdrempelige, intern toegankelijke, generatieve output. Lolly levert nu ook een eigen open canvas — **Layout Studio**, een vrij canvas met direct-manipulatie — maar met een doorslaggevend verschil ten opzichte van de Canva-kolom: kleuren, typografie en assets die erop geplaatst worden, conformeren aan de brand-globals, zodat zelfs vrije opmaak constraints-first blijft. Wat Lolly nog steeds **niet** is, is een onbeperkte ontwerpsuite; ontwerpers blijven Illustrator en Figma gebruiken voor maatwerk — en wanneer dat werk een beheerd, reproduceerbaar asset moet worden, brengt Layout Studio's [Ontwerp importeren](/info/design-import.html) het afgeronde Figma-, Illustrator- of Penpot-bestand als bewerkbare, brand-conforme vakken op het canvas.

## Gebruik het voor

- Snelle generatie van operationele creatieve assets (eventtegels, badges, handtekeningen, meldingen)
- Vrije opmaak op het open canvas (Layout Studio) wanneer de onderdelen — kleuren, typografie, iconen, afbeeldingen — conform de brand-globals moeten blijven
- Een afgerond Figma-, Illustrator-, InDesign- of Penpot-ontwerp binnenhalen (Layout Studio's Ontwerp importeren) zodat het bewerkt, beheerd en deterministisch opnieuw gerenderd kan worden in elk Lolly-formaat
- One-op-veel-flows van het type "vul drie velden in, krijg het afgeronde asset" — inclusief bulkverwerking vanuit een spreadsheet/CSV in het `/pro` batch-grid (plak of importeer rijen, één afgerond asset per rij, download als zip)
- Altijd-aan, terugkerende branded output
- Situaties waarin centrale controle over merkexpressie belangrijker is dan expressieve vrijheid

## Gebruik het niet voor

- Maatwerk of vlaggenschip hero-content (billboards, grote video's)
- Uniek campagnewerk dat echt een ontwerper nodig heeft
- Ideevorming die volledig buiten het merksysteem moet treden — Lolly's open canvas conformeert kleuren, typografie en assets nog steeds aan de brand-globals, en dat is precies het punt

## Wat dit uniek biedt

- **Wild ontwerppotentieel, veilig geleverd binnen context.** Tools kunnen avontuurlijke ontwerpideeën uiten binnen hardgecodeerde guard-rails.
- **Softwaregedefinieerde contentautomatisering die het uiteindelijke asset oplevert.** Input → eindbestand. Geen "sla het nu op vanuit je ontwerptool en verwerk het achteraf".
- **Tools combineren tools.** Eén tool kan de render van een andere tool insluiten en teruggeven als onderdeel van één afgerond asset, zonder tool-naar-tool codekoppeling — een primitief dat geen enkel open-canvas- of DAM-templating-product in het landschap biedt.
- **Leveranciersneutraliteit.** Volledige controle over features en kosten. Open-source engine. Tools en assets zijn git-getrackte content, niet vastgezet in een SaaS-database.
