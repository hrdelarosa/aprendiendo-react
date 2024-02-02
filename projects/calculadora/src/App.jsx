import './App.css'
import { useState } from 'react'

const Cells = ({children, classn, onClick}) => {
  const handleClick = () => {
    onClick(children)
  }

  return (
    <div className={`cell ${classn ? `${classn}` : ''}`} onClick={handleClick}>
      {children}
    </div>
  )
}

const Disp = ({value}) => {
  return (
    <div className='display-cal'>
      {value}
    </div>
  )
}

const Board = ({onClickCell}) => {
  const [isValue, setValue] = useState('')

  const clickCells = (value) =>{
    setValue(isValue + value)
    onClickCell(value)
  } 

  return (
    <section className='board'>
      <Cells onClick={clickCells} classn={'symb'}>C</Cells>
      <Cells onClick={clickCells} classn={'symb'}>%</Cells>
      <Cells onClick={clickCells} classn={'symb'}>÷</Cells>
      <Cells onClick={clickCells} classn={'symbols'}>⌫</Cells>
      <Cells onClick={clickCells}>9</Cells>
      <Cells onClick={clickCells}>8</Cells>
      <Cells onClick={clickCells}>7</Cells>
      <Cells onClick={clickCells} classn={'symbols'}>×</Cells>
      <Cells onClick={clickCells}>6</Cells>
      <Cells onClick={clickCells}>5</Cells>
      <Cells onClick={clickCells}>4</Cells>
      <Cells onClick={clickCells} classn={'symbols'}>-</Cells>
      <Cells onClick={clickCells}>3</Cells>
      <Cells onClick={clickCells}>2</Cells>
      <Cells onClick={clickCells}>1</Cells>
      <Cells onClick={clickCells} classn={'symbols'}>+</Cells>
      <Cells onClick={clickCells} classn={'zero'}>0</Cells>
      <Cells onClick={clickCells}>.</Cells>
      <Cells onClick={clickCells} classn={'symbols'}>=</Cells>
    </section>
  )
}

function App() {
  const [displayValue, setValueDisplay] = useState('')
  const handelClick = (value) => {
    setValueDisplay(displayValue + value)
  }
  return (
    <main className='content'>
      <Disp value={displayValue}></Disp>
      <Board onClickCell={handelClick}></Board>
    </main>
  )
}

export default App
