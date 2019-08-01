import React, { Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import uuid from "uuid";
import {registerClient} from "../actions/index";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            fullname:"",
            username:"",
            password:"",
        }
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const {fullname, username, password} = this.state;

        const newClient = {
            fullname,
            username, 
            password,
            id: uuid.v4(),
        }

        this.props.registerClient(newClient)
            .then(() => {
                this.props.history.push("/login")
            })
            .catch((err) => {
                console.error(err)
            })

        this.setState({fullname:"", username:"", password:""})
    }

    render() {
        const {fullname, username, password} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">Add New Client</button>
            </form>
        )
    }
}

const mapStateToProps =state => ({
    error: state.clientReducer.error,
})

const mapDispatchToProps = {
    registerClient
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));