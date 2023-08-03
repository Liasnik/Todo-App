import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoApp from './components/Todos/TodoApp'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import { useState } from 'react'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import Date from './components/Date/NowDate'
import AddListForm from './components/ListAddForm/AddListForm'

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

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleAddList = () => {
    setTodoLists([...todoLists, text])
    setText('')
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
    // localStorage.removeItem(listName)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Date />
          <AddListForm
            text={text}
            handleText={handleText}
            handleAddList={handleAddList}
          />
        </div>
        <CountdownTimer />
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
