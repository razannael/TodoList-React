import Card from "../card/Card.jsx"
import TodoItem from "../todoItem/TodoItem.jsx"
import styles from "./TodoList.module.css"
export default function TodoList() {
  return (
    <div className={styles.todolist}>
      {[0,1,2,3].map(()=> (<Card>
        <TodoItem/>
      </Card>))}
    </div>
  )
}
