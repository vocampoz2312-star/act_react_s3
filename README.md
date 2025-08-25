# Actividad Práctica 3: Enrutamiento en Next.js 13+ (App Router)

## Instrucciones Iniciales

### Fork del Repositorio

**Antes de comenzar la actividad, debes realizar fork del repositorio donde trabajarás:**

1. **Accede al repositorio base:**

    - Navega a: `https://github.com/jfinfosena/act_react_s3.git`
    - Examina la estructura del proyecto
    - Lee el archivo README.md

2. **Realiza el Fork:**

    - Haz clic en el botón "Fork" en la esquina superior derecha
    - Selecciona tu cuenta personal como destino
    - Espera a que se complete el proceso

3. **Clona tu fork localmente:**
   ```bash
   git clone https://github.com/TU_USUARIO/act_react_s3.git
   cd act_react_s3
   npm install
   ```

4. **Verifica que el proyecto funciona:**
   ```bash
   npm run dev
   ```
   - Abre tu navegador en `http://localhost:3000`

---

## Objetivo
Aprender a implementar y manejar el sistema de enrutamiento en Next.js 13+ utilizando el **App Router**, creando rutas básicas, dinámicas, layouts y navegación.

---

## Parte 1: Estructura Básica del App Router

### Ejercicio 1.1: Crear la Página de Inicio

1. **Crear el layout raíz:**

    - Crea el archivo `app/layout.js`
    - Implementa un layout que incluya:
        - Estructura HTML básica con `<html>` y `<body>`
        - Navegación simple con enlaces: Inicio, Productos, Blog, Contacto
        - Usar componente `Link` de Next.js para todos los enlaces    


2. **Página de inicio (`app/page.js`):**

    - Título: "Página de Inicio"
    - Párrafo de bienvenida simple
    - Enlaces a las demás secciones usando componente `Link`

### Ejercicio 1.2: Crear Rutas Básicas

1. **Página de Productos (`app/productos/page.js`):**

    - Título: "Productos"
    - Lista simple de 3 productos: Laptop, Smartphone, Tablet
    - Cada producto como enlace a su página individual usando `Link`

2. **Página de Blog (`app/blog/page.js`):**

    - Título: "Blog"
    - Lista de 3 artículos con títulos simples
    - Cada artículo como enlace a su página individual usando `Link`

3. **Página de Contacto (`app/contacto/page.js`):**

    - Título: "Contacto"
    - Información básica de contacto (texto simple)
    - Sin formularios complejos

---

## Parte 2: Layouts Anidados

### Ejercicio 2.1: Layout para Productos

1. **Layout de productos (`app/productos/layout.js`):**

    - Título: "Sección de Productos"
    - Navegación secundaria simple con enlaces a categorías
    - Área para el contenido ({children})

2. **Páginas de categorías:**

    - `app/productos/electronicos/page.js`: mostrar 3 productos electrónicos específicos
    - `app/productos/ropa/page.js`: mostrar 3 productos de ropa específicos
    - Cada página debe tener título "Productos > [Categoría]"
    - Mostrar contador: "X productos encontrados"

### Ejercicio 2.2: Layout para Blog

1. **Layout de blog (`app/blog/layout.js`):**

    - Título: "Sección de Blog"
    - Navegación secundaria simple
    - Área para el contenido ({children})

---

## Parte 3: Rutas Dinámicas

### Ejercicio 3.1: Páginas de Producto Individual

1. **Crear ruta dinámica:**

    - Crea `app/productos/[id]/page.js`
    - El componente debe:
        - Recibir el parámetro `id` desde `params`
        - Mostrar título: "Producto: [id]"
        - Descripción simple del producto
        - Enlace para volver a la lista de productos

2. **Enlaces dinámicos en la página de productos:**

    - Modifica `app/productos/page.js` para que cada producto sea clickeable
    - Usar componente `Link` de Next.js para navegación
    - IDs específicos a usar: "1", "2", "3"
    - El enlace debe mostrar el nombre del producto como texto

### Ejercicio 3.2: Artículos de Blog Dinámicos

1. **Página de artículo individual (`app/blog/[slug]/page.js`):**

    - Debe recibir y usar el parámetro `params.slug`
    - Mostrar título: "Artículo: [slug]"
    - Contenido simple del artículo
    - Enlace para volver a la lista de artículos

2. **Enlaces a artículos desde la página principal:**

    - Modifica `app/blog/page.js` para que cada artículo sea clickeable
    - Slugs específicos a usar: "introduccion-nextjs", "react-server-components", "app-router-guia"
    - Usar componente `Link` para navegación

---

## Parte 4: Rutas de Captura Total

### Ejercicio 4.1: Sistema de Documentación

1. **Ruta catch-all (`app/docs/[...slug]/page.js`):**

    - Debe manejar el parámetro `params.slug` como array
    - Mostrar los segmentos capturados en la página
    - Título: "Documentación: [segmentos]"
    - Rutas de ejemplo: `/docs/guia/instalacion`, `/docs/api/componentes`

2. **Sistema de breadcrumbs:**

    - Mostrar navegación: "Docs > Sección1 > Sección2 > ..."
    - Formato simple con separador " > "
    - Solo mostrar texto, sin enlaces complejos

**Especificaciones para la página de documentación:**

- Debe manejar el parámetro `params.slug` como array
- Crear breadcrumbs simples: "Docs > Sección1 > Sección2 > ..."
- Mostrar contenido básico basado en la ruta
- Incluir título principal que refleje la sección actual
- Manejar el caso cuando slug está vacío (página principal de docs)

---
