import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addState } from './store/TodoSlice'

export default function Menu({ todoLists, handleAddList, handleDeleteList }) {
  const dispatch = useDispatch()

  return (
    <nav className="nav">
      {/* <button onClick={handleAddList}>Add List</button> */}
      <NavLink to="/Todo-App" end>
        Home
      </NavLink>
      {todoLists.map((listName) => (
        <span
          key={listName}
          style={{
            backgroundColor: 'rgb(48, 104, 104)',
            margin: '2px',
            padding: '2px',
            overflow: 'auto',
          }}
        >
          <NavLink
            to={listName}
            onClick={() => dispatch(addState({ listName }))}
          >
            {listName}
          </NavLink>

          <button
            className="buttonMenu"
            onClick={() => {
              handleDeleteList(listName)
            }}
          >
            &times;
          </button>
        </span>
      ))}
    </nav>
  )
}
