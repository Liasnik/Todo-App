import { Outlet } from 'react-router-dom'
import Menu from '../Menu'

export default function MainLayout({
  todoLists,
  handleAddList,
  handleDeleteList,
}) {
  return (
    <>
      <Menu
        todoLists={todoLists}
        handleAddList={handleAddList}
        handleDeleteList={handleDeleteList}
      />
      <Outlet />
    </>
  )
}
