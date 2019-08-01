import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import PrivateRoute from "./components/client/PrivateRoute";
import Login from "./components/client/Login";
import Dashboard from "./components/client/Dashboard";
import Register from './components/client/Register';

class App extends Component {
  render() {
    return (
    <div className="App">
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </div>
    );
  }
}
export default App