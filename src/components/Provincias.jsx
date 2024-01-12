export default function Provincias({ provincias }) {
  return (
    <div>
        <h1 className="font-semibold underline">Provincias</h1>
        <div className="flex flex-col">
        {provincias.map((provincia, index)=>(
              <label key={index}>
                <input type="radio" name="provincias"  value={provincia} />{provincia}
              </label>
        ))}
        </div>
    </div>
  )
}
