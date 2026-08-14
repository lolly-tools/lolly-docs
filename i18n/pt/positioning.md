# Como o Lolly se compara

Onde esta plataforma se encaixa no panorama mais amplo de ferramentas criativas, e onde ela deliberadamente **não** atua.

> **Status do piloto:** o Lolly é um protótipo em piloto fechado, não um produto finalizado, e sua segurança está atualmente passando pelo rigoroso endurecimento de infraestrutura da SUSE, em preparação para escala empresarial. Este posicionamento é onde o Lolly *pretende* estar - a página [Adoção e Governança](/info/adoption-governance.html#status) mostra como isso está sendo testado na prática.

## Panorama

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

| Capacidade | Canva (Canvas aberto) | Portais de marca (Templating de DAM) | Illustrator (Pro desktop) | Figma / Penpot (Pro online) | **Lolly (Baseado em restrições)** |
|---|---|---|---|---|---|
| Geração de conteúdo em massa | parcial | ✗ | ✗ | ✗ | **✓** |
| Funciona totalmente offline | ✗ | ✗ | ✓ | parcial | **✓** |
| Lógica de template e restrições rígidas | ✗ | parcial | ✗ | parcial | **✓** |
| Não exige habilidade de design | parcial | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automáticas | ✗ | ✗ | parcial | ✗ | **✓** |
| Ferramentas compõem outras ferramentas | ✗ | ✗ | ✗ | ✗ | **✓** |
| Engine aberta, sem aprisionamento a SaaS | ✗ | ✗ | ✗ | parcial | **✓** |
| Credenciais de conteúdo C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Proveniência em nível forense, opcional | ✗ | ✗ | ✗ | ✗ | **✓** |
| Aplicativos móveis e para desktop | ✓ | ✗ | ✗ | parcial | **✓** |
| Linha de comando e TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

A forma da lacuna é clara: nada no panorama existente nos oferece um resultado generativo baseado em restrições, capaz de funcionar offline, de baixa exigência de habilidade e acessível internamente. O Lolly agora oferece seu próprio canvas aberto - o **Layout Studio**, um canvas livre de manipulação direta - mas com uma diferença decisiva em relação à coluna do Canva: as cores, a tipografia e os recursos colocados nele seguem os globais de marca, então mesmo o arranjo livre permanece baseado em restrições. O que o Lolly ainda **não** é é uma suíte de design irrestrita; os designers continuarão a usar o Illustrator e o Figma para trabalhos sob medida - e quando esse trabalho precisar se tornar um recurso governado e reproduzível, o [Importar um design](/info/design-import.html) do Layout Studio traz o arquivo finalizado do Figma/Illustrator/Penpot para o canvas como caixas editáveis e conformadas à marca.

## Use para

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

O Deck Studio é uma boa medida do teto aqui: uma apresentação inteira declarada como dados, montada ao vivo no canvas e exportada como um PowerPoint nativo e editável.

- Geração rápida de recursos criativos operacionalizados (banners de eventos, crachás, assinaturas, alertas)
- Arranjo livre no canvas aberto (Layout Studio) quando as peças - cores, tipografia, ícones, imagens - precisam permanecer conformadas aos globais de marca
- Trazer um design finalizado do Figma, Illustrator, InDesign ou Penpot (o recurso Importar um design do Layout Studio) para que possa ser editado, governado e renderizado novamente de forma determinística em todos os formatos do Lolly
- Fluxos um-para-muitos do tipo "preencha três campos, receba o recurso finalizado" - incluindo execuções em lote a partir de uma planilha/CSV na grade de lote `/pro` (cole ou importe linhas, um recurso finalizado por linha, baixe como zip)
- Resultados de marca recorrentes e sempre ativos
- Situações em que o controle central da expressão de marca importa mais do que a flexibilidade expressiva

## Não use para

- Conteúdo hero sob medida ou principal (outdoors, vídeos de grande porte)
- Trabalho de campanha único que realmente precisa de um designer
- Ideação que precisa escapar totalmente do sistema de marca - o canvas aberto do Lolly ainda conforma cores, tipografia e recursos aos globais de marca, e esse é o objetivo

## Aprove a ferramenta, não o arquivo

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

Todas as outras ferramentas do panorama produzem um *arquivo* que depois precisa ser conferido: um gerente de marca em uma thread do Slack, o jurídico no aviso legal, uma rodada de mudanças, mais uma revisão. O Lolly move a aprovação **um passo acima**. As regras de marca - códigos hex exatos, arquivos de fonte licenciados, margens de sangria, espaçamento - ficam fixas no HTML e no CSS da ferramenta, então o template *não consegue fisicamente* gerar um recurso fora da marca. O próprio layout é estrutural.

Assim você para de aprovar saídas e passa a aprovar a **ferramenta** que as cria. Aprove uma vez e todo recurso que ela produzir já estará pré-aprovado por construção: sem ninguém no circuito, sem ciclo de revisão, em qualquer volume.

Essa é a mudança de paradigma que a engine determinística realmente entrega: não é uma versão mais rápida do antigo processo de aprovação, ela elimina o processo. Para o time criativo é uma barreira de proteção, não uma substituição - você continua lançando a bola (os dados, o texto, a imagem) e o código é a canaleta protetora que mantém cada lançamento longe da vala.

| Aprovar recursos do jeito antigo | Aprovar a ferramenta, do jeito Lolly |
|---|---|
| Cada arquivo finalizado é conferido, um por um | A ferramenta é conferida uma vez |
| Pedido → o designer cria → revisão de marca → checagem jurídica → mudanças → nova revisão | Uma mudança de parâmetro → recurso finalizado |
| Designer, gerente de marca, jurídico e solicitante, todos no circuito | O produtor, sozinho |
| Dias por recurso | Segundos por recurso |
| 10.000 recursos = 10.000 ciclos de revisão | 10.000 recursos = zero (o template já estava aprovado) |

## O que isto oferece de forma exclusiva

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Potencial de design ousado entregue com segurança em contexto.** As ferramentas podem expressar ideias de design aventureiras dentro de barreiras de proteção fixas no código.
- **Automação de conteúdo definida por software que retorna o recurso final.** Entrada → arquivo final. Sem "agora salve da sua ferramenta de design e faça o pós-processamento".
- **Ferramentas compõem ferramentas.** Uma ferramenta pode incorporar a renderização de outra ferramenta e devolvê-la como parte de um único recurso finalizado, sem qualquer acoplamento de código entre ferramentas - uma primitiva que nenhum produto de canvas aberto ou de templating de DAM no panorama oferece.
- **Neutralidade de fornecedor.** Controle total de recursos e custos. Engine de código aberto. Ferramentas e recursos são conteúdo rastreado pelo git, não presos em um banco de dados SaaS.

O primeiro deles é o que as pessoas subestimam. Um mapa de cidade em qualidade de pôster, desenhado como caminhos vetoriais reais de vias e água, a partir de um menu suspenso e dois campos de cor que não podem apontar para fora da marca:

