# Cómo se compara Lolly

Dónde encaja esta plataforma en el panorama más amplio de herramientas creativas, y dónde deliberadamente **no** juega.

> **Estado del piloto:** Lolly es un prototipo en piloto cerrado, no un producto terminado, y su seguridad está actualmente pasando por el estricto endurecimiento de infraestructura de SUSE, preparándose para escala empresarial. Este posicionamiento es hacia donde Lolly *aspira* a situarse - la página [Adopción y Gobernanza](/info/adoption-governance.html#status) explica cómo se está probando esto en la práctica.

## Panorama

![Layout Studio's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Flayout-studio&width=1440&height=900&dpi=192&waitMs=2400&format=svg&dark=1&filename=aud-open-canvas&sweep=1)

| Capacidad | Canva (lienzo abierto) | Portales de marca (plantillas DAM) | Illustrator (profesional de escritorio) | Figma / Penpot (profesional en línea) | **Lolly (basado en restricciones)** |
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

La forma de la brecha es clara: nada en el panorama existente nos ofrece una salida generativa basada en restricciones, capaz de funcionar sin conexión, con baja exigencia de habilidad y accesible internamente. Lolly ahora incluye su propio lienzo abierto - **Layout Studio**, un lienzo libre de manipulación directa - pero con una diferencia decisiva respecto a la columna de Canva: los colores, la tipografía y los recursos colocados en él se ajustan a las variables globales de marca, de modo que incluso la disposición libre se mantiene basada en restricciones. Lo que Lolly sigue **sin** ser es una suite de diseño sin restricciones; los diseñadores seguirán usando Illustrator y Figma para trabajos a medida - y cuando ese trabajo necesite convertirse en un activo gobernado y reproducible, la función [Importar un diseño](/info/design-import.html) de Layout Studio trae el archivo terminado de Figma/Illustrator/Penpot al lienzo como cajas editables y ajustadas a la marca.

## Úsalo para

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio da una buena medida del techo que hay aquí: una presentación entera declarada como datos, maquetada en vivo en el lienzo y exportada como un PowerPoint nativo y editable.

- Generación rápida de recursos creativos operacionalizados (tarjetas de eventos, insignias, firmas, alertas)
- Disposición libre en el lienzo abierto (Layout Studio) cuando las piezas - colores, tipografía, iconos, imágenes - deben mantenerse ajustadas a las variables globales de marca
- Llevar un diseño terminado de Figma, Illustrator, InDesign o Penpot (la función Importar un diseño de Layout Studio) para que pueda editarse, gobernarse y volver a renderizarse de forma determinista en cualquier formato de Lolly
- Flujos de "uno a muchos" del tipo "rellena tres campos y obtén el recurso terminado" - incluyendo ejecuciones masivas desde una hoja de cálculo/CSV en la cuadrícula por lotes de `/pro` (pega o importa filas, un recurso terminado por fila, descarga como zip)
- Resultados de marca recurrentes y siempre activos
- Casos donde el control centralizado de la expresión de marca importa más que la flexibilidad expresiva

## No lo uses para

- Contenido insignia o a medida (vallas publicitarias, vídeos importantes)
- Trabajo de campaña único que realmente necesita un diseñador
- Ideación que necesita escapar por completo del sistema de marca - el lienzo abierto de Lolly sigue ajustando colores, tipografía y recursos a las variables globales de marca, y ese es precisamente el punto

## Aprueba la herramienta, no el archivo

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&format=svg&dark=1&filename=aud-approve-the-tool)

Cualquier otra herramienta del panorama produce un *archivo* que después hay que revisar: un responsable de marca en un hilo de Slack, el equipo legal con el descargo de responsabilidad, una ronda de cambios, otra revisión. Lolly mueve la aprobación **un paso más arriba**. Las reglas de marca - códigos hex exactos, archivos de fuentes con licencia, márgenes de sangrado, espaciado - están codificadas en el HTML y el CSS de la herramienta, así que la plantilla *no puede físicamente* emitir un recurso fuera de marca. La propia maquetación es estructural.

Así dejas de aprobar salidas y empiezas a aprobar la **herramienta** que las produce. Apruébala una vez y cada recurso que genere estará aprobado de antemano por construcción: sin personas en el circuito, sin ciclos de revisión, a cualquier volumen.

Este es el cambio de paradigma que aporta de verdad un motor determinista: no es una versión más rápida del antiguo proceso de aprobación, elimina el proceso. Para el equipo creativo es una barrera de protección, no un reemplazo - tú sigues lanzando la bola (los datos, el texto, la imagen) y el código es el bumper de la pista que evita que cualquier lanzamiento acabe en la canaleta.

| Aprobar recursos a la vieja usanza | Aprobar la herramienta, a la manera de Lolly |
|---|---|
| Cada archivo terminado se revisa, uno por uno | La herramienta se revisa una sola vez |
| Solicitud → el diseñador lo crea → revisión de marca → comprobación legal → cambios → nueva revisión | Un cambio de parámetro → recurso terminado |
| Diseñador, responsable de marca, legal y solicitante, todos en el circuito | Quien produce, por su cuenta |
| Días por recurso | Segundos por recurso |
| 10.000 recursos = 10.000 ciclos de revisión | 10.000 recursos = cero (la plantilla ya estaba aprobada) |

## Lo que esto ofrece de forma única

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **Potencial de diseño audaz entregado de forma segura y en contexto.** Las herramientas pueden expresar ideas de diseño atrevidas dentro de barreras de protección codificadas.
- **Automatización de contenido definida por software que devuelve el recurso final.** Entrada → archivo final. Nada de "ahora guárdalo desde tu herramienta de diseño y procésalo después."
- **Las herramientas componen herramientas.** Una herramienta puede incrustar el renderizado de otra y devolverlo como parte de un único recurso terminado, sin ningún acoplamiento de código entre herramientas - una primitiva que ningún producto de lienzo abierto o de plantillas DAM del panorama ofrece.
- **Neutralidad de proveedor.** Control total sobre funciones y costes. Motor de código abierto. Las herramientas y los recursos son contenido versionado con git, no están encerrados en una base de datos SaaS.

El primero de esos puntos es el que la gente subestima. Un mapa urbano con calidad de póster, dibujado con trazados vectoriales reales de calles y agua, a partir de un desplegable y dos campos de color que no pueden apuntar fuera de la marca:

