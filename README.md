# Mi Proyecto con Tailwind CSS

Este proyecto utiliza Tailwind CSS para generar estilos dinámicamente. Para trabajar eficientemente en el desarrollo, puedes usar el siguiente comando para compilar automáticamente tus estilos cada vez que hagas cambios en tus archivos CSS.

## Pre-requisitos

Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde [Node.js official website](https://nodejs.org/).

## Configuración inicial

Primero, clona este repositorio en tu máquina local y navega al directorio del proyecto:


git clone https://tu-repositorio.com/proyecto.git
cd proyecto
Instala las dependencias necesarias (si aún no están instaladas):

npm install
Compilación de Tailwind CSS
Para compilar tu CSS con Tailwind y habilitar el modo de vigilancia para que los cambios se procesen automáticamente, ejecuta el siguiente comando en la terminal:


npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
Este comando toma el archivo input.css ubicado en el directorio src, procesa los estilos utilizando Tailwind CSS, y genera el archivo output.css en el mismo directorio. El flag --watch hace que Tailwind monitoree el archivo de entrada para cualquier cambio y recompile automáticamente el archivo de salida.

SVG
https://www.svgrepo.com