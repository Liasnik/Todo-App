import { useRef } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodosActions from './TodosActions'
import { useSelector } from 'react-redux'

function storageTodo(name) {
  const savedTodos = localStorage.getItem(name)
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

export default function TodoApp({ name, listName }) {
  const todos = useSelector(
    (state) => state.todos[listName] ?? storageTodo(listName) ?? []
  )
  const downRef = useRef(null)

  localStorage.setItem(listName, JSON.stringify(todos))

  const scrollDown = () => {
    downRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  const countDone = todos.filter((todo) => todo.completed === true).length

  return (
    <div>
      <h1>{name}</h1>
      <div className="header">
        <TodoForm scrollDown={scrollDown} listName={listName} />
        {!!countDone && (
          <h3>
            Completed {countDone}/{todos.length}{' '}
            {countDone > 1 ? 'todos' : 'todo'}
          </h3>
        )}
      </div>
      <div className="body">
        <TodoList listName={listName.toString()} todos={todos} />
        <div ref={downRef}>
          {!!todos.length && (
            <TodosActions
              countDone={!!countDone} // convert to boolean
              listName={listName}
            />
          )}
        </div>
      </div>
    </div>
  )
}
