import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorRegister } from '../actions/InstructorActions'

class InstructorCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            password: '',
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { name, username, password } = this.state

        this.props.instructorRegister(name, username, password)
            .then(() => {
                this.props.history.push("/instructor/dashboard")
            })
            .catch((err) => {
                console.log('register', err)
            })
    }

    render() {
        return (
            <div className="create-account">
                <h1>Create Your Instructor Account</h1>
                <form className="create-instructor" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Enter your fullname" value={this.state.name} onChange={this.changeHandler} required />
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    <button type="submit">Create Account</button>
                </form>
                <p>Already have an account? click <Link to="/instructor/login">here</Link> to login to your account</p>
            </div>
        )
    }
}

const mapDispatchToProps = {
    instructorRegister
}

export default connect(null, mapDispatchToProps)(InstructorCreate);