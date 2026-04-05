# Wireframe Figma (réplica 1:1 del portfolio actual)

## 1) Frame base en Figma
- Desktop principal: `1440 x 5200` (o Auto Layout vertical con altura Hug).
- Mobile referencia: `390 x 844`.
- Fondo global del frame: color sólido `--background` + patrón de grilla.

## 2) Tokens visuales (usar EXACTOS)
Desde `app/globals.css`:
- `--background: hsl(352, 30%, 11%)`
- `--foreground: hsl(0, 20%, 95%)`
- `--primary: hsl(355, 78%, 64%)`
- `--accent: hsl(8, 74%, 60%)`
- `--secondary: hsl(350, 22%, 20%)`
- `--muted-foreground: hsl(0, 12%, 76%)`
- `--border: hsl(350, 20%, 28%)`
- `--card: hsl(350, 28%, 15%)`
- Radio base: `10px` (`--radius: 0.625rem`)

## 3) Patrón de fondo (global)
En todo el frame agrega una capa superior con:
- Patrón tipo grid de `24px x 24px`
- Línea 1px color aproximado `#80808012`
- Aplicado en X e Y (como en `app/page.tsx`).

## 4) Sistema de layout horizontal (muy importante)
Usa este padding por breakpoint (simulación en Figma Desktop):
- Base desktop: `left/right = 64px` (equivale aprox a `xl:px-16`)
- Secciones usan ancho completo con ese padding, no container fijo centrado.
- Muchos bloques internos sí usan `max-w-*` para centrar contenido puntual.

## 5) Tipografía (jerarquía)
- H1 Hero: `text-4xl md:text-6xl lg:text-7xl` (en desktop usa 72px aprox).
- H2 secciones: `text-3xl md:text-4xl` (36px aprox en desktop).
- Título cards: `text-xl`.
- Cuerpo principal: `text-lg` y `text-base`.
- Labels/chips: `text-sm` / `text-xs`.

## 6) Orden exacto de secciones
1. Navigation (fixed arriba)
2. Hero (`#inicio`)
3. About (`#sobre-mi`)
4. Personal Info (`#info-personal`)
5. Services (`#servicios`)
6. Projects (`#proyectos`)
7. Experience (`#experiencia`)
8. Testimonials (`#testimonios`)
9. Contact (`#contacto`)
10. Footer

## 7) Especificación por sección

### A. Navigation
- Alto visual aprox: 64px.
- Logo izquierda: `<Dev />` color primary, tamaño 2xl.
- Menú derecha con 6 links en una fila, gap ~32px.
- Estado actual: fondo transparente.

### B. Hero
- Sección: mínimo `100vh`.
- Grid 2 columnas (`lg:grid-cols-2`), gap ~40px.
- Columna izquierda:
  - Badge disponibilidad (pill, borde primary/20, bg primary/10).
  - H1 grande con nombre en gradiente `primary -> accent`.
  - Subtítulo y párrafo descriptivo.
  - 2 botones: primario + outline.
  - 2 icon buttons (GitHub y Mail).
- Columna derecha:
  - Imagen gato grande (`/gato.png`) responsive.
- Indicador flecha abajo centrado.

### C. About (Sobre Mí)
- Header centrado (label + H2).
- Grid 2 columnas con gap ~64px.
- Izquierda:
  - Bloque texto con línea decorativa vertical a la izquierda.
  - Grid highlights `2 columnas` (cards suaves con borde).
- Derecha:
  - Título “Habilidades Técnicas”.
  - 3 grupos de skills en formato limpio (sin card pesada).
  - Imagen cuadrada redondeada al final.

### D. Personal Info
- Header centrado.
- Bloque centrado `max-w-5xl`.
- Título “Mis gustos” con icono corazón.
- Grid de gustos: `sm:2 columnas`, `lg:3 columnas`, cards con borde suave.

### E. Services
- Header centrado.
- Grid: `sm:2`, `lg:3`, gap 24px.
- Cada card:
  - Icono en caja 48x48.
  - Título + descripción.
  - Chips de features en fila/wrap.
  - Estilo actual limpio (sin sombra pesada).

### F. Projects
- Header centrado.
- Grid 3 cards en desktop (`md:2`, `lg:3`).
- Cada card:
  - Top media `aspect-video` con gradiente.
  - Botón centrado “Haz clic aquí”.
  - Badge de índice arriba derecha (01,02,03).
  - Overlay hover con botones GitHub y Demo.
  - Abajo: título, descripción corta, tags.
- CTA final centrado: “Ver todos en GitHub”.

### G. Experience
- Header centrado.
- Contenedor `max-w-5xl`.
- Timeline vertical con 2 items de educación.
- Punto y línea lateral izquierda.
- Card por item con borde suave.

### H. Testimonials
- Header centrado.
- Grid `md:2` con `max-w-5xl`.
- Card testimonio con:
  - ícono quote flotando arriba izq.
  - estrellas, texto, autor + avatar iniciales.

### I. Contact
- Header centrado.
- Grid `lg:5 columnas`:
  - Izquierda `2 cols`: info contacto + redes + disponibilidad.
  - Derecha `3 cols`: formulario.
- Inputs y textarea con fondo transparente y bordes suaves.
- Botón full width “Enviar Mensaje”.

### J. Footer
- Fondo diferenciado (`bg-card`) + borde superior.
- Grid `md:4`:
  - Col 1-2: marca + texto + redes.
  - Col 3-4: enlaces navegación/contacto.
- Barra inferior con copyright dinámico y botón subir.

## 8) Espaciados verticales globales
- Cada sección: `py-24` (~96px arriba y abajo).
- Header de sección: `mb-16` (~64px).
- Grids interiores: gap entre 16px y 24px según bloque.

## 9) Interacciones para prototipo Figma
- Hover links: color `muted-foreground -> primary`.
- Hover cards: borde `border/50 -> primary/40`.
- Botones sociales: fondo `secondary -> primary`.
- Projects media: overlay aparece en hover.

## 10) Checklist de réplica rápida (en orden)
1. Crear frame desktop + fondo sólido + grilla 24px.
2. Montar navbar fija transparente.
3. Replicar hero 2 columnas con imagen derecha.
4. Duplicar patrón de sección: header centrado + bloque contenido.
5. Construir About exactamente con split 2 columnas.
6. Construir grids de Personal/Services/Projects.
7. Agregar timeline Experience.
8. Agregar testimonials 2 columnas.
9. Agregar Contact 2/3 columnas.
10. Cerrar con footer en fondo `card`.

---
Si quieres, en el siguiente paso te preparo una versión “modo Figma puro” con medidas por capa (X/Y/W/H) en un frame desktop de 1440 fijo para que solo copies y pegues manualmente.