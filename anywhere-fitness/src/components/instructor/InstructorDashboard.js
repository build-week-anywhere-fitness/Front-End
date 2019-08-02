import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { instructorClasses } from '../actions/InstructorActions';
import Class from '../classes/Class';
import ClassesCreate from '../classes/ClassesCreate'


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
        return (
            <div className="dashboard">
                <button type="button" onClick={this.logout}>Logout</button>
                <h1>Hello</h1>
                <h2>Your Classes</h2>
                {this.props.classes.map(classes => (
                    <Class classes={classes} key={classes.classId} />
                ))}
                <ClassesCreate />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.instructorReducer.classes
    }
}

const mapDispatchToProps = {
    instructorClasses,
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(InstructorDashboard)
    );