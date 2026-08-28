# Lolly para operadores

### Una estrategia de seguridad e inteligencia en profundidad - que resulta ser también una plataforma de producción creativa

El sistema inmunitario organizativo de confianza cero que envuelve lo que ya haces - para que el trabajo creativo rutinario que tus equipos necesitan cada día ocurra *dentro* de tu perímetro en lugar de escaparse de él.

**Qué ganas tú.** Puedes ser quien dijo que sí a algo a la vez seguro *y* popular. Cierras un agujero de filtración de datos, ganas capacidad y eliminas una cola de peticiones en un solo movimiento - el raro caso de victoria de seguridad que te hace más querido, no menos. Sin llamada a las 3 de la madrugada de legal porque archivos embargados o datos de clientes acabaron en una herramienta web cualquiera; menos proveedores SaaS, contratos y auditorías sobre tu mesa; y un rastro de auditoría totalmente reproducible al que apuntar cuando alguien pregunte. Duermes mejor, y de paso alegras unos cuantos días.

Lolly no es una herramienta creativa de segunda: pone una salida de calidad de producción en manos de todos, y la experiencia de creación guiada por la marca no tiene rival. La razón por la que es *seguro* distribuirla ampliamente es arquitectónica: no se sube nada que tú no hayas puesto ahí, cada resultado es reproducible y cada exportación puede llevar varias capas de registros criptográficos punteros en la industria. Sin importar cómo llegó un documento a tu escritorio, puedes ver toda su procedencia, si ha sido manipulado y si puedes recrearlo píxel a píxel.

> **El estado actual.** Las propiedades de seguridad de Lolly son sólidas por diseño, y sus motores de criptografía y de análisis de archivos están pasando por el endurecimiento de infraestructura de nivel empresarial de SUSE. Los sellos, la firma en el dispositivo y el cifrado de abajo son reales y defendibles ya, y están madurando hacia una certificación independiente - así que donde un contrato exija una garantía certificada, despliégalos como defensa en profundidad mientras ese proceso se completa.

## La ventaja estratégica

La forma habitual en que se hace el trabajo creativo rutinario es una superficie de riesgo: archivos enviados por correo a contratistas de diseño externos, activos de marca subidos a una docena de editores SaaS, datos de clientes pegados en la herramienta web de un desconocido para "hacer rápido un gráfico". Cada uno de esos casos es información que sale de tu control.

Lolly le da la vuelta. El trabajo que *provocaba* esas filtraciones - la tarjeta de cita, el banner localizado, la credencial del evento, la captura de pantalla redactada - ahora ocurre en una herramienta que se ejecuta en el propio dispositivo del empleado, contra tu marca, sin servidor de por medio. No añadiste un control encima de un flujo de trabajo arriesgado; sustituiste el flujo de trabajo arriesgado por uno que de entrada no tiene ninguna vía de filtración.

- **La configuración es tuya.** El motor y los shells son de código abierto (MPL-2.0). Superpón tu propia autenticación, telemetría o CA; alójalo o no; tú mantienes el control total de funciones y costes, seguido por git, no atrapado en una base de datos SaaS.
- **La gobernanza puede ser datos, no un panel.** Cuando quieras ese control, gestiona el catálogo de herramientas como un repositorio Git - la revisión de pull requests se convierte en aprobación de marca, con un registro de auditoría completo y una reversión instantánea de cada plantilla que tu equipo pueda tocar. Es una opción, no una obligación, y pertenece a un único puesto: quienes crean trabajan enteramente dentro de la app, guardando lo que hacen como una **sesión** y transmitiéndola como enlace para compartir, copia de seguridad o colaboración en directo - nada de eso necesita git. Cuando una de esas sesiones merece convertirse en un punto de partida permanente, quien gestione el despliegue abre el enlace, guarda sus valores como **plantilla** en esa herramienta dentro del paquete de marca y hace commit. A partir de ahí aparece en el selector "Nuevo desde plantilla" de la herramienta y es enlazable directamente como `?template=<id>`. Git es el paso de bloqueo del administrador, usado una vez, y nunca algo que quien crea tenga que tocar. Consulta [Adopción y gobernanza](/info/adoption-governance.html).
- **Las barreras de protección son estructurales.** Las restricciones de marca están codificadas de forma fija en las plantillas, no publicadas como directrices que la gente pueda ignorar. El resultado incorrecto no solo se desalienta - es irrepresentable.

