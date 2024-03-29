import React from 'react'

const Header = ({ title, setShowModal }) => {

  return (
    <div className='Header'>
      <h1>{title}</h1>
      <button className='clear-btn' onClick={() => setShowModal(true)}>Delete list</button>
    </div>
  )
}

export default Header