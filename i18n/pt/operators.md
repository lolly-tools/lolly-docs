# Lolly para Operadores

### Uma estratégia de proveniência e prevenção contra perda de dados, à prova de futuro e em profundidade - que por acaso é uma plataforma de produção criativa

O sistema imunológico organizacional que envolve o que você já faz - para que o trabalho criativo rotineiro de que suas equipes precisam todos os dias aconteça *dentro* do seu perímetro, em vez de vazar para fora dele.

**O que você ganha com isso.** Você se torna a pessoa que disse sim a algo ao mesmo tempo seguro *e* popular. Você fecha uma brecha de exfiltração e elimina a fila de pedidos de design em um só movimento - a rara vitória de segurança que faz com que você seja mais querido, não menos. Nenhuma ligação às 3 da manhã porque alguém enviou arquivos de marca por e-mail a um terceirizado ou colou dados de clientes em uma ferramenta web qualquer; menos fornecedores de SaaS, contratos e auditorias na sua mesa; e um histórico completo no git para apontar quando alguém perguntar quem aprovou o quê. Você dorme tranquilo à noite.

Lolly conquista seu lugar como ferramenta criativa: ela elimina a fila de design e coloca resultados com qualidade de produção nas mãos de todos. Mas o motivo pelo qual é *seguro* distribuí-la tão amplamente é arquitetural. Nada é enviado para servidores, tudo é reproduzível, e cada exportação pode carregar um registro criptográfico de sua origem. Esta página conta a história de segurança e implantação.

> **Onde isso está hoje.** As propriedades de segurança do Lolly são fortes por design, e seus mecanismos de criptografia e de análise de arquivos estão passando pelo hardening de infraestrutura de nível empresarial da SUSE. Os selos, a assinatura no dispositivo e a criptografia descritos abaixo são reais e defensáveis agora, e estão amadurecendo em direção à certificação independente - então, onde um contrato exigir garantia certificada, implante-os como defesa em profundidade enquanto esse processo é concluído.

## A vantagem estratégica

A forma usual como o trabalho criativo rotineiro é feito é uma superfície de risco: arquivos enviados por e-mail a terceirizados de design externos, ativos de marca enviados para uma dezena de editores SaaS, dados de clientes colados na ferramenta web de um desconhecido só para "fazer rapidinho uma arte". Cada um desses casos é dado saindo do seu controle.

Lolly inverte essa lógica. O trabalho que *causava* esses vazamentos - o card de citação, o banner localizado, o crachá de evento, a captura de tela com dados ocultados - agora acontece em uma ferramenta que roda no próprio dispositivo do colaborador, seguindo a sua marca, sem nenhum servidor envolvido. Você não adicionou um controle em cima de um fluxo de trabalho arriscado; você substituiu o fluxo de trabalho arriscado por um que, desde o início, não tem nenhum caminho de exfiltração.

- **A configuração é sua.** O engine e os shells são open source (MPL-2.0). Sobreponha sua própria autenticação, telemetria ou CA; hospede ou não; você mantém controle total de recursos e custos, rastreado no git, sem ficar preso a um banco de dados SaaS.
- **A governança pode ser dado, não um painel.** Quando você quer esse controle, gerencie o catálogo de ferramentas como um repositório Git - a revisão de pull requests se torna a aprovação de marca, com um histórico de auditoria completo e rollback instantâneo de cada template que sua força de trabalho pode tocar. É uma opção, não uma obrigação: equipes que só querem criar coisas criam suas próprias ferramentas no Layout Studio e importam seus próprios arquivos para o catálogo, inteiramente no app, sem nunca tocar no git. Veja [Adoção e Governança](/info/adoption-governance.html).
- **As barreiras de proteção são estruturais.** As restrições de marca são codificadas diretamente nos templates, não publicadas como diretrizes que as pessoas podem ignorar. O resultado errado não é apenas desencorajado - ele é irrepresentável.

## Elimine a fila de pedidos enquanto multiplica a produção de conteúdo.

Um dos objetivos do Lolly é a **deflexão de pedidos de design**: solicitações rotineiras que nunca precisam chegar a um designer porque a pessoa que precisava do ativo o fez ela mesma, corretamente, em minutos. Cada chamado desviado é tanto um ganho de produtividade quanto um arquivo a menos trocando de mãos.

