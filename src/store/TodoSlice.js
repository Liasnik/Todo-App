import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

function storageTodo() {
  const savedTodos = localStorage.getItem('todos3')
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: storageTodo(),
  },
  reducers: {
    addTodoHandler(state, action) {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        completed: false,
      })
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    doneToggleHandler(state, action) {
      const todoFind = state.todos.find((todo) => todo.id === action.payload.id)
      todoFind.completed = !todoFind.completed
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed)
    },
    resetTodos(state) {
      state.todos = []
    },
  },
})

export const {
  addTodoHandler,
  deleteTodo,
  doneToggleHandler,
  clearCompleted,
  resetTodos,
} = TodoSlice.actions

export default TodoSlice.reducer
