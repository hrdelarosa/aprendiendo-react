import '../styles/Perosna.css'
import { Foto } from "./Foto"
import { Datos } from "./Datos"
import { Links } from "./Links"

export function Persona({ruta, descri, nombre, edad, telefono, correro, direccion, ciudad, link, url}) {

    return (
        <section className="agendado">
            <Foto direccion={ruta} descrip={descri} />
            <Datos nom={nombre} eda={edad} tel={telefono} corr={correro} dire={direccion} ciu={ciudad} />
            <Links link={link} url={url} />
        </section>
    )
}