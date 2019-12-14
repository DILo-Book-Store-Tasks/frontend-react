import React, { useState } from "react";
import "./register.css";
import NavBrand from "../../../assets/images/logo.png";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { NavLink } from "react-router-dom";

const MyAlert = withReactContent(Swal);

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
    <div>
      <form className="form-signin center" onSubmit={submitRegister}>
        <img
          className="mb-6 img-fluid"
          src={NavBrand}
          alt=""
          style={{ marginBottom: "16px" }}
        />
        <div className="row form-group">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nama Depan"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nama Belakang"
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control "
            id="inputAddress"
            placeholder="Alamat Anda"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control "
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
            className="form-control"
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
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="checkbox mb-3"> </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Daftar
        </button>
        <div style={{ marginTop: "16px" }}>
          <NavLink to="/home">Kembali ke Halaman home</NavLink>
        </div>
        <p className="mt-5 mb-3 text-muted"> ©2019 DIlopad </p>
      </form>
    </div>
  );
};

export default RegisterPage;
