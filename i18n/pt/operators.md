# Lolly para Operadores

### Uma estratégia de segurança e inteligência em defesa profunda - que por acaso também é uma plataforma de produção criativa

O sistema imunológico organizacional de confiança zero que envolve o que você já faz - para que o trabalho criativo rotineiro que suas equipes precisam todo dia aconteça *dentro* do seu perímetro em vez de vazar dele.

**O que você ganha com isso.** Você passa a ser a pessoa que disse sim a algo ao mesmo tempo seguro *e* popular. Você fecha uma brecha de exfiltração, ganha capacidade e elimina uma fila de solicitações em um único movimento - a rara vitória de segurança que torna você mais querido, não menos. Nenhuma ligação às 3 da manhã do jurídico porque arquivos embargados ou dados de clientes acabaram parando em uma ferramenta web qualquer; menos fornecedores SaaS, contratos e auditorias na sua mesa; e uma trilha de auditoria totalmente reprodutível para apontar quando alguém perguntar. Você dorme melhor e ainda alegra alguns dias no processo.

Lolly não é uma ferramenta criativa de segunda categoria: coloca saída com qualidade de produção nas mãos de todos, e a experiência de criação guiada por marca não perde para nenhuma. O motivo pelo qual é *seguro* distribuí-la amplamente é arquitetural: nada é enviado que você não colocou lá, todo resultado é reproduzível e toda exportação pode carregar múltiplas camadas de registros criptográficos líderes do setor. Não importa como um documento chegou à sua mesa, você consegue ver sua proveniência completa, se foi adulterado e se você consegue recriá-lo com fidelidade de pixel.

> **Onde estamos hoje.** As propriedades de segurança do Lolly são fortes por design, e seus engines de criptografia e de análise de arquivos estão passando pelo endurecimento de infraestrutura de nível empresarial da SUSE. Os selos, a assinatura e a criptografia no dispositivo abaixo são reais e defensáveis agora, e estão amadurecendo em direção à certificação independente - então, onde um contrato exigir garantia certificada, implante-os como defesa em profundidade enquanto esse processo é concluído.

## A vantagem estratégica

A forma habitual como o trabalho criativo rotineiro é feito é uma superfície de risco: arquivos enviados por e-mail a contratados de design externos, assets de marca carregados em uma dezena de editores SaaS, dados de clientes colados na ferramenta web de um desconhecido para "só fazer um gráfico rápido". Cada um desses casos é dado saindo do seu controle.

O Lolly inverte isso. O trabalho que *causava* esses vazamentos - o cartão de citação, o banner localizado, o crachá de evento, a captura de tela com dados removidos - agora acontece em uma ferramenta que roda no próprio dispositivo do funcionário, contra sua marca, sem servidor no meio. Você não adicionou um controle em cima de um fluxo de trabalho arriscado; você substituiu o fluxo de trabalho arriscado por um que não tem caminho de exfiltração para começar.

- **A configuração é sua.** O engine e os shells são open source (MPL-2.0). Sobreponha sua própria autenticação, telemetria ou CA; hospede ou não; você mantém controle total de recursos e custo, rastreado no git, não preso a um banco de dados SaaS.
- **A governança pode ser dados, não um painel.** Quando você quiser esse controle, gerencie o catálogo de ferramentas como um repositório Git - a revisão de pull request se torna aprovação de marca, com trilha de auditoria completa e reversão instantânea de todo template que sua força de trabalho pode tocar. É uma opção, não uma obrigação, e recai em exatamente uma mesa: os criadores trabalham inteiramente dentro do app, salvando o que fazem como uma **sessão** e repassando como um link de compartilhamento, um backup ou uma colaboração ao vivo - nada disso exige git. Quando uma dessas sessões merece se tornar um ponto de partida permanente, quem administra a implantação abre o link, grava seus valores como um **template** nessa ferramenta no pacote de marca e faz o commit. A partir daí ele aparece no seletor "New from template" da ferramenta e pode receber link direto como `?template=<id>`. O Git é a etapa de fixação do administrador, usada uma vez, e nunca algo que um criador precise tocar. Veja [Adoção & Governança](/info/adoption-governance.html).
- **As barreiras de proteção são estruturais.** As restrições de marca estão codificadas nos templates, não publicadas como diretrizes que as pessoas podem ignorar. A saída errada não é desencorajada - é irrepresentável.

