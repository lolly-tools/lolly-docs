# Lolly pour les opérateurs

**Une stratégie de prévention des pertes de données et de provenance en profondeur, pérenne, déguisée en plateforme créative.**

Le système immunitaire organisationnel qui s'enroule autour de ce que tu fais déjà — pour que le travail créatif courant dont tes équipes ont besoin au quotidien se déroule *à l'intérieur* de ton périmètre plutôt que de fuiter en dehors.

**Ce que tu y gagnes.** Tu deviens la personne qui a dit oui à quelque chose à la fois sûr *et* populaire. Tu colmates une brèche d'exfiltration et supprimes la file d'attente des demandes de design en un seul geste — la rare victoire sécurité qui te rend plus apprécié, pas moins. Plus d'appel à 3h du matin parce que quelqu'un a envoyé des fichiers de marque par e-mail à un prestataire ou collé des données clients dans un outil web quelconque ; moins de fournisseurs SaaS, de contrats et d'audits sur les bras ; et une trace git complète à montrer quand on te demande qui a approuvé quoi. Tu dors tranquille la nuit.

Lolly mérite sa place en tant qu'outil créatif : il supprime la file d'attente de design et met un rendu de qualité production entre les mains de tout le monde. Mais la raison pour laquelle il est *sûr* de le diffuser aussi largement est architecturale. Rien n'est téléversé, tout est reproductible, et chaque export peut porter un enregistrement cryptographique de sa provenance. Cette page raconte l'histoire de la sécurité et du déploiement.

> **Franchement, d'abord.** Les propriétés de sécurité de Lolly sont solides *par conception*, et ses moteurs de cryptographie et d'analyse de fichiers sont actuellement en cours de durcissement d'infrastructure strict chez SUSE, en préparation d'une échelle entreprise — on est vraiment bons à ça. Les scellés, la signature sur l'appareil et le chiffrement décrits ci-dessous sont réels et défendables ; en attendant la fin de ce durcissement, considère-les comme de la défense en profondeur plutôt que comme un contrôle certifié là où une assurance indépendante est contractuellement requise. On préfère que tu le saches d'emblée.

## L'avantage stratégique

La façon habituelle dont le travail créatif courant se fait est une surface de risque : des fichiers envoyés par e-mail à des prestataires de design externes, des ressources de marque téléversées sur une dizaine d'éditeurs SaaS, des données clients collées dans l'outil web d'un inconnu pour « juste faire un visuel rapide ». Chacun de ces cas, ce sont des données qui échappent à ton contrôle.

Lolly inverse la logique. Le travail qui *causait* ces fuites — la carte de citation, la bannière localisée, le badge d'événement, la capture d'écran expurgée — se fait désormais sur un outil qui tourne sur l'appareil de l'employé lui-même, contre ta marque, sans serveur dans la boucle. Tu n'as pas ajouté un contrôle par-dessus un flux de travail risqué ; tu as remplacé le flux de travail risqué par un autre qui n'a, dès le départ, aucune voie d'exfiltration.

- **La configuration est la tienne.** Le moteur (engine) et les shells sont open source (MPL-2.0). Superpose ta propre authentification, télémétrie ou CA ; héberge-le ou non ; tu gardes le contrôle total des fonctionnalités et des coûts, suivi par git, sans être enfermé dans une base de données SaaS.
- **La gouvernance, c'est de la donnée, pas un tableau de bord.** Le catalogue d'outils est la source de vérité, géré comme un dépôt Git — la revue de pull request *est* la modération, et tu obtiens une trace d'audit complète et un retour arrière instantané pour chaque template auquel tes équipes ont accès. Voir [Adoption et gouvernance](/info/adoption-governance.html).
- **Les garde-fous sont structurels.** Les contraintes de marque sont codées en dur dans les templates, et non publiées comme des directives que l'on peut ignorer. Le mauvais résultat n'est pas découragé — il est irreprésentable.

## Supprimer la file d'attente des demandes tout en démultipliant le contenu.

Un objectif de Lolly : la **déviation des demandes de design** — des demandes courantes qui n'ont jamais besoin d'atteindre un designer, parce que la personne qui avait besoin de la ressource l'a créée elle-même, correctement, en quelques minutes. Chaque ticket dévié est à la fois un gain de productivité et un fichier de moins qui change de mains.

Lolly est conçu pour s'adapter à la façon dont ton organisation fonctionne réellement — il n'y a pas une seule bonne façon de le déployer :

