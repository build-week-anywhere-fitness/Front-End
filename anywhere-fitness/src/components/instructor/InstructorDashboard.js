import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorClasses } from '../actions/InstructorActions';
import Class from '../classes/Class';
import ClassesCreate from '../classes/ClassesCreate'
import Navbar from './NavBar';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme =>({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        maxWidth: '1000px',
    },
    sectionTitle: {
        width: "100%",
        margin: theme.spacing(1)
    },
    text: {
        margin: theme.spacing(1)
    },
    title: {
        margin: '20px auto'
    }
  })

class InstructorDashboard extends React.Component {

    componentDidMount() {
        this.props.instructorClasses(this.props.match.params.id)
    }

    logout = (event) => {
        event.preventDefault()

        localStorage.removeItem('token')
        this.props.history.push('/instructor/login')
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="dashboard">
                <Navbar logout={this.logout}/>
                {/* <button type="button" onClick={this.logout}>Logout</button> */}
                <Typography gutterBottom variant="h4" component="h1" className={classes.title}><b>{this.props.instructorMessage ? this.props.instructorMessage : "Welcome!"}</b></Typography>
                <div className={classes.container}>
                <Typography gutterBottom component="h2" variant="h5" align="left" className={classes.sectionTitle}><b>Your Classes:</b></Typography>
                {this.props.instructorclass.length !== 0 ? this.props.instructorclass.map(classes => (
                    <Class instructorclass={classes} key={classes.classId} />
                )) : <Typography gutterBottom component="h2" variant="body1" className={classes.text}>You don't have any classes yet. Scroll down to the 'Create a Class' section to create a class.</Typography>}
                <ClassesCreate />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorclass: state.instructorReducer.classes,
        instructorMessage: state.instructorReducer.instructorMessage
    }
}

const mapDispatchToProps = {
    instructorClasses,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InstructorDashboard))
    );