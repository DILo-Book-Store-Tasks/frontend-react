import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import './App.css';
import "./assets/resitdc/css/resitdc.css";
require('dotenv').config();
const loading = () => <h1>Loading...</h1>;

// Containers
const ResitLayout = React.lazy(() => import('./containers/ResitLayout'));

const Login = React.lazy(() => import('./views/MultiPage/Login'));
const Register = React.lazy(() => import('./views/MultiPage/Register'));
class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route path="/" name="Home" render={props => <ResitLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
