# Vue d'ensemble

Ce document présente la raison d'être, la structure et les décisions d'architecture de la plateforme Lolly. Il reflète à la fois la vision produit et l'état actuel du code.

> **Statut :** Lolly est un prototype interne, en **pilote fermé qui n'est pas encore terminé**. Le moteur est déterministe et cohérent en interne, mais le produit est encore jeune — SUSE est le client numéro un — et ses moteurs de cryptographie et d'analyse de fichiers sont actuellement soumis au durcissement d'infrastructure strict de SUSE, en préparation de l'échelle entreprise (c'est vraiment notre domaine d'excellence). Lis l'architecture ci-dessous comme une intention de conception en cours de test, pas comme un produit fini et certifié. Voir [Adoption et gouvernance](/info/adoption-governance.html#status) pour savoir comment le pilote est mené et évalué.

---

## Pourquoi Lolly existe

Les équipes se heurtent à un problème récurrent : un travail créatif et de contenu répétitif, trop prévisible pour justifier une intervention experte à chaque fois, mais trop sensible en termes de qualité pour être délégué sans garde-fous. Le résultat : soit un débit lent (goulot d'étranglement chez les spécialistes), soit de l'incohérence (chacun utilise l'outil qu'il a sous la main), soit une dépendance à un fournisseur (un DAM SaaS qui contrôle tes templates).

Cette plateforme est la réponse structurelle :

> **Du créatif et du contenu programmatiques à l'échelle** — une génération d'assets sans travail manuel, avec les règles sous contrôle central, pour les employés, les fournisseurs et les partenaires.

Le résultat, c'est l'**abondance** : chaque événement a une signalétique correcte, chaque alerte CVE respecte la charte maison, chaque étiquette s'imprime proprement, chaque signature e-mail est à jour — tout ça sans ticket design. La plateforme prend en charge le créatif opérationnalisé récurrent. Ce n'est délibérément pas un outil de création sur mesure — les designers restent propriétaires du travail phare.

### Sa place dans le paysage

| Fonctionnalité | Canva | Portails de marque | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Génération de contenu en masse | partiel | ✗ | ✗ | ✗ | **✓** |
| Fonctionne entièrement hors ligne | ✗ | ✗ | ✓ | partiel | **✓** |
| Logique de gabarit et contraintes strictes | ✗ | partiel | ✗ | partiel | **✓** |
| Aucune compétence en design requise | partiel | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automatiques | ✗ | ✗ | partiel | ✗ | **✓** |
| Les outils composent d'autres outils | ✗ | ✗ | ✗ | ✗ | **✓** |
| Moteur ouvert, pas de verrouillage SaaS | ✗ | ✗ | ✗ | partiel | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Provenance de niveau forensique, en option | ✗ | ✗ | ✗ | ✗ | **✓** |
| Applications mobiles et bureau | ✓ | ✗ | ✗ | partiel | **✓** |
| Ligne de commande et TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

Le manque est clair : rien dans le paysage existant ne propose une sortie axée contraintes, capable de fonctionner hors ligne, accessible sans compétence particulière et utilisable en interne. Lolly inclut même un canevas ouvert — **Layout Studio** — où les couleurs, la typographie et les assets se conforment aux globales de la marque, si bien que l'agencement libre reste axé contraintes. Ce qu'il n'**est** pas, c'est une suite de design sans contraintes : les designers continuent d'utiliser Illustrator et Figma pour le travail phare sur mesure. Les permutations peuvent être assemblées avec cet outil.

**À utiliser pour :** la génération rapide d'assets créatifs opérationnalisés — visuels d'événements, badges nominatifs, signatures, alertes CVE, codes QR, cartes sociales, étiquettes d'expédition, rapports structurés.

**À ne pas utiliser pour :** le contenu vitrine sur mesure.

---

## Panorama

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Structure du dépôt

```
lolly/
├── engine/           # Cœur indépendant de la plateforme. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # surface publique — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # récupère et valide les fichiers d'outil
│       ├── runtime.ts        # orchestre le cycle de vie en 5 étapes
│       ├── template.ts       # hydratation Handlebars + annotateTemplate
│       ├── inputs.ts         # manifeste → modèle d'entrée runtime
│       ├── url-mode.ts       # aller-retour URL ↔ état des entrées
│       ├── validate.ts       # validation JSON Schema des manifestes
│       ├── compose.ts        # résout les rendus d'outils imbriqués (composes)
│       ├── embed.ts          # analyse les URL d'intégration portables lolly.tools
│       └── bridge/
│           └── host-v1.ts    # interface TypeScript — le contrat du pont
│
├── shells/
│   ├── web/          # PWA — hébergée en ligne ; distribution principale
│   │   └── src/
│   │       ├── main.ts           # démarrage, routage
│   │       ├── theme.ts          # application/persistance du thème (prévention du FOUC)
│   │       ├── bridge/           # implémentations web des API HostV1
│   │       │   ├── index.ts      # assemble toutes les pièces du pont
│   │       │   ├── db.ts         # mise en place d'IndexedDB
│   │       │   ├── state.ts      # host.state — modifications enregistrées
│   │       │   ├── profile.ts    # host.profile — coordonnées utilisateur
│   │       │   ├── assets.ts     # host.assets — catalogue + fichiers téléversés
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rastérise/sérialise
│   │       │   ├── net.ts        # host.net — fetch en liste blanche
│   │       │   └── media.ts      # host.media — images caméra en direct (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # synchronisation du catalogue au démarrage + cache hors ligne
│   │       ├── styles/           # CSS global de l'appli (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # liste de la bibliothèque d'outils + cartes d'état enregistré
│   │           ├── tool.ts       # monte un outil (entrées + canevas + actions)
│   │           ├── picker.ts     # interface du sélecteur d'assets (invoquée par host.assets)
│   │           ├── profile.ts    # éditeur des coordonnées utilisateur
│   │           ├── projects.ts   # /p — dossiers de sessions enregistrées (imbriqués ; export de dossier/sélection)
│   │           └── free-canvas.ts # overlay d'éditeur canevas libre pour les outils render.layout:"editor"
│   │
│   ├── cli/          # CLI Node.js — même moteur, jsdom headless
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → écriture du fichier
│   │       └── bridge.ts # implémentation CLI de HostV1
│   │
│   ├── tui/          # Shell terminal interactif (Ink) — réutilise le pont du CLI
│   │   └── src/
│   │       ├── main.tsx  # appli plein écran : Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # pont du CLI + état sur disque sous ~/.lolly
│   │
│   ├── tauri-desktop/ # appli desktop téléchargeable
│   └── tauri-mobile/  # appli iOS/Android
│
├── tools/            # VUE de profil (gitignored) — données, pas du code. Fusionné depuis les packs :
│                     #   community/ (public, indépendant de la marque, MPL) + brands/<active>/tools (propriété de la marque).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — météo/heure/carte (récupérés par un script inline du template)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # blocs typés/hétérogènes (discriminateur addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — logo de marque à bascule automatique
│   ├── street-map/        # cartes vectorielles de pâtés de maisons, hors ligne
│   ├── url-shot/          # "URL Screenshot" (capacité capture)
│   ├── strip-data/        # suppression de métadonnées sur l'appareil — JPEG/PNG/SVG/PDF (fichier en entrée → fichier nettoyé en sortie)
│   ├── compress-pdf/      # compresseur PDF sur l'appareil — recompresse les images (fichier en entrée → fichier plus léger en sortie)
│   ├── brand-lockup/      # "Brand Lockup" — lockups du logo SUSE ; texte-vers-tracé HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # graphiques SVG à partir de données structurées
│   ├── filter-duotone/    # traitement photo bicolore
│   ├── filter-halftone/   # photo → trame de points vectorielle (halftone)
│   ├── filter-scanline/   # photo → trame scanline rétro postérisée (SVG / raster transparent)
│   ├── meeting-planner/   # planificateur de réunions multi-fuseaux
│   ├── calendar-ics/      # événement → fichier calendrier .ics plus une carte
│   ├── digi-ad/           # "Animated Ad" — bannière en boucle à partir de scènes
│   ├── event-name-badge/  # badges de conférence — compose qr-code en SVG
│   ├── wayfinding-signage/ # signalétique d'événement ; les blocs de direction ajustent automatiquement le texte
│   ├── text-helper/       # atelier de texte sur l'appareil (format/décodage/hachage/anonymisation)
│   ├── layout-studio/     # "Layout Studio" — canevas éditeur WYSIWYG libre (render.layout: editor)
│   ├── multi-page-pdf/    # document PDF multi-page — couverture, blocs de contenu fluides, page de dos
│   ├── diagram-builder/   # diagrammes org / layercake / process / cycle / pyramid
│   ├── logo-wall/         # nombreux logos → grille à agencement automatique
│   ├── logo-lockup-partner/ # lockup co-marque SUSE + partenaire
│   ├── web-icon/          # favicon .ico / png / svg à partir de texte + couleurs
│   ├── filter-posterize/  # photo → séparations vectorielles postérisées à plat
│   ├── filter-pixel-stretch/ # photo → effet de traînée de pixels
│   ├── lottie-digi-ad/    # bannières publicitaires Lottie animées
│   └── pose-geeko/        # pose la mascotte SUSE Geeko — visuels fixes prêts à l'impression
│
├── catalog/
│   ├── tools/index.json        # registre des outils
│   └── assets/
│       ├── index.json          # registre des assets
│       └── suse/...            # logo, palette, etc.
│
├── schemas/          # JSON Schema pour tool.json, les entrées d'asset, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # tests du moteur
└── docs/             # ce fichier + guides de création + positionnement
```

---

## Modèle de distribution de la plateforme

La plateforme fonctionne sur plusieurs surfaces — PWA web, Tauri desktop/mobile, le CLI scriptable, et le TUI interactif. Toutes utilisent le même moteur et les mêmes fichiers d'outils.

### Web (PWA) — distribution principale
Hébergée à une URL contrôlée par SUSE. Fonctionne hors ligne une fois que le service worker a mis les outils et les assets en cache. C'est là que la plupart des employés, fournisseurs et partenaires utiliseront la plateforme. Aucun compte requis — l'état est stocké dans IndexedDB, par appareil.

Le shell web est responsive à partir d'une seule mise en page. Sur ordinateur, un outil se présente comme une barre latérale de contrôles redimensionnable à côté d'une scène d'aperçu, avec une navigation du canevas native au trackpad (molette Cmd/Ctrl ou pincement pour zoomer autour du curseur, glisser avec Espace ou le clic central pour te déplacer, les touches `0`/`1`/`+`/`−`, et un HUD Ajuster/%). Sur mobile (≤640px), les contrôles deviennent une feuille ancrée en haut avec une poignée de glissement qui s'aligne sur aperçu/moitié/plein (basculée au tap) par-dessus un aperçu statique plein écran, et un bouton flottant **Rendu** ouvre les contrôles d'**Export** dans un popover en feuille du bas. Le tactile bénéficie du pincement pour zoomer et du glissement pour se déplacer sur l'aperçu. Le chemin de rendu et les contrôles d'export sont identiques dans les deux cas — seul l'habillage change de disposition.

**Mode Batch (`/pro`).** Le shell web propose aussi une grille de traitement par lots façon tableur (`shells/web/src/pro/`) qui rend de nombreuses lignes à la fois, sur un ou plusieurs outils. Elle gère l'aller-retour CSV/TSV, le collage depuis un tableur, le template/format/taille/unité/dpi par ligne, un panneau latéral d'édition de blocs avec aperçu en direct, des colonnes d'export repliables, une barre d'étiquettes de « pertinence » par ligne, la réorganisation des lignes par poignée de glissement à gauche, une confirmation de suppression en deux étapes, des sessions batch enregistrées, et un téléchargement en `.zip`. C'est la surface un-vers-plusieurs derrière le positionnement « génération de contenu en masse ».

### Tauri desktop / mobile
Application native empaquetée (empreinte réduite grâce à Tauri). Fournit une disponibilité hors ligne complète, un accès au système de fichiers pour les outils dépendant du CLI (PDF Smasher, Font Outliner), et un accès à la caméra. Amélioration de l'outillage prévue pour mi-2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Les utilisateurs de bureau peuvent invoquer de nombreux outils depuis le terminal. Le shell CLI charge le même moteur, crée un DOM jsdom, exécute le même chemin de rendu, et écrit le fichier. Le mode URL sert de transport — le CLI n'est pas une implémentation séparée. Cela garantit que les sorties CLI et interface graphique sont identiques.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # liste les outils disponibles
lolly qr-code                # liste les entrées de cet outil
```

### TUI
`npm run tui`

L'équivalent interactif du CLI : une application terminal plein écran, pensée clavier d'abord (construite sur Ink), pour parcourir les outils, remplir les champs, enregistrer des projets et exporter — sans aucune interface graphique. Son host bridge **réutilise l'implémentation du CLI** pour les formats sans DOM (SVG/EMF/EPS/HTML + texte/données), et ajoute un état sur disque sous `~/.lolly` ainsi qu'un aperçu intégré optionnel. Au-delà de ça, il dispose d'un **palier de rendu navigateur** : un Chromium headless cantonné (le même que celui installé par le serveur MCP) qui produit du raster/PDF/vidéo et de la capture d'URL en direct à la demande — en pilotant une copie compilée du shell web pour que la sortie soit identique, et ne se lançant que lors du premier export d'un tel format. Ainsi, `url-shot` (avec recadrage + recoloration + PDF/SVG vectoriel) et tous les outils raster/pdf tournent aussi dans le terminal. Voir le [guide TUI](/info/tui.html).

---

## Catégories d'outils

Les outils sont étiquetés avec une `category` dans leur manifeste, pour le regroupement dans la galerie.

Les lignes sont listées dans l'ordre des sections de la galerie. La section `utility` s'affiche toujours **en dernier** dans la galerie (après toutes les autres catégories, y compris les futures) — c'est le tiroir « Utilitaires hors ligne » sur l'appareil.

| Catégorie | Outils livrés | Prévus |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Convertisseurs d'unités/formats, d'autres utilitaires de confidentialité sur l'appareil |

Les outils sont aussi classés par statut : `official` (approuvé par la marque, sans filigrane), `community` (contribution externe), `experimental` (exports filigranés). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap et Diagram Builder portent actuellement le statut `experimental` ; Web Icon Maker et Layout Studio sont livrés comme outils `community`.

**Layout Studio** est le premier outil construit sur le mode canevas libre `render.layout: "editor"` — une surface de manipulation directe sans habillage où tu fais glisser, redimensionnes, fais pivoter et alignes des boîtes de texte, de formes et d'images, puis exportes via le même chemin de rendu que tout autre outil.

**Strip Hidden Data** est le premier **utilitaire sur l'appareil** (`privacy: "on-device"`) : un outil de transformation de contenu qui prend un fichier fourni *par toi*, le traite entièrement dans le navigateur, et te rend une copie propre — jamais téléversée, jamais filigranée, aucune provenance apposée. **Text Helper** est le deuxième — un atelier sur l'appareil pour les tâches quotidiennes de type coller-dans-un-site-web (format JSON, décodage JWT, Base64, encodage/décodage URL, hachage SHA). **Compress PDF** est le troisième — il réduit un PDF en recompressant ses images, là encore entièrement sur l'appareil. Tous les trois portent le badge « Fonctionne sur ton appareil — rien n'est téléversé ». C'est le début d'une catégorie d'utilitaires de confidentialité qui remplace le fait de confier des fichiers confidentiels à des sites web à usage unique.

> Remarque : `category` et `status` sont dénormalisés dans `catalog/tools/index.json` (le registre que lit la galerie) à partir de chaque `tool.json`. Le manifeste fait foi — l'index est **généré** par `npm run build:catalog`, et `npm run validate:catalog` fait échouer la CI si l'index commité diverge des manifestes.

---

## Engagements d'architecture

Ces décisions sont arrêtées. En changer une seule est un chantier majeur — elles façonnent toutes les autres décisions du code.

### 1. Des outils déclaratifs, avec une échappatoire impérative

Un outil, c'est un manifeste (`tool.json`) + un template (`template.html`) + des `hooks.js` optionnels.

**Le manifeste déclare les entrées.** Pas le template. Les entrées ne sont pas déduites des jetons Handlebars. Le manifeste est le contrat ; le template consomme des variables nommées via `{{id}}`.

**Les hooks sont optionnels.** La plupart des outils sont purement déclaratifs — manifeste + template suffisent. Les outils qui ont besoin de valeurs calculées (encodage QR, mise en forme des données de graphique) fournissent un `hooks.js` exposant des fonctions de cycle de vie nommées (`onInit`, `onInput`, `onFrame` — le hook caméra en direct par image pour les outils réactifs au mouvement — `beforeRender`, `beforeExport`, `afterExport`, et `exportFile` — le chemin de transformation fichier-en/fichier-sorti utilisé par les utilitaires sur l'appareil comme Strip Hidden Data). L'hôte charge les hooks via `new Function('host', …)`, avec le pont de capacités injecté en tant que portée de closure. C'est un **contrat de portabilité, pas un bac à sable de sécurité** : les hooks s'exécutent toujours dans le realm de la page et *peuvent* accéder à `window`/`fetch`/`document` dans un shell navigateur — `host.*` est la surface prise en charge et portable, pas une frontière imposée. Les résultats de hooks asynchrones sont bornés dans le temps (onInit 5 s, onInput 2 s, les autres 5 s) et les résultats tardifs sont écartés ; un hook *synchrone* qui s'emballe ne peut pas être préempté. Le code de hooks tiers non fiable n'est donc pas sûr à exécuter tant que l'isolation par Worker n'est pas livrée.

Pourquoi c'est important : les outils déclaratifs peuvent être créés par des non-développeurs. Si chaque outil était une application web, la remarque de risque « compétences limitées pour créer/maintenir les templates de base » deviendrait un goulot d'étranglement permanent.

### 2. Les outils et les assets sont des données, pas du code embarqué

Les applis web et Tauri récupèrent les catalogues d'outils et d'assets depuis une URL connue au démarrage, les mettent en cache localement, et opèrent sur ce qui s'y trouve. **Ajouter un nouveau visuel d'événement ou un asset saisonnier ne nécessite pas de nouvelle version de l'application.**

Les octets des assets sont vérifiés par somme de contrôle SHA-256, pour empêcher l'empoisonnement de CDN. L'`id` + la `version` de l'asset pilotent l'invalidation du cache.

### 3. Le pont de capacités est la seule API que voient les outils

Les outils ne touchent jamais au DOM en dehors de leur zone de template, n'appellent jamais `fetch` directement, ne lisent jamais le système de fichiers. Ils appellent des méthodes `host.*` versionnées. Le pont est défini dans `engine/src/bridge/host-v1.ts` :

| API du pont | Ce qu'elle fait |
|---|---|
| `host.profile` | Prénom, e-mail, photo, ville, etc. de l'utilisateur. Pré-remplit les entrées via `bindToProfile`. |
| `host.assets` | Requêtes sur le catalogue, résolution d'assets, interface de sélecteur fournie par l'hôte. |
| `host.state` | Enregistre / charge les emplacements d'entrées. IndexedDB sur le web, système de fichiers sur Tauri, mémoire sur le CLI. |
| `host.clipboard` | Écrit du texte ou une image dans le presse-papiers (avec repli selon la plateforme). |
| `host.export` | Rastérise ou sérialise la cible de rendu. Applique un filigrane pour les outils expérimentaux. |
| `host.net` | Fetch en liste blanche — disponible uniquement si l'outil a déclaré la capacité `"network"`. (Aucun outil livré ne l'utilise actuellement.) |

Des surfaces optionnelles et additives n'apparaissent que lorsqu'un shell les fournit. Deux sont **conditionnées par une capacité** — exposées seulement quand l'outil déclare le drapeau correspondant : `host.compose` (intègre le rendu d'un autre outil — `compose`) et `host.capture` (capture de page pour URL Screenshot — `capture`). Les autres sont **détectées par fonctionnalité** — présentes dès que le shell peut les fournir : `host.text` (texte-vers-tracé via HarfBuzz WASM ; la capacité `wasm` signale les outils qui en dépendent), `host.pdf` (analyse/compression de PDF, utilisé par Strip Hidden Data et Compress PDF), et `host.tokens` (tokens de design DTCG). Les capacités déclarables sont : `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

Le même outil s'exécute dans le navigateur, sous Tauri et dans le CLI headless, parce que chaque shell implémente cette interface — l'outil ne sait jamais dans lequel il se trouve.

Le pont est versionné. Ajouter des méthodes est une version mineure. Supprimer ou modifier des signatures est un changement de version majeure. Quand la v2 sort, la v1 doit continuer à fonctionner.

### 4. Les ID d'assets sont éternels

`suse/logo/primary` est un contrat. Une fois publié :
- L'ID ne change jamais, n'est jamais réutilisé.
- Changement d'octets → incrémente `version` dans le manifeste.
- Remplacé par un nouvel asset → définit `deprecated: true` et éventuellement `replacedBy`.
- Les références existantes se résolvent toujours.

Cela rend les états d'outils enregistrés et les liens partagés par URL durables au fil des années.

### 5. Le mode URL est de premier ordre

Chaque entrée doit pouvoir s'exprimer comme un paramètre d'URL :

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

Le mode CLI est le mode URL sous un transport différent — le shell CLI construit un objet d'état URL à partir de argv et exécute le **même** pipeline moteur. Il n'y a qu'un seul chemin de rendu. Le CLI ne peut pas diverger de l'interface graphique parce que ce n'est pas une implémentation séparée.

`url-mode.ts` gère l'aller-retour (analyse et sérialisation). Paramètres réservés (jamais transmis à l'outil comme entrées) : `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (état compacté — le jeton « lien le plus court »), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Les entrées de type asset en mode URL sont sérialisées par leur `id` ; le runtime les résout via `host.assets.get()` avant l'hydratation. `width`/`height` sont des valeurs dans l'`unit` (par défaut `px`, ou aussi `mm`/`cm`/`in`/`pt`/`pc`) ; avec une unité physique, `dpi` définit la résolution raster. Elles définissent la taille du document du canevas et pré-remplissent le panneau des dimensions d'export.

### 6. Le stockage passe par le pont, jamais directement

Shell web : IndexedDB. Tauri : système de fichiers. CLI : en mémoire. Les outils ne voient que `host.state.save(slot, data)` et `host.state.load(slot)`. `localStorage` n'est pas utilisé — trop petit, incapable de contenir des blobs.

Les utilisateurs peuvent enregistrer plusieurs emplacements de modification nommés par outil et revenir à chaque session plus tard. Aucune création de compte n'est nécessaire ; l'état est propre à chaque appareil. Comme le pont est la seule jointure, cet état par appareil est aussi *portable* : `shells/web/src/data-transfer.ts` relit tout via `host.profile`/`host.state`/`host.assets` dans un unique zip `lolly-backup` qui s'importe sur n'importe quelle autre installation — la réponse hors ligne à « déménager vers un nouvel appareil » qui ne nécessite aucun serveur (spécification complète : `docs/data-transfer.md`). L'intégration SUSE ID (synchronisation multi-appareils) est un jalon futur, à construire par-dessus.

### 7. Les étiquettes de maturité répondent structurellement au risque « approuvé par la marque »

Chaque outil déclare `status: official | community | experimental` dans son manifeste. La galerie trie par statut. Les outils expérimentaux filigranent leurs exports automatiquement — le filigrane est appliqué par `host.export.render`, pas par l'outil, si bien qu'un auteur d'outil non officiel ne peut pas le désactiver.

C'est une réponse structurelle au risque de perception selon lequel utiliser n'importe quel outil impliquerait l'approbation de la marque. Des réponses de processus (une file de relecture, un contrôle d'accès via SUSE ID) viennent se superposer à cela.

### 8. Les entrées d'outils sont typées via le manifeste, y compris les assets

Les entrées déclarent un `type` : `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, et `file`. L'hôte affiche un contrôle générique par type à partir du manifeste — les outils n'écrivent aucun code de contrôle. Trois pèsent plus lourd que les autres :

