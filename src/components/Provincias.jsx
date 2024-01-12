export default function Provincias({ provincias, onSelectProvincias }) {
  const handleChange = (e) =>{
    const provincia = e.target.value;
    onSelectProvincias(provincia)
  }
  return (
    <div className="mb-4">
        <h1 className="font-semibold underline mb-2">Provincias</h1>
        <div className="flex flex-col gap-1">
        {provincias.map((provincia, index)=>(
              <label key={index}>
                <input className="mr-2" onChange={handleChange} type="radio" name="provincias"  value={provincia} />{provincia}
              </label>
        ))}
        </div>
    </div>
  )
}
