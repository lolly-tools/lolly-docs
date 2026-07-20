# Politique de confidentialité

*Dernière mise à jour : 19 juillet 2026*

> **En clair.** Les documents, images, vidéos et fichiers que tu crées dans Lolly
> restent sur ton appareil. Il n'y a aucun compte pour un usage ordinaire, aucun
> cookie provenant de l'application elle-même, et aucun système d'analyse ni traceur
> nulle part dans le code - non pas « nous n'utilisons pas les données », mais
> réellement absent des sources. Il existe une liste courte et complète des
> exceptions où le logiciel communique avec un réseau, et chacune d'elles est
> décrite en détail ci-dessous : ce qui part, vers qui, et quand. La seule exception
> qui implique quoi que ce soit de personnel est une connexion que tu dois
> explicitement lancer. Si ce n'est pas dans ce document, cela n'arrive pas.

## Ce que couvre cette politique

Lolly est un logiciel open source - un moteur, plusieurs coques applicatives (web,
bureau, mobile, CLI), et une extension de navigateur - que n'importe qui peut
exécuter. Cette politique comporte deux parties :

- **Le logiciel lui-même** : ce qu'il fait et ne fait pas de tes données, où qu'il
  s'exécute. C'est une propriété du code, c'est donc vrai de tout déploiement de
  Lolly, le nôtre comme celui de quelqu'un d'autre.
- **lolly.tools**, le déploiement de référence exploité par SUSE : les choix
  concrets faits en exécutant ses composants serveur optionnels (ce qui est
  journalisé, pendant combien de temps, par qui).

Si tu utilises une instance Lolly auto-hébergée ou d'entreprise, le comportement du
logiciel décrit ci-dessous s'applique toujours, mais c'est l'*opérateur* de cette
instance - et non SUSE - qui est responsable de tout ce qui touche au serveur : son
point d'accès de rendu, son serveur MCP, son autorité de certification Content
Credentials, s'il en exploite une. Demande-lui sa propre politique ; voir
[Adoption et gouvernance](/info/adoption-governance.html) pour ce qu'implique
l'exploitation de Lolly.

## L'application : ce qui reste sur ton appareil

Les coques web, bureau et mobile de Lolly exécutent tout le moteur de rendu côté
client. Ouvrir un outil, remplir les champs, prévisualiser et exporter se passent
tous sur ton appareil - aucun serveur n'intervient, et l'application fonctionne hors
ligne une fois chargée.

**L'application ne dépose aucun cookie.** Pour fonctionner, elle conserve une petite
quantité de données **sur ton appareil uniquement**, jamais transmises :

- **Les préférences d'interface** - thème, langue, réglages de son, dimensions de la
  barre latérale et du zoom, choix de tri et d'affichage, les conseils d'accueil que
  tu as déjà vus - dans `localStorage`, pour qu'elles soient disponibles avant même
  que l'application ait fini de démarrer.
- **Un cache hors ligne du catalogue d'outils et des aperçus d'assets**, pour que la
  galerie fonctionne sans connexion.
