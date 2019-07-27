import React from 'react';
import { Link } from 'react-router-dom';

class InstructorLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    
    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="login">
                <h1>Login To Your Instructor Account</h1>
                <form className="create-instructor">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    <button type="submit">Create Account</button>
                </form>
                <p>Don't have an account? click <Link to="/instructor/create">here</Link> to create your account</p>
            </div>
        )
    }
}

export default InstructorLogin;