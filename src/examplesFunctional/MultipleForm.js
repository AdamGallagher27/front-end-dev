
import { useState } from 'react'


const MultipleForm = () => {

  const [form, setForm] = useState({})

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setForm({ ...form, [name]: value })

    console.log(form)
  }



  return (
    <form>
      <label>
        Email:
        <input type='text'
          name='email'
          value={form.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password
        <input type='text'
          name='password'
          value={form.password}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        I wish to recieve the weekly newsletter
        <input
          type='checkbox'
          name='checkbox'
          checked={form.checked}
          onChange={handleInputChange}

        />
      </label>
    </form>
  )
}

export default MultipleForm