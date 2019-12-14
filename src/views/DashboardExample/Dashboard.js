/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/resitdc/css/resitdc-dashboard.css";

const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="wrapper" style={{ marginTop: "87px" }}>
        <nav
          id="sidebar"
          class="bg-dark"
          style={{
            left: "0",
            position: "fixed",
            zIndex: "1030",
            height: "100%"
          }}
        >
          <ul className="list-unstyled components">
            <p>Main Menu</p>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Data User</a>
            </li>
            <li>
              <a href="#">Data Buku</a>
            </li>
            <li>
              <a href="#">Data Kategori</a>
            </li>
            <li>
              <a href="#">Transaksi</a>
            </li>
          </ul>
        </nav>
        <div id="content" style={{ marginLeft: "250px" }}>
          <div className="container">
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
                <div className="resit-judul-filter">Filter yang lain</div>
                <p>Simpan saja filter lain disini</p>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">Dilan 1990</div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 220.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            Milea - Suara dari Dilan
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            One Piece Blue Deep
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            Bill Gates - Biacara Soal Restu, Bill Gates -
                            Biacara Soal Restu Bill Gates - Biacara Soal Restu
                            Bill Gates - Biacara Soal Restu Bill Gates - Biacara
                            Soal Restu Bill Gates - Biacara Soal Restu Bill
                            Gates - Biacara Soal Restu
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">Dilan 1990</div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 220.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            Milea - Suara dari Dilan
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            One Piece Blue Deep
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 resit-master-box">
                    <div className="resit-box-produk">
                      <a href="#" target="_self">
                        <div className="resit-produk">
                          <div className="resit-foto"></div>
                          <div className="resit-nama-produk">
                            Bill Gates - Biacara Soal Restu, Bill Gates -
                            Biacara Soal Restu Bill Gates - Biacara Soal Restu
                            Bill Gates - Biacara Soal Restu Bill Gates - Biacara
                            Soal Restu Bill Gates - Biacara Soal Restu Bill
                            Gates - Biacara Soal Restu
                          </div>
                          <div className="resit-harga-produk">
                            <span className="resit-harga">Rp. 250.000</span>
                          </div>
                          <div className="resit-produk-terjual">
                            {" "}
                            Terjual : 52{" "}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="btn btn-warning">Kampret</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