O Lolly foi construído para se adaptar a como a sua organização realmente funciona - não existe uma única forma certa de implantá-lo:

- **Implante, não sirva.** Distribua o Lolly para os dispositivos através do seu MDM já existente (Intune, Jamf, Munki…). Ele roda localmente como um aplicativo desktop/mobile ou um PWA offline - funciona atrás de qualquer firewall, em qualquer ambiente isolado da rede, sem nenhum servidor para manter e com o TI no controle do ritmo das atualizações.
- **Apenas sirva.** Rode uma única instância dentro da sua rede (ou atrás de uma VPN); os usuários acessam pelo navegador, sem nada instalado. Publique uma ferramenta uma vez, e todos a têm imediatamente; combine com seu IdP para controle de acesso.
- **Híbrido.** Aplicativos locais para trabalho de campo offline, uma versão de navegador sempre atualizada para máquinas emprestadas - ambos apontando para a mesma biblioteca de ferramentas.

Os modelos completos de implantação e o passo a passo de administração estão em [Implantação](/info/deployment.html) e [Configuração](/info/configuration.html).

## Utilitários anti-exfiltração

Existe uma categoria de ferramentas do Lolly criada *especificamente* para manter os arquivos dentro do perímetro. Os utilitários de privacidade.


- **Remover dados ocultos**
 Remove a localização e todas as informações ocultas de identificação de documentos e arquivos de mídia.

- **Assistente de Texto**  
Anonimize, codifique, formate e manipule texto estruturado e não estruturado. 

- **Comprimir PDF**
Evite qualquer chance de 'crise do limite de e-mail' em que ferramentas web de terceiros se aproveitam e os dados 

- **Comprimir PDF**
Evite qualquer chance de 'crise do limite de e-mail' em que ferramentas web de terceiros se aproveitam e os dados escapam pela janela. 

Todas essas são transformações no próprio dispositivo: seu arquivo ou dado entra, bytes limpos saem, e **não existe nenhum servidor para onde enviar**. Elas são o oposto deliberado da típica ferramenta "envie seu arquivo para o site de um desconhecido para limpá-lo" que um funcionário bem-intencionado normalmente usaria.



## Determinismo e reprodutibilidade

Cada entrada de ferramenta pode ser expressa como um parâmetro de URL, e as mesmas entradas produzem o mesmo arquivo. Isso tem duas consequências para o operador:

- **A URL é o artefato.** Faça commit do link, regenere o ativo sob demanda - sem binários versionados no Git, sem correr atrás da "última versão" no chat. Os IDs de ativos e de ferramentas são contratos permanentes, então um link gerado hoje continuará funcionando mais tarde.
- **A CLI usa o mesmo caminho de renderização** que a GUI, então os pipelines de build e o aplicativo nunca ficam dessincronizados. Gere imagens OG, cards para redes sociais e visualizações de dados durante o build, de forma reproduzível.

## Proveniência e Content Credentials

