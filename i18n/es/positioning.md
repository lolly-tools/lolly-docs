# Cómo se compara Lolly

Dónde encaja esta plataforma en el panorama más amplio de herramientas creativas, y dónde deliberadamente **no** juega.

> **Estado del piloto:** Lolly es un prototipo en piloto cerrado, no un producto terminado, y su seguridad está actualmente pasando por el estricto endurecimiento de infraestructura de SUSE, preparándose para escala empresarial. Este posicionamiento es hacia donde Lolly *aspira* a situarse — la página [Adopción y Gobernanza](/info/adoption-governance.html#status) explica cómo se está probando esto en la práctica.

## Panorama

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


La forma de la brecha es clara: nada en el panorama existente nos ofrece una salida generativa basada en restricciones, capaz de funcionar sin conexión, con baja exigencia de habilidad y accesible internamente. Lolly ahora incluye su propio lienzo abierto — **Layout Studio**, un lienzo libre de manipulación directa — pero con una diferencia decisiva respecto a la columna de Canva: los colores, la tipografía y los recursos colocados en él se ajustan a las variables globales de marca, de modo que incluso la disposición libre se mantiene basada en restricciones. Lo que Lolly sigue **sin** ser es una suite de diseño sin restricciones; los diseñadores seguirán usando Illustrator y Figma para trabajos a medida — y cuando ese trabajo necesite convertirse en un activo gobernado y reproducible, la función [Importar un diseño](/info/design-import.html) de Layout Studio trae el archivo terminado de Figma/Illustrator/Penpot al lienzo como cajas editables y ajustadas a la marca.

## Úsalo para

- Generación rápida de recursos creativos operacionalizados (tarjetas de eventos, insignias, firmas, alertas)
- Disposición libre en el lienzo abierto (Layout Studio) cuando las piezas — colores, tipografía, iconos, imágenes — deben mantenerse ajustadas a las variables globales de marca
- Llevar un diseño terminado de Figma, Illustrator, InDesign o Penpot (la función Importar un diseño de Layout Studio) para que pueda editarse, gobernarse y volver a renderizarse de forma determinista en cualquier formato de Lolly
- Flujos de "uno a muchos" del tipo "rellena tres campos y obtén el recurso terminado" — incluyendo ejecuciones masivas desde una hoja de cálculo/CSV en la cuadrícula por lotes de `/pro` (pega o importa filas, un recurso terminado por fila, descarga como zip)
- Resultados de marca recurrentes y siempre activos
- Casos donde el control centralizado de la expresión de marca importa más que la flexibilidad expresiva

## No lo uses para

- Contenido insignia o a medida (vallas publicitarias, vídeos importantes)
- Trabajo de campaña único que realmente necesita un diseñador
- Ideación que necesita escapar por completo del sistema de marca — el lienzo abierto de Lolly sigue ajustando colores, tipografía y recursos a las variables globales de marca, y ese es precisamente el punto

## Lo que esto ofrece de forma única

- **Potencial de diseño audaz entregado de forma segura y en contexto.** Las herramientas pueden expresar ideas de diseño atrevidas dentro de barreras de protección codificadas.
- **Automatización de contenido definida por software que devuelve el recurso final.** Entrada → archivo final. Nada de "ahora guárdalo desde tu herramienta de diseño y procésalo después."
- **Las herramientas componen herramientas.** Una herramienta puede incrustar el renderizado de otra y devolverlo como parte de un único recurso terminado, sin ningún acoplamiento de código entre herramientas — una primitiva que ningún producto de lienzo abierto o de plantillas DAM del panorama ofrece.
- **Neutralidad de proveedor.** Control total sobre funciones y costes. Motor de código abierto. Las herramientas y los recursos son contenido versionado con git, no están encerrados en una base de datos SaaS.
