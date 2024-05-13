import React from 'react';
import '../css/recs.css'

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
    return (
      <section id="form">
        <form className="recs-form">
          <div className="form-group">
            <label htmlFor="fitness-goal">Fitness Goal</label>
            <input type="text" className="form-control" id="fitness-goal" placeholder="Enter your ideal goal" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
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
