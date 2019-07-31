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

    render(){
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
                    <input type="date" name="date" placeholder="mm/dd/yyy" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" placeholder="Time" value={this.state.time} onChange={this.changeHandler} />
                    <button type="submit">Create</button>
                </form>

            </div>
        )
    }
}

export default ClassEdit;