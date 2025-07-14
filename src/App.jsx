import {  useEffect, useState } from 'react'
import './App.css'
import Tarefa from './components/tarefa'
import AddTarefa from './components/addTarefa'
import Title from './components/title'
import { v4 } from 'uuid'

function App() {

  const [tasks, mudatasks] = useState(
    JSON.parse(localStorage.getItem('tarefas2')) || []
  ) 

  // useEffect(() => {
  //   const api = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //     const date = await response.json()
  //     mudatasks(date)
  //   }

  //   api()
  // }, [])

  useEffect(() => {
    localStorage.setItem('tarefas2', JSON.stringify(tasks))
  }, [tasks])

  function btndelet(tafid) {
    const newTaskList = tasks.filter(taks => taks.id != tafid)
    mudatasks(newTaskList)
  }
  
  
  function criaTarefa(title, description) {
    const newTaref = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    }
    mudatasks([...tasks, newTaref])
  }

  function checkTask(atualId) {
    const newTaref = tasks.map((indice) => {
      if (indice.id == atualId) {
        return {...indice, isCompleted: !indice.isCompleted}
      }

      return indice
    })
    mudatasks(newTaref)
  }

  return (
    <div className='bg-[#90A1B9] h-screen w-screen p-[24px] flex justify-center'>
      <section className= 'w-[500px] flex flex-col gap-[30px_0px]'>
        <Title>
          gerenciador de tarefas 2
        </Title>
        <AddTarefa addtaf={criaTarefa}  />
        <Tarefa tarefa={tasks} marcar={checkTask} delet={btndelet} />
      </section>
    </div>
  )
}

export default App
