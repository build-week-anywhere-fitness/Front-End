import React from 'react';

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

    render() {
        return (
            <div className="create-account">
                <h1>Create Your Instructor Account</h1>
                <form className="create-instructor">
                    <input type="text" name="name" placeholder="Enter your fullname" value={this.state.name} onChange={this.changeHandler} required />
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        )
    }
}

export default InstructorCreate