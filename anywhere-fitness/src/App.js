import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/client/PrivateRoute";
import Login from "./components/client/Login";
import DashBoard from "./components/client/Dashboard";

class App extends Component {
  render() {
    return (
    <div className="App">
      <PrivateRoute exact path="/" component={DashBoard} />
      <Route exact path="/login" component={Login} />
    </div>
    );
  }
}
export default App