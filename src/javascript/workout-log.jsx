// This file is to create static components for the workout-log.js page to put in app.js

import React from 'react';
import '../css/recs.css';

// Navbar component
function Navbar() {
  return (
<nav>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand display-5 fw-bold" onclick="openIndexPage()">My Fitness UI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold" onclick="openIndexPage()">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" onclick="openRecsPage()">Recommendations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold current" onclick="openLogPage()">Workout Logs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" onclick="openAnalyticsPage()">Analytics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" onclick="openLoginPage()">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </nav>
  );
};

// Header component
function Header() {
    return (
      <header>
      <div className="container text-center mt-5">
        <h1 className="display-3 nowrap">Workout Log</h1>
        <h2 className="fst-italic opacity-50 mt-4">"History repeats itself"</h2>
      </div>
    </header>
    );
  };

//function to update the Log
function updateLog() {
  // Get the selected day, time, and activity
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
  var activity = document.getElementById("activity").value;

  // Find the corresponding cell in the table and update its value
  var table = document.querySelector("table");
  var rows = table.rows;
  for (var i = 1; i < rows.length; i++) {
    var cells = rows[i].cells;
    // Find the cell corresponding to the selected day and time
    if (cells[0].innerText === time) {
      // Update the cell value with the user's activity
      cells[i].querySelector("input").value = activity;
      break; // Exit loop after updating the cell
    }
  }
}

// Table component
function Table() {
  return (
    <div className="container mt-5">
      <label for="day">Select Day:</label>
        <br>
        <select id="day">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        </br>
        <br>
        <label for="time">Select Time:</label>
        <select id="time">
          <option value="Morning">Morning</option>
          <option value="Noon">Noon</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        </br>
        <br>
        <label for="activity">Activity:</label>
        <textarea id="activity" rows="4" cols="50"></textarea>
        </br>
        <button onclick="updateLog()">Submit</button>

<table>
          <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
          </tr>
          <tr>
              <td>Morning</td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
              <td><input type="text" value="your plan"></input></td>
          </tr>
          <tr>
            <td>Noon</td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
        </tr>
        <tr>
          <td>Afternoon</td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
      </tr>
      <tr>
        <td>Evening</td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
    </tr>
        </table>
      </div>
  );
};

//Footer component
function Footer() {
  return (
    <footer>
        <p>&copy; Group-8</p>
      </footer>
  );
};

// Main component
function Main() {
    return (
      <main>
        <Navbar />
        <Header />
        <Table/>
        <Footer/>
        <updateLog />
      </main>
    );
  };

// Recommendations component
function Workout_log() {
    return (
      <div id="workout-log-section" className="workout-log">
        <Main />
      </div>
    );
  };


// Exporting workout logs
export default Workout_log;