- **Des compteurs d'utilisation locaux** pour les statistiques de ta fiche de profil
  (combien d'exports, quels outils) - un petit blob borné dans `localStorage`,
  jamais lu par nous, jamais envoyé nulle part.
- **Tes propres documents, sessions enregistrées, assets et polices téléversés** -
  stockés dans IndexedDB sur ton appareil, jamais téléversés, jamais lus par
  quiconque à part toi.

Rien de tout cela n'est partagé, vendu, ni utilisé pour t'identifier ou te suivre.
Il n'y a rien à consentir, parce qu'il n'y a aucune collecte - seulement cet avis,
pour que tu saches ce qui est conservé et où. Efface tout à tout moment via
**Profil → Effacer toutes mes données**, ou en effaçant le stockage du site dans ton
navigateur. (Selon la directive ePrivacy art. 5(3), un stockage strictement
nécessaire au service que tu as demandé ne requiert pas de consentement - seulement
de la transparence, ce que sont à la fois ce document et l'avis dans l'application.)

Ta propre sauvegarde de ces données - le paquet `lolly-backup` produit par
**Exporter et tout générer** - est un fichier que tu conserves et contrôles. Il ne
touche jamais nos serveurs, sauf si tu choisis toi-même de l'envoyer quelque part.
Voir [Transfert de données](/info/data-transfer.html).

## Utilitaires sur ton appareil

Certains outils - **Strip Hidden Data**, **Compress PDF**, et d'autres portant le
badge **« Fonctionne sur ton appareil »** - travaillent sur un fichier que tu
fournis. Le fichier est lu en mémoire dans ton navigateur, transformé localement,
puis proposé au téléchargement. Il n'est jamais téléversé, parce qu'il n'y a aucun
serveur sur le chemin vers lequel le téléverser. Ces utilitaires fonctionnent hors
ligne, et leur résultat ne porte aucun filigrane ni aucune de nos métadonnées -
l'intérêt de la plupart d'entre eux est de retirer et protéger des données, pas
d'ajouter du risque.

## Quand l'application communique avec un réseau, en détail

Le tableau ci-dessous est la liste complète de tout ce que l'application récupère ou
envoie sur un réseau. Si ce n'est pas ici, l'application ne le fait pas.

| Quoi | Ce qui quitte réellement ton appareil | Quand |
|---|---|---|
| Synchronisation du catalogue d'outils | Rien de personnel - une requête vers l'index public des outils et assets de Lolly | Au démarrage, puis mis en cache hors ligne |
| La capacité réseau déclarée d'un outil | Ce que cet outil précis demande (par exemple des tuiles de carte) aux hôtes précis qu'il autorise dans son manifeste | Uniquement pendant l'utilisation de cet outil |
| Google Fonts | Le nom de la famille de police choisie et ton adresse IP, vers les serveurs de polices de Google | Uniquement si tu ajoutes une Google Font dans l'éditeur de marque - une récupération unique par famille, ensuite elle réside sur ton appareil |
| Vérification de signature SEAL | Une seule requête DNS pour une clé publique, vers le domaine nommé à l'intérieur du fichier vérifié | Uniquement si Verify trouve un enregistrement SEAL dans un fichier que tu vérifies - jamais le fichier lui-même |
| Modèles de détection pour l'analyse approfondie | Rien de personnel - un téléchargement unique de modèle depuis la même origine (pas un tiers) | Uniquement si tu actives l'analyse approfondie de Verify |
| Instance distante | Ce que renvoie l'instance que tu désignes, via la même synchronisation de catalogue décrite ci-dessus | Uniquement si tu pointes explicitement la coque vers un autre déploiement de Lolly |

Aucun de ces éléments n'envoie tes documents, projets, sessions ou fichiers
téléversés où que ce soit. Ils existent pour amener des choses *vers* ton appareil
(outils, polices, modèles, une clé publique), jamais pour en envoyer *depuis* lui, à
l'exception des cas nommés explicitement dans les sections ci-dessous.

## URL de rendu en lien direct

L'application elle-même reste entièrement sur ton appareil. Séparément, et uniquement
si tu l'utilises, lolly.tools (et toute instance auto-hébergée qui le laisse activé)
répond à des **URL de rendu en lien direct** -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - pour qu'un lien Lolly partagé
puisse apparaître comme une image vivante dans un README, un wiki ou un tableau de
bord. Récupérer l'une de ces URL demande au serveur de rendre **des données publiques
d'outils et de catalogue** avec les valeurs écrites dans l'URL, et c'est là tout
l'échange :

- **Aucun compte, aucun cookie, aucun état.** Le point d'accès est anonyme ; rien
  n'est stocké par requête, et rien sur ton appareil n'est lu. Tes documents,
  sessions et téléversements ne quittent jamais ton navigateur - ils ne peuvent pas
  du tout apparaître dans ces liens.
- **Les valeurs sont publiques par construction** - ce sont celles que l'auteur du
  lien a saisies dans l'URL, lisibles par toute personne que le lien atteint. Ne mets
  pas de secrets dans un lien partagé ; Lolly propose une fonction de chiffrement de
  lien pour les contenus sensibles.
- Les réponses sont **mises en cache et limitées en débit** comme n'importe quelle
  image publique, et marquées `noindex` pour que les moteurs de recherche
  n'indexent pas tes rendus.

Tu auto-héberges Lolly et ne veux pas de surface de rendu publique ? Définis
`LOLLY_DISABLE_RENDER_GET=1` et chacune de ces URL renvoie une erreur 404.

## Le serveur MCP (optionnel, pour les agents IA)

Lolly peut aussi être atteint par un agent IA via le Model Context Protocol - un
point d'accès exploité par un opérateur (lolly.tools en exploite un ; n'importe qui
peut héberger le sien, y compris totalement isolé du réseau). Il partage la posture
sans compte du chemin de rendu, plus deux outils qui manipulent nécessairement les
octets d'un fichier :

