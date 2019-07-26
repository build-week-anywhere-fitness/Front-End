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

    render() {
        return (
            <form className="create-instructor">
                <input type="text" name="name" placeholder="Enter your fullname" value={this.state.name} required />
                <input type="text" name="username" placeholder="Username" value={this.state.username} required />
                <input type="text" name="password" placeholder="Password" value={this.state.password} required />
            </form>
        )
    }
}

export default InstructorCreate