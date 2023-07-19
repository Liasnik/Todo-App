import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="nav">
      <NavLink to="/todoList1">Main</NavLink>
      <NavLink to="/todoList2">list 2</NavLink>
      <NavLink to="/todoList3">list 3</NavLink>
    </nav>
  )
}
