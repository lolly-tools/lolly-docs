# Perfis - quem você é quando cria

Um **perfil** é a identidade de trabalho com a qual o Lolly cria. É o pequeno conjunto de detalhes que uma ferramenta pode usar para que você não precise redigitá-los toda vez - seu nome, dados de contato, uma foto de perfil opcional, algumas preferências - além de tudo que você acumula enquanto trabalha: sessões salvas, imagens enviadas e o total de atividade local.

Tudo em um perfil vive **no dispositivo**, no banco de dados local do navegador (IndexedDB no PWA web, o sistema de arquivos nos apps Tauri). Não existe conta e nada é enviado. Você o gerencia em **Perfil** (canto superior direito da galeria); as ferramentas apenas *leem* essas informações, e somente os campos específicos para os quais foram criadas para preencher automaticamente.

> Um perfil é sobre *você* (ou quem quer que esteja criando aqui). Ele é diferente da **Plataforma** - as cores, fontes e configurações globais da marca - e das **Capacidades**, o catálogo do que o aplicativo pode fazer. Veja [Perfil vs Plataforma vs Capacidades](#profile-vs-platform-vs-capabilities) no final.

## O que há em um perfil

As preferências são a única parte que muda a cara que o app tem pra você. Os cartões de tema são pré-visualizações ao vivo e se aplicam no instante em que você escolhe um, só neste dispositivo.

![Three theme cards, each previewing its own type and colour, with the active one flagged](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=1400&dpi=192&waitMs=1600&walker=1&format=svg&cropSelector=.profile-card--appearance&dark=1&filename=pd-theme-picker)

| Parte | O que é |
|---|---|
| **Nome** | Nome e sobrenome. |
| **Contato** | E-mail e telefone. |
| **Localização** | Cidade e país. |
| **Foto de perfil** | Uma foto opcional, recortada em formato quadrado e mantida como imagem local. Usada por ferramentas como assinaturas de e-mail, cartões de citação, blocos de cor e layouts dinâmicos. |
| **Usar meus dados** | Um único interruptor opcional. Ele controla se seus dados pessoais acompanham o arquivo como **proveniência** - a linha de autoria/crédito incorporada nos arquivos exportados - e como autor nas execuções em lote do **/pro**. (Ele não controla o preenchimento automático: veja [Como as ferramentas usam seu perfil](#how-tools-use-your-profile).) |
| **Preferências** | Seu tema (claro, escuro ou SUSE) e quais partes do aplicativo você habilitou via **Feature flags**. |
| **Seu trabalho** | Sessões salvas (com miniaturas) - organizadas em pastas aninhadas em **[Projetos](/info/using.html)** - sua biblioteca **Minhas imagens**, e as estatísticas de atividade local, tudo vinculado a este perfil. |

Nada disso é obrigatório. Um perfil em branco já é um bom perfil; você preenche apenas o que economiza digitação.

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&walker=1&localize=1&dark=1&filename=profile-details&sweep=1)

## Um perfil é um contexto, não apenas uma pessoa

A palavra "perfil" sugere uma única pessoa fixa, mas no Lolly é, na verdade, um **contexto de criação** - *quem você é enquanto cria isto*. Esse contexto pode assumir três formas diferentes, e o Lolly lida com todas elas da mesma maneira.

### Como indivíduo

![The headshot control, empty until you upload a photo that then stays on this device](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&cropSelector=.profile-side&walker=1&dark=1&filename=pd-profile-headshot)

O padrão. O perfil é você: seu nome, seu e-mail, sua foto de perfil. Configure uma vez e sua assinatura, seu crachá, seu lockup de conferência se preenchem sozinhos. É isso que a maioria das pessoas vai precisar.

### Como equipe

Um perfil não precisa ser uma única pessoa. Ele pode representar uma **equipe ou função dentro de uma organização**: o nome compartilhado da equipe, um endereço de caixa de entrada em grupo (`events@…`), um departamento, a foto da equipe ou a marca da unidade. Uma pessoa configura, exporta (veja abaixo), e o restante da equipe carrega o mesmo perfil - assim tudo que a equipe produz carrega detalhes consistentes sem que ninguém precise redigitá-los. Um quiosque compartilhado ou um laptop de demonstração emprestado pode rodar um único perfil de equipe que todos que o utilizam criam a partir dele.

### Como função - um chapéu que você veste às vezes

Este é o caso que o modelo rígido de "uma pessoa, um perfil" não cobre. Você pode ser um **gerente de eventos três dias por ano** e outra coisa completamente diferente no resto do tempo. Nesses três dias você quer os detalhes do evento, a caixa de entrada do evento, talvez uma submarca do evento para preencher seus crachás e sinalizações; nos outros 362 dias você quer sua identidade normal de volta.

No Lolly, essa função é apenas **outro perfil que você mantém à mão** - um pacote salvo (próxima seção) que você carrega para o evento e guarda depois. A função é um chapéu, não uma nova conta. Vista-o quando precisar, tire-o quando terminar.

## Uma instalação, um perfil ativo - vários que você pode manter

Armazenamento é onde as duas metades disso vivem: o medidor dá conta de cada byte que esta instalação está guardando, categoria por categoria, e os botões abaixo dele são como você limpa ou leva tudo embora.

![The storage meter, breaking down saved sessions, images and cache against what the browser actually reports](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=1440&height=1800&dpi=192&waitMs=2400&css=.store-manages%2C.storage-subsection%2C.storage-actions%7Bdisplay%3Anone%7D&walker=1&format=svg&cropSelector=.store-meter&dark=1&filename=pd-storage-meter)

A qualquer momento uma instalação tem **um perfil ativo** - os detalhes que uma ferramenta vê agora. Não há um seletor de perfil dentro do app; em vez disso, cada perfil é um **pacote portátil** (um único `.zip`, veja [abaixo](#moving-a-profile-to-a-new-device)). Esse é deliberadamente o mesmo mecanismo usado para migrar para um novo dispositivo - um perfil é um arquivo que você pode salvar, copiar e carregar.

Então, se você realmente alterna entre vários contextos (você, sua equipe, o chapéu de gerente de eventos), você mantém vários pacotes e carrega o que precisar:

- <!--i:trash--> **Troca mais limpa:** **Perfil → Armazenamento → Limpar todos os meus dados**, depois **Importar** o pacote do contexto para o qual você está migrando. Agora você está criando puramente como esse perfil.
- <!--i:layers--> **Em camadas:** importar *sem* limpar antes **mescla** - o perfil importado, as sessões e as imagens se somam ao que já existe, substituindo qualquer coisa com o mesmo nome e mantendo o resto. Útil para trazer as sessões salvas de uma equipe para a sua própria configuração; não é o que você quer se precisa de uma fronteira limpa entre funções.
- <!--i:monitor--> **Lado a lado:** como tudo é restrito ao dispositivo, um perfil de navegador separado, uma conta de usuário separada, ou um segundo PWA instalado carregam, cada um, seu próprio perfil independente do Lolly. Rode sua instalação pessoal e a instalação do quiosque do evento ao mesmo tempo, sem precisar alternar.

> Mantenha um pacote por contexto e renomeie os arquivos de acordo com o que representam (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). O arquivo *é* o perfil.

## Movendo um perfil para um novo dispositivo

![The two buttons that move a whole install: Export my data writes one zip, Import data reads it back](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Dstorage-section&width=1440&height=1800&dpi=192&waitMs=2400&css=.store-manages%7Bdisplay%3Anone%7D&walker=1&format=svg&cropSelector=.storage-subsection&dark=1&filename=pd-transfer-controls&sweep=1)

Como um perfil é totalmente local, a única forma de levá-lo para uma instalação em branco - um laptop novo, um navegador recém-resetado, a máquina de um colega, um computador offline - é **carregar o arquivo**. Nenhum login o restaura para você, e esse é o objetivo: nada jamais saiu do seu dispositivo, para começar.

Em **Perfil → Armazenamento → Mover para outro dispositivo**:

- <!--i:download--> **Exportar meus dados** baixa um `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - nomeado de acordo com o perfil ao qual pertence, com um número sequencial diário para que exportações repetidas não colidam (partes do nome são omitidas quando o perfil não as possui). Ele contém seu perfil, cada sessão salva (com sua miniatura), suas imagens enviadas e suas preferências (tema, layout, estatísticas de atividade local).
- <!--i:upload--> **Importar dados…** na outra instalação lê esse arquivo de volta e você retoma exatamente de onde parou.

O pacote é um zip simples e autocontido, então ele viaja por **qualquer** meio - USB, AirDrop, um compartilhamento de rede, e-mail para si mesmo - e o destino pode estar completamente offline. Cada parte tem checksum, então um arquivo danificado no transporte é detectado na importação em vez de ser restaurado pela metade. A importação **mescla** (perfil/sessão/imagem com o mesmo nome é sobrescrito; todo o resto é mantido), então ela nunca apaga um destino que já estava em uso.

O que não viaja: o cache do catálogo (ele se baixa novamente sozinho no novo dispositivo) e as próprias ferramentas (presumidas já presentes).

Para o layout exato do pacote, a política de versão e as regras de integridade, veja **[Transferência de Dados](/info/data-transfer.html)**; para o passo a passo completo, **[Usando o Lolly → Mover para outro dispositivo](/info/using.html#moving-to-another-device)**.

## Como as ferramentas usam seu perfil

![The single Use my details switch, sitting beside Save Profile and off until you turn it on](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=svg&cropSelector=.profile-check&walker=1&dark=1&filename=pd-use-my-details)

Uma ferramenta só *pré-preenche* os campos do perfil para os quais foi explicitamente construída:

**Vínculo explícito.** O autor de uma ferramenta marca um campo como proveniente do perfil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Quando a ferramenta abre, esse campo se pré-preenche a partir do seu perfil - e você ainda pode substituí-lo para aquela sessão específica sem alterar o perfil. O preenchimento automático é uma conveniência local e acontece independentemente de **Usar meus dados** estar ativado ou não.

**O opt-in (proveniência).** Quando você exporta um ativo, seus dados opcionalmente acompanham o arquivo como **proveniência** - uma linha de autoria/crédito incorporada nos metadados do arquivo (PNG, PDF, SVG, …) - para que um ativo finalizado possa dizer quem o fez. *Isso* é o que **Usar meus dados** controla: deixe desativado e a exportação ainda carrega a atribuição de ferramenta/plataforma "Made with Lolly", mas nenhuma linha pessoal de autor/contato é incorporada. (O mesmo opt-in define o autor nas execuções em lote do **/pro**.) (Autores de ferramentas: veja [Criação de Ferramentas → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) e [API do Host → `host.profile`](/info/host-api.html#host-profile).)

## Perfil vs Plataforma vs Capacidades

Três coisas ficam próximas na interface e são fáceis de confundir:

- <!--i:people--> **Perfil** - *você* (ou sua equipe, ou a função que você está exercendo): nome, contato, foto de perfil, seu trabalho salvo. Pessoal, local ao dispositivo, portátil como um pacote.
- <!--i:palette--> **Plataforma** - a *marca*: cores, fontes e configurações globais contra as quais toda ferramenta renderiza. Compartilhada e consistente, não pessoal.
- <!--i:sliders--> **Capacidades** - *o que o aplicativo pode fazer*: o conjunto completo de recursos e as ferramentas disponíveis para você.

Um perfil muda de quem um ativo *é*; a plataforma muda a *aparência* dele; as capacidades são *o que você pode criar*.

### "Perfil" significa duas outras coisas em outros lugares - não esta

![The Verified identity card, phone-width: the certificate lifetime picker and the enrolment step beneath it - the identity profile, separate from your personal details](/t/url-shot?url=%2F%23%2Fprofile%3Ffocus%3Didentity-section&width=430&height=1600&dpi=192&waitMs=2400&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone%7D&format=svg&walker=1&cropSelector=%23identity-section&dark=1&filename=pv-identity-enrol)

A palavra é sobrecarregada em todo o projeto. Nenhuma das duas é o perfil pessoal do qual esta página trata:

- <!--i:box--> **Perfil de conteúdo** - uma configuração em tempo de build no `profiles.json` que vincula um conjunto de pacotes de ferramentas a um catálogo de marca (por exemplo, `suse`, `lolly-start`). É o que um operador escolhe ao fazer o deploy, e é também o que o **parâmetro de URL/CLI** `profile` seleciona como variante de *cor* no momento da exportação (a condição de impressão ICC/CMYK - veja [Modo URL](/info/url-mode.html)). Ambos dizem respeito ao *build/saída*, não a *você*. Veja [Configuração](/info/configuration.html).
- <!--i:seal--> **Perfil de identidade** - a **identidade verificada de Content Credentials** opcional que você pode registrar (um certificado de curta duração que vincula seu e-mail às suas exportações assinadas). Essa é uma identidade de assinatura, separada dos campos de nome/contato do perfil pessoal, embora **Usar meus dados** controle se algum dos dois é incorporado. Veja [Identidade de Content Credentials](/info/content-credentials-identity.html).

## Privacidade

Um perfil nunca é transmitido, enviado, ou usado para identificar ou rastrear você - não há nada para consentir, apenas este aviso para que você saiba o que é mantido. Apague tudo isso a qualquer momento com **Perfil → Limpar todos os meus dados**. Veja a [Política de Privacidade](/info/privacy.html).