- **`asset`** (avec `filter` et `allowUpload`) est le pont vers le système d'assets global ; `allowUpload: false` est le levier d'application stricte de la marque pour des cas comme les logos de visuels de sponsoring, où seuls les assets de bibliothèque sont autorisés. Les fichiers téléversés par l'utilisateur utilisent la même forme `AssetRef` que les assets de bibliothèque, si bien que les outils les traitent de façon identique.
- **`blocks`** est un groupe de champs répétitif — une mini-table à l'intérieur d'une seule entrée, éditée dans un panneau latéral, avec un menu d'ajout typé/discriminé et des champs asset par bloc. Cliquer sur un bloc rendu dans le canevas met le focus sur la ligne de ce bloc. Utilisé par `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, et `digi-ad`.
- **`vector`** regroupe un ensemble fixe de nombres (par exemple une transformation) en un seul contrôle composé ; **`file`** contient le fichier de l'utilisateur sous forme d'octets en mémoire, pour les utilitaires de transformation sur l'appareil (par exemple `strip-data` et `compress-pdf`).

### 9. Les templates sont sans logique (Handlebars, pas EJS)

Handlebars a été choisi plutôt qu'EJS, délibérément :
- Sans logique. Les templates peuvent être créés par des non-développeurs.
- Sûr par défaut. `{{x}}` échappe le HTML ; `{{{x}}}` est du brut, à activer explicitement.
- Pas de JS arbitraire dans les templates signifie pas de surface d'audit XSS par template.

