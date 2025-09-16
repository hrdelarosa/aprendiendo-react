import './App.css'
import { Persona } from './components/Persona'
import { pers } from './logic/agendados'

function App() {

  return (
    <main className='contenedor'>
      <Persona ruta={pers.pers1.ruta} descri={pers.pers1.desc} nombre={pers.pers1.nombre} edad={pers.pers1.edad} telefono={pers.pers1.telefono} correro={pers.pers1.correo} direccion={pers.pers1.direccion} ciudad={pers.pers1.ciudad} link={pers.pers1.link} url={pers.pers1.url} />
    </main>
  )
}

export default App
