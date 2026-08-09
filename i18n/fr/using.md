# Utiliser Lolly

Un guide pratique pour vraiment *utiliser* l'application - ouvrir un outil, travailler sur le canevas, exporter, enregistrer et partager. Tout ici s'exécute **sur ton appareil** : pas de compte, pas d'envoi de fichiers, pas besoin d'internet après le premier chargement.

> Nouveau ici ? Le [Démarrage rapide](/info/quickstart.html) te permet de créer en quelques minutes, et [Lolly pour les opérateurs](/info/operators.html) explique comment installer/déployer l'application ; cette page explique comment la piloter une fois ouverte.

## Ouvrir un outil

![A tool's split view - the control stack on the left, and the live horizontal bar chart it draws on the right](/t/url-shot?url=%2F%23%2Ftool%2Fd3%3Fct%3Dbar%26t%3DExample%2520data%26st%3DSample%2520values%252C%2520not%2520a%2520real%2520dataset%26d%3DMonth%252CSeries%2520A%252CSeries%2520B%252CSeries%2520C%250AJan%252C12%252C9%252C5%250AFeb%252C18%252C14%252C7%250AMar%252C24%252C17%252C11%250AApr%252C29%252C23%252C15%26lg%3D1&width=1440&height=900&dpi=192&waitMs=2500&walker=1&format=svg&dark=1&filename=vt-tool-split-view)

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&waitSelector=.gallery-view%5Bdata-shots-settled%5D&walker=1&format=svg&localize=1&dark=1&filename=gallery&try=1&sweep=1)


L'écran d'accueil est la **galerie** - tous les outils, regroupés par catégorie. Clique sur une carte pour ouvrir l'outil ; si tu y as déjà travaillé, un bouton **Continuer** reprend ta session la plus récente. Utilise la zone de recherche pour filtrer par nom.

Chaque outil se présente en vue divisée : les **contrôles** d'un côté, un **aperçu** en direct (le canevas) de l'autre. Modifie n'importe quel contrôle et l'aperçu se met à jour instantanément.

> Quelques outils (comme **Layout Studio**) s'ouvrent plutôt en **canevas libre** - une surface de manipulation directe, sans habillage, où tu fais glisser, redimensionnes, fais pivoter et alignes des boîtes de texte, de formes et d'images, et où tu double-cliques pour modifier le texte sur place. Il s'exporte via le même chemin de rendu que tout autre outil, donc le canevas *est* le fichier. Voir [Le canevas libre](#the-free-canvas-layout-studio) ci-dessous.

## Le canevas (aperçu)

![The zoom HUD in the corner of the canvas - minus, the live percentage, plus, Fit, then the theme and sound toggles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=.stage-nav%7Bopacity%3A1!important%7D&cropSelector=.stage-nav&walker=1&format=svg&dark=1&filename=use-zoom-hud)

L'aperçu montre toujours exactement ce qui sera exporté.

**Ordinateur**

- **Zoom :** utilise Cmd/Ctrl + molette, ou pince sur un trackpad - le zoom se centre sur ton pointeur.
- **Déplacement :** maintiens **Espace** et fais glisser, ou fais glisser avec le **bouton central de la souris**. (Les clics simples restent libres pour cliquer sur des éléments du design.)
- **Clavier :** `0` = ajuster à la fenêtre · `1` = 100 % · `+` / `−` = zoom.
- **HUD de zoom :** le petit contrôle `−  NN%  +  Fit` dans le coin. Clique sur le pourcentage pour basculer entre Fit et 100 %.

**Tactile**

- **Pince** pour zoomer, **glisse** pour déplacer, **double-tape** pour réinitialiser l'ajustement.

**Cliquer pour accéder à un contrôle :** clique sur n'importe quel élément du design et le champ correspondant dans la barre latérale reçoit le focus et défile jusqu'à être visible - pour un groupe de lignes répétitives, cela déplie exactement la ligne sur laquelle tu as cliqué, si bien que modifier ce que tu vois n'est qu'à un tap.

Un changement de dimension ramène toujours la vue à un ajustement net.

### Le canevas libre (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&localize=1&dark=1&filename=layout-studio&sweep=1)

Les outils en canevas libre ajoutent une surface de travail *autour* du plan de travail, comme le plan de collage d'un designer :