> **Você governa todo o revezamento.** Um criativo cria as regras e um desenvolvedor as escala, mas é o operador que torna esse ciclo de vida seguro para rodar em toda a organização - a mesma ferramenta que permite a um representante se autoatender em um avião é uma que você pode controlar via revisão no Git, implantar via seu MDM e verificar criptograficamente. Veja como os papéis se combinam em [O ciclo de vida de uma campanha](/info/overview.html#the-lifecycle-of-a-campaign), e como você governa isso em [Adoção & Governança](/info/adoption-governance.html).

## Elimine a fila de solicitações enquanto prolifera conteúdo.

Um dos objetivos do Lolly é a **deflexão de solicitações de design**: solicitações rotineiras que nunca precisam chegar a um designer porque a pessoa que precisava do asset o fez sozinha, corretamente, em minutos. Cada chamado desviado é ao mesmo tempo um ganho de produtividade e um arquivo a menos trocando de mãos.

O Lolly é construído para se adaptar a como sua organização realmente opera - não há uma única forma correta de implantá-lo:

- **Implante, não sirva.** Distribua o Lolly para dispositivos através do seu MDM existente (Intune, Jamf, Munki…). Ele roda localmente como um app de desktop/mobile ou um PWA offline - funciona atrás de qualquer firewall, em qualquer ambiente isolado (air-gapped), sem servidor para manter e com a TI no controle do ritmo de atualizações.
- **Apenas sirva.** Rode uma instância dentro da sua rede (ou atrás de uma VPN); os usuários a acessam pelo navegador, nada instalado. Publique uma ferramenta uma vez, todos a têm imediatamente; combine com seu IdP para controle de acesso.
- **Híbrido.** Apps locais para trabalho de campo offline, uma versão de navegador sempre atualizada para máquinas emprestadas - ambos apontando para a mesma biblioteca de ferramentas.

Os modelos completos de implantação e o passo a passo de administração estão em [Implantação](/info/deployment.html) e [Configuração](/info/configuration.html).

## Utilitários antiexfiltração

Uma categoria de ferramentas do Lolly - os utilitários de privacidade - existe *especificamente* para manter arquivos dentro do perímetro.


- **Remover dados ocultos**
 Remove localização e todas as informações ocultas de identificação de documentos e arquivos de mídia.

- **Text Helper**  
Anonimize, codifique, formate e manipule texto estruturado e não estruturado. 

- **Compress PDF**
Reduza um PDF grande demais no próprio dispositivo, para que ninguém recorra a um site de terceiros "compress my PDF" no momento em que um arquivo fica grande demais para enviar por e-mail - que é exatamente onde os dados escapam pela janela. 

Todas essas são transformações no próprio dispositivo: seu arquivo ou dado entra, bytes limpos saem e **não há servidor para onde enviar**. Elas são o oposto deliberado da ferramenta típica de "enviar seu arquivo para o site de um estranho para limpá-lo" à qual um funcionário bem-intencionado recorreria de outra forma.

![Strip Hidden Data: o arquivo chega à tela e o selo declara claramente que nada é enviado](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper é o mesmo acordo, mas para texto em vez de arquivos. É a bancada de trabalho com abas que um funcionário, de outra forma, sairia procurando no site de um estranho, e ela não declara nenhuma entrada porque nada do que toca jamais sai da página.

![A bancada do Text Helper - uma barra de abas de operação acima de um cartão que declara que nada do que você cola sai do seu dispositivo](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF completa o conjunto: o anexo grande demais encolhe sob um nível de qualidade que você escolhe, na máquina que já o guarda.

![Compress PDF - um nível de qualidade e um interruptor de escala de cinza à esquerda, uma zona de soltar para o seu próprio PDF à direita e nenhum envio em lugar nenhum](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinismo e reprodutibilidade

Toda entrada de uma ferramenta pode ser expressa como um parâmetro de URL, e as mesmas entradas produzem o mesmo arquivo. Isso tem duas consequências operacionais:

- **A URL é o artefato.** Faça commit do link, regenere o recurso sob demanda - sem binários versionados no Git, sem caçar "a versão mais recente" no chat. IDs de recursos e de ferramentas são contratos permanentes, então um link gerado hoje ainda resolve mais tarde.
- **A CLI é o mesmo caminho de renderização** que a GUI, então os pipelines de build e o aplicativo nunca divergem. Gere imagens OG, cartões sociais e visuais de dados no momento do build, de forma reprodutível.

Prompt to Image é o determinismo em sua forma mais simples: o texto é toda a entrada, a imagem tipografada é toda a saída e o mesmo texto sempre é composto da mesma forma.

![Prompt to Image - um bloco de texto de prompt tipografado em uma imagem quadrada, sem nada no resultado que não estivesse na entrada](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Proveniência e Content Credentials

![A zona de soltar do Verify aceita qualquer arquivo, de qualquer origem, e o lê sem nenhuma chamada de rede](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

As exportações podem carregar **Content Credentials** - um manifesto [C2PA](https://c2pa.org) assinado, vinculado a um hash dos bytes do arquivo. Qualquer alteração posterior no arquivo quebra o selo, então um verificador compatível com C2PA **detecta a alteração criptograficamente, offline**. A credencial é tamper-*evidente*: ela sinaliza a adulteração em vez de impedi-la, o que é precisamente o que torna possível a verificação totalmente offline.

- **Ativado por padrão, no dispositivo.** A chave de assinatura é gerada no dispositivo, é não extraível (nem a própria Lolly consegue lê-la) e a assinatura acontece localmente - só o *cadastro* opcional de identidade chega a tocar a rede.
- **Níveis de confiança.** Uma exportação não cadastrada é bem formada, mas assinada de forma anônima (`untrusted`). Cadastre uma **identidade verificada** (certificado de curta duração emitido pela CA da Lolly, vinculado a um e-mail) e verificadores que fixam a raiz da Lolly relatam `trusted` + o e-mail do assinante. Uma autoridade de carimbo de tempo confiável e a aprovação por validador de terceiros (conformidade C2PA) estão no roteiro. Cada nível é explícito, e um arquivo só reivindica a confiança que consegue provar.
- **A validade da credencial** é escolha do operador/usuário no momento da assinatura: 7 / 30 / 90 / 365 dias, padrão 30.
- **O Lolly Imprint.** Um segundo sinal complementar que é **ativado por padrão**: uma marca d'água de pixel invisível incorporada às exportações raster (e aos rasters renderizados pela Lolly dentro de um PDF/PPTX, nunca a imagem embutida do próprio usuário). Onde a credencial morre com qualquer mudança de contêiner, o Imprint sobrevive a um resalvar ou a uma captura de tela - uma indicação durável de "esses pixels passaram pela Lolly", apenas de presença, sem dados pessoais. É segurança por obscuridade, não uma defesa robusta, e complementa a credencial em vez de substituí-la. `imprint=0` desativa.
- **Content Credentials duráveis (opcional).** Uma exportação raster pode carregar adicionalmente uma marca *durável* invisível que codifica um identificador de vínculo flexível (soft-binding), para que a credencial C2PA possa ser recuperada mesmo depois que um upload em rede social ou um resalvar tenha removido os metadados do arquivo - o caso em que uma credencial normal se perderia. É exclusiva para raster e custa uma passagem de codificação neural, então vem desativada por padrão (`durable=1` para ativar). A Lolly reconhece sua própria marca durável offline no `/verify` hoje; a recuperação por ferramentas de terceiros (por exemplo, Adobe) virá assim que a resolução de soft-binding do setor estiver em vigor.
- **A verificação é no dispositivo.** Solte qualquer arquivo em `/verify` (ou `lolly validate <file>`) para um relatório offline sobre se ele foi genuinamente feito com a Lolly e permanece inalterado desde então. A visão Verify na web também sinaliza conteúdo gerado por IA, detecta o Lolly Imprint, verifica assinaturas **SEAL** (uma assinatura em nível de byte - com zero requisições de rede: o motor recebe um resolvedor de chave DNS *injetado* e nenhum shell injeta um hoje, então um registro que carrega sua própria chave `pk=` embutida verifica totalmente offline, enquanto um registro com chave via DNS relata "no key resolver and no inline key" em vez de tentar acessar a rede - veja `SealPublicKeyResolver` em `engine/src/seal.ts`), opcionalmente faz uma varredura profunda em busca de marcas d'água de pixel de terceiros (um download único de modelo no dispositivo) e revela dados ocultos - tudo sem enviar o arquivo. Veja [Content Credentials Identity](/info/content-credentials-identity.html).

> **Notas de interoperabilidade.** A Lolly verifica offline hoje suas próprias credenciais e muitas de terceiros, incluindo a leitura de manifestos de declaração C2PA **v2** de outros produtores. Dois contêineres seguem em andamento, ambos porque o C2PA ainda não tem um mapeamento padronizado para eles, então a Lolly carrega a credencial em um local próprio e o verificador da Lolly é quem a lê de volta: **WebM** (o manifesto viaja como um anexo Matroska) e **Ogg/Opus** (um campo `C2PA=` no cabeçalho de comentário OpusTags, com essa faixa de bytes excluída da vinculação para que o áudio ainda gere o mesmo hash). Tudo o mais segue a especificação - ferramentas de terceiros verificam MP4, M4A, MP3, WAV, PNG, JPEG e PDF da Lolly sem nenhuma adaptação. Veja `engine/src/c2pa-containers.ts` para os dois mapeamentos; eles convergem para o padrão assim que ele se consolidar.

## Criptografia e uso de senhas

Para arquivos que precisam viajar trancados, tudo acontece no dispositivo:

![O cartão de bloqueio no painel de exportação: uma senha e uma escolha explícita entre os dois níveis](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Senha de abertura de PDF** - *Standard* é um dissuasor RC4 de 40 bits (abre em qualquer lugar, pode viajar em um link); *Strong* é **AES-256** (PDF 2.0), digitada na exportação e nunca colocada em um link.
- **Downloads trancados** - um ZIP, uma pasta de Projects ou uma execução em lote pode ser trancado por inteiro: *Standard* ZipCrypto (fraco, universal) ou *Strong* **AES-256** (WinZip AE-2). Defesa em profundidade: qualquer PDF dentro de um zip Strong também fica *individualmente* trancado com AES-256, então permanece trancado depois de descompactado.
- **Links de compartilhamento protegidos por senha** - todo o estado do link é criptografado com AES-256 sob uma chave derivada por PBKDF2; só o texto cifrado viaja, a senha nunca está no link e a descriptografia acontece no navegador do destinatário.

## Pronto para air-gap

Air-gap é uma **forma de implantação de primeira classe**, não um modo especial - a Lolly funciona sem rede no momento da renderização, pronta para uso. O shell web é um PWA offline-first (service worker); fontes e WASM ficam armazenados no dispositivo; o estado da ferramenta é persistido localmente pela host bridge, nunca por `localStorage`. A forma suportada de uma ferramenta acessar a rede é uma capacidade `host.net` **na lista de permissões**, declarada em seu manifesto - um shell que não pode (ou não quer) atendê-la a substitui por um stub. Isso é um contrato de portabilidade, não uma barreira imposta (veja a nota sobre hooks abaixo), motivo pelo qual revisar o código das ferramentas continua sendo o controle - embora em um dispositivo air-gapped não haja nada a acessar de qualquer forma. Distribua os shells aos dispositivos pelo seu MDM, ou sirva uma instância dentro da sua rede, e uma instalação totalmente air-gapped renderiza, exporta, criptografa e verifica credenciais sem nada para onde "ligar para casa".

## Bom saber

Algumas coisas que vale a pena deixar claras antes de implantar:

- **Fortalecimento em andamento.** A criptografia e os analisadores estão passando pelo processo de fortalecimento em escala corporativa da SUSE (veja acima) - robustos por design hoje; implante como defesa em profundidade onde um contrato exigir garantia certificada.
- **Os hooks de ferramenta *não* são um sandbox de segurança.** O `hooks.js` opcional de uma ferramenta roda com a host bridge injetada, mas em um shell de navegador ele executa no realm da página e *pode* acessar `window`/`document`/`fetch`. Trate o código de uma ferramenta como trata qualquer código que executa - revise-o. É por isso que uma organização que mantém um catálogo compartilhado pode controlá-lo por revisão no Git; de qualquer forma, execute apenas ferramentas que você revisou até que o isolamento por Worker seja lançado.
- **As Content Credentials são evidenciadoras de violação.** Elas detectam a alteração em vez de impedi-la - veja as notas de interoperabilidade acima.
- **Dois níveis de criptografia.** As travas *Standard* são dissuasores rápidos e universais; *Strong* (AES-256) é proteção total - use Strong para qualquer coisa sensível, considerando que ela exige um leitor moderno.

## Para onde ir agora

- **[Segurança e Verificação](/info/security.html)** - os padrões, primitivas, modelo de confiança e testes por trás das credenciais e da criptografia acima.
- **[Adoção e Governança](/info/adoption-governance.html)** - personas, a métrica de desvio e a governança como dados, na íntegra.
- **[Implantação](/info/deployment.html)** - implantar/servir/híbrido, MDM e auto-hospedagem dos serviços.
- **[Configuração](/info/configuration.html)** - perfis, pacotes de marca, controle de capacidades e feature flags.
- **[Política de Privacidade](/info/privacy.html)** - a declaração formal do que é e do que não é coletado, armazenado e enviado.
- **[Superfície do Servidor](/info/server-surface.html)** - o inventário completo do que roda no lado do servidor (dois componentes opcionais) versus no dispositivo.
