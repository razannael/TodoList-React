import { Container , Title , Typography} from './components'
import './App.css'
import TodoList from './components/todoList/TodoList.jsx'
import Card from './components/card/Card.jsx'
import ProgressBar from './components/progressBar/ProgressBar.jsx'

function App() {
  return (
    <Container >
    <Title/> 
   <Typography fontSize={18} bold marginTop={"25px"} marginBottom={"17px"}>List of Tasks</Typography>
    <Container flex>
    <TodoList/>
    <Card col>
    <Typography fontSize={18} bold marginTop={"25px"}>List of Tasks</Typography>
    <ProgressBar progress={"60%"}/>
    </Card>
    </Container>
    </Container>
  )
}

export default App
