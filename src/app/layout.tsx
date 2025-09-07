import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css"; // opcional si quieres estilos globales

export const metadata: Metadata = {
  title: "Rizos - App",
  description: "Ejemplo de layout raíz con navegación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Navegación simple */}
        <nav style={{ padding: "1rem", backgroundColor: "#f5f5f5" }}>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/productos">Productos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Contenido dinámico */}
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}