- **Mise en attente hors-canevas.** Fais glisser une boîte au-delà du bord du cadre et elle reste entièrement **visible et sélectionnable** - mets des éléments de côté pendant que tu composes, puis ramène-les à l'intérieur. Tout ce qui se trouve hors du cadre est **légèrement estompé** pour que la zone d'export reste lisible d'un coup d'œil, et le cadre conserve son ombre pour marquer précisément où le fichier commence.
- **Seul le cadre s'exporte.** Le fichier exporté est délimité par le plan de travail - tout ce qui reste à l'extérieur (ou la partie d'une boîte qui dépasse du bord) est simplement rogné du résultat, aussi bien en formats matriciels que vectoriels.
- **Dézoome au-delà de Fit** (jusqu'à 20 %) pour voir tout le plan de collage quand tu as mis des éléments loin en dehors du cadre.
- **Plan de travail redimensionnable.** Changer les dimensions d'export redimensionne le cadre sur place ; les boîtes gardent leur position, ce qui te permet de recadrer une mise en page autour d'un contenu existant.

## Sur téléphone

![The free-canvas tool rail: a drag grip, the Lolly menu, then Pointer, Add a box, Pen and Timeline](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2600&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=.fc-toolbar&walker=1&format=svg&dark=1&filename=pen-editor-rail)

![Two pen paths rendered straight from a link: a stroked S-curve and a closed filled blob](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22curve%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A140%2C%22y%22%3A180%2C%22w%22%3A800%2C%22h%22%3A420%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A14%2C%22path%22%3A%221!cubic!0_.02!.85!!!.25!-.45!s_.5!.5!-.22!.32!.22!-.32!y_.98!.12!-.25!.45!!!s%22%7D%2C%7B%22id%22%3A%22blob%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A340%2C%22y%22%3A620%2C%22w%22%3A400%2C%22h%22%3A320%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23d1e7ff%22%2C%22stroke%22%3A%22%234f84ba%22%2C%22strokeW%22%3A6%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!catmull-rom!1_.5!0_1!.42_.78!1_.22!1_0!.42%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=pen-path-geometry)

![A tool on a phone-width screen - controls as a sheet up top, the generated palette filling the preview below, and the render pill floating bottom-centre](/t/url-shot?url=%2F%23%2Ftool%2Fcolor-palette%3Fseed%3Df97316%26harmony%3Dadjacent-3%26steps%3D9&width=430&height=900&dpi=192&waitMs=2200&walker=1&format=svg&dark=1&filename=vt-phone-palette)

Sur les écrans étroits, la mise en page se réorganise en une seule colonne :

- Les **contrôles deviennent une feuille** en haut de l'écran, avec une **poignée de glissement** sur son bord inférieur. Fais glisser la poignée pour la redimensionner - elle s'accroche aux positions **aperçu / moitié / plein écran** - ou **tape** sur la poignée pour basculer entre replié et déplié. L'aperçu occupe l'espace en dessous et reste visible pendant que tu modifies.
- Un bouton flottant **Rendu** ouvre la feuille **Export** - tous les contrôles de format, taille, copie, enregistrement et téléchargement au même endroit. Ferme-la en tapant en dehors.

## Contrôles (champs)

![A crescent and a ring with a real hole, both produced by Subtract](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio%3Fboxes%3D%5B%7B%22id%22%3A%22paper%22%2C%22kind%22%3A%22box%22%2C%22x%22%3A0%2C%22y%22%3A0%2C%22w%22%3A1080%2C%22h%22%3A1080%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%23ffffff%22%7D%2C%7B%22id%22%3A%22crescent%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A120%2C%22y%22%3A330%2C%22w%22%3A374%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22path%22%3A%221!cubic!1_.750491!.957645!-.128211!-.062578!-.065985!.027232!c_.534759!1!.076762!!-.295339!!c_0!.5!!.276142!!-.276142!c_.534759!0!-.295339!!.200102!!c_1.000984!.254923!-.09169!-.152161!-.021205!-.003239!c_.935829!.25!.022185!!-.221505!!c_.534759!.625!!-.207107!!.14459!c%22%7D%2C%7B%22id%22%3A%22ring%22%2C%22kind%22%3A%22path%22%2C%22x%22%3A580%2C%22y%22%3A330%2C%22w%22%3A400%2C%22h%22%3A400%2C%22shape%22%3A%22rect%22%2C%22bg%22%3A%22%234f84ba%22%2C%22fillRule%22%3A%22nonzero%22%2C%22path%22%3A%221!cubic!1_1!.5!!-.276142!!.276142!c_.5!1!.276142!!-.276142!!c_0!.5!!.276142!!-.276142!c_.5!0!-.276142!!.276142!!c*1!cubic!1_.5!.7!-.110457!!.110457!!c_.7!.5!!.110457!!-.110457!c_.5!.3!.110457!!-.110457!!c_.3!.5!!-.110457!!.110457!c%22%7D%5D&width=1440&height=900&dpi=192&waitMs=2600&cropSelector=%23tool-canvas&walker=1&format=svg&dark=1&filename=path-ops-boolean-result)

![A tool's control stack - a text field, colour triggers and a slider, and nothing else the author chose to lock down](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&cropSelector=%23tool-inputs&walker=1&format=svg&dark=1&filename=use-tool-inputs)

Les outils n'exposent que les champs destinés à varier - tout le reste (couleurs, mise en page, typographie, logique) est verrouillé par l'auteur de l'outil, si bien que ce que tu produis respecte toujours les règles qu'il a fixées. Les champs incluent du texte, des curseurs, des sélecteurs de couleur, des menus déroulants, des dates, des sélecteurs d'images et des groupes de lignes répétitives. Certains sont regroupés dans des sections repliables.

**Réinitialiser :** *Effacer les modifications* remet chaque champ à sa valeur par défaut.

## Tes informations et ta photo

![Sequence Studio's timeline: the transport, the ruler, an overlay lane, the magnetic sequence row with its clips and seam chips, and the Always on strip](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.tl-panel%7Bheight%3A252px!important%7D&cropSelector=.tl-panel&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-timeline&sweep=1)

![The whole editing surface: artboard, tool rail and timeline together](/t/url-shot?url=%2F%23%2Ftool%2Fsequence-studio&width=1440&height=900&dpi=192&waitMs=7000&css=.fc-toolbar%7Bopacity%3A1!important%7D&cropSelector=%23tool-stage&format=svg&walker=1&tolerance=0.03&dark=1&filename=seq-studio-stage)

**Profil** (en haut à droite de la galerie) contient ton nom, tes coordonnées et une **photo** facultative. Les outils qui demandent ces champs les pré-remplissent automatiquement - configure-les une fois, et ta signature e-mail, tes lockups et tes badges se remplissent tout seuls. Tu peux toujours modifier n'importe quel champ pour une session donnée. Active **Utiliser mes informations** pour qu'un outil puisse les lire.

Ta photo et tes informations résident **uniquement sur cet appareil**. Un profil peut représenter plus que toi seul - une équipe ou un rôle que tu endosses de temps en temps. Consulte **[Profils](/info/profile.html)** pour la vue d'ensemble, y compris comment en garder plusieurs.

## Enregistrer et reprendre

![The two-half render pill - an up arrow that opens the export panel, and a tick that saves the session in place](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&css=%23tool-inputs%7Bdisplay%3Anone%7D&cropSelector=.render-pill&walker=1&format=svg&dark=1&filename=use-render-pill)

Clique sur **Enregistrer** pour stocker les champs actuels comme session pour cet outil. Tu peux garder plusieurs sessions nommées par outil ; le bouton **Continuer** de chaque outil rouvre ta session la plus récente, et le **bouton historique** (en haut à droite, à côté de ton profil) liste toutes les sessions enregistrées, tous outils confondus. Les sessions sont locales à l'appareil. Pour les organiser, ouvre **Projets** (ci-dessous).

## Projets

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&walker=1&format=svg&localize=1&dark=1&filename=projects)

**Projets** - ouvre-le depuis l'onglet **Projets** à côté de **Outils**, ou depuis **Profil → Stockage → Organiser dans Projets** - est un espace pour tout ce que tu as enregistré, et fonctionne comme un gestionnaire de fichiers :

- **Des dossiers imbriqués.** Regroupe les sessions enregistrées dans des dossiers, et des dossiers dans d'autres dossiers, aussi profondément que tu veux. Crée un dossier, renomme-le, ou fais glisser une tuile sur un autre dossier pour la déplacer ; un fil d'Ariane te permet de remonter. Un dossier **Non classé**, toujours présent, contient tout ce qui n'a pas encore été rangé.
- **Range le nouveau travail directement.** Dans un dossier, **+ Nouvel outil** ouvre un outil et range automatiquement son premier enregistrement dans ce dossier.
- **Sélection multiple (ordinateur).** Coche la case d'une tuile, fais glisser un rectangle de sélection sur une zone vide, ou fais **Shift/Cmd-clic** ; **clic droit** sur une tuile pour son menu contextuel. Agis ensuite sur toute la sélection en une fois.
- **Rends tout un dossier ou toute une sélection.** **Rendre le dossier** exporte chaque session enregistrée d'un dossier - y compris ses sous-dossiers - dans un seul `.zip` imbriqué. **Rendre la sélection** fait de même pour n'importe quelle sélection multiple, et une session unique se rend directement dans son propre fichier. Pas besoin de Batch/Pro.
- **Partage une session enregistrée.** Clic droit sur une session → **Lien de partage** pour copier un lien qui la rouvre avec exactement les mêmes champs (la boîte de dialogue de partage complète - voir ci-dessous).

## Partager un lien

Chaque champ est capturé dans l'URL de la page, donc un lien *est* le design. Utilise **Partager** dans les contrôles d'export - ou **Lien de partage** sur n'importe quelle session enregistrée dans Projets - pour ouvrir la **boîte de dialogue de partage** : un lien prêt à copier, plus des options pour chiffrer le lien et définir ce qui se passe à son ouverture (plein écran, panneau d'export déplié, téléchargement automatique avec `&export`, ou copie automatique dans le presse-papiers avec `&copy`).

Un design volumineux donnerait une longue URL, donc la boîte de dialogue propose aussi un **lien le plus court**, qui compresse tout l'état dans un jeton compact - la forme lisible reste toujours disponible aussi. Colle-le à un collègue, mets-le en favori, ou commite-le. (Tous les détails : [Mode URL](/info/url-mode.html).)

> Les images que tu as importées depuis ton appareil ne sont **pas** incluses dans un lien partagé - elles n'existent que sur ta machine.

## Caméra en direct (outils réactifs au mouvement)

Les **filtres photo** - Halftone, Scanline, Posterize, Duotone - affichent un bouton **Activer le direct** quand une caméra est disponible. Active-le et l'effet suit ta webcam image par image, réagissant ainsi au mouvement ; tu peux enregistrer le résultat en GIF, WebM ou MP4. Les images sont lues et traitées **sur ton appareil** et n'en sortent jamais, et la caméra est libérée dès que tu arrêtes ou quittes l'outil. (N'importe quel sélecteur d'image dispose aussi de **Prendre une photo** pour capturer une seule image directement sur l'appareil.)

## Mes images

Quand un outil te permet d'ajouter une image depuis ton appareil, elle est redimensionnée, débarrassée de ses données EXIF/GPS, puis enregistrée dans ta bibliothèque personnelle **Mes images** (sous **Profil → Stockage**). Réutilise-la dans n'importe quel outil. La bibliothèque a une capacité limitée et reste entièrement locale - gère ou supprime les images à cet endroit.

## Le Catalogue - ta bibliothèque de ressources

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=96&waitMs=2400&css=.plat-swatch-grid~%2A%7Bdisplay%3Anone%7D&walker=1&format=svg&localize=1&dark=1&filename=catalogue)

