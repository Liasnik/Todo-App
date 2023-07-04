import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function storageTodo() {
  const savedTodos = localStorage.getItem('todos3')
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

export default function App() {
  const [todos, setTodos] = useState(storageTodo())
  const downRef = useRef(null)

  localStorage.setItem('todos3', JSON.stringify(todos))

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      done: false,
    }
    flushSync(() => setTodos([...todos, newTodo]))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const doneToggleHendler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    )
  }

  const resetTodos = () => setTodos([])

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done))
  }

  const scrollDown = () => {
    downRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  const countDone = todos.filter((todo) => todo.done === true).length
  return (
    <div className="App">
      <h1>todo list </h1>
      <div className="header">
        <TodoForm addTodo={addTodoHandler} scrollDown={scrollDown} />
        {!!countDone && (
          <h3>
            Completed {countDone} {countDone > 1 ? 'todos' : 'todo'}
          </h3>
        )}
      </div>
      <div className="body">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          doneHendler={doneToggleHendler}
        />
        <div ref={downRef}>
          {!!todos.length && (
            <TodosActions
              resetTodos={resetTodos}
              clearCompleted={clearCompleted}
              todos={todos}
              countDone={!!countDone} // convert to boolean
            />
          )}
        </div>
      </div>
    </div>
  )
}
