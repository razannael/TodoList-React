import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: 1, name: "Do the dishes" , category: "cleaning", done: false}],
  category: "cleaning",
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos= state.todos.filter((todo)=> todo.id!== action.payload);
    },
    UpdateTodo: (state, action) => {
        state.todos= state.todos.filter((todo)=> todo.id!== action.payload.id);
        state.todos= [...state.todos, action.payload]
    },
    addTodo: (state, action) => {
      state.todos= [...state.todos, action.payload];
    },
    changeCategory: (state, action)=>{
        state.category= action.payload;
    },
  },
})

export const { addTodo, UpdateTodo, deleteTodo, changeCategory} = todosSlice.actions
export default todosSlice.reducer;