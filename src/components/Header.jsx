export default function Header({ name, surname, title = "Espacio naturales y playas de Euskadi" }) {
  return (
    <header className="flex flex-col gap-4 p-4">
        <div>
          <h1 className="text-4xl">{title}</h1>
        </div>
        <div>
            <h1 className="text-2xl">{name +' '+ surname}</h1>
        </div>
    </header>
  )
}