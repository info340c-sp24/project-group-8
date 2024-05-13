// This file is to create static components for the workout-log.js page to put in app.js

import React from 'react';
import '../css/recs.css'

// Navbar component
const Navbar = () => {
  return (
<nav>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand display-5 fw-bold" onclick="openIndexPage()">My Fitness UI</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link fw-bold" onclick="openIndexPage()">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" onclick="openRecsPage()">Recommendations</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold current" onclick="openLogPage()">Workout Logs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" onclick="openAnalyticsPage()">Analytics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" onclick="openLoginPage()">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </nav>
  );
};

// Header component
const Header = () => {
    return (
      <header>
      <div class="container text-center mt-5">
        <h1 class="display-3 nowrap">Workout Log</h1>
        <h2 class="fst-italic opacity-50 mt-4">"History repeats itself"</h2>
      </div>
    </header>
    );
  };

// Table component
const Table = () => {
  return (
    <div class="container mt-5">

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
            <td>8:00</td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
            <td><input type="text" value="your plan"></input></td>
        </tr>

        <tr>
          <td>9:00</td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
          <td><input type="text" value="your plan"></input></td>
      </tr>

      <tr>
        <td>10:00</td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
        <td><input type="text" value="your plan"></input></td>
    </tr>

    <tr>
      <td>11:00</td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
      <td><input type="text" value="your plan"></input></td>
  </tr>

<tr>
    <td>12:00</td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
    <td><input type="text" value="your plan"></input></td>
</tr>

<tr>
  <td>13:00</td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
</tr>

<tr>
<td>14:00</td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
</tr>

<tr>
<td>15:00</td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
</tr>

<tr>
  <td>16:00</td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
  <td><input type="text" value="your plan"></input></td>
</tr>

<tr>
<td>17:00</td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
</tr>

<tr>
<td>18:00</td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
</tr>

<tr>
<td>19:00</td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
<td><input type="text" value="your plan"></input></td>
</tr>

<tr>
  <td>20:00</td>
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
const Footer = () => {
  return (
    <footer>
        <p>&copy; Group-8</p>
      </footer>
  );
};

// Main component
const Main = () => {
    return (
      <main>
        <Navbar />
        <Header />
        <Table/>
        <Footer/>
      </main>
    );
  };

// Recommendations component
const Workout_log = () => {
    return (
      <div id="workout-log-section" className="workout-logß">
        <Main />
      </div>
    );
  };

// Exporting workout logsß
export default Workout_log;
