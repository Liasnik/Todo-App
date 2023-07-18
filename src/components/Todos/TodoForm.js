import { useState, useRef } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { addTodoHandler } from '../../store/TodoSlice'

export default function TodoForm({ scrollDown }) {
  const [text, setText] = useState('')
  const refInput = useRef(null)
  const dispatch = useDispatch()

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addTodoHandler({ text }))
    setText('')
    refInput.current.focus()
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addSubmitHandler}>
        <input
          ref={refInput}
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
