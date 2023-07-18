// import { useState, useRef, useEffect } from 'react'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
import { useDispatch } from 'react-redux'
import { deleteTodo, doneToggleHandler } from '../../store/TodoSlice'

function Todo({ id, todo, text, completed, listName }) {
  const dispatch = useDispatch()

  return (
    <div className={`${styles.todo} ${completed ? styles.completedTodo : ''}`}>
      {completed ? (
        <FaCheck
          className={styles.checkIcon}
          style={completed ? { color: 'green' } : ''}
          onClick={() => dispatch(doneToggleHandler({ id, listName }))}
        />
      ) : (
        <RiTodoFill
          className={styles.todoIcon}
          onClick={() => dispatch(doneToggleHandler({ id, listName }))}
        />
      )}
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => dispatch(deleteTodo({ id, listName }))}
      />
    </div>
  )
}

export default Todo
