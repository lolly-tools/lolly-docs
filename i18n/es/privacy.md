# Política de Privacidad

*Última actualización: 19 de julio de 2026*

> **En pocas palabras.** Los documentos, imágenes, vídeos y archivos que creas en Lolly
> se quedan en tu dispositivo. No hay cuentas para el uso normal, no hay cookies de la
> propia app, y no hay analítica ni rastreadores en ninguna parte del código - no es que
> "no usemos los datos", es que genuinamente no existen en el código fuente. Existe una
> lista breve y completa de excepciones en las que el software se comunica con una red, y
> cada una de ellas se describe abajo con detalle: qué sale, hacia quién y cuándo. La
> única excepción que implica algo personal es un inicio de sesión que tú tienes que
> arrancar explícitamente. Si no está en este documento, no ocurre.

## Qué cubre esta política

Lolly es software de código abierto - un motor, varios shells de app (web, escritorio,
móvil, CLI) y una extensión de navegador - que cualquiera puede ejecutar. Esta política
tiene dos partes:

- **El software en sí**: lo que hace y lo que no hace con tus datos, dondequiera que se
  ejecute. Esto es una propiedad del código, así que es cierto en cada despliegue de
  Lolly, el nuestro o el de cualquier otra persona.
- **lolly.tools**, el despliegue de referencia que opera SUSE: las decisiones concretas
  que se toman al ejecutar sus piezas opcionales del lado del servidor (qué se registra,
  durante cuánto tiempo, por parte de quién).

Si usas una instancia de Lolly autoalojada o empresarial, el comportamiento del software
descrito abajo sigue aplicándose, pero el *operador* de esa instancia - no SUSE - es
responsable de todo lo que ocurre del lado del servidor: su endpoint de renderizado, su
servidor MCP, su autoridad de certificación de Content Credentials, si tiene alguna.
Pídele su propia política; consulta [Adopción y gobernanza](/info/adoption-governance.html)
para saber qué implica operar Lolly.

## La app: lo que se queda en tu dispositivo

Los shells web, de escritorio y móvil de Lolly ejecutan todo el motor de renderizado en
el lado del cliente. Abrir una herramienta, rellenar las entradas, previsualizar y
exportar ocurren todos en tu dispositivo - no hay ningún servidor involucrado, y la app
funciona sin conexión una vez cargada.

**La app no establece ninguna cookie.** Para funcionar, guarda una pequeña cantidad de
datos **solo en tu dispositivo**, nunca transmitidos:

- **Preferencias de interfaz** - tema, idioma, ajustes de sonido, tamaño de la barra
  lateral y del zoom, opciones de orden y vista, qué consejos de bienvenida has visto -
  en `localStorage`, para que estén disponibles antes de que la app haya terminado de
  arrancar.
- **Una caché sin conexión del catálogo de herramientas y las previsualizaciones de
  recursos**, para que la galería funcione sin conexión.
- **Contadores de uso locales** para las estadísticas de tu tarjeta de perfil (cuántas
  exportaciones, qué herramientas) - un pequeño blob acotado en `localStorage`, que
  nosotros nunca leemos y que nunca se envía a ningún sitio.
- **Tus propios documentos, sesiones guardadas, recursos subidos y fuentes** -
  almacenados en IndexedDB en tu dispositivo, nunca subidos, nunca leídos por nadie
  salvo tú.

Nada de esto se comparte, se vende, ni se usa para identificarte o rastrearte. No hay
nada que consentir, porque no hay ninguna recopilación en marcha - solo este aviso, para
que sepas qué se guarda y dónde. Bórralo todo en cualquier momento con **Perfil → Borrar
todos mis datos**, o borrando el almacenamiento del sitio en tu navegador. (Según el
Art. 5(3) de la Directiva ePrivacy, el almacenamiento que es estrictamente necesario para
el servicio que has pedido no requiere consentimiento - solo transparencia, que es lo que
son tanto este documento como el aviso dentro de la app.)

Tu propia copia de seguridad de estos datos - el paquete `lolly-backup` que produce
**Exportar y renderizar todo** - es un archivo que tú guardas y controlas. Nunca toca
nuestros servidores a menos que tú mismo decidas enviarlo a algún sitio. Consulta
[Transferencia de datos](/info/data-transfer.html).

## Utilidades en el dispositivo

