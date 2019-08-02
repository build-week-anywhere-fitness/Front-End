import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import InstructorLanding from './components/instructor/InstructorLanding'

function App() {
  return (
    <div className="App">
      <Link to="/instructor/dashboard">Instructor</Link>
      <Route path="/instructor" component={InstructorLanding} />
    </div>
  );
}

export default App;
