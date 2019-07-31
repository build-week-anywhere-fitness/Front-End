import React from 'react';
import { connect } from 'react-redux'

class ClassEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            city: "",
            className: "",
            date: "",
            description: "",
            fullname: this.props.instructorFullname,
            instructorId: this.props.instructorId,
            state: "",
            time: "",
            username: this.props.instructorUsername,
            zipcode: ""
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

    render(){
        console.log("class edit", this.props)
        const currentClass = this.props.classes.filter(current => (current.classId === parseInt(this.props.match.params.id)))
        console.log(currentClass[0].className)
        return (
            <div className="edit-class">
                <h3>Edit Your Class</h3>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="className" placeholder={currentClass[0].className} value={this.state.className} onChange={this.changeHandler} />
                    <input type="text" name="description" placeholder={currentClass[0].description} value={this.state.description} onChange={this.changeHandler} />
                    <input type="text" name="address" placeholder={currentClass[0].address} value={this.state.address} onChange={this.changeHandler} />
                    <input type="text" name="city" placeholder={currentClass[0].city} value={this.state.city} onChange={this.changeHandler} />
                    <input type="text" name="state" placeholder={currentClass[0].state} value={this.state.state} onChange={this.changeHandler} />
                    <input type="text" name="zipcode" placeholder={currentClass[0].zipcode} value={this.state.zipcode} onChange={this.changeHandler} />
                    <input type="date" name="date" placeholder={currentClass[0].date} value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" placeholder={currentClass[0].time} value={this.state.time} onChange={this.changeHandler} />
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

export default connect(mapStateToProps)(ClassEdit);