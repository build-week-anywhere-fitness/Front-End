import React from "react";
import {connect} from "react-redux";

function ClientList (props) {
    return (
        <div>
            {props.error && <p className="error">{props.error}</p>}
            <div>
                {props.clients.map(item=>{
                    return (
                    <p key={item.id}>Name: {item.name} Email: {item.email}</p>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps =state => {
    return {
        clients: state.clients,

        creatingInstructorList: state.creatingInstructorList,
        creatingClassList: state.creatingClassList,
        creatingClients: state.creatingClients,
        creatingPunchCard: state.creatingPunchCard,

        readingInstructorList: state.readingInstructorList,
        readingClassList: state.readingClassList,
        readingClients: state.readingClients,
        readingPunchCard: state.readingPunchCard,

        updatingInstructorList: state.updatingInstructorList,
        updatingClassList: state.updatingClassList,
        updatingClients: state.updatingClients,
        updatingPunchCard: state.updatingPunchCard,

        deletingInstructorList: state.deletingInstructorList,
        deletingClassList: state.deletingClassList,
        deletingClients: state.deletingClients,
        deletingPunchCard: state.deletingPunchCard,

        error: state.error,
    }
}

export default connect(mapStateToProps)(ClientList);