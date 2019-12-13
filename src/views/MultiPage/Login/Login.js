import React, {useState} from 'react'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    console.log(password);
    const request = await axios.post('http://localhost:8081/users/login', {
      email,
      password,
    })
    window.localStorage.setItem('userData', JSON.stringify(request.data))
    window.location = "http://localhost:3000/#/home";
  }

  return (
    <div>
      <br />
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage
