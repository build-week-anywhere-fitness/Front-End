import React from 'react';
import InstructorCreate from './InstructorCreate';

class InstructorDashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <InstructorCreate />
            </div>
        )
    }
}

export default InstructorDashboard;