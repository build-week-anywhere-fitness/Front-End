import React from 'react';

class ClassesCreate extends React.Component {
    constructor() {
        super()
        this.state = {
            address: "",
            city: "",
            className: "",
            date: null,
            description: "",
            fullname: "",
            instructorId: 2,
            state: "",
            time: "",
            username: "",
            zipcode: ""
        }
    }

    render() {
        return (
            <div className="create-class">
                <h3>Create a Class</h3>
                <form>
                    <input type="text" name="className" placeholder="Enter the name of your class" value={this.state.className} />
                    <input type="text" name="description" placeholder="Enter the description of your class" value={this.state.description} />
                    <input type="text" name="address" placeholder="Street" value={this.state.className} />
                    <input type="text" name="city" placeholder="City" value={this.state.className} />
                    <input type="text" name="state" placeholder="State" value={this.state.className} />
                    <input type="text" name="zipcode" placeholder="Zip" value={this.state.className} />
                    <input type="text" name="date" placeholder="Date" value={this.state.className} />
                    <input type="text" name="time" placeholder="Time" value={this.state.className} />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
}

export default ClassesCreate;