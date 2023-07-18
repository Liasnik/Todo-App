import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="nav">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/todoApp2">list 2</NavLink>
      <NavLink to="/todoApp3">list 3</NavLink>
    </nav>
  )
}
