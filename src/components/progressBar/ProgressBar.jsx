import styles from './ProgressBar.module.css'
export default function ProgressBar({progress}) {
  return (

    <div className={styles.ProgressBar}>
      <p className={styles.progressValue}>{progress}</p>
      <div className={styles.progress}></div>
    </div>
  )
}
