import { useRef } from 'react'
// import { flushSync } from 'react-dom'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import { useSelector } from 'react-redux'

export default function App() {
  const todos = useSelector((state) => state.todos.todos)
  const downRef = useRef(null)

  localStorage.setItem('todos3', JSON.stringify(todos))

  const scrollDown = () => {
    downRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  const countDone = todos.filter((todo) => todo.completed === true).length

  return (
    <div className="App">
      <h1>todo list </h1>
      <div className="header">
        <TodoForm scrollDown={scrollDown} />
        {!!countDone && (
          <h3>
            Completed {countDone}/{todos.length}{' '}
            {countDone > 1 ? 'todos' : 'todo'}
          </h3>
        )}
      </div>
      <div className="body">
        <TodoList />
        <div ref={downRef}>
          {!!todos.length && (
            <TodosActions
              countDone={!!countDone} // convert to boolean
            />
          )}
        </div>
      </div>
    </div>
  )
}