Le **Catalogue** (`#/c`, ou le lien **Catalogue** dans le menu) rassemble tout ce sur quoi tes outils peuvent s'appuyer - logos de marque, images, audio et animations, regroupés par type - et c'est aussi là que vivent tes **propres fichiers créatifs**. Pas de serveur, pas de console d'administration, pas de pull request : tout est sur ton appareil.

- **Importe tes fichiers.** Fais glisser n'importe quelle image, SVG, clip audio, vidéo, Lottie ou PDF sur la zone d'import - ou clique pour choisir - et il atterrit instantanément dans ton catalogue, prêt dans le sélecteur de ressources de chaque outil. Importe autant que tu veux ; rien ne quitte ton appareil.
- **Mets en favori ce que tu utilises souvent.** Marque une ressource (ou un échantillon de marque) d'une ★ et elle s'épingle en haut de chaque sélecteur, si bien que ton logo ou ta couleur de prédilection est à un clic.
- **Fais le ménage.** Recatégorise une ressource dans un autre groupe, masque une ressource de marque partagée que tu n'utilises pas (avec **Afficher les éléments masqués** pour la faire revenir), ou supprime carrément tes propres imports.

### Emporte ta palette et tes polices partout

![The Swatches panel - the five palette download buttons across the top, then every brand colour as a copyable chip](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches&width=1440&height=900&dpi=96&waitMs=1800&css=.cat-group%3Anot%28%5Bdata-group%3Dswatches%5D%29%7Bdisplay%3Anone%7D&cropSelector=%5Bdata-group%3Dswatches%5D&walker=1&format=svg&dark=1&filename=use-swatch-downloads)

