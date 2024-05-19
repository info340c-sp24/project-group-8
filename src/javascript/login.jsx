import React from "react";

function NavBar() {
  return(
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand display-5 fw-bold" onclick="openIndexPage()">My Fitness UI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold" onclick="openIndexPage()">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" onclick="openRecsPage()">Recommendations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" onclick="openLogPage()">Workout Logs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" onclick="openAnalyticsPage()">Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold current" onclick="openLoginPage()">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

function LoginContent() {
  return(
    <div className="row">
        <div className="col-xs-none col-md-3"></div>
        <div className="col-xs-12 col-md-6">
          <div className="card mt-3 p-3 pt-0">
            <div className="card-body">
              <form className="recs-form">
                <div className="form-group">
                  <label for="email" className=" nowrap">Email</label>
                  <input type="email" className="form-control mt-3" id="email" placeholder="Enter your email"></input>
                </div>
                <div className="form-group mt-4">
                  <label for="password">Password</label>
                  <input type="password" className="form-control mt-3" id="password" placeholder="Enter your password"></input>
                </div>
                <button className="btn mt-5 w-100" id="submit-btn">Login</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xs-none col-md-4"></div>
      </div>
  );
}

function RenderLogin() {
  return(
    <>
      <NavBar />
  <header>
      <div className="container text-center mt-5">
        <h1 className="display-3 nowrap">Login to <span id="title">My Fitness UI</span></h1>
        <h2 className="fst-italic opacity-50 mt-4">"The old that is strong does not wither"</h2>
      </div>
  </header>
  <main>
    <div className="container">
      <LoginContent />
    </div>
  </main>
  <footer>
    <p>&copy; Group-8</p>
  </footer>
    </>
  );
}