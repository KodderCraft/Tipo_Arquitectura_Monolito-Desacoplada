# Arquitectura de software

Página interactiva para aprender las diferencias entre una arquitectura monolítica
y una desacoplada. Incluye diagramas animados, explicaciones breves, preguntas de
repaso y un espacio reservado para un video.

## Estructura

```text
.
├── index.html
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── app.js
    └── videos
        ├── poster.svg
        └── (video que se agregará después)
```

## Ejecutar

Abre `index.html` en un navegador. Bootstrap, Bootstrap Icons y las fuentes se
cargan desde sus CDN; se requiere conexión a internet para esos recursos externos.

El póster del video está en `assets/videos/poster.svg` y se muestra aunque todavía no
haya un video. Guarda el archivo de video en `assets/videos/` cuando esté listo para
integrarlo en la página.
