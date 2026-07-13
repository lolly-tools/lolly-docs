# Lolly para Operadores

### Una estrategia de prevención de pérdida de datos y procedencia, en profundidad y a prueba de futuro - que resulta ser una plataforma de producción creativa

El sistema inmunológico organizacional que envuelve lo que ya haces - para que el trabajo creativo rutinario que tus equipos necesitan cada día ocurra *dentro* de tu perímetro en lugar de filtrarse fuera de él.

**Qué ganas tú.** Te conviertes en la persona que dijo que sí a algo seguro *y* popular a la vez. Cierras un agujero de exfiltración y eliminas la cola de solicitudes de diseño en un solo movimiento - la rara victoria de seguridad que te hace más querido, no menos. Sin llamadas a las 3 de la madrugada porque alguien envió por correo archivos de marca a un contratista o pegó datos de clientes en una herramienta web cualquiera; menos proveedores SaaS, contratos y auditorías en tu plato; y un registro completo en git al que puedes señalar cuando alguien pregunte quién aprobó qué. Duermes tranquilo por las noches.

Lolly se gana su lugar como herramienta creativa: elimina la cola de diseño y pone resultados de calidad de producción en las manos de todos. Pero la razón por la que es *seguro* repartirlo tan ampliamente es arquitectónica. Nada se sube a ningún servidor, todo es reproducible, y cada exportación puede llevar un registro criptográfico de su origen. Esta página cuenta la historia de seguridad y despliegue.

> **Dónde está hoy.** Las propiedades de seguridad de Lolly son sólidas por diseño, y sus motores de criptografía y análisis de archivos están pasando por el fortalecimiento de infraestructura de nivel empresarial de SUSE. Los sellos, la firma en el dispositivo y el cifrado descritos abajo son reales y defendibles ahora, y maduran hacia una certificación independiente - así que allí donde un contrato requiera una garantía certificada, despliégalos como defensa en profundidad mientras ese proceso se completa.

## La ventaja estratégica

La forma habitual en que se realiza el trabajo creativo rutinario es una superficie de riesgo: archivos enviados por correo a contratistas de diseño externos, activos de marca subidos a una decena de editores SaaS, datos de clientes pegados en la herramienta web de un desconocido para «simplemente hacer un gráfico rápido». Cada uno de esos casos es información que sale de tu control.

Lolly le da la vuelta. El trabajo que *provocaba* esas fugas - la tarjeta de cita, el banner localizado, la credencial de evento, la captura de pantalla redactada - ahora ocurre en una herramienta que se ejecuta en el propio dispositivo del empleado, contra tu marca, sin ningún servidor de por medio. No añadiste un control encima de un flujo de trabajo arriesgado; reemplazaste el flujo de trabajo arriesgado por uno que, de entrada, no tiene ninguna vía de exfiltración.

- **La configuración es tuya.** El motor y los shells son de código abierto (MPL-2.0). Superpón tu propia autenticación, telemetría o CA; alójalo o no; mantienes el control total de funciones y costes, rastreado en git, sin quedar encerrado en una base de datos SaaS.
- **La gobernanza puede ser datos, no un panel de control.** Cuando quieras ese control, gestiona el catálogo de herramientas como un repositorio Git - la revisión de pull requests se convierte en la aprobación de marca, con un registro de auditoría completo y reversión instantánea de cada plantilla que tu personal pueda tocar. Es una opción, no una obligación: los equipos que solo quieren crear cosas crean sus propias herramientas en Layout Studio e incorporan sus propios archivos al catálogo, enteramente dentro de la app, y nunca tocan git. Consulta [Adopción y Gobernanza](/info/adoption-governance.html).
- **Las barandillas de seguridad son estructurales.** Las restricciones de marca están codificadas directamente en las plantillas, no publicadas como directrices que la gente pueda ignorar. El resultado incorrecto no se desaconseja - es irrepresentable.

## Elimina la cola de solicitudes mientras multiplicas el contenido.

Uno de los objetivos de Lolly es la **desviación de solicitudes de diseño**: solicitudes rutinarias que nunca necesitan llegar a un diseñador porque la persona que necesitaba el activo lo creó ella misma, correctamente, en minutos. Cada ticket desviado es a la vez una victoria de productividad y un archivo menos cambiando de manos.

Lolly está diseñado para adaptarse a cómo funciona realmente tu organización - no existe una única forma correcta de desplegarlo:

