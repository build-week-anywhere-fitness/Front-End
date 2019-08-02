import React from 'react';
import { connect } from 'react-redux'
import { editClass } from '../actions/InstructorActions'

class ClassEdit extends React.Component {
    constructor(props) {
        super(props)
        const currentClass = this.props.classes.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        this.state = {
            address: currentClass[0].address,
            city: currentClass[0].city,
            className: currentClass[0].className,
            date: currentClass[0].date,
            description: currentClass[0].description,
            instructorId: this.props.instructorId,
            state: currentClass[0].state,
            time: currentClass[0].time,
            zipcode: currentClass[0].zipcode,
            categoryId: currentClass[0].categoryId
        }
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    cancelHandler = (event) => {
        event.preventDefault()
        this.props.history.goBack()
    }

    submitHandler = (event) => {
        event.preventDefault();
        const { address, city, className, date, description, fullname, instructorId, state, time, username, zipcode, categoryId } = this.state
        this.props.editClass(this.props.match.params.id, { address: address, city: city, name: className, date: date, description: description, instructor_id: instructorId, state: state, time: time, zipcode: zipcode, category_id: categoryId })
    }

    render(){
        console.log("class edit", this.props)
        const currentClass = this.props.classes.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        console.log(currentClass[0].className)
        return (
            <div className="edit-class">
                <h3>Edit Your Class</h3>
                <form onSubmit={this.submitHandler}>
                <input type="text" name="className" placeholder="Enter the name of your class" value={this.state.className} onChange={this.changeHandler} />
                    <input type="text" name="description" placeholder="Enter the description of your class" value={this.state.description} onChange={this.changeHandler} />
                    <input type="text" name="address" placeholder="Street" value={this.state.address} onChange={this.changeHandler} />
                    <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.changeHandler} />
                    <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.changeHandler} />
                    <input type="text" name="zipcode" placeholder="Zip" value={this.state.zipcode} onChange={this.changeHandler} />
                    <input type="date" name="date" placeholder="Date" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" placeholder="Time" value={this.state.time} onChange={this.changeHandler} />
                    <button type="submit">Update</button>
                    <button type="button" onClick={this.cancelHandler}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes: state.classes
    }
}

const mapDispatchToProps = {
    editClass
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassEdit);