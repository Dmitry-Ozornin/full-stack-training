import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toogleToDoComplite(state, action) {
      const toogleToDo = state.todos.find((todo) => (todo.id === action.payload.id));
      toogleToDo.completed = !toogleToDo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toogleToDoComplite } = todoSlice.actions;
export default todoSlice.reducer;
