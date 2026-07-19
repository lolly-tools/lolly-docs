# Lolly pour les opérateurs

### Une stratégie de sécurité et de renseignement en défense en profondeur - qui se trouve justement être une plateforme de production créative

Le système immunitaire organisationnel à confiance zéro qui s'enroule autour de ce que tu fais déjà - pour que le travail créatif courant dont tes équipes ont besoin au quotidien se déroule *à l'intérieur* de ton périmètre plutôt que de fuiter en dehors.

**Ce que tu y gagnes.** Tu deviens la personne qui a dit oui à quelque chose à la fois sûr *et* populaire. Tu colmates une brèche d'exfiltration, gagnes en capacité et supprimes une file d'attente de demandes en un seul geste - la rare victoire sécurité qui te rend plus apprécié, pas moins. Plus d'appel à 3h du matin du service juridique parce que des fichiers embargués ou des données clients ont atterri dans un outil web quelconque ; moins de fournisseurs SaaS, de contrats et d'audits sur les bras ; et une trace d'audit entièrement reproductible à montrer quand on te le demande. Tu dors mieux, et tu égaies quelques journées en le faisant.

Lolly n'est pas un outil créatif de second rang : il met un rendu de qualité production entre les mains de tout le monde, et l'expérience de création guidée par la marque n'a pas d'égal. La raison pour laquelle il est *sûr* de le diffuser aussi largement est architecturale : rien n'est téléversé que tu n'y aies mis toi-même, chaque résultat est reproductible, et chaque export peut porter plusieurs couches d'enregistrements cryptographiques à la pointe du secteur. Peu importe comment un document est arrivé sur ton bureau, tu peux voir sa provenance complète, s'il a été altéré, et si tu peux le recréer au pixel près.

> **Où en est-on aujourd'hui.** Les propriétés de sécurité de Lolly sont solides par conception, et ses moteurs de cryptographie et d'analyse de fichiers passent par le durcissement d'infrastructure de qualité entreprise de SUSE. Les scellés, la signature sur l'appareil et le chiffrement décrits ci-dessous sont réels et défendables dès aujourd'hui, et mûrissent vers une certification indépendante - donc là où un contrat exige une assurance certifiée, déploie-les comme de la défense en profondeur en attendant la fin de ce processus.

## L'avantage stratégique

La façon habituelle dont le travail créatif courant se fait est une surface de risque : des fichiers envoyés par e-mail à des prestataires de design externes, des ressources de marque téléversées sur une dizaine d'éditeurs SaaS, des données clients collées dans l'outil web d'un inconnu pour « juste faire un visuel rapide ». Chacun de ces cas, ce sont des données qui échappent à ton contrôle.

Lolly inverse la logique. Le travail qui *causait* ces fuites - la carte de citation, la bannière localisée, le badge d'événement, la capture d'écran expurgée - se fait désormais sur un outil qui tourne sur l'appareil de l'employé lui-même, contre ta marque, sans serveur dans la boucle. Tu n'as pas ajouté un contrôle par-dessus un flux de travail risqué ; tu as remplacé le flux de travail risqué par un autre qui n'a, dès le départ, aucune voie d'exfiltration.

- **La configuration est la tienne.** Le moteur (engine) et les shells sont open source (MPL-2.0). Superpose ta propre authentification, télémétrie ou CA ; héberge-le ou non ; tu gardes le contrôle total des fonctionnalités et des coûts, suivi par git, sans être enfermé dans une base de données SaaS.
- **La gouvernance peut être de la donnée, pas un tableau de bord.** Quand tu veux ce contrôle, gère le catalogue d'outils comme un dépôt Git - la revue de pull request devient l'approbation de marque, avec une trace d'audit complète et un retour arrière instantané pour chaque template auquel tes équipes ont accès. C'est une option, pas une obligation : les équipes qui veulent simplement créer des choses conçoivent leurs propres outils dans Layout Studio et importent leurs propres fichiers dans le catalogue, entièrement dans l'application, sans jamais toucher à git. Voir [Adoption et gouvernance](/info/adoption-governance.html).
- **Les garde-fous sont structurels.** Les contraintes de marque sont codées en dur dans les templates, et non publiées comme des directives que l'on peut ignorer. Le mauvais résultat n'est pas découragé - il est irreprésentable.

