import { useState } from 'react'

const AddItemForm = ({ addItem }) => {

  const [formData, setFormData] = useState({
    title: ''
  })

  const handleChange = e => {
    setFormData(formData => {
      return {
        ...formData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newItem = {
      title: formData.title
    }

    addItem(newItem)
    setFormData({
        title: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='AddItemForm'>
      <div className="form-group">
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <button>ADD</button>
    </form>
  )
}

export default AddItemForm