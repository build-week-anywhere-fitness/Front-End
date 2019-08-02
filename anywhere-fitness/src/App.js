import React, { Component } from 'react';
import './App.css';

import PrivateRoute from "./components/client/PrivateRoute";
import Login from "./components/client/Login";
import Dashboard from "./components/client/Dashboard";
import Register from './components/client/Register';

import { Link, Route } from 'react-router-dom';
import InstructorLanding from './components/instructor/InstructorLanding'

class App extends Component {
  render() {
    return (
    <div className="App">
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Link to="/instructor/dashboard">Instructor</Link>
      <Route path="/instructor" component={InstructorLanding} />
    </div>
    );
  }
}
export default App