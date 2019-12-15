import React from "react";

const LoginPage = props => {
  return (
    
  <div class="container" style={{marginTop:"120px"}}>
  <div class="row mb-4">
    <div class="col-12 bg-light resit-shadow">
      <div class="row" style={{padding: "0 13px"}}>
        <div class="col-6" style={{padding: "0 10px"}}>
            <div class="resit-foto resit-radius-1">
            </div>
        </div>
        <div class="col-6">
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Judul</h3>
            <div class="resit-judul-detail">Majestic Hotel</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Author</h3>
            <div class="resit-author-detail">Agatha Christy</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Genre</h3>
            <div class="resit-genre-detail"><span class="btn btn-sm btn-info resit-radius-1">Komedi</span> <span class="btn btn-sm btn-info resit-radius-1">Drama</span> <span class="btn btn-sm btn-info resit-radius-1">Sains Fiksi</span> <span class="btn btn-sm btn-info resit-radius-1">Action</span> </div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Deskripsi</h3>
            <div class="resit-deskripsi-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Harga</h3>
            <div class="resit-harga-detail text-danger">Rp. 100.000</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}} class="row mb-2">
            <div class="col-6">
            <button class="btn btn-block btn-outline-success resit-radius-2 resit-outline-size-2" style={{fontWeight: "bold"}}>Masukan Keranjang </button>
            </div>
            <div class="col-6">
            <button class="btn btn-block btn-outline-danger resit-radius-2 resit-outline-size-2" style={{fontWeight: "bold"}}>Beli </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
    );
};

export default LoginPage;
