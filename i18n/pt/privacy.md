# Política de Privacidade

*Última atualização: 19 de julho de 2026*

> **Em termos simples.** Os documentos, imagens, vídeos e arquivos que você cria
> no Lolly ficam no seu dispositivo. Não há contas para uso comum, não há cookies
> do próprio aplicativo e não há análises nem rastreadores em lugar nenhum do
> código - não é um "nós não usamos os dados", é algo genuinamente ausente do
> código-fonte. Existe uma lista curta e completa de exceções em que o software
> chega a se comunicar com uma rede, e cada uma delas está descrita abaixo em
> detalhes: o que sai, para quem e quando. A única exceção que envolve algo
> pessoal é um login que você precisa iniciar explicitamente. Se não está neste
> documento, não acontece.

## O que esta política cobre

O Lolly é um software de código aberto - um engine, vários shells de aplicativo
(web, desktop, mobile, CLI) e uma extensão de navegador - que qualquer pessoa
pode executar. Esta política tem duas partes:

- **O software em si**: o que ele faz e o que não faz com seus dados, onde quer
  que seja executado. Isso é uma propriedade do código, então vale para toda
  implantação do Lolly, seja a nossa ou a de qualquer outra pessoa.
- **lolly.tools**, a implantação de referência que a SUSE opera: as escolhas
  específicas feitas ao executar suas partes opcionais no lado do servidor (o que
  é registrado, por quanto tempo e por quem).

Se você estiver usando uma instância do Lolly auto-hospedada ou corporativa, o
comportamento do software descrito abaixo continua valendo, mas o *operador*
dessa instância - não a SUSE - é responsável por tudo que fica no lado do
servidor: o endpoint de renderização dele, o servidor MCP dele, a autoridade
certificadora de Content Credentials dele, caso ele opere uma. Peça a política
própria dele; veja [Adoção e Governança](/info/adoption-governance.html) para
saber o que operar o Lolly envolve.

## O aplicativo: o que fica no seu dispositivo

Os shells web, desktop e mobile do Lolly executam todo o engine de renderização
no lado do cliente. Abrir uma ferramenta, preencher entradas, visualizar e
exportar acontece tudo no seu dispositivo - nenhum servidor está envolvido, e o
aplicativo funciona offline depois de carregado.

**O aplicativo não define nenhum cookie.** Para funcionar, ele mantém uma pequena
quantidade de dados **apenas no seu dispositivo**, nunca transmitidos:

- **Preferências de interface** - tema, idioma, configurações de som,
  dimensionamento da barra lateral/zoom, escolhas de ordenação e visualização,
  quais dicas de introdução você já viu - no `localStorage`, para que estejam
  disponíveis antes de o aplicativo terminar de inicializar.
- **Um cache offline do catálogo de ferramentas e das prévias de assets**, para
  que a galeria funcione sem conexão.
- **Contadores de uso locais** para as estatísticas do seu cartão de perfil
  (quantas exportações, quais ferramentas) - um pequeno blob de tamanho limitado
  no `localStorage`, nunca lido por nós, nunca enviado a lugar nenhum.
- **Seus próprios documentos, sessões salvas, assets e fontes enviados** -
  armazenados no IndexedDB no seu dispositivo, nunca enviados, nunca lidos por
  ninguém além de você.

Nada disso é compartilhado, vendido ou usado para identificar ou rastrear você.
Não há nada a consentir, porque não há coleta acontecendo - apenas este aviso,
para que você saiba o que é guardado e onde. Apague tudo isso a qualquer momento
em **Perfil → Limpar todos os meus dados**, ou limpando o armazenamento do site
no seu navegador. (De acordo com o Art. 5(3) da Diretiva ePrivacy, o
armazenamento estritamente necessário para o serviço que você pediu não exige
consentimento - apenas transparência, que é o que tanto este documento quanto o
aviso dentro do aplicativo são.)

Seu próprio backup desses dados - o pacote `lolly-backup` produzido por
**Exportar e renderizar tudo** - é um arquivo que você mantém e controla. Ele
nunca toca nossos servidores a menos que você mesmo escolha enviá-lo para algum
lugar. Veja [Transferência de Dados](/info/data-transfer.html).

## Utilitários no dispositivo

