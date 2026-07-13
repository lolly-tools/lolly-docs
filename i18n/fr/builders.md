# Lolly pour les développeurs

La documentation technique - pour toute personne qui crée des outils, intègre Lolly dans un pipeline, l'auto-héberge, ou étend la plateforme.

**Ce que tu y gagnes.** Crée un outil une fois, et la demande arrête de te revenir. L'éternel « tu peux juste me faire un… » qui te bouffe tes après-midis devient un template que les autres remplissent eux-mêmes - correctement, sans que tu sois dans la boucle. Ton travail, c'est du HTML/CSS/JS pur : versionné, diffable, relisable, et il tourne sur un moteur ouvert sans dépendance à un fournisseur, donc ça reste à toi. Automatise la chaîne de production, et ton temps va au problème intéressant, pas au dix-millième export.

Lolly est un **moteur** indépendant de la plateforme qui exécute le même chemin de rendu sur plusieurs **shells** (PWA web, Tauri desktop/mobile, CLI, TUI). Les outils sont des **données, pas du code embarqué** - un manifeste, plus un template, plus des hooks optionnels - si bien que les nouveaux outils sont livrés sans mise à jour de l'application. Commence par la [Vue d'ensemble](/info/overview.html) pour l'architecture, puis suis le parcours adapté à ce que tu construis.

Nouveau sur la plateforme ? Le **[Guide de démarrage rapide](/info/quickstart.html)** met en place une marque et ton premier rendu avant d'aller plus loin.

## Comprendre l'architecture

- **[Vue d'ensemble](/info/overview.html)** - pourquoi Lolly existe, la séparation moteur/shell/outils, le pont de capacités, et les décisions d'architecture arrêtées.
- **[Jetons de design](/info/design-tokens.html)** - le modèle de jetons DTCG dans lequel les marques sont exprimées, et comment les outils les consomment.

## Créer des outils

- **[Guide de création d'outils](/info/authoring-tools.html)** - le guide complet : manifeste, template, styles, hooks, composition et publication.
- **[Créer des assets](/info/authoring-assets.html)** - assets du catalogue, niveaux, locales, palettes, icônes thémables et polices.
- **[API Host](/info/host-api.html)** - le pont de capacités `HostV1` sur lequel chaque outil est écrit (la seule API que voient les outils).
- **[Mode URL](/info/url-mode.html)** - chaque entrée sous forme de paramètre d'URL ; paramètres réservés, encodage compact, liens compactés.

## Exécuter et intégrer

- **[CLI](/info/cli.html)** - rendu headless ; le même chemin de rendu que l'interface graphique, piloté par des arguments `--foo=bar`.
- **[TUI](/info/tui.html)** - le shell terminal interactif.
- **[Serveur MCP](/info/mcp.html)** - le point de terminaison natif qui permet à un agent IA de découvrir et d'exécuter des outils.
- **[Agents IA](/info/ai-agents.html)** - piloter Lolly depuis un modèle : une URL, c'est l'API.
- **[Extension Chrome](/info/extension.html)** - capture une URL en direct sous forme d'asset réutilisable.

## Livrer et exploiter

- **[Guide de build](/info/build-guide.html)** - compile chaque cible : CLI, TUI, desktop, mobile.
- **[Déploiement](/info/deployment.html)** - l'appli web, les applis, et les services backend ; où s'exécute chaque partie.
- **[Configuration](/info/configuration.html)** - profils, packs de marque, contrôle des capacités, feature flags, et validation du catalogue.

## Confiance et données

- **[Identité Content Credentials](/info/content-credentials-identity.html)** - signature délivrée par une autorité de certification (AC) pour le C2PA sur l'appareil ; contrats du moteur et runbook opérateur.
- **[Transfert de données](/info/data-transfer.html)** - le bundle `lolly-backup` : enveloppe, intégrité, et garanties inter-shells.
- **[À propos](/info/about.html)** - le projet, le périmètre de sa licence, et le dépôt.
