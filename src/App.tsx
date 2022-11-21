import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <form className={styles.todoForm}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type="submit">Criar <PlusCircle color="#F2F2F2" size={16} weight="bold"/></button>
        </form>

        <section className={styles.taskArea}>
          <header>
            <p className={styles.tasksCreatedText}>Tarefas criadas <span className={styles.counter}>0</span></p>
            <p className={styles.tasksDoneText}>Concluídas <span className={styles.counter}>0</span></p>
          </header>

          <TaskList />
        </section>
      </main>
    </div>
  )
}
