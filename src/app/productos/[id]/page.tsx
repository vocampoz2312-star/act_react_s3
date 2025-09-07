import Link from "next/link";

interface ProductoPageProps {
  params: { id: string };
}

export default function ProductoPage({ params }: ProductoPageProps) {
  const { id } = params;

  return (
    <div>
      <h2>Producto: {id}</h2>
      <p>
        Este es el detalle del producto con ID {id}. Aquí puedes agregar más información.
      </p>

      <Link href="/productos" className="back-link">
        ⬅ Volver a la lista de productos
      </Link>
    </div>
  );
}
