import React from 'react';
import Home from './home';
import WorkoutLog from './workout-log';
import Reccom from './recs';
import Analytics from './analytics';
import LogIn from './login';
import Nav from './navbar';
import Footer from './footer';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [user, setUser] = React.useState(null);
  function userUpdate(userObject) {
    setUser(userObject);
  }
    return (
      <>
        <Nav />
        <Routes> {/* the collection of routes to match */}
            {/* if currentUrlPath === "home" */}
            <Route path="/" element={<Home userObject={user}/>} />

            {/* if currentUrlPath ===  "about" */}
            <Route path="/recommendations" element={<Reccom userObject={user}/>} />

            {/* if currentUrlPath ===  "login" */}
            <Route path="/login" element={<LogIn userUpdateCallback={userUpdate}/>} />

            {/* if currentUrlPath ===  "workout-logs" */}
            <Route path="/logs" element={<WorkoutLog userObject={user} userUpdateCallback={userUpdate}/>} />

            {/* if currentUrlPath ===  "analytics" */}
            <Route path="/analytics" element={<Analytics userObject={user}/>} />
        </Routes>
        <Footer />
      </>
    );
  }

  export default App;