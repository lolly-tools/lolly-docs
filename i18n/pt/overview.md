# Visão Geral

Este documento registra o propósito, a estrutura e as decisões arquiteturais da plataforma Lolly. Ele reflete tanto a visão do produto quanto o estado atual do código-fonte.

> **Status:** o Lolly é um protótipo interno em um **piloto fechado que ainda não foi concluído**. O engine é determinístico e internamente consistente, mas o produto está em estágio inicial — a SUSE é a cliente número um — e seus engines de criptografia e de parsing de arquivos estão atualmente passando pelo rigoroso hardening de infraestrutura da SUSE, se preparando para escala corporativa (somos muito bons nisso). Leia a arquitetura abaixo como intenção de design em teste, não como um produto finalizado e certificado. Veja [Adoção e Governança](/info/adoption-governance.html#status) para saber como o piloto é conduzido e avaliado.

---

## Por que isso existe

Equipes enfrentam um problema recorrente: trabalho criativo e de conteúdo repetível que é previsível demais para justificar mãos especializadas toda vez, mas sensível demais em qualidade para ser delegado sem barreiras de proteção. O resultado é baixa vazão (gargalo do especialista), inconsistência (pessoas usando qualquer ferramenta que tenham à mão), ou lock-in de fornecedor (um DAM SaaS que controla seus templates).

Esta plataforma é a resposta estrutural:

> **Conteúdo e criativos programáticos em escala** — geração de ativos sem esforço manual, com as regras sob controle central, para funcionários, fornecedores e parceiros.

O resultado é **abundância**: todo evento tem a sinalização correta, todo alerta de CVE segue o estilo da casa, toda etiqueta imprime limpa, toda assinatura de e-mail está atualizada — tudo isso sem abrir um chamado de design. A plataforma cuida do criativo operacionalizado recorrente. Ela deliberadamente não é uma ferramenta de criação sob medida — os designers continuam donos do trabalho de destaque.

### Onde ele se encaixa no panorama

| Capacidade | Canva | Portais de marca | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Geração de conteúdo em massa | parcial | ✗ | ✗ | ✗ | **✓** |
| Funciona totalmente offline | ✗ | ✗ | ✓ | parcial | **✓** |
| Lógica de template e restrições rígidas | ✗ | parcial | ✗ | parcial | **✓** |
| Não exige habilidade de design | parcial | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automáticas | ✗ | ✗ | parcial | ✗ | **✓** |
| Ferramentas compõem outras ferramentas | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine aberto, sem prisão a SaaS | ✗ | ✗ | ✗ | parcial | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| Proveniência forense opcional (opt-in) | ✗ | ✗ | ✗ | ✗ | **✓** |
| Apps para celular e desktop | ✓ | ✗ | ✗ | parcial | **✓** |
| Linha de comando e TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

A lacuna é clara: nada no panorama existente nos entrega um resultado baseado em restrições, capaz de funcionar offline, de baixa exigência de habilidade, e acessível internamente. O Lolly inclui até um canvas aberto — o **Layout Studio** — onde cores, tipografia e ativos seguem os globais de marca, de modo que o arranjo livre permanece baseado em restrições. O que ele **não** é é uma suíte de design irrestrita: os designers continuam usando Illustrator e Figma para o trabalho principal sob medida. Permutações podem ser montadas com esta ferramenta.

**Use para:** Geração rápida de ativos criativos operacionalizados — cards de evento, crachás, assinaturas, alertas de CVE, QR codes, cards para redes sociais, etiquetas de remessa, relatórios estruturados.

**Não use para:** Conteúdo hero sob medida.

---

## A visão de conjunto

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Estrutura do repositório

```
lolly/
├── engine/           # Núcleo independente de plataforma. Open source (MPL-2.0).
│   └── src/
│       ├── index.ts          # superfície pública — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # busca e valida os arquivos da ferramenta
│       ├── runtime.ts        # orquestra o ciclo de vida de 5 etapas
│       ├── template.ts       # hidratação do Handlebars + annotateTemplate
│       ├── inputs.ts         # manifest → modelo de input do runtime
│       ├── url-mode.ts       # ida e volta URL ↔ estado do input
│       ├── validate.ts       # validação de manifests via JSON Schema
│       ├── compose.ts        # resolve renders aninhados de ferramentas (composes)
│       ├── embed.ts          # faz parse de URLs de embed portáveis do lolly.tools
│       └── bridge/
│           └── host-v1.ts    # interface TypeScript — o contrato da bridge
│
├── shells/
│   ├── web/          # PWA — hospedado online; distribuição principal
│   │   └── src/
│   │       ├── main.ts           # boot, roteamento
│   │       ├── theme.ts          # aplicar/persistir tema (prevenção de FOUC)
│   │       ├── bridge/           # implementações web das APIs do HostV1
│   │       │   ├── index.ts      # compõe todas as peças da bridge
│   │       │   ├── db.ts         # configuração do IndexedDB
│   │       │   ├── state.ts      # host.state — edições salvas
│   │       │   ├── profile.ts    # host.profile — dados do usuário
│   │       │   ├── assets.ts     # host.assets — catálogo + uploads do usuário
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterizar/serializar
│   │       │   ├── net.ts        # host.net — fetch com lista de permissões
│   │       │   └── media.ts      # host.media — frames de câmera ao vivo (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # sincronização do catálogo no boot + cache offline
│   │       ├── styles/           # CSS de todo o app (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # listagem da biblioteca de ferramentas + cards de estado salvo
│   │           ├── tool.ts       # monta uma ferramenta (inputs + canvas + ações)
│   │           ├── picker.ts     # UI do seletor de ativos (chamada por host.assets)
│   │           ├── profile.ts    # editor de dados do usuário
│   │           ├── projects.ts   # /p — pastas de sessões salvas (aninhadas; exportação de pasta/seleção)
│   │           └── free-canvas.ts # overlay do editor de canvas livre para ferramentas render.layout:"editor"
│   │
│   ├── cli/          # CLI em Node.js — mesmo engine, jsdom headless
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → grava o arquivo
│   │       └── bridge.ts # implementação do HostV1 para a CLI
│   │
│   ├── tui/          # Shell de terminal interativo (Ink) — reaproveita a bridge da CLI
│   │   └── src/
│   │       ├── main.tsx  # app em tela cheia: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # bridge da CLI + estado em disco em ~/.lolly
│   │
│   ├── tauri-desktop/ # app de desktop para download
│   └── tauri-mobile/  # app iOS/Android
│
├── tools/            # VIEW de profile (gitignored) — dados, não código. Mesclado a partir de pacotes:
│                     #   community/ (público, independente de marca, MPL) + brands/<active>/tools (pertencente à marca).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — clima/hora/mapa (buscado por um script inline no template)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # blocks tipados/heterogêneos (discriminador addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — logo de marca com troca automática
│   ├── street-map/        # mapas vetoriais offline de quarteirões
│   ├── url-shot/          # "URL Screenshot" (capacidade capture)
│   ├── strip-data/        # remoção de metadados no dispositivo — JPEG/PNG/SVG/PDF (arquivo entra → arquivo limpo sai)
│   ├── compress-pdf/      # compressor de PDF no dispositivo — recomprime imagens (arquivo entra → arquivo menor sai)
│   ├── brand-lockup/      # "Brand Lockup" — lockups de logo da SUSE; texto-para-path via HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # gráficos SVG a partir de dados estruturados
│   ├── filter-duotone/    # tratamento de foto em duas cores
│   ├── filter-halftone/   # foto → grade de pontos halftone vetorial
│   ├── filter-scanline/   # foto → grade de scanline posterizada retrô (SVG / raster transparente)
│   ├── meeting-planner/   # agendador de reuniões com fusos horários globais
│   ├── calendar-ics/      # evento → arquivo de calendário .ics mais um card
│   ├── digi-ad/           # "Animated Ad" — banner em loop a partir de cenas
│   ├── event-name-badge/  # crachás de conferência — compõe qr-code como um SVG
│   ├── wayfinding-signage/ # sinalização de eventos; blocks de direção ajustam o texto do rótulo automaticamente
│   ├── text-helper/       # workbench de texto no dispositivo (formatar/decodificar/hash/desidentificar)
│   ├── layout-studio/     # "Layout Studio" — canvas de editor WYSIWYG livre (render.layout: editor)
│   ├── multi-page-pdf/    # documento PDF multipágina — capa, blocks de conteúdo fluido, contracapa
│   ├── diagram-builder/   # diagramas de organograma / layercake / processo / ciclo / pirâmide
│   ├── logo-wall/         # muitos logos → grade com empacotamento automático
│   ├── logo-lockup-partner/ # lockup de co-marca SUSE + parceiro
│   ├── web-icon/          # favicon .ico / png / svg a partir de texto + cores
│   ├── filter-posterize/  # foto → separações vetoriais posterizadas planas
│   ├── filter-pixel-stretch/ # foto → efeito de borrão de pixel
│   ├── lottie-digi-ad/    # banners de anúncio animados em Lottie
│   └── pose-geeko/        # posicione o mascote SUSE Geeko — imagens estáticas prontas para impressão
│
├── catalog/
│   ├── tools/index.json        # registro de ferramentas
│   └── assets/
│       ├── index.json          # registro de ativos
│       └── suse/...            # logo, paleta, etc.
│
├── schemas/          # JSON Schema para tool.json, entradas de asset, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # testes do engine
└── docs/             # este arquivo + guias de criação + posicionamento
```

---

## Modelo de entrega da plataforma

A plataforma roda em diversas superfícies — web PWA, Tauri desktop/mobile, a CLI com suporte a scripts, e a TUI interativa. Todas elas usam o mesmo engine e os mesmos arquivos de ferramentas.

### Web (PWA) — distribuição principal
Hospedado em uma URL controlada pela SUSE. Funciona offline assim que o service worker armazenar em cache as ferramentas e os ativos. É aqui que a maioria dos funcionários, fornecedores e parceiros vai usar a plataforma. Não é necessária conta — o estado é armazenado no IndexedDB, por dispositivo.

O shell web é responsivo a partir de um único layout. No desktop, uma ferramenta é uma barra lateral de controles redimensionável ao lado de uma área de pré-visualização com navegação de canvas nativa de trackpad (Cmd/Ctrl+roda ou pinça para dar zoom em torno do cursor, Espaço ou arraste com o botão do meio para movimentar, teclas `0`/`1`/`+`/`−`, e um HUD de Ajustar/%). No celular (≤640px) os controles viram uma folha ancorada no topo, com uma alça de arraste que se encaixa em peek/half/full (espiada/meia/cheia) — o toque alterna — sobre uma pré-visualização estática em tela cheia, e um botão flutuante **Renderizar** abre os controles de **Exportação** em um popup do tipo bottom-sheet. No toque, há pinça para zoom e arraste para movimentar na pré-visualização. O caminho de renderização e os controles de exportação são idênticos nos dois casos — só o chrome (a moldura da interface) se reorganiza.

**Modo em lote (`/pro`).** O shell web também traz uma grade em lote no estilo planilha (`shells/web/src/pro/`) que renderiza muitas linhas de uma vez em uma ou várias ferramentas. Ela faz ida e volta de CSV/TSV, além de colar de planilha, template/formato/tamanho/unidade/dpi por linha, um painel lateral de editor de blocks com pré-visualização ao vivo, colunas de exportação recolhíveis, uma barra de tags de "relevância" por linha, reordenação de linhas por alça de arraste à esquerda, confirmação de exclusão em duas etapas, sessões de lote salvas, e um download em `.zip`. Esta é a superfície um-para-muitos por trás do posicionamento de "geração de conteúdo em massa".

### Tauri desktop / mobile
App nativo empacotado (footprint pequeno via Tauri). Oferece disponibilidade offline completa, acesso ao sistema de arquivos para ferramentas dependentes de CLI (PDF Smasher, Font Outliner), e acesso à câmera. Programado para o aprimoramento de ferramentas de meados de 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Usuários de desktop podem invocar muitas ferramentas a partir do terminal. O shell da CLI carrega o mesmo engine, cria um DOM via jsdom, executa o mesmo caminho de renderização, e grava o arquivo. O modo URL é o transporte — a CLI não é uma implementação separada. Isso garante que as saídas da CLI e da GUI sejam idênticas.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lista as ferramentas disponíveis
lolly qr-code                # lista os inputs dessa ferramenta
```

### TUI
`npm run tui`

A contraparte interativa da CLI: um app de terminal em tela cheia, priorizando o teclado (construído sobre o Ink), para navegar pelas ferramentas, preencher inputs, salvar projetos e exportar — tudo sem uma GUI. Sua host bridge **reaproveita a implementação da CLI** para os formatos sem DOM (SVG/EMF/EPS/HTML + texto/dados), e acrescenta estado em disco em `~/.lolly`, além de uma pré-visualização inline opcional. Além disso, ela tem um **nível de renderização via navegador**: um Chromium headless de escopo restrito (o mesmo que o servidor MCP instala) que produz raster/PDF/vídeo e captura de URL ao vivo sob demanda — controlando uma cópia compilada do shell web para que a saída seja idêntica, e sendo iniciado apenas na primeira vez que você exporta um formato desse tipo. Assim, `url-shot` (com corte + recolorir + PDF/SVG vetorial) e toda ferramenta raster/pdf também rodam no terminal. Veja o [guia da TUI](/info/tui.html).

---

## Categorias de ferramentas

As ferramentas são marcadas com uma `category` no manifest para o agrupamento na galeria.

As linhas estão listadas na ordem das seções da galeria. A seção `utility` sempre é renderizada **por último** na galeria (depois de todas as outras categorias, incluindo futuras) — é a gaveta de "Utilitários Offline" no dispositivo.

| Categoria | Ferramentas lançadas | Planejadas |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Conversores de unidade/formato, mais utilitários de privacidade no dispositivo |

As ferramentas também são classificadas por status: `official` (aprovada pela marca, sem marca d'água), `community` (contribuição externa), `experimental` (exportações com marca d'água). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap e Diagram Builder atualmente têm status `experimental`; Web Icon Maker e Layout Studio são lançadas como ferramentas `community`.

**Layout Studio** é a primeira ferramenta construída sobre o modo de canvas livre `render.layout: "editor"` — uma superfície sem chrome, de manipulação direta, onde você arrasta, redimensiona, gira e encaixa caixas de texto, formas e imagens, e depois exporta pelo mesmo caminho de renderização de qualquer outra ferramenta.

**Strip Hidden Data** é o primeiro **utilitário no dispositivo** (`privacy: "on-device"`): uma ferramenta de transformação de conteúdo que recebe um arquivo fornecido *por você*, processa-o inteiramente no navegador, e devolve uma cópia limpa — nunca enviada, nunca com marca d'água, sem proveniência registrada. **Text Helper** é o segundo — um workbench no dispositivo para as tarefas cotidianas de colar-em-um-site (formatação JSON, decodificação de JWT, Base64, codificação/decodificação de URL, hash SHA). **Compress PDF** é o terceiro — ele reduz um PDF recomprimindo suas imagens, também inteiramente no dispositivo. Os três trazem o texto do selo "Executa no seu dispositivo — nada é enviado". Este é o início de uma categoria de utilitários de privacidade que substitui a prática de entregar arquivos confidenciais a sites de propósito único.

> Nota: `category` e `status` são desnormalizados em `catalog/tools/index.json` (o registro que a galeria lê) a partir de cada `tool.json`. O manifest é a fonte da verdade — o índice é **gerado** por `npm run build:catalog`, e `npm run validate:catalog` falha o CI se o índice commitado divergir dos manifests.

---

## Compromissos arquiteturais

Essas decisões estão consolidadas. Mudar qualquer uma delas é um empreendimento de grande porte — elas moldam todas as outras decisões no código-fonte.

### 1. Ferramentas declarativas, com uma válvula de escape imperativa

Uma ferramenta é um manifest (`tool.json`) + um template (`template.html`) + `hooks.js` opcional.

**O manifest declara os inputs.** Não o template. Os inputs não são inferidos a partir de tokens do Handlebars. O manifest é o contrato; o template consome variáveis nomeadas via `{{id}}`.

**Os hooks são opcionais.** A maioria das ferramentas é puramente declarativa — manifest + template já bastam. Ferramentas que precisam de valores computados (codificação de QR, modelagem de dados de gráfico) fornecem um `hooks.js` que expõe funções nomeadas do ciclo de vida (`onInit`, `onInput`, `onFrame` — o hook por frame de câmera ao vivo para ferramentas motion-reactive — `beforeRender`, `beforeExport`, `afterExport`, e `exportFile` — o caminho de transformação arquivo-entra/arquivo-sai usado por utilitários no dispositivo como o Strip Hidden Data). O host carrega os hooks via `new Function('host', …)`, com a bridge de capacidades injetada como escopo de closure. Isto é um **contrato de portabilidade, não um sandbox de segurança**: os hooks ainda rodam no realm da página e *podem* acessar `window`/`fetch`/`document` em um shell de navegador — `host.*` é a superfície suportada e portável, não uma fronteira imposta. Os resultados assíncronos dos hooks têm um limite de tempo (onInit 5s, onInput 2s, os demais 5s), e resultados tardios são descartados; um hook *síncrono* descontrolado não pode ser interrompido. Por isso, código de hooks de terceiros não confiáveis não é seguro de executar até que o isolamento por Worker seja lançado.

Isso importa porque: ferramentas declarativas podem ser criadas por quem não é desenvolvedor. Se cada ferramenta fosse um web app, a nota de risco "habilidades limitadas para criar/manter templates de uso corrente" se tornaria um gargalo permanente.

### 2. Ferramentas e ativos são dados, não código empacotado

Os apps web e Tauri buscam os catálogos de ferramentas e ativos de uma URL conhecida na inicialização, armazenam-nos em cache localmente, e operam sobre o que estiver lá. **Adicionar um novo card de evento ou um ativo sazonal não exige um lançamento de app.**

Os bytes dos ativos recebem checksum SHA-256 para evitar envenenamento de CDN. `id` + `version` do ativo conduz a invalidação de cache.

### 3. A bridge de capacidades é a única API que as ferramentas veem

As ferramentas nunca tocam o DOM fora da área do seu template, nunca chamam `fetch` diretamente, nunca leem o sistema de arquivos. Elas chamam métodos versionados de `host.*`. A bridge é definida em `engine/src/bridge/host-v1.ts`:

| API da bridge | O que faz |
|---|---|
| `host.profile` | Primeiro nome, e-mail, foto de perfil, cidade etc. do usuário. Pré-preenche inputs via `bindToProfile`. |
| `host.assets` | Consultas ao catálogo, resolução de ativos, UI de seletor fornecida pelo host. |
| `host.state` | Salva / carrega slots de input. IndexedDB na web, sistema de arquivos no Tauri, memória na CLI. |
| `host.clipboard` | Escreve texto ou imagem na área de transferência (com fallbacks por plataforma). |
| `host.export` | Rasteriza ou serializa o alvo de renderização. Aplica marca d'água para ferramentas experimentais. |
| `host.net` | Fetch com lista de permissões — disponível apenas se a ferramenta declarar a capacidade `"network"`. (Nenhuma ferramenta lançada usa isso atualmente.) |

Superfícies opcionais e aditivas só aparecem quando um shell as disponibiliza. Duas são **controladas por capacidade** — expostas apenas quando a ferramenta declara a flag correspondente: `host.compose` (incorpora a renderização de outra ferramenta — `compose`) e `host.capture` (captura de página para o URL Screenshot — `capture`). As demais são **detectadas por recurso** — presentes sempre que o shell puder fornecê-las: `host.text` (texto-para-path via HarfBuzz WASM; a capacidade `wasm` sinaliza as ferramentas que dependem dele), `host.pdf` (parsing/compressão de PDF, usado pelo Strip Hidden Data e pelo Compress PDF), e `host.tokens` (tokens de design DTCG). As capacidades declaráveis são: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

A mesma ferramenta roda no navegador, no Tauri e na CLI headless porque cada shell implementa essa interface — a ferramenta nunca sabe em qual delas está.

A bridge é versionada. Adicionar métodos é uma versão menor (minor). Remover ou alterar assinaturas é um salto de versão maior (major). Quando a v2 for lançada, a v1 precisa continuar funcionando.

### 4. Os IDs de ativo são para sempre

`suse/logo/primary` é um contrato. Uma vez publicado:
- O ID nunca muda, nunca é reutilizado.
- Mudanças nos bytes → incrementa `version` no manifest.
- Substituído por um novo ativo → define `deprecated: true` e, opcionalmente, `replacedBy`.
- Referências existentes sempre resolvem.

Isso torna estados de ferramenta salvos e links compartilhados por URL duráveis ao longo dos anos.

### 5. O modo URL é de primeira classe

Todo input precisa ser expressável como um parâmetro de URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

O modo CLI é o modo URL sob um transporte diferente — o shell da CLI constrói um objeto de estado de URL a partir do argv e executa o **mesmo** pipeline do engine. Existe um único caminho de renderização. A CLI não pode divergir da GUI porque não é uma implementação separada.

`url-mode.ts` cuida da ida e volta (parse e serialização). Parâmetros reservados (nunca repassados à ferramenta como inputs): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (estado compactado — o token "Link mais curto"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Inputs de ativo no modo URL são serializados pelo `id`; o runtime os resolve via `host.assets.get()` antes da hidratação. `width`/`height` são valores em `unit` (padrão `px`, também `mm`/`cm`/`in`/`pt`/`pc`); com uma unidade física, `dpi` define a resolução do raster. Eles definem o tamanho do documento no canvas e pré-preenchem o painel de dimensões de exportação.

### 6. O armazenamento passa pela bridge, não diretamente

Shell web: IndexedDB. Tauri: sistema de arquivos. CLI: em memória. As ferramentas só veem `host.state.save(slot, data)` e `host.state.load(slot)`. `localStorage` não é usado — é pequeno demais e não consegue guardar blobs.

Os usuários podem salvar múltiplos slots de edição nomeados por ferramenta e retornar a cada sessão depois. Não é necessário criar conta; o estado é por dispositivo. Como a bridge é a única costura, esse estado por dispositivo também é *portável*: `shells/web/src/data-transfer.ts` lê tudo de volta através de `host.profile`/`host.state`/`host.assets` em um único zip `lolly-backup` que pode ser importado em qualquer outra instalação — a resposta offline para "mudar de dispositivo" que não precisa de servidor (especificação completa: `docs/data-transfer.md`). A integração com o SUSE ID (sincronização entre múltiplos dispositivos) é um marco futuro sobre essa base.

### 7. As tags de maturidade respondem estruturalmente ao risco de "aprovado pela marca"

Toda ferramenta declara `status: official | community | experimental` no seu manifest. A galeria ordena por status. Ferramentas experimentais aplicam marca d'água nas exportações automaticamente — a marca d'água é aplicada por `host.export.render`, não pela ferramenta, então um autor de ferramenta não-oficial não pode desativá-la.

Essa é uma resposta estrutural ao risco de percepção de que usar qualquer ferramenta implica aprovação da marca. Respostas de processo (uma fila de revisão, controle de acesso via SUSE ID) se somam a isso.

### 8. Os inputs de ferramenta são tipados via manifest, incluindo ativos

Os inputs declaram um `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, e `file`. O host renderiza um controle genérico por tipo a partir do manifest — as ferramentas não escrevem nenhum código de controle. Três deles têm mais peso que os demais:

- **`asset`** (com `filter` e `allowUpload`) é a ponte para o sistema global de ativos; `allowUpload: false` é a alavanca de aplicação da marca para casos como logos de cards de patrocínio, onde só ativos da biblioteca são permitidos. Uploads do usuário usam o mesmo formato `AssetRef` que os ativos da biblioteca, então as ferramentas os tratam de forma idêntica.
- **`blocks`** é um grupo de campos repetido — uma minitabela dentro de um único input, editada em um painel lateral, com um menu de adição tipado/discriminado e campos de ativo por block. Clicar em um block renderizado no canvas foca a linha correspondente daquele block. Usado por `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, e `digi-ad`.
- **`vector`** agrupa um conjunto fixo de números (por exemplo, uma transformação) em um único controle composto; **`file`** guarda o próprio arquivo do usuário como bytes em memória para utilitários de transformação no dispositivo (por exemplo, `strip-data` e `compress-pdf`).

### 9. Templates não têm lógica (Handlebars, não EJS)

O Handlebars foi escolhido em vez do EJS deliberadamente:
- Sem lógica. Templates podem ser criados por quem não é desenvolvedor.
- Seguro por padrão. `{{x}}` faz escape de HTML; `{{{x}}}` é bruto, por opção explícita.
- Nenhum JS arbitrário em templates significa nenhuma superfície de auditoria de XSS por template.

A lógica vive no `hooks.js`, onde é explícita e revisável. Helpers do Handlebars disponíveis: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (além dos helpers de formato de dados `icsStamp`/`rfcText`/`csvCell`, usados pelos templates irmãos `.ics`/`.vcf`/`.csv`).

### 10. Ferramentas compõem ferramentas

Uma ferramenta pode incorporar a renderização de **outra** ferramenta sem nenhum import de ferramenta para ferramenta — a composição é resolvida pelo engine, nunca pelo código da ferramenta. Existem duas superfícies:

- **Manifest declarativo** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. O engine renderiza o filho nomeado e coloca o resultado no template sem lógica como `{{asset <id>}}`. Hoje, `event-name-badge` compõe `qr-code` como um SVG.
- **URL de embed portável** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. O shell renderiza esse filho **localmente** (um pixel de placeholder é exibido até que a renderização local seja resolvida); nada é buscado em `lolly.tools`.

É possível compor a renderização de qualquer ferramenta: um filho **SVG** permanece um vetor verdadeiro quando o pai exporta para SVG ou PDF, e rasteriza com nitidez para PNG; filhos **PNG/JPG/WEBP** são incorporados como imagens. Exige a capacidade `compose`. Filhos compostos são intermediários — nunca recebem marca d'água nem registro de proveniência — e a composição degrada de forma graciosa: um shell que não consegue renderizar um filho simplesmente omite o slot, e o pai ainda assim é renderizado.

---

## O que decidimos deliberadamente não fazer

- **Sem EJS / sem JS arbitrário em templates.** A superfície de XSS é zero. A lógica vive em `hooks.js`.
- **Sem CMS de ativos.** O catálogo de ativos é o git. Atualizações passam por revisão de PR. Sem UI de upload, sem autenticação, sem fila de moderação. A revisão no git _é_ a moderação.
- **Sem RBAC no MVP.** Acesso público. O risco de marca é administrado por tags de maturidade + marcas d'água + o fato estrutural de que todos os ativos que os usuários veem passaram por revisão de PR.
- **Sem banco de dados central.** Todo o estado do usuário é por dispositivo. A integração com o SUSE ID está no roadmap, mas não é um bloqueador de lançamento.
- **Sem caminho de código compartilhado entre tools/engine.** O engine é open source; `tools/` e `assets/` continuam sendo conteúdo proprietário da SUSE em seus próprios repositórios. A separação é obrigatória (sem imports cruzados), para que a divisão permaneça limpa.

---

## Ciclo de vida, de ponta a ponta

Um usuário abre `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Boot.** O shell web abre o IndexedDB, constrói a bridge de capacidades, sincroniza os catálogos de ferramentas e ativos (ou carrega do cache quando offline).
2. **Rota.** Hash da URL → view `tool`, com `qr-code` e os parâmetros de URL extraídos.
3. **Load.** `loadTool('qr-code', fetchFile)` busca o `tool.json`, valida contra o JSON Schema, busca o `template.html`, o `styles.css`, e o código-fonte do `hooks.js`.
4. **Parse do estado da URL.** `parseUrlState` traduz os parâmetros de URL em valores iniciais de input. Referências de ativo (`?logo=suse/logo/primary`) são interpretadas como objetos leves `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` constrói o modelo de input (mesclando dados do perfil, valores padrão e valores iniciais), resolve as referências de ativo via `host.assets.get()`, carrega os hooks (`host` no escopo de closure, sem sandbox), chama `hooks.onInit`.
6. **Render.** O shell se inscreve no runtime; a cada mudança de estado ele recebe `{ model, hydrated }`. Ele renderiza os controles de input a partir do modelo e escreve o HTML do template hidratado em `#tool-canvas`.
7. **Interação.** O usuário digita em um input → `runtime.setInput(id, value)` → restrições aplicadas → `hooks.onInput` chamado → re-hidratação → nova renderização. O canvas se atualiza ao vivo.
8. **Export.** O usuário clica em Download(PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasteriza via dom-to-image-more; SVG/PDF passam por vetorizadores dedicados que percorrem o DOM) → blob → `host.export.download`. A variedade de formatos que uma ferramenta pode adotar é ampla: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, os formatos vetoriais `emf`, `eps`, além dos formatos de impressão/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; os formatos de vídeo `webm`, `mp4`, `gif`; e os formatos de dados/texto `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Ferramentas que definem `render.export: false` — por exemplo, Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — escondem os controles de download/formato/dimensão.) As unidades físicas são convertidas por formato aqui (PDF → pontos reais de página, raster → pixels em DPI com um chunk `pHYs`). Os metadados de autoria/proveniência (autor, ferramenta, origem — construídos por `engine/src/metadata.ts`) são incorporados por formato: PNG iTXt, JPEG EXIF, dicionário de info do PDF, `<metadata>` do SVG, comentário do GIF. Ferramentas experimentais recebem uma marca d'água inserida pelo host, não pela ferramenta.

Mesmo ciclo de vida no Tauri. Mesmo ciclo de vida na CLI — o jsdom fornece o DOM headless; a saída vai para um arquivo ou para o stdout.

---

## Status open source

Os diretórios `engine/`, `shells/`, `schemas/`, e `docs/` são open source sob a **MPL-2.0** — uma plataforma de scaffolding neutra em relação a fornecedor para ferramental de marca, com cada unidade lançável dividida em seu próprio repositório em [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` e `catalog/assets/` são conteúdo específico da SUSE e permanecem **proprietários da SUSE** (todos os direitos reservados — veja o `NOTICE.md` de cada repositório); eles não são cobertos pela MPL.

A divisão é obrigatória — não há imports cruzados de `engine/` para `tools/` ou `assets/` — para que a fronteira entre plataforma e conteúdo permaneça limpa.

---

## Roadmap

| Marco | Prazo | O quê |
|---|---|---|
| **Ferramentas iniciais** | ✅ Concluído | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — shell web no ar |
| **Aprimorar o ferramental atual** | Meados de 2026 ✅ Concluído  | App offline para download (Tauri); ferramentas adicionais para funcionários e eventos; pipeline de exportação mais rico (estabilidade de texto-para-path, metadados, formatos extras — veja `plans.md`) |
| **Abrir o código do engine** | Final de 2026 ✅ Concluído  | Engine, shells, schemas, docs tornam-se públicos — não as tools/assets de marca |
| **Transferência entre dispositivos** | ✅ Concluído | O bundle portável `lolly-backup` carrega perfil, sessões salvas, imagens enviadas e preferências entre quaisquer duas instalações — offline ou online, sem conta. Envelope compatível com versões futuras e com verificação de integridade (especificação: `docs/data-transfer.md`) |
| **Estabelecer um roadmap formal de ferramentas** | Final de 2026 | Kits de referência para clientes, ingestão de design por IA, modo de requisição GET/URL |
| **Utilitários de privacidade no dispositivo** | 🚧 Em andamento | Ferramentas de transformação de conteúdo que processam *o seu próprio* arquivo localmente (arquivo entra → arquivo limpo sai), substituindo a exfiltração para SaaS de propósito único. **Concluído:** tipo de input `file` + caminho de transformação `exportFile` + convenções `privacy:"on-device"` (sem marca d'água/proveniência) + **Strip Hidden Data** (metadados de JPEG/PNG/SVG/PDF, PDF via a bridge `host.pdf`) e **Text Helper** (o workbench no dispositivo para as tarefas cotidianas de colar-em-um-site — formatação JSON, decodificação de JWT, Base64, codificação/decodificação de URL, hash SHA, além de um grupo Novelty). **Próximo:** corte/redimensionamento, conversão/compressão de imagem; depois uma bridge de codec `host.image` (especificação: `plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 Cor lançada | Primitivas de marca como [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) canônicos — o formato que o [Penpot importa/exporta](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Concluído:** tokens de cor (`suse/tokens/brand`), bridge `host.tokens`, amostras no seletor + valores vinculados por referência (especificação: `docs/design-tokens.md`). **Próximo:** tokens de dimensão/tipografia, import/export do Penpot, tokens do usuário no bundle de transferência (`tokens.json`) |
| **Endpoint de agente MCP (render)** | ✅ Concluído | Um servidor [MCP](https://modelcontextprotocol.io) expõe o catálogo + o caminho de renderização como ferramentas chamáveis (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`), para que qualquer agente possa produzir ativos finalizados e vinculados às regras — adicione-o a qualquer cliente MCP como um conector personalizado (OAuth 2.1) ou aponte um cliente CLI/HTTP para ele com um bearer token. No ar em `mcp.lolly.tools` (endpoint completo: raster/PDF/animação/vídeo via um navegador headless hospedado) e em `lolly.tools/api/mcp` (nível serverless, sem navegador). Distinto do MCP de *criação* do Penpot abaixo, que trata da **criação** de ferramentas (especificação: `plans/mcp-server.md`; guia: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingestão de arquivos Penpot como ferramentas** | 2027+ | Importar um arquivo do Penpot e apresentá-lo *como uma ferramenta Lolly* (declarativa, baseada em restrições), transformando designs criados no Penpot em geradores determinísticos |
| **Extensão MCP + Penpot (criação somente online)** | 2027+ | Um servidor MCP do Penpot articula novas ferramentas com IA — a forma mais visual de criar templates determinísticos: uma primeira rodada informada pela marca, refinada com um humano no loop, mirando novos contextos em uma única tentativa ao longo do tempo. A *criação* de ferramentas é somente online; as ferramentas que ela produz rodam em qualquer lugar |
| **RBAC + SUSE ID** | 2027+ | Restringir ferramentas específicas por trás do SUSE ID; estado salvo entre múltiplos dispositivos; ingestão/exportação via Google Drive |

---

## Onde o engine termina e o host começa

Se você consegue descrever em dados puros + Handlebars → **engine**.
Se toca o DOM, o sistema de arquivos, a rede, ou qualquer API de navegador/SO → **host**.

A linha é nítida de propósito. O engine é a parte open source. Tudo o que sabe sobre a SUSE, plataformas específicas, ou ambientes de runtime fica de fora dele.
