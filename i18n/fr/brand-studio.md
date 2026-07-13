# Le Brand Studio

Le **Brand Studio**, à `#/start`, est l'endroit unique où tu façonnes ta marque - ses logos, ses couleurs, sa typographie, le reste de tes tokens, et les fichiers qu'elle conserve. Configure-la ici une fois, et chaque outil, chaque page et chaque export la respecte *par construction*, pas par relecture.

Les changements s'affichent **en direct dans toute l'application** au fur et à mesure, si bien que tu vois une couleur ou une police atterrir partout avant de la valider. Tout se passe sur l'appareil : ta marque ne quitte jamais ta machine, et elle voyage dans un unique fichier [pack de marque](#move-a-brand-between-devices).

> **Ici, c'est l'éditeur. Le tableau de bord est le miroir.** L'onglet Système de design du [tableau de bord](/info/using.html) (`#/d`) *montre* ta marque en lecture seule ; tu la *modifies* ici, à `#/start`. Pour changer une couleur plus tard, reviens dans le Brand Studio.

## Les cinq étapes

Le studio est un éditeur à cinq onglets. Travaille de gauche à droite - ou saute directement à n'importe quel onglet :

1. **Logos** - tes marques graphiques, dans chaque orientation et chaque traitement.
2. **Couleurs** - une couleur principale dérive une palette complète et accessible ; affine, génère et ajoute à partir de là.
3. **Typographie** - n'importe quelle police Google Fonts, téléchargée sur cet appareil.
4. **Tokens** - rayon des coins, espacements, ombres, et le reste du système.
5. **Catalogue** - les fichiers image, audio et animation que ta marque conserve.

Un bouton **Enregistrer et continuer** apparaît dès que tu changes quelque chose et t'emmène à l'étape suivante (il devient **Enregistrer et terminer** sur la dernière). L'onglet suivant s'illumine, comme un léger coup de pouce. Rien ne t'oblige à suivre l'ordre - chaque étape est facultative et indépendante.

**Accède directement à un onglet** avec `#/start?tab=<key>`, où les clés sont `logos`, `color` *(note l'orthographe américaine dans l'URL)*, `type`, `tokens` et `catalogue`.

## Logos

Chaque marque graphique a sa place ici - une grille d'emplacements **orientation × traitement** :

- **Orientations :** Horizontal (logotype + symbole côte à côte) et Vertical (empilé, pour les espaces carrés et hauts).
- **Traitements :** Principal, Principal inversé (pour fonds sombres), Mono (une seule couleur) et Mono inversé.

Cela fait huit emplacements facultatifs. Clique sur un emplacement pour ajouter un PNG, SVG, JPEG ou WebP ; clique sur un emplacement rempli pour le remplacer. Chaque emplacement est facultatif et tout reste sur cet appareil.

- **Marques personnalisées** - ajoute les marques que ta marque nomme à sa façon (une icône, un blason, un favicon) sous **Marques personnalisées** ; nomme-la et choisis un fichier.
- **D'autres identités** - une sous-marque, un produit ou un événement peut avoir son propre jeu complet de logos. Utilise **+ Ajouter un autre logo** et nomme-le ; ton jeu principal s'appelle simplement « Ton logo ».
- **Importe un SVG et Lolly lit ses couleurs.** Sur une installation toute neuve, il définit discrètement ta couleur principale à partir du logo. Sur une marque existante, il propose la couleur comme suggestion - *« Trouvée dans ton logo »* - dans l'onglet Couleurs.

## Couleurs

L'étape la plus riche. Le volet gauche **dérive et génère** ; le volet droit est ta **palette en direct**. Fais glisser le séparateur pour redimensionner.

### Une couleur, une palette entière

Choisis une **Couleur principale** et Lolly dérive la palette complète - surfaces claires et sombres, texte, accents, et des rampes complètes de tons clairs et foncés - en utilisant les mêmes calculs de couleur perceptuels (OKLCH) que le moteur utilise partout. Ajuste la dérivation :

