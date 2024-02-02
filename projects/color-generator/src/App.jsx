import './App.css'
import { useState, useEffect } from 'react'
import { ContentColor } from './components/ContentColor'
import { generateColor, copyColor } from './logic/generateColor'

function App() {
  const [colorFon, setColor] = useState('#c0e3ff')

  const clickColor = () => {
    setColor(generateColor)
  } 

  useEffect(() => {
    document.body.style.backgroundColor = colorFon

    return () => {
      document.body.style.backgroundColor = colorFon
    }
  }, [colorFon])

  return (
    <main className='content'>  
      <ContentColor colors={colorFon}>{colorFon}</ContentColor>
      <div className='but-content'> 
        <button onClick={clickColor} className='buttons'>
            Generate
        </button>
      </div>
    </main>
  )
}

export default App
