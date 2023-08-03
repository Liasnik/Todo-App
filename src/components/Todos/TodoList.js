import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ listName, todos }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} listName={listName} />
      ))}
    </div>
  )
}