## Supprimer la file d'attente des demandes tout en démultipliant le contenu.

Un objectif de Lolly est la **déviation des demandes de design** : des demandes courantes qui n'ont jamais besoin d'atteindre un designer, parce que la personne qui avait besoin de la ressource l'a créée elle-même, correctement, en quelques minutes. Chaque ticket dévié est à la fois un gain de productivité et un fichier de moins qui change de mains.

Lolly est conçu pour s'adapter à la façon dont ton organisation fonctionne réellement - il n'y a pas une seule bonne façon de le déployer :

- **Déploie, ne sers pas.** Diffuse Lolly sur les appareils via ton MDM existant (Intune, Jamf, Munki…). Il tourne localement comme une application de bureau/mobile ou une PWA hors ligne - fonctionne derrière n'importe quel pare-feu, dans n'importe quel environnement isolé (air-gapped), sans serveur à maintenir, et avec l'IT qui garde le contrôle du rythme des mises à jour.
- **Sers uniquement.** Fais tourner une instance à l'intérieur de ton réseau (ou derrière un VPN) ; les utilisateurs y accèdent depuis un navigateur, rien à installer. Publie un outil une fois, tout le monde l'a immédiatement ; associe-le à ton IdP pour le contrôle d'accès.
- **Hybride.** Des applications locales pour le travail terrain hors ligne, une version navigateur toujours à jour pour les machines empruntées - les deux pointant vers la même bibliothèque d'outils.

Le détail complet des modèles de déploiement et le guide d'administration se trouvent dans [Déploiement](/info/deployment.html) et [Configuration](/info/configuration.html).

## Utilitaires anti-exfiltration

Une catégorie d'outils Lolly - les utilitaires de confidentialité - existe *spécifiquement* pour garder les fichiers à l'intérieur du périmètre.


- **Supprimer les données cachées**
 Retire la localisation et toutes les informations identifiantes cachées des documents et fichiers multimédias.

- **Assistant de texte**  
Anonymise, encode, formate et manipule du texte structuré et non structuré. 

- **Compresser le PDF**
Réduis un PDF trop volumineux sur l'appareil, pour que personne ne se tourne vers un site web tiers « compresser mon PDF » dès qu'un fichier est trop gros pour être envoyé par e-mail - exactement le moment où les données passent par la fenêtre. 

Elles sont toutes des transformations sur l'appareil : ton fichier ou tes données entrent, des octets nettoyés ressortent, et **il n'y a aucun serveur où les téléverser**. Elles sont l'exact opposé de l'outil typique « téléverse ton fichier sur le site web d'un inconnu pour le nettoyer » vers lequel un employé bien intentionné se tournerait sinon.



## Déterminisme et reproductibilité

Chaque entrée d'outil peut s'exprimer comme un paramètre d'URL, et les mêmes entrées produisent le même fichier. Cela a deux conséquences pour l'opérateur :

- **Une URL, c'est l'artefact.** Commite le lien, régénère la ressource à la demande - aucun binaire versionné dans Git, plus besoin de traquer « la dernière version » dans le chat. Les identifiants (IDs) de ressources et d'outils sont des contrats permanents, donc un lien créé aujourd'hui se résout toujours plus tard.
- **Le CLI emprunte le même chemin de rendu** que l'interface graphique, donc les pipelines de build et l'application ne divergent jamais. Génère des images OG, des cartes sociales et des visuels de données au moment du build, de façon reproductible.

## Provenance et Content Credentials