La logique vit dans `hooks.js`, où elle est explicite et relisable. Helpers Handlebars disponibles : `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (plus les helpers de format de données `icsStamp`/`rfcText`/`csvCell`, utilisés par les templates `.ics`/`.vcf`/`.csv` associés).

### 10. Les outils composent des outils

Un outil peut intégrer le rendu d'un **autre** outil sans aucun import outil-à-outil — la composition est résolue par le moteur, jamais par le code de l'outil. Il y a deux surfaces :

- **Manifeste déclaratif** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. Le moteur rend l'enfant nommé et place le résultat dans le template sans logique sous la forme `{{asset <id>}}`. `event-name-badge` compose aujourd'hui `qr-code` en SVG.
- **URL d'intégration portable** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. Le shell rend cet enfant **localement** (un pixel de remplacement s'affiche jusqu'à ce que le rendu local soit résolu) ; rien n'est jamais récupéré depuis `lolly.tools`.

Compose le rendu de n'importe quel outil : un enfant **SVG** reste un vrai vecteur quand le parent exporte en SVG ou PDF, et se rastérise avec netteté pour le PNG ; les enfants **PNG/JPG/WEBP** s'intègrent comme des images. Nécessite la capacité `compose`. Les enfants composés sont des intermédiaires — jamais filigranés ni marqués de provenance — et la composition se dégrade en douceur : un shell qui ne peut pas rendre un enfant omet simplement l'emplacement, et le parent continue de se rendre.

---

## Ce que nous avons délibérément choisi de ne pas faire

- **Pas d'EJS / pas de JS arbitraire dans les templates.** La surface XSS est nulle. La logique vit dans `hooks.js`.
- **Pas de CMS pour les assets.** Le catalogue d'assets, c'est git. Les mises à jour passent par une relecture de PR. Pas d'interface de téléversement, pas d'auth, pas de file de modération. La relecture git _est_ la modération.
- **Pas de RBAC dans le MVP.** Accès public. Le risque de marque est géré par les étiquettes de maturité + les filigranes + le fait structurel que tous les assets vus par les utilisateurs sont passés par une relecture de PR.
- **Pas de base de données centrale.** Tout l'état utilisateur est propre à chaque appareil. L'intégration SUSE ID est sur la feuille de route, mais ce n'est pas un bloqueur de lancement.
- **Pas de chemin de code partagé outils/moteur.** Le moteur est open source ; `tools/` et `assets/` restent du contenu SUSE propriétaire, dans leurs propres dépôts. La séparation est imposée (aucun import croisé), pour que la scission reste propre.

---

## Cycle de vie, de bout en bout

Un utilisateur ouvre `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H` :

1. **Démarrage.** Le shell web ouvre IndexedDB, construit le pont de capacités, synchronise les catalogues d'outils et d'assets (ou charge depuis le cache si hors ligne).
2. **Routage.** Hash d'URL → vue `tool`, avec `qr-code` et les paramètres d'URL extraits.
3. **Chargement.** `loadTool('qr-code', fetchFile)` récupère `tool.json`, le valide par rapport au JSON Schema, récupère `template.html`, `styles.css`, et la source de `hooks.js`.
4. **Analyse de l'état URL.** `parseUrlState` traduit les paramètres d'URL en valeurs d'entrée initiales. Les références d'assets (`?logo=suse/logo/primary`) sont analysées comme des objets légers `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` construit le modèle d'entrées (en fusionnant les données de profil, les valeurs par défaut et les valeurs initiales), résout les références d'assets via `host.assets.get()`, charge les hooks (`host` en portée de closure, non isolé), appelle `hooks.onInit`.
6. **Rendu.** Le shell s'abonne au runtime ; à chaque changement d'état, il reçoit `{ model, hydrated }`. Il affiche les contrôles d'entrée à partir du modèle et écrit le HTML du template hydraté dans `#tool-canvas`.
7. **Interaction.** L'utilisateur saisit une entrée → `runtime.setInput(id, value)` → contraintes appliquées → `hooks.onInput` appelé → nouvelle hydratation → nouveau rendu. Le canevas se met à jour en direct.
8. **Export.** L'utilisateur clique sur Télécharger (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rastérise via dom-to-image-more ; SVG/PDF passent par des vectoriseurs dédiés qui parcourent le DOM) → blob → `host.export.download`. L'éventail de formats qu'un outil peut choisir est large : `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, les formats vectoriels `emf`, `eps`, plus les formats impression/CMJN `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk` ; les formats vidéo `webm`, `mp4`, `gif` ; et les formats données/texte `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Les outils qui définissent `render.export: false` — par exemple Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — masquent les contrôles de téléchargement/format/dimensions.) Les unités physiques sont converties par format à cette étape (PDF → véritables points de page, raster → pixels au DPI avec un chunk `pHYs`). Les métadonnées d'auteur/provenance (auteur, outil, source — construites par `engine/src/metadata.ts`) sont intégrées selon le format : PNG iTXt, JPEG EXIF, dictionnaire d'infos PDF, `<metadata>` SVG, commentaire GIF. Les outils expérimentaux reçoivent un filigrane inséré par l'hôte, pas par l'outil.

