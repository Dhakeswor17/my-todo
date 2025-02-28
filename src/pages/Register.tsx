import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleRegister = () => {
    if (username.trim()) {
      localStorage.setItem('todoUser', username)
      alert(`Welcome ${username}, your todos will be saved!`)
      navigate('/Todo')
    } else {
      alert('Please enter a valid username')
    }
  }

  return (
    <div>
      <h2>Register to Save Todo History</h2>
      <input
        type='text'
        placeholder='Enter your name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p>Don't want to register? <a href='/Todo'>Continue without saving</a></p>
    </div>
  )
}

export default Register
