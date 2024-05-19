import { NavLink } from 'react-router-dom';
import React from 'react';

function Navigation() {
  <nav id="navigation">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand display-5 fw-bold" to="/" >
          My Fitness UI
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fw-bold current" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/recommendations">Recommendations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/workout-logs">Workout Logs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/analytics">Analytics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
}

export default Navigation;