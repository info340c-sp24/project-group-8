import { NavLink } from 'react-router-dom';
import '../css/template.css'
import React from 'react';

function Navigation() {
  return (<nav id="navigation">
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
              <NavLink className="nav-link fw-bold current" to="/" id="home" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/recommendations" id="recs" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Recommendations</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/logs/workout" id="logs" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Logs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/analytics" id="analytics" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Analytics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/login" id="login" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to="/registration" id="registration" style={isActive => {
                if (isActive.isActive) {
                  return ({color:"chartreuse"})
                } else {
                  return ({color:"white"})
                }
              }}>Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>);
}

export default Navigation;