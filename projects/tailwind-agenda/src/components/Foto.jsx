export function Foto({direccion, descrip}) {

    return (
        <div className="px-2">
            <img className="max-w-36 rounded-2xl" src={direccion} alt={descrip} />
        </div>
    )
}