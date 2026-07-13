# Política de Privacidade

*Última atualização: junho de 2026*

## O aplicativo Lolly

O Lolly funciona inteiramente no seu navegador. **Não coletamos nada, não transmitimos nada e não temos servidores que vejam seus dados.** Não há análises, não há rastreamento e não há terceiros de nenhum tipo.

**Nenhum cookie - em lugar nenhum.** O Lolly nunca define um cookie. Para fazer o aplicativo funcionar, ele mantém uma pequena quantidade de dados **no seu próprio dispositivo**, todos estritamente necessários para um recurso que você está usando:

- **Seu tema claro/escuro** e algumas preferências de interface (largura da barra lateral, zoom).
- **Um cache offline do catálogo de ferramentas**, para que a galeria continue carregando sem conexão.
- **Contadores de uso somente locais** para as pequenas estatísticas no seu cartão de perfil - eles nunca são enviados a lugar nenhum.
- **Seus próprios documentos e sessões salvas**, armazenados localmente no navegador (IndexedDB) para que seu trabalho persista entre visitas.

Nada disso é compartilhado, enviado ou usado para identificar ou rastrear você, então não há nada para consentir - apenas este aviso, para que você saiba o que é mantido. Você pode apagar tudo isso a qualquer momento em **Perfil → Limpar todos os meus dados**, ou limpando o armazenamento do site no seu navegador.

Este site de documentação (`/info`) é ainda mais leve: ele não define **nenhum cookie**, armazena apenas sua preferência de tema claro/escuro no seu dispositivo, e serve tudo - incluindo fontes - a partir do próprio lolly.tools, sem CDN ou requisições de terceiros.

## Utilitários no dispositivo

Algumas ferramentas são **utilitários** que funcionam em um arquivo fornecido *por você* - por exemplo, **Remover Dados Ocultos**, que mostra os dados ocultos em uma imagem ou PDF (localização GPS, câmera, autor, editor e metadados do documento) e devolve uma cópia limpa, ou **Comprimir PDF**, que reduz um PDF recodificando suas imagens diretamente no seu dispositivo.

Eles funcionam **inteiramente no seu navegador**. O arquivo que você escolhe é lido na memória do seu dispositivo, transformado localmente e oferecido de volta como download. **Ele nunca é enviado** - não há servidor para o qual enviá-lo. A cópia limpa não carrega marca d'água nem nenhum metadado identificador nosso; o objetivo é *remover* dados, não adicioná-los. Nada é armazenado depois que você sai, e esses utilitários funcionam offline. Você verá um selo **"Executa no seu dispositivo - nada é enviado"** em cada um deles.

Isso é o oposto do típico site "comprima este PDF" / "converta este HEIC", que envia seu arquivo para o servidor de um estranho para fazer um trabalho que seu navegador consegue fazer localmente.

## A extensão do navegador

A extensão de navegador **Lolly URL Screenshot** não coleta, armazena ou transmite nenhum dado pessoal. Nenhuma análise, nenhum rastreamento, nenhum servidor remoto.

## O que ela faz

Quando você pede ao aplicativo web Lolly ([lolly.tools](https://lolly.tools)) para tirar um screenshot de uma URL, a extensão abre essa página em uma aba temporária em segundo plano, captura-a no seu navegador usando o DevTools Protocol, devolve a imagem ao aplicativo e fecha a aba. Tudo acontece localmente, no seu próprio dispositivo e rede.

## Dados

- **Não coletamos nada.** A extensão não tem servidores e não faz nenhuma requisição de rede própria.
- **Imagens capturadas** vão direto para o aplicativo Lolly no mesmo navegador - nunca enviadas pela extensão.
- **As URLs que você captura** são usadas apenas para carregar aquela página específica para aquele screenshot específico. Elas não são registradas nem compartilhadas.

## Permissões

- **`debugger`** - para capturar a página renderizada via DevTools Protocol (o mesmo mecanismo que o aplicativo desktop do Lolly usa).
- **Acesso a abas** - para abrir e fechar a aba temporária em que a página carrega.
- **Acesso a hosts** - porque a página que você escolhe capturar pode estar em qualquer site.

Nenhuma delas é usada para ler, monitorar ou transmitir sua navegação.

## Contato

Dúvidas? Consulte [lolly.tools](https://lolly.tools).
