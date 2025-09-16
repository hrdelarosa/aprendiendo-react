// import { Persona } from "./components/Persona";
import { Personas } from "./components/Person";
// import { personas } from "./logic/agendados";

import { useState, useEffect } from "react";

function App() {
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    fetch("http://localhost:1234/contactos")
      .then((response) => response.json())
      .then((contact) => {
        setContacto(contact);
      });

    console.log(contacto);
  }, [contacto]);

  return (
    <>
      <main className="flex flex-col items-center p-5 bg-color-fondo">
        <section className="flex flex-col gap-2">
          {
            contacto.map((contac, i) => (
              <Personas
                key={i}
                nombre={contac.nombre}
                telefono={contac.phone}
                correro={contac.email}
                direccion={contac.address}
                ciudad={contac.city}
              />
            ))
            // Object.values(contacto).map((con, i) => (
            //   <Person
            //     key={i}
            //     nombre={con.nombre}
            //     telefono={con.phone}
            //     correro={con.email}
            //     direccion={con.address}
            //     ciudad={con.city}
            //   />
            // ))
            // <Persona
            //   ruta={personas.pers1.ruta}
            //   descri={personas.pers1.desc}
            //   nombre={personas.pers1.nombre}
            //   edad={personas.pers1.edad}
            //   telefono={personas.pers1.telefono}
            //   correro={personas.pers1.correo}
            //   direccion={personas.pers1.direccion}
            //   ciudad={personas.pers1.ciudad}
            //   link={personas.pers1.link}
            //   url={personas.pers1.url}
            // />
            // Object.values(personas).map((persona, index) => (
            //   <Persona key={index} ruta={persona.ruta} descri={persona.desc} nombre={persona.nombre} edad={persona.edad} telefono={persona.telefono} correro={persona.correo} direccion={persona.direccion} ciudad={persona.ciudad} link={persona.link} url={persona.url} />
            // ))
          }
        </section>
        <div>
          <form action="" className="flex flex-col gap-3">
            <div className="block relative">
              <label className="block" htmlFor="">
                Nombre
              </label>
              <input type="text" className="rounded border boder-gray-200" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
