// This file is to create static components for the recs.js page to put in app.js
import { useNavigate } from 'react-router-dom';
import '../css/recs.css'
import React from 'react';
//import axios from 'axios'; // Import axios for making HTTP requests for the api

// Recommendations component
const Recommendations = (props) => {
  const navigate = useNavigate();
  let user = props.userObject;
  React.useEffect(() => {
    if(user === null) {
      navigate("/login");
    }
  });
    return (
      <>
        <header>
          <div className="container text-center mt-5">
            <h1 className="display-3 fw-bold">MyFitness Recommendations</h1>
            <h2 className="fst-italic opacity-50 mt-4">"Success only comes to those who dare to attempt."</h2>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col-1 col-lg-2"></div>
            <div className="col-10 col-lg-8">
              <div className="card w-100 ml-3 mt-5 p-5 pt-2" id="recommendations-card">
                <div className="card-body text-center text-lg-start">
                  <h2 className="display-3 fw-bold text-center" id="recs-question">Your question here</h2>
                  <div className="row text-center pt-5" >
                    <div className="col-12 mt-5 mb-5">
                      <h3 className="display-5 fw-bold" id="recs-answer">Your answer will go here</h3>
                    </div>
                    <div className="col-12 mt-5">
                      <form className="recs-form">
                        <div className="form-group">
                          <label htmlFor="fitness-goal"><h3 className="display-5 fw-bold">Ask Here!</h3></label>
                          <input type="text" className="form-control mb-5 mt-3" id="fitness-goal" placeholder="Ex: Make a Plan for a 6 Month Bulk"/>
                        </div>
                        <button type="submit" className="btn w-100 fw-bold" id="recs-submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 col-lg-2"></div>
          </div>
        </main>
      </>
    );
  };

// Exporting Recommendations
export default Recommendations;
