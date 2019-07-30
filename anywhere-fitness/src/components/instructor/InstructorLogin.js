import React from 'react';
import { Link } from 'react-router-dom';
import { instructorLogin } from '../actions/InstructorActions';
import { connect } from 'react-redux';

class InstructorLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

        const { username, password } = this.state

        this.props.instructorLogin(username, password)
            .then(() => {
                this.props.history.push(`/instructor/dashboard/${this.props.instructorId}`)
            })
            .catch((err) => {
                console.log('login', err)
            })
    }

    render() {
        return (
            <div className="login" onSubmit={this.handleSubmit}>
                <h1>Login To Your Instructor Account</h1>
                <form className="create-instructor">
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} required />
                    <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} required />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? click <Link to="/instructor/create">here</Link> to create your account</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorId: state.instructorId
    }
}

const mapDispatchToProps = {
    instructorLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructorLogin);