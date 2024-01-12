export default function Municipios({
  children,
  municipios,
  entornosNaturales,
  onSelectMunicipios,
  onSelectEntornos,
}) {
  const handleMunicipio = (e) => {
    const municipio = e.target.value;
    onSelectMunicipios(municipio);
  };
  const handleEntornos = (e) => {
    const entornos = e.target.value;
    onSelectEntornos(entornos);
  };
  return (
    <section className="border-t pt-2">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="municipio">Municipio</label>
          <select
            className="ml-2 border rounded"
            name="municipio"
            id="municipio"
            onChange={handleMunicipio}
          >
            <option disabled={false}>---municipios---</option>
            {municipios?.map((municipio, index) => (
              <option value={municipio} key={index}>
                {municipio}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="entornos-naturales">Entorno Natural</label>
          <select
            className="ml-2 border rounded"
            name="entornos-naturales"
            id="entornos-naturales"
            onChange={handleEntornos}
          >
            <option disabled={false}>---entornos-naturales---</option>
            {entornosNaturales?.map((entornoNatural, index) => (
              <option value={entornoNatural} key={index}>
                {entornoNatural}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