- **Schéma** - Mono, Complémentaire, Analogue ou Triade - définit la relation entre la couleur secondaire et ta principale.
- **Nuances** - un curseur de 3 à 20 (5 par défaut) contrôle le nombre de paliers que génère chaque rampe.
- **Réglages fins** (replié) - **Intensité de l'interface** (Doux / Profond), **Contraste** (Confort / Élevé) et **Texte sur la marque** (Auto / Clair / Sombre).

Deux boutons importants, et la différence compte :

- **Utiliser cette couleur** re-dérive la palette en un brouillon en direct - l'application se met à jour pour que tu voies le résultat, mais rien n'est encore enregistré.
- **Enregistrer la couleur** est ce qui la conserve vraiment.

Tout sur cet onglet reste **à l'état de brouillon jusqu'à l'enregistrement**, alors expérimente librement ; seul **Enregistrer la couleur** l'écrit dans ta marque. (Les autres onglets - Logos, Typographie, Tokens, modifications de la palette - enregistrent immédiatement.)

Sous la couleur principale, tu verras en direct les rampes **Principale / Neutre / Secondaire / Mélange** et des cartes spécimens claires/sombres avec leurs ratios de contraste WCAG. **Clique sur un palier de la rampe Neutre ou Secondaire** pour choisir cette nuance à la place de la valeur dérivée par défaut.

### Construis ta palette (générateur d'harmonies)

Sous **Construis ta palette**, génère des couleurs d'accent assorties à partir de ta principale. Choisis une harmonie - **Complémentaire**, **Adjacente**, **Triade** ou **Tétrade** - et chaque candidate arrive avec un nom lisible généré automatiquement et un bouton **+ Ajouter**. Les couleurs ajoutées atterrissent immédiatement dans ta palette. *« Ta palette, appliquée »* les prévisualise sur de vrais graphiques.

### La palette, la roue et chaque échantillon

Le volet droit liste chaque couleur que porte ta marque, par groupes (Principale, Neutre, Secondaire, Spectre, Personnalisé, Rôles), chaque groupe repliable avec son propre **+ Ajouter**. Ouvre **Diagramme des couleurs** pour la **roue OKLCH** - fais glisser un point pour le recolorer, clique sur un point pour le modifier, ou clique sur un espace vide pour déposer un nouvel échantillon.

Clique sur n'importe quel échantillon pour ouvrir son éditeur :

- **Renomme-le**.
- **Définir par valeur** - saisis une couleur en Hex, RGB, RGBA, HSL, OKLCH ou CMYK. (Saisis une valeur CMYK et elle devient aussi le substitut d'impression de cet échantillon - voir ci-dessous.)
- **Stocké en** - choisis comment l'échantillon est conservé : **LCH** (le défaut - perceptuel, à large gamut, le meilleur choix pour l'édition), Hex, RGB ou HSL. Change-le quand tu dois figer un hex historique exact ou correspondre à une valeur sRGB.
- **Substituts d'impression** (replié) - verrouille le comportement de la couleur à l'impression :
  - **CMYK** - coche-le pour remplacer la conversion automatique sRGB→CMYK par des valeurs d'encre exactes (C/M/Y/K, 0–100).
  - **Ton direct** - coche-le pour verrouiller l'échantillon sur un ton direct ; donne-lui un **Nom** (p. ex. `PANTONE 186 C`) et un **Nuancier** facultatif.

