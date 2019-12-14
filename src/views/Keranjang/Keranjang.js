import React, { useEffect, useState } from "react";
import axios from "axios";

const Keranjang = props => {

  const [orders, setOrders] = useState([]);

  const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};
    // var user = "5def5358fc0c743746a917ac"
    var user = userData.user._id
    console.log(user)

    console.log(userData.token)
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGVmNTM1OGZjMGM3NDM3NDZhOTE3YWMiLCJyb2xlIjoiNWRlZjRmZmE4YWZjY2YyZmUzMWY1NjRkIiwiaWF0IjoxNTc2MjQ1Nzc3fQ.WxT_9ex8c2JY-Ege-2J2cQ5tqT_TM7BMSbc0DCh5KcM`
    // Authorization: `Bearer ${userData.token}`
  };

  async function fetchData() {
    const request = await axios.get("http://localhost:8081/orders",{
    user
    });
    const data = request.data;
    setOrders(data);
  }

  useEffect(() => {
    fetchData();
  }, []);


  console.log(orders)
  return (
    <React.Fragment>
        <div className="container" style={{ marginTop: "190px" }}>
        <h3>Keranjang Belanja</h3>

  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Book name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Subtotal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>The Lords of The Wings</td>
      <td>100.000</td>
      <td>1</td>
      <td>100.000</td>
    </tr>
    <tr>
      <td scope="row" colSpan="4">Total</td>
      <td>100.000</td>
    </tr>
  </tbody>
</table>
</div>
</React.Fragment>

  )
};

export default Keranjang;
