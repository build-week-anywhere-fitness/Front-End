import React from 'react';
import { Route } from 'react-router-dom';
import InstructorDashboard from './InstructorDashboard';

class InstructorLanding extends React.Component {

    render() {
        return(
            <div className="instructor-landing">
                <Route exact path="/instructor/dashboard" component={InstructorDashboard} />
            </div>
        )
    }
}

export default InstructorLanding;