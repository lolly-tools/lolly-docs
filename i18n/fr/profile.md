# Profils - qui tu es quand tu crées

Un **profil** est l'identité de travail sous laquelle Lolly crée. C'est le petit ensemble de détails qu'un outil peut aller chercher pour que tu n'aies pas à les retaper à chaque fois - ton nom, tes coordonnées, une photo de profil facultative, quelques préférences - plus tout ce que tu accumules en travaillant : sessions enregistrées, images importées, et le compteur d'activité local.

Tout ce qui compose un profil vit **sur l'appareil**, dans la base de données locale du navigateur (IndexedDB pour la PWA web, le système de fichiers pour les apps Tauri). Il n'y a pas de compte et rien n'est envoyé en ligne. Tu le gères depuis **Profile** (en haut à droite de la galerie) ; les outils ne font jamais que le *lire*, et seulement les champs précis qu'ils ont été conçus pour pré-remplir.

> Un profil, c'est *toi* (ou quiconque crée ici). C'est distinct de la **Platform** - les couleurs, polices et réglages globaux de la marque - et des **Capabilities**, le catalogue de ce que l'app peut faire. Voir [Profil vs Plateforme vs Capacités](#profile-vs-platform-vs-capabilities) à la fin.

## Ce qu'il y a dans un profil

| Partie | Ce que c'est |
|---|---|
| **Nom** | Prénom et nom de famille. |
| **Contact** | E-mail et téléphone. |
| **Localisation** | Ville et pays. |
| **Photo de profil** | Une photo facultative, recadrée en carré et conservée comme image locale. Utilisée par des outils comme les signatures e-mail, les cartes de citation, les blocs de couleur et les mises en page dynamiques. |
| **Utiliser mes coordonnées** | Un simple interrupteur d'activation. Il détermine si tes coordonnées personnelles accompagnent l'export en tant que **provenance** - la ligne auteur/crédit intégrée aux fichiers exportés - et en tant qu'auteur des lots **/pro**. (Cela ne conditionne pas le pré-remplissage : voir [Comment les outils utilisent ton profil](#how-tools-use-your-profile).) |
| **Préférences** | Ton thème (clair, sombre ou SUSE) et les parties de l'app que tu as activées via les **Feature flags**. |
| **Ton travail** | Les sessions enregistrées (avec vignettes) - organisées en dossiers imbriqués dans **[Projets](/info/using.html)** - ta bibliothèque **Mes images**, et les statistiques d'activité locale, tout cela rattaché à ce profil. |

Rien de tout cela n'est obligatoire. Un profil vide est un profil tout à fait valable ; tu ne remplis que ce qui t'évite de retaper.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

## Un profil est un contexte, pas seulement une personne

Le mot « profil » suggère une personne fixe et unique, mais dans Lolly c'est en réalité un **contexte de création** - *qui tu es pendant que tu fabriques cette chose*. Ce contexte peut prendre trois formes différentes, et Lolly les traite toutes de la même façon.

### En tant qu'individu

Le cas par défaut. Le profil, c'est toi : ton nom, ton e-mail, ta photo de profil. Configure-le une fois et ta signature, ton badge, ton lockup de conférence se remplissent tout seuls. C'est ce dont la plupart des gens auront jamais besoin.

### En tant qu'équipe

Un profil n'a pas forcément à être une seule personne. Il peut représenter une **équipe ou une fonction au sein d'une organisation** : le nom partagé de l'équipe, une adresse de boîte mail de groupe (`events@…`), un service, la photo de profil ou le repère visuel de l'équipe. Une personne le configure, l'exporte (voir plus bas), et le reste de l'équipe charge le même profil - pour que tout ce que l'équipe produit porte des informations cohérentes sans que personne n'ait à les ressaisir. Une borne partagée ou un ordinateur de démo emprunté peut faire tourner un seul profil d'équipe sous lequel tout le monde crée.

### En tant que fonction - un rôle que tu endosses parfois