Les exports peuvent porter des **Content Credentials** - un manifeste [C2PA](https://c2pa.org) signé, lié à un hash des octets du fichier. Tout changement ultérieur du fichier brise le sceau, si bien qu'un vérificateur compatible C2PA **détecte l'altération cryptographiquement, hors ligne**. Le credential est détectable en cas de *falsification* : il signale la falsification plutôt que de l'empêcher, ce qui est précisément ce qui rend possible une vérification entièrement hors ligne.

- **Activé par défaut, sur l'appareil.** La clé de signature est générée sur l'appareil, elle est non extractible (même Lolly ne peut pas la lire), et la signature se fait localement - seule l'*inscription* d'identité optionnelle touche jamais le réseau.
- **Niveaux de confiance.** Un export non inscrit est structurellement valide mais signé anonymement (`untrusted`). Inscris une **identité vérifiée** (certificat de courte durée émis par la CA Lolly, lié à un e-mail) et les vérificateurs qui épinglent la racine Lolly rapportent `trusted` + l'e-mail du signataire. Une autorité d'horodatage de confiance et un feu vert de validateur tiers (conformité C2PA) sont sur la feuille de route. Chaque niveau est explicite, et un fichier ne revendique jamais que la confiance qu'il peut prouver.
- **La durée de vie du credential** est décidée par l'opérateur/utilisateur au moment de la signature : 7 / 30 / 90 / 365 jours, 30 par défaut.
- **Le Lolly Imprint.** Un second signal complémentaire, **activé par défaut** : un filigrane de pixels invisible intégré aux exports raster (et aux rasters rendus par Lolly à l'intérieur d'un PDF/PPTX, jamais l'image intégrée par l'utilisateur lui-même). Là où le credential meurt au moindre changement de conteneur, l'Imprint survit à un ré-enregistrement ou une capture d'écran - un indice durable « ces pixels sont passés par Lolly », présence uniquement, sans donnée personnelle. C'est de la sécurité par l'obscurité, pas une défense durcie, et cela complète le credential plutôt que de le remplacer. `imprint=0` permet de le désactiver.
- **Durable Content Credentials (opt-in).** Un export raster peut en plus porter une marque *durable* invisible qui encode un identifiant de liaison souple, afin que le credential C2PA puisse être récupéré même après qu'une publication sur les réseaux sociaux ou un ré-enregistrement a supprimé les métadonnées du fichier - le cas où un credential normal serait perdu. Elle est réservée au raster et coûte une passe d'encodage neuronal, donc elle est désactivée par défaut (`durable=1` pour l'activer). Lolly reconnaît sa propre marque durable hors ligne sur `/verify` dès aujourd'hui ; la récupération par des outils tiers (par exemple Adobe) suivra une fois la résolution de liaison souple mise en place à l'échelle du secteur.
- **La vérification se fait sur l'appareil.** Dépose n'importe quel fichier sur `/verify` (ou `lolly validate <file>`) pour obtenir un rapport hors ligne indiquant s'il a réellement été fait avec Lolly et s'il n'a pas changé depuis. La vue Verify du web signale aussi le contenu généré par IA, détecte le Lolly Imprint, vérifie les signatures **SEAL** (une signature au niveau des octets ancrée dans le DNS - le seul contact réseau est une recherche de clé DNS, jamais le fichier), effectue en option une analyse approfondie à la recherche de filigranes de pixels tiers (un téléchargement de modèle sur l'appareil, une seule fois), et fait apparaître les données cachées - le tout sans téléverser le fichier. Voir [Identité Content Credentials](/info/content-credentials-identity.html).

> **Notes d'interopérabilité.** Lolly vérifie ses propres credentials et beaucoup de ceux de tiers hors ligne dès aujourd'hui, y compris la lecture des manifestes de revendication C2PA **v2** provenant d'autres producteurs. Un point d'interopérabilité reste en cours : le WebM - qui n'a pas encore de mappage C2PA standardisé, si bien que Lolly attache le manifeste comme une pièce Matroska (les outils tiers vérifient le MP4 de Lolly d'emblée ; le WebM suivra une fois la norme stabilisée).

