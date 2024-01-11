
import styles from './Card.module.css'

export default function Card({children, col}) {
  return (
    <div className={col ? styles.cardCol : styles.card}>
      {children}
    </div>
  )
}
