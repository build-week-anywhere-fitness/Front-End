import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorRegister } from '../actions/InstructorActions'
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

    handleSubmit = (event) => {
        event.preventDefault()

        const { name, username, password } = this.state

        this.props.instructorRegister(name, username, password)
            .then(() => {
                this.props.history.push("/instructor/login")
            })
            .catch((err) => {
                console.log('register', err)
            })
    }

    render() {
        const { classes } = this.props
        return (
            <div className="create-account">
                <Typography className={classes.title} gutterBottom variant="h4" component="h1"><b>Create Your Instructor Account</b></Typography>
                <form className="create-instructor" onSubmit={this.handleSubmit}>
                    <FormControl required className={classes.formControl}>
                    <Input type="text" name="name" placeholder="Enter your fullname" value={this.state.name} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                    <Input type="text" name="username" placeholder="Username" value={this.state.className} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <FormControl required className={classes.formControl}>
                    <Input type="password" name="password" placeholder="Password" value={this.state.className} onChange={this.changeHandler} required />
                    <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <div className={classes.buttonContainer}>
                    <Button type="submit" variant="outlined" color="primary" className={classes.button}>Create Account</Button>
                    </div>
                </form>
                <p>Already have an account? click <Link to="/instructor/login">here</Link> to login to your account</p>
            </div>
        )
    }
}

const mapDispatchToProps = {
    instructorRegister
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(InstructorCreate));