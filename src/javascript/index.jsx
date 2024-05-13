import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from '../reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const IndexPage = () => {
  const carouselImages = [
    'img/daniel-apodaca-WdoQio6HPVA-unsplash.jpg',
    'img/sven-mieke-jO6vBWX9h9Y-unsplash.jpg',
    'img/steven-erixon-FxlYmu_To7o-unsplash.jpg',
  ]
}

// Navbar Component
const Navbar = () => {
  const handleNavClick = (pageName) => {
    window.location.href = `${pageName}.html`;
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a
          className="navbar-brand display-5 fw-bold"
          onClick={() => handleNavClick('index')}
        >
          My Fitness UI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link fw-bold current"
                onClick={() => handleNavClick('index')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                onClick={() => handleNavClick('recs')}
              >
                Recommendations
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                onClick={() => handleNavClick('workout-log')}
              >
                Workout Logs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                onClick={() => handleNavClick('analytics')}
              >
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-bold"
                onClick={() => handleNavClick('login')}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Header Component
const Header = () => {
  return (
    <header>
      <div id="heading-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/daniel-apodaca-WdoQio6HPVA-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img/sven-mieke-jO6vBWX9h9Y-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img/steven-erixon-FxlYmu_To7o-unsplash.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <div id="heading-title">
          <h1 className="display-3">My Fitness UI</h1>
        </div>
      </div>
      <div className="w-100 text-center">
        <h2 className="fst-italic opacity-50 mt-4">
          "Life before death. Strength before weakness. Journey before destination."
        </h2>
      </div>
    </header>
  );
};

// Card Component
const Card = ({ id, title, description, onClick }) => {
  return (
    <div className="card col-lg-4 col-sm-12">
      <div className="card-body text-center page-button" onClick={onClick}>
        <h1 className="display-3 fw-bold" id={id}>
          {title}
        </h1>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};


// Main Component
const Main = () => {
  const handleCardClick = (pageName) => {
    window.location.href = `${pageName}.html`;
  };

  return (
    <main>
      <div className="container p-5">
        <div className="row gy-3 gx-sm-5">
          <Card
            id="innovate"
            title="Innovate"
            description="Set your goal and see our reccomendations for an optimal fitness journey."
            onClick={() => handleCardClick('recs')}
          />
          <Card
            id="motivate"
            title="Motivate"
            description="Log your progress and see your track record. Knowledge is power."
            onClick={() => handleCardClick('workout-log')}
          />
          <Card
            id="evaluate"
            title="Evaluate"
            description="Check how well you have done across your journey."
            onClick={() => handleCardClick('analytics')}
          />
        </div>
      </div>
    </main>
  );
};

// Footer Component
const Footer = () => {
  return <footer>
    <p>&copy; Group-8</p>
  </footer>;
};

// Index Component
const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Index;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
