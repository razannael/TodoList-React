import styles from './CategoriesList.module.css'
import {categories} from '../../utils/categories.js'
import Card from '../card/Card.jsx'
export default function CategoriesList() {
  return (
    <div className={styles.list}>
        {categories.map((category)=>(
            <Card key={category.name} col>
              <img src={category.icon} alt='icon'/>
              <p>{category.name}</p>
            </Card>
        ))}
      
    </div>
  )
}
