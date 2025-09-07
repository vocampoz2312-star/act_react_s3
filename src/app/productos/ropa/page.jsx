export default function RopaPage() {
  const productos = [
    { id: 1, nombre: "Camiseta Oversize" },
    { id: 2, nombre: "Jeans Clásicos" },
    { id: 3, nombre: "Chaqueta de Cuero" },
  ];

  return (
    <div>
      <h2>Productos &gt; Ropa</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
