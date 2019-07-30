import React, { Component} from "react";
import {connect} from "react-redux";
import uuid from "uuid";
import {addClient} from "../actions/index";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const {name, email} = this.state;

        const newClient = {
            name, 
            email,
            id: uuid.v4(),
        }

        this.props.addClient(newClient);
        this.setState({name:"", email:""})
    }

    render() {
        const {name, email} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                />
                <button type="submit">Add New Client</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addClient
}

export default connect(null, mapDispatchToProps)(Form);