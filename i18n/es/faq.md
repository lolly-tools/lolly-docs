# Preguntas frecuentes

Preguntas frecuentes que se muestran en el acordeón de la página de inicio `/info`.

**Cómo mantener esto:** cada encabezado `##` a continuación es una pregunta; todo lo que
hay debajo de él (hasta el siguiente `##`) es la respuesta. Las respuestas usan el mismo
markdown ligero que el resto del sitio — separa los párrafos con una línea en blanco.
Añade, elimina o reordena preguntas aquí y vuelve a ejecutar `npm run build:info` (o
`npm run dev:web`). Todo lo que esté por encima del primer `##` (este título y estas
notas) es ignorado por la compilación.

## ¿Qué ocurre cuando activo el opt-in en la página /profile?

Cuando usas Lolly por primera vez, todo lo que escribes en cualquier lugar es totalmente privado hasta que decides deliberadamente hacer pública esa información mediante un medio o un enlace para compartir (si estás en línea).

Con el opt-in activado, incorporamos parte de la información de tu perfil como procedencia en los activos y paquetes para identificarte como la fuente.

Lolly produce un gran volumen de contenido. Adoptamos un enfoque estricto de minimización de datos para prevenir riesgos.

### ¿Qué son las feature flags?

Las feature flags activan o desactivan partes de Lolly. Normalmente las controla un administrador — con Lolly, el control lo tienes tú.

## ¿Cómo consigo las apps móviles o de escritorio?

Cualquiera puede distribuir sus propias apps; las herramientas y la configuración de esas apps deberían variar mucho según el público al que estén destinadas. Así que no existe una única app, a menos que la hayas creado tú o alguien relevante te la proporcione.

## ¿Por qué el nombre "Lolly Tools"?

**Lolly** Porque la libertad es dulce.
**Tools** están inactivas cuando no se usan. No te espían, no ejecutan programas secretos,  
Ponlas a trabajar: tus órdenes, tus acciones y tus condiciones.

**Lolly** es un término australiano, neozelandés y británico para "golosinas" o "caramelos". Igual que los lollies, las herramientas resultan muy sabrosas para quienes las necesitan.

Además, nos reímos del tiempo y del dinero que ahorramos con este enfoque.

## ¿Qué obstáculos podría esperar al adoptar Lolly?

Lolly encaja allí donde ya generas archivos — la CLI es el mismo motor que la App, así
que la ejecución de un pipeline a las 2 de la madrugada no puede desviarse de lo que una
persona previsualiza en un navegador. La fricción a la hora de adoptarlo rara vez es
técnica; es organizativa. Espera lo siguiente:

**Las herramientas y el catálogo de marca hay que crearlos.** Lolly es una plataforma, no un
paquete terminado con tus plantillas. Alguien tiene que definir el catálogo de activos
(logotipos, paletas, tipografías como IDs permanentes) y escribir el manifiesto + la
plantilla para cada tipo de salida.  

**La gobernanza funciona sobre git.** "La revisión del PR *es* la moderación" resulta
elegante para las personas ingenieras, pero es poco habitual para la mayoría de los
equipos de marca y marketing. Si quienes deciden sobre la marca no viven en git,
necesitarás un flujo de trabajo que los conecte — o, si no, TI se convierte
silenciosamente en el socio de diseño estratégico y en el guardián institucional más
amplio. Algo que muchos prefieren en entornos de producción de larga duración. 

**Es deliberadamente limitado — preséntalo así.** Lolly no es para contenido a medida o
contenido estrella. *Sí* es tu DAM personal — hidratado y potenciado por tu sistema de
diseño, tus herramientas y tu catálogo — y *sí* tiene un lienzo abierto (Layout Studio),
pero incluso ahí los colores, la tipografía y los activos se ajustan a las variables
globales de diseño activas, de modo que la disposición libre se mantiene dentro del
sistema. Comparado con Figma o Canva parecerá limitado. Juzgado por lo que realmente
es — generación de activos operacionalizada, recurrente y a gran escala — nada compite
con él. El planteamiento equivocado es el tropiezo más habitual.

**Gestión del cambio en el lado de producción.** Los procesos existentes funcionan hoy,
aunque el resultado no respete la marca. Redirigirlos hacia el motor implica volver a
probar y volver a aprender, y "ya podemos generar archivos" se convierte en la excusa
para no migrar. Empieza convirtiendo una salida de producción de alta visibilidad y
muestra el antes y el después uno junto al otro.

Lolly eleva todo el conjunto.


## ¿Qué diferencia a las utilidades de las herramientas?