C'est le cas qui échappe au modèle rigide « une personne, un profil ». Tu es peut-être **responsable d'un événement trois jours par an** et quelqu'un de complètement différent le reste du temps. Ces trois jours-là, tu veux les détails de l'événement, la boîte mail de l'événement, peut-être une sous-marque événementielle pour remplir tes badges et ta signalétique ; les 362 autres jours, tu veux retrouver ton identité habituelle.

Dans Lolly, ce rôle n'est qu'**un autre profil que tu gardes sous la main** - un bundle enregistré (section suivante) que tu charges pour l'événement et que tu mets de côté ensuite. Le rôle est une casquette, pas un nouveau compte. Enfile-la quand tu en as besoin, retire-la une fois terminé.

## Une installation, un profil actif - plusieurs que tu peux garder

À tout moment, une installation a **un profil actif** - les détails qu'un outil voit à cet instant. Il n'y a pas de sélecteur de profil dans l'app ; à la place, chaque profil est un **bundle portable** (un simple `.zip`, voir [plus bas](#moving-a-profile-to-a-new-device)). C'est délibérément le même mécanisme que pour changer d'appareil - un profil est un fichier que tu peux enregistrer, copier et charger.

Donc si tu jongles vraiment entre plusieurs contextes (toi, ton équipe, la casquette de responsable événementiel), tu gardes plusieurs bundles et tu charges celui dont tu as besoin :

- **Le changement le plus propre :** **Profil → Stockage → Effacer toutes mes données**, puis **Importer** le bundle du contexte dans lequel tu entres. Tu crées alors purement sous ce profil.
- **Superposition :** importer *sans* effacer au préalable **fusionne** - le profil, les sessions et les images importés viennent s'ajouter à ce qui existe déjà, remplaçant tout ce qui porte le même nom et laissant le reste intact. Pratique pour récupérer les sessions enregistrées d'une équipe dans ta propre configuration ; pas ce qu'il te faut si tu as besoin d'une frontière nette entre les rôles.
- **Côte à côte :** comme tout est limité à l'appareil, un profil de navigateur distinct, un compte utilisateur distinct, ou une seconde PWA installée porte chacun son propre profil Lolly indépendant. Fais tourner ton installation personnelle et l'installation de la borne événementielle en même temps, sans avoir à basculer.

> Garde un bundle par contexte et renomme les fichiers pour ce qu'ils sont (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). Le fichier *est* le profil.

## Déplacer un profil vers un nouvel appareil

Comme un profil est entièrement local, la seule façon de le faire arriver sur une installation vierge - un nouvel ordinateur portable, un navigateur fraîchement réinitialisé, la machine d'un collègue, une machine hors ligne - est de **transporter le fichier**. Aucune connexion ne le restaure pour toi, et c'est précisément le but : rien n'a jamais quitté ton appareil au départ.

Sous **Profil → Stockage → Déplacer vers un autre appareil** :