As exportações podem carregar **Content Credentials** - um manifesto [C2PA](https://c2pa.org) assinado, vinculado a um hash dos bytes do arquivo. Qualquer alteração posterior no arquivo quebra o selo, então um verificador compatível com C2PA **detecta a alteração de forma criptográfica, offline**. A credencial é *evidência* de adulteração: ela sinaliza a adulteração em vez de impedi-la, que é justamente o que torna possível a verificação totalmente offline.

- **Ativado por padrão, no dispositivo.** A chave de assinatura é gerada no dispositivo, é não extraível (nem mesmo o Lolly consegue lê-la), e a assinatura acontece localmente - apenas o *cadastro* de identidade opcional chega a tocar na rede.
- **Níveis de confiança.** Uma exportação não cadastrada é estruturalmente válida, mas assinada de forma anônima (`untrusted`). Cadastre uma **identidade verificada** (certificado de curta duração emitido pela CA do Lolly, vinculado a um e-mail) e os verificadores que confiam na raiz do Lolly reportam `trusted` + o e-mail do assinante. Uma autoridade de carimbo de tempo confiável e o selo verde de validador terceirizado (conformidade C2PA) estão no roteiro. Cada nível é explícito, e um arquivo só reivindica a confiança que consegue provar.
- **A validade da credencial** é uma escolha do operador/usuário no momento da assinatura: 7 / 30 / 90 / 365 dias, com padrão de 30.
- **A verificação acontece no dispositivo.** Solte qualquer arquivo em `/valid` (ou `lolly validate <file>`) para obter um relatório offline sobre se ele foi genuinamente feito com o Lolly e permanece inalterado desde então. Veja [Identidade das Content Credentials](/info/content-credentials-identity.html).

> **Notas de interoperabilidade.** Hoje o Lolly verifica offline suas próprias credenciais e muitas de terceiros. Dois itens de interoperabilidade estão em andamento: ler totalmente os manifestos de claim **v2** do C2PA de outros produtores, e o WebM - que ainda não tem um mapeamento C2PA padronizado, então o Lolly anexa o manifesto como uma parte Matroska (ferramentas de terceiros verificam o MP4 do Lolly de imediato; o WebM virá assim que o padrão se estabilizar).

## Criptografia e senhas

Para arquivos que precisam viajar bloqueados, tudo acontece no dispositivo:

- **Senha de abertura em PDF** - o nível *Padrão* é um dissuasor RC4 de 40 bits (abre em qualquer lugar, pode viajar em um link); o nível *Forte* é **AES-256** (PDF 2.0), digitado no momento da exportação e nunca colocado em um link.
- **Downloads bloqueados** - um ZIP, uma pasta de Projetos ou uma execução em lote podem ser bloqueados por inteiro: *Padrão* usa ZipCrypto (fraco, universal) ou *Forte* usa **AES-256** (WinZip AE-2). Defesa em profundidade: qualquer PDF dentro de um zip Forte *também* fica individualmente bloqueado com AES-256, permanecendo protegido mesmo depois de descompactado.
- **Links de compartilhamento protegidos por senha** - todo o estado do link é criptografado com AES-256 sob uma chave derivada por PBKDF2; apenas o texto cifrado trafega, a senha nunca vai no link, e a descriptografia acontece no navegador do destinatário.

## Pronto para air-gap

O air-gap é uma **implantação de primeira classe**, não um modo especial - o Lolly roda sem rede no momento da renderização por padrão. O shell web é um PWA offline-first (service worker); fontes e WASM ficam armazenados no dispositivo; o estado da ferramenta é persistido localmente através do host bridge, nunca em `localStorage`. Qualquer ferramenta que acesse a rede só o faz através de uma capacidade `host.net` **na lista de permissões**, que precisa declarar em seu manifesto - um shell que não pode (ou não quer) cumprir isso a substitui por um stub. Distribua os shells para os dispositivos através do seu MDM, ou sirva uma única instância dentro da sua rede, e uma instalação totalmente isolada da rede renderiza, exporta, criptografa e verifica credenciais sem nada para se comunicar externamente.

## Bom saber

Algumas coisas que vale a pena ter claras antes de implantá-lo:

- **Hardening em andamento.** A criptografia e os analisadores estão passando pelo hardening em escala empresarial da SUSE (veja acima) - forte por design hoje; implante como defesa em profundidade onde um contrato exigir garantia certificada.
- **Os hooks de ferramentas *não* são um sandbox de segurança.** O `hooks.js` opcional de uma ferramenta roda com o host bridge injetado, mas em um shell de navegador ele executa no realm da página e *pode* acessar `window`/`document`/`fetch`. Trate o código de uma ferramenta como trataria qualquer código que você executa - revise-o. É por isso que uma organização que roda um catálogo compartilhado pode controlá-lo por revisão no Git; de qualquer forma, execute apenas ferramentas que você revisou até que o isolamento por Worker seja lançado.
- **As Content Credentials são evidência de adulteração.** Elas detectam a alteração em vez de impedi-la - veja as notas de interoperabilidade acima.
- **Dois níveis de criptografia.** Os bloqueios *Padrão* são dissuasores rápidos e universais; o *Forte* (AES-256) é proteção completa - use o Forte para qualquer coisa sensível, lembrando que ele exige um leitor moderno.

## Para onde ir a seguir

- **[Adoção e Governança](/info/adoption-governance.html)** - personas, a métrica de deflexão e a governança como dado, em detalhes.
- **[Implantação](/info/deployment.html)** - implantar/servir/híbrido, MDM e auto-hospedagem dos serviços.
- **[Configuração](/info/configuration.html)** - perfis, pacotes de marca, controle de capacidades e feature flags.
- **[Política de Privacidade](/info/privacy.html)** - a declaração formal de "não coleta nada, não envia nada".
