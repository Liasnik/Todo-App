import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import { useState } from 'react'

export default function App() {
  const [todoLists, setTodoLists] = useState([])

  console.log(todoLists)

  const handleAddList = () => {
    // const newListName = `todosList${todoLists.length + 1}`
    setTodoLists([...todoLists, todoLists.length + 1])
  }

  const handleDeleteList = (listName) => {
    // Создаём копию списка всех списков дел
    const updatedTodoLists = [...todoLists]

    // Находим индекс списка дел, который нужно удалить
    const index = updatedTodoLists.indexOf(listName)

    // Если список дел найден, удаляем его из массива
    if (index !== -1) {
      updatedTodoLists.splice(index, 1)
      setTodoLists(updatedTodoLists)
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/Todo-App"
            element={
              <MainLayout
                todoLists={todoLists}
                handleAddList={handleAddList}
                handleDeleteList={handleDeleteList}
              />
            }
          >
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
              element={<TodoApp name="todoList 3" listName="todoList3" />}
            />
            {todoLists.map((listName) => (
              <Route
                key={listName}
                path={`todoList${listName + 3}`}
                element={
                  <TodoApp
                    name={`todo list ${listName + 3}`}
                    listName={`todoList${listName + 3}`}
                  />
                }
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
