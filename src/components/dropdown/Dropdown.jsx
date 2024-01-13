import styles from './Dropdown.module.css'
import arrow from '../../assets/arrow.svg'
import {categories} from '../../utils/categories.js'
import { useState } from 'react'
export default function Dropdown({setTaskData , taskData}) {
    const [openedDropdown, setOpenedDropdown] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader}
       onClick={()=>setOpenedDropdown(!openedDropdown)}>
        <p>{taskData.category ? taskData.category : "select a category" }</p> <img src={arrow} alt='arrow'/>
     </div>
     {openedDropdown && (
        <div className={styles.dropdownContent}>
           {categories.map((category)=>(
             <p 
             key={category.name} 
             onClick={(e)=>{
              setTaskData({...taskData, category: e.target.innerHTML});
              setOpenedDropdown(false);
           }}>
                {category.name}</p>
           ))}
        </div>
     )}
    </div>
  );
}
