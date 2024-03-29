/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import banner from "../../assets/images/banner1.png";
let img_banner = {
	backgroundImage: `url(${banner})`
};
function CoverBook(url){
  let cover = {
    backgroundImage: `url('http://localhost:8081/${url}')`
  };
  return cover;
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const Home = props => {
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
            Buku buku terbaik menjadi koleksi kami segera pilih sebelum kehabisan..{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="resit-slogan row mt-4">
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-book fa-5x"></i>
            </div>
            <div className="judul">Toko Buku Terlengkap</div>
            <div className="sub-judul">
            Berbagai genre dari banyak author yang terkenal semua lengkap ada.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-map fa-5x"></i>
            </div>
            <div className="judul">Selalu Diskon</div>
            <div className="sub-judul">
              Dapatkan promo terbaik 12.12 hanya sampai 30 Desember 2019.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="bg-info resit-box">
              <i className="fa fa-money-bill fa-5x"></i>
            </div>
            <div className="judul">Harga Termurah</div>
            <div className="sub-judul">
              Harga terbaik dan untuk buku terbaik
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
                <Link to={"/buku/"+book._id} target="_self">
                  <div className="resit-produk">
                    <div className="resit-foto" style={CoverBook(book.cover)}></div>
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
                </Link>
              </div>
            </div>
          ))}
          <div className="col-12 text-center">
            <Link to="/list-buku">
              <button className="btn btn-outline-info resit-radius-2 resit-outline-size-2" style={{fontWeight:"bold"}}>Lihat Semua Buku</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
