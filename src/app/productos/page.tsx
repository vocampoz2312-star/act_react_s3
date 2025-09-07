import Link from "next/link";

export default function ProductosPage() {
  const productos = [
    { id: "1", nombre: "Mascarilla Hidratante" },
    { id: "2", nombre: "Gel Definidor de Rizos" },
    { id: "3", nombre: "Aceite Nutritivo" },
  ];

  return (
    <div>
      <h2>Todos los Productos</h2>
      <p>Selecciona un producto para ver más detalles:</p>

      <div>
        {productos.map((p) => (
          <div key={p.id} className="card">
            <Link href={`/productos/${p.id}`}>{p.nombre}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
