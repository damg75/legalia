# Styles

Este directorio contiene la configuración de estilos de la aplicación.

## Archivos

### `settings.scss`
Configuración de variables SASS y personalización de Vuetify. Incluye:
- Configuración de fuentes (Poppins)
- Variables de tema de Vuetify
- Estilos globales de fuente

### `global.scss`
Clases CSS globales disponibles en toda la aplicación. Incluye utilidades para:

- **Texto**: alineación, transformación, peso de fuente, decoración
- **Espaciado**: margins y paddings con diferentes tamaños
- **Flexbox**: display, dirección, wrap, justificación, alineación
- **Posicionamiento**: position, top, right, bottom, left
- **Dimensiones**: width, height, max/min dimensiones
- **Bordes**: estilos de borde y border-radius
- **Colores**: colores de texto y fondo basados en el tema
- **Sombras**: diferentes niveles de sombra
- **Overflow**: control de desbordamiento
- **Z-index**: capas de elementos
- **Responsivo**: utilidades para diferentes breakpoints
- **Utilidades personalizadas**: cursor, transiciones, transformaciones, scroll

## Uso

Las clases globales están disponibles automáticamente en todos los componentes sin necesidad de importarlas.

### Ejemplos de uso:

```html
<!-- Espaciado -->
<div class="mt-4 px-6 py-2">Contenido</div>

<!-- Flexbox -->
<div class="d-flex justify-center align-center">Centrado</div>

<!-- Colores -->
<p class="text-primary bg-white">Texto primario</p>

<!-- Responsivo -->
<div class="d-none d-md-block">Solo visible en tablets y escritorio</div>

<!-- Utilidades -->
<button class="cursor-pointer transition-all">Botón interactivo</button>
```

## Breakpoints

Los breakpoints siguen la configuración de Vuetify:
- `xs`: 0px - 599px (móvil)
- `sm`: 600px - 959px (tablet pequeña)
- `md`: 960px - 1279px (tablet/laptop)
- `lg`: 1280px - 1919px (escritorio)
- `xl`: 1920px+ (escritorio grande)
