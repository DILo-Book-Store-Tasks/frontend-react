import React, {useState} from 'react'
import axios from 'axios'
import './login.css'
import NavBrand from '../../../assets/images/logo.png'

// const LoginPage = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleLogin = async () => {
//     console.log(password);
//     const request = await axios.post('http://localhost:8081/users/login', {
//       email,
//       password,
//     })
//     window.localStorage.setItem('userData', JSON.stringify(request.data))
//     window.location = "http://localhost:3000/#/home";
//   }

//   return (


//     <div>
//       <br />
//       <div>
//         <label htmlFor="email">email</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//         />
//         <br />
        
//         <label htmlFor="password">password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   )
// }


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
      <form class="text-center">
        <div class="form-signin">
            <img class="mb-4 img-fluid" src={NavBrand} alt=""/>
            <h1 class="h3 mb-3 font-weight-normal">Silahkan Masuk</h1>
            <label htmlFor="email" class="sr-only">Email address</label>
            <input  
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            class="form-control"
            placeholder="Email Anda" required autofocus/>

            <label htmlFor="password" class="sr-only">Password</label>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            class="form-control" 
            placeholder="Password Anda" required/>

            <button class="btn btn-primary btn-block btn-lg mt-5" type="submit" onClick={handleLogin}>Masuk</button>
            <p class="mt-5 mb-3 text-muted">© 2019 DIlopad</p>
          </div>
        </form>
                
     )
     }

export default LoginPage
