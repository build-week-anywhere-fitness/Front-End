import React from 'react';
import { Route } from 'react-router-dom';
import InstructorDashboard from './InstructorDashboard';
import PrivateRoute from '../PrivateRoute';
import InstructorLogin from './InstructorLogin';
import InstructorCreate from './InstructorCreate';

class InstructorLanding extends React.Component {

    render() {
        return(
            <div className="instructor-landing">
                <PrivateRoute exact path="/instructor/dashboard" component={InstructorDashboard} />
                <Route exact path="/instructor/login" component={InstructorLogin} />
                <Route exact path="/instructor/create" component={InstructorCreate}/>
            </div>
        )
    }
}

export default InstructorLanding;