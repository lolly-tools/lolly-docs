# Usando Lolly

Una guía práctica para *usar* de verdad la aplicación - abrir una herramienta, trabajar en el lienzo, exportar, guardar y compartir. Todo esto funciona **en tu dispositivo**: sin cuenta, sin subir archivos, sin necesidad de internet después de la primera carga.

> ¿Eres nuevo aquí? La [Guía rápida](/info/quickstart.html) te pone a crear en minutos, y [Lolly para Operadores](/info/operators.html) cubre la instalación/el despliegue de la app; esta página trata sobre cómo manejarla una vez abierta.

## Abrir una herramienta

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

![A tool's split view - controls on one side, the live canvas on the other](/t/url-shot?url=%2F%23%2Ftool%2Fqr-code%3Furl%3Dhttps%3A%2F%2Flolly.tools&width=1440&height=900&dpi=192&waitMs=2500&format=png&localize=1&filename=tool-qr-code)

La pantalla de inicio es la **galería** - todas las herramientas, agrupadas por categoría. Haz clic en una tarjeta para abrir la herramienta; si ya has trabajado en ella antes, un botón **Continuar** retoma tu sesión más reciente. Usa el cuadro de búsqueda para filtrar por nombre.

Cada herramienta es una vista dividida: **controles** a un lado, una **vista previa** en vivo (el lienzo) al otro. Cambia cualquier control y la vista previa se actualiza al instante.

> Algunas herramientas (como **Layout Studio**) se abren en cambio como un **lienzo libre** - una superficie sin interfaz, de manipulación directa, donde arrastras, redimensionas, rotas y ajustas cajas de texto, formas e imágenes, y haces doble clic para editar el texto en el lugar. Se exporta a través de la misma ruta de renderizado que cualquier otra herramienta, así que el lienzo *es* el archivo. Consulta [El lienzo libre](#the-free-canvas-layout-studio) más abajo.

## El lienzo (vista previa)

La vista previa siempre muestra exactamente lo que se exportará.

**Escritorio**

- **Zoom:** desplaza con Cmd/Ctrl, o pellizca en un trackpad - el zoom se centra en tu puntero.
- **Desplazamiento (pan):** mantén pulsada la **barra espaciadora** y arrastra, o arrastra con el **botón central del ratón**. (Los clics simples quedan libres para hacer clic en partes del diseño.)
- **Teclado:** `0` = ajustar a la ventana · `1` = 100% · `+` / `−` = zoom.
- **HUD de zoom:** el pequeño control `−  NN%  +  Fit` en la esquina. Haz clic en el porcentaje para alternar entre Ajustar ↔ 100%.

**Táctil**

- **Pellizca** para hacer zoom, **arrastra** para desplazarte, **toca dos veces** para restablecer el ajuste.

**Clic para ir a un control:** haz clic en cualquier elemento del diseño y el control correspondiente en la barra lateral recibe el foco y se desplaza a la vista - para un grupo de filas repetibles, despliega exactamente la fila en la que hiciste clic, así que editar lo que ves está a un toque de distancia.

Un cambio de dimensión siempre hace que la vista vuelva a un ajuste limpio.

### El lienzo libre (Layout Studio)

![Layout Studio's free canvas - the artboard with its surrounding pasteboard](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2000&format=svg&localize=1&filename=layout-studio)

Las herramientas de lienzo libre añaden una superficie de trabajo *alrededor* del área de diseño, como la mesa de montaje de un diseñador:

- **Preparación fuera de lienzo.** Arrastra una caja más allá del borde del marco y permanece totalmente **visible y seleccionable** - aparca elementos a un lado mientras organizas la composición, y luego arrástralos de vuelta. Todo lo que queda fuera del marco se **atenúa suavemente** para que el área de exportación se distinga de un vistazo, y el marco conserva su sombra para marcar exactamente dónde empieza el archivo.
- **Solo se exporta el marco.** El archivo exportado queda delimitado por el área de diseño - todo lo que quede fuera (o la parte de una caja que sobresalga del borde) simplemente se recorta del resultado, tanto en formatos raster como vectoriales.
- **Aleja el zoom más allá de Ajustar** (hasta el 20%) para ver toda la mesa de montaje cuando hayas colocado elementos muy lejos del marco.
- **Área de diseño redimensionable.** Cambiar las dimensiones de exportación redimensiona el marco en el sitio; las cajas mantienen sus posiciones, así que puedes reencuadrar una composición alrededor del contenido existente.

## En un teléfono

En pantallas estrechas, el diseño se reorganiza en una sola columna:

- Los **controles se convierten en una hoja** en la parte superior con un **asa de arrastre** en su borde inferior. Arrastra el asa para redimensionarla - se ajusta a **asomada / media / completa** - o **toca** el asa para alternar entre colapsada y expandida. La vista previa llena el espacio de abajo y permanece visible mientras editas.
- Un botón flotante **Renderizar** abre la hoja de **Exportar** - todos los controles de formato, tamaño, copiar, guardar y descargar en un solo lugar. Ciérrala tocando el fondo.

## Controles (entradas)

Las herramientas exponen solo las entradas que están pensadas para variar - todo lo demás (colores, composición, tipografía, lógica) queda fijado por quien creó la herramienta, así que lo que hagas siempre cumple las reglas que estableció. Las entradas incluyen texto, deslizadores, selectores de color, menús desplegables, fechas, selectores de imagen y grupos de filas repetibles. Algunas se agrupan en secciones plegables.

**Restablecer:** *Borrar cambios* devuelve cada entrada a sus valores predeterminados.

## Tus datos y tu foto

**Perfil** (arriba a la derecha en la galería) guarda tu nombre, tus datos de contacto y una **foto** opcional. Las herramientas que piden esos campos los rellenan automáticamente - configúralos una vez y tu firma de correo, lockups e insignias se completarán solos. Aun así, puedes anular cualquier campo en cada sesión. Actívalo con **Usar mis datos** para que una herramienta pueda leerlos.

Tu foto y tus datos viven **solo en este dispositivo**. Un perfil puede ser más que solo tú - un equipo o un rol que asumes de vez en cuando. Consulta **[Perfiles](/info/profile.html)** para ver el panorama completo, incluido cómo mantener más de uno.

## Guardar y continuar

Haz clic en **Guardar** para almacenar las entradas actuales como una sesión de esa herramienta. Puedes mantener varias sesiones con nombre por herramienta; el botón **Continuar** de cada herramienta reabre la más reciente, y el **botón de historial** (arriba a la derecha, junto a tu perfil) enumera todas las sesiones guardadas en todas las herramientas. Las sesiones son locales al dispositivo. Para organizarlas, abre **Proyectos** (más abajo).

## Proyectos

![Projects - saved sessions organised into nestable folders](/t/url-shot?url=%2F%23%2Fp&width=1440&height=900&dpi=192&waitMs=1200&format=svg&localize=1&filename=projects)

**Proyectos** - ábrelo desde la pestaña **Proyectos** junto a **Herramientas**, o desde **Perfil → Almacenamiento → Organizar en Proyectos** - es un hogar para todo lo que has guardado, y funciona como un gestor de archivos:

- **Carpetas anidables.** Agrupa las sesiones guardadas en carpetas, y carpetas dentro de carpetas, tan profundo como quieras. Crea una carpeta, cámbiale el nombre, o arrastra una miniatura sobre otra carpeta para moverla; una ruta de navegación (breadcrumb) te lleva de vuelta hacia arriba. Una carpeta **Sin clasificar**, siempre presente, guarda todo lo que aún no se ha archivado.
- **Archiva trabajo nuevo directamente.** Dentro de una carpeta, **+ Nueva herramienta** abre una herramienta y archiva su primer guardado en esa carpeta automáticamente.
- **Selección múltiple (escritorio).** Marca la casilla de una miniatura, arrastra un cuadro de selección sobre el lienzo vacío, o usa **Shift/Cmd + clic**; haz **clic derecho** en una miniatura para su menú contextual. Luego actúa sobre toda la selección a la vez.
- **Renderiza una carpeta entera o una selección.** **Renderizar carpeta** exporta cada sesión guardada en una carpeta - incluidas sus subcarpetas - como un único `.zip` anidado. **Renderizar selección** hace lo mismo para cualquier selección múltiple, y una sola sesión se renderiza directamente a su propio archivo. No hace falta Batch/Pro.
- **Comparte una sesión guardada.** Haz clic derecho en una sesión → **Compartir enlace** para copiar un enlace que la reabre con exactamente las mismas entradas (el diálogo completo de Compartir - ver más abajo).

## Compartir un enlace

Cada entrada queda capturada en la URL de la página, así que un enlace *es* el diseño. Usa **Compartir** en los controles de exportación - o **Compartir enlace** en cualquier sesión guardada en Proyectos - para abrir el **diálogo de Compartir**: un enlace listo para copiar más interruptores para cifrar el enlace y para qué ocurre al abrirlo (pantalla completa, el panel de exportación expandido, descarga automática al abrir con `&export`, o copia al portapapeles con `&copy`). 

Un diseño grande generaría una URL larga, así que el diálogo también ofrece un **Enlace más corto** que empaqueta todo el estado en un token compacto - la forma legible también sigue ahí siempre. Pégaselo a un colega, guárdalo en marcadores, o inclúyelo en un commit. (Detalles completos: [Modo URL](/info/url-mode.html).)

> Las imágenes que subiste desde tu dispositivo **no** se incluyen en un enlace compartido - solo existen en tu máquina.

## Cámara en vivo (herramientas que reaccionan al movimiento)

Los **Filtros** de foto - Halftone, Scanline, Posterize, Duotone - muestran un botón **Activar en vivo** donde haya una cámara disponible. Actívalo y el efecto sigue tu cámara web fotograma a fotograma, así que reacciona al movimiento; puedes grabar el resultado en GIF, WebM o MP4. Los fotogramas se leen y procesan **en tu dispositivo** y nunca salen de él, y la cámara se libera en cuanto detienes o abandonas la herramienta. (Cualquier selector de imagen también tiene **Tomar una foto** para capturar un solo fotograma como imagen local.)

## Mis imágenes

Cuando una herramienta te permite añadir una imagen desde tu dispositivo, esta se reduce de tamaño, se le eliminan los datos EXIF/GPS, y se guarda en tu biblioteca personal **Mis imágenes** (en **Perfil → Almacenamiento**). Reutilízala en cualquier herramienta. La biblioteca tiene un límite y es totalmente local - gestiona o elimina imágenes ahí.

## El Catálogo - tu biblioteca de recursos

![The Catalogue - brand assets, swatches and fonts, plus your own uploads](/t/url-shot?url=%2F%23%2Fc%3Fsection%3Dswatches%2Cfonts&width=1440&height=900&dpi=192&waitMs=1600&format=png&localize=1&filename=catalogue)

El **Catálogo** (`#/c`, o el enlace **Catálogo** en el menú) reúne todo lo que tus herramientas pueden aprovechar - logos de marca, imágenes, audio y animación, agrupados por tipo - y es también donde viven tus **propios archivos creativos**. Sin servidor, sin consola de administración, sin pull request: todo está en tu dispositivo.

- **Trae tus archivos.** Arrastra cualquier imagen, SVG, clip de audio, vídeo, Lottie o PDF al área de subida - o haz clic para elegir - y aterriza en tu catálogo al instante, listo en el selector de recursos de cada herramienta. Incorpora tanto como quieras; nunca sale de tu dispositivo.
- **Marca como favorito lo que más usas.** Pon ★ a un recurso (o a una muestra de marca) y se fija en la parte superior de cada selector, así tu logo o color de referencia está a un clic de distancia.
- **Ordena.** Recategoriza un recurso en otro grupo, oculta un recurso de marca compartido que no uses (con **Mostrar ocultos** para recuperarlo), o elimina directamente tus propias subidas.

### Lleva tu paleta y tus fuentes a cualquier parte

El panel de **Muestras** del Catálogo no es solo para consultar - haz clic en un color para copiarlo, o **descarga toda la paleta de marca** en el formato que hable tu otra herramienta:

- **Design tokens (JSON)**, **variables CSS** o **clases CSS** - lleva la marca directamente a una hoja de estilos o a una compilación;
- **Adobe Swatch Exchange (.ase)** - cárgala en Illustrator o Photoshop;
- **Paleta de GIMP (.gpl)** - para GIMP o Inkscape.

El panel de **Fuentes** lista las tipografías de tu marca con una **descarga** junto a cada una, para instalarlas localmente o entregarlas a una imprenta. (La pestaña Colores del [Brand Studio](/info/brand-studio.html) ofrece la misma descarga de paleta.)

Los recursos son una mitad del camino abierto y de hazlo-tú-mismo; la otra es **crear tus propias herramientas** - el lienzo libre (Layout Studio, descrito arriba) te permite construir una visualmente, sin necesidad de código.

## Sonido y accesibilidad

Lolly aspira a ser cómodo de usar para todo el mundo. La interfaz se puede navegar con el teclado, los controles personalizados llevan etiquetas adecuadas para lectores de pantalla, y la vista previa en vivo de cada herramienta se expone como una única imagen etiquetada que describe lo que está creando.

Una capa suave de **sonidos asistivos** confirma lo que haces - al llegar a la galería, al comprobar si unas Content Credentials son válidas o no, al cerrar un panel, al cambiar un filtro. Está **activado por defecto** pero siempre es opcional: desactiva **Sonido** en cualquier lugar donde aparezca el interruptor (el popover de opciones de cada vista, o **Perfil**), y la elección se recuerda.

Junto a ese interruptor está el **Modo Neurospicy** - una pista de concentración de fondo, opcional y relajante, que suena en voz baja mientras trabajas. Al activarla se abre un pequeño **dock de reproductor** en la esquina inferior que te acompaña por toda la app; desde él puedes buscar y elegir una pista, avanzar y retroceder, ajustar el volumen, y minimizarlo o cerrarlo. La lista de pistas abarca varias categorías - melodías procedurales *Lolly Sings*, bucles y ritmos ambientales, tu propio audio subido, y un puñado de emisoras de **radio** de internet en directo (estas necesitan conexión; todo lo demás se reproduce sin conexión). Está **desactivado por defecto** y, como el Sonido, se recuerda entre sesiones y dispositivos. Desactivar el Sonido también silencia la pista de concentración.

## Almacenamiento y privacidad

Todo se almacena en la base de datos local de tu navegador (IndexedDB): tu perfil, las sesiones guardadas, las imágenes subidas, y una caché del contenido del catálogo descargado. **Perfil → Almacenamiento** muestra el uso y te permite:

- **Borrar caché** - elimina el contenido del catálogo descargado (se vuelve a sincronizar en la siguiente carga).
- **Borrar todos mis datos** - elimina el perfil, las sesiones y las imágenes. *No se puede deshacer.*

No se transmite nada a ningún sitio. Sin telemetría, sin renderizado en la nube.

## Pasar a otro dispositivo

Como todo vive en tu dispositivo, **Perfil → Almacenamiento → Pasar a otro dispositivo** te permite llevarlo todo a una segunda instalación - sin cuenta, sin nube:

- **Exportar mis datos** descarga un único `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` (las partes del nombre vienen de tu perfil y se omiten si no están definidas; `<n>` es un contador diario para que las exportaciones del mismo día no choquen entre sí) que contiene tu perfil, cada sesión guardada (con su miniatura), tus imágenes subidas, y tus preferencias (tema, ancho de la barra lateral, estadísticas locales de actividad).
- **Importar datos…** en la otra instalación vuelve a leer ese archivo. Lo **combina**: cualquier elemento con el mismo nombre (tu perfil, una ranura de sesión, una imagen) se reemplaza por la copia importada; todo lo demás en ese dispositivo se conserva. Las sesiones guardadas se vuelven a enlazar automáticamente con tus imágenes importadas.

La caché del catálogo no se incluye - se vuelve a descargar sola en el nuevo dispositivo. El paquete es un zip normal (`manifest.json` + `profile.json` + `sessions.json` + `assets.json` + `assets/blobs/…` + `prefs.json`, con el id de formato `lolly-backup`), así que sobrevive intacto al correo, USB o AirDrop, y es el mismo formato que lee cada shell. Cada parte lleva su checksum, así que un archivo dañado en tránsito se detecta al importar en lugar de restaurarse a medias. (Detalles completos: [Transferencia de datos](/info/data-transfer.html).)

## Importar un diseño (Figma, Penpot, Illustrator, InDesign)

Puedes traer un diseño existente a Lolly y seguir trabajando en él: abre **Layout Studio**, haz clic en **Importar un diseño** en la barra de herramientas del lienzo, y elige un **.fig** o SVG de Figma, un **.penpot** de Penpot, un **.ai** / **.pdf** de Illustrator, o un **.idml** de InDesign. Las capas se convierten en cajas editables en el lienzo libre - el texto se puede volver a escribir, las imágenes van a **Mis imágenes**, y la tipografía y los colores se ajustan a las variables globales de marca - y luego el resultado se guarda, se comparte y se renderiza como cualquier otra sesión. El análisis ocurre por completo en tu dispositivo. Detalle completo: **[Importar un diseño](/info/design-import.html)**.

## Exportar

Consulta **[Exportar y formatos](/info/exporting.html)** para la historia completa - elegir un formato, el tamaño de salida y las unidades de impresión, la transparencia, el vídeo, y copiar/compartir. En resumen: elige un formato, ajusta el tamaño si lo necesitas, y **Descargar** (o **Copiar** al portapapeles).

## Modo Batch (Pro)

Para usuarios avanzados, **Batch** (enlazado desde la galería, protegido tras el indicador de función Pro, que está activado por defecto) renderiza muchas variaciones a la vez - una cuadrícula donde cada fila es un conjunto de entradas, exportadas juntas. Ideal para localizar una tarjeta en una docena de idiomas o generar cada variante de tamaño de una sola vez. Rellena las filas escribiendo, pegando directamente desde una hoja de cálculo, o importando un CSV (también puedes exportar uno de vuelta), y define el formato, el tamaño y el nombre de archivo de salida por fila. Guarda una cuadrícula completa como una **sesión de batch** con nombre que se reabre desde la galería, y descarga cada fila como un único `.zip`.

Batch sirve para generar **muchas variantes de una misma plantilla** a la vez. Para volver a renderizar sesiones que **ya has guardado**, usa **Proyectos → Renderizar carpeta / Renderizar selección** (más arriba) - no hace falta Pro.

## Sin conexión e instalación

Lolly es una PWA. Después de la primera carga funciona **sin conexión** - instálala desde la barra de direcciones de tu navegador (o *Añadir a pantalla de inicio* en el móvil) para una experiencia a pantalla completa, como la de una app. Se actualiza sola cuando vuelves a tener conexión.
