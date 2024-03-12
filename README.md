# App Sorteo

## Tecnologías:

Para el desarrollo de el _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías:

- **_HTML:_** Lenguaje de etiquetas para estructurar la app de manera semántica.
- **_Tailwind CSS:_** Framework CSS para aplicar estilos y Responsive Web Design con enfoque Mobile First.
- **_Next JS:_** Un marco de desarrollo web basado en React que ofrece renderizado en el lado del servidor.
- **_TypeScript:_** Agrega tipado estático a la aplicación para mayor robustez.
- **_Shadcn_:** Libreria de componentes compatible con Next js para acelerar el desarrollo.
- **_ReactQuery_:** Biblioteca para manejar el estado y solicitudes de datos en la app web.
- **_React Hook Form_:** Biblioteca para gestionar formularios utilizando hooks, facilita la validacion y manejo de datos de formulario de manera eficiente.
- **_NPM:_** Gestor de dependencias de Node.js para instalar librerías en JavaScript.
- **_Figma:_** Herramienta para diseñar y prototipar la interfaz de usuario.
- **_Git:_** Sistema de control de versiones para una colaboración efectiva.
- **_eslint:_** Herramienta de análisis estático de código en javascript.

[![My Skills](https://skillicons.dev/icons?i=html,tailwind,ts,next,figma,git,npm)](https://skillicons.dev)

---

## ¿Que enfoque usa esta _App Web_?

Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una Sola Página**.

### ¿Por qué esta web es una **_SPA_**?

- Porque todo el contenido carga de una sola vez, es decir, el navegador descarga solo un archivo _HTML_ con todos los recursos haciendo que la navegación sea más rápida y fluida.
- Porque carga contenido de forma dinámica sin necesidad de recargar la página.
- Porque mediante una _API_ conecta el _Frontend_ con el _Backend_, y este último mencionado es independiente a la _SPA_ importando poco en que lenguaje esté programado o que patrones use.
- Porque el _Frontend_, _Backend_ y la _persistencia de datos_ estan desacoplados y descentralizados de sí mismos.

---

## Estructura de carpetas y archivos:

| Carpeta / Archivo    | Funcionalidad                                                                                                                                                                                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/next`               | Contiene todos los archivos compiladors y optimizados para producción.                                                                                                                                                                                                                                                                                 |
| `/public`        | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                                                                                                                                                                                              |
| `/src`    | Contiene todo el codigo fuente de la aplicación, incluyedo componentes React, funciones, utilidades, y otros archivos relacionados con la logica de la aplicación.                                                                                                                                                                                                                                                                              |
| `/src/app`         | Contiene todas las paginas de la app, donde cada carpeta representa una ruta especifica. Por ejemplo `/app/auth/login/page.tsx` esta seria la ruta `auth/login`                                                                                                                                                                                                                                                                                                     |
| `/src/components`       | Contiene componentes reutilizables que se utilizan en diferentes partes de la aplicación 
| `/src/lib`     | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                                                                                                                                                                                              |
| `/src/styles`     | Contiene todos los estilos archivos de los estilos globales o de especificos componentes |
| `.eslintrc.json`       | Archivo que define como eslint debe analizar el codigo, que reglas debe aplicar y que plugins debe utilizar, entre otras configuraciones.                                                                                                                                                                                                                                                                                |
| `components.json`       | Archivo de configuración que define la configuracion personalizada de Shadcn                                                                                                                                                                                                                                                                                |
| `next.config.mjs`       | Archivo que define la configuración personalizada para el entorno de desarrollo y producción.                                                                                                                                                                                                                                                                                   |
| `package.json`       | Archivo de configuración de dependencias de _NodeJS_.                                                                                                                                                                                                                                                                                  |
| `Tailwind.config.js` | Archivo para personalizar las opciones de Tailwind CSS, como colores, fuentes y márgenes, para adaptarse a las necesidades del proyecto.                                                                                                                                                                                |
| `tsconfig.json`       | Archivo que define la configuración del compilador typeScript, incluyendo opciones de compilación, rutas de inclusión y exclusión.                                                                                                                                                                                                                                                                                  |