Algunas herramientas - **Strip Hidden Data**, **Compress PDF** y otras que llevan la
insignia **"Se ejecuta en tu dispositivo"** - operan sobre un archivo que tú
proporcionas. El archivo se carga en memoria en tu navegador, se transforma localmente, y
se ofrece de vuelta como descarga. Nunca se sube, porque no hay servidor en el camino al
que subirlo. Estas utilidades funcionan sin conexión, y su salida no lleva ninguna marca
de agua ni metadato nuestro - el sentido de la mayoría de ellas es eliminar y proteger
datos, no añadir riesgo.

## Cuando la app se comunica con una red, en detalle completo

La tabla de abajo es la lista completa de todo lo que la app obtiene o envía a través de
una red. Si no está aquí, la app no lo hace.

| Qué | Qué sale realmente de tu dispositivo | Cuándo |
|---|---|---|
| Sincronización del catálogo de herramientas | Nada personal - una petición del índice público de herramientas y recursos de la propia Lolly | Al arrancar, luego se almacena en caché sin conexión |
| Una capacidad de red declarada por una herramienta | Lo que esa herramienta concreta solicite (por ejemplo, tiles de mapa) al host o hosts concretos que incluye en la lista de permitidos de su manifiesto | Solo mientras usas esa herramienta |
| Google Fonts | El nombre de la familia de fuentes elegida y tu dirección IP, a los servidores de fuentes de Google | Solo si añades una fuente de Google en el editor de marca - una obtención única por familia, y después vive en tu dispositivo |
| Comprobación de firma SEAL | Una única consulta DNS de una clave pública, al dominio nombrado dentro del archivo que se está comprobando | Solo si Verify encuentra un registro SEAL en un archivo que compruebas - nunca el archivo en sí |
| Modelos detectores de análisis profundo | Nada personal - una descarga única del modelo desde el mismo origen (no un tercero) | Solo si optas por el análisis profundo de Verify |
| Instancia remota | Lo que sirva de vuelta la instancia que tú nombres, mediante la misma sincronización de catálogo descrita arriba | Solo si apuntas explícitamente el shell a otro despliegue de Lolly |

Ninguna de estas envía tus documentos, proyectos, sesiones o archivos subidos a ningún
sitio. Existen para traer cosas *a* tu dispositivo (herramientas, fuentes, modelos, una
clave pública), nunca para enviar cosas *desde* él, con las excepciones nombradas
explícitamente en las secciones de abajo.

## URLs de renderizado enlazadas en caliente

La app en sí se queda por completo en tu dispositivo. Por separado, y solo si lo usas,
lolly.tools (y cualquier instancia autoalojada que lo deje activado) responde a **URLs de
renderizado enlazadas en caliente** - `https://lolly.tools/tool/<tool-id>.<ext>?<inputs>` -
para que un enlace de Lolly compartido pueda aparecer como una imagen en vivo en un
README, un wiki o un panel. Obtener una de esas URLs le pide al servidor que renderice
**datos públicos de herramientas y catálogo** con las entradas escritas en la URL, y ese
es el intercambio completo:

- **Sin cuentas, sin cookies, sin estado.** El endpoint es anónimo; no se almacena nada
  por petición, y no se lee nada de tu dispositivo. Tus documentos, sesiones y subidas
  nunca salen de tu navegador - no pueden aparecer en absoluto en estos enlaces.
- **Las entradas son públicas por construcción** - son lo que el autor del enlace haya
  escrito en la URL, legible por cualquiera al que llegue el enlace. No pongas secretos en
  un enlace compartido; Lolly ofrece una función de cifrado de enlaces para contenido
  sensible.
- Las respuestas se **almacenan en caché y tienen límite de tasa** como cualquier imagen
  pública, y están marcadas como `noindex` para que los motores de búsqueda no indexen tus
  renderizados.

¿Autoalojas Lolly y no quieres una superficie pública de renderizado? Establece
`LOLLY_DISABLE_RENDER_GET=1` y cada una de estas URLs devuelve 404.

## El servidor MCP (opcional, para agentes de IA)

A Lolly también se puede llegar mediante un agente de IA a través del Model Context
Protocol - un endpoint operado por el operador (lolly.tools ejecuta uno; cualquiera puede
autoalojar el suyo, incluso totalmente aislado de la red). Comparte la postura sin cuentas
del camino de renderizado, más dos herramientas que necesariamente manejan los bytes de un
archivo:

