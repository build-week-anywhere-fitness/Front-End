import React from 'react';

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
                <h1>Create Your Instructor Account</h1>
                <form className="create-instructor">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default InstructorLogin;