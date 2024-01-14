import { Container , Form, Title , Typography} from './components'
import './App.css'
import TodoList from './components/todoList/TodoList.jsx'
import Card from './components/card/Card.jsx'
import ProgressBar from './components/progressBar/ProgressBar.jsx'
import CategoriesList from './components/categoriesList/CategoriesList.jsx'
import { useSelector } from 'react-redux'

function App() {
  const { category} = useSelector((state) => state.todos);
  return (
    <Container >
    <Title/> 
   <Typography fontSize={16} bold marginTop={"15px"} marginBottom={"10px"}>List of <span style={{textTransform : "capitalize"}}>{category}</span> Tasks</Typography>

    <Container flexrow>
    <TodoList/>
    <Container flexcol>
    <Card col>
    <Typography fontSize={18} bold marginTop={"5px"}>Your Progress</Typography>
    <ProgressBar />
    </Card>
     <Form/>
    </Container>
    </Container>
    <CategoriesList/>
    </Container>
  )
}

export default App
