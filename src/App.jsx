import { Container , Title , Typography} from './components'
import './App.css'
import TodoList from './components/todoList/TodoList.jsx'

function App() {


  return (
    <Container><Title/> 
    <Typography fontSize={18} bold marginTop={"25px"}>List of Tasks</Typography>
    <TodoList/>
    </Container>
  )
}

export default App
