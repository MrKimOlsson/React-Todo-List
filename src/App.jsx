import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import TodoList from './components/TodoList';
import AddItemForm from './components/AddItemForm'
import Modal from './components/Modal';

const App = () => {

  const [showModal, setShowModal] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await res.json()

        data.sort((a, b) => a.completed - b.completed)

      setItems(data)
    }

    getTodos()

  }, [])

  const addItem = title => {
    setItems(items => [{ ...title, id: uuidv4(), completed: false}, ...items ])
  }

  const clearAll = () => {
    setItems([])
    setShowModal(false)
  }

  const removeItem = id => {
    setItems(items => items.filter(item => item.id !== id))
  }

  const changeText = (item, newText) => {
    item.title = newText
    setItems(items => [...items])
  }

  const toggleComplete = item => {

    item.completed = !item.completed

    setItems(items => {
      items.sort((a, b) => a.completed - b.completed)
      return [...items]
    })
  }

  return (
    <div className='App container'>
      <div className="card">
        <Header title="Todo List" setShowModal={setShowModal} />
        <TodoList 
        listItems={items} 
        removeItem={removeItem} 
        toggleComplete={toggleComplete}
        changeText={changeText}
        />
        <AddItemForm addItem={addItem} />
      </div>
      { showModal && <Modal clearAll={clearAll} setShowModal={setShowModal} /> }
    </div>
  )
}

export default App
