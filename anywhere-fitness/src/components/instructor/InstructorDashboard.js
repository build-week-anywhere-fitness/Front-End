import React from 'react';

class InstructorDashboard extends React.Component {

    logout = (event) => {
        event.preventDefault()

        localStorage.removeItem('token')
        this.props.history.push('/instructor/login')
    }

    render() {
        return (
            <div className="dashboard">
                <button type="button" onClick={this.logout}>Logout</button>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default InstructorDashboard;