import Typography from '../typography/Typography.jsx'
import styles from './TodoItem.module.css'
import Checkbox from '../checkbox/Checkbox.jsx'
import ActionButton from '../ActionButton/ActionButton.jsx'
import trash from '../../assets/delete.svg'
import pencil from '../../assets/edit-svgrepo-com.svg'

export default function TodoItem({todo}) {
  return (
    <>
      <div className={styles.taskName}>
      <Checkbox todo ={todo}/>
      <Typography fontSize={17} > <span>{todo.name}</span></Typography>
      </div>
      <div className={styles.actionButtons}>
      <ActionButton icon={pencil} handleClick={()=>null}/>
      <ActionButton icon={trash} handleClick={()=>null}/>
      </div>
    </>
  )
}