**Respuesta básica →** Las utilidades no siempre necesitan renderizar y, por eso, pueden tener una UX diferente. 

**Respuesta real →** El motivo por el que las utilidades se pueden alojar dentro de Lolly Tools es añadir otra "capa de conveniencia" de defensa para desincentivar la exfiltración de datos. 

¿Por qué? Porque se sabe que, cada día, las personas toman **contenido confidencial que ya tienen** y se lo entregan a un
sitio web cualquiera para realizar una pequeña operación mecánica:

- "**Comprime este PDF**" → sube un contrato / una nómina / una presentación del consejo a entidades desconocidas.
- "**convierte HEIC a JPG**" → sube fotos personales (con EXIF de GPS) a un host financiado por publicidad
- "**recorta / redimensiona esta imagen**" → sube una captura de pantalla de un producto o un activo aún no publicado
- "**formatea este JSON**" / "decodifica este JWT" → pega respuestas de API, tokens y secretos en un formateador
- "**combina estos PDF**" → sube **dos documentos que nunca deberían compartir servidor**

Estos sitios y su enorme cola larga de clones **no son fiables por defecto**: con
retención desconocida, jurisdicciones desconocidas, subprocesadores desconocidos, y un
modelo de negocio de publicidad/afiliación que tiene todos los incentivos para quedarse
con lo que le entregas. La operación es trivial; **el contenido es el coste.** 

Ganamos la guerra de la gobernanza con una conveniencia y un servicio excelentes. 

## ¿Puede Lolly editar y renderizar mis archivos de Figma, Penpot, Illustrator o InDesign?

Sí. Abre **Layout Studio** y haz clic en **Import a design**: acepta un **.fig** nativo de Figma (Save local copy), una exportación **.penpot** de Penpot, un **.ai** o **.pdf** de Illustrator, un **.idml** de InDesign (File → Export → InDesign Markup), o **cualquier SVG** (la puerta ancha — casi cualquier aplicación de diseño lo exporta). Todo se procesa por completo en tu dispositivo, sin necesidad de cuenta ni de plugin.

Las capas llegan como cajas editables en el lienzo abierto: el texto se puede volver a escribir, las formas siguen siendo formas, las imágenes se incorporan a tu biblioteca local, y la tipografía y los colores se ajustan a las variables globales de marca. Guárdalo y el diseño se convierte en una plantilla reutilizable y direccionable por URL que cualquier persona con Lolly puede rellenar de nuevo — y puedes combinar herramientas en vivo (un código QR, un gráfico) que se vuelven a renderizar al cargar. A partir de ahí se renderiza como cualquier otra cosa en Lolly — SVG, PDF, PNG y demás, reproducible desde su URL. Consulta [Import a design](/info/design-import.html).

## ¿Qué ocurre el 29 de agosto?

Las herramientas de marca SUSE abandonan el proyecto, y nuevas herramientas de ejemplo genéricas definidas por el usuario ocupan su lugar.

SUSE operará su propia instancia de Lolly para proteger sus marcas registradas.

## ¿Cuánto se guarda SUSE en privado? (o sea, cuándo llega el rug-pull)

Las marcas registradas y las herramientas de marca de SUSE son solo para fines de demostración, hasta el 29 de agosto. Puedes encontrar una instancia de Lolly sin marca en [lolly.ART](https://lolly.art).

SUSE es una empresa de infraestructura de código abierto para empresas, con más de tres décadas de liderazgo en plataformas. Sus productos incluyen soluciones de infraestructura de nivel empresarial para Linux, Cloud Native, Edge e IA.

Desde la perspectiva de SUSE, esto consiste en predicar con el ejemplo en materia de soberanía y seguridad. A día de hoy, la probabilidad de que SUSE convierta Lolly en un producto propio es prácticamente cero.

Que quede claro: SUSE *sí* está desarrollando herramientas internas para integrar Lolly dentro de sus sistemas de TI — eso tiene que ver con la configuración interna de SUSE, no con el desarrollo público frente al privado.

Hablando del lado público, Lolly aspira a construirse a través de [Open Build Service](https://openbuildservice.org/), con artefactos de cadena de suministro seguros entregados por [SUSE Application Collection](https://apps.rancher.io/applications).

Construiremos todo lo que podamos de forma abierta — simplemente no verás las herramientas de marca SUSE durante mucho más tiempo, ni tampoco la plantilla interna de SUSE ni sus procesos comerciales, que no tienen relación con Lolly.

## ¿De qué sabor es ese logo de Lolly?

Unos dicen Lima, otros dicen Menta y a veces Manzana — Lolly aporta el dulzor, tú haces que el sabor suceda.
