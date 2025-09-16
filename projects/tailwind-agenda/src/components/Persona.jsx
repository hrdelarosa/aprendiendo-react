// import { Foto } from "./Foto";
import { Datos } from "./Datos";
// import { Links } from "./Links";

export function Persona({
  //   ruta,
  //   descri,
  nombre,
  edad,
  telefono,
  correro,
  direccion,
  ciudad,
  //   link,
  //   url,
}) {
  return (
    <section className="flex gap-4 items-center w-auto p-4 rounded-2xl bg-slate-300 bg-color-card">
      {/* <Foto direccion={ruta} descrip={descri} /> */}
      <Datos
        nom={nombre}
        eda={edad}
        tel={telefono}
        corr={correro}
        dire={direccion}
        ciu={ciudad}
      />
      {/* <Links link={link} url={url} /> */}
    </section>
  );
}
