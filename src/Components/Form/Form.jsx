import { useState } from 'react'
import './Form.css'

const Form = ({ data, type, saveData, dataType, display, createData }) => {
  const [formData, setFormData] = useState({ Id: data.Id })

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
      saveData(type, data.Id, formData, dataType)
  }
  let inputs = []

  for (let element in data) {
    if (element === 'Id') continue
    const key = `input-${element}`

    inputs.push(
      <label key={key}>
        <h5>{element.charAt(0).toUpperCase() + element.slice(1)}</h5>
        <input
          name={element}
          className='input-element'
          type='text'
          value={formData[element] ? formData[element] : ''}
          onChange={handleForm}
        />
      </label>
    )
  }

  return (
    <div className='form-container-1' style={{display: display ? "block" : "none"}} >
      <form className='form-container-2' onSubmit={handleSubmit}>
        {inputs}
        <button className='form-btn' >
          {type === 'edit' ? 'Save' : 'Create'}
        </button>
      </form>
    </div>
  )
}

export default Form
