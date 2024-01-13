import { Container , Form, Title , Typography} from './components'
import './App.css'
import TodoList from './components/todoList/TodoList.jsx'
import Card from './components/card/Card.jsx'
import ProgressBar from './components/progressBar/ProgressBar.jsx'
import CategoriesList from './components/categoriesList/CategoriesList.jsx'

function App() {
  return (
    <Container >
    <Title/> 
   <Typography fontSize={18} bold marginTop={"25px"} marginBottom={"17px"}>List of Tasks</Typography>

    <Container flexrow>
    <TodoList/>
    <Container flexcol>
    <Card col>
    <Typography fontSize={18} bold marginTop={"25px"}>List of Tasks</Typography>
    <ProgressBar progress={"60%"}/>
    </Card>
     <Form/>
    </Container>
    </Container>
    <CategoriesList/>
    </Container>
  )
}

export default App
