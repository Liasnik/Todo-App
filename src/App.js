import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Todo-App" element={<MainLayout />}>
            <Route
              index
              element={<TodoApp name="todo list 1" listName="todoList1" />}
            />
            <Route
              path="todoList2"
              element={<TodoApp name="todo list 2" listName="todoList2" />}
            />
            <Route
              path="todoList3"
              element={<TodoApp name="todo list 3" listName="todoList3" />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
