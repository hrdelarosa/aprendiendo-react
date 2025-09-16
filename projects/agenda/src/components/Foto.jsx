import '../styles/Foto.css'

export function Foto({direccion, descrip}) {

    return (
        <div className='imagen'>
            <img src={direccion} alt={descrip} />
        </div>
    )
}