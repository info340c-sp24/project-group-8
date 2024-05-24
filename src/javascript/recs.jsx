// This file is to create static components for the recs.js page to put in app.js

import '../css/recs.css'

import React, { useState } from 'react';
//import axios from 'axios'; // Import axios for making HTTP requests for the api

// Header component
const Header = () => {
    return (
      <header>
        <div className="container text-center mt-5">
          <h1 className="display-3 fw-bold">MyFitness Recommendations</h1>
          <h2 className="fst-italic opacity-50 mt-4">"Success only comes to those who dare to attempt."</h2>
          <h3 className="fw-bold mt-4"> Let us help you with finding the perfect plan</h3>
        </div>
      </header>
    );
  };

// Form component
const Form = () => {
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  function handleSubmit () {

  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Make API call to ChatGPT with user's fitness goal
  //     const response = await axios.post('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', {
  //       model: 'chatgpt',
  //       prompt: fitnessGoal,
  //       max_tokens: 300 // Adjust as needed
  //     });

  //     // Extract recommendations from API response
  //     const recommendedFitnessPlans = response.data.choices[0].text.trim().split('\n');
  //     setRecommendations(recommendedFitnessPlans);
  //   } catch (error) {
  //     console.error('Error fetching recommendations:', error);
  //   }
  // };

};


// Image Overlay Component
const ImageOverlay = () => {
    return (
      <div className="image-overlay">
        <ArrowDown />
      </div>
    );
  };

  // Arrow Down Component
  const ArrowDown = () => {
    return <div className="arrow-down"></div>;
  };


// Main component
const Main = () => {
    return (
      <main>
        <Header />
        <Form />
        <ImageOverlay/>
        <ArrowDown/>
      </main>
    );
  };

// Recommendations component
const Recommendations = () => {
    return (
      <div>
          <header>
    <div className="container text-center mt-5">
      <h1 className="display-3 fw-bold">MyFitness Recommendations</h1>
      <h2 className="fst-italic opacity-50 mt-4">"Success only comes to those who dare to attempt."</h2>
      <h3 className="fw-bold mt-4">Let us help you with finding the perfect plan</h3>
    </div>
  </header>
  <main>
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-xs-12 col-md-8">
        <div className="card w-100 ml-3 mt-5 p-5 pt-2" id="recommendations-card">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold" id="header2">Tailored to you...</h2>
            <div className="row text-center" >
              <div className="col-sm-12">
                <form className="recs-form">
                  <div className="form-group">
                    <label id="goal-label" htmlFor="fitness-goal">Fitness Goal</label>
                    <input type="text" className="form-control" id="fitness-goal" placeholder="Ex: Make a Plan for a 6 Month Bulk"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  </main>
      </div>
    );
  };

// Exporting Recommendations
export default Recommendations;
