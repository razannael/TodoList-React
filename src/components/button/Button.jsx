import styles from './Button.module.css'

export default function Button({handleAddTodo}) {
  return (
    <button onClick={()=>handleAddTodo()} className={styles.button}>
      Add
    </button>
  )
}