- **`lolly_transform`** (ejecutar una utilidad en el dispositivo del lado del servidor, en
  nombre del agente que llama) y **`lolly_verify`** (comprobar Content Credentials) ambas
  aceptan los bytes de un archivo desde quien llama. Se procesan **en el propio proceso, en
  memoria**, y el resultado se devuelve en esa misma llamada - el archivo nunca se escribe
  en disco y nunca se almacena una vez que la petición se completa.
- Todas las demás herramientas - `lolly_render`, `lolly_build_url`, `lolly_list_tools`,
  `lolly_describe_tool` - funcionan solo a partir de parámetros (texto, números, colores,
  URLs, ids de recursos del catálogo), las mismas entradas que toma una URL de renderizado
  enlazada en caliente.
- El acceso es o bien un token compartido que el operador emite a los clientes en los que
  confía, o bien OAuth 2.1 sin estado: tokens firmados de corta duración verificados
  contra un secreto compartido, sin nada almacenado del lado del servidor, y el propio
  token nunca se escribe en un registro ni en una URL de renderizado.

## Identidad de Content Credentials (un inicio de sesión que tú tienes que arrancar)

Lolly puede sellar un **Content Credential** criptográfico en tus exportaciones para que
cualquiera pueda verificar, sin conexión, que un archivo no ha sido alterado desde que
salió de Lolly. Todo eso está **activado por defecto y es totalmente local** - la clave de
firma se genera en tu dispositivo, es **no extraíble** (ni siquiera el propio código de
Lolly puede leerla), y la firma en sí ocurre sin conexión. Esta sección cubre el único
paso *opcional* añadido a eso: inscribir una identidad verificada, para que tus
exportaciones digan "Verificado - firmado por \<tu email\>" en lugar de una clave anónima.
**Si te saltas la inscripción, nada de esta sección se te aplica, y ningún dato personal
sale nunca de tu dispositivo.**

Si sí te inscribes, esto es exactamente lo que ocurre:

1. **Eliges un método de inicio de sesión** - GitHub, Google, SUSE (Okta) o un enlace
   enviado por email. Para los tres proveedores OIDC, se te redirige a la propia página de
   inicio de sesión de ese proveedor, regida por su política de privacidad, no por la
   nuestra; el servicio de certificados de Lolly recibe de vuelta solo una dirección de
   email verificada y el nombre del proveedor. Para el enlace por email, la dirección que
   escribes se pasa a **Resend**, una API de email transaccional, únicamente para entregar
   ese único enlace.
2. **Una cookie de corta duración protege la redirección.** Esta es la única cookie que
   establece todo el sistema de Lolly: `lolly_ca_state`, `HttpOnly`, con alcance a
   `/api/ca`, que expira en menos de diez minutos. Lleva un valor aleatorio, no un
   identificador de seguimiento, y existe únicamente para impedir que la redirección OAuth
   sea falsificada. Se borra en cuanto se completa el inicio de sesión.
3. **Tu dirección IP se usa, brevemente, para prevenir el abuso** de los endpoints de
   inicio de sesión (para que un script no pueda inundar una bandeja de entrada ni agotar
   la cuota de email) - se mantiene solo en la memoria del servidor, durante una ventana
   deslizante de aproximadamente un minuto, nunca se escribe en un registro ni se persiste
   en ningún sitio.
4. **El servicio de certificados emite un certificado de corta duración** (7, 30, 90 o 365
   días, a tu elección, con el tope de la política del operador) que vincula tu email
   verificado con la mitad pública del par de claves generado en tu dispositivo. La mitad
   privada nunca sale de tu navegador.
5. **La emisión se registra**: tu dirección de email, el proveedor que usaste, un hash
   corto del número de serie del certificado, y su fecha de expiración, escritos en los
   registros operativos del servicio - y, solo si el operador ha configurado uno, en un
   webhook que ellos controlan. Este es el único lugar donde un dato personal tuyo se
   conserva en un servidor, y existe para que un certificado comprometido o mal emitido
   pueda rastrearse y para que la propia emisión de la CA pueda auditarse.
6. **Después de eso, la firma vuelve a ser sin conexión** durante toda la vida del
   certificado. Exportar un archivo nunca contacta con el servicio de certificados - solo
   lo hizo la inscripción.

