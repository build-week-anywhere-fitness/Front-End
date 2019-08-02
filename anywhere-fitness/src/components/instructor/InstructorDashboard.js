import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorClasses } from '../actions/InstructorActions';
import Class from '../classes/Class';
import ClassesCreate from '../classes/ClassesCreate'
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 auto',
        maxWidth: '1000px',
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
        console.log("Dashboard", this.props)
        const { classes } = this.props;
        return (
            <div className="dashboard">
                <button type="button" onClick={this.logout}>Logout</button>
                <h1>Hello</h1>
                <h2>Your Classes</h2>
                <div className={classes.container}>
                {this.props.instructorclass.map(classes => (
                    <Class instructorclass={classes} key={classes.classId} />
                ))}
                <ClassesCreate />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorclass: state.instructorReducer.classes
    }
}

const mapDispatchToProps = {
    instructorClasses,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(InstructorDashboard))
    );