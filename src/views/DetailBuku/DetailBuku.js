import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CoverBook(url){
  let cover = {
    backgroundImage: `url("http://localhost:8081/${url}")`
  };
  return cover;
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const DetailBuku = props => {
  const id_buku  = props.match.params.id

  const [buku, setBuku] = useState([]);

  async function fetchData() {
    const request = await axios.get("http://localhost:8081/book/"+id_buku);
    const data = request.data;
    setBuku(data[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);
console.log(buku.book_name);
  return (
    
  <div class="container" style={{marginTop:"120px"}}>
  <div class="row mb-4">
    <div class="col-12 bg-light resit-shadow">
      <div class="row" style={{padding: "0 13px"}}>
        <div class="col-6" style={{padding: "0 10px"}}>
            <div class="resit-foto resit-radius-1" style={CoverBook(buku.cover)}>
            </div>
        </div>
        <div class="col-6">
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Judul</h3>
            <div class="resit-judul-detail">{buku.book_name}</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Author</h3>
            <div class="resit-author-detail">{buku.author}</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Genre</h3>
            <div class="resit-genre-detail"><span class="btn btn-sm btn-info resit-radius-1">Komedi</span> <span class="btn btn-sm btn-info resit-radius-1">Drama</span> <span class="btn btn-sm btn-info resit-radius-1">Sains Fiksi</span> <span class="btn btn-sm btn-info resit-radius-1">Action</span> </div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Deskripsi</h3>
            <div class="resit-deskripsi-detail">{buku.desc}</div>
          </div>
          <hr/>
          <div style={{padding: "30px 0",fontSize: "25px"}}>
            <h3>Harga</h3>
            <div class="resit-harga-detail text-danger">Rp. {buku.price}</div>
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

export default DetailBuku;