## Chiffrement et mots de passe

Pour les fichiers qui doivent voyager verrouillés, tout se passe sur l'appareil :

- **Mot de passe d'ouverture PDF** - *Standard* est une dissuasion RC4 40 bits (s'ouvre partout, peut voyager dans un lien) ; *Fort* est **AES-256** (PDF 2.0), saisi à l'export et jamais placé dans un lien.
- **Téléchargements verrouillés** - un ZIP, un dossier Projects, ou un lot (batch) peut être verrouillé en entier : *Standard* ZipCrypto (faible, universel) ou *Fort* **AES-256** (WinZip AE-2). Défense en profondeur : tout PDF à l'intérieur d'un zip Fort est *aussi* verrouillé individuellement en AES-256, donc il reste verrouillé après décompression.
- **Liens de partage protégés par mot de passe** - l'état complet du lien est chiffré en AES-256 sous une clé dérivée par PBKDF2 ; seul le texte chiffré voyage, le mot de passe n'est jamais dans le lien, et le déchiffrement se fait dans le navigateur du destinataire.

## Prêt pour l'air-gap

L'air-gap est un **déploiement de plein droit**, pas un mode spécial - Lolly fonctionne sans aucun réseau au moment du rendu, d'emblée. Le shell web est une PWA offline-first (service worker) ; les polices et le WASM sont stockés sur l'appareil ; l'état des outils est persisté localement via le host bridge, jamais via `localStorage`. Tout outil qui contacte le réseau ne le fait que via une capacité `host.net` **en liste blanche** qu'il doit déclarer dans son manifeste - un shell qui ne peut (ou ne veut) pas la satisfaire la neutralise. Diffuse les shells sur les appareils via ton MDM, ou fais tourner une instance à l'intérieur de ton réseau, et une installation entièrement air-gapped effectue le rendu, l'export, le chiffrement et la vérification des credentials sans rien avoir à contacter au loin.

## Bon à savoir

Quelques points à avoir au clair avant de le déployer :

- **Durcissement en cours.** La cryptographie et les analyseurs (parsers) passent par le durcissement à l'échelle entreprise de SUSE (voir ci-dessus) - solides par conception dès aujourd'hui ; déploie-les comme de la défense en profondeur là où un contrat exige une assurance certifiée.
- **Les hooks d'outils *ne sont pas* un bac à sable de sécurité.** Le `hooks.js` optionnel d'un outil s'exécute avec le host bridge injecté, mais dans un shell navigateur il s'exécute dans le realm de la page et *peut* accéder à `window`/`document`/`fetch`. Traite le code d'un outil comme tu traiterais n'importe quel code que tu exécutes - relis-le. C'est pourquoi une organisation qui fait tourner un catalogue partagé peut le contrôler via une revue Git ; dans tous les cas, n'exécute que des outils que tu as relus jusqu'à l'arrivée de l'isolation par Worker.
- **Les Content Credentials sont détectables en cas de falsification.** Ils détectent l'altération plutôt que de l'empêcher - voir les notes d'interopérabilité ci-dessus.
- **Deux niveaux de chiffrement.** Les verrous *Standard* sont des dissuasions rapides et universelles ; *Fort* (AES-256) est une protection complète - opte pour Fort pour tout ce qui est sensible, en notant qu'il lui faut un lecteur moderne.

## Pour aller plus loin

- **[Adoption et gouvernance](/info/adoption-governance.html)** - personas, la métrique de déviation, et la gouvernance-comme-donnée en détail.
- **[Déploiement](/info/deployment.html)** - déploiement/service/hybride, MDM, et auto-hébergement des services.
- **[Configuration](/info/configuration.html)** - profils, packs de marque, contrôle d'accès aux capacités, et feature flags.
- **[Politique de confidentialité](/info/privacy.html)** - la déclaration formelle « ne collecte rien, ne téléverse rien ».
