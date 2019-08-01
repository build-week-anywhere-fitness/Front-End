import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import InstructorDashboard from './InstructorDashboard';
import PrivateRoute from '../PrivateRoute';
import InstructorLogin from './InstructorLogin';
import InstructorCreate from './InstructorCreate';
import ClassEdit from '../classes/ClassEdit'

class InstructorLanding extends React.Component {

    render() {
        return(
            <div className="instructor-landing">
                <PrivateRoute path="/instructor/dashboard/:id" exact component={InstructorDashboard} />
                <Route exact path="/instructor/login" component={InstructorLogin} />
                <Route exact path="/instructor/create" component={InstructorCreate}/>
                <Route path="/instructor/dashboard/class/edit/:id" exact render={(props) => <ClassEdit {...props} classes={this.props.classes} />} />
            </div>
        )
    }
}

export default withRouter(InstructorLanding);