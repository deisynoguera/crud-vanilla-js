# Deisy Code Dev

Este proyecto es una aplicación web sencilla desarrollada con HTML, CSS y JavaScript vanilla. Su objetivo principal es servir como base para experimentos, aprendizaje y desarrollo de utilidades front-end.

## Estructura del Proyecto

- `index.html`: Archivo principal que contiene la estructura HTML de la aplicación.
- `style.css`: Archivo de estilos para la interfaz de usuario.
- `main.js`: Archivo JavaScript principal para la lógica de la aplicación.
- `utils.js`: Archivo de utilidades, incluye funciones como la generación de UUID.
- `view.js`: Archivo para la gestión de vistas o componentes visuales.

## Funcionalidades

- Generación de identificadores únicos (UUID) usando JavaScript puro.
- Separación de lógica en archivos independientes para facilitar la mantenibilidad y escalabilidad.
- Interfaz sencilla y personalizable.

## Uso

1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador preferido.
3. Modifica los archivos según tus necesidades para agregar nuevas funcionalidades o estilos.

## Ejemplo de uso de la función UUID

```js
// En main.js o view.js
// Importar la función (si usas módulos o Node.js)
// const { generarUUID } = require('./utils');

// Usar la función
const id = generarUUID();
console.log(id); // Ejemplo: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
```

## Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, etc.)
- No requiere dependencias externas ni frameworks

## Autor

Desarrollado por Vicente (o el nombre que prefieras).

---

Este proyecto es ideal para quienes desean aprender JavaScript puro y buenas prácticas de organización de código en proyectos front-end pequeños.
