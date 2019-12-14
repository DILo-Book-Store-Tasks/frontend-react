/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import NavBrand from "../../assets/images/logo.png";
const propTypes = {
  children: PropTypes.node
};

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
        <a href="" className="resit-cart">
          <i className="fa fa-shopping-cart"></i>
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
            <li className="nav-item">
              <NavLink to="/home" className="nav-link"></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/list-buku" className="nav-link">
                Buku
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tentang-kami" className="nav-link">
                Tentang Kami
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/keranjang" className="nav-link">
                Keranjang
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="btn-resit btn-resit-login">
                Masuk
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="btn resit-radius-2 resit-btn-navbar btn-outline-info resit-outline-size-2">
                Daftar
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

ResitHeader.propTypes = propTypes;
ResitHeader.defaultProps = defaultProps;

export default ResitHeader;
