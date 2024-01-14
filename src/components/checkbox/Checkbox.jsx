import { useDispatch } from 'react-redux';
import { useState } from 'react'
import check from '../../assets/check.svg'
import styles from './Checkbox.module.css'
import { UpdateTodo } from '../../reducer/todosSlice.js';
export default function Checkbox({todo}) {
    const dispach = useDispatch();
    const handleCheckbox = (checked) =>{
      dispach(UpdateTodo({...todo, done: checked}));
    };
  return (
    <div className={todo.done ? styles.checkbox : styles.active}>
      <input type='checkbox' checked={todo.done} onChange={(e)=>handleCheckbox(e.target.checked)}/>
      <img className={styles.checkimg}  src={check} alt='check'/>
    </div>
  )
}
