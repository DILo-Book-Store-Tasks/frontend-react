import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "../../../assets/resitdc/css/resitdc-single-page.css";
import brand from "../../../assets/images/logo.png";
import banner_login from "../../../assets/images/login_banner.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MyAlert = withReactContent(Swal);

let banner_login_image = {
	backgroundImage: `url(${banner_login})`
};

const RegisterPage = props => {
    // Getting All of User Information
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
  
    // how to submit register
    // This fungciton is for submit data to register
    function submitRegister(event) {
      axios
        .post("http://localhost:8081/users/", {
          email: email,
          password: password,
          phone: phoneNumber,
          address: address,
          last_name: lastName,
          first_name: firstName
        })
        .then(result => {
          if (result.data.success) {
            MyAlert.fire({
              icon: "success",
              title: "Berhasil",
              text: "Akunmu sudah dibuat, silahkan Login!"
            }).then(result => {
              if (result.value) {
                setEmail("");
                setPassword("");
                setPhoneNumber("");
                setAddress("");
                setLastName("");
                setFirstName("");
              }
            });
          } else {
            MyAlert.fire({
              icon: "error",
              title: "Oops ...",
              text: "Sepertinya terjadi Error, coba gunakan email yang lain ya!"
            }).then(result => {
              if (result.value) {
                setEmail("");
                setPassword("");
                setPhoneNumber("");
                setAddress("");
                setLastName("");
                setFirstName("");
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
      event.preventDefault();
    }

  return (
    <div className="container resit-container h-100">
      <div className="resit-full-height resit-row">
        <div
          className="bg-info full-height col-5 resit-login-banner"
          style={banner_login_image}
        ></div>
        <div
          className="resit-full-height col-7 resitdc-login-form"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <form className="text-center mt-5" onSubmit={submitRegister} style={{ padding: "0 12%" }}>
              
          <img className="mb-4 img-fluid" src={brand} alt="" />
              <h1 className="h3 mb-3 font-weight-normal">Masukan data anda</h1>
          <div className="row form-group">
            <div className="col">
              <input
                type="text"
                className="form-control resit-register-input"
                placeholder="Nama Depan"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                autoFocus
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control resit-register-input"
                placeholder="Nama Belakang"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
          </div>
  
          <div className="form-group">
            <input
              type="text"
              className="form-control resit-register-input"
              id="inputAddress"
              placeholder="Alamat Anda"
              onChange={e => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control resit-register-input"
              id="inputPhoneNumber"
              placeholder="No. Telepon"
              onChange={e => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control resit-register-input"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control resit-register-input"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="row">
              <div className="col-12">
                <button className="btn btn-info btn-block btn-md mt-3 resit-radius-3" type="submit">
                    Daftar
                </button>
              </div>
              <div className="col-6">
                <Link to="/home">
                    <button
                        className="btn btn-block btn-md btn-outline-info resit-outline-size-2 mt-3 resit-radius-3"
                        type="button"
                    >
                        Home
                    </button>
                </Link>
              </div>
              <div className="col-6">
                <Link to="/login">
                    <button
                        className="btn btn-block btn-md btn-outline-info resit-outline-size-2 mt-3 resit-radius-3"
                        type="button"
                    >
                        Login
                    </button>
                </Link>
              </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
