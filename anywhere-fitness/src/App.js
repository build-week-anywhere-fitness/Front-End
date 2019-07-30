import React, { Component } from 'react';
import './App.css';
import ClientList from './components/client/ClientList';
import {connect} from "react-redux";
import {getClients} from "./components/actions/index";
import Form from "./components/client/ClientForm";

class App extends Component {

  componentDidMount() {
    this.props.getClients()
  }

  render() {
    return (
    <div className="App">
      <Form/>
      <ClientList/>
    </div>
    );
  }
  
}

const mapDispatchToProps ={
  getClients
}
export default connect(null,mapDispatchToProps)(App);
