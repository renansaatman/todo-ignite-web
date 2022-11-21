import styles from './Header.module.css'
import LogoImg from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={LogoImg} alt="Todo Logo" />
    </header>
  )
}