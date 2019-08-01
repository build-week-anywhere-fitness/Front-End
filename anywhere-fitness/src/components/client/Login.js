import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = event => {
        event.preventDefault()

        this.setState({[event.target.name]: event.target.value,})
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        this.props.login(username, password)
            .then(() => {
                this.props.history.push("/")
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        const { username, password } = this.state
        const { loadingLogin, error } = this.props

        return (
            <form onSubmit={this.handleSubmit}>
                {error && <p className="error">{error}</p>}
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={username} 
                    onChange={this.handleChange} 
                /><br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={this.handleChange} 
                /><br />

                {loadingLogin
                    ? <p>Logging in...</p>
                    : <button type="submit">Login</button>}
            </form>
        )
    }
}

const mapStateToProps = state => ({
    loadingLogin: state.clientReducer.loadingLogin,
    error: state.clientReducer.error,
})

const mapDispatchToProps = {
    login,
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps,)(Login));