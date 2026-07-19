# Démarrage rapide

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Lolly transforme tes règles - couleurs, typographie, mises en page, logique - en outils que n'importe qui peut utiliser pour créer des fichiers finis : images, PDF, cartes sociales, vidéo, en remplissant simplement quelques champs. Il n'y a rien à apprendre et rien à téléverser : tout fonctionne sur ton appareil, en ligne comme hors ligne.

C'est la page à lire en premier. Deux choses te rendent opérationnel : **fais de Lolly le tien** (oriente-le vers ta marque), et **importe ce que tu as déjà** (tes fichiers de design et tes tokens). Tout le reste n'est qu'à un lien de distance.

> Nouveau sur Lolly et tu veux juste créer quelque chose ? Ouvre l'application, choisis n'importe quel outil dans la galerie, remplis les champs, et clique sur **Rendu**. Reviens ici quand tu voudras qu'il porte *ta* marque.

## 1. Fais-en le tien - configure ta marque

Ta marque dans Lolly est un petit document de **tokens de design** - couleurs, polices, et quelques règles - sur lequel chaque outil s'appuie pour son rendu. Configure-la une fois, et tout ce que tu crées est conforme à la marque par construction, pas par relecture. Il y a trois façons d'y accéder ; choisis celle qui correspond à l'endroit où ta marque vit déjà.

### Partir de zéro (l'assistant)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

Au premier lancement, tu atterris sur l'écran **Démarrage** (`#/start`). Donne-lui un nom et une couleur principale, et Lolly *dérive* une palette complète et accessible à partir de celle-ci - surfaces claires/sombres, texte, accents - en utilisant les mêmes calculs de couleur que le moteur utilise partout ailleurs. Choisis une police, et tu as une marque fonctionnelle en moins d'une minute. Tu peux tout affiner plus tard.

### Importer une marque que tu as déjà

Si ta marque est déjà saisie sous forme de tokens de design - depuis **Penpot**, **Tokens Studio** (Figma), ou n'importe quel fichier **DTCG** simple - importe-la en bloc plutôt que de tout ressaisir. Deux façons de faire :

- **Dans l'application :** l'écran Démarrage et l'éditeur *Ta marque* acceptent directement un fichier de tokens (ou un pack `LollyBrand`) - dépose-le et la palette s'anime.
- **Depuis la ligne de commande**, pour mettre en place un pack de marque réutilisable :

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` accepte les trois formats que Penpot / Tokens Studio exportent pour le même document - un unique `tokens.json`, un répertoire (`$metadata.json` + fichiers par ensemble), ou une archive `project.penpot`. Avec `--activate`, il enregistre la marque comme profil, bascule dessus, et reconstruit le catalogue. Voir [Configuration](/info/configuration.html) pour savoir comment les packs de marque et les profils s'articulent.

### L'affiner dans l'application

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

Une fois une marque active, l'éditeur **Ta marque** du tableau de bord (`#/d`) est un éditeur en direct - change une couleur ou un rôle, et chaque aperçu de la page se met à jour au fur et à mesure que tu tapes. La même marque est résumée sur la carte **Profil → Ta marque**. Les polices sont réelles : choisis-en une dans Google Fonts, et Lolly enregistre le fichier **sur ton appareil** comme ressource de marque, si bien que ta typographie voyage hors ligne et que rien n'est récupéré au moment du rendu.

Quand tu es satisfait, **exporte la marque sous forme de pack `LollyBrand`** - un seul fichier qu'un collègue peut importer pour obtenir exactement la même palette, les mêmes polices et les mêmes règles. C'est ainsi qu'une marque circule entre personnes et machines sans serveur intermédiaire.

> **Les tokens de marque font l'aller-retour dans les deux sens.** Parce que la marque de Lolly *est* des tokens DTCG - le format que Penpot lit et écrit nativement et que Tokens Studio apporte à Figma - la palette avec laquelle tu conçois et la palette que Lolly *impose* sont un seul et même document, pas deux listes que tu synchronises à la main. Voir [Tokens de design](/info/design-tokens.html).