Algumas ferramentas - **Remover Dados Ocultos**, **Comprimir PDF** e outras que
exibem o selo **"Executa no seu dispositivo"** - operam sobre um arquivo que você
fornece. O arquivo é lido na memória do seu navegador, transformado localmente e
devolvido como download. Ele nunca é enviado, porque não há servidor no caminho
para o qual enviá-lo. Esses utilitários funcionam offline, e sua saída não
carrega nenhuma marca d'água nem metadado nosso - o objetivo da maioria deles é
remover e proteger dados, não adicionar risco.

## Quando o aplicativo se comunica com uma rede, por completo

A tabela abaixo é a lista completa de tudo o que o aplicativo busca ou envia por
uma rede. Se não está aqui, o aplicativo não faz.

| O quê | O que realmente sai do seu dispositivo | Quando |
|---|---|---|
| Sincronização do catálogo de ferramentas | Nada pessoal - uma requisição do índice público de ferramentas e assets do próprio Lolly | Na inicialização, depois em cache offline |
| Capacidade de rede declarada por uma ferramenta | Aquilo que aquela ferramenta específica solicita (por exemplo, tiles de mapa) ao(s) host(s) específico(s) que ela inclui na lista de permissões do seu manifesto | Apenas enquanto você usa aquela ferramenta |
| Google Fonts | O nome da família de fontes escolhida e seu endereço IP, aos servidores de fontes do Google | Apenas se você adicionar uma Google Font no editor de marca - uma busca única por família, depois ela fica no seu dispositivo |
| Verificação de assinatura SEAL | Uma única consulta DNS por uma chave pública, ao domínio nomeado dentro do arquivo sendo verificado | Apenas se o Verify encontrar um registro SEAL em um arquivo que você verifica - nunca o arquivo em si |
| Modelos detectores de varredura profunda | Nada pessoal - um download único de modelo da mesma origem (não de terceiros) | Apenas se você optar pela varredura profunda do Verify |
| Instância remota | Aquilo que a instância que você indicar devolver, pela mesma sincronização de catálogo descrita acima | Apenas se você apontar explicitamente o shell para outra implantação do Lolly |

Nenhuma dessas envia seus documentos, projetos, sessões ou arquivos enviados para
lugar nenhum. Elas existem para trazer coisas *para* o seu dispositivo
(ferramentas, fontes, modelos, uma chave pública), nunca para enviar coisas
*dele*, com as exceções nomeadas explicitamente nas seções abaixo.

## URLs de renderização hot-link

O aplicativo em si permanece inteiramente no seu dispositivo. À parte disso, e
apenas se você usá-la, a lolly.tools (e qualquer instância auto-hospedada que a
deixe habilitada) responde a **URLs de renderização hot-link** -
`https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` - para que um link
compartilhado do Lolly possa aparecer como uma imagem ao vivo em um README, um
wiki ou um dashboard. Buscar uma dessas URLs pede ao servidor que renderize
**dados públicos de ferramenta e catálogo** com as entradas escritas na URL, e
essa é toda a troca:

- **Sem contas, sem cookies, sem estado.** O endpoint é anônimo; nada é
  armazenado por requisição e nada no seu dispositivo é lido. Seus documentos,
  sessões e envios nunca saem do seu navegador - eles não podem aparecer nesses
  links de forma alguma.
- **As entradas são públicas por construção** - elas são aquilo que o autor do
  link digitou na URL, legíveis por qualquer pessoa que o link alcance. Não
  coloque segredos em um link compartilhado; o Lolly disponibiliza um recurso de
  criptografia de link para conteúdo sensível.
- As respostas são **armazenadas em cache e têm limite de taxa** como qualquer
  imagem pública, e marcadas como `noindex` para que os mecanismos de busca não
  indexem suas renderizações.

Auto-hospedando o Lolly e não quer uma superfície de renderização pública? Defina
`LOLLY_DISABLE_RENDER_GET=1` e cada uma dessas URLs retornará 404.

## O servidor MCP (opcional, para agentes de IA)

O Lolly também pode ser acessado por um agente de IA através do Model Context
Protocol - um endpoint operado por um operador (a lolly.tools opera um; qualquer
pessoa pode auto-hospedar o seu, inclusive totalmente isolado da rede). Ele
compartilha a postura de "sem contas" do caminho de renderização, além de duas
ferramentas que necessariamente lidam com bytes de arquivo:

