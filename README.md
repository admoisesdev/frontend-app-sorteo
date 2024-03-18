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

## Diseño Figma

### Pasos para ver el diseño

1. Darle click en el enlace [Ir a Figma](https://www.figma.com/file/LBWE84gqfYSbaG0VU6tgmi/Sorteo?type=design&node-id=1%3A3&mode=design&t=ypXrF15RY4oaWMMq-1)

2. Entrar en la pagina **StyleGuide / components** de figma

![DemoImage](/public/demo-desing.png)


---

## Estructura de carpetas y archivos:

| Carpeta / Archivo    | Funcionalidad                                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/next`              | Contiene todos los archivos compiladors y optimizados para producción.                                                                                             |
| `/public`            | Contiene todos los recursos estáticos como _imágenes_, _SVG_, _videos_, etc.                                                                                       |
| `/src`               | Contiene todo el codigo fuente de la aplicación, incluyedo componentes React, funciones, utilidades, y otros archivos relacionados con la logica de la aplicación. |
| `/src/app`           | Contiene todas las paginas de la app, donde cada carpeta representa una ruta especifica. Por ejemplo `/app/auth/login/page.tsx` esta seria la ruta `auth/login`    |
| `/src/components`    | Contiene componentes reutilizables que se utilizan en diferentes partes de la aplicación                                                                           |
| `/src/lib`           | Contiene todas las funciones que tendran la logica de las funcionalidades de nuestra página.                                                                       |
| `/src/styles`        | Contiene todos los estilos archivos de los estilos globales o de especificos componentes                                                                           |
| `.eslintrc.json`     | Archivo que define como eslint debe analizar el codigo, que reglas debe aplicar y que plugins debe utilizar, entre otras configuraciones.                          |
| `components.json`    | Archivo de configuración que define la configuracion personalizada de Shadcn                                                                                       |
| `next.config.mjs`    | Archivo que define la configuración personalizada para el entorno de desarrollo y producción.                                                                      |
| `package.json`       | Archivo de configuración de dependencias de _NodeJS_.                                                                                                              |
| `Tailwind.config.js` | Archivo para personalizar las opciones de Tailwind CSS, como colores, fuentes y márgenes, para adaptarse a las necesidades del proyecto.                           |
| `tsconfig.json`      | Archivo que define la configuración del compilador typeScript, incluyendo opciones de compilación, rutas de inclusión y exclusión.                                 |

## Depliegue de la aplicación

1. **Clona el Repositorio:**

   ```bash
   git clone https://github.com/JKmoises/frontend-app-sorteo.git
   ```

2. **Ingresa a la carpeta del proyecto**

   ```bash
   cd frontend-app-sorteo
   ```

3. **Instalar las dependencias**

   ```bash
   npm install
   ```

4. **Iniciar aplicación backend**
   Sigue las instrucciones en el [README del Backend](https://github.com/JKmoises/backend-app-sorteo) para iniciar la aplicación backend.

5. **Iniciar aplicación frontend**

   npm run dev
   ```bash
   ```

6. **Accede a la aplicacion**
   Abre tu navegador web y navega a http://localhost:3001 para ver la aplicación en funcionamiento.

## Usuarios de la aplicación 

- **Rol: ADMIN**
   **Correo**: usuario1@gmail.com
   **Contraseña**: 123456



- **Rol: PARTICIPANTE**
   **Correo**: usuario2@gmail.com
   **Contraseña**: 123456

