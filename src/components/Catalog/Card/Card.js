import React from 'react'
import '../Catalog.css'

// import buku1 from '../assets/images/produk/buku1.jpeg';
// var img_buku1 = {backgroundImage: "url('" + { buku1 } + "')"
// let img_buku2 = () => {`"background-image: url('assets/images/produk/buku1.jpeg')`}
//   style="background-image: url('assets/images/produk/buku1.jpeg');">

const Card = props => {
  const books = props.books
  console.log(books)


 

  return (
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
            <div class="resit-foto buku1" >
            </div>
            <div class="resit-nama-produk">Dilan 1990</div>
            <div class="resit-harga-produk">
                <span class="resit-harga">Rp. 220.000</span>
            </div>
            <div class="resit-produk-terjual"> Terjual : 52 </div>
            </div>
        </a>
        </div>
    </div>
  )
}

export default Card

