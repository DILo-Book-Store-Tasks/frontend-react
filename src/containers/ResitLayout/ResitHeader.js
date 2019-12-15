/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import NavBrand from "../../assets/images/logo.png";
const propTypes = {
  children: PropTypes.node
};
const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};

  // async function logoutkeun(){
  //   console.log("masuk")
  //     await axios({
  //     method: 'post',
  //     url: 'http://localhost:8081/users/logout',
  //     responseType: 'stream',
  //     headers: {
  //       "Content-Type": "application/json",
  //       'Accept' : 'application/json',
  //       'Authorization' : 'Bearer ' + userData.token
  //     }
  //   })
  //   window.location = "http://localhost:3000/#/home";
  // }
function navlogin(){
  var login = (
      <React.Fragment>
      <li className="nav-item">
        <NavLink
          to="/login"
          className="btn resit-radius-2 resit-btn-navbar btn-outline-info resit-outline-size-2"
        >
          Masuk
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/register"
          className="btn resit-radius-2 resit-btn-navbar btn-outline-info resit-outline-size-2"
        >
          Daftar
        </NavLink>
      </li>
      </React.Fragment>
      );
    var logout = (<li className="nav-item">
        <Link
          className="btn resit-radius-2 resit-btn-navbar btn-outline-info resit-outline-size-2"
        >
          Logout
        </Link>
      </li>);
      console.log(userData);
      if ('user' in userData){
        return logout;
      }else{
        return login;

      }
}


const defaultProps = {};

const ResitHeader = props => {
  //   const books = props.books;
  return (
    <React.Fragment>
      <div className="fixed-top resit-little-navbar"></div>
      <nav className="navbar navbar-expand-lg bg-resitbook resit-navbar navbar-light fixed-top resit-shadow">
        <a className="navbar-brand visible" href="#">
          <img src={NavBrand} className="logo" alt="" />
        </a>
        <form className="form-inline" id="book-search">
          <input
            className="form-control mr-sm-2"
            id="input-search"
            type="search"
            placeholder="Cari buku"
          />
          <button className="btn btn-info" id="button-search" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-resit"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto topnav">
            <li className="nav-item">
              <NavLink to="/keranjang" className="nav-link text-info">
                <i className="fa fa-shopping-cart"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/list-buku" className="nav-link">
                Buku
              </NavLink>
            </li>
            {navlogin(userData)}
            
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

ResitHeader.propTypes = propTypes;
ResitHeader.defaultProps = defaultProps;

export default ResitHeader;
