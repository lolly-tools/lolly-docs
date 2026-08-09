# Comment Lolly se compare

Où cette plateforme se situe dans le paysage plus large des outils créatifs, et où elle choisit délibérément de **ne pas** jouer.

> **Statut pilote :** Lolly est un prototype en pilote fermé, pas un produit fini, et sa sécurité est actuellement soumise au durcissement strict de l'infrastructure de SUSE, en préparation d'un passage à l'échelle en entreprise. Ce positionnement est là où Lolly *vise* à se situer - la page [Adoption et gouvernance](/info/adoption-governance.html#status) explique comment cela est testé en pratique.

## Paysage

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Fonctionnalité | Canva (canevas ouvert) | Portails de marque (modèles DAM) | Illustrator (pro bureau) | Figma / Penpot (pro en ligne) | **Lolly (axé contraintes)** |
|---|---|---|---|---|---|
| Génération de contenu en masse | partiel | ✗ | ✗ | ✗ | **✓** |
| Fonctionne entièrement hors ligne | ✗ | ✗ | ✓ | partiel | **✓** |
| Logique de gabarits et contraintes strictes | ✗ | partiel | ✗ | partiel | **✓** |
| Aucune compétence en design requise | partiel | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatiques | ✗ | ✗ | partiel | ✗ | **✓** |
| Les outils composent d'autres outils | ✗ | ✗ | ✗ | ✗ | **✓** |
| Moteur ouvert, sans verrouillage SaaS | ✗ | ✗ | ✗ | partiel | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenance de niveau forensique, en option | ✗ | ✗ | ✗ | ✗ | **✓** |
| Applications mobiles et bureau | ✓ | ✗ | ✗ | partiel | **✓** |
| Ligne de commande et TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

La forme du manque est claire : rien dans le paysage existant ne propose une sortie générative à la fois axée contraintes, capable de fonctionner hors ligne, accessible sans compétence particulière et utilisable en interne. Lolly propose désormais son propre canevas ouvert - **Layout Studio**, un canevas libre à manipulation directe - mais avec une différence décisive par rapport à la colonne Canva : les couleurs, la typographie et les éléments placés dessus se conforment aux globales de la marque, si bien que même un agencement libre reste axé contraintes. Ce que Lolly n'est toujours **pas**, c'est une suite de design sans contraintes ; les designers continueront d'utiliser Illustrator et Figma pour le travail sur mesure - et quand ce travail doit devenir un actif gouverné et reproductible, la fonction [Import a design](/info/design-import.html) de Layout Studio fait entrer le fichier Figma/Illustrator/Penpot terminé sur le canevas sous forme de blocs éditables et conformés à la marque.

## À utiliser pour

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio donne une bonne mesure du plafond ici : une présentation entière déclarée sous forme de données, mise en page en direct sur le canevas, et exportée en PowerPoint natif et modifiable.

- Génération rapide d'actifs créatifs opérationnalisés (visuels d'événements, badges, signatures, alertes)
- Agencement libre sur le canevas ouvert (Layout Studio) quand les éléments - couleurs, typographie, icônes, images - doivent rester conformes aux globales de la marque
- Faire atterrir un design Figma, Illustrator, InDesign ou Penpot terminé (la fonction Import a design de Layout Studio) pour qu'il puisse être édité, gouverné et re-rendu de façon déterministe dans tous les formats Lolly
- Des flux « un-vers-plusieurs » du type « renseigne trois champs, obtiens l'actif final » - y compris les exécutions en masse depuis une feuille de calcul/CSV dans la grille de traitement par lots `/pro` (colle ou importe des lignes, un actif final par ligne, téléchargement en zip)
- Des livrables de marque récurrents, toujours actifs
- Les cas où le contrôle centralisé de l'expression de marque compte plus que la flexibilité expressive

## À ne pas utiliser pour

- Le contenu vitrine ou sur mesure (panneaux d'affichage, vidéos majeures)
- Le travail de campagne unique qui a véritablement besoin d'un designer
- L'idéation qui doit échapper entièrement au système de marque - le canevas ouvert de Lolly conforme quand même les couleurs, la typographie et les éléments aux globales de la marque, et c'est bien le but

## Approuver l'outil, pas le fichier

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Tous les autres outils du paysage produisent un *fichier* qu'il faut ensuite contrôler : un responsable de marque dans un fil Slack, le juridique sur la mention légale, une série de modifications, une nouvelle relecture. Lolly déplace l'approbation **d'un cran en amont**. Les règles de marque - codes hexadécimaux exacts, fichiers de polices sous licence, marges de fond perdu, espacements - sont codées en dur dans le HTML et le CSS de l'outil : le modèle ne *peut physiquement pas* produire un actif hors marque. La mise en page elle-même est porteuse.

Tu arrêtes donc d'approuver des sorties et tu commences à approuver l'**outil** qui les fabrique. Approuve-le une fois, et chaque actif qu'il produira sera pré-approuvé par construction : aucun humain dans la boucle, aucun cycle de relecture, quel que soit le volume.

C'est le changement de paradigme que le moteur déterministe apporte réellement : ce n'est pas une version plus rapide de l'ancien processus d'approbation, il supprime le processus. Pour l'équipe créative, c'est un garde-fou, pas un remplacement - tu lances toujours la boule (les données, le texte, l'image) et le code, ce sont les bumpers qui empêchent chaque lancer de finir dans la rigole.

| Approuver les actifs à l'ancienne | Approuver l'outil, à la manière de Lolly |
|---|---|
| Chaque fichier terminé est contrôlé, un par un | L'outil est contrôlé une seule fois |
| Demande → le designer fabrique → relecture marque → validation juridique → modifications → nouvelle relecture | Un changement de paramètre → actif terminé |
| Designer, responsable de marque, juridique et demandeur, tous dans la boucle | Le producteur, tout seul |
| Des jours par actif | Des secondes par actif |
| 10 000 actifs = 10 000 cycles de relecture | 10 000 actifs = zéro (le modèle était déjà approuvé) |

## Ce que cela apporte de façon unique

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Un potentiel créatif débridé, livré en toute sécurité et en contexte.** Les outils peuvent exprimer des idées de design audacieuses à l'intérieur de garde-fous codés en dur.
- **Une automatisation logicielle du contenu qui restitue l'actif final.** Entrée → fichier final. Pas de « maintenant, enregistre-le depuis ton outil de design et post-traite-le ».
- **Les outils composent des outils.** Un outil peut intégrer le rendu d'un autre outil et le restituer comme partie d'un seul actif final, sans aucun couplage de code entre outils - une primitive qu'aucun produit de canevas ouvert ou de modèles DAM du paysage n'offre.
- **Neutralité vis-à-vis des fournisseurs.** Contrôle total des fonctionnalités et des coûts. Moteur open source. Les outils et les actifs sont du contenu suivi par git, pas enfermés dans une base de données SaaS.

Le premier de ces points est celui que l'on sous-estime. Un plan de ville de qualité affiche, dessiné en véritables tracés vectoriels de voies et d'eau, à partir d'un menu déroulant et de deux champs de couleur qui ne peuvent pas sortir de la marque :

