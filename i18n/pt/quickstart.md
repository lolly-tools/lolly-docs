# Guia rápido

O Lolly transforma suas regras — cores, tipografia, layouts, lógica — em ferramentas que qualquer pessoa pode usar para criar arquivos finalizados: imagens, PDFs, cartões para redes sociais, vídeos, preenchendo apenas alguns campos. Não há nada para aprender nem para enviar: tudo roda no seu dispositivo, online ou offline.

Esta é a página que você deve ler primeiro. Duas coisas vão te deixar produtivo: **faça do Lolly o seu** (aponte-o para a sua marca), e **traga o que você já tem** (seus arquivos de design e tokens). Tudo o mais está a um link de distância.

> Novo no Lolly e só quer criar algo? Abra o aplicativo, escolha qualquer ferramenta na galeria, preencha os campos e clique em **Renderizar**. Volte aqui quando quiser que ela vista *a sua* marca.

## 1. Torne-o seu — configure sua marca

Sua marca no Lolly é um pequeno documento de **tokens de design** — cores, tipografia e algumas regras — que toda ferramenta usa como referência ao renderizar. Configure uma vez e tudo o que você criar estará alinhado à marca por construção, não por revisão. Há três formas de entrar; escolha a que combina com onde sua marca já vive.

### Comece do zero (o assistente)

Na primeira execução, você cai na tela **Start** (`#/start`). Dê um nome e uma cor primária, e o Lolly *deriva* dali uma paleta completa e acessível — superfícies claras/escuras, texto, destaques — usando a mesma matemática de cores que o motor usa em todo o resto. Escolha uma fonte e você tem uma marca funcionando em menos de um minuto. Você pode refinar qualquer parte disso depois.

### Importe uma marca que você já tem

Se sua marca já está capturada como tokens de design — do **Penpot**, do **Tokens Studio** (Figma), ou de qualquer arquivo **DTCG** simples — traga-a por completo em vez de digitar tudo de novo. Duas rotas:

- **No aplicativo:** a tela Start e o editor *Your brand* aceitam um arquivo de tokens (ou um pacote `LollyBrand`) diretamente — solte o arquivo e a paleta ganha vida.
- **Pela linha de comando**, para montar um pacote de marca reutilizável:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` aceita os três formatos em que Penpot / Tokens Studio exportam o mesmo documento — um único `tokens.json`, um diretório (`$metadata.json` + arquivos por conjunto), ou um arquivo `project.penpot`. Com `--activate`, ele registra a marca como um perfil, muda para ele e reconstrói o catálogo. Veja [Configuração](/info/configuration.html) para entender como pacotes de marca e perfis se encaixam.

### Ajuste no aplicativo

Com uma marca ativa, o editor **Your brand** do painel (`#/d`) é um editor ao vivo — mude uma cor ou um papel e cada pré-visualização na página se atualiza enquanto você digita. A mesma marca aparece resumida no card **Perfil → Your brand**. As fontes são reais: escolha entre as do Google Fonts e o Lolly guarda o arquivo **no seu dispositivo** como um ativo de marca, então sua tipografia viaja offline e nada é buscado no momento da renderização.

Quando estiver satisfeito, **exporte a marca como um pacote `LollyBrand`** — um único arquivo que um colega pode importar para obter exatamente a mesma paleta, fontes e regras. É assim que uma marca se move entre pessoas e máquinas sem um servidor no meio do caminho.

> **Os tokens de marca vão e voltam nos dois sentidos.** Como a marca do Lolly *é* tokens DTCG — o formato que o Penpot lê e escreve nativamente e que o Tokens Studio traz para o Figma — a paleta com a qual você desenha e a paleta que o Lolly *impõe* são um único documento, não duas listas que você mantém sincronizadas manualmente. Veja [Tokens de Design](/info/design-tokens.html).

## 2. Traga o que você já tem

Você não começa do zero. O Lolly abre o trabalho de design e os formatos abertos que você já possui.

### Arquivos de design abertos

Um trabalho finalizado no **Figma, Penpot, Illustrator, InDesign ou qualquer aplicativo de SVG** não precisa ficar preso no aplicativo em que foi desenhado. Abra o **Layout Studio**, clique em **Importar um design**, e o arquivo abre como um *layout vivo* — não uma imagem achatada. Cada camada vira uma caixa editável: o texto continua editável, as formas continuam formas, as imagens vão para a sua biblioteca, e a arte vetorial complexa é preservada fielmente. Ele chega já ajustado às fontes e regras de cor da sua marca.

| Você tem | Traga como |
|---|---|
| Um frame do Figma | `.fig` nativo (File → Save local copy), ou uma exportação em SVG |
| Um design do Penpot | Sua exportação `.penpot`, ou qualquer SVG |
| Um arquivo do Illustrator | `.ai` nativo (compatível com PDF) ou `.pdf` — abre diretamente |
| Um layout do InDesign | `.idml` (File → Export → InDesign Markup) |
| Qualquer outra coisa | **Qualquer SVG** — a porta universal de entrada |

Toda a importação acontece **no seu dispositivo** — o arquivo é interpretado no seu navegador e nada é enviado. Os detalhes completos, e exatamente o que é preservado, estão em [Importar um design](/info/design-import.html).

### De algo único a um template

Aqui está o ganho: um layout importado é uma sessão comum do Layout Studio, então assim que você **salva**, ele passa a viver em uma URL. Qualquer pessoa com o Lolly pode abrir essa URL, mudar as palavras, trocar uma imagem e renderizar a própria versão — sem aplicativo de design, e as partes travadas continuam travadas. Um design pontual vira uma ferramenta reutilizável. É essa a ideia toda, alcançada sem escrever uma linha sequer de configuração.

### Dados abertos e ferramentas abertas

O [conjunto de ferramentas da comunidade](/info/builders.html) é open source e independente de marca — QR codes, mapas de rua, filtros, utilitários de privacidade — e renderiza contra *a sua* marca no momento em que você a ativa. Alimente as ferramentas com seus próprios dados abertos também: cole ou solte uma tabela **CSV** ou **JSON** e os campos repetidos de uma ferramenta se preenchem a partir dela, um ativo finalizado por linha.

## 3. Crie algo, depois compartilhe ou automatize

Com uma marca ativa e seu material em mãos, toda ferramenta produz um arquivo finalizado:

- **Renderize** qualquer ferramenta em **SVG, PDF, PNG, JPG, WebP, vídeo**, e mais — em tamanhos de impressão reais e unidades físicas quando precisar. Veja [Exportação e formatos](/info/exporting.html).
- **Compartilhe um link.** Todo estado de uma ferramenta é uma URL, então um ativo finalizado é reproduzível e endereçável por parâmetros — salve o link, regenere sob demanda.
- **Faça em lote.** Conduza um template a partir de uma planilha na [grade em lote](/info/exporting.html): um ativo finalizado por linha.
- **Automatize.** A mesma renderização roda a partir da [CLI](/info/cli.html) e de um [agente de IA](/info/ai-agents.html) — uma URL é a API.

## Para onde ir a seguir

Três caminhos, dependendo do que você veio fazer:

- **[Lolly para Criadores](/info/creators.html)** — você cria coisas. As vantagens, e como tirar o máximo proveito do aplicativo.
- **[Lolly para Construtores](/info/builders.html)** — você desenvolve ferramentas, integra e implanta. A documentação técnica.
- **[Lolly para Operadores](/info/operators.html)** — você é responsável pela marca, segurança e lançamento em toda a organização.
