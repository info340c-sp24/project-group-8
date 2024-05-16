import React from "react";

function NavBar() {
  return(
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
                <a class="nav-link fw-bold" onclick="openAnalyticsPage()">Analytics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold current" onclick="openLoginPage()">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

function LoginContent() {
  return(
    <div class="row">
        <div class="col-xs-none col-md-3"></div>
        <div class="col-xs-12 col-md-6">
          <div class="card mt-3 p-3 pt-0">
            <div class="card-body">
              <form class="recs-form">
                <div class="form-group">
                  <label for="email" class=" nowrap">Email</label>
                  <input type="email" class="form-control mt-3" id="email" placeholder="Enter your email"></input>
                </div>
                <div class="form-group mt-4">
                  <label for="password">Password</label>
                  <input type="password" class="form-control mt-3" id="password" placeholder="Enter your password"></input>
                </div>
                <button class="btn mt-5 w-100" id="submit-btn">Login</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xs-none col-md-4"></div>
      </div>
  );
}

function RenderLogin() {
  return(
    <>
      <NavBar />
  <header>
      <div class="container text-center mt-5">
        <h1 class="display-3 nowrap">Login to <span id="title">My Fitness UI</span></h1>
        <h2 class="fst-italic opacity-50 mt-4">"The old that is strong does not wither"</h2>
      </div>
  </header>
  <main>
    <div class="container">
      <LoginContent />
    </div>
  </main>
  <footer>
    <p>&copy; Group-8</p>
  </footer>
    </>
  );
}