Ces verrous d'impression sont ce qu'utilise une presse quand tu exportes un PDF ou un TIFF CMYK - voir [Export et formats](/info/exporting.html#colour-profiles).

**Supprimer un échantillon** est sans danger : les paliers de rampe dérivés et les rôles de thème sont *masqués* (le token sous-jacent continue de se résoudre, donc rien ne casse en aval), tandis que les couleurs que tu as ajoutées toi-même sont supprimées pour de bon.

### Dégradés

Un panneau **Dégradés** facultatif construit des tokens de fondu à partir de ta palette, pour les fonds et les accents. Saute-le entièrement si ta marque ne fait pas de dégradés. Chaque dégradé a un aperçu, des arrêts nommés (2–8) et un angle. Le comportement clé : **un arrêt référence un échantillon**, donc recolore cet échantillon et le dégradé suit. L'interpolation se fait en OKLCH pour des fondus propres. Supprime un arrêt pour raccourcir la série.

### Emporte la palette ailleurs

La pilule flottante en bas du volet de palette télécharge toute la palette en **Design tokens (JSON)**, **variables CSS**, **classes CSS**, **palette GIMP (.gpl)** ou **Adobe Swatch Exchange (.ase)** - la marque tombe ainsi directement dans Illustrator, Figma, GIMP ou une feuille de style. (Tu peux aussi télécharger la palette depuis la vue [Catalogue](/info/using.html).)

## Typographie

Ajoute **n'importe quelle police Google Fonts** et elle se télécharge sur cet appareil - rendue dans l'application, tes outils et chaque export, hors ligne pour toujours, et emportée dans ton pack de marque. Rien n'est récupéré au moment du rendu.

Cherche une famille (Inter, Fraunces, Space Grotesk…), puis **Ajouter la police**. Chaque police de la liste peut prendre un rôle :

- **Principale** - ta police de marque et de texte courant (**Définir comme principale**).
- **Code** - une police monospace facultative pour le code et les données (**Utiliser pour le code**).

Le panneau **Rôles typographiques** affiche un spécimen en direct de Titre, Corps et Code, pour voir chaque police faire son travail. Tout ce qui se trouve sur Google Fonts est publié sous licence ouverte (OFL/Apache/UFL).

## Tokens

Le reste du système de design, modifiable sans toucher au code :

- **Coins arrondis** - un unique curseur de rayon (0–1.5rem) que suivent les cartes, boutons et panneaux dans toute l'application.
- **Plus de tokens** - ajoute et modifie **espacement**, **dimensionnement**, **épaisseur de trait**, **opacité**, **rotation**, **nombres** simples et **ombres**. Choisis un type, nomme-le (*Gouttière, Ombre de carte…*) et fixe sa valeur. Ils sont stockés comme des [tokens de design](/info/design-tokens.html) standard (DTCG) et voyagent avec ta marque.

## Catalogue

Dépose ici les fichiers que ta marque conserve - logos mis à part : des ressources **vectorielles**, **image**, **audio** et **animation** (vidéo, Lottie, images animées). Elles atterrissent dans ton [Catalogue](/info/using.html), triées par sections et prêtes dans le sélecteur de ressources de chaque outil. Tout reste sur cet appareil.

## Déplacer une marque entre appareils

Le bouton **Exporter** dans la rangée d'actions du haut écrit un unique **`LollyBrand-…zip`** - tes tokens, polices, logos et préférence de thème, avec un manifeste d'intégrité. Le bouton **Importer…** (ou un glisser-déposer sur le studio) accepte :

- un pack **LollyBrand** (`.zip`) - s'installe en une étape ;
- un export **Penpot** (`.penpot`) - en récupère les tokens de design ;
- un fichier de **tokens de design** (`.json`) - W3C DTCG ou Tokens Studio ;
- un **simple SVG** (`.svg`) - Lolly balaie ses couleurs et te laisse choisir lesquelles garder, la première devenant ta principale.

C'est ainsi qu'un collègue te transmet une marque, ou que tu en emportes une vers une seconde installation - sans compte, sans cloud. Pour importer une marque depuis la ligne de commande, voir [`ingest:brand`](/info/configuration.html#brand-packs).

## Quand la marque est verrouillée

Certains builds embarquent une **marque verrouillée** - ses couleurs, polices et tokens sont ce qu'utilisent chaque outil et chaque export, et il n'y a rien à changer. Dans ce cas, le studio est remplacé par une courte note expliquant que ce build est livré avec une marque fixe et que l'édition est désactivée. C'est délibéré : c'est ainsi qu'une organisation garantit que tout reste conforme à la marque.

## Où aller ensuite

- **[Utiliser Lolly](/info/using.html)** - le canevas, l'enregistrement, les projets et le catalogue.
- **[Tokens de design](/info/design-tokens.html)** - le modèle de tokens dans lequel ta marque s'exprime.
- **[Export et formats](/info/exporting.html)** - unités d'impression, CMYK, et les formats dans lesquels ta marque se rend.
