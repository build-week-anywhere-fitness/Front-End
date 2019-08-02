import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { deleteClass, instructorClasses } from '../actions/InstructorActions';
import { connect } from 'react-redux';

class Class extends React.Component {

    deleteHandler = (event) => {
        event.preventDefault()
        this.props.deleteClass(this.props.classes.classId)
            .then(() => {
                this.props.instructorClasses(this.props.match.params.id)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log("Class", this.props)
        return (
            <div className="class">
                <p>{this.props.classes.className}</p>
                <p>{this.props.classes.address}</p>
                <Link to={`/instructor/dashboard/class/edit/${this.props.classes.classId}`}><button>Edit</button></Link>
                <button onClick={this.deleteHandler}>Delete</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteClass,
    instructorClasses,
}

export default withRouter(connect(null, mapDispatchToProps)(Class));