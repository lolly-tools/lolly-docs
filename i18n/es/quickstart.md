# Guía rápida

Lolly convierte tus reglas -colores, tipografía, diseños, lógica- en herramientas que cualquiera puede usar para crear archivos terminados: imágenes, PDF, tarjetas para redes sociales, vídeo, simplemente rellenando algunos campos. No hay nada que aprender ni nada que subir: todo funciona en tu dispositivo, con o sin conexión.

Esta es la primera página que debes leer. Dos cosas te harán productivo de inmediato: **hazlo tuyo** (configura tu marca) y **aprovecha lo que ya tienes** (tus archivos de diseño y tokens). Todo lo demás está a un enlace de distancia.

> ¿Eres nuevo en Lolly y solo quieres crear algo? Abre la app, elige cualquier herramienta de la galería, rellena los campos y pulsa **Renderizar**. Vuelve aquí cuando quieras que lleve *tu* marca puesta.

## 1. Hazlo tuyo - configura tu marca

Tu marca en Lolly es un pequeño documento de **tokens de diseño** -colores, tipografías y algunas reglas- contra el que se renderiza cada herramienta. Configúralo una vez y todo lo que crees respetará tu marca por construcción, no por revisión. Hay tres formas de empezar; elige la que mejor encaje con dónde vive ya tu marca.

### Empezar desde cero (el asistente)

La primera vez que abres la app aterrizas en la pantalla **Start** (`#/start`). Dale un nombre y un color primario, y Lolly *deriva* una paleta completa y accesible a partir de él -superficies claras/oscuras, texto, acentos- usando las mismas matemáticas de color que usa el motor en todas partes. Elige una tipografía y tendrás una marca funcional en menos de un minuto. Podrás afinar cualquier detalle más adelante.

### Importar una marca que ya tienes

Si tu marca ya está capturada como tokens de diseño -desde **Penpot**, **Tokens Studio** (Figma), o cualquier archivo **DTCG** plano- impórtala tal cual en lugar de volver a escribirla. Hay dos vías:

- **Desde la app:** la pantalla Start y el editor *Tu marca* aceptan directamente un archivo de tokens (o un paquete `LollyBrand`) - suéltalo y la paleta se activa.
- **Desde la línea de comandos**, para crear un paquete de marca reutilizable:

```bash
# un tokens.json monolítico, un directorio con un archivo por conjunto, o un archivo de proyecto de Penpot
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand` acepta los tres formatos en los que Penpot / Tokens Studio exportan el mismo documento: un único `tokens.json`, un directorio (`$metadata.json` + archivos por conjunto), o un archivo `project.penpot`. Con `--activate` registra la marca como perfil, cambia a ella y reconstruye el catálogo. Consulta [Configuración](/info/configuration.html) para ver cómo encajan los paquetes de marca y los perfiles.

### Ajústala en la app

Una vez activa una marca, el editor **Tu marca** del panel (`#/d`) es un editor en vivo - cambia un color o un rol y cada vista previa de la página se actualiza mientras escribes. La misma marca se resume en la tarjeta **Perfil → Tu marca**. Las tipografías son reales: elige entre Google Fonts y Lolly guarda el archivo **en tu dispositivo** como recurso de marca, así que tu tipografía viaja sin conexión y nada se descarga en el momento de renderizar.

Cuando estés satisfecho, **exporta la marca como paquete `LollyBrand`** - un único archivo que un compañero puede importar para obtener exactamente la misma paleta, tipografías y reglas. Así es como una marca viaja entre personas y máquinas sin un servidor de por medio.

> **Los tokens de marca van y vienen en ambos sentidos.** Como la marca de Lolly *es* tokens DTCG -el formato que Penpot lee y escribe de forma nativa, y que Tokens Studio lleva a Figma- la paleta con la que *diseñas* y la paleta que Lolly *aplica* son un mismo documento, no dos listas que mantienes sincronizadas a mano. Consulta [Tokens de diseño](/info/design-tokens.html).

## 2. Aprovecha lo que ya tienes

No partes de una página en blanco. Lolly abre el trabajo de diseño y los formatos abiertos que ya tienes.

### Archivos de diseño de código abierto

El trabajo terminado en **Figma, Penpot, Illustrator, InDesign, o cualquier app de SVG** no tiene por qué quedarse encerrado en la app donde lo dibujaste. Abre **Layout Studio**, haz clic en **Importar un diseño**, y el archivo se abre como un *diseño vivo* - no una imagen aplanada. Cada capa se convierte en una caja editable: el texto sigue siendo editable, las formas siguen siendo formas, las imágenes llegan a tu biblioteca, y el arte vectorial complejo se conserva fielmente. Llega ya adaptado a tus tipografías y reglas de color de marca.

| Si tienes | Impórtalo como |
|---|---|
| Un frame de Figma | `.fig` nativo (Archivo → Guardar copia local), o una exportación SVG |
| Un diseño de Penpot | Su exportación `.penpot`, o cualquier SVG |
| Un archivo de Illustrator | `.ai` nativo (compatible con PDF) o `.pdf` - se abre directamente |
| Un diseño de InDesign | `.idml` (Archivo → Exportar → InDesign Markup) |
| Cualquier otra cosa | **Cualquier SVG** - la puerta universal de entrada |

Toda la importación ocurre **en tu dispositivo** - el archivo se analiza en tu navegador y nada se sube. Los detalles completos, y qué se conserva exactamente, están en [Importar un diseño](/info/design-import.html).

### De algo puntual a una plantilla

Aquí está la recompensa: un diseño importado es una sesión normal de Layout Studio, así que en cuanto lo **guardas**, vive en una URL. Cualquiera con Lolly puede abrir esa URL, cambiar el texto, sustituir una imagen y renderizar su propia versión - sin ninguna app de diseño, y las partes bloqueadas siguen bloqueadas. Un diseño puntual se convierte en una herramienta reutilizable. Esa es toda la idea, y se consigue sin escribir ni una línea de configuración.

### Datos abiertos y herramientas abiertas

El [conjunto de herramientas de la comunidad](/info/builders.html) es de código abierto y agnóstico de marca -códigos QR, mapas de calles, filtros, utilidades de privacidad- y se renderiza contra *tu* marca en cuanto la activas. Alimenta las herramientas también con tus propios datos abiertos: pega o suelta una tabla **CSV** o **JSON** y los campos repetibles de una herramienta se rellenan a partir de ella, un recurso terminado por fila.

## 3. Crea algo, y luego compártelo o automatízalo

Con una marca activa y tu material a mano, cada herramienta produce un archivo terminado:

- **Renderiza** cualquier herramienta a **SVG, PDF, PNG, JPG, WebP, vídeo**, y más - a tamaños de impresión reales y en unidades físicas cuando lo necesites. Consulta [Exportación y formatos](/info/exporting.html).
- **Comparte un enlace.** Cada estado de una herramienta es una URL, así que un recurso terminado es reproducible y direccionable por parámetros - guarda el enlace, regenera cuando quieras.
- **Hazlo en lote.** Alimenta una plantilla desde una hoja de cálculo en la [cuadrícula por lotes](/info/exporting.html): un recurso terminado por fila.
- **Automatízalo.** El mismo renderizado se ejecuta desde la [CLI](/info/cli.html) y desde un [agente de IA](/info/ai-agents.html) - una URL es la API.

## A dónde ir ahora

Tres caminos, según lo que hayas venido a hacer:

- **[Lolly para creadores](/info/creators.html)** - creas cosas. Las ventajas, y cómo sacarle el máximo partido a la app.
- **[Lolly para desarrolladores](/info/builders.html)** - creas herramientas, integras y despliegas. La documentación técnica.
- **[Lolly para operadores](/info/operators.html)** - eres responsable de la marca, la seguridad y el despliegue en una organización.
