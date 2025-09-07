import Link from "next/link";

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: "1rem" }}>
      <h1>Sección de Productos</h1>

      {/* Navegación secundaria */}
      <nav style={{ marginBottom: "1rem" }}>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <Link href="/productos/electronicos">Electrónicos</Link>
          </li>
          <li>
            <Link href="/productos/ropa">Ropa</Link>
          </li>
        </ul>
      </nav>

      {/* Contenido dinámico */}
      <div>{children}</div>
    </section>
  );
}