Même cycle de vie sous Tauri. Même cycle de vie dans le CLI — jsdom fournit le DOM headless ; la sortie va vers un fichier ou stdout.

---

## Statut open source

Les répertoires `engine/`, `shells/`, `schemas/`, et `docs/` sont open source sous **MPL-2.0** — une plateforme d'échafaudage neutre vis-à-vis des fournisseurs pour l'outillage de marque, chaque unité livrable étant scindée dans son propre dépôt sous [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` et `catalog/assets/` sont du contenu spécifique à SUSE et restent **propriété exclusive de SUSE** (tous droits réservés — voir le `NOTICE.md` de chaque dépôt) ; ils ne sont pas couverts par la MPL.

La scission est imposée — il n'y a aucun import croisé de `engine/` vers `tools/` ou `assets/` — si bien que la frontière plateforme/contenu reste nette.

---

## Feuille de route

| Jalon | Échéance | Contenu |
|---|---|---|
| **Outils initiaux** | ✅ Fait | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — shell web en ligne |
| **Améliorer l'outillage actuel** | Mi-2026 ✅ Fait  | Application hors ligne téléchargeable (Tauri) ; outils supplémentaires pour les employés et les événements ; pipeline d'export enrichi (stabilité du texte-vers-tracé, métadonnées, formats supplémentaires — voir `plans.md`) |
| **Passer le moteur en open source** | Fin 2026 ✅ Fait  | Le moteur, les shells, les schémas, la doc deviennent publics — pas les outils/assets de marque |
| **Transfert d'appareil à appareil** | ✅ Fait | Le bundle portable `lolly-backup` transporte le profil, les sessions enregistrées, les images téléversées et les préférences entre deux installations quelconques — hors ligne ou en ligne, sans compte. Enveloppe rétro-compatible, vérifiée par intégrité (spécification : `docs/data-transfer.md`) |
| **Établir une feuille de route formelle pour les outils** | Fin 2026 | Kits de référence client, ingestion de design par IA, mode de requête GET/URL |
| **Utilitaires de confidentialité sur l'appareil** | 🚧 En cours | Des outils de transformation de contenu qui traitent *ton propre* fichier localement (fichier en entrée → fichier propre en sortie), remplaçant l'exfiltration vers des SaaS à usage unique. **Fait :** le type d'entrée `file` + le chemin de transformation `exportFile` + les conventions `privacy:"on-device"` (pas de filigrane/provenance) + **Strip Hidden Data** (métadonnées JPEG/PNG/SVG/PDF, PDF via le pont `host.pdf`) et **Text Helper** (l'atelier sur l'appareil pour les tâches quotidiennes de type coller-dans-un-site-web — format JSON, décodage JWT, Base64, encodage/décodage URL, hachage SHA, plus un groupe Fantaisie). **À venir :** recadrage/redimensionnement, conversion/compression d'image ; puis un pont de codec `host.image` (spécification : `plans/exfiltration-app-content.md`) |
| **Tokens de design (DTCG)** | 🚧 Couleur livrée | Les primitives de marque sous forme de [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) canoniques — le format que [Penpot importe/exporte](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Fait :** tokens de couleur (`suse/tokens/brand`), pont `host.tokens`, nuanciers du sélecteur + valeurs liées par référence (spécification : `docs/design-tokens.md`). **À venir :** tokens de dimension/typographie, import/export Penpot, tokens utilisateur dans le bundle de transfert (`tokens.json`) |
| **Point de terminaison agent MCP (rendu)** | ✅ Fait | Un serveur [MCP](https://modelcontextprotocol.io) expose le catalogue + le chemin de rendu comme des outils appelables (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), pour que n'importe quel agent puisse produire des assets finis et conformes aux règles — ajoute-le à n'importe quel client MCP comme connecteur personnalisé (OAuth 2.1), ou pointe un client CLI/HTTP dessus avec un jeton bearer. En ligne à `mcp.lolly.tools` (point de terminaison complet : raster/PDF/animation/vidéo via un navigateur headless hébergé) et `lolly.tools/api/mcp` (palier serverless sans navigateur). Distinct du MCP de *création* Penpot ci-dessous, qui concerne la **création** d'outils (spécification : `plans/mcp-server.md` ; guide : `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingestion de fichiers Penpot en tant qu'outils** | 2027+ | Importer un fichier Penpot et le faire apparaître *comme un outil Lolly* (déclaratif, axé contraintes), transformant les designs créés dans Penpot en générateurs déterministes |
| **Extension MCP + Penpot (création en ligne uniquement)** | 2027+ | Un serveur MCP Penpot articule de nouveaux outils avec l'IA — la façon la plus visuelle de créer des templates déterministes : un premier jet informé par la marque, peaufiné avec un humain dans la boucle, visant à terme des nouveaux contextes en un seul coup. La *création* d'outils est en ligne uniquement ; les outils qu'elle produit s'exécutent partout |
| **RBAC + SUSE ID** | 2027+ | Restreindre certains outils derrière SUSE ID ; état enregistré multi-appareils ; ingestion/export Google Drive |

---

## Où le moteur s'arrête et où l'hôte commence

Si tu peux le décrire en données pures + Handlebars → **moteur**.
Si ça touche au DOM, au système de fichiers, au réseau, ou à n'importe quelle API navigateur/OS → **hôte**.

La ligne est nette, volontairement. Le moteur est la partie open source. Tout ce qui connaît SUSE, des plateformes spécifiques, ou des environnements d'exécution en reste exclu.