> **Tú gobiernas todo el relevo.** Un creativo redacta las reglas y un desarrollador las escala, pero es el operador quien hace que ese ciclo de vida sea seguro de ejecutar en toda la organización - la misma herramienta que permite a un representante autoservirse en un avión es una que puedes controlar mediante revisión en Git, desplegar mediante tu MDM y verificar criptográficamente. Consulta cómo se combinan los roles en [El ciclo de vida de una campaña](/info/overview.html#the-lifecycle-of-a-campaign), y cómo lo gobiernas en [Adopción y gobernanza](/info/adoption-governance.html).

## Elimina la cola de solicitudes mientras se multiplica el contenido.

Uno de los objetivos de Lolly es la **desviación de solicitudes de diseño**: solicitudes rutinarias que nunca necesitan llegar a un diseñador porque la persona que necesitaba el recurso lo creó ella misma, correctamente, en minutos. Cada ticket desviado es a la vez una ganancia de productividad y un archivo menos cambiando de manos.

Lolly está construido para adaptarse a cómo opera realmente tu organización - no hay una única forma correcta de desplegarlo:

- **Despliega, no sirvas.** Distribuye Lolly a los dispositivos mediante tu MDM existente (Intune, Jamf, Munki…). Funciona localmente como app de escritorio/móvil o como PWA sin conexión - funciona detrás de cualquier firewall, en cualquier entorno con espacio de aire, sin servidor que mantener y con TI al mando del ritmo de actualizaciones.
- **Solo sirve.** Ejecuta una instancia dentro de tu red (o detrás de una VPN); los usuarios acceden desde un navegador, sin instalar nada. Publica una herramienta una vez y todos la tienen al instante; combínalo con tu IdP para el control de acceso.
- **Híbrido.** Apps locales para el trabajo de campo sin conexión, una versión de navegador siempre actualizada para máquinas prestadas - ambas apuntando a la misma biblioteca de herramientas.

Los modelos de despliegue completos y la guía de administración están en [Despliegue](/info/deployment.html) y [Configuración](/info/configuration.html).

## Utilidades antiexfiltración

Una categoría de herramientas de Lolly - las utilidades de privacidad - existe *específicamente* para mantener los archivos dentro del perímetro.


- **Eliminar datos ocultos**
 Elimina la ubicación y toda la información identificativa oculta de documentos y archivos multimedia.

- **Text Helper**  
Anonimiza, codifica, formatea y manipula texto estructurado y no estructurado. 

- **Compress PDF**
Reduce un PDF de gran tamaño en el dispositivo, para que nadie recurra a un sitio web de terceros "comprime mi PDF" en el momento en que un archivo es demasiado grande para enviarlo por correo - que es exactamente por donde se filtran los datos. 

Todas estas son transformaciones en el dispositivo: entra tu archivo o dato, salen bytes limpios y **no hay servidor al que subirlo**. Son el contrario deliberado de la típica herramienta "sube tu archivo al sitio web de un desconocido para limpiarlo" a la que recurre por lo demás un empleado bien intencionado.

![Strip Hidden Data: el archivo llega al lienzo y la insignia indica claramente que no se sube nada](/t/url-shot?url=%2F%23%2Ftool%2Fstrip-data&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-strip-data)

Text Helper es el mismo trato pero para texto en lugar de archivos. Es el banco de trabajo con pestañas que un empleado buscaría de otro modo en el sitio de un desconocido, y no declara ninguna entrada porque nada de lo que toca sale nunca de la página.

![El banco de trabajo de Text Helper - una fila de pestañas de operaciones sobre una tarjeta que declara que nada de lo que pegas sale de tu dispositivo](/t/url-shot?url=%2F%23%2Ftool%2Ftext-helper&width=1200&height=750&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-content&dark=1&filename=ov2-text-helper)

Compress PDF completa el conjunto: el adjunto sobredimensionado se reduce bajo un ajuste de calidad que tú eliges, en la misma máquina que ya lo tiene.

![Compress PDF - un nivel de calidad y un interruptor de escala de grises a la izquierda, una zona de arrastre para tu propio PDF a la derecha y ninguna subida por ningún lado](/t/url-shot?url=%2F%23%2Ftool%2Fcompress-pdf&width=1200&height=750&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=ov2-compress-pdf)

## Determinismo y reproducibilidad

Cada entrada de una herramienta se puede expresar como parámetro de URL, y las mismas entradas producen el mismo archivo. Eso tiene dos consecuencias para el operador:

- **La URL es el artefacto.** Guarda el enlace en un commit, regenera el recurso bajo demanda - sin binarios subidos a Git, sin perseguir "la última versión" en el chat. Los IDs de recurso y de herramienta son contratos permanentes, así que un enlace acuñado hoy sigue resolviéndose más tarde.
- **La CLI sigue la misma ruta de renderizado** que la interfaz gráfica, así que los pipelines de compilación y la app nunca divergen. Genera imágenes OG, tarjetas sociales y visuales de datos en tiempo de compilación, de forma reproducible.

Prompt to Image es el determinismo en su forma más simple: el texto es toda la entrada, la imagen compuesta es toda la salida y el mismo texto siempre se compone de la misma manera.

![Prompt to Image - un bloque de texto de prompt compuesto en una imagen cuadrada, sin nada en el resultado que no estuviera ya en la entrada](/t/url-shot?url=%2F%23%2Ftool%2Fprompt-card%3Ffull&width=1440&height=900&dpi=192&waitMs=2200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-prompt-to-image)

## Procedencia y Content Credentials

![La zona de arrastre de Verify acepta cualquier archivo, de cualquier origen, y lo lee sin ninguna llamada de red](/t/url-shot?url=%2F%23%2Fverify&width=1440&height=900&dpi=192&waitMs=1800&waitSelector=.valid-drop&cropSelector=.valid-drop&format=svg&walker=1&dark=1&filename=aud-verify-drop)

Las exportaciones pueden llevar **Content Credentials** - un manifiesto [C2PA](https://c2pa.org) firmado y vinculado a un hash de los bytes del archivo. Cualquier cambio posterior en el archivo rompe el sello, así que un verificador compatible con C2PA **detecta la alteración criptográficamente, sin conexión**. La credencial es *evidente* ante manipulaciones: la señala en lugar de impedirla, que es precisamente lo que hace posible la verificación totalmente sin conexión.

- **Activado por defecto, en el dispositivo.** La clave de firma se genera en el dispositivo, no es extraíble (ni siquiera Lolly puede leerla) y la firma ocurre localmente - solo la *inscripción* opcional de identidad llega a tocar la red.
- **Niveles de confianza.** Una exportación sin inscribir está bien formada pero firmada de forma anónima (`untrusted`). Inscribe una **identidad verificada** (certificado de corta duración de la CA de Lolly, vinculado a un correo) y los verificadores que confían en la raíz de Lolly informan `trusted` + el correo del firmante. Una autoridad de sellado de tiempo de confianza y una validación en verde por un tercero (conformidad C2PA) están en la hoja de ruta. Cada nivel es explícito, y un archivo solo reclama la confianza que puede demostrar.
- **La vigencia de la credencial** la decide el operador o usuario en el momento de la firma: 7 / 30 / 90 / 365 días, por defecto 30.
- **El Lolly Imprint.** Una segunda señal complementaria que está **activada por defecto**: una marca de agua de píxeles invisible integrada en las exportaciones ráster (y en los rásteres renderizados por Lolly dentro de un PDF/PPTX, nunca en una imagen incrustada del propio usuario). Donde la credencial muere ante cualquier cambio de contenedor, el Imprint sobrevive a un reguardado o una captura de pantalla - una pista duradera de "estos píxeles pasaron por Lolly", solo de presencia, sin datos personales. Es seguridad por ocultación, no una defensa reforzada, y complementa la credencial en lugar de sustituirla. `imprint=0` permite excluirse.
- **Content Credentials duraderas (opcional).** Una exportación ráster puede llevar además una marca invisible *duradera* que codifica un identificador de vinculación blanda, de modo que la credencial C2PA se pueda recuperar incluso después de que una subida a redes sociales o un reguardado hayan eliminado los metadatos del archivo - el caso en el que una credencial normal se perdería. Es solo para ráster y cuesta un paso de codificación neuronal, así que está desactivada por defecto (`durable=1` para activarla). Lolly reconoce su propia marca duradera sin conexión en `/verify` hoy mismo; la recuperación mediante herramientas de terceros (por ejemplo, Adobe) llegará en cuanto la resolución de vinculación blanda del sector esté implantada.
- **La verificación es en el dispositivo.** Suelta cualquier archivo en `/verify` (o `lolly validate <file>`) para obtener un informe sin conexión de si se hizo genuinamente con Lolly y no ha cambiado desde entonces. La vista Verify de la web también marca el contenido generado por IA, detecta el Lolly Imprint, verifica firmas **SEAL** (una firma a nivel de bytes - sin ninguna solicitud de red: el motor recibe un resolutor de clave DNS *inyectado* y ningún shell inyecta uno hoy en día, así que un registro que lleva su propia clave `pk=` incorporada se verifica por completo sin conexión, mientras que uno con clave por DNS informa "no key resolver and no inline key" en lugar de intentar contactar - consulta `SealPublicKeyResolver` en `engine/src/seal.ts`), opcionalmente escanea en profundidad marcas de agua de píxeles de terceros (una descarga de modelo en el dispositivo, una sola vez) y muestra datos ocultos - todo sin subir el archivo. Consulta [Identidad de Content Credentials](/info/content-credentials-identity.html).

> **Notas de interoperabilidad.** Lolly verifica sus propias credenciales y muchas de terceros sin conexión hoy mismo, incluyendo la lectura de manifiestos C2PA claim **v2** de otros productores. Dos contenedores siguen en curso, ambos porque C2PA aún no tiene un mapeo estandarizado para ellos, así que Lolly lleva la credencial en un lugar propio y es el verificador de Lolly el que la vuelve a leer: **WebM** (el manifiesto viaja como adjunto Matroska) y **Ogg/Opus** (un campo `C2PA=` en la cabecera de comentarios OpusTags, con ese rango de bytes excluido de la vinculación para que el audio siga generando el mismo hash). Todo lo demás se ajusta al estándar - las herramientas de terceros verifican el MP4, M4A, MP3, WAV, PNG, JPEG y PDF de Lolly sin más. Consulta `engine/src/c2pa-containers.ts` para ambos mapeos; convergerán con el estándar en cuanto se asiente.

## Cifrado y contraseñas

Para los archivos que deben viajar bloqueados, todo ocurre en el dispositivo:

![La tarjeta de bloqueo en el panel de exportación: una contraseña y una elección explícita entre los dos niveles](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools%26format%3Dpdf%26password%3Ddemo%26options&width=1440&height=900&dpi=192&waitMs=2200&cropSelector=.export-pdfpass&walker=1&format=svg&dark=1&filename=aud-pdf-lock)

- **Contraseña de apertura de PDF** - *Estándar* es un disuasorio RC4 de 40 bits (se abre en cualquier sitio, puede viajar en un enlace); *Fuerte* es **AES-256** (PDF 2.0), escrita en el momento de exportar y nunca incluida en un enlace.
- **Descargas bloqueadas** - un ZIP, una carpeta de Proyectos o una ejecución por lotes se pueden bloquear enteros: *Estándar* ZipCrypto (débil, universal) o *Fuerte* **AES-256** (WinZip AE-2). Defensa en profundidad: cualquier PDF dentro de un zip Fuerte queda *también* bloqueado individualmente con AES-256, así que sigue bloqueado tras descomprimirlo.
- **Enlaces para compartir protegidos por contraseña** - todo el estado del enlace está cifrado con AES-256 bajo una clave derivada por PBKDF2; solo viaja el texto cifrado, la contraseña nunca está en el enlace y el descifrado ocurre en el navegador del destinatario.

## Listo para espacio de aire

El espacio de aire es un **despliegue de primera clase**, no un modo especial - Lolly funciona sin red en el momento del renderizado nada más instalarlo. El shell web es una PWA sin conexión desde el diseño (service worker); las fuentes y el WASM se guardan en el dispositivo; el estado de las herramientas se persiste localmente mediante el puente del host, nunca `localStorage`. La forma admitida de que una herramienta llegue a la red es una capacidad `host.net` **en lista blanca** que declara en su manifiesto - un shell que no puede (o no quiere) cumplirla la simula sin efecto. Eso es un contrato de portabilidad, no un límite forzado (ver la nota sobre hooks más abajo), por eso revisar el código de la herramienta sigue siendo el control - aunque en un dispositivo con espacio de aire no hay nada que alcanzar de todos modos. Distribuye los shells a los dispositivos mediante tu MDM, o sirve una instancia dentro de tu red, y una instalación totalmente con espacio de aire renderiza, exporta, cifra y verifica credenciales sin nada a lo que llamar a casa.

## Bueno saberlo

Algunas cosas que conviene tener claras antes de ponerlo en marcha:

- **Endurecimiento en curso.** La criptografía y los analizadores están pasando por el endurecimiento a escala empresarial de SUSE (ver arriba) - sólidos por diseño hoy; despliega como defensa en profundidad allí donde un contrato exija una garantía certificada.
- **Los hooks de herramienta *no* son un sandbox de seguridad.** El `hooks.js` opcional de una herramienta se ejecuta con el puente del host inyectado, pero en un shell de navegador se ejecuta en el ámbito de la página y *puede* llegar a `window`/`document`/`fetch`. Trata el código de la herramienta como tratas cualquier código que ejecutas - revísalo. Por eso una organización que gestiona un catálogo compartido puede controlarlo mediante revisión en Git; en cualquier caso, ejecuta solo herramientas que hayas revisado hasta que llegue el aislamiento por Worker.
- **Las Content Credentials son evidentes ante manipulaciones.** Detectan la alteración en lugar de impedirla - consulta las notas de interoperabilidad más arriba.
- **Dos niveles de cifrado.** Los bloqueos *Estándar* son disuasorios rápidos y universales; *Fuerte* (AES-256) es protección total - recurre a Fuerte para cualquier cosa sensible, teniendo en cuenta que requiere un lector moderno.

## Independiente, o gobernado por un plano de control

Dos formas, y eliges por despliegue. **Independiente es el valor por defecto y no necesita servidor:** Lolly renderiza en el dispositivo, cada persona que crea trabaja dentro de la app, y la gobernanza de git-como-datos de arriba es totalmente opcional - una sola organización puede ejecutar este repositorio sin alojar nada en absoluto. **Cuando quieras control a nivel de toda la organización, añade un plano de control.** [lolly.work](https://lolly.work) es un servicio aparte, de código abierto (MPL-2.0), que tú mismo alojas - o que puedes probar en el entorno de pruebas alojado -, que gobierna el shell en directo: inicio de sesión protegido por SSO, políticas de feature-flags / exportación / marca de agua, superposiciones de entradas de herramientas, federación de catálogos, aprobaciones y un registro de auditoría encadenado por hash, todo servido al shell sin cambiar una línea de código aquí. Es agnóstico de marca (configuración más el montaje de un paquete), consume el motor y los paquetes de este repositorio sin modificarlos, y nunca se convierte en la ruta de renderizado: Lolly sigue renderizando en el dispositivo por diseño. OSS = libertad individual; OSS + plano de control = libertad organizacional.

## A dónde ir ahora

- **[Seguridad y verificación](/info/security.html)** - los estándares, primitivas, modelo de confianza y pruebas detrás de las credenciales y el cifrado anteriores.
- **[Adopción y gobernanza](/info/adoption-governance.html)** - perfiles de usuario, la métrica de desviación y la gobernanza como datos, en detalle.
- **[Despliegue](/info/deployment.html)** - despliega/sirve/híbrido, MDM y autoalojamiento de los servicios.
- **[Configuración](/info/configuration.html)** - perfiles, paquetes de marca, control de capacidades y flags de funciones.
- **[Política de privacidad](/info/privacy.html)** - la declaración formal de qué se recopila, almacena y envía, y qué no.
- **[Superficie del servidor](/info/server-surface.html)** - el inventario completo de lo que se ejecuta en el servidor (dos componentes opcionales) frente a lo que se ejecuta en el dispositivo.
