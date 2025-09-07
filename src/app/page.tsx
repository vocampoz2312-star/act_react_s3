import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>¡Bienvenido a nuestro sitio sobre rizos!</p>
      <p>Explora nuestras secciones:</p>
      <ul>
        <li>
          <Link href="/productos">Ver Productos</Link>
        </li>
        <li>
          <Link href="/blog">Ir al Blog</Link>
        </li>
        <li>
          <Link href="/contacto">Contáctanos</Link>
        </li>
      </ul>
    </div>
  );
}
