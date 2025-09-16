import './App.css'
import result from './mocks/results.json'

function App() {
  const resultMarvel = result.results

  return (
    <div className="page">
      <header>
        <h1>Marvel</h1>
      </header>

      <main>
        Muestra las Cosas de Marvel
        <ul>
          {
            resultMarvel.map((marvel) => (
              <li key={marvel.id}>
                <h3>{marvel.title}</h3>
                <p>Formato: {marvel.format}</p>
                <img src={marvel.images[0].path} alt={marvel.title} />
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App