- **`lolly_transform`** (exécuter un utilitaire sur appareil côté serveur, pour le
  compte de l'agent appelant) et **`lolly_verify`** (vérifier les Content
  Credentials) acceptent tous deux les octets d'un fichier envoyés par l'appelant.
  Ils sont traités **dans le processus, en mémoire**, et le résultat est renvoyé dans
  ce même appel - le fichier n'est jamais écrit sur disque et jamais stocké une fois
  la requête terminée.
- Tous les autres outils - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - fonctionnent uniquement à partir de paramètres (texte,
  nombres, couleurs, URL, identifiants d'assets du catalogue), les mêmes valeurs que
  prend une URL de rendu en lien direct.
- L'accès se fait soit par un jeton partagé que l'opérateur délivre aux clients qu'il
  approuve, soit par OAuth 2.1 sans état : des jetons signés à courte durée de vie
  vérifiés contre un secret partagé, rien de stocké côté serveur, et le jeton
  lui-même n'est jamais écrit dans un journal ni dans une URL de rendu.

## Identité Content Credentials (une connexion que tu dois lancer toi-même)

Lolly peut sceller un **Content Credential** cryptographique dans tes exports pour
que n'importe qui puisse vérifier, hors ligne, qu'un fichier n'a pas été altéré
depuis qu'il a quitté Lolly. Cela, c'est **activé par défaut et entièrement local** -
la clé de signature est générée sur ton appareil, est **non extractible** (même le
code de Lolly ne peut pas la lire), et la signature elle-même se fait hors ligne.
Cette section couvre la seule étape *optionnelle* qui s'ajoute à cela : enregistrer
une identité vérifiée, pour que tes exports indiquent « Verified - signé par
\<ton email\> » au lieu d'une clé anonyme. **Si tu passes l'enregistrement, rien dans
cette section ne te concerne, et aucune donnée personnelle ne quitte jamais ton
appareil.**

Si tu t'enregistres, voici exactement ce qui se passe :

1. **Tu choisis une méthode de connexion** - GitHub, Google, SUSE (Okta), ou un lien
   envoyé par email. Pour les trois fournisseurs OIDC, tu es redirigé vers la page de
   connexion propre à ce fournisseur, régie par sa politique de confidentialité, pas
   la nôtre ; le service de certificats de Lolly ne reçoit en retour qu'une adresse
   email vérifiée et le nom du fournisseur. Pour le lien par email, l'adresse que tu
   saisis est transmise à **Resend**, une API d'email transactionnel, uniquement pour
   livrer ce seul lien.
2. **Un cookie à courte durée de vie protège la redirection.** C'est le seul cookie
   que dépose tout le système Lolly : `lolly_ca_state`, `HttpOnly`, limité à
   `/api/ca`, expirant en moins de dix minutes. Il porte une valeur aléatoire, pas un
   identifiant de suivi, et n'existe que pour empêcher la falsification de la
   redirection OAuth. Il est effacé dès que la connexion se termine.
3. **Ton adresse IP est utilisée, brièvement, pour prévenir les abus** des points
   d'accès de connexion (afin qu'un script ne puisse pas inonder une boîte de
   réception ni épuiser le quota d'emails) - conservée en mémoire serveur uniquement,
   pour une fenêtre glissante d'environ une minute, jamais écrite dans un journal ni
   conservée nulle part.
4. **Le service de certificats délivre un certificat à courte durée de vie** (7, 30,
   90 ou 365 jours, à ton choix, plafonné par la politique de l'opérateur) liant ton
   email vérifié à la moitié publique de la paire de clés générée sur ton appareil.
   La moitié privée ne quitte jamais ton navigateur.
5. **La délivrance est journalisée** : ton adresse email, le fournisseur utilisé, un
   court hash du numéro de série du certificat, et sa date d'expiration, écrits dans
   les journaux opérationnels du service - et, seulement si l'opérateur en a configuré
   un, vers un webhook qu'il contrôle. C'est le seul endroit où une donnée
   personnelle te concernant est conservée sur un serveur, et il existe pour qu'un
   certificat compromis ou mal délivré puisse être retracé et pour que la délivrance
   de la CA puisse être auditée.
6. **Ensuite, la signature se refait hors ligne** pour toute la durée de vie du
   certificat. Exporter un fichier ne contacte jamais le service de certificats -
   seul l'enregistrement le faisait.

Pour lolly.tools en particulier : SUSE exploite le service de certificats et détient
ces journaux de délivrance. Voir [Tes droits](#your-rights) ci-dessous pour savoir
comment poser une question sur une entrée ou la faire supprimer.

## L'extension de navigateur

L'extension de navigateur **Lolly URL Screenshot** ne collecte, ne stocke, ni ne
transmet aucune donnée personnelle. Aucun système d'analyse, aucun suivi, aucun
serveur distant.

**Ce qu'elle fait.** Quand tu demandes à l'application web Lolly de capturer une URL,
l'extension ouvre cette page dans un onglet d'arrière-plan temporaire, la capture
dans ton navigateur via le DevTools Protocol, renvoie l'image à l'application, puis
ferme l'onglet. Tout se passe localement, sur ton propre appareil et réseau.

**Données.**

- **Nous ne collectons rien.** L'extension n'a aucun serveur et ne fait aucune
  requête réseau de son propre chef.
- **Les images capturées** vont directement à l'application Lolly dans le même
  navigateur - jamais téléversées par l'extension.
- **Les URL que tu captures** ne servent qu'à charger cette page unique pour cette
  capture unique. Elles ne sont ni enregistrées ni partagées.

**Autorisations.**

- **`debugger`** - pour capturer la page rendue via le DevTools Protocol (le même
  mécanisme qu'utilise l'application de bureau Lolly).
- **`tabs`** - pour ouvrir et fermer l'onglet temporaire dans lequel la page se
  charge.
- **Accès aux hôtes (`<all_urls>`)** - car la page que tu choisis de capturer peut se
  trouver sur n'importe quel site. Chrome présente cela à l'installation comme un
  avertissement d'autorisation étendue ; l'extension ne visite jamais que l'URL que
  tu lui donnes.

Aucune de ces autorisations n'est utilisée pour lire, surveiller, ou transmettre ta
navigation au-delà de cette seule capture demandée.

## Journaux d'infrastructure

Comme tout site web, les serveurs derrière lolly.tools - et derrière tout déploiement
de Lolly - génèrent des journaux d'accès de serveur web standard chaque fois qu'une
requête les atteint : adresse IP, chemin demandé, horodatage, agent utilisateur,
conservés pendant une durée limitée à des fins de sécurité et de prévention des abus.
C'est un comportement d'hébergement de base, pas quelque chose que Lolly ajoute
par-dessus, et cela ne contient jamais le contenu de tes documents, parce que
ceux-ci n'atteignent jamais un serveur au départ. La seule exception délibérée est un
fichier que tu remets explicitement à un appel MCP `lolly_transform` ou
`lolly_verify`, qui est traité en mémoire et jamais écrit sur disque ni dans un
journal, comme décrit ci-dessus.

## Confidentialité des enfants

Lolly ne collecte sciemment aucune information personnelle de quiconque, quel que
soit son âge, dans le cadre ordinaire de l'utilisation de l'application - il n'y a
rien à collecter. Le seul endroit où une information personnelle (une adresse email)
est jamais recueillie est l'enregistrement Content Credentials décrit ci-dessus, qui
n'est ni destiné ni adressé aux enfants.

## Tes droits

Parce que presque tout ce que touche Lolly n'est stocké que sur ton propre appareil,
la plupart de ce que le droit de la protection des données appelle « tes droits » -
accès, rectification, effacement, portabilité - sont des choses que tu peux déjà
faire toi-même, instantanément, sans demander à personne : tes données résident dans
le stockage de ton navigateur, sous une forme que tu peux inspecter, exporter
(**Exporter et tout générer**, ci-dessus), ou supprimer (**Profil → Effacer toutes
mes données**).

Pour la seule donnée personnelle qui peut se retrouver sur un serveur - ton adresse
email, si tu t'es enregistré pour les Content Credentials - contacte-nous
(ci-dessous) pour demander ce que nous détenons ou pour la faire retirer des journaux
actifs. Retirer une entrée de journal ne révoque pas un certificat déjà délivré (il
est à courte durée de vie par conception et expire simplement) ; cela empêche cette
entrée d'apparaître dans les futurs exports du journal.

Nous ne vendons pas de données. Nous n'en avons aucune à vendre.

## Modifications de cette politique

La date en haut change chaque fois que ce document change. Une modification qui
altère ce qui quitte ton appareil ou ce qui est conservé obtient sa propre ligne ici,
pas une retouche silencieuse - si tu veux voir ce qui a changé, demande (ci-dessous)
ou compare avec la
[source publique](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contact

Des questions, ou une demande au titre de « Tes droits » ci-dessus :
**Andy Fitzsimon**, [fitzy@suse.com](mailto:fitzy@suse.com). Pour une instance Lolly
auto-hébergée ou d'entreprise, contacte plutôt celui qui l'exploite - SUSE et le
projet open source Lolly ne détiennent aucune donnée pour les déploiements qu'ils
n'exploitent pas.
