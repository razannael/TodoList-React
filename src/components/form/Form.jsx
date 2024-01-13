import Typography from '../typography/Typography.jsx'
import styles from './Form.module.css'
import Card from '../card/Card.jsx'
import Button from '../button/Button.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { useState } from 'react'
export default function Form() {
  const [taskData,setTaskData]= useState({name:"" , category:""});
  return (
    <div className={styles.form}>
       <Typography fontSize={17} bold>
        Add New Task
       </Typography>
       <Card col>
      <div className={styles.inputContainer}>
      <Typography fontSize={15} >
        Task Name:
       </Typography>
       <input type='text' onChange={(e)=>setTaskData({...taskData, name:e.target.value})}/>
      </div>
      <div className={styles.inputContainer}>
      <Typography fontSize={15} >
        Category: 
       </Typography>
       <Dropdown taskData={taskData} setTaskData={setTaskData}/>
      </div>
       <Button/>
       </Card>
    </div>
  )
}
