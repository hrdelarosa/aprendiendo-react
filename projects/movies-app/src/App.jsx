import './App.css'
import results from './mocks/results.json'

function App() {
  const allResult = results.results

  const baseUrl = 'https://image.tmdb.org/t/p/w500/'

  return (
    <div className="page">
      <header>
        <h1>Peliculas</h1>
      </header>

      <main>
        En tendencia.
        <ul>
          {
            allResult.map(movie => (
              <li key={movie.id}>
                <h3>{movie.original_name || movie.original_title}</h3>
                <img src={`${baseUrl}${movie.poster_path}`} alt={movie.original_name || movie.original_title} />
                <p>{movie.media_type.toUpperCase()}</p>
              </li>
            ))
          }
        </ul>
      </main>
    </div>
  )
}

export default App
