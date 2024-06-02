import React from 'react';
import Home from './home';
import WorkoutLog from './workout-log';
import Reccom from './recs';
import Analytics from './analytics';
import LogIn from './login';
import FoodLog from './food-log';
import Registration from './registration';
import Nav from './navbar';
import Footer from './footer';
import {Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  const [user, setUser] = React.useState(null);
  function userUpdate(user) {
    setUser(user);
  }
    return (
      <>
        <Nav />
        <Routes> {/* the collection of routes to match */}
            {/* if currentUrlPath === "home" */}
            <Route path="/" element={<Home userID={user}/>} />

            {/* if currentUrlPath ===  "about" */}
            <Route path="/recommendations" element={<Reccom userID={user}/>} />

            {/* if currentUrlPath ===  "login" */}
            <Route path="/login" element={<LogIn userUpdateCallback={userUpdate}/>} />

            {/* if currentUrlPath ===  "logs" */}
            <Route path="/logs">
              <Route path='/logs/workout' element={<WorkoutLog userID={user}/>}/>
              <Route path='/logs/food' element={<FoodLog userID={user}/>}/>
            </Route>

            {/* if currentUrlPath ===  "analytics" */}
            <Route path="/analytics" element={<Analytics userID={user}/>} />

            {/* if currentUrlPath ===  "registration" */}
            <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </>
    );
  }

  export default App;