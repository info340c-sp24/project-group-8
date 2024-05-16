// This file is to create static components for the recs.js page to put in app.js

import React from 'react';
import '../css/recs.css'

import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests for the api

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to ChatGPT with user's fitness goal
      const response = await axios.post('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', {
        model: 'chatgpt',
        prompt: fitnessGoal,
        max_tokens: 300 // Adjust as needed
      });

      // Extract recommendations from API response
      const recommendedFitnessPlans = response.data.choices[0].text.trim().split('\n');
      setRecommendations(recommendedFitnessPlans);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <section id="form">
      <form className="recs-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fitness-goal">Fitness Goal</label>
          <input
            type="text"
            className="form-control"
            id="fitness-goal"
            placeholder="Enter your ideal goal"
            value={fitnessGoal}
            onChange={(e) => setFitnessGoal(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {/* Display recommendations */}
      <div>
        <h3>Recommendations:</h3>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};


// Image Overlay Component
const ImageOverlay = () => {
    return (
      <div className="image-overlay">
        <ArrowDown />
        <TextBox />
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
      <div id="recommendations-section" className="recommendations">
        <Main />
      </div>
    );
  };

// Exporting Recommendations
export default Recommendations;