- **Déploie, ne sers pas.** Diffuse Lolly sur les appareils via ton MDM existant (Intune, Jamf, Munki…). Il tourne localement comme une application de bureau/mobile ou une PWA hors ligne — fonctionne derrière n'importe quel pare-feu, dans n'importe quel environnement isolé (air-gapped), sans serveur à maintenir, et avec l'IT qui garde le contrôle du rythme des mises à jour.
- **Sers uniquement.** Fais tourner une instance à l'intérieur de ton réseau (ou derrière un VPN) ; les utilisateurs y accèdent depuis un navigateur, rien à installer. Publie un outil une fois, tout le monde l'a immédiatement ; associe-le à ton IdP pour le contrôle d'accès.
- **Hybride.** Des applications locales pour le travail terrain hors ligne, une version navigateur toujours à jour pour les machines empruntées — les deux pointant vers la même bibliothèque d'outils.

Le détail complet des modèles de déploiement et le guide d'administration se trouvent dans [Déploiement](/info/deployment.html) et [Configuration](/info/configuration.html).

## Utilitaires anti-exfiltration

Une catégorie d'outils Lolly existe *spécifiquement* pour garder les fichiers à l'intérieur du périmètre. Les utilitaires de confidentialité.


- **Supprimer les données cachées**
 Retire la localisation et toutes les informations identifiantes cachées des documents et fichiers multimédias.

- **Assistant de texte**  
Anonymise, encode, formate et manipule du texte structuré et non structuré. 

- **Compresser le PDF**
Évite tout risque de « crise de limite d'e-mail » où les outils web tiers rôdent et les données 

- **Compresser le PDF**
Évite tout risque de « crise de limite d'e-mail » où les outils web tiers rôdent et où les données passent par la fenêtre. 

Ce sont toutes des transformations sur l'appareil : ton fichier ou tes données entrent, des octets nettoyés ressortent, et **il n'y a aucun serveur où les téléverser**. Ce sont l'exact opposé de l'outil typique « téléverse ton fichier sur le site web d'un inconnu pour le nettoyer » vers lequel un employé bien intentionné se tournerait sinon.



## Déterminisme et reproductibilité

Chaque entrée d'outil peut s'exprimer comme un paramètre d'URL, et les mêmes entrées produisent le même fichier. Cela a deux conséquences pour l'opérateur :

- **Une URL, c'est l'artefact.** Commite le lien, régénère la ressource à la demande — aucun binaire versionné dans Git, plus besoin de traquer « la dernière version » dans le chat. Les identifiants (IDs) de ressources et d'outils sont des contrats permanents, donc un lien créé aujourd'hui se résout toujours plus tard.
- **Le CLI emprunte le même chemin de rendu** que l'interface graphique, donc les pipelines de build et l'application ne divergent jamais. Génère des images OG, des cartes sociales et des visuels de données au moment du build, de façon reproductible.

## Provenance et Content Credentials

Les exports peuvent porter des **Content Credentials** — un manifeste [C2PA](https://c2pa.org) signé, lié à un hash des octets du fichier. C'est **détectable en cas de *falsification*, pas *inviolable*** : cela n'empêche personne de modifier un fichier, mais tout changement ultérieur brise le sceau et un vérificateur compatible C2PA le signale. C'est la propriété honnête et utile — tu peux *détecter* une altération, cryptographiquement, hors ligne.

- **Activé par défaut, sur l'appareil.** La clé de signature est générée sur l'appareil, elle est non extractible (même Lolly ne peut pas la lire), et la signature se fait localement — seule l'*inscription* d'identité optionnelle touche jamais le réseau.
- **Niveaux de confiance.** Un export non inscrit est structurellement valide mais signé anonymement (`untrusted`). Inscris une **identité vérifiée** (certificat de courte durée émis par la CA Lolly, lié à un e-mail) et les vérificateurs qui épinglent la racine Lolly rapportent `trusted` + l'e-mail du signataire. Une autorité d'horodatage de confiance et un feu vert de validateur tiers (conformité C2PA) sont sur la feuille de route, pas encore livrés — les niveaux sont étiquetés honnêtement et un fichier n'affiche jamais un faux feu vert.
- **La durée de vie du credential** est décidée par l'opérateur/utilisateur au moment de la signature : 7 / 30 / 90 / 365 jours, 30 par défaut.
- **La vérification se fait sur l'appareil.** Dépose n'importe quel fichier sur `/valid` (ou `lolly validate <file>`) pour obtenir un rapport hors ligne indiquant s'il a réellement été fait avec Lolly et s'il n'a pas changé depuis. Voir [Identité Content Credentials](/info/content-credentials-identity.html).

> **Lacune connue, dite clairement :** le vérificateur de Lolly ne lit pas encore entièrement les manifestes de revendication C2PA **v2** provenant d'autres producteurs ; et WebM porte le manifeste comme une pièce jointe Matroska (aucun mappage C2PA standardisé n'existe encore pour WebM), donc les outils tiers vérifient le MP4 de Lolly mais pas son WebM.

