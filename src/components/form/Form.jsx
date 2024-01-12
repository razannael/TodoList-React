import Typography from '../typography/Typography.jsx'
import styles from './Form.module.css'
import Card from '../card/Card.jsx'
import Button from '../button/Button.jsx'
export default function Form() {
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
       <input type='text'/>
      </div>
      <div className={styles.inputContainer}>
      <Typography fontSize={15} >
        Category: 
       </Typography>
       <input type='text'/>
      </div>
       <Button/>
       </Card>
    </div>
  )
}
