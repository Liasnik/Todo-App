import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addState } from './store/TodoSlice'

export default function Menu({ todoLists, handleAddList, handleDeleteList }) {
  const dispatch = useDispatch()

  return (
    <nav className="nav">
      <button onClick={handleAddList}>Add List</button>
      <NavLink to="/Todo-App" end>
        Main
      </NavLink>
      <NavLink to="todoList2">list 2</NavLink>
      <NavLink to="todoList3">list 3</NavLink>
      {todoLists.map((listName) => (
        <span key={listName}>
          <NavLink
            to={`todoList${listName + 3}`}
            onClick={() => dispatch(addState({ listName }))}
          >
            {`list ${listName + 3}`}
          </NavLink>
          <button
            onClick={() => {
              handleDeleteList(listName)
            }}
          >
            Delete
          </button>
        </span>
      ))}
    </nav>
  )
}