- **Despliega, no sirvas.** Distribuye Lolly a los dispositivos a través de tu MDM existente (Intune, Jamf, Munki…). Se ejecuta localmente como aplicación de escritorio/móvil o como PWA sin conexión - funciona detrás de cualquier firewall, en cualquier entorno aislado (air-gapped), sin servidor que mantener y con TI al mando del ritmo de actualizaciones.
- **Solo sirve.** Ejecuta una única instancia dentro de tu red (o detrás de una VPN); los usuarios acceden a ella desde un navegador, sin nada instalado. Publica una herramienta una vez y todos la tienen de inmediato; combínalo con tu IdP para el control de acceso.
- **Híbrido.** Aplicaciones locales para trabajo de campo sin conexión, una versión de navegador siempre actualizada para equipos prestados - ambas apuntando a la misma biblioteca de herramientas.

Los modelos de despliegue completos y la guía de administración se encuentran en [Despliegue](/info/deployment.html) y [Configuración](/info/configuration.html).

## Utilidades antiexfiltración

Existe una categoría de herramientas de Lolly *específicamente* para mantener los archivos dentro del perímetro. Las utilidades de privacidad.


- **Eliminar datos ocultos**
 Elimina la ubicación y toda la información identificativa oculta de documentos y archivos multimedia.

- **Ayudante de texto**  
Anonimiza, codifica, formatea y manipula texto estructurado y no estructurado. 

- **Comprimir PDF**
Evita cualquier posibilidad de que surja una «crisis de límite de correo» en la que las herramientas web de terceros acechan y los datos 

- **Comprimir PDF**
Evita cualquier posibilidad de que surja una «crisis de límite de correo» en la que las herramientas web de terceros acechan y los datos se escapan por la ventana. 

Todas estas son transformaciones en el dispositivo: tu archivo o datos entran, salen bytes limpios, y **no hay ningún servidor al que subirlos**. Son lo opuesto deliberado de la típica herramienta de «sube tu archivo al sitio web de un desconocido para limpiarlo» a la que, de otro modo, recurriría un empleado bienintencionado.



## Determinismo y reproducibilidad

Cada entrada de una herramienta puede expresarse como un parámetro de URL, y las mismas entradas producen el mismo archivo. Eso tiene dos consecuencias para los operadores:

- **Una URL es el activo.** Confirma el enlace, regenera el recurso bajo demanda - sin binarios subidos a Git, sin perseguir «la última versión» en el chat. Los IDs de recursos y herramientas son contratos permanentes, así que un enlace generado hoy seguirá resolviéndose más adelante.
- **La CLI sigue la misma ruta de renderizado** que la interfaz gráfica, así que las canalizaciones de compilación y la aplicación nunca se desincronizan. Genera imágenes OG, tarjetas sociales y visualizaciones de datos en el momento de la compilación, de forma reproducible.

## Procedencia y Content Credentials

