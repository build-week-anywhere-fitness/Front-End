import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getClient} from "../actions/index";
import ClassList from "./ClassList";


class DashBoard extends Component {
    componentDidMount() {
        this.props.getClasses()
    }

    logout = event => {
        event.preventDefault()
        localStorage.removeItem("token");
        this.props.history.push("/login");
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.logout}>Logout</button>
                
                <ClassList />
            </>
        )
    }
}

const mapDispatchToProps ={
  getClient
}
export default withRouter(connect(null,mapDispatchToProps)(DashBoard));
