import React from 'react';
import InstructorCreate from './InstructorCreate';
import InstructorLogin from './InstructorLogin';

class InstructorDashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <InstructorCreate />
                <InstructorLogin />
            </div>
        )
    }
}

export default InstructorDashboard;