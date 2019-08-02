import React from 'react';
import { Link } from 'react-router-dom';
import { instructorLogin } from '../actions/InstructorActions';
import { connect } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1000,
        margin: '20px auto',
        justifyContent: 'center',
      },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
      },
    button: {
        margin: theme.spacing(1),
      },
    buttonContainer: {
        width: '100%',
        margin: '10px auto 0'
    },
    title: {
        marginTop: '30px'
    }
})

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
                this.setState({ username: "", password: "", })
            })
            .catch((err) => {
                console.log('login', err)
            })
    }

    render() {
        const { classes } = this.props
        console.log("Login", this.props)
        return (
            <div className="login">
                <Typography className={classes.title} gutterBottom variant="h4" component="h1"><b>Login To Your Instructor Account</b></Typography>
                 {this.props.instructorError && <Typography color="error" component="p" variant="body1">{this.props.instructorError}</Typography>}
                <form className={classes.root} onSubmit={this.handleSubmit}>
                    <FormControl required className={classes.formControl}>
                    <Input type="text" name="username" placeholder="Username" value={this.state.className} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                    <Input type="password" name="password" placeholder="Password" value={this.state.className} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div className={classes.buttonContainer}>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>Login</Button>
                    </div>
                </form>
                <p>Don't have an account? click <Link to="/instructor/create">here</Link> to create your account</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorId: state.instructorReducer.instructorId,
        instructorError: state.instructorReducer.instructorError,
    }
}

const mapDispatchToProps = {
    instructorLogin,
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(InstructorLogin));