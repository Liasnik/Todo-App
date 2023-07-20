import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import { useState } from 'react'

const loudLists = () => {
  const savedLists = localStorage.getItem('todoLists')
  if (savedLists) {
    return JSON.parse(savedLists)
  }
  return []
}

export default function App() {
  const [text, setText] = useState('')
  const [todoLists, setTodoLists] = useState(loudLists())

  localStorage.setItem('todoLists', JSON.stringify(todoLists))

  console.log(text)
  console.log(todoLists)

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleAddList = () => {
    setTodoLists([...todoLists, text])
    setText('')
  }

  // const handleAddList = () => {
  //   // const newListName = `todosList${todoLists.length + 1}`
  //   setTodoLists([...todoLists, todoLists.length + 1])
  // }

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

    localStorage.removeItem(listName)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <input
          className="input"
          type="text"
          value={text}
          onChange={handleText}
        />
        <button className="button" onClick={handleAddList}>
          Add List
        </button>
        <Routes>
          <Route
            path="/Todo-App"
            element={
              <MainLayout
                todoLists={todoLists}
                // handleAddList={handleAddList}
                handleDeleteList={handleDeleteList}
              />
            }
          >
            <Route
              index
              element={<TodoApp name="Home" listName="todoList1" />}
            />
            {todoLists.map((listName) => (
              <Route
                key={listName}
                path={listName}
                element={<TodoApp name={listName} listName={listName} />}
              />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
