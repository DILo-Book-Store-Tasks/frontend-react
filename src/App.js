import React, { Component ,useEffect, useState } from 'react';
import axios from 'axios';
import Banner from './components/Banner/Banner'
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer'
import How from './components/How/How'
import Kampret from './components/Button/Kampret'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import "./App.css";
import "./assets/resitdc/css/resitdc.css";

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmNTM1OGZjMGM3NDM3NDZhOTE3YWMiLCJyb2xlIjoiNWRlZjRmZmE4YWZjY2YyZmUzMWY1NjRkIiwiaWF0IjoxNTc1OTY1NTI5fQ.J7l2nMqvHzT2AWFdWVqnuZ0xrcZIGQOQaYLI8JFokuk"

function App() {

  const [books, setBooks] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:8081/books',{
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    })
    const data = request.data
    setBooks(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  console.log(books)
  return (
    <React.Fragment>
      <Banner/>
      <How/>
      <Navbar/>
      <Catalog/>
      <Kampret/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
