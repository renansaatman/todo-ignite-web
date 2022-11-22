import styles from './TaskList.module.css'
import Clipboard from '../assets/clipboard.svg'

import { TaskItem } from './TaskItem'

export interface TaskProps {
  id: string
  isDone: boolean
  content: string
}

interface Tasks {
  tasks: TaskProps[]
  onDelete: (taskId: string) => void
  onCheck: (taskId: string) => void
}

export function TaskList({ tasks, onDelete, onCheck } : Tasks) {
  
  function onDeleteTask(taskId: string) {
    onDelete(taskId)
  }

  function onCheckTask(taskId: string) {
    onCheck(taskId)
  }

  return (
    <div>
      {tasks.length ? 
        
        tasks.map(task => {
          return (
            <TaskItem 
              key={task.id}
              taskId={task.id}
              content={task.content}
              isDone={task.isDone}
              onDelete={onDeleteTask}
              onCheck={onCheckTask}
            />
          )
        })
        
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