## 2. Importe ce que tu as déjà

Tu ne pars pas d'une page blanche. Lolly ouvre le travail de design et les formats ouverts que tu possèdes déjà.

### Fichiers de design open source

Le travail terminé dans **Figma, Penpot, Illustrator, InDesign, ou n'importe quelle application SVG** n'a pas à rester enfermé dans l'application où tu l'as dessiné. Ouvre **Studio de mise en page**, clique sur **Importer un design**, et le fichier s'ouvre comme une *mise en page vivante* - pas une image aplatie. Chaque calque devient une boîte modifiable : le texte reste modifiable, les formes restent des formes, les images atterrissent dans ta bibliothèque, et l'art vectoriel complexe est préservé fidèlement. Il arrive déjà conforme à tes polices de marque et à tes règles de couleur.

| Tu as | Importe-le comme |
|---|---|
| Une frame Figma | `.fig` natif (File → Save local copy), ou un export SVG |
| Un design Penpot | Son export `.penpot`, ou n'importe quel SVG |
| Un fichier Illustrator | `.ai` natif (compatible PDF) ou `.pdf` - s'ouvre directement |
| Une mise en page InDesign | `.idml` (File → Export → InDesign Markup) |
| Tout le reste | **N'importe quel SVG** - la porte d'entrée universelle |

L'import se fait entièrement **sur ton appareil** - le fichier est analysé dans ton navigateur, et rien n'est téléversé. Les détails complets, ainsi que ce qui est exactement conservé, se trouvent dans [Importer un design](/info/design-import.html).

### D'une création unique à un modèle

Voici la récompense : une mise en page importée est une session Studio de mise en page ordinaire, donc dès que tu l'**enregistres**, elle vit à une URL. N'importe qui possédant Lolly peut ouvrir cette URL, changer les mots, remplacer une image, et produire sa propre version - sans application de design, et les parties verrouillées restent verrouillées. Un design ponctuel devient un outil réutilisable. C'est toute l'idée, atteinte sans écrire une seule ligne de configuration.

### Données ouvertes et outils ouverts

L'[ensemble d'outils communautaires](/info/builders.html) est open source et indépendant de toute marque - codes QR, cartes routières, filtres, utilitaires de confidentialité - et il produit son rendu par rapport à *ta* marque dès que tu l'actives. Alimente aussi les outils avec tes propres données ouvertes : colle ou dépose un tableau **CSV** ou **JSON**, et les champs répétitifs d'un outil s'en remplissent, un fichier fini par ligne.

## 3. Crée quelque chose, puis partage-le ou automatise-le

Avec une marque active et ton matériel en main, chaque outil produit un fichier fini :

- **Produis le rendu** de n'importe quel outil en **SVG, PDF, PNG, JPG, WebP, vidéo**, et plus encore - aux véritables dimensions d'impression et en unités physiques quand tu en as besoin. Voir [Export et formats](/info/exporting.html).
- **Partage un lien.** Chaque état d'outil est une URL, donc un fichier fini est reproductible et adressable par paramètres - archive le lien, régénère à la demande.
- **Fais-le en masse.** Pilote un modèle depuis une feuille de calcul dans la [grille de traitement par lots](/info/exporting.html) : un fichier fini par ligne.
- **Automatise-le.** Le même rendu s'exécute depuis la [CLI](/info/cli.html) et depuis un [agent IA](/info/ai-agents.html) - une URL est l'API.

## Où aller ensuite

Trois parcours, selon ce que tu es venu faire ici :

- **[Lolly pour les créateurs](/info/creators.html)** - tu crées des choses. Les avantages, et comment tirer le meilleur parti de l'application.
- **[Lolly pour les développeurs](/info/builders.html)** - tu conçois des outils, intègres, et déploies. La documentation technique.
- **[Lolly pour les opérateurs](/info/operators.html)** - tu es responsable de la marque, de la sécurité, et du déploiement dans une organisation.
