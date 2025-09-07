import Link from "next/link";

export default function BlogPage() {
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <div>
      <h2>Bienvenido al Blog</h2>
      <p>Explora artículos, novedades y noticias sobre el cuidado de rizos y desarrollo web. ✨</p>

      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.slug}>
            <Link href={`/blog/${articulo.slug}`}>{articulo.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
