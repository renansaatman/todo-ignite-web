import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { TaskList, TaskProps } from './components/TaskList'
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  const tasksTotal = tasks.length
  const tasksCheckedTotal = tasks.filter(task => task.isDone === true).length

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Campo obrigatório");
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      isDone: false,
      content: newTaskText,
    }

    setTasks([...tasks, newTask])
    setNewTaskText('')
    console.log(tasks)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
    console.log(event.target.value)
  }

  function deleteTask(taskId: string) {
    const newTasksArray = tasks.filter((task: TaskProps) => task.id !== taskId);

    setTasks(newTasksArray);
  }

  function checkTask(taskId: string) {
    const tasksWithSomeChecked = tasks.map(task => {
      if(taskId === task.id){
        task.isDone = !task.isDone
      }
      return task
    })

    setTasks(tasksWithSomeChecked)
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form className={styles.todoForm} onSubmit={handleCreateNewTask}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskChange}
            onInvalid={handleInvalidTask}
            
            required
          />
          <button type="submit">Criar <PlusCircle color="#F2F2F2" size={16} weight="bold"/></button>
        </form>

        <section className={styles.taskArea}>
          <header>
            <p className={styles.tasksCreatedText}>Tarefas criadas <span className={styles.counter}>{tasksTotal}</span></p>
            <p className={styles.tasksDoneText}>Concluídas <span className={styles.counter}>{tasksCheckedTotal} de {tasksTotal}</span></p>
          </header>

          <TaskList 
            tasks={tasks}
            onDelete={deleteTask}
            onCheck={checkTask}
          />
        </section>
      </main>
    </div>
  )
}