Le panneau **Nuancier** du Catalogue ne sert pas qu'à la référence - clique sur une couleur pour la copier, ou **télécharge toute la palette de marque** dans le format que parle ton autre outil :

- **Design tokens (JSON)**, **variables CSS**, ou **classes CSS** - intègre la marque directement dans une feuille de style ou un build ;
- **Adobe Swatch Exchange (.ase)** - charge-la dans Illustrator ou Photoshop ;
- **Palette GIMP (.gpl)** - pour GIMP ou Inkscape.

Le panneau **Polices** liste tes fontes de marque avec un **téléchargement** à côté de chacune, pour les installer localement ou les remettre à un imprimeur. (L'onglet Couleurs du [Brand Studio](/info/brand-studio.html) propose le même téléchargement de palette.)

Les ressources sont une moitié du chemin ouvert et « fais-le toi-même » ; l'autre, c'est **créer tes propres outils** - le canevas libre (Layout Studio, décrit ci-dessus) te permet d'en construire un visuellement, sans aucun code.

## Son et accessibilité

Lolly vise à être confortable à utiliser pour tout le monde. L'interface est navigable au clavier, les contrôles personnalisés portent des libellés appropriés pour les lecteurs d'écran, et l'aperçu en direct de chaque outil est exposé comme une image unique et libellée décrivant ce qu'il produit.

Une couche discrète de **sons d'assistance** confirme tes actions - l'arrivée dans la galerie, une vérification Content Credentials valide ou invalide, la fermeture d'un panneau, le changement de filtre. C'est **activé par défaut**, mais toujours optionnel : désactive le **son** partout où l'interrupteur apparaît (le popover d'options de chaque vue, ou le **profil**), et ton choix est mémorisé.

