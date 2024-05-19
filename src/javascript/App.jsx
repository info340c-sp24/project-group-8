import React from 'react';
import Home from './home';
import WorkoutLog from './workout-log';
import * as Helper from './helper';
import Reccom from './recs';
import Analytics from './analytics';
import LogIn from './login';
import Nav from './navbar';
import Footer from './footer';
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
      <>
        <Nav />
        <Routes> {/* the collection of routes to match */}
            {/* if currentUrlPath === "home" */}
            <Route path="/" element={<Home />} />

            {/* if currentUrlPath ===  "about" */}
            <Route path="/recomnendations" element={<Reccom />} />

            {/* if currentUrlPath ===  "login" */}
            <Route path="/login" element={<LogIn />} />

            {/* if currentUrlPath ===  "workout-logs" */}
            <Route path="/workout-logs" element={<WorkoutLog />} />

            {/* if currentUrlPath ===  "anlaytics" */}
            <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </>
    );
  }

  export default App;