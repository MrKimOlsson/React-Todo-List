import React from 'react'

const Modal = ({ clearAll, setShowModal }) => {
  return (
    <div className='modal-bg'>
      <div className="modal">
        <h2>Warning</h2>
        <p>Are you sure that you want to delete the list?</p>
        <div className='modal-buttons'>
          <button className='y-btn' onClick={() => clearAll()}>Yes</button>
          <button className='n-btn' onClick={() => setShowModal(false)}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Modal