- **`lolly_transform`** (executa um utilitário no lado do servidor, em nome do
  agente que faz a chamada) e **`lolly_verify`** (verifica Content Credentials)
  ambos aceitam os bytes de um arquivo enviados por quem chama. Eles são
  processados **no mesmo processo, em memória**, e o resultado é retornado naquela
  mesma chamada - o arquivo nunca é gravado em disco e nunca é armazenado depois
  que a requisição termina.
- Todas as outras ferramentas - `lolly_render`, `lolly_build_url`,
  `lolly_list_tools`, `lolly_describe_tool` - funcionam apenas a partir de
  parâmetros (texto, números, cores, URLs, ids de assets do catálogo), as mesmas
  entradas que uma URL de renderização hot-link aceita.
- O acesso é feito por um token compartilhado que o operador emite para clientes
  em que confia, ou por OAuth 2.1 sem estado: tokens assinados de curta duração
  verificados contra um segredo compartilhado, nada armazenado no lado do
  servidor, e o próprio token nunca é gravado em um log ou em uma URL de
  renderização.

## Identidade de Content Credentials (um login que você mesmo precisa iniciar)

O Lolly pode selar um **Content Credential** criptográfico nas suas exportações
para que qualquer pessoa possa verificar, offline, que um arquivo está inalterado
desde que saiu do Lolly. Isso já vem **ativado por padrão e é totalmente local** -
a chave de assinatura é gerada no seu dispositivo, é **não extraível** (nem mesmo
o próprio código do Lolly consegue lê-la), e a assinatura em si acontece offline.
Esta seção trata do único passo *opcional* além disso: registrar uma identidade
verificada, para que suas exportações digam "Verificado - assinado por
\<seu email\>" em vez de uma chave anônima. **Se você pular o registro, nada nesta
seção se aplica a você, e nenhum dado pessoal jamais sai do seu dispositivo.**

Se você fizer o registro, veja exatamente o que acontece:

1. **Você escolhe um método de login** - GitHub, Google, SUSE (Okta) ou um link
   enviado por email. Para os três provedores OIDC, você é redirecionado para a
   própria página de login daquele provedor, regida pela política de privacidade
   dele, não pela nossa; o serviço de certificados do Lolly recebe de volta apenas
   um endereço de email verificado e o nome do provedor. Para o link por email, o
   endereço que você digita é passado ao **Resend**, uma API de email
   transacional, unicamente para entregar aquele único link.
2. **Um cookie de curta duração protege o redirecionamento.** Este é o único
   cookie que todo o sistema Lolly define: `lolly_ca_state`, `HttpOnly`, com
   escopo em `/api/ca`, expirando em dez minutos. Ele carrega um valor aleatório,
   não um identificador de rastreamento, e existe apenas para impedir que o
   redirecionamento OAuth seja forjado. Ele é apagado assim que o login é
   concluído.
3. **Seu endereço IP é usado, brevemente, para evitar abuso** dos endpoints de
   login (para que um script não possa inundar uma caixa de entrada nem esgotar a
   cota de email) - mantido apenas na memória do servidor, por uma janela
   deslizante de cerca de um minuto, nunca gravado em um log nem persistido em
   lugar nenhum.
4. **O serviço de certificados emite um certificado de curta duração** (7, 30, 90
   ou 365 dias, à sua escolha, limitado pela política do operador) vinculando seu
   email verificado à metade pública do par de chaves gerado no seu dispositivo. A
   metade privada nunca sai do seu navegador.
5. **A emissão é registrada**: seu endereço de email, o provedor que você usou, um
   hash curto do número de série do certificado e sua data de expiração, gravados
   nos logs operacionais do serviço - e, apenas se o operador tiver configurado
   um, em um webhook que ele controla. Este é o único lugar em que um pedaço dos
   seus dados pessoais é retido em um servidor, e ele existe para que um
   certificado comprometido ou emitido por engano possa ser rastreado e para que a
   própria emissão da CA possa ser auditada.
6. **Depois disso, a assinatura volta a ser offline** por toda a vida útil do
   certificado. Exportar um arquivo nunca contata o serviço de certificados -
   apenas o registro fez isso.

