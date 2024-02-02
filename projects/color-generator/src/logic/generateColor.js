const hexa = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 
    'b', 'c', 'd', 'e', 'f'
]

export const generateColor = () => {
    let colorHexa = '#'
    for(let i = 0; i < 6; i++){
      colorHexa += hexa[Math.floor(Math.random() * 15) + 1]
    }

    return colorHexa
}

export const copyColor = async (text) => {
  try{
    await navigator.clipboard.writeText(text)
    console.log('Texto copiado al portapapeles', text)
  }
  catch(error){
    console.log('Error al copiar al portapapeles:', error)
  }
} 