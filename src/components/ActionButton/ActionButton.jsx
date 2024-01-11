import styles from './ActionButton.module.css'

export default function ActionButton({handleClick, icon}) {
  return (
    <div className={styles.actionButton} onClick={()=>handleClick()}>
      <img src={icon} alt='icon'/>  
    </div>
  )
}
