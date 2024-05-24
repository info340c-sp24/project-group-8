import React from "react";
import '../css/login.css';

function LoginContent() {
  return(
    <div className="row">
        <div className="col-xs-none col-md-3"></div>
        <div className="col-xs-12 col-md-6">
          <div className="card mt-3 p-3 pt-0" id="log-in">
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
  <script src="../src/javascript/carousel.js"></script>
    </>
  );
}

export default RenderLogin;