# Politique de confidentialité

*Dernière mise à jour : juin 2026*

## L'application Lolly

Lolly fonctionne entièrement dans ton navigateur. **Nous ne collectons rien, ne transmettons rien, et n'avons aucun serveur qui voit tes données.** Il n'y a aucun système d'analyse, aucun suivi, et aucun tiers d'aucune sorte.

**Aucun cookie — nulle part.** Lolly ne dépose jamais de cookie. Pour faire fonctionner l'application, elle conserve une petite quantité de données **sur ton propre appareil**, toutes strictement nécessaires à une fonctionnalité que tu utilises :

- **Ton thème clair/sombre** et quelques préférences d'interface (largeur de la barre latérale, zoom).
- **Un cache hors ligne du catalogue d'outils**, pour que la galerie se charge même sans connexion.
- **Des compteurs d'utilisation purement locaux** pour les petites statistiques de ta fiche de profil — ils ne sont jamais envoyés nulle part.
- **Tes propres documents et sessions enregistrées**, stockés localement dans le navigateur (IndexedDB) afin que ton travail persiste d'une visite à l'autre.

Rien de tout cela n'est partagé, téléversé, ou utilisé pour t'identifier ou te suivre, il n'y a donc rien à consentir — seulement cet avis, pour que tu saches ce qui est conservé. Tu peux tout effacer à tout moment via **Profil → Effacer toutes mes données**, ou en effaçant le stockage du site dans ton navigateur.

Ce site de documentation (`/info`) est encore plus léger : il ne dépose **aucun cookie**, ne stocke que ta préférence clair/sombre sur ton appareil, et sert tout — polices comprises — depuis lolly.tools lui-même, sans CDN ni requête tierce.

## Utilitaires sur ton appareil

Certains outils sont des **utilitaires** qui travaillent sur un fichier que *toi* tu fournis — par exemple **Strip Hidden Data**, qui affiche les données cachées dans une image ou un PDF (localisation GPS, appareil photo, auteur, éditeur et métadonnées du document) et te rend une copie propre, ou **Compress PDF**, qui réduit la taille d'un PDF en réencodant ses images directement sur ton appareil.

Ceux-ci fonctionnent **entièrement dans ton navigateur**. Le fichier que tu choisis est lu en mémoire sur ton appareil, transformé localement, puis proposé au téléchargement. **Il n'est jamais téléversé** — il n'y a aucun serveur vers lequel le téléverser. La copie nettoyée ne porte aucun filigrane et aucune de nos propres métadonnées d'identification ; tout l'intérêt est de *retirer* des données, pas d'en ajouter. Rien n'est stocké après ton départ, et ces utilitaires fonctionnent hors ligne. Tu verras un badge **« Fonctionne sur ton appareil — rien n'est téléversé »** sur chacun d'eux.

C'est l'inverse du site typique « compresse ce PDF » / « convertis ce HEIC », qui téléverse ton fichier sur le serveur d'un inconnu pour faire un travail que ton navigateur peut faire localement.

## L'extension de navigateur

L'extension de navigateur **Lolly URL Screenshot** ne collecte, ne stocke, ni ne transmet aucune donnée personnelle. Aucun système d'analyse, aucun suivi, aucun serveur distant.

## Ce qu'elle fait

Quand tu demandes à l'application web Lolly ([lolly.tools](https://lolly.tools)) de capturer une URL, l'extension ouvre cette page dans un onglet d'arrière-plan temporaire, la capture dans ton navigateur via le DevTools Protocol, renvoie l'image à l'application, puis ferme l'onglet. Tout se passe localement, sur ton propre appareil et réseau.

## Données

- **Nous ne collectons rien.** L'extension n'a aucun serveur et ne fait aucune requête réseau de son propre chef.
- **Les images capturées** vont directement à l'application Lolly dans le même navigateur — jamais téléversées par l'extension.
- **Les URL que tu captures** ne servent qu'à charger cette page unique pour cette capture unique. Elles ne sont ni enregistrées ni partagées.

## Autorisations

- **`debugger`** — pour capturer la page rendue via le DevTools Protocol (le même mécanisme utilisé par l'application de bureau Lolly).
- **Accès aux onglets** — pour ouvrir et fermer l'onglet temporaire dans lequel la page se charge.
- **Accès aux hôtes** — car la page que tu choisis de capturer peut se trouver sur n'importe quel site.

Aucune de ces autorisations n'est utilisée pour lire, surveiller, ou transmettre ta navigation.

## Contact

Des questions ? Consulte [lolly.tools](https://lolly.tools).
