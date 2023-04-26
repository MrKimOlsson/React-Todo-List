import React from 'react'
import ListItem from './ListItem'

const TodoList = ({ listItems, removeItem, toggleComplete, changeText, }) => {
  return (
    <div className='TodoList'>
      { 
        listItems.map(item => (
          <ListItem 
          key={item.id} 
          item={item} 
          removeItem={removeItem} 
          toggleComplete={toggleComplete} 
          changeText={changeText}
          />
        ))
      }
    </div>
  )
}

export default TodoList