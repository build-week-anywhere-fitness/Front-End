import React from 'react'
import { Link } from 'react-router-dom';

const Class = (props) => {

    // console.log("Class", props)

    return (
        <div className="class">
            <p>{props.classes.className}</p>
            <p>{props.classes.address}</p>
            <Link to={`/instructor/dashboard/class/edit/${props.classes.classId}`}><button>Edit</button></Link>
        </div>
    )
}

export default Class;