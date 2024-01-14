import styles from './CategoriesList.module.css'
import {categories} from '../../utils/categories.js'
import Card from '../card/Card.jsx'
import {useDispatch } from 'react-redux'
import { changeCategory } from '../../reducer/todosSlice.js'
export default function CategoriesList() {
  const dispatch= useDispatch();
  return (
    <div className={styles.list}>
        {categories.map((category)=>(
            <Card key={category.name} 
            col 
            handleClick={()=>dispatch(changeCategory(category.name))}>
              <img src={category.icon} alt='icon'/>
              <p>{category.name}</p>
            </Card>
        ))}
      
    </div>
  )
}
