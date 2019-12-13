import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../../assets/resitdc/css/resitdc-single-page.css'
import brand from '../../../assets/images/logo.png'
import banner_login from "../../../assets/images/login_banner.png";
let banner_login_image = {
  backgroundImage: "url('/static/media/login_banner.83ce22a5.png')"
};
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
    <div className="container resit-container h-100">
        <div className="resit-full-height resit-row">
            <div className="bg-info full-height col-7 resit-login-banner" style={banner_login_image}>
            </div>
            <div className="resit-full-height col-5 resitdc-login-form" style={{backgroundColor: "#f5f5f5"}}>
            <form className="text-center mt-5" style={{padding: "0 12%"}}>
                <div className="form-signin">
                <img className="mb-4 img-fluid" src={brand} alt=""/>
                <h1 className="h3 mb-3 font-weight-normal">Silahkan Masuk</h1>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                type="text"
                id="username"
                className="form-control resit-login-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Username"
                required autoFocus/>

                <label htmlFor="password" className="sr-only">Password</label>
                <input
                type="password"
                id="password"
                className="form-control resit-login-input"
                value={password}
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password"
                required/>

                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-info btn-block btn-lg mt-5 resit-radius-3" type="submit" onClick={handleLogin}>Masuk</button>
                    </div>
                    <div className="col-6">
                        <Link to="/home">
                            <button className="btn btn-block btn-lg btn-outline-info resit-outline-size-2 mt-3 resit-radius-3" type="button">Home</button>
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/register">
                            <button className="btn btn-block btn-lg btn-outline-info resit-outline-size-2 mt-3 resit-radius-3" type="button">Daftar</button>
                        </Link>
                    </div>
                </div>
                <p className="mt-5 mb-3 text-muted">© 2019 Dilo x Cilsy</p>
                </div>
            </form>
            </div>
        </div>
    </div>     
     )
     }

export default LoginPage
