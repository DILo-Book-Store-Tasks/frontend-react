/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";

import buku1 from "../../assets/images/produk/buku1.jpeg";
// import buku2 from "../../assets/images/produk/buku2.jpg";
// import buku3 from "../../assets/images/produk/buku3.jpg";
// import buku4 from "../../assets/images/produk/buku4.jpg";
// import banner from "../../assets/images/banner1.png";

let img_banner = {
  backgroundImage: "url('/static/media/banner1.208ab1ae.png')"
};

let img_buku1 = {
  backgroundImage: "url('" + { buku1 } + "')"
};

// let img_buku2 = {
//   backgroundImage: "url('" + { buku2 } + "')"
// };

// let img_buku3 = {
//   backgroundImage: "url('" + { buku3 } + "')"
// };

// let img_buku4 = {
//   backgroundImage: "url('" + { buku4 } + "')"
// };
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const Home = props => {
  // const books = props.books
  const [books, setBooks] = useState([]);

  const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userData.token}`
  };

  async function fetchData() {
    const request = await axios.get("http://localhost:8081/books");
    const data = request.data;
    setBooks(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="jumbotron text-center bg-resit-image" style={img_banner}>
        <div className="slogan-right">
          <h1>Cari Buku Favorit Mu</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat..{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="resit-slogan row">
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-book fa-5x"></i>
            </div>
            <div className="judul">Judul 1</div>
            <div className="sub-judul">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-shopping-cart fa-5x"></i>
            </div>
            <div className="judul">Judul 2</div>
            <div className="sub-judul">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-money-bill fa-5x"></i>
            </div>
            <div className="judul">Judul 3</div>
            <div className="sub-judul">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 text-center judul text-danger"
            style={{ margin: "25px 0" }}
          >
            <i className="fa fa-fire"></i> Hot Books
          </div>

          {books.map((book, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 resit-master-box"
              key={index}
            >
              <div className="resit-box-produk">
                <div className="dropdown resit-box-dropdown show">
                  <a data-toggle="dropdown" href="#" aria-expanded="false">
                    <span className="fa fa-gear"></span>
                  </a>
                  <div
                    className="dropdown-menu resit-box-dropdown-menu"
                    x-placement="top-start"
                  >
                    <a
                      className="dropdown-item"
                      tabIndex="-1"
                      href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112"
                    >
                      Edit
                    </a>
                    <a
                      className="dropdown-item"
                      tabIndex="-1"
                      href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112"
                    >
                      Hapus
                    </a>
                  </div>
                </div>
                <a href="#" target="_self">
                  <div className="resit-produk">
                    <div className="resit-foto" style={img_buku1}></div>
                    <div className="resit-nama-produk">
                      {book.book_name}
                      {/* <h6>{book.author}</h6> */}
                    </div>
                    <div className="resit-harga-produk">
                      <span className="resit-harga">
                        Rp.{formatNumber(book.price)}
                      </span>
                    </div>
                    <div className="resit-produk-terjual">
                      {" "}
                      Stok : {book.qty}{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          {/* <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku1}>
                </div>
                <div className="resit-nama-produk">Dilan 1990</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 220.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku2}>
                </div>
                <div className="resit-nama-produk">Milea - Suara dari Dilan</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku3}>
                </div>
                <div className="resit-nama-produk">One Piece Blue Deep</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku4}>
                </div>
                <div className="resit-nama-produk">Bill Gates - Biacara Soal Restu, Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku1}>
                </div>
                <div className="resit-nama-produk">Dilan 1990</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 220.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku2}>
                </div>
                <div className="resit-nama-produk">Milea - Suara dari Dilan</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku3}>
                </div>
                <div className="resit-nama-produk">One Piece Blue Deep</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 resit-master-box">
          <div className="resit-box-produk">
            <div className="dropdown resit-box-dropdown show">
              <a data-toggle="dropdown" href="#" aria-expanded="false">
                <span className="fa fa-gear"></span>
              </a>
              <div className="dropdown-menu resit-box-dropdown-menu" x-placement="top-start">
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a>
                <a className="dropdown-item" tabIndex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a>
              </div>
            </div>
            <a href="#" target="_self">
              <div className="resit-produk">
                <div className="resit-foto" style={img_buku4}>
                </div>
                <div className="resit-nama-produk">Bill Gates - Biacara Soal Restu, Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu</div>
                <div className="resit-harga-produk">
                  <span className="resit-harga">Rp. 250.000</span>
                </div>
                <div className="resit-produk-terjual"> Terjual : 52 </div>
              </div>
            </a>
          </div>
        </div> */}
          <div className="col-12 text-center">
            <button className="btn btn-warning">Kampret</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
