import { useSelector } from "react-redux";
 export  const useFilterTodos = ()=>{
    const {todos, category} = useSelector((state) => state.todos);
    const displayedTodos = todos.filter((todo)=>todo.category === category);
    return displayedTodos;
};
