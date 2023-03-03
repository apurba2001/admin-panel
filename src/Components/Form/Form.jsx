import { useState, useEffect, useContext } from 'react'
import './Form.css'

import { ThemeContext } from '../Contexts/Context'

const Form = ({ data, saveData, display, formType, setDisplay }) => {
  const [formData, setFormData] = useState({})
  const theme = useContext(ThemeContext)

  useEffect(() => {
    setFormData(data)
  }, [data])

  const handleForm = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    saveData(formData, formType, formData.Id)
    setDisplay(false)
  }

  const inputs = Object.entries(formData).map(([key, value]) => {
    if (key === 'Id') return null
    const inputKey = `input-${key}`
    return (
      <label key={inputKey}>
        <h5>{key.charAt(0).toUpperCase() + key.slice(1)}</h5>
        <input
          name={key}
          className='input-element'
          type='text'
          value={value ? value : ''}
          onChange={handleForm}
        />
      </label>
    )
  })

  return (
    <div className={`form-container-1  ${theme ? '' : 'dark'}`} style={{ display: display ? 'block' : 'none' }}>
      <form className={`form-container-2  ${theme ? '' : 'dark'}`} onSubmit={handleSubmit}>
        {inputs}
        <button className='form-btn'>{formType === 'edit' ? 'Save' : 'Create'}</button>
      </form>
    </div>
  )
}

export default Form
