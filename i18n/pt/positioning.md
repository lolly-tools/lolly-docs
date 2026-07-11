# Como o Lolly se compara

Onde esta plataforma se encaixa no panorama mais amplo de ferramentas criativas, e onde ela deliberadamente **não** atua.

> **Status do piloto:** o Lolly é um protótipo em piloto fechado, não um produto finalizado, e sua segurança está atualmente passando pelo rigoroso endurecimento de infraestrutura da SUSE, em preparação para escala empresarial. Este posicionamento é onde o Lolly *pretende* estar — a página [Adoção e Governança](/info/adoption-governance.html#status) mostra como isso está sendo testado na prática.

## Panorama

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


A forma da lacuna é clara: nada no panorama existente nos oferece um resultado generativo baseado em restrições, capaz de funcionar offline, de baixa exigência de habilidade e acessível internamente. O Lolly agora oferece seu próprio canvas aberto — o **Layout Studio**, um canvas livre de manipulação direta — mas com uma diferença decisiva em relação à coluna do Canva: as cores, a tipografia e os recursos colocados nele seguem os globais de marca, então mesmo o arranjo livre permanece baseado em restrições. O que o Lolly ainda **não** é é uma suíte de design irrestrita; os designers continuarão a usar o Illustrator e o Figma para trabalhos sob medida — e quando esse trabalho precisar se tornar um recurso governado e reproduzível, o [Importar um design](/info/design-import.html) do Layout Studio traz o arquivo finalizado do Figma/Illustrator/Penpot para o canvas como caixas editáveis e conformadas à marca.

## Use para

- Geração rápida de recursos criativos operacionalizados (banners de eventos, crachás, assinaturas, alertas)
- Arranjo livre no canvas aberto (Layout Studio) quando as peças — cores, tipografia, ícones, imagens — precisam permanecer conformadas aos globais de marca
- Trazer um design finalizado do Figma, Illustrator, InDesign ou Penpot (o recurso Importar um design do Layout Studio) para que possa ser editado, governado e renderizado novamente de forma determinística em todos os formatos do Lolly
- Fluxos um-para-muitos do tipo "preencha três campos, receba o recurso finalizado" — incluindo execuções em lote a partir de uma planilha/CSV na grade de lote `/pro` (cole ou importe linhas, um recurso finalizado por linha, baixe como zip)
- Resultados de marca recorrentes e sempre ativos
- Situações em que o controle central da expressão de marca importa mais do que a flexibilidade expressiva

## Não use para

- Conteúdo hero sob medida ou principal (outdoors, vídeos de grande porte)
- Trabalho de campanha único que realmente precisa de um designer
- Ideação que precisa escapar totalmente do sistema de marca — o canvas aberto do Lolly ainda conforma cores, tipografia e recursos aos globais de marca, e esse é o objetivo

## O que isto oferece de forma exclusiva

- **Potencial de design ousado entregue com segurança em contexto.** As ferramentas podem expressar ideias de design aventureiras dentro de barreiras de proteção fixas no código.
- **Automação de conteúdo definida por software que retorna o recurso final.** Entrada → arquivo final. Sem "agora salve da sua ferramenta de design e faça o pós-processamento".
- **Ferramentas compõem ferramentas.** Uma ferramenta pode incorporar a renderização de outra ferramenta e devolvê-la como parte de um único recurso finalizado, sem qualquer acoplamento de código entre ferramentas — uma primitiva que nenhum produto de canvas aberto ou de templating de DAM no panorama oferece.
- **Neutralidade de fornecedor.** Controle total de recursos e custos. Engine de código aberto. Ferramentas e recursos são conteúdo rastreado pelo git, não presos em um banco de dados SaaS.
