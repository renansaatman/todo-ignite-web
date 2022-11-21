import styles from './TaskItem.module.css'
import { Trash, Check } from "phosphor-react";

export function TaskItem() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonAndLabel}>
        <button 
          className={true ? styles.buttonChecked : styles.buttonNotChecked}
        >
          {true ? <Check size={20}></Check> : null}
        </button>

        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <button className={styles.trashBtn}>
        <Trash size={24} />
      </button>
    </div>
  )
}