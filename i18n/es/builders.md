# Lolly para Desarrolladores

La documentación técnica — para quien crea herramientas, integra Lolly en un pipeline, la autoaloja o extiende la plataforma.

**Qué ganas tú con esto.** Crea una herramienta una vez y la petición deja de volver a ti. Ese típico «¿me puedes hacer un…?» que te come las tardes se convierte en una plantilla que otras personas rellenan por su cuenta — correctamente, sin que tengas que mediar. Tu trabajo es HTML/CSS/JS puro: versionado, diferenciable, revisable, y corre sobre un motor abierto sin ataduras a un proveedor, así que sigue siendo tuyo. Automatiza la tirada de producción y tu tiempo se dedica al problema interesante, no a la exportación número diez mil.

Lolly es un **motor** agnóstico de plataforma que ejecuta la misma ruta de renderizado en varios **shells** (PWA web, Tauri de escritorio/móvil, CLI, TUI). Las herramientas son **datos, no código empaquetado** — un manifiesto más una plantilla más hooks opcionales — así que las herramientas nuevas se publican sin necesidad de actualizar la app. Empieza por [Visión general](/info/overview.html) para la arquitectura, y luego sigue el recorrido que encaje con lo que estás construyendo.

¿Nuevo en la plataforma? El **[Inicio rápido](/info/quickstart.html)** prepara una marca y tu primer render antes de que profundices.

## Comprende la arquitectura

- **[Visión general](/info/overview.html)** — por qué existe Lolly, la separación entre motor, shell y herramientas, el puente de capacidades, y los compromisos arquitectónicos ya asentados.
- **[Tokens de Diseño](/info/design-tokens.html)** — el modelo de tokens DTCG en el que se expresan las marcas, y cómo los consumen las herramientas.

## Crea herramientas

- **[Creación de Herramientas](/info/authoring-tools.html)** — la guía completa: manifiesto, plantilla, estilos, hooks, composición y publicación.
- **[Creación de Assets](/info/authoring-assets.html)** — assets del catálogo, niveles, locales, paletas, iconos personalizables y fuentes.
- **[API de Host](/info/host-api.html)** — el puente de capacidades `HostV1` contra el que está escrita cada herramienta (la única API que ven las herramientas).
- **[Modo URL](/info/url-mode.html)** — cada entrada como parámetro de URL; parámetros reservados, codificación compacta, enlaces empaquetados.

## Ejecuta e integra

- **[CLI](/info/cli.html)** — renderizado headless; la misma ruta de renderizado que la GUI, controlada mediante argv `--foo=bar`.
- **[TUI](/info/tui.html)** — el shell interactivo de terminal.
- **[Servidor MCP](/info/mcp.html)** — el endpoint nativo que permite que un agente de IA descubra y ejecute herramientas.
- **[Agentes de IA](/info/ai-agents.html)** — cómo controlar Lolly desde un modelo: una URL es la API.
- **[Extensión de Chrome](/info/extension.html)** — captura una URL en vivo como asset reutilizable.

## Publícalo y opéralo

- **[Guía de Compilación](/info/build-guide.html)** — compila cada objetivo: CLI, TUI, escritorio, móvil.
- **[Despliegue](/info/deployment.html)** — la app web, las apps, y los servicios backend; dónde corre cada pieza.
- **[Configuración](/info/configuration.html)** — perfiles, paquetes de marca, control de capacidades, feature flags, y validación del catálogo.

## Confianza y datos

- **[Identidad de Content Credentials](/info/content-credentials-identity.html)** — firma emitida por una CA para C2PA en el dispositivo; contratos del motor y el runbook del operador.
- **[Transferencia de Datos](/info/data-transfer.html)** — el paquete `lolly-backup`: envelope, integridad, y garantías entre shells.
- **[Acerca de](/info/about.html)** — el proyecto, el límite de su licencia, y el repositorio.
