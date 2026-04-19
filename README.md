# FORM3D — Sitio Web

Portfolio y página de servicios para impresión 3D. Construido con Jekyll, preparado para GitHub Pages.

---

## Estructura

```
print3d-site/
├── _config.yml          # Configuración principal
├── _layouts/
│   └── default.html     # Plantilla base
├── _includes/
│   ├── nav.html         # Navegación
│   └── footer.html      # Pie de página
├── _pages/
│   ├── servicios.html   # Página de servicios y guías
│   └── contacto.html    # Página de contacto
├── assets/
│   └── css/
│       └── main.css     # Estilos principales
└── index.html           # Portfolio (página principal)
```

---

## Configuración inicial

### 1. Edita `_config.yml`

Cambia estos valores:

```yaml
title: "FORM3D"                     # Nombre de tu estudio
url: "https://tuusuario.github.io"  # URL real de GitHub Pages
repository: "tuusuario/form3d"      # Tu usuario/repositorio

social:
  instagram: "tu_usuario"
  twitter: "tu_usuario"
  email: "tu@email.com"
```

### 2. Configura el formulario de contacto

El formulario usa [Formspree](https://formspree.io) (gratuito hasta 50 envíos/mes):

1. Crea una cuenta en formspree.io
2. Crea un nuevo formulario
3. Copia tu endpoint (ej: `https://formspree.io/f/xabc1234`)
4. Edita `_pages/contacto.html` y reemplaza `TU_ID_FORMSPREE`

### 3. Añade tus imágenes

Sube las fotos de tus impresiones a `assets/images/work/` y actualiza las tarjetas en `index.html`:

```html
<!-- Reemplaza el div placeholder por: -->
<img src="/assets/images/work/nombre-pieza.jpg" alt="Descripción de la pieza">
```

Tamaños recomendados:
- Tarjeta grande (7/12): 1400×1050px
- Tarjeta media (5/12): 800×1067px  
- Tarjeta full width: 1400×525px
- Tarjeta tercio: 700×700px

---

## Desarrollo local

```bash
# Instalar dependencias
bundle install

# Servidor de desarrollo
bundle exec jekyll serve

# Visita http://localhost:4000
```

## Deploy en GitHub Pages

1. Sube el repositorio a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` como fuente
4. GitHub Pages compilará Jekyll automáticamente

---

## Personalización

### Cambiar el nombre/marca

El logotipo "FORM3D" está en `_includes/nav.html` y `_includes/footer.html`. Cámbialo directamente en el HTML.

### Cambiar colores

Edita las variables CSS en `assets/css/main.css`:

```css
:root {
  --ink:    #0e0e0e;   /* Color principal / texto */
  --paper:  #f7f5f0;   /* Fondo general */
  --accent: #c8440f;   /* Color de acento (naranja) */
  --muted:  #8a8680;   /* Texto secundario */
  --border: #d4d0c8;   /* Bordes */
}
```

### Añadir más trabajos al portfolio

Copia un bloque `<article class="work-card ...">` en `index.html` y ajusta la clase de tamaño:
- `work-card--large` — 7 columnas
- `work-card--medium` — 5 columnas
- `work-card--full` — 12 columnas (ancho completo)
- `work-card--third` — 4 columnas (3 por fila)
