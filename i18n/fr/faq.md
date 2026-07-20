# FAQ

Questions fréquemment posées, affichées dans l'accordéon de la page d'accueil `/info`.

**Comment maintenir ce fichier :** chaque titre `##` ci-dessous est une question ; tout ce qui se trouve en dessous
(jusqu'au `##` suivant) est la réponse. Les réponses utilisent le même markdown allégé que
le reste du site - sépare les paragraphes par une ligne vide. Ajoute, supprime ou
réordonne les questions ici, puis relance `npm run build:info` (ou `npm run dev:web`).
Tout ce qui précède le premier `##` (ce titre et ces notes) est ignoré par le build.

## Que se passe-t-il quand j'active l'opt-in sur la page /profile ?

Quand tu utilises Lolly pour la première fois, tout ce que tu tapes où que ce soit reste entièrement privé jusqu'à ce que tu décides délibérément de rendre cette information publique via un média ou un lien de partage (si en ligne).

Une fois l'opt-in activé, nous intégrons certaines informations de ton profil comme preuve de provenance dans les assets et les bundles, afin de t'identifier comme la source.

Lolly produit un grand volume de contenu. Nous adoptons une approche stricte de minimisation des données pour limiter les risques.

### Que sont les feature flags ?

Les feature flags activent ou désactivent certaines parties de Lolly. Habituellement, c'est un administrateur qui les contrôle - avec Lolly, c'est toi qui as le contrôle.

## Comment puis-je obtenir les applications mobile ou de bureau ?

N'importe qui peut distribuer sa propre application ; les outils et la configuration de ces applications varient considérablement selon le public visé. Il n'existe donc pas d'application unique, à moins que tu ne l'aies créée toi-même ou qu'une personne concernée te la fournisse.

## Pourquoi le nom « Lolly Tools » ?

**Lolly** Parce que la liberté est douce.
**Tools** sont inactifs quand ils ne servent pas. Ils n'espionnent pas, ne font tourner aucun programme secret, 
Mets-les au travail : tes ordres, tes actions, tes conditions.

**Lolly** est un terme australien, néo-zélandais et britannique pour désigner des « bonbons » ou des « sucreries ». Tout comme les bonbons, les outils sont très savoureux pour ceux qui en ont besoin.

On rigole aussi du temps et de l'argent qu'on économise avec cette approche.

## À quels obstacles puis-je m'attendre en adoptant Lolly ?

Lolly s'intègre partout où tu génères déjà des fichiers - la CLI utilise le même moteur
que l'application, donc un pipeline exécuté à 2h du matin ne peut pas diverger de ce qu'une
personne prévisualise dans un navigateur. La friction à l'adoption est rarement technique ;
elle est organisationnelle. Voici à quoi t'attendre :

**Il faut créer un catalogue de marque organisé.** Lolly est une plateforme, pas un
pack de templates prêts à l'emploi. Pour un *déploiement gouverné*, quelqu'un doit définir le
catalogue d'assets partagé (logos, palettes, polices en tant qu'IDs permanents) et écrire le
manifest + template pour chaque type de sortie. Les particuliers n'ont pas besoin d'attendre
cela, cela dit - dans l'app ouverte, n'importe qui peut ingérer ses propres fichiers dans le
catalogue et créer des outils dans Layout Studio dès le premier jour.

**La gouvernance via Git est optionnelle - et peu familière aux non-ingénieurs.** Si tu gères
un catalogue *partagé et contrôlé*, « la revue de PR *est* la modération » : c'est élégant pour
les ingénieurs, mais peu familier pour la plupart des équipes de marque et de marketing. Si les
personnes qui possèdent les décisions de marque ne vivent pas dans Git, il te faudra un workflow
qui fasse le pont avec elles - ou bien l'IT devient discrètement le partenaire stratégique en
design et le gardien institutionnel au sens large. Ce qui est préféré par beaucoup dans des
environnements de production qui tournent depuis longtemps. Les équipes qui n'en veulent pas
peuvent simplement s'en passer.

**C'est volontairement restreint - présente-le comme tel.** Lolly n'est pas fait pour du contenu
sur-mesure ou du contenu hero. C'*est* ton DAM personnel - hydraté et boosté par ton design
system, tes outils et ton catalogue - et il *a* bel et bien un canevas ouvert (Layout Studio),
mais même là, les couleurs, la typographie et les assets respectent les paramètres globaux du
design actif, donc l'agencement libre reste à l'intérieur du système. Comparé à Figma ou Canva,
il paraîtra limité. Jugé pour ce qu'il est - une génération d'assets opérationnalisée, récurrente,
à très grande échelle - rien ne rivalise. Le mauvais cadrage est le principal frein rencontré.

**La gestion du changement côté production.** Les processus existants fonctionnent aujourd'hui,
même si le résultat n'est pas conforme à la marque. Les repointer vers le moteur implique de
retester et de réapprendre, et « on sait déjà faire des fichiers » devient l'excuse pour ne pas
migrer. Commence par convertir une sortie de production à forte visibilité et montre le
avant/après côte à côte.

Lolly élève tout vers le haut.


## Qu'est-ce qui différencie les utilitaires des outils ?

**Réponse simple →** Les utilitaires n'ont pas toujours besoin de faire du rendu, et peuvent donc avoir une UX différente.

