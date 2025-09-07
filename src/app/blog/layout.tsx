import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "1rem" }}>
      <h1>Sección de Blog</h1>

      {/* Navegación secundaria */}
      <nav style={{ marginBottom: "1rem" }}>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <Link href="/blog">Inicio Blog</Link>
          </li>
          <li>
            <Link href="/blog/articulos">Artículos</Link>
          </li>
          <li>
            <Link href="/blog/noticias">Noticias</Link>
          </li>
        </ul>
      </nav>

      {/* Contenido dinámico */}
      <div>{children}</div>
    </section>
  );
}
