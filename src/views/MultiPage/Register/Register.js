import React from 'react';
import './register.css'
import NavBrand from '../../../assets/images/logo.png'

const RegisterPage = props => {
  const books = props.books

  return (
    <div>
       <form class="form-signin center">
            <img class="mb-6 img-fluid" src={NavBrand} alt=""/>
            <h1 class="h3 mb-3 font-weight-normal">Silahkan Daftar</h1>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nama Depan"/>
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Nama Belakang"/>
                </div>
            </div>
            <input type="text" class="form-control " id="inputAddress" placeholder="Alamat Anda"/>
            <input type="text" class="form-control " id="inputAddress" placeholder="No. Telepon"/>
            <br/>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
            <label for="inputEmail" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Ulang Password" required/>
            <br/>
            <div class="checkbox mb-3">
                {/* <label style={{'bottom: 2px'}}>
                    <input type="checkbox" value="remember-me"> Lupakan saya
                </label> */}
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Daftar</button>
            <p class="mt-5 mb-3 text-muted">© 2019 DIlopad</p>
        </form>
      </div>
  )
}

export default RegisterPage


