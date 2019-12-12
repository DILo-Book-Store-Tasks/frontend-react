import React, { Component ,useEffect, useState } from 'react';
import axios from 'axios'

// import "./App.css";
import "./assets/resitdc/css/resitdc.css";
// import buku1 from './assets/images/produk/buku1.jpeg';
// import buku2 from './assets/images/produk/buku2.jpg';
// import buku3 from './assets/images/produk/buku3.jpg';
// import buku4 from './assets/images/produk/buku4.jpg';
// import Header from "./components/Header";

import Card from "./components/Card/Card";

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmNTM1OGZjMGM3NDM3NDZhOTE3YWMiLCJyb2xlIjoiNWRlZjRmZmE4YWZjY2YyZmUzMWY1NjRkIiwiaWF0IjoxNTc1OTY1NTI5fQ.J7l2nMqvHzT2AWFdWVqnuZ0xrcZIGQOQaYLI8JFokuk"

// var img_buku1 = {
// 	backgroundImage: "url('" + { buku1 } + "')"
// };

// var img_buku2 = {
// 	backgroundImage: "url('" + { buku2 } + "')"
// };

// var img_buku3 = {
// 	backgroundImage: "url('" + { buku3 } + "')"
// };

// var img_buku4 = {
// 	backgroundImage: "url('" + { buku4 } + "')"
// };
  // return (
  //   <div className="App">
  //     <Header />
  //     <h1>Hello World</h1>
  //   </div>
  // );
function App() {

  const [books, setBooks] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:8081/books',{
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
    const data = request.data
    setBooks(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  console.log(books)
  return (
    <React.Fragment>
    <div class="jumbotron text-center bg-resit-image" style={{marginBottom:"0",marginTop: "86px"}}>
    <div class="slogan-right">
      <h1>Cari Buku Favorit Mu</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.. </p> 
    </div>
  </div>
  <div class="fixed-top resit-little-navbar">
  </div>
  <nav class="navbar navbar-expand-lg bg-resitbook navbar-light fixed-top resit-shadow" style={{marginTop: "25px"}}>
    <a class="navbar-brand visible" href="#">
      <img src="assets/images/logo.png" class="logo" />
    </a>
    <form class="form-inline" id="book-search" action="/action_page.php">
      <input class="form-control mr-sm-2" id="input-search" type="search" placeholder="Cari buku" />
      <button class="btn btn-info" id="button-search" type="submit"><i class="fa fa-search"></i></button>
    </form>
    <a href="" class="resit-cart"><i class="fa fa-shopping-cart"></i> </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse navbar-resit" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto topnav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Buku</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tentang Kami</a>
        </li>
        <li class="nav-item">
          <a href="pages/login.html" class="btn-resit btn-resit-login">Masuk</a>
        </li>
        <li class="nav-item">
          <a href="pages/register.html" class="btn-resit btn-resit-register">Daftar</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container" style={{marginTop:"30px"}}>
    <div class="resit-slogan row">
      <div class="col-4 text-center">
        <div class="bg-info resit-box">
          <i class="fa fa-book fa-5x"></i>
        </div>
        <div class="judul">Judul 1</div>
        <div class="sub-judul">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div class="col-4 text-center">
        <div class="bg-info resit-box">
          <i class="fa fa-shopping-cart fa-5x"></i>
        </div>
        <div class="judul">Judul 2</div>
        <div class="sub-judul">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div class="col-4 text-center">
        <div class="bg-info resit-box">
          <i class="fa fa-money-bill fa-5x"></i>
        </div>
        <div class="judul">Judul 3</div>
        <div class="sub-judul">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center judul text-danger" style={{margin: "25px 0"}}>
        <i class="fa fa-fire"></i> Hot Books
      </div>
      <Card todos={books}/>

      {/* <div class="col-lg-3 col-md-4 col-6 resit-master-box">
        <div class="resit-box-produk">
          <div class="dropdown resit-box-dropdown show">
            <a data-toggle="dropdown" href="#" aria-expanded="false">
              <span class="fa fa-gear"></span>
            </a>
            <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
            </div>
          </div>
          <a href="#" target="_self">
            <div class="resit-produk">
              <div class="resit-foto" style={img_buku2}>
              </div>
              <div class="resit-nama-produk">Milea - Suara dari Dilan</div>
              <div class="resit-harga-produk">
                <span class="resit-harga">Rp. 250.000</span>
              </div>
              <div class="resit-produk-terjual"> Terjual : 52 </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-6 resit-master-box">
        <div class="resit-box-produk">
          <div class="dropdown resit-box-dropdown show">
            <a data-toggle="dropdown" href="#" aria-expanded="false">
              <span class="fa fa-gear"></span>
            </a>
            <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
            </div>
          </div>
          <a href="#" target="_self">
            <div class="resit-produk">
              <div class="resit-foto" style={img_buku3}>
              </div>
              <div class="resit-nama-produk">One Piece Blue Deep</div>
              <div class="resit-harga-produk">
                <span class="resit-harga">Rp. 250.000</span>
              </div>
              <div class="resit-produk-terjual"> Terjual : 52 </div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-6 resit-master-box">
        <div class="resit-box-produk">
          <div class="dropdown resit-box-dropdown show">
            <a data-toggle="dropdown" href="#" aria-expanded="false">
              <span class="fa fa-gear"></span>
            </a>
            <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
              <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
            </div>
          </div>
          <a href="#" target="_self">
            <div class="resit-produk">
              <div class="resit-foto" style={img_buku4}>
              </div>
              <div class="resit-nama-produk">Bill Gates - Biacara Soal Restu, Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu</div>
              <div class="resit-harga-produk">
                <span class="resit-harga">Rp. 250.000</span>
              </div>
              <div class="resit-produk-terjual"> Terjual : 52 </div>
            </div>
          </a>
        </div>
      </div> */}
      <div class="col-12 text-center">
        <button class="btn btn-warning">Kampret</button>
      </div>
    </div>
  </div>
  <div class="jumbotron text-center" style={{marginBottom:"0"}}>
    <p>Footer</p>
  </div>
  
  </React.Fragment>
  );
}

export default App;
