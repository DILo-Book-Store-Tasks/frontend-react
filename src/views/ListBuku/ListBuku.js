/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import buku1 from "../../assets/images/produk/buku1.jpeg";
let img_buku1 = {
  backgroundImage: "url('" + { buku1 } + "')"
};
function CoverBook(url){
  let cover = {
    backgroundImage: `url('http://localhost:8081/${url}')`
  };
  return cover;
}
const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};

    // console.log(userData.user._id)


// let img_buku2 = {
// 	backgroundImage: "url('" + { buku2 } + "')"
// };

// let img_buku3 = {
// 	backgroundImage: "url('" + { buku3 } + "')"
// };

// let img_buku4 = {
// 	backgroundImage: "url('" + { buku4 } + "')"
// };

const addKeranjang = async id => {
  console.log(id)
  await axios.post('http://localhost:8081/orders', {
    user : userData.user._id,
    book: id,
  })
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const LoginPage = props => {
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
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="text-left">
          <div className="judul-bb text-danger">
            <span className="text-black">Keyword :</span> Hot Books
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="bg-info resit-filter-bar">
              Urutkan
              <button className="btn btn-warning btn-sm">Terbaru</button>
              <button className="btn btn-warning btn-sm">Terlaris</button>
            </div>
          </div>
          <div className="col-3">
            <div className="resit-judul-filter">Rentang Harga</div>
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Min"
              style={{ marginBottom: "10px" }}
            />
            <input
              type="text"
              name=""
              className="form-control"
              placeholder="Max"
              style={{ marginBottom: "10px" }}
            />
            <div class="resit-judul-filter">Filter yang lain</div>
            <p>Simpan saja filter lain disini</p>
          </div>
          <div class="col-9">
            <div class="row">
              {books.map((book, index) => (
                <div
                  className="col-lg-3 col-md-4 col-6 resit-master-box"
                  key={index}
                >
                  <div className="resit-box-produk">
                    <a href="#" target="_self">
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
                        <a onClick={() => addKeranjang(book._id)}>
                          Tambah Keranjang
                        </a>
                        <div className="resit-produk-terjual">
                          {" "}
                          Stok : {book.qty}{" "}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}

              <div class="col-12 text-center">
                <button class="btn btn-outline-primary resit-outline-size-2 resit-radius-2 mr-2">Awal</button>
                
                <button class="btn btn-outline-primary resit-outline-size-2 resit-radius-2 mr-1 ml-1">1</button>
                <button class="btn btn-outline-primary resit-outline-size-2 resit-radius-2 mr-1 ml-1">2</button>
                <button class="btn btn-outline-primary resit-outline-size-2 resit-radius-2 mr-1 ml-1">3</button>

                <button class="btn btn-outline-primary resit-outline-size-2 resit-radius-2 ml-2">Akhir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
