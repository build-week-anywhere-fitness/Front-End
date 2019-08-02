import React from "react";
import { connect } from "react-redux";

function ClassList(props) {
    return (
        <div>
            {props.error && <p className="error">{props.error}</p>}
            <div>
                {props.classes.map(item => {
                    return (
                        <p key={item.id}>Name: {item.name} Email: {item.email}</p>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error,
    }
}

export default connect(mapStateToProps)(ClassList);