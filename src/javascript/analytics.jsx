import React, { useEffect } from "react";
import '../css/analytics.css';
import { useNavigate } from "react-router-dom";
function AnalyticsContent() {
  return(
    <div className="row">
      <div className="col-xs-12">
        <div className="card-analytics card w-100 ml-3 mt-5 p-5 pt-2" id="general">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">General</h2>
            <div className="row text-center">
              <div className="col-sm-12 col-lg-4">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Net Average Calorie</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-cal-net" className="display-3 nowrap">+95</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Last Recorded Weight</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="rec-weight" className="display-3 nowrap">95</h4> <span>kg</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Excercise BPM</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-bpm" className="display-3 nowrap">100</h4> <span>BPM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12">

        <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="workout">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">Workout</h2>
            <div className="row text-center">

              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Monthly Workout</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="monthly-wo" className="display-3 nowrap">24/30</h4> <span>day</span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Calorie Output</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-cal-out" className="display-3 nowrap">1205</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Favourite Excercise</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="fav-exc" className="display-3 nowrap">SIT UPS</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        {/*<!--Macros Card-->*/}
        <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="macros">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">Food Macros</h2>
            <div className="row text-center">
              {/*<!--Content 1: Average Daily Calorie Intake -->*/}
              <div className="col-sm-12 col-lg-3 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Calorie</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-cal-in" className="display-3 nowrap">1300</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>
              {/*<!--Content 2: Carbohydrate -->*/}
              <div className="col-sm-12 col-lg-3 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Carb</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-carb" className="display-3 nowrap">400</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>
              {/*<!--Content 3: Protein-->*/}
              <div className="col-sm-12 col-lg-3 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Protein</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-prot" className="display-3 nowrap">600</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>
              {/*<!--Content 4: Fat-->*/}
              <div className="col-sm-12 col-lg-3 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Fat</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-fat" className="display-3 nowrap">300</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        {/*<!--Hydration Card-->*/}
        <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="hydro">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">Hydration</h2>
            <div className="row text-center">
              {/*<!--Content 1: Average Water Intake -->*/}
              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3 className="">Average Hydration</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-hydro-in" className="display-3 nowrap">6.5</h4> <span>glasses of water</span>
                  </div>
                </div>
              </div>
              {/*<!--Content 2: Hydration Level day -->*/}
              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Monthly Hydrated day</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="hydro-month" className="display-3 nowrap">20/30</h4> <span>day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        {/*<!--Miscellanous Card-->*/}
        <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="misc">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">Miscellanous</h2>
            <div className="row text-center">
              {/*<!--Content 1: Average Hours Sleep Daily -->*/}
              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Sleep Hours</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-hydro-in" className="display-3 nowrap">6.5</h4> <span>hours/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Analytics(props) {
  const navigate = useNavigate();
  let user = props.userObject;
  useEffect(() => {
    if(user === null) {
      navigate("/login");
    }
  });

  return (
    <>
      <header>
        <div className="container text-center mt-5">
          <h1 className="display-3 fw-bold">Analytics</h1>
          <h2 className="fst-italic opacity-50 mt-4">"The unexamined life is not worth living."</h2>
        </div>
      </header>

      <main>
        <div className="container">
          <AnalyticsContent userData={user}/>
        </div>
      </main>
    </>
    );
}

export default Analytics;