En concreto para lolly.tools: SUSE opera el servicio de certificados y mantiene estos
registros de emisión. Consulta [Tus derechos](#your-rights) más abajo para saber cómo
preguntar por una entrada o eliminarla.

## La extensión del navegador

La extensión de navegador **Lolly URL Screenshot** no recopila, almacena ni transmite
ningún dato personal. Sin analítica, sin seguimiento, sin servidor remoto.

**Qué hace.** Cuando le pides a la app web de Lolly que tome una captura de pantalla de
una URL, la extensión abre esa página en una pestaña temporal en segundo plano, la captura
en tu navegador mediante el DevTools Protocol, devuelve la imagen a la app y cierra la
pestaña. Todo ocurre localmente, en tu propio dispositivo y red.

**Datos.**

- **No recopilamos nada.** La extensión no tiene servidores y no realiza ninguna petición
  de red propia.
- **Las imágenes capturadas** van directamente a la app de Lolly en el mismo navegador -
  nunca las sube la extensión.
- **Las URLs que capturas** se usan solo para cargar esa página concreta para esa captura
  concreta. No se registran ni se comparten.

**Permisos.**

- **`debugger`** - para capturar la página renderizada mediante el DevTools Protocol (el
  mismo mecanismo que usa la app de escritorio de Lolly).
- **`tabs`** - para abrir y cerrar la pestaña temporal en la que se carga la página.
- **Acceso al host (`<all_urls>`)** - porque la página que decidas capturar puede estar en
  cualquier sitio. Chrome muestra esto en el momento de la instalación como una advertencia
  de permiso amplio; la extensión solo visita la URL que tú le das.

Ninguno de estos se usa para leer, monitorizar o transmitir tu navegación más allá de esa
única captura solicitada.

## Registros de infraestructura

Como cualquier sitio web, los servidores detrás de lolly.tools - y detrás de cualquier
despliegue de Lolly - generan registros de acceso estándar de servidor web siempre que una
petición les llega: dirección IP, ruta solicitada, marca de tiempo, agente de usuario,
conservados durante una ventana limitada por seguridad y prevención de abuso. Ese es el
comportamiento básico de cualquier alojamiento, no algo que Lolly añada por encima, y nunca
contiene el contenido de tus documentos, porque estos nunca llegan a un servidor para
empezar. La única excepción deliberada es un archivo que tú entregas explícitamente a una
llamada MCP `lolly_transform` o `lolly_verify`, que se procesa en memoria y nunca se
escribe en disco ni en un registro, como se describe arriba.

## Privacidad de los menores

Lolly no recopila conscientemente información personal de nadie, de cualquier edad, en el
curso normal del uso de la app - no hay nada que recopilar. El único lugar donde se recoge
alguna vez información personal (una dirección de email) es la inscripción en Content
Credentials, descrita arriba, que no está dirigida ni pensada para menores.

## Tus derechos

Como casi todo lo que Lolly toca se almacena solo en tu propio dispositivo, la mayoría de
lo que la legislación de protección de datos llama "tus derechos" - acceso, rectificación,
supresión, portabilidad - son cosas que ya puedes hacer tú mismo, al instante, sin pedirle
nada a nadie: tus datos viven en el almacenamiento de tu navegador, en un formato que
puedes inspeccionar, exportar (**Exportar y renderizar todo**, arriba) o borrar (**Perfil →
Borrar todos mis datos**).

Para el único dato personal que puede acabar en un servidor - tu dirección de email, si te
inscribiste para Content Credentials - contáctanos (abajo) para preguntar qué tenemos o
para que se elimine de los registros activos. Eliminar una entrada del registro no revoca
un certificado ya emitido (es de corta duración por diseño y simplemente expira); impide
que esa entrada aparezca en futuras exportaciones del registro.

No vendemos datos. No tenemos ninguno que vender.

## Cambios en esta política

La fecha de arriba cambia cada vez que este documento cambia. Un cambio que altere qué sale
de tu dispositivo o qué se conserva recibe su propia línea aquí, no una edición silenciosa
- si quieres ver qué cambió, pregunta (abajo) o compara con el
[código fuente público](https://github.com/lolly-tools/lolly/commits/main/docs/privacy.md).

## Contacto

Preguntas, o una solicitud bajo "Tus derechos" de arriba: **Andy Fitzsimon**,
[fitzy@suse.com](mailto:fitzy@suse.com). Para una instancia de Lolly autoalojada o
empresarial, contacta en su lugar con quien la opere - SUSE y el proyecto de código abierto
Lolly no tienen datos de despliegues que no ejecutan.
