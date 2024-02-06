import './App.css'
import { useState, useEffect } from 'react'
import { ContentColor } from './components/ContentColor'
import { generateColor, generateColorPallete } from './logic/generateColor'
import { ColorPalette } from './components/ColorPalette'

function App() {
  const [colorFon, setColor] = useState(generateColor)
  const [showColPal, setColPal] = useState(false)
  const [paletteColor, setPaletteColor] = useState(generateColorPallete())

  const changeComponent = () => {
    setColPal(!showColPal)
  }

  const clickColor = () => {
    showColPal ? setPaletteColor(generateColorPallete) : setColor(generateColor)
  }

  useEffect(() => {
    showColPal ? document.body.style.backgroundColor = paletteColor[0] : document.body.style.backgroundColor = colorFon

    return () => {
      showColPal ? document.body.style.backgroundColor = paletteColor[0] : document.body.style.backgroundColor = colorFon
    }
  }, [colorFon, showColPal, paletteColor])

  return (
    <main className='content'>  
      {showColPal ? <ColorPalette colors={paletteColor}/> : <ContentColor colors={colorFon}/>}
      <div className='but-content'> 
        <button onClick={clickColor} className='buttons'>
          Generate
        </button>
        <button onClick={changeComponent} className='buttons'>
          {showColPal ? 'Color' : 'Palette'}
        </button>
      </div>
    </main>
  )
}

export default App
