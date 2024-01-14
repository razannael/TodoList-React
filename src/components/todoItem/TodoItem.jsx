import Typography from '../typography/Typography.jsx'
import styles from './TodoItem.module.css'
import Checkbox from '../checkbox/Checkbox.jsx'
import ActionButton from '../ActionButton/ActionButton.jsx'
import trash from '../../assets/delete.svg'
import pencil from '../../assets/edit-svgrepo-com.svg'
import check from '../../assets/check.svg'
import { deleteTodo, UpdateTodo } from '../../reducer/todosSlice.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export default function TodoItem({todo}) {
  const [editingMode, setEditingMode]= useState(false);
  const [newTodo, setNewTodo]= useState(todo);
  const dispach = useDispatch();
  const handleEdit = () =>{
    dispach(UpdateTodo(newTodo));
    setEditingMode(false);
  };
  return (
    <>
      <div className={styles.taskName}>
      <Checkbox todo ={todo}/>
      {editingMode ? (<input type='text' onChange={(e)=>setNewTodo({...todo, name: e.target.value})}/>) : <Typography fontSize={17} > <span>{todo.name}</span></Typography>}
      </div>
      <div className={styles.actionButtons}>
      {editingMode ?<ActionButton icon={check} handleClick={()=>handleEdit()}/> :<ActionButton icon={pencil} handleClick={()=>setEditingMode(true)}/> }
      <ActionButton icon={trash} handleClick={()=>dispach(deleteTodo(todo.id))}/>
      </div>
    </>
  )
}
