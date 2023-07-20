import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

function storageTodo(name) {
  const savedTodos = localStorage.getItem(name)
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList1: storageTodo('todoList1'),
    todoList2: storageTodo('todoList2'),
    todoList3: storageTodo('todoList3'),
    todoList4: storageTodo('todoList4'),
  },
  reducers: {
    addState(state, action) {
      const { listName } = action.payload

      if (!state[listName]) {
        state[`todoList${listName + 3}`] = storageTodo(
          `todoList${listName + 3}`
        )
      }
    },

    addTodoHandler(state, action) {
      const { text, listName } = action.payload

      // if (!state[listName]) {
      //   state[listName] = []
      // }

      state[listName].push({
        id: uuidv4(),
        text,
        completed: false,
      })
    },

    deleteTodo(state, action) {
      const { id, listName } = action.payload
      state[listName] = state[listName].filter((todo) => todo.id !== id)
    },

    doneToggleHandler(state, action) {
      const { id, listName } = action.payload
      const todoFind = state[listName].find((todo) => todo.id === id)
      todoFind.completed = !todoFind.completed
    },

    clearCompleted(state, action) {
      const { listName } = action.payload
      state[listName] = state[listName].filter((todo) => !todo.completed)
    },

    resetTodos(state, action) {
      const { listName } = action.payload
      state[listName] = []
    },
  },
})

export const {
  addState,
  addTodoHandler,
  deleteTodo,
  doneToggleHandler,
  clearCompleted,
  resetTodos,
} = TodoSlice.actions

export default TodoSlice.reducer
