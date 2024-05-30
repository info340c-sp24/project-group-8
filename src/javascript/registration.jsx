import React from "react";
import '../css/registration.css';
import { useNavigate } from "react-router-dom";
import allData from '../data/user_data.json';

function RenderRegistration(props) {
  const navigate = useNavigate();
  const[userEmail, setUserEmail] = React.useState('');
  const[userPass, setUserPass] = React.useState('');
  const[confirmPass, setConfirmPass] = React.useState('');
  const[ErrorMessage, setErrorMessage] = React.useState('');

  function handleEmailChange(event) {
    let content = event.target.value;
    setUserEmail(content);
  }

  function handlePassChange(event) {
    let content = event.target.value;
    setUserPass(content);
  }

  function handleConfirmPassChange(event) {
    let content = event.target.value;
    setConfirmPass(content);
  }

  function handleSubmit() {
    if (userPass !== confirmPass) {
      setErrorMessage("Passwords do not match");
      return;
    }

    let newUser = { email: userEmail, password: userPass };
    allData.push(newUser);

  }

  return(
    <>
    <header>
        <div className="container text-center mt-5">
          <h1 className="display-3">Register for <span id="title" className="nowrap">My Fitness UI</span></h1>
          <h2 className="fst-italic opacity-50 mt-4">"The old that is strong does not wither"</h2>
        </div>
    </header>
    <main>
      <div className="container">
      <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-12 col-lg-6">
            <div className="card mt-3 p-3 pt-0" id="register">
              <h2 className="display-6 text-center mt-3" id="error-msg">{ErrorMessage}</h2>
              <div className="card-body">
                <form className="recs-form">
                  <div className="form-group">
                    <label htmlFor="email" className="nowrap">Email</label>
                    <input type="email" className="form-control mt-3" id="email" placeholder="Enter your email" onChange={handleEmailChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control mt-3" id="password" placeholder="Enter your password" onChange={handlePassChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" className="form-control mt-3" id="confirm-password" placeholder="Confirm your password" onChange={handleConfirmPassChange}></input>
                  </div>
                </form>
                <button className="btn mt-5 w-100" id="submit-btn" onClick={handleSubmit}>Register</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </main>
    </>
  );
}

export default RenderRegistration;