À côté de cet interrupteur se trouve le **Mode Neurospicy** - une piste de fond apaisante et optionnelle, qui joue discrètement pendant que tu travailles. L'activer ouvre un petit **dock de lecture** dans le coin inférieur qui te suit dans toute l'application ; depuis là, tu peux rechercher et choisir une piste, avancer et reculer, régler le volume, et le réduire ou le fermer. La liste de pistes couvre quelques catégories - des morceaux procéduraux *Lolly Sings*, des boucles et rythmes d'ambiance, tes propres fichiers audio importés, et une poignée de stations de **radio** internet en direct (celles-ci nécessitent une connexion ; tout le reste se joue hors ligne). C'est **désactivé par défaut** et, comme le son, ton choix est mémorisé entre les sessions et les appareils. Désactiver le son coupe aussi la piste de concentration.

## Stockage et confidentialité

Tout est stocké dans la base de données locale de ton navigateur (IndexedDB) : ton profil, tes sessions enregistrées, tes images importées, et un cache du contenu de catalogue téléchargé. **Profil → Stockage** affiche l'utilisation et te permet de :

- **Vider le cache** - supprimer le contenu de catalogue téléchargé (se resynchronise au prochain chargement).
- **Effacer toutes mes données** - supprimer le profil, les sessions et les images. *Action irréversible.*

![The storage card on a phone-width screen: every category of on-device data named, with the Clear all my data button at the bottom](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%2C.store-manages%2C.storage-subsection%2C.store-selbar%2C.store-chip-val%2C%23store-hero-num%2C%23store-headroom%2C%23store-quota%2C%23store-reclaim%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23storage-section&dark=1&filename=pv-storage-clear&sweep=1)

