import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import "@fortawesome/fontawesome-svg-core";


import * as serviceWorker from "./serviceWorker";

// import 'react-app-polyfill/ie9'; // For IE 9-11 support
// import 'react-app-polyfill/stable';
// // import 'react-app-polyfill/ie11'; // For IE 11 support
// import './polyfill'

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
