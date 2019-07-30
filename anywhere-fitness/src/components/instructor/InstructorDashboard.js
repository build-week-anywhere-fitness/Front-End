import React from 'react';
import { withRouter } from 'react-router-dom';

class InstructorDashboard extends React.Component {

    logout = (event) => {
        event.preventDefault()

        localStorage.removeItem('token')
        this.props.history.push('/instructor/login')
    }

    render() {
        console.log(this.props)
        return (
            <div className="dashboard">
                <button type="button" onClick={this.logout}>Logout</button>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default withRouter(InstructorDashboard);