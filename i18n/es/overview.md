# Visión general

Este documento recoge el propósito, la estructura y las decisiones arquitectónicas de la plataforma Lolly. Refleja tanto la visión del producto como el estado actual de la base de código.

> **Estado:** Lolly es un prototipo interno en un **piloto cerrado que todavía no ha concluido**. El motor es determinista e internamente consistente, pero el producto está en una fase temprana — SUSE es el cliente número uno — y sus motores de criptografía y análisis de archivos están actualmente pasando por el estricto endurecimiento de infraestructura de SUSE, preparándose para la escala empresarial (se nos da realmente bien esto). Lee la arquitectura que sigue como intención de diseño bajo prueba, no como un producto terminado y certificado. Consulta [Adopción y Gobernanza](/info/adoption-governance.html#status) para saber cómo se gestiona y se mide el piloto.

---

## Por qué existe esto

Los equipos se enfrentan a un problema recurrente: trabajo creativo y de contenido repetible que es demasiado predecible como para justificar manos expertas cada vez, pero demasiado sensible a la calidad como para delegarlo sin barreras de protección. El resultado es, o bien un rendimiento lento (cuello de botella del especialista), o bien inconsistencia (cada persona usa la herramienta que tiene a mano), o bien dependencia de un proveedor (un DAM SaaS que controla tus plantillas).

Esta plataforma es la respuesta estructural:

> **Contenido y creatividad programáticos a escala** — generación de assets sin mano de obra, con las reglas bajo control centralizado, para empleados, proveedores y socios.

El resultado es **abundancia**: cada evento tiene la señalética correcta, cada alerta CVE respeta el estilo de la casa, cada etiqueta se imprime limpia, cada firma de correo está actualizada — todo sin un ticket de diseño. La plataforma se ocupa de la creatividad operacionalizada y recurrente. Deliberadamente, no es una herramienta creativa a medida — los diseñadores siguen siendo dueños del trabajo insignia.

### Dónde encaja en el panorama

| Capacidad | Canva | Portales de marca | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| Generación masiva de contenido | parcial | ✗ | ✗ | ✗ | **✓** |
| Funciona completamente sin conexión | ✗ | ✗ | ✓ | parcial | **✓** |
| Lógica de plantillas y restricciones estrictas | ✗ | parcial | ✗ | parcial | **✓** |
| No requiere habilidades de diseño | parcial | ✓ | ✗ | ✗ | **✓** |
| Content Credentials automáticas | ✗ | ✗ | parcial | ✗ | **✓** |
| Las herramientas componen otras herramientas | ✗ | ✗ | ✗ | ✗ | **✓** |
| Motor abierto, sin bloqueo a un SaaS | ✗ | ✗ | ✗ | parcial | **✓** |
| Content Credentials C2PA | ✗ | ✗ | ✗ | ✗ | **✓** |
| Procedencia de nivel forense opcional | ✗ | ✗ | ✗ | ✗ | **✓** |
| Apps móviles y de escritorio | ✓ | ✗ | ✗ | parcial | **✓** |
| Línea de comandos y TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

La brecha es clara: nada en el panorama existente nos ofrece una salida basada en restricciones, capaz de funcionar sin conexión, con baja exigencia de habilidad y accesible internamente. Lolly incluso incluye un lienzo abierto — **Layout Studio** — donde los colores, la tipografía y los assets se ajustan a las variables globales de marca, de modo que la disposición libre se mantiene basada en restricciones. Lo que **no** es: una suite de diseño sin restricciones. Los diseñadores siguen usando Illustrator y Figma para el trabajo insignia a medida. Las permutaciones pueden ensamblarse con esta herramienta.

**Úsala para:** Generación rápida de assets creativos operacionalizados — tarjetas de eventos, insignias con nombre, firmas, alertas CVE, códigos QR, tarjetas sociales, etiquetas de envío, informes estructurados.

**No la uses para:** Contenido insignia a medida.

---

## La panorámica general

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### Estructura del repositorio

```
lolly/
├── engine/           # Núcleo agnóstico de plataforma. Código abierto (MPL-2.0).
│   └── src/
│       ├── index.ts          # superficie pública — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # obtiene y valida los archivos de la herramienta
│       ├── runtime.ts        # orquesta el ciclo de vida de 5 pasos
│       ├── template.ts       # hidratación de Handlebars + annotateTemplate
│       ├── inputs.ts         # manifiesto → modelo de entrada en runtime
│       ├── url-mode.ts       # ida y vuelta URL ↔ estado de entrada
│       ├── validate.ts       # validación de manifiestos con JSON Schema
│       ├── compose.ts        # resuelve renderizados anidados de herramientas (composes)
│       ├── embed.ts          # analiza URLs de inserción portables de lolly.tools
│       └── bridge/
│           └── host-v1.ts    # interfaz de TypeScript — el contrato del puente
│
├── shells/
│   ├── web/          # PWA — alojada en línea; distribución principal
│   │   └── src/
│   │       ├── main.ts           # arranque, enrutado
│   │       ├── theme.ts          # aplicar/persistir el tema (prevención de FOUC)
│   │       ├── bridge/           # implementaciones web de las API de HostV1
│   │       │   ├── index.ts      # compone todas las piezas del puente
│   │       │   ├── db.ts         # configuración de IndexedDB
│   │       │   ├── state.ts      # host.state — ediciones guardadas
│   │       │   ├── profile.ts    # host.profile — datos del usuario
│   │       │   ├── assets.ts     # host.assets — catálogo + subidas del usuario
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — rasterizar/serializar
│   │       │   ├── net.ts        # host.net — fetch con lista blanca
│   │       │   └── media.ts      # host.media — fotogramas de cámara en vivo (onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # sincronización del catálogo al arrancar + caché sin conexión
│   │       ├── styles/           # CSS de toda la app (app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # listado de la biblioteca de herramientas + tarjetas de estado guardado
│   │           ├── tool.ts       # monta una herramienta (entradas + lienzo + acciones)
│   │           ├── picker.ts     # interfaz del selector de assets (invocada por host.assets)
│   │           ├── profile.ts    # editor de datos del usuario
│   │           ├── projects.ts   # /p — carpetas de sesiones guardadas (anidadas; exportación de carpeta/selección)
│   │           └── free-canvas.ts # superposición del editor de lienzo libre para herramientas render.layout:"editor"
│   │
│   ├── cli/          # CLI de Node.js — mismo motor, jsdom sin interfaz
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → escribe el archivo
│   │       └── bridge.ts # implementación de HostV1 para la CLI
│   │
│   ├── tui/          # Shell de terminal interactivo (Ink) — reutiliza el puente de la CLI
│   │   └── src/
│   │       ├── main.tsx  # app a pantalla completa: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # puente de la CLI + estado en disco bajo ~/.lolly
│   │
│   ├── tauri-desktop/ # app de escritorio descargable
│   └── tauri-mobile/  # app iOS/Android
│
├── tools/            # VISTA de perfil (en gitignore) — datos, no código. Fusionada a partir de paquetes:
│                     #   community/ (público, agnóstico de marca, MPL) + brands/<active>/tools (propiedad de la marca).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — clima/hora/mapa (obtenido mediante un script de plantilla en línea)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # bloques tipados/heterogéneos (discriminador addMenu)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — logo de marca que cambia automáticamente
│   ├── street-map/        # mapas vectoriales de manzanas urbanas, sin conexión
│   ├── url-shot/          # "URL Screenshot" (capacidad capture)
│   ├── strip-data/        # eliminación de metadatos en el dispositivo — JPEG/PNG/SVG/PDF (archivo de entrada → archivo limpio de salida)
│   ├── compress-pdf/      # compresor de PDF en el dispositivo — recomprime imágenes (archivo de entrada → archivo más pequeño de salida)
│   ├── brand-lockup/      # "Brand Lockup" — lockups del logo de SUSE; texto a trazado con HarfBuzz (wasm)
│   ├── bag-video/
│   ├── chart-creator/     # gráficos SVG a partir de datos estructurados
│   ├── filter-duotone/    # tratamiento fotográfico a dos colores
│   ├── filter-halftone/   # foto → trama vectorial de semitonos
│   ├── filter-scanline/   # foto → rejilla retro de líneas de escaneo posterizadas (SVG / raster transparente)
│   ├── meeting-planner/   # planificador de reuniones con zonas horarias globales
│   ├── calendar-ics/      # evento → archivo de calendario .ics más una tarjeta
│   ├── digi-ad/           # "Animated Ad" — banner en bucle a partir de escenas
│   ├── event-name-badge/  # insignias de conferencia — compone qr-code como SVG
│   ├── wayfinding-signage/ # señalética de eventos; los bloques de direcciones ajustan automáticamente el texto de la etiqueta
│   ├── text-helper/       # banco de trabajo de texto en el dispositivo (formatear/decodificar/hash/desidentificar)
│   ├── layout-studio/     # "Layout Studio" — lienzo editor WYSIWYG de forma libre (render.layout: editor)
│   ├── multi-page-pdf/    # documento PDF multipágina — portada, bloques de contenido fluido, contraportada
│   ├── diagram-builder/   # diagramas de organigrama / capas / proceso / ciclo / pirámide
│   ├── logo-wall/         # muchos logos → rejilla autoempaquetada
│   ├── logo-lockup-partner/ # lockup de marca compartida SUSE + partner
│   ├── web-icon/          # favicon .ico / png / svg a partir de texto + colores
│   ├── filter-posterize/  # foto → separaciones vectoriales posterizadas planas
│   ├── filter-pixel-stretch/ # foto → efecto de manchado de píxeles
│   ├── lottie-digi-ad/    # banners publicitarios animados en Lottie
│   └── pose-geeko/        # posa a la mascota Geeko de SUSE — imágenes fijas listas para imprimir
│
├── catalog/
│   ├── tools/index.json        # registro de herramientas
│   └── assets/
│       ├── index.json          # registro de assets
│       └── suse/...            # logo, paleta, etc.
│
├── schemas/          # JSON Schema para tool.json, entradas de asset, AssetRef
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # pruebas del motor
└── docs/             # este archivo + guías de creación + posicionamiento
```

---

## Modelo de distribución de la plataforma

La plataforma se ejecuta en varias superficies — PWA web, Tauri de escritorio/móvil, la CLI programable y la TUI interactiva. Todas usan el mismo motor y los mismos archivos de herramienta.

### Web (PWA) — distribución principal
Alojada en una URL controlada por SUSE. Funciona sin conexión en cuanto el service worker ha almacenado en caché las herramientas y los assets. Aquí es donde la mayoría de empleados, proveedores y socios usarán la plataforma. No requiere cuenta — el estado se guarda en IndexedDB por dispositivo.

El shell web es responsivo a partir de un único layout. En escritorio, una herramienta es una barra lateral de controles redimensionable junto a un escenario de vista previa con navegación de lienzo nativa de trackpad (rueda con Cmd/Ctrl o pellizco para hacer zoom alrededor del cursor, arrastre con la barra espaciadora o el botón central para desplazar, teclas `0`/`1`/`+`/`−`, y un HUD de Ajustar/%). En móvil (≤640px) los controles se convierten en una hoja anclada arriba con un asa de arrastre que se ajusta a asomada/media/completa (un toque alterna entre estados) sobre una vista previa estática a pantalla completa, y un botón flotante **Renderizar** abre los controles de **Exportar** en una hoja inferior emergente. El tacto permite pellizco para zoom y arrastre para desplazar sobre la vista previa. La ruta de renderizado y los controles de exportación son idénticos en ambos casos — solo cambia la disposición de la interfaz.

**Modo por lotes (`/pro`).** El shell web también incluye una cuadrícula de lotes al estilo hoja de cálculo (`shells/web/src/pro/`) que renderiza muchas filas a la vez en una o varias herramientas. Ofrece ida y vuelta CSV/TSV más pegado desde hoja de cálculo, plantilla/formato/tamaño/unidad/dpi por fila, un panel lateral de editor de bloques con vista previa en vivo, columnas de exportación plegables, una barra de etiquetas de "relevancia" por fila, reordenación de filas con asa de arrastre a la izquierda, confirmación de borrado en dos pasos, sesiones de lote guardadas, y una descarga en `.zip`. Esta es la superficie de "uno a muchos" detrás del posicionamiento de "generación masiva de contenido".

### Tauri de escritorio / móvil
App nativa empaquetada (huella reducida gracias a Tauri). Ofrece disponibilidad completa sin conexión, acceso al sistema de archivos para herramientas que dependen de la CLI (PDF Smasher, Font Outliner), y acceso a la cámara. Programado para una mejora de herramientas a mediados de 2026.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

Los usuarios de escritorio pueden invocar muchas herramientas desde la terminal. El shell de la CLI carga el mismo motor, crea un DOM con jsdom, ejecuta la misma ruta de renderizado, y escribe el archivo. El modo URL es el transporte — la CLI no es una implementación aparte. Esto garantiza que las salidas de la CLI y de la GUI sean idénticas.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # lista las herramientas disponibles
lolly qr-code                # lista las entradas de esa herramienta
```

### TUI
`npm run tui`

La contrapartida interactiva de la CLI: una app de terminal a pantalla completa, orientada al teclado (construida sobre Ink) para explorar herramientas, rellenar entradas, guardar proyectos y exportar — todo sin GUI. Su puente de host **reutiliza la implementación de la CLI** para los formatos sin DOM (SVG/EMF/EPS/HTML + texto/datos), y añade estado en disco bajo `~/.lolly` más una vista previa en línea opcional. Más allá de eso, cuenta con un **nivel de renderizado en navegador**: un Chromium sin interfaz y de ámbito acotado (el mismo que instala el servidor MCP) que produce raster/PDF/vídeo y captura de URL en vivo bajo demanda — impulsando una copia compilada del shell web para que la salida sea idéntica, y que se inicia solo la primera vez que exportas ese tipo de formato. Así, `url-shot` (con recorte + recoloreado + PDF/SVG vectorial) y cualquier herramienta de raster/pdf también se ejecutan en la terminal. Consulta la [guía de la TUI](/info/tui.html).

---

## Categorías de herramientas

Las herramientas se etiquetan con una `category` en su manifiesto para agruparlas en la galería.

Las filas aparecen en el orden de las secciones de la galería. La sección `utility` siempre se renderiza **última** en la galería (después de cualquier otra categoría, incluidas las futuras) — es el cajón de "Utilidades sin conexión" en el dispositivo.

| Categoría | Herramientas publicadas | Planificadas |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | Conversores de unidades/formato, más utilidades de privacidad en el dispositivo |

Las herramientas también se clasifican por estado: `official` (aprobada por la marca, sin marca de agua), `community` (contribución externa), `experimental` (exportaciones con marca de agua). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap y Diagram Builder llevan actualmente el estado `experimental`; Web Icon Maker y Layout Studio se publican como herramientas `community`.

**Layout Studio** es la primera herramienta construida sobre el modo de lienzo libre `render.layout: "editor"` — una superficie sin interfaz de aplicación, de manipulación directa, donde arrastras, redimensionas, rotas y ajustas cajas de texto, formas e imágenes, y luego exportas a través de la misma ruta de renderizado que cualquier otra herramienta.

**Strip Hidden Data** es la primera **utilidad en el dispositivo** (`privacy: "on-device"`): una herramienta de transformación de contenido que toma un archivo que *tú* aportas, lo procesa por completo en el navegador, y te devuelve una copia limpia — nunca se sube, nunca lleva marca de agua, no se estampa procedencia. **Text Helper** es la segunda — un banco de trabajo en el dispositivo para las tareas cotidianas de "pegar en una web" (formatear JSON, decodificar JWT, Base64, codificar/decodificar URL, hash SHA). **Compress PDF** es la tercera — reduce un PDF recomprimiendo sus imágenes, también por completo en el dispositivo. Las tres llevan el texto de insignia "Se ejecuta en tu dispositivo — nada se sube". Este es el comienzo de una categoría de utilidades de privacidad que sustituye la entrega de archivos confidenciales a sitios web de propósito único.

> Nota: `category` y `status` se desnormalizan hacia `catalog/tools/index.json` (el registro que lee la galería) a partir de cada `tool.json`. El manifiesto es la fuente de verdad — el índice se **genera** con `npm run build:catalog`, y `npm run validate:catalog` falla en CI si el índice confirmado se desvía de los manifiestos.

---

## Compromisos arquitectónicos

Estas decisiones están asentadas. Cambiar cualquiera de ellas es una tarea mayor — moldean cualquier otra decisión en la base de código.

### 1. Herramientas declarativas, con una vía de escape imperativa

Una herramienta es un manifiesto (`tool.json`) + una plantilla (`template.html`) + un `hooks.js` opcional.

**El manifiesto declara las entradas.** No la plantilla. Las entradas no se infieren a partir de los tokens de Handlebars. El manifiesto es el contrato; la plantilla consume variables con nombre mediante `{{id}}`.

**Los hooks son opcionales.** La mayoría de las herramientas son puramente declarativas — manifiesto + plantilla basta. Las herramientas que necesitan valores calculados (codificación de QR, formateo de datos de gráficos) proporcionan un `hooks.js` que expone funciones de ciclo de vida con nombre (`onInit`, `onInput`, `onFrame` — el hook por fotograma de cámara en vivo para herramientas reactivas al movimiento — `beforeRender`, `beforeExport`, `afterExport`, y `exportFile` — la ruta de transformación archivo-de-entrada/archivo-de-salida que usan las utilidades en el dispositivo como Strip Hidden Data). El host carga los hooks mediante `new Function('host', …)` con el puente de capacidades inyectado como ámbito de clausura. Esto es un **contrato de portabilidad, no un sandbox de seguridad**: los hooks se siguen ejecutando en el ámbito de la página y *pueden* alcanzar `window`/`fetch`/`document` en un shell de navegador — `host.*` es la superficie compatible y portable, no un límite forzado. Los resultados asíncronos de los hooks tienen un tiempo límite (onInit 5s, onInput 2s, el resto 5s) y los resultados tardíos se descartan; un hook *síncrono* fuera de control no se puede interrumpir. Por eso, el código de hooks de terceros no confiables no es seguro de ejecutar hasta que se publique el aislamiento por Worker.

Esto importa porque: las herramientas declarativas pueden ser creadas por personas que no son desarrolladoras. Si cada herramienta fuera una app web, la nota de riesgo "habilidades limitadas para crear/mantener las plantillas de trabajo" se convierte en un cuello de botella permanente.

### 2. Las herramientas y los assets son datos, no código empaquetado

Las apps web y Tauri obtienen los catálogos de herramientas y assets desde una URL conocida al arrancar, los guardan en caché localmente, y operan con lo que haya ahí. **Añadir una nueva tarjeta de evento o un asset de temporada no requiere una nueva versión de la app.**

Los bytes de cada asset llevan un checksum SHA-256 para evitar el envenenamiento de la CDN. El `id` + `version` del asset determina la invalidación de la caché.

### 3. El puente de capacidades es la única API que ven las herramientas

Las herramientas nunca tocan el DOM fuera del área de su plantilla, nunca llaman a `fetch` directamente, nunca leen el sistema de archivos. Llaman a métodos versionados `host.*`. El puente está definido en `engine/src/bridge/host-v1.ts`:

| API del puente | Qué hace |
|---|---|
| `host.profile` | Nombre, correo, foto, ciudad, etc. del usuario. Rellena entradas de antemano mediante `bindToProfile`. |
| `host.assets` | Consultas al catálogo, resolución de assets, interfaz de selector proporcionada por el host. |
| `host.state` | Guardar / cargar espacios de entradas. IndexedDB en web, sistema de archivos en Tauri, memoria en la CLI. |
| `host.clipboard` | Escribe texto o imagen en el portapapeles (con alternativas según la plataforma). |
| `host.export` | Rasteriza o serializa el objetivo de renderizado. Aplica la marca de agua en herramientas experimentales. |
| `host.net` | Fetch con lista blanca — solo disponible si la herramienta declaró la capacidad `"network"`. (Ninguna herramienta publicada la usa actualmente.) |

Las superficies opcionales y aditivas solo aparecen cuando un shell las proporciona. Dos están **controladas por capacidad** — expuestas solo cuando la herramienta declara la bandera correspondiente: `host.compose` (incrusta el renderizado de otra herramienta — `compose`) y `host.capture` (captura de página para URL Screenshot — `capture`). El resto se **detectan por funcionalidad** — presentes siempre que el shell pueda proporcionarlas: `host.text` (texto a trazado mediante HarfBuzz WASM; la capacidad `wasm` marca las herramientas que dependen de él), `host.pdf` (análisis/compresión de PDF, usado por Strip Hidden Data y Compress PDF), y `host.tokens` (tokens de diseño DTCG). Las capacidades declarables son: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

La misma herramienta se ejecuta en el navegador, en Tauri y en la CLI sin interfaz porque cada shell implementa esta interfaz — la herramienta nunca sabe en cuál está.

El puente está versionado. Añadir métodos es una versión menor. Eliminar o cambiar firmas es un salto de versión mayor. Cuando se publique v2, v1 debe seguir funcionando.

### 4. Los IDs de asset son para siempre

`suse/logo/primary` es un contrato. Una vez publicado:
- El ID nunca cambia, nunca se reutiliza.
- Cambios en los bytes → sube `version` en el manifiesto.
- Sustituido por un asset nuevo → establece `deprecated: true` y, opcionalmente, `replacedBy`.
- Las referencias existentes siempre se resuelven.

Esto hace que los estados de herramienta guardados y los enlaces compartidos por URL sean duraderos a lo largo de los años.

### 5. El modo URL es de primera clase

Cada entrada debe poder expresarse como un parámetro de URL:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

El modo CLI es el modo URL bajo un transporte distinto — el shell de la CLI construye un objeto de estado-URL a partir de argv y ejecuta el **mismo** pipeline del motor. Hay una única ruta de renderizado. La CLI no puede desviarse de la GUI porque no es una implementación aparte.

`url-mode.ts` gestiona el ida y vuelta (parseo y serialización). Parámetros reservados (nunca se reenvían a la herramienta como entradas): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z` (estado empaquetado — el token "Enlace más corto"), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. Las entradas de tipo asset en modo URL se serializan por su `id`; el runtime las resuelve mediante `host.assets.get()` antes de la hidratación. `width`/`height` son valores en `unit` (por defecto `px`, también `mm`/`cm`/`in`/`pt`/`pc`); con una unidad física, `dpi` fija la resolución del raster. Determinan el tamaño del documento del lienzo y prellenan el panel de dimensiones de exportación.

### 6. El almacenamiento pasa por el puente, nunca directo

Shell web: IndexedDB. Tauri: sistema de archivos. CLI: en memoria. Las herramientas solo ven `host.state.save(slot, data)` y `host.state.load(slot)`. No se usa `localStorage` — es demasiado pequeño y no puede almacenar blobs.

Los usuarios pueden guardar varios espacios de edición con nombre por herramienta y volver a cada sesión más tarde. No se requiere crear una cuenta; el estado es por dispositivo. Como el puente es la única costura, ese estado por dispositivo también es *portable*: `shells/web/src/data-transfer.ts` vuelve a leer todo a través de `host.profile`/`host.state`/`host.assets` hacia un único zip `lolly-backup` que se importa en cualquier otra instalación — la respuesta sin conexión a "pasar a un dispositivo nuevo" que no necesita servidor (especificación completa: `docs/data-transfer.md`). La integración con SUSE ID (sincronización entre varios dispositivos) es un hito futuro sobre esta base.

### 7. Las etiquetas de madurez responden estructuralmente al riesgo de "aprobado por la marca"

Cada herramienta declara `status: official | community | experimental` en su manifiesto. La galería ordena por estado. Las herramientas experimentales marcan sus exportaciones con marca de agua automáticamente — la marca de agua la aplica `host.export.render`, no la herramienta, así que un autor de herramientas no oficial no puede desactivarla.

Esta es una respuesta estructural al riesgo de percepción de que usar cualquier herramienta implica la aprobación de la marca. Las respuestas de proceso (una cola de revisión, control de acceso con SUSE ID) se añaden encima.

### 8. Las entradas de las herramientas están tipadas mediante el manifiesto, incluidos los assets

Las entradas declaran un `type`: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, y `file`. El host renderiza un control genérico por tipo a partir del manifiesto — las herramientas no escriben ni una línea de código de control. Tres pesan más que el resto:

- **`asset`** (con `filter` y `allowUpload`) es el puente hacia el sistema global de assets; `allowUpload: false` es la palanca de cumplimiento de marca para casos como los logos de tarjetas de patrocinio, donde solo se permiten assets de la biblioteca. Las subidas de usuario usan la misma forma `AssetRef` que los assets de biblioteca, así que las herramientas las gestionan de forma idéntica.
- **`blocks`** es un grupo de campos repetible — una minitabla dentro de una sola entrada, editada en un panel lateral, con un menú de añadir tipado/discriminado y campos de asset por bloque. Al hacer clic en un bloque renderizado en el lienzo se enfoca la fila de ese bloque. Lo usan `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, y `digi-ad`.
- **`vector`** agrupa un conjunto fijo de números (por ejemplo, una transformación) en un único control compuesto; **`file`** guarda el propio archivo del usuario como bytes en memoria para utilidades de transformación en el dispositivo (por ejemplo, `strip-data` y `compress-pdf`).

### 9. Las plantillas carecen de lógica (Handlebars, no EJS)

Handlebars se eligió sobre EJS de forma deliberada:
- Sin lógica. Las plantillas pueden crearlas personas que no son desarrolladoras.
- Segura por defecto. `{{x}}` escapa HTML; `{{{x}}}` es sin escapar, y hay que pedirlo explícitamente.
- Sin JS arbitrario en las plantillas significa que no hay superficie de auditoría XSS por plantilla.

La lógica vive en `hooks.js`, donde es explícita y revisable. Helpers de Handlebars disponibles: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}` (más los helpers de formato de datos `icsStamp`/`rfcText`/`csvCell`, usados por las plantillas hermanas `.ics`/`.vcf`/`.csv`).

### 10. Las herramientas componen herramientas

Una herramienta puede incrustar el renderizado de **otra** herramienta sin ninguna importación entre herramientas — la composición la resuelve el motor, nunca el código de la herramienta. Hay dos superficies:

- **Manifiesto declarativo** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. El motor renderiza el hijo nombrado y coloca el resultado en la plantilla sin lógica como `{{asset <id>}}`. Hoy, `event-name-badge` compone `qr-code` como SVG.
- **URL de inserción portable** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. El shell renderiza ese hijo **localmente** (se muestra un píxel de marcador de posición hasta que el renderizado local se resuelve); nunca se obtiene nada de `lolly.tools`.

Se puede componer el renderizado de cualquier herramienta: un hijo **SVG** sigue siendo un vector auténtico cuando el padre exporta a SVG o PDF, y se rasteriza con nitidez para PNG; los hijos **PNG/JPG/WEBP** se incrustan como imágenes. Requiere la capacidad `compose`. Los hijos compuestos son intermedios — nunca llevan marca de agua ni se les estampa procedencia — y la composición degrada con elegancia: un shell que no puede renderizar un hijo simplemente omite ese hueco y el padre se sigue renderizando.

---

## Lo que decidimos explícitamente no hacer

- **Sin EJS / sin JS arbitrario en las plantillas.** La superficie XSS es cero. La lógica vive en `hooks.js`.
- **Sin CMS de assets.** El catálogo de assets es git. Las actualizaciones pasan por revisión de PR. Sin interfaz de subida, sin autenticación, sin cola de moderación. La revisión en git _es_ la moderación.
- **Sin RBAC en el MVP.** Acceso público. El riesgo de marca se gestiona con etiquetas de madurez + marcas de agua + el hecho estructural de que todos los assets que ven los usuarios pasaron por revisión de PR.
- **Sin base de datos central.** Todo el estado de usuario es por dispositivo. La integración con SUSE ID está en la hoja de ruta, pero no bloquea el lanzamiento.
- **Sin ruta de código compartida entre herramientas y motor.** El motor es de código abierto; `tools/` y `assets/` siguen siendo contenido propietario de SUSE en sus propios repositorios. La separación se impone (sin importaciones cruzadas) para que la división se mantenga limpia.

---

## Ciclo de vida, de principio a fin

Un usuario abre `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`:

1. **Arranque.** El shell web abre IndexedDB, construye el puente de capacidades, sincroniza los catálogos de herramientas y assets (o carga desde la caché sin conexión).
2. **Enrutado.** El hash de la URL → vista `tool`, con `qr-code` y los parámetros de URL extraídos.
3. **Carga.** `loadTool('qr-code', fetchFile)` obtiene `tool.json`, lo valida contra el JSON Schema, y obtiene el código fuente de `template.html`, `styles.css` y `hooks.js`.
4. **Parseo del estado de la URL.** `parseUrlState` traduce los parámetros de URL en valores de entrada iniciales. Las referencias a assets (`?logo=suse/logo/primary`) se parsean como objetos ligeros `{ id, _unresolved: true }`.
5. **Runtime.** `createRuntime(tool, host, initialValues)` construye el modelo de entrada (fusionando datos de perfil, valores por defecto y valores iniciales), resuelve las referencias a assets mediante `host.assets.get()`, carga los hooks (`host` con ámbito de clausura, sin sandbox), y llama a `hooks.onInit`.
6. **Render.** El shell se suscribe al runtime; en cada cambio de estado recibe `{ model, hydrated }`. Renderiza los controles de entrada a partir del modelo y escribe el HTML de la plantilla hidratada en `#tool-canvas`.
7. **Interacción.** El usuario escribe en una entrada → `runtime.setInput(id, value)` → se aplican las restricciones → se llama a `hooks.onInput` → se vuelve a hidratar → se vuelve a renderizar. El lienzo se actualiza en vivo.
8. **Exportación.** El usuario hace clic en Descargar (PNG) → `runtime.export(canvasNode, 'png')` → `host.export.render` (rasteriza mediante dom-to-image-more; SVG/PDF pasan por vectorizadores dedicados que recorren el DOM) → blob → `host.export.download`. El abanico de formatos al que puede optar una herramienta es amplio: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, los formatos vectoriales `emf`, `eps`, más los formatos de impresión/CMYK `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`; los formatos de vídeo `webm`, `mp4`, `gif`; y los formatos de datos/texto `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`. (Las herramientas que fijan `render.export: false` — por ejemplo Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF — ocultan los controles de descarga/formato/dimensiones.) Las unidades físicas se convierten aquí según el formato (PDF → puntos de página reales, raster → píxeles según el DPI con un chunk `pHYs`). Los metadatos de autoría/procedencia (autor, herramienta, origen — construidos por `engine/src/metadata.ts`) se incrustan según el formato: iTXt en PNG, EXIF en JPEG, diccionario de información en PDF, `<metadata>` en SVG, comentario en GIF. Las herramientas experimentales reciben una marca de agua insertada por el host, no por la herramienta.

El mismo ciclo de vida en Tauri. El mismo ciclo de vida en la CLI — jsdom aporta el DOM sin interfaz; la salida va a un archivo o a stdout.

---

## Estado de código abierto

Los directorios `engine/`, `shells/`, `schemas/` y `docs/` son de código abierto bajo **MPL-2.0** — una plataforma de andamiaje neutral respecto al proveedor para herramientas de marca, con cada unidad publicable dividida en su propio repositorio bajo [github.com/lolly-tools](https://github.com/lolly-tools). `tools/` y `catalog/assets/` son contenido específico de SUSE y siguen siendo **propiedad exclusiva de SUSE** (todos los derechos reservados — consulta el `NOTICE.md` de cada repositorio); no están cubiertos por la MPL.

La división se impone — no hay importaciones cruzadas de `engine/` hacia `tools/` o `assets/` — de modo que el límite entre plataforma y contenido se mantiene limpio.

---

## Hoja de ruta

| Hito | Fecha objetivo | Qué |
|---|---|---|
| **Herramientas iniciales** | ✅ Hecho | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — shell web en producción |
| **Mejorar las herramientas actuales** | Mediados de 2026 ✅ Hecho  | App descargable sin conexión (Tauri); herramientas adicionales para empleados y eventos; pipeline de exportación más completo (estabilidad de texto a trazado, metadatos, formatos adicionales — ver `plans.md`) |
| **Abrir el motor como código abierto** | Finales de 2026 ✅ Hecho  | El motor, los shells, los schemas y la documentación se hacen públicos — no las herramientas/assets de marca |
| **Transferencia de dispositivo a dispositivo** | ✅ Hecho | El paquete portable `lolly-backup` lleva el perfil, las sesiones guardadas, las imágenes subidas y las preferencias entre dos instalaciones cualesquiera — sin conexión o en línea, sin cuenta. Envolvente compatible hacia adelante, con verificación de integridad (especificación: `docs/data-transfer.md`) |
| **Establecer una hoja de ruta formal de herramientas** | Finales de 2026 | Kits de referencia para clientes, ingesta de diseño con IA, modo de petición GET/URL |
| **Utilidades de privacidad en el dispositivo** | 🚧 En curso | Herramientas de transformación de contenido que procesan *tu propio* archivo localmente (archivo de entrada → archivo limpio de salida), sustituyendo la exfiltración hacia SaaS de propósito único. **Hecho:** tipo de entrada `file` + ruta de transformación `exportFile` + convenciones `privacy:"on-device"` (sin marca de agua/procedencia) + **Strip Hidden Data** (metadatos JPEG/PNG/SVG/PDF, PDF mediante el puente `host.pdf`) y **Text Helper** (el banco de trabajo en el dispositivo para las tareas cotidianas de "pegar en una web" — formatear JSON, decodificar JWT, Base64, codificar/decodificar URL, hash SHA, más un grupo de Novedades). **Siguiente:** recorte/redimensionado, conversión/compresión de imágenes; luego un puente de códecs `host.image` (especificación: `plans/exfiltration-app-content.md`) |
| **Tokens de diseño (DTCG)** | 🚧 Color publicado | Primitivas de marca como [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/) canónico — el formato que [Penpot importa/exporta](https://help.penpot.app/user-guide/design-systems/design-tokens/). **Hecho:** tokens de color (`suse/tokens/brand`), puente `host.tokens`, muestras en el selector + valores enlazados por referencia (especificación: `docs/design-tokens.md`). **Siguiente:** tokens de dimensión/tipografía, importación/exportación con Penpot, tokens de usuario en el paquete de transferencia (`tokens.json`) |
| **Endpoint de agente MCP (render)** | ✅ Hecho | Un servidor [MCP](https://modelcontextprotocol.io) expone el catálogo + la ruta de renderizado como herramientas invocables (`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`) para que cualquier agente pueda producir assets terminados y sujetos a reglas — añádelo a cualquier cliente MCP como conector personalizado (OAuth 2.1) o apunta a él con un cliente CLI/HTTP usando un token bearer. Activo en `mcp.lolly.tools` (endpoint completo: raster/PDF/animación/vídeo mediante un navegador sin interfaz alojado) y en `lolly.tools/api/mcp` (nivel sin servidor y sin navegador). Distinto del MCP de *creación* de Penpot de más abajo, que trata sobre la **creación** de herramientas (especificación: `plans/mcp-server.md`; guía: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Ingesta de archivos de Penpot como herramientas** | 2027+ | Importa un archivo de Penpot y exponlo *como una herramienta de Lolly* (declarativa, basada en restricciones), convirtiendo diseños creados en Penpot en generadores deterministas |
| **Extensión MCP + Penpot (creación solo en línea)** | 2027+ | Un servidor MCP de Penpot articula nuevas herramientas con IA — la forma más visual de crear plantillas deterministas: una primera ronda informada por la marca, perfeccionada con una persona en el bucle, apuntando con el tiempo a acertar a la primera en contextos nuevos. La *creación* de herramientas es solo en línea; las herramientas que produce se ejecutan en cualquier parte |
| **RBAC + SUSE ID** | 2027+ | Restringir herramientas específicas tras SUSE ID; estado guardado entre varios dispositivos; ingesta/exportación con Google Drive |

---

## Dónde termina el motor y empieza el host

Si se puede describir en datos puros + Handlebars → **motor**.
Si toca el DOM, el sistema de archivos, la red, o cualquier API del navegador/SO → **host**.

La línea es nítida a propósito. El motor es la parte de código abierto. Todo lo que sepa algo sobre SUSE, plataformas específicas, o entornos de ejecución se queda fuera de él.
