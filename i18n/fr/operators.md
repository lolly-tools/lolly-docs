# Lolly pour les opérateurs

### Une stratégie de sécurité et de renseignement en profondeur - qui se trouve être aussi une plateforme de production créative

Le système immunitaire organisationnel zéro confiance qui enveloppe ce que tu fais déjà - pour que le travail créatif courant dont tes équipes ont besoin chaque jour se passe *à l'intérieur* de ton périmètre au lieu d'en fuir.

**Ce que tu y gagnes.** Tu deviens la personne qui a dit oui à quelque chose à la fois sûr *et* populaire. Tu combles une brèche d'exfiltration, tu gagnes en capacité et tu supprimes une file de demandes en un seul geste - la rare victoire de sécurité qui te rend plus apprécié, pas moins. Plus d'appel à 3 h du matin des juristes parce que des fichiers sous embargo ou des données clients se sont retrouvés dans un outil web quelconque ; moins de fournisseurs SaaS, de contrats et d'audits sur les bras ; et une piste d'audit entièrement reproductible à montrer quand on te la demande. Tu dors mieux, et tu illumines quelques journées en le faisant.

Lolly n'est pas un outil créatif de second rang : il met une sortie de qualité production entre les mains de chacun, et l'expérience de création guidée par la marque n'a rien à envier à personne. La raison pour laquelle il est *sûr* de le diffuser largement est architecturale : rien n'est téléversé que tu n'y aies pas mis toi-même, chaque résultat est reproductible et chaque export peut porter plusieurs couches de registres cryptographiques parmi les plus avancés du secteur. Quel que soit le chemin par lequel un document a atteint ton bureau, tu peux voir sa provenance complète, s'il a été altéré et si tu peux le recréer pixel pour pixel.

> **L'état actuel.** Les propriétés de sécurité de Lolly sont solides par conception, et ses moteurs de cryptographie et d'analyse de fichiers passent par le durcissement d'infrastructure de niveau entreprise de SUSE. Les sceaux, la signature sur l'appareil et le chiffrement ci-dessous sont réels et défendables dès maintenant, et progressent vers une certification indépendante - donc là où un contrat exige une garantie certifiée, déploie-les comme défense en profondeur pendant que ce processus se termine.

## L'avantage stratégique

La façon habituelle dont le travail créatif courant se fait est une surface de risque : des fichiers envoyés par e-mail à des prestataires design externes, des assets de marque téléversés dans une dizaine d'éditeurs SaaS, des données clients collées dans l'outil web d'un inconnu pour "juste faire un visuel rapide". Chacun de ces cas est une fuite de données hors de ton contrôle.

Lolly inverse la donne. Le travail qui *causait* ces fuites - la carte-citation, la bannière localisée, le badge d'événement, la capture d'écran expurgée - se fait désormais sur un outil qui tourne sur l'appareil de l'employé, contre ta marque, sans serveur dans la boucle. Tu n'as pas ajouté un contrôle par-dessus un flux de travail risqué ; tu as remplacé le flux de travail risqué par un autre qui n'a dès le départ aucun chemin d'exfiltration.

- **La configuration t'appartient.** Le moteur et les shells sont open source (MPL-2.0). Superpose ta propre authentification, télémétrie ou CA ; héberge-le ou pas ; tu gardes le contrôle total des fonctionnalités et des coûts, suivi par git, pas enfermé dans une base de données SaaS.
- **La gouvernance peut être des données, pas un tableau de bord.** Quand tu veux ce contrôle, gère le catalogue d'outils comme un dépôt Git - la revue de pull request devient l'approbation de marque, avec une piste d'audit complète et un retour en arrière instantané de chaque modèle que ton équipe peut toucher. C'est une option, pas une obligation, et ça revient à un seul poste : les créateurs travaillent entièrement dans l'app, enregistrant ce qu'ils font comme une **session** et la transmettant comme lien de partage, sauvegarde ou collaboration en direct - rien de tout ça n'a besoin de git. Quand une de ces sessions mérite de devenir un point de départ permanent, la personne qui gère le déploiement ouvre le lien, enregistre ses valeurs comme **modèle** sur cet outil dans le pack de marque et commit. À partir de là, il apparaît dans le sélecteur « Nouveau depuis un modèle » de l'outil et est accessible par lien profond via `?template=<id>`. Git est l'étape de verrouillage de l'admin, utilisée une fois, jamais quelque chose qu'un créateur a besoin de toucher. Voir [Adoption & Gouvernance](/info/adoption-governance.html).
- **Les garde-fous sont structurels.** Les contraintes de marque sont codées en dur dans les modèles, pas publiées comme des directives que les gens peuvent ignorer. Le mauvais résultat n'est pas seulement découragé - il est irreprésentable.

