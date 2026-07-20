# FAQ

Perguntas frequentes exibidas no acordeão da página inicial `/info`.

**Como manter:** cada título `##` abaixo é uma pergunta; tudo o que estiver abaixo dele
(até o próximo `##`) é a resposta. As respostas usam o mesmo markdown simplificado do
restante do site - separe os parágrafos com uma linha em branco. Adicione, remova ou
reordene perguntas aqui e rode novamente `npm run build:info` (ou `npm run dev:web`).
Tudo o que estiver acima do primeiro `##` (este título e estas notas) é ignorado pelo build.

## O que acontece quando eu ativo o opt-in na página /profile?

Quando você usa o Lolly pela primeira vez, tudo o que você digita em qualquer lugar é totalmente privado até que você queira, deliberadamente, colocar essa informação lá fora, por meio de mídia ou de um link de compartilhamento (se estiver online).

Com o opt-in selecionado, incorporamos algumas informações do seu perfil como proveniência nos ativos e pacotes, para identificar você como a origem.

O Lolly produz um grande volume de conteúdo. Adotamos uma abordagem rígida de minimização de dados para reduzir riscos.

### O que são as feature flags?

As feature flags ativam ou desativam partes do Lolly. Normalmente é um administrador quem controla isso - com o Lolly, quem está no controle é você.

## Como eu consigo os aplicativos para celular ou desktop?

Qualquer pessoa pode distribuir seus próprios aplicativos; as ferramentas e a configuração desses aplicativos variam bastante dependendo do público a que se destinam. Portanto, não existe um único aplicativo - a menos que você mesmo o tenha criado ou que alguém relevante o forneça a você.

## Por que o nome "Lolly Tools"?

**Lolly** Porque a liberdade é doce.
**Ferramentas** ficam inativas quando não estão sendo usadas. Não espionam você, não rodam programas secretos.
Coloque-as para trabalhar: suas ordens, ações e termos.

**Lolly** é um termo australiano, neozelandês e britânico para "doces" ou "guloseimas". Assim como as balas (lollies), as ferramentas são bem saborosas para quem precisa delas.

E também estamos rindo do tempo e das contas que estamos economizando com essa abordagem.

## Quais obstáculos posso esperar ao adotar o Lolly?

O Lolly se encaixa em qualquer lugar onde você já gera arquivos - a CLI é o mesmo motor
do aplicativo, então uma pipeline executada às 2h da manhã não pode divergir do que uma
pessoa vê na pré-visualização em um navegador. O atrito da adoção raramente é técnico; é organizacional. Espere o seguinte:

**Um catálogo de marca com curadoria precisa ser criado.** O Lolly é uma plataforma, não um
pacote pronto com os seus templates. Para um *rollout governado*, alguém define o catálogo de
ativos compartilhado (logotipos, paletas, fontes como IDs permanentes) e escreve o manifesto +
template para cada tipo de saída. Isso não significa que as pessoas precisem esperar, porém - no
aplicativo aberto, qualquer um pode importar seus próprios arquivos para o catálogo e criar
ferramentas no Layout Studio desde o primeiro dia.

**A governança via git é opcional - e pouco familiar para quem não é engenheiro.** Se você mantém
um catálogo *compartilhado e controlado*, a ideia de que "a revisão do PR *é* a moderação" é
elegante para engenheiros e pouco familiar para a maioria das equipes de marca e marketing. Se as
pessoas donas das decisões de marca não vivem no git, você vai precisar de um fluxo de trabalho
que faça a ponte com elas - ou o TI silenciosamente se torna o parceiro estratégico de design e o
guardião institucional mais amplo (preferido por muitos em ambientes de produção de longa
duração). As equipes que não querem isso simplesmente pulam essa etapa.

**É deliberadamente restrito - apresente-o assim.** O Lolly não é para conteúdo personalizado ou
de destaque. Ele *é* o seu DAM pessoal - hidratado e potencializado pelo seu sistema de
design, ferramentas e catálogo - e *tem*, sim, uma tela aberta (Layout Studio), mas
mesmo ali as cores, a tipografia e os ativos seguem os globais de design ativos, de modo que a
liberdade de composição permanece dentro do sistema. Comparado ao Figma ou ao Canva, ele vai
parecer limitado. Julgado pelo que realmente é - geração de ativos operacionalizada, recorrente e
em escala massiva - nada compete. O enquadramento errado é o contratempo mais comum.

**Gestão de mudanças do lado de quem produz.** Os processos existentes já funcionam hoje, mesmo que
a saída esteja fora da marca. Redirecioná-los para o motor significa reteste e reaprendizado,
e "a gente já consegue gerar os arquivos" vira a desculpa para não migrar. Comece convertendo
uma saída de produção de alta visibilidade e mostrando o antes e depois lado a lado.

O Lolly eleva tudo.


## O que diferencia utilitários de ferramentas?

**Resposta básica →** Os utilitários nem sempre precisam renderizar e, por isso, podem ter uma UX diferente.

**Resposta real →** O motivo pelo qual os utilitários podem ser hospedados dentro do Lolly Tools é adicionar mais uma "camada de conveniência" de defesa para desincentivar a exfiltração de dados.

