# Perfis - quem você é quando cria

Um **perfil** é a identidade de trabalho com a qual o Lolly cria. É o pequeno conjunto de detalhes que uma ferramenta pode usar para que você não precise redigitá-los toda vez - seu nome, dados de contato, uma foto de perfil opcional, algumas preferências - além de tudo que você acumula enquanto trabalha: sessões salvas, imagens enviadas e o total de atividade local.

Tudo em um perfil vive **no dispositivo**, no banco de dados local do navegador (IndexedDB no PWA web, o sistema de arquivos nos apps Tauri). Não existe conta e nada é enviado. Você o gerencia em **Perfil** (canto superior direito da galeria); as ferramentas apenas *leem* essas informações, e somente os campos específicos para os quais foram criadas para preencher automaticamente.

> Um perfil é sobre *você* (ou quem quer que esteja criando aqui). Ele é diferente da **Plataforma** - as cores, fontes e configurações globais da marca - e das **Capacidades**, o catálogo do que o aplicativo pode fazer. Veja [Perfil vs Plataforma vs Capacidades](#profile-vs-platform-vs-capabilities) no final.

## O que há em um perfil

![The Profile screen - name, contact, an optional headshot, and your preferences](/t/url-shot?url=%2F%23%2Fprofile&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=profile-details)

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

## Um perfil é um contexto, não apenas uma pessoa

A palavra "perfil" sugere uma única pessoa fixa, mas no Lolly é, na verdade, um **contexto de criação** - *quem você é enquanto cria isto*. Esse contexto pode assumir três formas diferentes, e o Lolly lida com todas elas da mesma maneira.

### Como indivíduo

O padrão. O perfil é você: seu nome, seu e-mail, sua foto de perfil. Configure uma vez e sua assinatura, seu crachá, seu lockup de conferência se preenchem sozinhos. É isso que a maioria das pessoas vai precisar.

### Como equipe

Um perfil não precisa ser uma única pessoa. Ele pode representar uma **equipe ou função dentro de uma organização**: o nome compartilhado da equipe, um endereço de caixa de entrada em grupo (`events@…`), um departamento, a foto da equipe ou a marca da unidade. Uma pessoa configura, exporta (veja abaixo), e o restante da equipe carrega o mesmo perfil - assim tudo que a equipe produz carrega detalhes consistentes sem que ninguém precise redigitá-los. Um quiosque compartilhado ou um laptop de demonstração emprestado pode rodar um único perfil de equipe que todos que o utilizam criam a partir dele.

### Como função - um chapéu que você veste às vezes

Este é o caso que o modelo rígido de "uma pessoa, um perfil" não cobre. Você pode ser um **gerente de eventos três dias por ano** e outra coisa completamente diferente no resto do tempo. Nesses três dias você quer os detalhes do evento, a caixa de entrada do evento, talvez uma submarca do evento para preencher seus crachás e sinalizações; nos outros 362 dias você quer sua identidade normal de volta.

No Lolly, essa função é apenas **outro perfil que você mantém à mão** - um pacote salvo (próxima seção) que você carrega para o evento e guarda depois. A função é um chapéu, não uma nova conta. Vista-o quando precisar, tire-o quando terminar.

## Uma instalação, um perfil ativo - vários que você pode manter

A qualquer momento uma instalação tem **um perfil ativo** - os detalhes que uma ferramenta vê agora. Não há um seletor de perfil dentro do app; em vez disso, cada perfil é um **pacote portátil** (um único `.zip`, veja [abaixo](#moving-a-profile-to-a-new-device)). Esse é deliberadamente o mesmo mecanismo usado para migrar para um novo dispositivo - um perfil é um arquivo que você pode salvar, copiar e carregar.

Então, se você realmente alterna entre vários contextos (você, sua equipe, o chapéu de gerente de eventos), você mantém vários pacotes e carrega o que precisar:

- **Troca mais limpa:** **Perfil → Armazenamento → Limpar todos os meus dados**, depois **Importar** o pacote do contexto para o qual você está migrando. Agora você está criando puramente como esse perfil.
- **Em camadas:** importar *sem* limpar antes **mescla** - o perfil importado, as sessões e as imagens se somam ao que já existe, substituindo qualquer coisa com o mesmo nome e mantendo o resto. Útil para trazer as sessões salvas de uma equipe para a sua própria configuração; não é o que você quer se precisa de uma fronteira limpa entre funções.
- **Lado a lado:** como tudo é restrito ao dispositivo, um perfil de navegador separado, uma conta de usuário separada, ou um segundo PWA instalado carregam, cada um, seu próprio perfil independente do Lolly. Rode sua instalação pessoal e a instalação do quiosque do evento ao mesmo tempo, sem precisar alternar.

> Mantenha um pacote por contexto e renomeie os arquivos de acordo com o que representam (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). O arquivo *é* o perfil.

## Movendo um perfil para um novo dispositivo

Como um perfil é totalmente local, a única forma de levá-lo para uma instalação em branco - um laptop novo, um navegador recém-resetado, a máquina de um colega, um computador offline - é **carregar o arquivo**. Nenhum login o restaura para você, e esse é o objetivo: nada jamais saiu do seu dispositivo, para começar.

Em **Perfil → Armazenamento → Mover para outro dispositivo**:

- **Exportar meus dados** baixa um `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - nomeado de acordo com o perfil ao qual pertence, com um número sequencial diário para que exportações repetidas não colidam (partes do nome são omitidas quando o perfil não as possui). Ele contém seu perfil, cada sessão salva (com sua miniatura), suas imagens enviadas e suas preferências (tema, layout, estatísticas de atividade local).
- **Importar dados…** na outra instalação lê esse arquivo de volta e você retoma exatamente de onde parou.

O pacote é um zip simples e autocontido, então ele viaja por **qualquer** meio - USB, AirDrop, um compartilhamento de rede, e-mail para si mesmo - e o destino pode estar completamente offline. Cada parte tem checksum, então um arquivo danificado no transporte é detectado na importação em vez de ser restaurado pela metade. A importação **mescla** (perfil/sessão/imagem com o mesmo nome é sobrescrito; todo o resto é mantido), então ela nunca apaga um destino que já estava em uso.

O que não viaja: o cache do catálogo (ele se baixa novamente sozinho no novo dispositivo) e as próprias ferramentas (presumidas já presentes).

Para o layout exato do pacote, a política de versão e as regras de integridade, veja **[Transferência de Dados](/info/data-transfer.html)**; para o passo a passo completo, **[Usando o Lolly → Mover para outro dispositivo](/info/using.html#moving-to-another-device)**.

## Como as ferramentas usam seu perfil

Uma ferramenta só *pré-preenche* os campos do perfil para os quais foi explicitamente construída:

**Vínculo explícito.** O autor de uma ferramenta marca um campo como proveniente do perfil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Quando a ferramenta abre, esse campo se pré-preenche a partir do seu perfil - e você ainda pode substituí-lo para aquela sessão específica sem alterar o perfil. O preenchimento automático é uma conveniência local e acontece independentemente de **Usar meus dados** estar ativado ou não.

**O opt-in (proveniência).** Quando você exporta um ativo, seus dados opcionalmente acompanham o arquivo como **proveniência** - uma linha de autoria/crédito incorporada nos metadados do arquivo (PNG, PDF, SVG, …) - para que um ativo finalizado possa dizer quem o fez. *Isso* é o que **Usar meus dados** controla: deixe desativado e a exportação ainda carrega a atribuição de ferramenta/plataforma "Made with Lolly", mas nenhuma linha pessoal de autor/contato é incorporada. (O mesmo opt-in define o autor nas execuções em lote do **/pro**.) (Autores de ferramentas: veja [Criação de Ferramentas → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) e [API do Host → `host.profile`](/info/host-api.html#host-profile).)

## Perfil vs Plataforma vs Capacidades

Três coisas ficam próximas na interface e são fáceis de confundir:

- **Perfil** - *você* (ou sua equipe, ou a função que você está exercendo): nome, contato, foto de perfil, seu trabalho salvo. Pessoal, local ao dispositivo, portátil como um pacote.
- **Plataforma** - a *marca*: cores, fontes e configurações globais contra as quais toda ferramenta renderiza. Compartilhada e consistente, não pessoal.
- **Capacidades** - *o que o aplicativo pode fazer*: o conjunto completo de recursos e as ferramentas disponíveis para você.

Um perfil muda de quem um ativo *é*; a plataforma muda a *aparência* dele; as capacidades são *o que você pode criar*.

## Privacidade

Um perfil nunca é transmitido, enviado, ou usado para identificar ou rastrear você - não há nada para consentir, apenas este aviso para que você saiba o que é mantido. Apague tudo isso a qualquer momento com **Perfil → Limpar todos os meus dados**. Veja a [Política de Privacidade](/info/privacy.html).
