import React from 'react';
import buku1 from '../../assets/images/produk/buku1.jpeg';
import buku2 from '../../assets/images/produk/buku2.jpg';
import buku3 from '../../assets/images/produk/buku3.jpg';
import buku4 from '../../assets/images/produk/buku4.jpg';

let img_buku1 = {
	backgroundImage: "url('" + { buku1 } + "')"
};

let img_buku2 = {
	backgroundImage: "url('" + { buku2 } + "')"
};

let img_buku3 = {
	backgroundImage: "url('" + { buku3 } + "')"
};

let img_buku4 = {
	backgroundImage: "url('" + { buku4 } + "')"
};

const LoginPage = props => {
  const books = props.books
  return (
    <React.Fragment>
      <div class="container" style={{marginTop:"90px"}}>
        <div class="text-left">
          <div class="judul-bb text-danger">
            <span class="text-black">Keyword :</span> Hot Books
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="bg-info resit-filter-bar">
              Urutkan 
              <button class="btn btn-warning btn-sm">Terbaru</button>
              <button class="btn btn-warning btn-sm">Terlaris</button>
            </div>
          </div>
          <div class="col-3">
            <div class="resit-judul-filter">Rentang Harga</div>
            <input type="text" name="" class="form-control" placeholder="Min" style={{marginBottom: "10px"}} />
            <input type="text" name="" class="form-control" placeholder="Max" style={{marginBottom: "10px"}} />
            <div class="resit-judul-filter">Filter yang lain</div>
            <p>Simpan saja filter lain disini</p>
          </div>
          <div class="col-9">
            <div class="row">
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
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-warning">Kampret</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginPage

