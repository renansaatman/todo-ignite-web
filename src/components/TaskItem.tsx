import styles from './TaskItem.module.css'
import { Trash, Check } from "phosphor-react";

interface TaskItemProps {
  taskId: string
  content: string
  isDone: boolean
  onDelete: (taskId: string) => void
  onCheck: (taskId: string) => void
}

export function TaskItem({ taskId, content, isDone, onDelete, onCheck } : TaskItemProps) {
  
  function handleDeleteTask() {
    onDelete(taskId)
  }

  function handleCheckTask() {
    onCheck(taskId)
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.buttonAndLabel}>
        <button 
          onClick={handleCheckTask}
          className={isDone ? styles.buttonChecked : styles.buttonNotChecked}
        >
          {isDone ? <Check size={20}></Check> : null}
        </button>

        <p className={isDone ? styles.contentChecked : styles.normalContent}>{content}</p>
      </div>
      <button 
        className={styles.trashBtn}
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}