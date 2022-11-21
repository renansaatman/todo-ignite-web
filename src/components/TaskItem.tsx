import styles from './TaskItem.module.css'
import { Trash, Check } from "phosphor-react";

export function TaskItem() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonAndLabel}>
        <button 
          className={false ? styles.buttonChecked : styles.buttonNotChecked}
        >
          {false ? <Check size={24}></Check> : null}
        </button>

        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <button className={styles.trashBtn}>
        <Trash size={24} color='#808080'/>
      </button>
    </div>
  )
}