Por quê? Porque é sabido que, todos os dias, as pessoas pegam **conteúdo confidencial que já possuem** e o entregam a um
site qualquer para realizar uma pequena operação mecânica:

- "**Compactar este PDF**" → envia um contrato / contracheque / apresentação da diretoria para entidades desconhecidas.
- "**converter HEIC para JPG**" → envia fotos pessoais (com EXIF de GPS) para um serviço financiado por anúncios
- "**cortar / redimensionar esta imagem**" → envia uma captura de tela de produto ou um ativo ainda não lançado
- "**formatar este JSON**" / "decodificar este JWT" → cola respostas de API, tokens e segredos em um formatador
- "**mesclar estes PDFs**" → envia **dois documentos que nunca deveriam compartilhar um servidor**

Esses sites e sua enorme cauda longa de clones **não são confiáveis por padrão**, com
retenção desconhecida, jurisdições desconhecidas, subprocessadores desconhecidos e um modelo de
negócio de anúncios/afiliados que tem todo incentivo para guardar o que você entrega a eles. A operação é
trivial; **o conteúdo é o custo.**

Vencemos a guerra pela governança com conveniência e serviço excelentes.

## O Lolly consegue editar e renderizar meus arquivos do Figma, Penpot, Illustrator ou InDesign?

Sim. Abra o **Layout Studio** e clique em **Importar um design**: ele aceita um arquivo nativo do Figma em **.fig** (Salvar cópia local), uma exportação do Penpot em **.penpot**, um arquivo do Illustrator em **.ai** ou **.pdf**, um arquivo do InDesign em **.idml** (Arquivo → Exportar → InDesign Markup), ou **qualquer SVG** (a porta larga - quase qualquer aplicativo de design consegue exportar nesse formato). Tudo é processado inteiramente no seu dispositivo, sem necessidade de conta ou plugin.

As camadas chegam como caixas editáveis na tela aberta: o texto continua editável, as formas continuam formas, as imagens entram para a sua biblioteca local no dispositivo, e a tipografia e as cores seguem os globais da marca. Salve, e o layout se torna um template reutilizável e endereçável por URL que qualquer pessoa com o Lolly pode preencher novamente - e você pode misturar ferramentas dinâmicas (um QR code, um gráfico) que se renderizam de novo ao carregar. A partir daí, ele é renderizado como qualquer outra coisa no Lolly - SVG, PDF, PNG e o resto, reproduzível a partir da sua URL. Veja [Importar um design](/info/design-import.html).

## O Lolly consegue aplicar rebranding a uma apresentação do PowerPoint já existente?

Sim - de duas maneiras, ambas no seu dispositivo. O utilitário **Rebrand a Deck** pega um `.pptx` e troca o tema, as cores fixas no código e as fontes pela sua marca, enquanto gráficos, SmartArt e animações passam intactos - você recebe de volta um `.pptx`. Ou abra a apresentação no **Deck Builder** (Carregar → solte o arquivo) para editá-la slide a slide como objetos livres, já ajustados à marca, e exportar em PPTX, PDF ou vídeo. Ao soltar um `.pptx` em uma área de upload, em vez disso, os slides escolhidos ficam arquivados como ativos SVG na sua biblioteca. Veja [Importar um design → Apresentações e documentos](/info/design-import.html#decks-and-documents).

## O que acontece em 29 de agosto?

As ferramentas com a marca SUSE saem do projeto, e novas ferramentas de exemplo genéricas, definidas pelo usuário, assumem o lugar.

A SUSE vai operar seu próprio Lolly para proteger suas marcas registradas.

## Quanto a SUSE está mantendo privado? (ou seja, quando é o "rug-pull")

As marcas registradas e as ferramentas com a marca da SUSE são apenas para demonstração, até 29 de agosto. Você pode encontrar uma instância do Lolly sem marca em [lolly.ART](https://lolly.art).

A SUSE é uma empresa de infraestrutura open source empresarial, com mais de três décadas de liderança em plataformas. Seus produtos incluem Linux de nível empresarial e soluções de infraestrutura Cloud Native, Edge e de IA.

Do ponto de vista da SUSE, isso é sobre colocar em prática o discurso de soberania e segurança. A partir de hoje, a probabilidade de a SUSE transformar o Lolly em produto é praticamente zero absoluto.

Transparência total: a SUSE *está sim* construindo ferramentas internas para integrar o Lolly aos seus sistemas de TI - isso diz respeito à configuração interna da SUSE, não a desenvolvimento público versus privado.

Falando do lado público, o Lolly pretende ser construído por meio do [Open Build Service](https://openbuildservice.org/), com artefatos de cadeia de suprimentos seguros entregues pela [SUSE Application Collection](https://apps.rancher.io/applications).

Vamos construir o máximo que pudermos de forma aberta - só que você não vai ver ferramentas com a marca SUSE por muito tempo, nem a força de trabalho interna e os processos comerciais da SUSE, que não têm relação com o Lolly.

## Qual é o sabor daquele logo do Lolly?

Alguns dizem Limão, outros dizem Menta e às vezes Maçã - o Lolly traz a doçura, você é quem faz o sabor acontecer!
</content>
</invoke>
