import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'

import { TaskItem } from './TaskItem'

export function TaskList() {
  return (
    <div>
      {true ? 
        <div>
          <TaskItem />
          <TaskItem />
        </div>
        
        :
      
        <div className={styles.noTasksContainer}>
          <img src={Clipboard} alt="Não possui tarefas" />
          <h3>Você ainda não tem tarefas cadastradas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      }
    </div>
  )
}