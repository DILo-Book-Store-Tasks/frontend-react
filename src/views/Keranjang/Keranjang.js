import React, { useEffect, useState } from "react";
import axios from "axios";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const Keranjang = props => {

  const [orders, setOrders] = useState([]);

  const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};
    var user = userData.user._id
    async function fetchData() {
      const request = await axios({
        method: 'post',
        url: 'http://localhost:8081/orders_data',
        responseType: 'stream',
        headers: {
          "Content-Type": "application/json",
          'Accept' : 'application/json',
          'Authorization' : 'Bearer ' + userData.token
        },
        data: {
          user: user,
        }
      })
    const data = request.data;
    // setOrders('');
    setOrders(data.message.orders[0].order.books);
  }

  useEffect(() => {
    fetchData();
  }, []);
  var total = 0;
  orders.map((order, index) => {
      total += parseInt(order.book.price) 
  });

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

    {orders.map((order, index) => (
      <tr key={index}>
      <th scope="row"></th>
      <td>{order.book.book_name}</td>
      <td>{formatNumber(order.book.price)}</td>
      <td>1</td>
    <td>{formatNumber(order.book.price)}</td>
    </tr>
    ))}
    <tr>
      <td scope="row" colSpan="4">Total</td>
    <td>Rp. {formatNumber(total)}</td>
    </tr>
  </tbody>
</table>
</div>
</React.Fragment>

  )
};

export default Keranjang;
