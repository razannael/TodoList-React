import Typography from '../typography/Typography.jsx'
import styles from './Card.module.css'
import Checkbox from '../checkbox/Checkbox.jsx'
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.taskName}>
      <Checkbox/>
      <Typography fontSize={14} >Do the dishes</Typography>
      </div>
      <div className={styles.actionButtons}>
      <button>+</button>
      <button>+</button>
      </div>
    </div>
  )
}
