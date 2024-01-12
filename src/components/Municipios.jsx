export default function Municipios({ children, municipios,entornosNaturales}) {
  return (
    <section>
        <div>
        <div>
            <label htmlFor="municipio">Municipio</label>
            <select name="municipio" id="municipio">
                {municipios?.map((municipio,index)=>(
                    <option value="" key={index}>{municipio}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="entornos-naturales">Entorno Natural</label>
            <select name="entornos-naturales" id="entornos-naturales">
            {entornosNaturales?.map((entornoNatural, index) => (
              <option value="" key={index}>
                {entornoNatural?.documentName}
              </option>
            ))}
            </select>
        </div>
        </div>
        <div>
            { children }
        </div>

    </section>
  )
}
