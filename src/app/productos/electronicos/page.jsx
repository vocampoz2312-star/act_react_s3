export default function ElectronicosPage() {
  const productos = [
    { id: 1, nombre: "Auriculares Inalámbricos" },
    { id: 2, nombre: "Smartwatch Deportivo" },
    { id: 3, nombre: "Laptop Ultraligera" },
  ];

  return (
    <div>
      <h2>Productos &gt; Electrónicos</h2>
      <p>{productos.length} productos encontrados</p>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
