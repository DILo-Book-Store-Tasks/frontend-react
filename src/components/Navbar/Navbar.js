import React, { Fragment } from "react";
import NavBrand from "../../assets/images/logo.png";
import "./navbar.css";

let Navbar = () => (
  <Fragment>
    <div className="fixed-top resit-little-navbar"></div>
    <nav className="navbar navbar-expand-lg bg-resitbook navbar-light fixed-top resit-shadow mt25">
      <a className="navbar-brand visible" href="#">
        <img src={NavBrand} className="logo" />
      </a>
      <form className="form-inline" id="book-search" action="/action_page.php">
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
      <a href="" className="resit-cart">
        <i className="fa fa-shopping-cart"></i>{" "}
      </a>

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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Buku
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tentang Kami
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/login.html" className="btn-resit btn-resit-login">
              Masuk
            </a>
          </li>
          <li className="nav-item">
            <a
              href="pages/register.html"
              className="btn-resit btn-resit-register"
            >
              Daftar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default Navbar;
