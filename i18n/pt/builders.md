# Lolly para Desenvolvedores

A documentação técnica - para quem cria ferramentas, integra o Lolly a um pipeline, faz o self-host dele ou estende a plataforma.

**O que você ganha com isso.** Construa uma ferramenta uma vez e o pedido para de voltar pra você. Aquele "você pode só fazer um pra mim…" repetitivo que consome suas tardes vira um template que as outras pessoas preenchem sozinhas - direitinho, sem você precisar entrar no meio. Seu trabalho é HTML/CSS/JS puro: versionado, fácil de comparar, revisável, e roda sobre um engine aberto, sem vendor lock-in, então continua sendo seu. Automatize a produção e seu tempo vai para o problema interessante, não para a exportação número dez mil.

O Lolly é um **engine** independente de plataforma que executa o mesmo caminho de renderização em vários **shells** (web PWA, Tauri desktop/mobile, CLI, TUI). As ferramentas são **dados, não código empacotado** - um manifest, mais um template, mais hooks opcionais - então novas ferramentas são lançadas sem precisar de uma atualização do app. Comece pela [Visão Geral](/info/overview.html) para entender a arquitetura, e depois siga a trilha que combina com o que você está construindo.

Novo na plataforma? O **[Guia Rápido](/info/quickstart.html)** coloca uma marca e o seu primeiro render no lugar antes de você se aprofundar.

## Entenda a arquitetura

- **[Visão Geral](/info/overview.html)** - por que o Lolly existe, a separação entre engine/shell/tools, a bridge de capacidades e os compromissos arquiteturais já definidos.
- **[Design Tokens](/info/design-tokens.html)** - o modelo de tokens DTCG em que as marcas são expressas, e como as ferramentas os consomem.

## Crie ferramentas

- **[Criação de Ferramentas](/info/authoring-tools.html)** - o guia completo: manifest, template, estilos, hooks, composição e publicação.
- **[Criação de Assets](/info/authoring-assets.html)** - assets do catálogo, tiers, locales, paletas, ícones temáveis e fontes.
- **[API do Host](/info/host-api.html)** - a bridge de capacidades `HostV1` contra a qual toda ferramenta é escrita (a única API que as ferramentas veem).
- **[Modo URL](/info/url-mode.html)** - cada input como um parâmetro de URL; parâmetros reservados, codificação compacta, links compactados.

## Execute e integre

- **[CLI](/info/cli.html)** - renderização headless; o mesmo caminho de renderização da GUI, controlado por argv no formato `--foo=bar`.
- **[TUI](/info/tui.html)** - o shell de terminal interativo.
- **[Servidor MCP](/info/mcp.html)** - o endpoint nativo que permite que um agente de IA descubra e execute ferramentas.
- **[Agentes de IA](/info/ai-agents.html)** - controlando o Lolly a partir de um modelo: uma URL é a API.
- **[Extensão do Chrome](/info/extension.html)** - capture uma URL ao vivo como um asset reutilizável.

## Publique e opere

- **[Guia de Build](/info/build-guide.html)** - compile cada target: CLI, TUI, desktop, mobile.
- **[Implantação](/info/deployment.html)** - o app web, os apps e os serviços de backend; onde cada peça roda.
- **[Configuração](/info/configuration.html)** - profiles, brand packs, capability gating, feature flags e validação do catálogo.

## Confiança e dados

- **[Identidade de Content Credentials](/info/content-credentials-identity.html)** - assinatura emitida por uma CA para C2PA no dispositivo; contratos do engine e o runbook do operador.
- **[Transferência de Dados](/info/data-transfer.html)** - o bundle `lolly-backup`: envelope, integridade e garantias entre shells.
- **[Sobre](/info/about.html)** - o projeto, o limite da sua licença e o repositório.
