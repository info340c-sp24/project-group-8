import React from 'react';
import '../css/home.css';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';


function CaroImage(props) {
  //console.log(props.img)
  let img = props.img;
  let active = props.active;
  let classActive = "";
  if (active === "1") {
    classActive = " active";
  }
  console.log(img + ", " + active);
  return(
    <div className={"carousel-item " + classActive}>
      <img src={img} className="d-block w-100" alt={img} />
    </div>
  );
}

  // Header Component
  const Header = (props) => {
    let greet = "";
    let user = props.userID;
    if (!_.isNull(user)) {
      greet = "Welcome, " + user + "!";
    }
    let carouselImages = props.imgs;
    let index = props.current % 3;
    //console.log(carouselImages);
    let carousel = <CaroImage img={carouselImages[index]} active="1"/>
    console.log(carousel);
    return (
      <header>
        <div id="heading-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <div className="carousel-inner">
            {carousel}
          </div>
          <div id="heading-title">
            <h1 className="display-3">My Fitness UI</h1>
          </div>
          <h2 className="mt-3 text-center display-5 fw-bold">{greet}</h2>
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
    const navigate = useNavigate();
    const toPage = (pageName) => {
      navigate("/" + pageName);
    };

    return (
      <main>
        <div className="container p-5">
          <div className="row gy-3 gx-sm-5">
            <Card
              id="innovate"
              title="Innovate"
              description="Set your goal and see our reccomendations for an optimal fitness journey."
              onClick={() => toPage('recommendations')}
            />
            <Card
              id="motivate"
              title="Motivate"
              description="Log your progress and see your track record. Knowledge is power."
              onClick={() => toPage('logs/workout')}
            />
            <Card
              id="evaluate"
              title="Evaluate"
              description="Check how well you have done across your journey."
              onClick={() => toPage('analytics')}
            />
          </div>
        </div>
      </main>
    );
  };

  // Index Component
  function Index(props) {
    console.log(props.userID);
    const [myTime, setMyTime] = React.useState(0);

    React.useEffect(() => {
      // create a interval and get the id
      const myInterval = setInterval(() => {
        setMyTime((prevTime) => prevTime + 1);
      }, 5000);
      // clear out the interval using it id when unmounting the component
      return () => clearInterval(myInterval);
    }, []);

    const carouselImages = [
      'img/daniel-apodaca-WdoQio6HPVA-unsplash.jpg',
      'img/sven-mieke-jO6vBWX9h9Y-unsplash.jpg',
      'img/steven-erixon-FxlYmu_To7o-unsplash.jpg',
    ]
    return (
      <>
        <Header imgs={carouselImages} current={myTime} userID={props.userID}/>
        <Main />
      </>
    );
  };

  export default Index;