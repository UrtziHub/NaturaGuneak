export default function Informacion({ data }) {
  if (!data) {
    return <p className="border p-4">No data available</p>;
  }
  return (
    <section className="border p-4">
        <h1 className="text-xl">Informacion del local seleccionado</h1>
        <p>Nombre: </p><p className="font-bold"> { data.nombre } </p>
        <p>Localidad: </p><p className="font-bold"> { data.localidad } </p>
        <h1 className="text-xl">Informacion adicional</h1>
        <p>Tipo: </p><p className="font-bold">{ data.tipo }</p>
        <p>Turismo euskadi: </p><p className="font-bold">{ data.turismo }</p>
        <p>Descripcion: </p><p className="font-bold">{ data.descripcion }</p>
    </section>
  )
}
