import React from "react";
import '../css/login.css';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useNavigate } from "react-router-dom";

function RenderLogin(props) {
  const [allData, setAllData] = React.useState([]);
  //effect hook
  React.useEffect(() => {
    const db = getDatabase();
    const userData = ref(db, '/user-data');
    //returns a function that will "unregister" (turn off) the listener
    const unregisterFunction = onValue(userData, (snapshot) => {
      const value = snapshot.val();
      setAllData(value);
    });

    function checkOut() {
      unregisterFunction();
    };

    return checkOut;
  })

  const navigate = useNavigate();
  let userUpdate = props.userUpdateCallback;
  const[userEmail, setUserEmail] = React.useState('');
  const[userPass, setUserPass] = React.useState('');
  const[ErrorMessage, setErrorMessage] = React.useState('');
  function handleEmailChange(event) {
    let content = event.target.value;
    console.log(content);
    setUserEmail(content);
  }

  function handlePassChange(event) {
    let content = event.target.value;
    console.log(content);
    setUserPass(content);
  }

  function handleSubmit() {
    let currentUser = allData.filter((user_data) => (user_data.email === userEmail && user_data.password === userPass))
    console.log(currentUser);
    if (currentUser.length === 1) {
      console.log(currentUser[0]);
      userUpdate(currentUser[0].user_id);
      navigate("/");
    }
    else {
      setErrorMessage('Username and/or password undetected. Please try again, or register.')
    }
  }

  function goRegister() {
    navigate("/registration");
  }
  return(
    <>
    <header>
        <div className="container text-center mt-5">
          <h1 className="display-3">Login to <span id="title" className="nowrap">My Fitness UI</span></h1>
          <h2 className="fst-italic opacity-50 mt-4">"The old that is strong does not wither"</h2>
        </div>
    </header>
    <main>
      <div className="container">
      <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-12 col-lg-6">
            <div className="card mt-3 p-3 pt-0" id="log-in">
              <h2 className="display-6 text-center mt-3" id="error-msg">{ErrorMessage}</h2>
              <div className="card-body">
                <form className="recs-form">
                  <div className="form-group">
                    <label htmlFor="email" className="nowrap">Email</label>
                    <input type="email" className="form-control mt-3" id="email" placeholder="Enter your email" onChange={handleEmailChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control mt-3" id="password" placeholder="Enter your password" onChange={handlePassChange}></input>
                  </div>
                </form>
                <button className="btn mt-5 w-100" id="submit-btn" onClick={handleSubmit}>Login</button>
                <button className="btn mt-5 w-100" id="submit-btn" onClick={goRegister}>Register</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </main>
    </>
  );
}

export default RenderLogin;