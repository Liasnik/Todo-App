import { useRef } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodosActions from './TodosActions'
import { useSelector } from 'react-redux'

export default function TodoApp2() {
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
    <div>
      <h1>todo list 2</h1>
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