> **Tu gouvernes toute la course de relais.** Un créatif rédige les règles et un développeur les met à l'échelle, mais c'est l'opérateur qui rend ce cycle de vie sûr à faire tourner à l'échelle de l'organisation - le même outil qui permet à un commercial de se servir seul dans un avion est un outil que tu peux conditionner à une revue Git, déployer via ton MDM et vérifier cryptographiquement. Vois comment les rôles se combinent dans [Le cycle de vie d'une campagne](/info/overview.html#the-lifecycle-of-a-campaign), et comment tu le gouvernes dans [Adoption et gouvernance](/info/adoption-governance.html).

## Supprime la file de demandes tout en démultipliant le contenu.

Un des objectifs de Lolly est la **déviation des demandes de design** : les demandes courantes qui n'ont jamais besoin d'atteindre un designer parce que la personne qui avait besoin de l'asset l'a fait elle-même, correctement, en quelques minutes. Chaque ticket dévié est à la fois un gain de productivité et un fichier de moins qui change de mains.

Lolly est conçu pour s'adapter à la façon dont ton organisation fonctionne réellement - il n'y a pas de seule bonne façon de le déployer :

- **Déployer, pas servir.** Diffuse Lolly sur les appareils via ton MDM existant (Intune, Jamf, Munki...). Il tourne localement comme une application bureau/mobile ou une PWA hors ligne - fonctionne derrière n'importe quel pare-feu, dans n'importe quel environnement isolé, sans serveur à maintenir, et l'IT garde le contrôle du rythme des mises à jour.
- **Servir uniquement.** Fais tourner une instance à l'intérieur de ton réseau (ou derrière un VPN) ; les utilisateurs y accèdent dans un navigateur, rien d'installé. Publie un outil une fois, tout le monde l'a immédiatement ; associe-le à ton IdP pour le contrôle d'accès.
- **Hybride.** Applications locales pour le travail terrain hors ligne, version navigateur toujours à jour pour les machines empruntées - les deux pointant vers la même bibliothèque d'outils.

Les modèles de déploiement complets et le guide d'administration se trouvent dans [Déploiement](/info/deployment.html) et [Configuration](/info/configuration.html).

## Utilitaires anti-exfiltration

Une catégorie d'outils Lolly - les utilitaires de confidentialité - existe *spécifiquement* pour garder les fichiers à l'intérieur du périmètre.


- **Strip hidden data**
 Retire la localisation et toute information d'identification cachée des documents et des fichiers média.

- **Text Helper**  
Anonymise, encode, formate et manipule du texte structuré et non structuré. 

- **Compress PDF**
Réduit un PDF trop volumineux directement sur l'appareil, pour que personne n'aille sur un site tiers de type "compresser mon PDF" dès qu'un fichier est trop gros pour être envoyé par e-mail - c'est justement là que les données s'échappent. 

Toutes ces transformations se font sur l'appareil : ton fichier ou tes données entrent, des octets nettoyés en ressortent et **il n'y a aucun serveur vers lequel les envoyer**. C'est l'exact opposé de l'outil habituel "envoie ton fichier sur le site d'un inconnu pour le nettoyer" vers lequel un employé bien intentionné se tournerait sinon.

![Strip Hidden Data : le fichier arrive sur le canevas et le badge indique clairement que rien n'est importé](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper offre le même compromis pour le texte plutôt que pour les fichiers. C'est l'atelier à onglets qu'un employé irait autrement chercher sur le site d'un inconnu, et il ne déclare aucune entrée car rien de ce qu'il touche ne quitte jamais la page.

![L'atelier de Text Helper - une rangée d'onglets d'opérations au-dessus d'une carte indiquant que rien de ce que tu colles ne quitte ton appareil](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF complète l'ensemble : la pièce jointe trop volumineuse rétrécit selon un niveau de qualité que tu choisis, sur la machine qui la contient déjà.

![Compress PDF - un niveau de qualité et un interrupteur niveaux de gris à gauche, une zone de dépôt pour ton propre PDF à droite, et aucun envoi nulle part](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Déterminisme et reproductibilité

Chaque entrée d'outil peut s'exprimer comme paramètre d'URL, et les mêmes entrées produisent le même fichier. Cela a deux conséquences pratiques :

- **Une URL est l'artefact.** Commite le lien, régénère l'asset à la demande - aucun binaire versionné dans Git, plus besoin de chercher "la dernière version" dans un fil de discussion. Les identifiants d'assets et d'outils sont des contrats permanents, donc un lien créé aujourd'hui se résout encore plus tard.
- **Le CLI emprunte le même chemin de rendu** que l'interface graphique, donc les pipelines de build et l'application ne divergent jamais. Génère des images OG, des cartes sociales et des visuels de données au moment du build, de façon reproductible.

Prompt to Image incarne le déterminisme dans sa forme la plus simple : le texte est toute l'entrée, l'image composée est toute la sortie, et le même texte se compose toujours de la même façon.

![Prompt to Image - un bloc de texte de prompt composé dans une image carrée, sans rien dans le résultat qui n'était pas déjà dans l'entrée](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Provenance et Content Credentials

![La zone de dépôt de Verify accepte n'importe quel fichier, de n'importe quelle source, et le lit sans aucun appel réseau](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Les exports peuvent porter des **Content Credentials** - un manifeste [C2PA](https://c2pa.org) signé, lié à une empreinte des octets du fichier. Toute modification ultérieure du fichier brise le sceau, ce qui permet à un vérificateur compatible C2PA de **détecter une altération de façon cryptographique, hors ligne**. Le credential est tamper-*évident* : il signale la falsification plutôt qu'il ne la prévient, ce qui est précisément ce qui rend possible une vérification entièrement hors ligne.

- **Activé par défaut, sur l'appareil.** La clé de signature est générée sur l'appareil, elle est non extractible (même Lolly ne peut pas la lire) et la signature se fait localement - seule l'*inscription* d'identité optionnelle touche jamais le réseau.
- **Niveaux de confiance.** Un export non inscrit est bien formé mais signé anonymement (`untrusted`). Inscris une **identité vérifiée** (certificat de courte durée émis par l'autorité de certification Lolly, lié à un e-mail) et les vérificateurs qui épinglent la racine Lolly indiquent `trusted` + l'e-mail du signataire. Une autorité d'horodatage de confiance et un feu vert de validateur tiers (conformité C2PA) sont sur la feuille de route. Chaque niveau est explicite, et un fichier ne revendique jamais que la confiance qu'il peut prouver.
- **La durée de vie du credential** est décidée par l'opérateur ou l'utilisateur au moment de la signature : 7 / 30 / 90 / 365 jours, 30 par défaut.
- **Le Lolly Imprint.** Un second signal, complémentaire, **activé par défaut** : un filigrane de pixels invisible intégré aux exports raster (et aux rasters rendus par Lolly à l'intérieur d'un PDF/PPTX, jamais une image intégrée par l'utilisateur lui-même). Là où le credential meurt au moindre changement de conteneur, l'Imprint survit à un ré-enregistrement ou une capture d'écran - un indice durable "ces pixels sont passés par Lolly", uniquement une preuve de présence, sans donnée personnelle. C'est de la sécurité par l'obscurité, pas une défense renforcée, et cela complète le credential plutôt que de le remplacer. `imprint=0` permet de désactiver.
- **Content Credentials durables (opt-in).** Un export raster peut en plus porter une marque *durable* invisible qui encode un identifiant à liaison souple (soft-binding), afin que le credential C2PA puisse être récupéré même après qu'un envoi sur un réseau social ou un ré-enregistrement a supprimé les métadonnées du fichier - le cas où un credential normal serait perdu. C'est réservé au raster et cela coûte une passe d'encodage neuronal, donc c'est désactivé par défaut (`durable=1` pour l'activer). Lolly reconnaît aujourd'hui sa propre marque durable hors ligne sur `/verify` ; la récupération par des outils tiers (par ex. Adobe) suivra une fois la résolution du soft-binding actée par le secteur.
- **La vérification se fait sur l'appareil.** Dépose n'importe quel fichier sur `/verify` (ou `lolly validate <file>`) pour un rapport hors ligne indiquant s'il a bien été créé avec Lolly et s'il n'a pas changé depuis. La vue Verify du web signale aussi le contenu généré par IA, détecte le Lolly Imprint, vérifie les signatures **SEAL** (une signature au niveau des octets - avec zéro requête réseau : le moteur prend un résolveur de clé DNS *injecté* et aucune coque n'en injecte un aujourd'hui, donc un enregistrement portant sa propre clé `pk=` intégrée se vérifie entièrement hors ligne, tandis qu'un enregistrement à clé DNS indique "no key resolver and no inline key" plutôt que de sortir sur le réseau - voir `SealPublicKeyResolver` dans `engine/src/seal.ts`), effectue en option une analyse approfondie à la recherche de filigranes de pixels tiers (un téléchargement de modèle unique, sur l'appareil) et fait apparaître les données cachées - tout cela sans envoyer le fichier nulle part. Voir [Content Credentials Identity](/info/content-credentials-identity.html).

> **Notes d'interopérabilité.** Lolly vérifie aujourd'hui hors ligne ses propres credentials ainsi que ceux de nombreux tiers, y compris en lisant les manifestes de claim C2PA **v2** d'autres producteurs. Deux conteneurs restent en cours, tous deux parce que C2PA n'a pas encore de mapping standardisé pour eux, donc Lolly place le credential à un endroit qui lui est propre et c'est le vérificateur de Lolly qui le relit : **WebM** (le manifeste voyage comme pièce jointe Matroska) et **Ogg/Opus** (un champ `C2PA=` dans l'en-tête de commentaires OpusTags, cette plage d'octets étant exclue de la liaison pour que l'audio conserve la même empreinte). Tout le reste respecte la spécification - les outils tiers vérifient nativement les MP4, M4A, MP3, WAV, PNG, JPEG et PDF de Lolly. Voir `engine/src/c2pa-containers.ts` pour les deux mappings ; ils convergeront vers le standard une fois celui-ci stabilisé.

## Chiffrement et protection par mot de passe

Pour les fichiers qui doivent voyager verrouillés, tout se passe sur l'appareil :

![La carte de verrouillage du panneau d'export : un mot de passe, et un choix explicite entre les deux niveaux](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Mot de passe d'ouverture PDF** - *Standard* est une dissuasion RC4 40 bits (s'ouvre partout, peut voyager dans un lien) ; *Strong* est en **AES-256** (PDF 2.0), saisi au moment de l'export et jamais placé dans un lien.
- **Téléchargements verrouillés** - un ZIP, un dossier Projects ou une exécution par lot peuvent être entièrement verrouillés : *Standard* en ZipCrypto (faible, universel) ou *Strong* en **AES-256** (WinZip AE-2). Défense en profondeur : tout PDF à l'intérieur d'un zip Strong est *aussi* verrouillé individuellement en AES-256, ce qui le garde verrouillé après extraction.
- **Liens de partage protégés par mot de passe** - tout l'état du lien est chiffré en AES-256 sous une clé dérivée par PBKDF2 ; seul le texte chiffré voyage, le mot de passe n'est jamais dans le lien et le déchiffrement se fait dans le navigateur du destinataire.

## Prêt pour l'air-gap

L'air-gap est un **mode de déploiement à part entière**, pas un mode spécial - Lolly fonctionne sans réseau au moment du rendu, nativement. La coque web est une PWA offline-first (service worker) ; les polices et le WASM sont stockés sur l'appareil ; l'état des outils est persisté localement via le pont hôte, jamais via `localStorage`. Le moyen pris en charge pour qu'un outil atteigne le réseau est une capacité `host.net` **en liste blanche** qu'il déclare dans son manifeste - une coque qui ne peut pas (ou ne veut pas) la satisfaire la neutralise. C'est un contrat de portabilité plutôt qu'une frontière imposée (voir la note sur les hooks ci-dessous), ce qui explique pourquoi la revue du code des outils reste le vrai contrôle - même si, sur un appareil en air-gap, il n'y a de toute façon rien à atteindre. Déploie les coques sur les appareils via ton MDM, ou sers une instance à l'intérieur de ton réseau, et une installation entièrement en air-gap effectue le rendu, l'export, le chiffrement et la vérification des credentials sans rien avoir à contacter.

## Bon à savoir

Quelques points à bien avoir en tête avant de le déployer :

- **Durcissement en cours.** La cryptographie et les parseurs passent par le durcissement à l'échelle entreprise de SUSE (voir ci-dessus) - robustes par conception dès aujourd'hui ; à déployer en défense en profondeur là où un contrat exige une assurance certifiée.
- **Les hooks d'outils ne sont *pas* un bac à sable de sécurité.** Le `hooks.js` optionnel d'un outil s'exécute avec le pont hôte injecté, mais dans une coque navigateur il s'exécute dans le contexte de la page et *peut* atteindre `window`/`document`/`fetch`. Traite le code d'un outil comme tout code que tu exécutes - relis-le. C'est pourquoi une organisation qui gère un catalogue partagé peut le contrôler par une revue Git ; dans tous les cas, n'exécute que des outils que tu as relus, en attendant l'isolation par Worker.
- **Les Content Credentials sont tamper-evident (détectables en cas d'altération).** Ils détectent l'altération plutôt qu'ils ne la préviennent - voir les notes d'interopérabilité ci-dessus.
- **Deux niveaux de chiffrement.** Les verrous *Standard* sont des dissuasions rapides et universelles ; *Strong* (AES-256) offre une protection complète - réserve Strong à tout ce qui est sensible, en notant que cela demande un lecteur récent.

## Autonome, ou gouverné par un plan de contrôle

Deux formes, et tu choisis par déploiement. **Autonome est le réglage par défaut et ne nécessite aucun serveur :** Lolly rend sur l'appareil, chaque créateur travaille dans l'app, et la gouvernance git-comme-données ci-dessus est entièrement optionnelle - une seule organisation peut faire tourner ce dépôt sans rien héberger du tout. **Quand tu veux un contrôle à l'échelle de l'organisation, ajoute un plan de contrôle.** [lolly.work](https://lolly.work) est un service séparé, open source (MPL-2.0), que tu héberges toi-même - ou que tu testes sur le bac à sable hébergé -, qui gouverne le shell en direct : connexion protégée par SSO, politique de feature-flags / export / filigrane, surcouches d'entrées d'outils, fédération de catalogues, approbations et un journal d'audit chaîné par hash, le tout livré au shell sans changer une ligne de code ici. Il est agnostique de la marque (configuration plus un montage de pack), consomme le moteur et les packs de ce dépôt sans les modifier, et ne devient jamais le chemin de rendu : Lolly rend toujours sur l'appareil par conception. OSS = liberté individuelle ; OSS + plan de contrôle = liberté organisationnelle.

## Où aller ensuite

- **[Sécurité et vérification](/info/security.html)** - les standards, primitives, le modèle de confiance et les tests derrière les credentials et le chiffrement ci-dessus.
- **[Adoption et gouvernance](/info/adoption-governance.html)** - les personas, la métrique de déviation et la gouvernance-en-tant-que-données en détail.
- **[Déploiement](/info/deployment.html)** - déploiement/hébergement/hybride, MDM et auto-hébergement des services.
- **[Configuration](/info/configuration.html)** - profils, packs de marque, contrôle des capacités et feature flags.
- **[Politique de confidentialité](/info/privacy.html)** - la déclaration formelle de ce qui est collecté, stocké et envoyé, ou non.
- **[Surface serveur](/info/server-surface.html)** - l'inventaire complet de ce qui tourne côté serveur (deux composants optionnels) par rapport à ce qui tourne sur l'appareil.
