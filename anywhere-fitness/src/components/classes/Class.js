import React from 'react'

const Class = (props) => {

    console.log("Class", props)

    return (
        <div className="class">
            <p>{props.classes.className}</p>
            <p>{props.classes.address}</p>
        </div>
    )
}

export default Class;