**Vraie réponse →** Si les utilitaires peuvent être hébergés dans Lolly Tools, c'est pour ajouter encore une « couche de confort » défensive supplémentaire qui dissuade l'exfiltration de données.

Pourquoi ? Parce qu'on sait que, chaque jour, des gens prennent **du contenu confidentiel qu'ils ont déjà** et le confient à un
site web quelconque pour réaliser une petite opération mécanique :

- "**Compresser ce PDF**" → envoie un contrat / une fiche de paie / une présentation de direction à des entités inconnues.
- "**convertir un HEIC en JPG**" → envoie des photos personnelles (avec EXIF GPS) vers un hébergeur financé par la publicité
- "**recadrer / redimensionner cette image**" → envoie une capture d'écran de produit ou un asset non publié
- "**formater ce JSON**" / "décoder ce JWT" → colle des réponses d'API, des tokens, des secrets dans un formateur
- "**fusionner ces PDF**" → envoie **deux documents qui ne devraient jamais partager le même serveur**

Ces sites et leur immense longue traîne de clones ne sont **pas dignes de confiance par défaut** :
rétention inconnue, juridictions inconnues, sous-traitants inconnus, et un modèle économique
publicité/affiliation qui a tout intérêt à garder ce que tu leur donnes. L'opération est
triviale ; **le contenu, lui, a un coût.**

On gagne la guerre de la gouvernance grâce à une excellente commodité et un excellent service.

## Lolly peut-il éditer et générer le rendu de mes fichiers Figma, Penpot, Illustrator ou InDesign ?

Oui. Ouvre **Layout Studio** et clique sur **Importer un design** : il accepte un fichier Figma natif **.fig** (Enregistrer une copie locale), un export Penpot **.penpot**, un fichier Illustrator **.ai** ou **.pdf**, un fichier InDesign **.idml** (Fichier → Exporter → InDesign Markup), ou **n'importe quel SVG** (la porte grande ouverte - presque toutes les applications de design l'exportent). Tout est analysé entièrement sur ton appareil, sans compte ni plugin requis.

Les calques arrivent sous forme de boîtes modifiables sur le canevas ouvert : le texte reste re-modifiable, les formes restent des formes, les images rejoignent ta bibliothèque locale, et la typographie et les couleurs se conforment aux paramètres globaux de la marque. Enregistre-le et la mise en page devient un template réutilisable, adressable par URL, que n'importe qui avec Lolly peut remplir à nouveau - et tu peux y mélanger des tools en direct (un QR code, un graphique) qui se re-rendent au chargement. À partir de là, ça se rend comme tout le reste dans Lolly - SVG, PDF, PNG et le reste, reproductible depuis son URL. Voir [Importer un design](/info/design-import.html).

## Lolly peut-il rebrander une présentation PowerPoint existante ?

Oui - de deux façons, toutes deux sur ton appareil. L'utilitaire **Rebrand a Deck** prend un `.pptx` et remplace son thème, ses couleurs et polices codées en dur par celles de ta marque, tandis que les graphiques, SmartArt et animations passent à travers sans être touchés - tu récupères un `.pptx`. Ou ouvre la présentation dans **Deck Builder** (Charger → dépose le fichier) pour l'éditer diapositive par diapositive comme des objets libres, déjà alignés sur la marque, et exporte en PPTX, PDF ou vidéo. Déposer un `.pptx` sur une zone d'upload classe plutôt les diapositives que tu choisis comme assets SVG dans ta bibliothèque. Voir [Importer un design → Présentations et documents](/info/design-import.html#decks-and-documents).

## Que se passe-t-il le 29 août ?

Les outils à la marque SUSE quittent le projet, et de nouveaux outils d'exemple génériques, définis par l'utilisateur, prennent le relais.

SUSE exploitera sa propre instance de Lolly pour protéger ses marques déposées.

## Quelle part SUSE garde-t-elle privée ? (alias : c'est pour quand le rug-pull ?)

Les marques déposées de SUSE et les outils à ses couleurs ne servent qu'à la démonstration, jusqu'au 29 août. Tu trouveras une instance sans marque de Lolly sur [lolly.ART](https://lolly.art).

SUSE est une entreprise d'infrastructure open source pour les entreprises, forte de plus de trois décennies de leadership en matière de plateformes. Ses produits incluent des solutions d'infrastructure Linux, Cloud Native, Edge et IA de niveau entreprise.

Du point de vue de SUSE, il s'agit de joindre le geste à la parole en matière de souveraineté et de sécurité. À ce jour, la probabilité que SUSE transforme Lolly en produit commercial est quasiment nulle.

En toute transparence : SUSE *est* en train de développer des outils internes pour intégrer Lolly à ses systèmes IT - cela concerne la configuration interne de SUSE, pas un choix entre développement public ou privé.

En parlant du côté public, Lolly vise à être construit via [Open Build Service](https://openbuildservice.org/), avec des artefacts de chaîne d'approvisionnement sécurisés livrés par la [SUSE Application Collection](https://apps.rancher.io/applications).

On construira autant que possible en public - tu ne verras simplement plus les outils à la marque SUSE bien longtemps, ni la main-d'œuvre interne de SUSE et ses processus commerciaux, qui n'ont rien à voir avec Lolly.

## Quel parfum a ce logo Lolly ?

Certains disent Citron vert, d'autres disent Menthe, et parfois Pomme - Lolly apporte la douceur, c'est toi qui crées le parfum !