- **Exporter mes données** télécharge un fichier `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - nommé d'après le profil auquel il appartient, avec un numéro de séquence quotidien pour que des exports répétés n'entrent pas en collision (les parties du nom sont omises quand le profil ne les a pas). Il contient ton profil, chaque session enregistrée (avec sa vignette), tes images importées, et tes préférences (thème, mise en page, statistiques d'activité locale).
- **Importer des données…** sur l'autre installation relit ce fichier et tu reprends exactement là où tu en étais.

Le bundle est un simple zip autonome, donc il voyage par **n'importe quel** moyen - clé USB, AirDrop, un partage réseau, un e-mail à toi-même - et la cible peut être totalement hors ligne. Chaque partie est vérifiée par somme de contrôle, donc un fichier endommagé en transit est détecté à l'import plutôt que restauré à moitié cassé. L'import **fusionne** (un profil/une session/une image du même nom est écrasé ; tout le reste est conservé), donc il n'efface jamais une cible déjà en usage.

Ce qui ne voyage pas : le cache du catalogue (il se retélécharge tout seul sur le nouvel appareil) et les outils eux-mêmes (supposés déjà présents).

Pour la disposition exacte du bundle, la politique de version et les règles d'intégrité, voir **[Transfert de données](/info/data-transfer.html)** ; pour le tutoriel de bout en bout, **[Utiliser Lolly → Déplacer vers un autre appareil](/info/using.html#moving-to-another-device)**.

## Comment les outils utilisent ton profil

Un outil ne fait jamais que *pré-remplir* les champs de profil qu'il a été explicitement conçu pour lier :

**Liaison explicite.** Un auteur d'outil marque un champ comme puisant dans le profil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Quand l'outil s'ouvre, ce champ se pré-remplit depuis ton profil - et tu peux toujours le modifier pour cette seule session sans changer le profil. Le pré-remplissage est une commodité locale et se produit que **Utiliser mes coordonnées** soit activé ou non.

**L'opt-in (provenance).** Quand tu exportes un asset, tes coordonnées accompagnent en option l'export en tant que **provenance** - une ligne auteur/crédit intégrée aux métadonnées du fichier (PNG, PDF, SVG, …) - pour qu'un asset fini puisse dire qui l'a fait. C'est *ça* que gouverne **Utiliser mes coordonnées** : laisse-le désactivé et l'export porte quand même l'attribution outil/plateforme "Made with Lolly", mais aucune ligne auteur/contact personnelle n'est intégrée. (Le même opt-in définit l'auteur des lots **/pro**.) (Auteurs d'outils : voir [Créer des outils → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) et [API hôte → `host.profile`](/info/host-api.html#host-profile).)

## Profil vs Plateforme vs Capacités

Trois choses se côtoient dans l'interface et sont faciles à confondre :

- **Profil** - *toi* (ou ton équipe, ou le rôle que tu occupes) : nom, contact, photo de profil, ton travail enregistré. Personnel, local à l'appareil, portable sous forme de bundle.
- **Plateforme** - la *marque* : couleurs, polices et réglages globaux sur lesquels chaque outil s'appuie pour son rendu. Partagée et cohérente, pas personnelle.
- **Capacités** - *ce que l'app peut faire* : l'ensemble des fonctionnalités et des outils qui te sont accessibles.

Un profil change *de qui* vient un asset ; la plateforme change son *apparence* ; les capacités déterminent *ce que tu peux créer*.

### « Profil » a deux autres sens ailleurs - pas celui-ci

Le mot est surchargé de sens dans l'ensemble du projet. Aucun des deux n'est le profil personnel dont parle cette page :

- **Profil de contenu** - une configuration au moment du build dans `profiles.json` qui associe un ensemble de packs d'outils à un catalogue de marque (par exemple `suse`, `lolly-start`). C'est ce qu'un opérateur choisit au moment du déploiement, et c'est aussi ce que le **paramètre URL/CLI** `profile` sélectionne comme variante de *couleur* au moment de l'export (la condition de presse ICC/CMYK - voir [Mode URL](/info/url-mode.html)). Les deux concernent le *build/la sortie*, pas *toi*. Voir [Configuration](/info/configuration.html).
- **Profil d'identité** - l'**identité Content Credentials vérifiée** facultative que tu peux enrôler (un certificat de courte durée qui relie ton e-mail à tes exports signés). C'est une identité de signature, distincte des champs nom/contact du profil personnel, même si **Utiliser mes coordonnées** détermine si l'une ou l'autre est intégrée. Voir [Identité Content Credentials](/info/content-credentials-identity.html).

## Confidentialité

Un profil n'est jamais transmis, envoyé en ligne, ni utilisé pour t'identifier ou te suivre - il n'y a rien à consentir, seulement cet avis pour que tu saches ce qui est conservé. Efface tout à tout moment avec **Profil → Effacer toutes mes données**. Voir la [Politique de confidentialité](/info/privacy.html).
