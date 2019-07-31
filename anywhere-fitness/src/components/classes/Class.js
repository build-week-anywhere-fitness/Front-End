import React from 'react'

const Class = (props) => {

    // console.log("Class", props)

    return (
        <div className="class">
            <p>{props.classes.className}</p>
            <p>{props.classes.address}</p>
            <button>Edit</button>
        </div>
    )
}

export default Class;