Las exportaciones pueden llevar **Content Credentials** - un manifiesto [C2PA](https://c2pa.org) firmado y vinculado a un hash de los bytes del archivo. Cualquier cambio posterior en el archivo rompe el sello, así que un verificador compatible con C2PA **detecta la alteración de forma criptográfica y sin conexión**. La credencial deja *evidencia* de manipulación: señala la manipulación en lugar de impedirla, que es precisamente lo que hace posible la verificación totalmente sin conexión.

- **Activado por defecto, en el dispositivo.** La clave de firma se genera en el dispositivo, no es extraíble (ni siquiera Lolly puede leerla), y la firma ocurre localmente - solo la *inscripción* de identidad opcional llega a tocar la red.
- **Niveles de confianza.** Una exportación sin inscribir es estructuralmente válida pero está firmada de forma anónima (`untrusted`). Inscribe una **identidad verificada** (certificado de corta duración de la CA de Lolly, vinculado a un correo electrónico) y los verificadores que fijan la raíz de Lolly reportarán `trusted` + el correo electrónico del firmante. Una autoridad de sellado de tiempo confiable y el visto bueno de un validador externo (conformidad C2PA) están en la hoja de ruta. Cada nivel es explícito, y un archivo solo reivindica la confianza que puede demostrar.
- **La duración de la credencial** la decide el operador/usuario en el momento de firmar: 7 / 30 / 90 / 365 días, con 30 por defecto.
- **La verificación se realiza en el dispositivo.** Suelta cualquier archivo en `/valid` (o `lolly validate <file>`) para obtener un informe sin conexión de si fue realmente creado con Lolly y no se ha modificado desde entonces. Consulta [Identidad de Content Credentials](/info/content-credentials-identity.html).

> **Notas de interoperabilidad.** Hoy Lolly verifica sin conexión sus propias credenciales y muchas de terceros. Hay dos asuntos de interoperabilidad en curso: leer por completo los manifiestos de reclamación **v2** de C2PA de otros productores, y WebM - que todavía no tiene una asignación C2PA estandarizada, así que Lolly adjunta el manifiesto como una parte de Matroska (las herramientas de terceros verifican el MP4 de Lolly de fábrica; WebM llegará cuando el estándar se asiente).

## Cifrado y protección con contraseña

Para los archivos que deben viajar bloqueados, todo ocurre en el dispositivo:

- **Contraseña de apertura de PDF** - *Estándar* es un disuasivo RC4 de 40 bits (se abre en cualquier lugar, puede viajar en un enlace); *Fuerte* es **AES-256** (PDF 2.0), se escribe al exportar y nunca se incluye en un enlace.
- **Descargas bloqueadas** - un ZIP, una carpeta de Proyectos o una ejecución por lotes se pueden bloquear en conjunto: *Estándar* ZipCrypto (débil, universal) o *Fuerte* **AES-256** (WinZip AE-2). Defensa en profundidad: cualquier PDF dentro de un zip Fuerte queda *también* bloqueado individualmente con AES-256, así que permanece bloqueado tras descomprimirlo.
- **Enlaces para compartir protegidos con contraseña** - todo el estado del enlace está cifrado con AES-256 bajo una clave derivada mediante PBKDF2; solo viaja el texto cifrado, la contraseña nunca está en el enlace, y el descifrado ocurre en el navegador del destinatario.

## Preparado para entornos aislados (air-gap)

El aislamiento de red (air-gap) es un **despliegue de primera clase**, no un modo especial - Lolly funciona sin red en el momento del renderizado de fábrica. El shell web es una PWA offline-first (service worker); las fuentes y WASM se almacenan en el dispositivo; el estado de las herramientas se persiste localmente a través del puente del host, nunca con `localStorage`. Cualquier herramienta que acceda a la red solo puede hacerlo mediante una capacidad `host.net` **incluida en una lista blanca**, que debe declarar en su manifiesto - un shell que no pueda (o no quiera) cumplirla la neutraliza. Distribuye los shells a los dispositivos a través de tu MDM, o sirve una única instancia dentro de tu red, y una instalación completamente aislada (air-gapped) renderiza, exporta, cifra y verifica credenciales sin nada a lo que reportarse.

## Conviene saber

Unas cuantas cosas que conviene tener claras antes de implementarlo:

- **Fortalecimiento en curso.** La criptografía y los analizadores están pasando por el fortalecimiento a escala empresarial de SUSE (ver arriba) - sólidos por diseño hoy; despliégalos como defensa en profundidad allí donde un contrato requiera una garantía certificada.
- **Los hooks de las herramientas *no* son un sandbox de seguridad.** El `hooks.js` opcional de una herramienta se ejecuta con el puente del host inyectado, pero en un shell de navegador se ejecuta en el ámbito de la página y *puede* acceder a `window`/`document`/`fetch`. Trata el código de las herramientas igual que tratarías cualquier código que ejecutas - revísalo. Por eso una organización que ejecuta un catálogo compartido puede controlarlo mediante revisión en Git; en cualquier caso, ejecuta solo herramientas que hayas revisado hasta que se publique el aislamiento por Worker.
- **Content Credentials dejan evidencia de manipulación.** Detectan la alteración en lugar de impedirla - consulta las notas de interoperabilidad de arriba.
- **Dos niveles de cifrado.** Los bloqueos *Estándar* son disuasivos rápidos y universales; *Fuerte* (AES-256) es protección completa - usa Fuerte para cualquier cosa sensible, teniendo en cuenta que quiere un lector moderno.

## Adónde ir a continuación

- **[Adopción y Gobernanza](/info/adoption-governance.html)** - perfiles, la métrica de desviación y la gobernanza-como-datos en detalle.
- **[Despliegue](/info/deployment.html)** - despliegue/servicio/híbrido, MDM y autoalojamiento de los servicios.
- **[Configuración](/info/configuration.html)** - perfiles, paquetes de marca, control de capacidades y banderas de funcionalidad.
- **[Política de Privacidad](/info/privacy.html)** - la declaración formal de «no recopila nada, no sube nada».
