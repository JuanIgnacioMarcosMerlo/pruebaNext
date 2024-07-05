# Página de Perfil de Usuario

Este es un proyecto [Next.js](https://nextjs.org/) inicializado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Muestra un perfil de usuario con secciones que incluyen una descripción "Sobre mí", una lista de intereses y un formulario de contacto.

## Instalación y Ejecución

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev

Abre http://localhost:3000 en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando app/page.js. La página se actualiza automáticamente a medida que editas el archivo.

Este proyecto utiliza next/font para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

components: Contiene los componentes de React para las diferentes secciones de la página (Header, About, Interests, ContactForm).
pages: Contiene los componentes de página de Next.js. La página principal es index.js.
styles: Contiene los módulos CSS para estilizar los componentes.
Descripción del Proyecto
Este proyecto es una landing page que sirve como perfil de usuario. Una landing page es una página web independiente diseñada específicamente para campañas de marketing o publicidad. Es donde un visitante "aterriza" después de hacer clic en un enlace en un correo electrónico, o en anuncios de Google, Bing, YouTube, Facebook, Instagram, Twitter o lugares similares en la web.

El propósito de una landing page es convertir visitantes en leads capturando su información de contacto a través de un formulario. En este proyecto, la landing page incluye un perfil de usuario con una sección "Sobre mí", una lista de intereses y un formulario de contacto para interactuar con el usuario.

Secciones en Esta Landing Page
Cabecera (Header): Muestra el nombre del usuario y su foto de perfil.
Sobre mí (About Me): Proporciona una breve descripción del usuario.
Intereses (Interests): Lista los intereses del usuario.
Formulario de Contacto (Contact Form): Permite a los visitantes enviar un mensaje al usuario. Incluye validación básica y muestra un mensaje de éxito al enviar el formulario.
Formulario de Contacto
El formulario de contacto es un componente crítico de una landing page. Típicamente incluye campos para el nombre del visitante, su correo electrónico y un mensaje. El formulario en esta landing page realiza una validación básica para asegurar que los campos de nombre y correo electrónico se llenen correctamente antes de permitir el envío.

Aprende Más
Para aprender más sobre Next.js, consulta los siguientes recursos:

Documentación de Next.js - aprende sobre las características y la API de Next.js.
Aprende Next.js - un tutorial interactivo de Next.js.
Puedes revisar el repositorio de GitHub de Next.js - tus comentarios y contribuciones son bienvenidos.

Despliega en Vercel
La manera más fácil de desplegar tu aplicación Next.js es usando la Plataforma Vercel de los creadores de Next.js.

Consulta nuestra documentación sobre despliegue de Next.js para más detalles.
