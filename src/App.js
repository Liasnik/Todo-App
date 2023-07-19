import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'

export default function App() {
  const todoLists = ['1', '2', '3']

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {todoLists.map((listName) => (
              <Route
                key={listName}
                path={`/todoList${listName}`}
                element={
                  <TodoApp
                    name={`todo list ${listName}`}
                    listName={`todoList${listName}`}
                  />
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
