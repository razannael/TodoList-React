import { useSelector } from 'react-redux'
import styles from './ProgressBar.module.css'
export default function ProgressBar() {
  const {todos} = useSelector((state)=> state.todos);
  let doneTodos = todos.filter((todo)=> todo.done);
  const doneTodosPercentage = Math.round((doneTodos.length * 100)/todos.length);
  return (
    <div className={styles.ProgressBar}>
      <p className={styles.progressValue} >{doneTodosPercentage + "%"}</p>
      <div className={styles.progress} style={{width: `${doneTodosPercentage}%`}}></div>
    </div>
  )
}
