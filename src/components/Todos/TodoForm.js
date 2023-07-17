import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { addTodoHandler } from '../../store/TodoSlice'

export default function TodoForm({ scrollDown }) {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addTodoHandler({ text }))
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addSubmitHandler}>
        <input
          placeholder="Enter new todo"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type="submit" title="Submit" onClick={scrollDown}>
          Submit
        </Button>
      </form>
    </div>
  )
}

// return (
//   <div className="">
//     <form onChange={addTextHandler}>
//       <input type="text" placeholder="Enter new todo" value={text} />
//       <button type="reset" onClick={() => addTodo(text)}>
//         Submit
//       </button>
//     </form>
//   </div>
// )
