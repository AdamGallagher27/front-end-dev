
import {useState} from 'react'

const LoginForm = () => {

  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('login by user : ' + userName )
  }

  const handleChange = (e) => {
    setUserName(e.target.value)
  }


  return (
    <>
    {userName}
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input type='text' onChange={handleChange} value={userName}/>
        </label>
        <input type='submit' value="Submit"/>
      </form>
    </>
  )
}

export default LoginForm