import React from 'react';
import { connect } from 'react-redux';

class ClassesCreate extends React.Component {
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

    render() {
        console.log('class create', this.props)
        return (
            <div className="create-class">
                <h3>Create a Class</h3>
                <form>
                    <input type="text" name="className" placeholder="Enter the name of your class" value={this.state.className} onChange={this.changeHandler} />
                    <input type="text" name="description" placeholder="Enter the description of your class" value={this.state.description} onChange={this.changeHandler} />
                    <input type="text" name="address" placeholder="Street" value={this.state.address} onChange={this.changeHandler} />
                    <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.changeHandler} />
                    <input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.changeHandler} />
                    <input type="text" name="zipcode" placeholder="Zip" value={this.state.zipcode} onChange={this.changeHandler} />
                    <input type="date" name="date" placeholder="Date" value={this.state.date} onChange={this.changeHandler} />
                    <input type="time" name="time" placeholder="Time" value={this.state.time} onChange={this.changeHandler} />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructorId: state.instructorId,
        instructorFullname: state.instructorFullname,
        instructorUsername: state.instructorUsername,
    }
}

export default connect(mapStateToProps)(ClassesCreate);