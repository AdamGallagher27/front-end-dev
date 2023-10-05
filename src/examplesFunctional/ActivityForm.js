
import {useState} from 'react'

const ActivityForm = () => {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setForm({ ...form, [name]: value })
    console.log(form)
  }


  return (
    <>
      <form>
      <label>
        UserName: 
        <input onChange={handleChange} name='username' type='text' />
      </label>
      <br />
      <label>
        Email: 
        <input onChange={handleChange} name='email' type='text' />
      </label>
      <br />

      <label>
        NUmber of Months: 
        <input onChange={handleChange} name='month' type='number' />
      </label>
      <br />

      <label>
        Insurance: 
        <input onChange={handleChange} name='checked' type='checkbox' checked={form.checked} />
      </label>
    </form>
    <p>hi, {form.username}, you have selected a {form.month} month contract {form.checked ? 'with ' : 'with out '} insurance</p>
    </>
    
  )
}

export default ActivityForm