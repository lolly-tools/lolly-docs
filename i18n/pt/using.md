# Usando o Lolly

Um guia prático para realmente *usar* o app — abrir uma ferramenta, trabalhar na tela, exportar, salvar e compartilhar. Tudo aqui roda **no seu dispositivo**: sem conta, sem upload, sem necessidade de internet depois do primeiro carregamento.

> Novo por aqui? O [Guia rápido](/info/quickstart.html) coloca você para criar em minutos, e [Lolly para Operadores](/info/operators.html) explica como instalar/implantar o app; esta página é sobre como usá-lo depois que já está aberto.

## Abrindo uma ferramenta

A tela inicial é a **galeria** — todas as ferramentas, agrupadas por categoria. Clique em um cartão para abrir a ferramenta; se você já trabalhou nela antes, um botão **Continuar** retoma sua sessão mais recente. Use a caixa de busca para filtrar por nome.

Cada ferramenta é uma visualização dividida: **controles** de um lado, uma **pré-visualização** ao vivo (a tela) do outro. Altere qualquer controle e a pré-visualização é atualizada instantaneamente.

> Algumas ferramentas (como o **Layout Studio**) abrem, em vez disso, como uma **tela livre** — uma superfície sem interface, de manipulação direta, onde você arrasta, redimensiona, gira e encaixa caixas de texto, formas e imagens, e clica duas vezes para editar o texto no local. Ela é exportada pelo mesmo caminho de renderização de qualquer outra ferramenta, então a tela *é* o arquivo. Veja [A tela livre](#the-free-canvas-layout-studio) abaixo.

## A tela (pré-visualização)

A pré-visualização sempre mostra exatamente o que será exportado.

**Desktop**

- **Zoom:** Cmd/Ctrl + rolagem do mouse, ou pinça no trackpad — o zoom é centralizado no seu ponteiro.
- **Panorâmica (pan):** segure **Espaço** e arraste, ou arraste com o **botão do meio do mouse**. (Cliques simples continuam livres para clicar em partes do design.)
- **Teclado:** `0` = ajustar à janela · `1` = 100% · `+` / `−` = zoom.
- **HUD de zoom:** o pequeno controle `−  NN%  +  Fit` no canto. Clique na porcentagem para alternar entre Fit ↔ 100%.

**Toque**

- **Pinça** para zoom, **arraste** para deslocar a visualização, **toque duplo** para redefinir ao ajuste.

**Clique para ir direto a um controle:** clique em qualquer elemento do design e o campo correspondente na barra lateral recebe foco e é rolado até ficar visível — no caso de um grupo de linhas repetidas, ele expande exatamente a linha que você clicou, então editar o que você vê está a um toque de distância.

Uma mudança de dimensão sempre encaixa a visualização de volta a um ajuste limpo.

### A tela livre (Layout Studio)

Ferramentas de tela livre adicionam uma superfície de trabalho *ao redor* da prancheta, como a mesa de composição de um designer:

- **Preparação fora da tela.** Arraste uma caixa para além da borda do quadro e ela permanece totalmente **visível e selecionável** — estacione elementos de lado enquanto organiza a composição, depois arraste-os de volta para dentro. Tudo fora do quadro fica **suavemente esmaecido** para que a área de exportação sempre seja identificada rapidamente, e o quadro mantém sua sombra para marcar exatamente onde o arquivo começa.
- **Só o quadro é exportado.** O arquivo exportado é limitado pela prancheta — tudo o que fica fora (ou a parte de uma caixa que ultrapassa a borda) é simplesmente cortado do resultado, tanto em formatos raster quanto vetoriais.
- **Afaste o zoom além do Fit** (até 20%) para ver toda a mesa de composição quando você tiver posicionado elementos bem longe do quadro.
- **Prancheta redimensionável.** Alterar as dimensões de exportação redimensiona o quadro no lugar; as caixas mantêm suas posições, então você pode reenquadrar um layout ao redor do conteúdo existente.

## No celular

Em telas estreitas, o layout se reorganiza em uma única coluna:

- Os **controles viram uma folha** no topo, com uma **alça de arraste** na borda inferior. Arraste a alça para redimensioná-la — ela se encaixa em **peek / half / full** (espiada / meia / cheia) — ou **toque** na alça para alternar entre recolhida e expandida. A pré-visualização preenche o espaço abaixo e permanece visível enquanto você edita.
- Um botão flutuante **Renderizar** abre a folha de **Exportar** — todos os controles de formato, tamanho, copiar, salvar e baixar em um só lugar. Feche-a tocando no fundo.

## Controles (inputs)

As ferramentas expõem apenas os inputs que devem variar — tudo o mais (cores, layout, tipografia, lógica) é fixado pelo autor da ferramenta, então tudo o que você cria segue as regras definidas pelo autor. Os inputs incluem texto, sliders, seletores de cor, menus suspensos, datas, seletores de imagem e grupos de linhas repetidas. Alguns são agrupados em seções recolhíveis.

**Redefinir:** *Clear changes* retorna todos os inputs aos seus valores padrão.

## Seus dados e sua foto de perfil

O **Perfil** (canto superior direito da galeria) guarda seu nome, dados de contato e uma **foto de perfil** opcional. As ferramentas que pedem esses campos os preenchem automaticamente — defina-os uma vez e sua assinatura de e-mail, lockups e crachás se preenchem sozinhos. Você ainda pode substituir qualquer campo em cada sessão. Ative com **Usar meus dados** para que uma ferramenta possa lê-los.

Sua foto de perfil e seus dados ficam **somente neste dispositivo**. Um perfil pode ser mais do que só você — uma equipe ou um papel que você assume de vez em quando. Veja **[Perfis](/info/profile.html)** para o panorama completo, incluindo como manter mais de um.

## Salvando e continuando

Clique em **Salvar** para armazenar os inputs atuais como uma sessão daquela ferramenta. Você pode manter várias sessões nomeadas por ferramenta; o botão **Continuar** de cada ferramenta reabre a mais recente, e o **botão de histórico** (canto superior direito, ao lado do seu perfil) lista todas as sessões salvas em todas as ferramentas. As sessões ficam no dispositivo. Para organizá-las, abra **Projetos** (abaixo).

## Projetos

**Projetos** — abra pela aba **Projetos**, ao lado de **Ferramentas**, ou por **Perfil → Armazenamento → Organizar em Projetos** — é o lar de tudo o que você salvou, e funciona como um gerenciador de arquivos:

- **Pastas que se aninham.** Agrupe sessões salvas em pastas, e pastas dentro de pastas, quantos níveis quiser. Crie uma pasta, renomeie-a ou arraste um card sobre outra pasta para movê-lo; uma trilha (breadcrumb) leva você de volta para cima. Uma pasta **Sem categoria**, sempre presente, guarda tudo o que ainda não foi arquivado.
- **Arquive trabalho novo direto ali.** Dentro de uma pasta, **+ Nova ferramenta** abre uma ferramenta e arquiva seu primeiro salvamento automaticamente naquela pasta.
- **Seleção múltipla (desktop).** Marque a caixa de seleção de um card, arraste uma caixa de seleção pela tela vazia, ou use **Shift/Cmd-clique**; **clique com o botão direito** em um card para abrir seu menu de contexto. Depois aja sobre toda a seleção de uma vez.
- **Renderize uma pasta inteira ou uma seleção.** **Renderizar pasta** exporta cada sessão salva em uma pasta — incluindo suas subpastas — como um único `.zip` aninhado. **Renderizar seleção** faz o mesmo para qualquer seleção múltipla, e uma única sessão é renderizada direto para seu próprio arquivo. Não precisa de Batch/Pro.
- **Compartilhe uma sessão salva.** Clique com o botão direito em uma sessão → **Link de compartilhamento** para copiar um link que a reabre com exatamente os mesmos inputs (o diálogo completo de compartilhamento — veja abaixo).

## Compartilhando um link

Cada input é capturado na URL da página, então um link *é* o design. Use **Compartilhar** nos controles de exportação — ou **Link de compartilhamento** em qualquer sessão salva em Projetos — para abrir o **diálogo de compartilhamento**: um link pronto para copiar, além de opções para criptografar o link e definir o que acontece quando ele é aberto (tela cheia, o painel de exportação expandido, download automático ao abrir com `&export`, ou copiar para a área de transferência com `&copy`).

Um design grande geraria uma URL longa, então o diálogo também oferece um **Link mais curto**, que compacta todo o estado em um token compacto — a forma legível também continua sempre disponível. Cole para um colega, salve nos favoritos ou faça o commit dele. (Detalhes completos: [Modo URL](/info/url-mode.html).)

> Imagens que você enviou do seu dispositivo **não** são incluídas em um link compartilhado — elas existem apenas na sua máquina.

## Câmera ao vivo (ferramentas reativas a movimento)

Os **Filtros** de foto — Halftone, Scanline, Posterize, Duotone — mostram um botão **Ativar ao vivo** onde há uma câmera disponível. Ative e o efeito acompanha sua webcam quadro a quadro, reagindo ao movimento; você pode gravar o resultado em GIF, WebM ou MP4. Os quadros são lidos e processados **no seu dispositivo** e nunca saem dele, e a câmera é liberada assim que você para ou sai da ferramenta. (Qualquer seletor de imagem também tem **Tirar uma foto**, para capturar um único quadro como imagem no dispositivo.)

## Minhas imagens

Quando uma ferramenta permite adicionar uma imagem do seu dispositivo, ela é reduzida de tamanho, tem os dados EXIF/GPS removidos e é salva na sua biblioteca pessoal **Minhas imagens** (em **Perfil → Armazenamento**). Reutilize-a em qualquer ferramenta. A biblioteca tem um limite e é totalmente local — gerencie ou exclua imagens por lá.

## O Catálogo — sua biblioteca de ativos

O **Catálogo** (`#/c`, ou o link **Catálogo** no menu) reúne tudo o que suas ferramentas podem usar — logos de marca, imagens, áudio e animações, agrupados por tipo — e é onde os seus **próprios arquivos criativos** também ficam. Sem servidor, sem console de administração, sem pull request: está tudo no seu dispositivo.

- **Traga seus arquivos.** Arraste qualquer imagem, SVG, clipe de áudio, vídeo, Lottie ou PDF para a área de upload — ou clique para escolher — e ele aparece no seu catálogo instantaneamente, pronto no seletor de ativos de todas as ferramentas. Importe quanto quiser; nada sai do seu dispositivo.
- **Favorite o que você mais usa.** Marque um ativo (ou uma amostra de cor da marca) com ★ e ele é fixado no topo de todos os seletores, deixando seu logo ou cor favoritos a um clique de distância.
- **Organize.** Recategorize um ativo em um grupo diferente, oculte um ativo de marca compartilhado que você não usa (com **Mostrar ocultos** para trazê-lo de volta), ou exclua definitivamente seus próprios uploads.

### Leve sua paleta e suas fontes para qualquer lugar

O painel de **Amostras** do Catálogo não é só para referência — clique em uma cor para copiá-la, ou **baixe toda a paleta da marca** no formato que a sua outra ferramenta entende:

- **Design tokens (JSON)**, **variáveis CSS** ou **classes CSS** — leve a marca direto para uma folha de estilos ou um build;
- **Adobe Swatch Exchange (.ase)** — carregue no Illustrator ou Photoshop;
- **Paleta do GIMP (.gpl)** — para o GIMP ou o Inkscape.

O painel de **Fontes** lista as fontes da sua marca com um botão de **download** ao lado de cada uma, para instalar localmente ou entregar a uma gráfica. (A aba Cores do [Brand Studio](/info/brand-studio.html) oferece o mesmo download de paleta.)

Os ativos são metade do caminho aberto e faça-você-mesmo; a outra metade é **criar suas próprias ferramentas** — a tela livre (Layout Studio, descrita acima) permite construir uma visualmente, sem precisar de código.

## Som e acessibilidade

O Lolly busca ser confortável de usar para todo mundo. A interface é navegável pelo teclado, os controles personalizados têm rótulos adequados para leitores de tela, e a pré-visualização ao vivo de cada ferramenta é exposta como uma única imagem rotulada, descrevendo o que está sendo criado.

Uma camada suave de **sons assistivos** confirma o que você faz — chegar à galeria, uma verificação válida ou inválida de Content Credentials, fechar um painel, trocar de filtro. Isso vem **ativado por padrão**, mas é sempre opcional: desative o **Som** em qualquer lugar onde o interruptor aparecer (no popover de opções de cada view, ou no **Perfil**), e a escolha é lembrada.

Ao lado desse interruptor fica o **Modo Neurospicy** — uma faixa de foco de fundo, calma e opcional, que toca discretamente enquanto você trabalha. Ao ativá-la, abre-se um pequeno **dock de player** no canto inferior que acompanha você por todo o app; a partir dele você pode buscar e escolher uma faixa, avançar e voltar, ajustar o volume, e minimizá-lo ou fechá-lo. A lista de faixas abrange algumas categorias — músicas procedurais do *Lolly Sings*, loops e batidas ambiente, seu próprio áudio enviado, e algumas estações de **rádio** ao vivo da internet (estas precisam de conexão; todo o resto toca offline). Ele vem **desativado por padrão** e, assim como o Som, é lembrado entre sessões e dispositivos. Desativar o Som também silencia a faixa de foco.

## Armazenamento e privacidade

Tudo é armazenado no banco de dados local do seu navegador (IndexedDB): seu perfil, sessões salvas, imagens enviadas e um cache do conteúdo do catálogo baixado. **Perfil → Armazenamento** mostra o uso e permite que você:

- **Limpar cache** — descarta o conteúdo do catálogo baixado (é sincronizado novamente no próximo carregamento).
- **Limpar todos os meus dados** — apaga perfil, sessões e imagens. *Não pode ser desfeito.*

Nada é transmitido para lugar nenhum. Sem telemetria, sem renderização na nuvem.

## Mudando para outro dispositivo

Como tudo fica no seu dispositivo, **Perfil → Armazenamento → Mover para outro dispositivo** permite levar tudo para uma segunda instalação — sem conta, sem nuvem:

- **Exportar meus dados** baixa um único `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (as partes do nome vêm do seu perfil e são omitidas se não estiverem definidas; `<n>` é um contador diário para que exportações no mesmo dia não colidam) contendo seu perfil, cada sessão salva (com sua miniatura), suas imagens enviadas e suas preferências (tema, largura da barra lateral, estatísticas locais de atividade).
- **Importar dados…** na outra instalação lê esse arquivo de volta. A operação **mescla**: qualquer coisa com o mesmo nome (seu perfil, uma sessão, uma imagem) é substituída pela cópia importada; tudo o mais naquele dispositivo é mantido. As sessões salvas se reconectam automaticamente às suas imagens importadas.

O cache do catálogo não está incluído — ele se baixa novamente sozinho no novo dispositivo. O pacote é um zip simples (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, com id de formato `lolly-backup`), então sobrevive intacto a e-mail, USB ou AirDrop, e é o mesmo formato lido por todos os shells. Cada parte tem um checksum, então um arquivo danificado no trajeto é detectado na importação em vez de ser restaurado pela metade. (Especificação completa do formato: [Transferência de Dados](/info/data-transfer.html).)

## Importando um design (Figma, Penpot, Illustrator, InDesign)

Você pode trazer um design existente para o Lolly e continuar trabalhando nele: abra o **Layout Studio**, clique em **Importar um design** na barra de ferramentas da tela, e escolha um **.fig** ou SVG do Figma, um **.penpot** do Penpot, um **.ai** / **.pdf** do Illustrator, ou um **.idml** do InDesign. As camadas viram caixas editáveis na tela livre — o texto continua reeditável, as imagens vão para **Minhas imagens**, e a tipografia e as cores seguem os padrões globais da marca — depois o resultado é salvo, compartilhado e renderizado como qualquer outra sessão. O parse acontece inteiramente no seu dispositivo. Detalhes completos: **[Importar um design](/info/design-import.html)**.

## Exportando

Veja **[Exportação e Formatos](/info/exporting.html)** para a história completa — escolher um formato, tamanho de saída e unidades de impressão, transparência, vídeo e copiar/compartilhar. Resumindo: escolha um formato, ajuste o tamanho se precisar, e **Baixar** (ou **Copiar** para a área de transferência).

## Modo Batch (Pro)

Para usuários avançados, o **Batch** (acessível pela galeria, restrito à feature flag Pro, que vem ativada por padrão) renderiza várias variações de uma vez — uma grade em que cada linha é um conjunto de inputs, exportados juntos. Ideal para localizar um cartão em uma dezena de idiomas ou gerar cada variante de tamanho em uma única passagem. Preencha as linhas digitando, colando direto de uma planilha, ou importando um CSV (você também pode exportar um de volta), e defina formato, tamanho e nome do arquivo de saída por linha. Salve uma grade inteira como uma **sessão de batch** nomeada, que reabre pela galeria, e baixe cada linha como um único `.zip`.

O Batch serve para gerar **muitas variantes de um mesmo template** de uma vez. Para renderizar novamente sessões que você **já salvou**, use **Projetos → Renderizar pasta / Renderizar seleção** (acima) — sem precisar do Pro.

## Offline e instalação

O Lolly é um PWA. Depois do primeiro carregamento, ele funciona **offline** — instale-o pela barra de endereços do seu navegador (ou *Adicionar à tela de início* no celular) para uma experiência em tela cheia, como a de um app. Ele se atualiza sozinho quando você volta a ficar online.