Especificamente para a lolly.tools: a SUSE opera o serviço de certificados e
mantém esses logs de emissão. Veja [Seus direitos](#your-rights) abaixo para saber
como perguntar sobre uma entrada ou removê-la.

## A extensão do navegador

A extensão de navegador **Lolly URL Screenshot** não coleta, armazena nem
transmite nenhum dado pessoal. Nenhuma análise, nenhum rastreamento, nenhum
servidor remoto.

**O que ela faz.** Quando você pede ao aplicativo web Lolly para tirar um
screenshot de uma URL, a extensão abre essa página em uma aba temporária em
segundo plano, captura-a no seu navegador usando o DevTools Protocol, devolve a
imagem ao aplicativo e fecha a aba. Tudo acontece localmente, no seu próprio
dispositivo e rede.

**Dados.**

- **Não coletamos nada.** A extensão não tem servidores e não faz nenhuma
  requisição de rede própria.
- **Imagens capturadas** vão direto para o aplicativo Lolly no mesmo navegador -
  nunca enviadas pela extensão.
- **As URLs que você captura** são usadas apenas para carregar aquela página
  específica para aquele screenshot específico. Elas não são registradas nem
  compartilhadas.

**Permissões.**

- **`debugger`** - para capturar a página renderizada via DevTools Protocol (o
  mesmo mecanismo que o aplicativo desktop do Lolly usa).
- **`tabs`** - para abrir e fechar a aba temporária em que a página carrega.
- **Acesso a hosts (`<all_urls>`)** - porque a página que você escolhe capturar
  pode estar em qualquer site. O Chrome exibe isso no momento da instalação como
  um aviso de permissão ampla; a extensão só visita a URL que você fornece a ela.

Nenhuma delas é usada para ler, monitorar ou transmitir sua navegação além
daquela captura solicitada.

## Logs de infraestrutura

Como qualquer site, os servidores por trás da lolly.tools - e por trás de
qualquer implantação do Lolly - geram logs de acesso padrão de servidor web
sempre que uma requisição chega até eles: endereço IP, caminho solicitado,
timestamp, user agent, mantidos por uma janela limitada para segurança e
prevenção de abuso. Esse é o comportamento básico de hospedagem, não algo que o
Lolly adiciona por cima, e ele nunca contém o conteúdo dos seus documentos,
porque estes nunca chegam a um servidor para começar. A única exceção deliberada
é um arquivo que você entrega explicitamente a uma chamada MCP `lolly_transform`
ou `lolly_verify`, que é processado em memória e nunca gravado em disco ou em um
log, como descrito acima.

## Privacidade de crianças

O Lolly não coleta conscientemente informações pessoais de ninguém, de nenhuma
idade, no curso normal de uso do aplicativo - não há nada para coletar. O único
lugar em que informações pessoais (um endereço de email) chegam a ser reunidas é o
registro de Content Credentials, descrito acima, que não é direcionado nem
destinado a crianças.

## Seus direitos

Como quase tudo o que o Lolly toca é armazenado apenas no seu próprio dispositivo,
a maior parte do que a lei de proteção de dados chama de "seus direitos" - acesso,
correção, exclusão, portabilidade - são coisas que você já pode fazer sozinho,
instantaneamente, sem pedir a ninguém: seus dados ficam no armazenamento do seu
navegador, em uma forma que você pode inspecionar, exportar (**Exportar e
renderizar tudo**, acima) ou excluir (**Perfil → Limpar todos os meus dados**).

Para o único pedaço de dado pessoal que pode acabar em um servidor - seu endereço
de email, caso você tenha feito o registro para Content Credentials - entre em
contato conosco (abaixo) para perguntar o que guardamos ou para removê-lo dos logs
ativos. Remover uma entrada de log não revoga um certificado já emitido (ele é de
curta duração por design e simplesmente expira); isso impede que aquela entrada
apareça em exportações futuras do log.

Não vendemos dados. Não temos nenhum para vender.

## Alterações nesta política

A data no topo muda sempre que este documento muda. Uma alteração que modifique o
que sai do seu dispositivo ou o que é retido ganha a própria linha aqui, não uma
edição silenciosa - se você quiser ver o que mudou, pergunte (abaixo) ou compare
com a [fonte pública](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contato

Dúvidas, ou uma solicitação de acordo com "Seus direitos" acima: **Andy
Fitzsimon**, [fitzy@suse.com](mailto:fitzy@suse.com). Para uma instância do Lolly
auto-hospedada ou corporativa, entre em contato com quem a opera - a SUSE e o
projeto de código aberto Lolly não guardam nenhum dado para implantações que não
operam.
