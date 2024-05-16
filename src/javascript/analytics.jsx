import React from "react";

function Navbar() {
  return(
    <nav>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand display-5 fw-bold" onclick="openIndexPage()">My Fitness UI</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link fw-bold" onclick="openIndexPage()">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold" onclick="openRecsPage()">Recommendations</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold" onclick="openLogPage()">Workout Logs</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold current" onclick="openAnalyticsPage()">Analytics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold" onclick="openLoginPage()">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
  );
}

function AnalyticsContent() {
  return(
    <div class="row">
      <div class="col-xs-12">
              <div class="card w-100 ml-3 mt-5 p-5 pt-2" id="general">
                <div class="card-body text-center text-lg-start">
                  <h2 class="display-4 nowrap fw-bold">General</h2>
                  <div class="row text-center">
                    <div class="col-sm-12 col-lg-4">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Net Average Calorie</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-cal-net" class="display-3 nowrap">+95</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-4">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Last Recorded Weight</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="rec-weight" class="display-3 nowrap">95</h4> <span>kg</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-lg-4">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Excercise BPM</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-bpm" class="display-3 nowrap">100</h4> <span>BPM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">

              <div class="card w-100 ml-3 mt-5 p-5 pt-2" id="workout">
                <div class="card-body text-center text-lg-start">
                  <h2 class="display-4 nowrap fw-bold">Workout</h2>
                  <div class="row text-center">

                    <div class="col-sm-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Monthly Workout</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="monthly-wo" class="display-3 nowrap">24/30</h4> <span>day</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Calorie Output</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-cal-out" class="display-3 nowrap">1205</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-sm-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Favourite Excercise</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="fav-exc" class="display-3 nowrap">SIT UPS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              {/*<!--Macros Card-->*/}
              <div class="card w-100 ml-3 mt-5 p-5 pt-2" id="macros">
                <div class="card-body text-center text-lg-start">
                  <h2 class="display-4 nowrap fw-bold">Food Macros</h2>
                  <div class="row text-center">
                    {/*<!--Content 1: Average Daily Calorie Intake -->*/}
                    <div class="col-sm-12 col-lg-3 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Calorie</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-cal-in" class="display-3 nowrap">1300</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>
                    {/*<!--Content 2: Carbohydrate -->*/}
                    <div class="col-sm-12 col-lg-3 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Carb</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-carb" class="display-3 nowrap">400</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>
                    {/*<!--Content 3: Protein-->*/}
                    <div class="col-sm-12 col-lg-3 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Protein</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-prot" class="display-3 nowrap">600</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>
                    {/*<!--Content 4: Fat-->*/}
                    <div class="col-sm-12 col-lg-3 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Fat</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-fat" class="display-3 nowrap">300</h4> <span>cal/day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              {/*<!--Hydration Card-->*/}
              <div class="card w-100 ml-3 mt-5 p-5 pt-2" id="hydro">
                <div class="card-body text-center text-lg-start">
                  <h2 class="display-4 nowrap fw-bold">Hydration</h2>
                  <div class="row text-center">
                    {/*<!--Content 1: Average Water Intake -->*/}
                    <div class="col-sm-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3 class="">Average Hydration</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-hydro-in" class="display-3 nowrap">6.5</h4> <span>glasses of water</span>
                        </div>
                      </div>
                    </div>
                    {/*<!--Content 2: Hydration Level day -->*/}
                    <div class="col-sm-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Monthly Hydrated day</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="hydro-month" class="display-3 nowrap">20/30</h4> <span>day</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12">
              {/*<!--Miscellanous Card-->*/}
              <div class="card w-100 ml-3 mt-5 p-5 pt-2" id="misc">
                <div class="card-body text-center text-lg-start">
                  <h2 class="display-4 nowrap fw-bold">Miscellanous</h2>
                  <div class="row text-center">
                    {/*<!--Content 1: Average Hours Sleep Daily -->*/}
                    <div class="col-sm-12 col-lg-4 text-center">
                      <div class="row p-5">
                        <div class="col-12">
                          <h3>Average Sleep Hours</h3>
                        </div>
                        <div class="col-12">
                          <h4 id="avg-hydro-in" class="display-3 nowrap">6.5</h4> <span>hours/day</span>
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
  return (
    <>
      <NavBar/>
      <header>
        <div class="container text-center mt-5">
          <h1 class="display-3 fw-bold">Analytics</h1>
          <h2 class="fst-italic opacity-50 mt-4">"The unexamined life is not worth living."</h2>
        </div>
      </header>

      <main>
        <div class="container">
          <AnalyticsContent />
        </div>
      </main>

      <footer>
        <p>&copy; Group-8</p>
      </footer>

    </>
    );
}