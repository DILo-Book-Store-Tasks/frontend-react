import React, { Component, useState } from "react";
import axios from "axios";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async () => {
  const request = await axios.post("http://localhost:8081/users/login", {
    email,
    password
  });
  window.localStorage.setItem("userData", JSON.stringify(request.data));
};
export default class Login extends Component {
  render() {
    return (
      <div className="card">
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
          <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
