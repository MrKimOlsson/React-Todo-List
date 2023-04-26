import { useState } from 'react'
import ChangeItem from './ChangeItem'

const ListItem = ({ item, removeItem, toggleComplete, changeText }) => {

  const [change, setChange] = useState(false)

  const toggleChange = () => {
    setChange(change => !change)
  }

  const changeItem = (text) => {
    changeText(item, text)
    setChange(false)
  }


  return (
    <div className='ListItem'>

      { change
      ? <ChangeItem item={item} changeItem={changeItem} />
      : <p className={`title ${item.completed && 'completed'}`} onClick={() => toggleComplete(item)} >{item.title}</p>
      }

      <div className="buttons">
        <button className='btn btn-change' onClick={toggleChange} ><i className="fa-solid fa-pen"></i></button>
        <button className='btn btn-delete' onClick={() => removeItem(item.id)}><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}

export default ListItem