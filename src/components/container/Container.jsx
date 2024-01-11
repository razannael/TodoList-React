import React from 'react'
import styles from './Container.module.css'
export default function Container({children ,flex}) {
  return (
    <div className={flex ? styles.flexContainer : styles.container}>
      {children}
    </div>
  )
}
