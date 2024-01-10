import styles from './Title.module.css'
import Typography from '../typography/Typography.jsx'

export default function Title() {
  return (
    <div className={styles.titleContainer}>
      <Typography fontSize={22} bold>My ToDo List</Typography>
    </div>
  )
}
