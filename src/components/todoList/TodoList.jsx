import Card from "../card/Card.jsx"
import TodoItem from "../todoItem/TodoItem.jsx"
import Typography from "../typography/Typography.jsx";
import styles from "./TodoList.module.css"
import { useFilterTodos } from "../../hooks/useFilterTodos.jsx";
export default function TodoList() {
 const displayedTodos = useFilterTodos();
  return (
    <div className={styles.todolist}>
      {displayedTodos.length >0 ? (
        displayedTodos.map((todo)=> (<Card key={todo.id}>
          <TodoItem todo={todo}/>
        </Card>))
      ): <Typography>No Tasks in This Category</Typography>}
    </div>
  )
}
