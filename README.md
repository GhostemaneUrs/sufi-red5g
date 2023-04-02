# Test Sufi Red5G: Gestión de préstamos bancarios en tiempo real

Bienvenido a Sufi, una aplicación web para la gestión de préstamos bancarios en tiempo real. En esta documentación, encontrará información sobre las tecnologías utilizadas en el proyecto, cómo funciona la aplicación y cómo instalarla.

## Tecnologías

- NextJS: fue elegido por su capacidad para pre-renderizar páginas, lo que mejora la velocidad de carga y la experiencia del usuario. También cuenta con un enrutador integrado y optimización de código, lo que lo hace adecuado para proyectos grandes y complejos.
- Tailwindcss: se utilizó para la maquetación y diseño de estilos del proyecto. Su gran variedad de clases reutilizables facilitó la creación de diseños responsivos y personalizados.
- Moment: se utilizó para el manejo de fechas y horarios en la aplicación.
- React CSV: se utilizó para la exportación de archivos CSV en la aplicación. Esta herramienta permitió la generación de archivos CSV de forma rápida y eficiente.
- Swr: se utilizó para la gestión del estado de la aplicación, lo que permitió una mayor eficiencia en la carga de datos y una mejor gestión de la memoria.

## Documentación de las tecnologías usadas

- [NextJS](https://nextjs.org/docs)
- [Tailwindcss](https://tailwindcss.com/docs)
- [Moment](https://momentjs.com/)
- [React CSV](https://github.com/react-csv/react-csv)
- [Swr](https://swr.vercel.app/docs/getting-started)

## Funcionamiento del proyecto

La aplicación Sufi Red5G se basa en una API creada en NextJS para la gestión de préstamos bancarios en tiempo real. Al iniciar sesión, los usuarios pueden acceder a una tabla que muestra los préstamos pendientes y aprobados. También pueden exportar los datos en formato CSV con solo hacer clic en un botón.

## Características del proyecto

Las características principales de la aplicación incluyen:

- Gestión de préstamos bancarios en tiempo real.
- Inicio de sesión de los usuarios.
- Visualización de los préstamos pendientes y aprobados.
- Exportación de datos en formato CSV.

## Instalación del proyecto

- Se requiere tener instalado [Node.js](https://nodejs.org/) v10+.
- Clonar el repositorio con el comando git clone + la ruta del proyecto.
- Guía para la instalación de las dependencias para correr el proyecto.

```sh
cd sufi-red5g
yarn
yarn dev
```

- Abrir [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.
- Puede entrar [aquí](https://sufi-red5g.vercel.app/) para ver el proyecto en vivo.

## Previsualización del proyecto

![Diseño final de github profile](public/images/design-login.png)
![Diseño final de github profile](public/images/design-table.png)
