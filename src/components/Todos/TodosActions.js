import { useState } from 'react'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import Button from '../UI/Button'
import styles from './TodosActions.modules.css'
import { clearCompleted, resetTodos } from '../../store/TodoSlice'

function TodosActions({ countDone }) {
  const [isResetHovered, setIsResetHovered] = useState(false)
  const [isClearHovered, setIsClearHovered] = useState(false)

  const dispatch = useDispatch()

  const handleMouseEnter = (type) => {
    if (type === 'reset') {
      setIsResetHovered(true)
    } else if (type === 'clear') {
      setIsClearHovered(true)
    }
  }

  const handleMouseLeave = (type) => {
    if (type === 'reset') {
      setIsResetHovered(false)
    } else if (type === 'clear') {
      setIsClearHovered(false)
    }
  }

  const resetStyle = {
    color: isResetHovered && 'rgb(218, 13, 13)',
    transition: 'color 0.3s ease',
  }

  const clearStyle = {
    color: isClearHovered && 'rgb(218, 13, 13)',
    transition: 'color 0.3s ease',
  }

  const styleDisable = !countDone
    ? { backgroundColor: 'lightgrey', cursor: 'default' }
    : {}

  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={() => dispatch(resetTodos())}
        onMouseEnter={() => handleMouseEnter('reset')}
        onMouseLeave={() => handleMouseLeave('reset')}
      >
        <RiRefreshLine style={resetStyle} />
      </Button>
      <Button
        disabled={!countDone}
        title="Clear Completed Todos"
        onClick={() => dispatch(clearCompleted())}
        style={styleDisable}
        onMouseEnter={() => handleMouseEnter('clear')}
        onMouseLeave={() => handleMouseLeave('clear')}
      >
        <RiDeleteBin2Line style={clearStyle} />
      </Button>
    </div>
  )
}

export default TodosActions
