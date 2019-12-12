import React from 'react'
// import Card from './Card/Card'
import buku1 from '../../assets/images/produk/buku1.jpeg';
import buku2 from '../../assets/images/produk/buku2.jpg';
import buku3 from '../../assets/images/produk/buku3.jpg';
import buku4 from '../../assets/images/produk/buku4.jpg';
import './Catalog.css'

let Catalog= () =>  
<fragment>
<div className="container mt30">      
    <div className="row pt-0 mt-n4"> 

    <div className="col-12 text-center judul text-danger m25"> 
    <i class="fa fa-fire"></i> Hot Books
</div>       
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                        <div class="resit-foto buku1"> 
</div>                         
                        <div class="resit-nama-produk">Dilan 1990</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 220.000</span> 
                                                  
                        </div>                         
                        <div> 
                                                     
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>         
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku2"> 
</div>                         
                        <div class="resit-nama-produk">Milea - Suara dari Dilan</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>         
        {/* <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku3"> 
</div>                         
                        <div class="resit-nama-produk">One Piece Blue Deep</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>          */}
            <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku4"> 
</div>                         
                        <div class="resit-nama-produk">Bill Gates - Biacara Soal Restu, Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>    
                    
        </div>   
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku3"> 
</div>                         
                        <div class="resit-nama-produk">One Piece Blue Deep</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>               
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku1"> 
</div>                         
                        <div class="resit-nama-produk">Dilan 1990</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 220.000</span> 
                                                        
                        </div>                         
                        <div>           
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>         
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku2">  
</div>                         
                        <div class="resit-nama-produk">Milea - Suara dari Dilan</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>         
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku3"> 
</div>                         
                        <div class="resit-nama-produk">One Piece Blue Deep</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>         
        <div class="col-lg-3 col-md-4 col-6 resit-master-box"> 
            <div class="resit-box-produk"> 
                <div class="dropdown resit-box-dropdown show"> 
                    <a data-toggle="dropdown" href="#" aria-expanded="false">  <span class="fa fa-gear"></span>  </a> 
                    <div class="dropdown-menu resit-box-dropdown-menu" x-placement="top-start"> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/edit/SPT_1005492019531112">Edit</a> 
                        <a class="dropdown-item" tabindex="-1" href="http://127.0.0.1/shoes-web/produk/jual/hapus/SPT_1005492019531112">Hapus</a> 
                    </div>                     
                </div>                 
                <a href="#" target="_self">  <div class="resit-produk"> 
                <div class="resit-foto buku4"> 
</div>                         
                        <div class="resit-nama-produk">Bill Gates - Biacara Soal Restu, Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu Bill Gates - Biacara Soal Restu</div>                         
                        <div class="resit-harga-produk"> 
                            <span class="resit-harga">Rp. 250.000</span> 
                        </div>                         
                        <div class="resit-produk-terjual"> Terjual : 52 </div>                         
                    </div>  </a> 
            </div>             
        </div>                  
    </div>     
</div>
</fragment>


export default Catalog