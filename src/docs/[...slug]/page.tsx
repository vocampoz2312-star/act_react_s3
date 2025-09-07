interface DocsPageProps {
  params: { slug?: string[] };
}

const docsContent: Record<string, string> = {
  "guia/instalacion":
    "Guía de instalación: Aprende a configurar el proyecto de Rizos con Next.js y TypeScript paso a paso.",
  "api/componentes":
    "API de Componentes: Documentación de los componentes creados como layout, navegación, productos y blog.",
  "productos":
    "Sección de Productos: Aquí encuentras detalles sobre cómo se estructuran los layouts anidados de productos y sus categorías.",
  "productos/dinamicos":
    "Rutas Dinámicas de Productos: Explicación de cómo se crean páginas individuales para cada producto con IDs.",
  "blog":
    "Sección de Blog: Aquí se documenta la estructura del layout de blog, navegación secundaria y listado de artículos.",
  "blog/articulos":
    "Artículos Dinámicos del Blog: Documentación sobre cómo se gestionan slugs dinámicos en los artículos.",
  "docs":
    "Página principal de la Documentación: Introducción general al proyecto de ejemplo con Next.js y TypeScript.",
};

export default function DocsPage({ params }: DocsPageProps) {
  const segmentos = params.slug ?? []; 
  const breadcrumbs = ["Docs", ...segmentos];

  const key = segmentos.join("/");

  const contenido =
    docsContent[key] ??
    "No hay documentación específica para esta sección todavía.";

  return (
    <div>
      <h1>
        Documentación:{" "}
        {segmentos.length > 0 ? segmentos.join(" / ") : "Página principal"}
      </h1>

      {/* Breadcrumbs simples */}
      <p>{breadcrumbs.join(" > ")}</p>
      <p className="breadcrumbs">{breadcrumbs.join(" > ")}</p>
      <div style={{ marginTop: "1rem" }}>
        <p>{contenido}</p>
      </div>
    </div>
  );
}
