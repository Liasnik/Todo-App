import { Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TodoApp name="todo list 1" />} />
          <Route path="/todoApp2" element={<TodoApp name="todo list 2" />} />
          <Route path="/todoApp3" element={<TodoApp name="todo list 3" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
