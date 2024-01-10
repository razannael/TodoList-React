import Card from "../card/Card.jsx"
import styles from "./TodoList.module.css"
export default function TodoList() {
  return (
    <div className={styles.todolist}>
      {[0,1,2,3].map((item)=> (<Card/>))}
    </div>
  )
}
