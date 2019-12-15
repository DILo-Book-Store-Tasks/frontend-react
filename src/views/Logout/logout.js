import React, { useEffect, useState } from "react";
import axios from "axios";

const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};
function logoutkeun(){
    await axios({
    method: 'post',
    url: 'http://localhost:8081/users/logout',
    responseType: 'stream',
    headers: {
      "Content-Type": "application/json",
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ' + userData.token
    }
  })
}
console.log('masuk')
const logout = props => {
  return (
    {logoutkeun()}
  )
};

export default logout;


