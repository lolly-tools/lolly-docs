# Perfiles - quién eres cuando creas

Un **perfil** es la identidad de trabajo con la que Lolly crea. Es el pequeño conjunto de detalles del que una herramienta puede tomar información para que no tengas que volver a escribirlos cada vez - tu nombre, datos de contacto, una foto de perfil opcional, algunas preferencias - además de todo lo que acumulas mientras trabajas: sesiones guardadas, imágenes subidas y el recuento de actividad local.

Todo lo que hay en un perfil vive **en el dispositivo**, en la base de datos local del navegador (IndexedDB en la PWA web, el sistema de archivos en las apps de Tauri). No hay cuenta y no se sube nada. Lo gestionas en **Perfil** (arriba a la derecha de la galería); las herramientas solo *leen* el perfil, y únicamente los campos concretos para los que fueron diseñadas para autocompletar.

> Un perfil trata sobre *ti* (o quienquiera que esté creando aquí). Es distinto de la **Plataforma** - los colores, tipografías y ajustes globales de la marca - y de las **Capacidades**, el catálogo de lo que la app puede hacer. Consulta [Perfil frente a Plataforma frente a Capacidades](#profile-vs-platform-vs-capabilities) al final.

## Qué hay en un perfil

| Parte | Qué es |
|---|---|
| **Nombre** | Nombre y apellidos. |
| **Contacto** | Correo electrónico y teléfono. |
| **Ubicación** | Ciudad y país. |
| **Foto de perfil** | Una foto opcional, recortada en cuadrado y guardada como imagen local. La usan herramientas como firmas de correo, tarjetas de citas, bloques de color y diseños dinámicos. |
| **Usar mis datos** | Un único interruptor de activación voluntaria. Controla si tus datos personales viajan como **procedencia** - la línea de autoría/crédito incrustada en los archivos exportados - y como autor en las ejecuciones por lotes de **/pro**. (No condiciona el autocompletado: consulta [Cómo usan las herramientas tu perfil](#how-tools-use-your-profile).) |
| **Preferencias** | Tu tema (claro, oscuro o SUSE) y qué partes de la app has activado mediante los indicadores de funciones (**Feature flags**). |
| **Tu trabajo** | Sesiones guardadas (con miniaturas) - organizadas en carpetas anidadas en **[Proyectos](/info/using.html)** - tu biblioteca de **Mis imágenes**, y las estadísticas de actividad local, todo vinculado a este perfil. |

Nada de esto es obligatorio. Un perfil en blanco es un perfil perfectamente válido; solo rellenas lo que te ahorra escritura.

## Un perfil es un contexto, no solo una persona

La palabra "perfil" sugiere una única persona fija, pero en Lolly es en realidad un **contexto de creación** - *quién eres mientras haces esto*. Ese contexto puede adoptar tres formas distintas, y Lolly las gestiona todas de la misma manera.

### Como individuo

La opción por defecto. El perfil eres tú: tu nombre, tu correo, tu foto de perfil. Configúralo una vez y tu firma, tu credencial y tu lockup de conferencia se autocompletan solos. Esto es todo lo que la mayoría de la gente necesitará jamás.

### Como equipo

Un perfil no tiene por qué ser una sola persona. Puede representar a un **equipo o función dentro de una organización**: el nombre compartido del equipo, una dirección de correo grupal (`events@…`), un departamento, la foto o el distintivo de la unidad. Una persona lo configura, lo exporta (ver más abajo), y el resto del equipo carga el mismo perfil - así todo lo que produce el equipo lleva datos consistentes sin que nadie tenga que volver a introducirlos. Un quiosco compartido o un portátil de demostración prestado puede ejecutar un único perfil de equipo con el que crea todo el que lo use.

### Como función - un papel que te pones a veces

Este es el caso que el modelo rígido de "una persona, un perfil" no contempla. Puede que seas **gestor de eventos tres días al año** y otra cosa completamente distinta el resto del tiempo. Esos tres días quieres los datos del evento, la bandeja de entrada del evento, quizá una submarca del evento para rellenar tus credenciales y señalética; los otros 362 quieres recuperar tu identidad normal.

En Lolly, ese papel es solo **otro perfil que tienes a mano** - un paquete guardado (siguiente sección) que cargas para el evento y apartas después. El papel es un sombrero, no una cuenta nueva. Póntelo cuando lo necesites, quítatelo cuando termines.

## Una instalación, un perfil activo - puedes conservar muchos

En cualquier momento, una instalación tiene **un perfil activo** - los datos que una herramienta ve ahora mismo. No hay un selector de perfil dentro de la app; en su lugar, cada perfil es un **paquete portátil** (un único `.zip`, ver [más abajo](#moving-a-profile-to-a-new-device)). Es, deliberadamente, el mismo mecanismo que mover a un dispositivo nuevo - un perfil es un archivo que puedes guardar, copiar y cargar.

Así que si de verdad manejas varios contextos a la vez (tú, tu equipo, el sombrero de gestor de eventos), conservas varios paquetes y cargas el que necesites:

- **El cambio más limpio:** **Perfil → Almacenamiento → Borrar todos mis datos**, y luego **Importar** el paquete del contexto al que estás pasando. Ahora creas exclusivamente como ese perfil.
- **Superposición:** importar *sin* borrar antes **combina** - el perfil, las sesiones y las imágenes importadas se añaden encima de lo que ya hay, sustituyendo lo que tenga el mismo nombre y dejando el resto igual. Útil para incorporar las sesiones guardadas de un equipo a tu propia configuración; no es lo que quieres si necesitas una separación limpia entre papeles.
- **En paralelo:** como todo está limitado al dispositivo, un perfil de navegador distinto, una cuenta de usuario distinta o una segunda PWA instalada llevan cada uno su propio perfil de Lolly independiente. Ejecuta tu instalación personal y la instalación del quiosco del evento a la vez, sin tener que cambiar.

> Conserva un paquete por contexto y renombra los archivos según lo que son (`LollyTools-events-2026.zip`, `LollyTools-me.zip`). El archivo *es* el perfil.

## Mover un perfil a un dispositivo nuevo

Como un perfil es totalmente local, la única forma de llevarlo a una instalación en blanco - un portátil nuevo, un navegador recién restablecido, el equipo de un compañero, una máquina sin conexión - es **llevar el archivo contigo**. Ningún inicio de sesión lo restaura por ti, y esa es la idea: nada salió nunca de tu dispositivo, para empezar.

En **Perfil → Almacenamiento → Mover a otro dispositivo**:

- **Exportar mis datos** descarga un `LollyTools-<First>-<Last>-<YYYY-MM-DD>-<n>.zip` - con el nombre del perfil al que pertenece, con un número de secuencia diario para que las exportaciones repetidas no choquen entre sí (las partes del nombre se omiten cuando el perfil no las tiene). Contiene tu perfil, cada sesión guardada (con su miniatura), tus imágenes subidas y tus preferencias (tema, diseño, estadísticas de actividad local).
- **Importar datos…** en la otra instalación lee ese archivo y retomas exactamente donde lo dejaste.

El paquete es un zip plano y autocontenido, así que viaja por **cualquier** medio - USB, AirDrop, un recurso compartido de red, un correo a ti mismo - y el destino puede estar totalmente sin conexión. Cada parte lleva su suma de comprobación, así que un archivo dañado durante el traslado se detecta al importar en lugar de restaurarse a medias. Importar **combina** (el perfil/sesión/imagen con el mismo nombre se sobrescribe; todo lo demás se conserva), así que nunca borra un destino que ya estuviera en uso.

Lo que no viaja: la caché del catálogo (se vuelve a descargar sola en el dispositivo nuevo) y las propias herramientas (se asume que ya están presentes).

Para conocer el diseño exacto del paquete, la política de versiones y las reglas de integridad, consulta **[Transferencia de datos](/info/data-transfer.html)**; para el recorrido completo paso a paso, **[Usar Lolly → Mover a otro dispositivo](/info/using.html#moving-to-another-device)**.

## Cómo usan las herramientas tu perfil

Una herramienta solo *autocompleta* los campos del perfil para los que fue diseñada explícitamente:

**Vinculación explícita.** El autor de una herramienta marca un campo para que tome datos del perfil (`bindToProfile: "firstname"`, `"email"`, `"headshot"`, …). Cuando la herramienta se abre, ese campo se autocompleta desde tu perfil - y aun así puedes sobrescribirlo para esa sesión concreta sin cambiar el perfil. El autocompletado es una comodidad local y ocurre tanto si **Usar mis datos** está activado como si no.

**La activación voluntaria (procedencia).** Cuando exportas un recurso, tus datos pueden viajar opcionalmente como **procedencia** - una línea de autoría/crédito incrustada en los metadatos del archivo (PNG, PDF, SVG, …) - para que un recurso terminado pueda decir quién lo hizo. *Esto* es lo que controla **Usar mis datos**: déjalo desactivado y la exportación sigue llevando la atribución de herramienta/plataforma "Made with Lolly", pero no se incrusta ninguna línea personal de autoría/contacto. (La misma activación voluntaria define el autor en las ejecuciones por lotes de **/pro**.) (Autores de herramientas: consulta [Crear herramientas → `bindToProfile`](/info/authoring-tools.html#bindtoprofile) y [API del host → `host.profile`](/info/host-api.html#host-profile).)

## Perfil frente a Plataforma frente a Capacidades

Tres elementos están próximos entre sí en la interfaz y es fácil confundirlos:

- **Perfil** - *tú* (o tu equipo, o el papel que desempeñas): nombre, contacto, foto de perfil, tu trabajo guardado. Personal, local al dispositivo, portátil como paquete.
- **Plataforma** - la *marca*: colores, tipografías y ajustes globales sobre los que renderiza cada herramienta. Compartida y consistente, no personal.
- **Capacidades** - *lo que la app puede hacer*: el conjunto completo de funciones y las herramientas disponibles para ti.

Un perfil cambia de quién *proviene* un recurso; la plataforma cambia su *aspecto*; las capacidades son *lo que puedes crear*.

## Privacidad

Un perfil nunca se transmite, se sube ni se usa para identificarte o rastrearte - no hay nada que consentir, solo este aviso para que sepas qué se conserva. Bórralo todo en cualquier momento con **Perfil → Borrar todos mis datos**. Consulta la [Política de privacidad](/info/privacy.html).
