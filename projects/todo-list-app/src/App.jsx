import { useState } from 'react'
import './App.css'

function App() {

  const [isChecked, setIsCheked] = useState(false)
  const handleCheckboxChange = () => {
    setIsCheked(!isChecked)
  }

  return (
    <main>
      <section className='content-todo-list'>
        <header>
          <h1 className='title'>To-do List</h1>
        </header>

        <div className='content-add-task'>
          <input type="text" placeholder='Add your task' className='add-task'/>
          <button className='btn-add-task'>Add</button>
        </div>

        <div className='list-task'>
          <label className='check-cust'>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <div className="checkmark"></div>
          </label>

          <p className='task-name'>!Aprende Javascript¡</p>
          <button className='btn-delete'>×</button>
        </div>
      </section>
    </main>
  )
}

export default App
