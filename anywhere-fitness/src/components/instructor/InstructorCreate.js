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
                <input type="text" name="name" value={this.state.name} required />
                <input type="text" name="username" value={this.state.username} required />
                <input type="text" name="password" value={this.state.password} required />
            </form>
        )
    }
}

export default InstructorCreate