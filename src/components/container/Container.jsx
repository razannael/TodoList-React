import React from 'react'
import styles from './Container.module.css'
export default function Container({children ,flexrow ,flexcol}) {
  return (
    <div className={flexrow ? styles.flexContainer : flexcol? styles.flexcolContainer: styles.container}>
      {children}
    </div>
  )
}
