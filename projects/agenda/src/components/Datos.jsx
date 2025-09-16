import '../styles/Datos.css'

export function Datos({nom, eda, tel, corr, dire, ciu}) {

    return (
        <section className='datos'>
            <h3>{nom}</h3>
            <ul>
                <li><strong>Edad:</strong> {eda}</li>
                <li><strong>Telefono:</strong> {tel}</li>
                <li><strong>Correro:</strong> {corr}</li>
                <li><strong>Direccion:</strong> {dire}</li>
                <li><strong>Ciudad:</strong> {ciu}</li>
            </ul>
        </section>
    )
}