Rien n'est transmis nulle part. Pas de télémétrie, pas de rendu dans le cloud.

## Passer à un autre appareil

Comme tout réside sur ton appareil, **Profil → Stockage → Passer à un autre appareil** te permet de tout emporter vers une seconde installation - sans compte, sans cloud :

- **Exporter mes données** télécharge un unique `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (les parties du nom viennent de ton profil et sont omises si non renseignées ; `<n>` est un compteur journalier pour que deux exports le même jour ne se percutent pas) contenant ton profil, chaque session enregistrée (avec sa vignette), tes images importées, et tes préférences (thème, largeur de la barre latérale, statistiques d'activité locales).
- **Importer des données…** sur l'autre installation relit ce fichier. Cela **fusionne** : tout élément portant le même nom (ton profil, un emplacement de session, une image) est remplacé par la copie importée ; tout le reste sur cet appareil est conservé. Les sessions enregistrées se relient automatiquement à tes images importées.

Le cache de catalogue n'est pas inclus - il se retélécharge automatiquement sur le nouvel appareil. Le paquet est un simple zip (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, identifiant de format `lolly-backup`), donc il survit intact à un e-mail, une clé USB ou un AirDrop, et c'est le même format que lit chaque shell. Chaque partie est vérifiée par somme de contrôle, donc un fichier endommagé en transit est détecté à l'import plutôt que restauré à moitié cassé. (Spécification complète du format : [Transfert de données](/info/data-transfer.html).)

## Importer un design (Figma, Penpot, Illustrator, InDesign)

Tu peux importer un design existant dans Lolly et continuer à y travailler : ouvre **Layout Studio**, clique sur **Importer un design** dans la barre d'outils du canevas, et choisis un fichier Figma **.fig** ou SVG, un Penpot **.penpot**, un Illustrator **.ai** / **.pdf**, ou un InDesign **.idml**. Les calques deviennent des boîtes modifiables sur le canevas libre - le texte reste re-saisissable, les images atterrissent dans **Mes images**, et la typographie et les couleurs se conforment aux globales de marque - puis le résultat s'enregistre, se partage et se rend comme n'importe quelle autre session. L'analyse se fait entièrement sur ton appareil. Détails complets : **[Importer un design](/info/design-import.html)**.

## Exporter

Consulte **[Export et formats](/info/exporting.html)** pour l'histoire complète - choisir un format, une taille de sortie et des unités d'impression, la transparence, la vidéo, et la copie/le partage. En bref : choisis un format, règle la taille si besoin, puis **Télécharge** (ou **Copie** dans le presse-papiers).

## Mode Batch (Pro)

![The batch toolbar - zip name, units, DPI and the format every row inherits, with Sessions and Render on the right](/t/url-shot?url=%2F%23%2Fpro&width=1440&height=900&dpi=192&waitMs=3500&cropSelector=.pro-toolbar&walker=1&format=svg&dark=1&filename=use-batch-toolbar)

Pour les utilisateurs avancés, **Batch** (accessible depuis la galerie, réservé au drapeau de fonctionnalité Pro, activé par défaut) rend de nombreuses variantes en une fois - une grille où chaque ligne est un ensemble de champs, exportés ensemble. Idéal pour localiser une carte en une douzaine de langues ou générer toutes les variantes de taille en une seule passe. Remplis les lignes en tapant, en collant directement depuis un tableur, ou en important un CSV (tu peux aussi en exporter un) ; règle le format, la taille et le nom de fichier de sortie ligne par ligne. Enregistre toute une grille comme une **session batch** nommée, qui se rouvre depuis la galerie, et télécharge chaque ligne dans un seul `.zip`.

Batch sert à générer **de nombreuses variantes d'un même modèle** en une fois. Pour re-rendre des sessions que tu as **déjà enregistrées**, utilise **Projets → Rendre le dossier / Rendre la sélection** (ci-dessus) - pas besoin de Pro.

## Hors ligne et installation

Lolly est une PWA. Après le premier chargement, elle fonctionne **hors ligne** - installe-la depuis la barre d'adresse de ton navigateur (ou *Ajouter à l'écran d'accueil* sur mobile) pour une expérience plein écran, comme une application native. Elle se met à jour automatiquement dès que tu es de nouveau en ligne.
