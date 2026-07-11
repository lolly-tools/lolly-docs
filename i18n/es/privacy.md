# Política de Privacidad

*Última actualización: junio de 2026*

## La app de Lolly

Lolly funciona por completo en tu navegador. **No recopilamos nada, no transmitimos nada, y no tenemos servidores que vean tus datos.** No hay analítica, ni seguimiento, ni terceros de ningún tipo.

**Sin cookies, en ningún sitio.** Lolly nunca establece una cookie. Para que la app funcione, guarda una pequeña cantidad de datos **en tu propio dispositivo**, todos ellos estrictamente necesarios para alguna función que estés usando:

- **Tu tema claro/oscuro** y algunas preferencias de interfaz (ancho de la barra lateral, zoom).
- **Una caché sin conexión del catálogo de herramientas**, para que la galería siga cargando sin conexión.
- **Contadores de uso solo locales** para las pequeñas estadísticas de tu tarjeta de perfil — estos nunca se envían a ningún sitio.
- **Tus propios documentos y sesiones guardadas**, almacenados localmente en el navegador (IndexedDB) para que tu trabajo persista entre visitas.

Nada de esto se comparte, se sube, ni se usa para identificarte o hacerte seguimiento, así que no hay nada que consentir — solo este aviso, para que sepas qué se guarda. Puedes borrarlo todo en cualquier momento con **Perfil → Borrar todos mis datos**, o borrando el almacenamiento del sitio en tu navegador.

Este sitio de documentación (`/info`) es aún más ligero: no establece **ninguna cookie**, solo guarda tu preferencia de claro/oscuro en tu dispositivo, y sirve todo — incluidas las fuentes — desde lolly.tools mismo, sin peticiones a CDN ni a terceros.

## Utilidades en el dispositivo

Algunas herramientas son **utilidades** que trabajan sobre un archivo que *tú* proporcionas — por ejemplo **Strip Hidden Data**, que muestra los datos ocultos en una imagen o PDF (ubicación GPS, cámara, autor, editor y metadatos del documento) y te devuelve una copia limpia, o **Compress PDF**, que reduce el tamaño de un PDF recodificando sus imágenes directamente en tu dispositivo.

Estas se ejecutan **por completo en tu navegador**. El archivo que eliges se carga en la memoria de tu dispositivo, se transforma localmente, y se ofrece de vuelta como descarga. **Nunca se sube** — no hay servidor al que subirlo. La copia limpia no lleva marca de agua ni ningún metadato identificativo propio; todo el sentido es *eliminar* datos, no añadirlos. No se almacena nada después de que te vas, y estas utilidades funcionan sin conexión. Verás una insignia de **"Se ejecuta en tu dispositivo — nada se sube"** en cada una de ellas.

Esto es lo opuesto al típico sitio web de "comprime este PDF" / "convierte este HEIC", que sube tu archivo al servidor de un desconocido para hacer un trabajo que tu navegador puede hacer localmente.

## La extensión del navegador

La extensión del navegador **Lolly URL Screenshot** no recopila, almacena ni transmite ningún dato personal. Sin analítica, sin seguimiento, sin servidor remoto.

## Qué hace

Cuando le pides a la app web de Lolly ([lolly.tools](https://lolly.tools)) que tome una captura de pantalla de una URL, la extensión abre esa página en una pestaña temporal en segundo plano, la captura en tu navegador mediante el DevTools Protocol, devuelve la imagen a la app y cierra la pestaña. Todo ocurre localmente, en tu propio dispositivo y red.

## Datos

- **No recopilamos nada.** La extensión no tiene servidores y no realiza ninguna petición de red propia.
- **Las imágenes capturadas** van directamente a la app de Lolly en el mismo navegador — nunca las sube la extensión.
- **Las URLs que capturas** se usan solo para cargar esa página concreta para esa captura concreta. No se registran ni se comparten.

## Permisos

- **`debugger`** — para capturar la página renderizada mediante el DevTools Protocol (el mismo mecanismo que usa la app de escritorio de Lolly).
- **Acceso a pestañas** — para abrir y cerrar la pestaña temporal en la que se carga la página.
- **Acceso al sitio (host)** — porque la página que decidas capturar puede estar en cualquier sitio.

Ninguno de estos permisos se usa para leer, monitorizar o transmitir tu navegación.

## Contacto

¿Preguntas? Consulta [lolly.tools](https://lolly.tools).
