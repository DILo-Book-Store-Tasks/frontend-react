import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const ListBuku = React.lazy(() => import('./views/ListBuku'));
const Keranjang = React.lazy(() => import('./views/Keranjang'));
const DetailBuku = React.lazy(() => import('./views/DetailBuku'));
const Transaksi = React.lazy(() => import('./views/Transaksi'));
// const DataBuku = React.lazy(() => import('./views/Data/DataBuku/DataBuku'));
// const DataTransaksi = React.lazy(() => import('./views/Data/DataTransaksi'));
// const DataUser = React.lazy(() => import('./views/Data/DataUser'));
const TentangKami = React.lazy(() => import('./views/TentangKami'));
const SyaratDanKetentuan = React.lazy(() => import('./views/SKK'));
const Dashboard = React.lazy(() => import('./views/DashboardExample'));

const routes = [
  { path: '/', exact: true, name: 'Halaman Utama' },
  { path: '/home', name: 'Halaman Utama', component: Home },
  { path: '/list-buku', exact: true, name: 'List Buku', component: ListBuku },
  { path: '/tentang-kami', name: 'Tentang Kami', component: TentangKami },
  { path: '/skk', name: 'Tentang Kami', component: SyaratDanKetentuan },
  { path: '/keranjang', name: 'Keranjang', component: Keranjang },
  { path: '/buku/:id', exact: true, name: 'Detail Buku', component: DetailBuku },
  { path: '/transaksi', name: 'Transaksi', component: Transaksi },
  { path: '/contoh-dashboard', name: 'Dashboard', component: Dashboard },
//   { path: '/data-buku', name: 'Data Buku', component: DataBuku },
//   { path: '/data-transaksi', name: 'Data Transaksi', component: DataTransaksi },
//   { path: '/data-user', name: 'Data User', component: DataUser },
];

export default routes;