## Chiffrement et mots de passe

Pour les fichiers qui doivent voyager verrouillés, tout se passe sur l'appareil :

- **Mot de passe d'ouverture PDF** — *Standard* est une dissuasion RC4 40 bits (s'ouvre partout, peut voyager dans un lien) ; *Fort* est **AES-256** (PDF 2.0), saisi à l'export et jamais placé dans un lien.
- **Téléchargements verrouillés** — un ZIP, un dossier Projects, ou un lot (batch) peut être verrouillé en entier : *Standard* ZipCrypto (faible, universel) ou *Fort* **AES-256** (WinZip AE-2). Défense en profondeur : tout PDF à l'intérieur d'un zip Fort est *aussi* verrouillé individuellement en AES-256, donc il reste verrouillé après décompression.
- **Liens de partage protégés par mot de passe** — l'état complet du lien est chiffré en AES-256 sous une clé dérivée par PBKDF2 ; seul le texte chiffré voyage, le mot de passe n'est jamais dans le lien, et le déchiffrement se fait dans le navigateur du destinataire.

## Prêt pour l'air-gap

Lolly est conçu pour fonctionner **sans aucun réseau au moment du rendu**. Le shell web est une PWA offline-first (service worker) ; les polices et le WASM sont stockés sur l'appareil ; l'état des outils est persisté localement via le host bridge, jamais via `localStorage`. Tout outil qui contacte le réseau ne le fait que via une capacité `host.net` **en liste blanche** qu'il doit déclarer dans son manifeste — un shell qui ne peut (ou ne veut) pas la satisfaire la neutralise. Ainsi, une installation entièrement air-gapped effectue le rendu, l'export, le chiffrement et la vérification des credentials sans rien avoir à contacter au loin.

## Ce que tu dois savoir avant d'en dépendre

Les opérateurs méritent les réserves, pas seulement les promesses :

- **Durcissement pour l'échelle entreprise.** Comme indiqué en haut de page — la cryptographie et les analyseurs (parsers) sont actuellement en cours de durcissement d'infrastructure strict chez SUSE pour l'échelle entreprise ; solides par conception, à considérer comme de la défense en profondeur là où une assurance indépendante est contractuellement requise.
- **Les hooks d'outils *ne sont pas* un bac à sable de sécurité.** Le `hooks.js` optionnel d'un outil s'exécute avec le host bridge injecté, mais dans un shell navigateur il s'exécute dans le realm de la page et *peut* accéder à `window`/`document`/`fetch`. Traite le code d'un outil comme tu traiterais n'importe quel code que tu exécutes — relis-le. C'est pourquoi le modèle « catalogue comme revue Git » compte, et pourquoi des outils tiers non fiables ne devraient pas être exécutés avant l'arrivée de l'isolation par Worker.
- **C2PA est détectable en cas d'altération, pas inviolable**, et les lacunes de lecture v2 / WebM mentionnées ci-dessus sont bien réelles.
- **Les niveaux de chiffrement diffèrent.** Les verrous *Standard* sont dissuasifs ; seul *Fort* (AES-256) est une vraie protection, et les fichiers Fort ne s'ouvrent pas dans tous les lecteurs anciens.

## Pour aller plus loin

- **[Adoption et gouvernance](/info/adoption-governance.html)** — personas, la métrique de déviation, et la gouvernance-comme-donnée en détail.
- **[Déploiement](/info/deployment.html)** — déploiement/service/hybride, MDM, et auto-hébergement des services.
- **[Configuration](/info/configuration.html)** — profils, packs de marque, contrôle d'accès aux capacités, et feature flags.
- **[Politique de confidentialité](/info/privacy.html)** — la déclaration formelle « ne collecte rien, ne téléverse rien ».
