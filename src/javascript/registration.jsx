import React from "react";
import _ from "lodash";
import '../css/registration.css';
import { getDatabase, ref, onValue, child, set as firebaseSet } from 'firebase/database';
import { useNavigate } from "react-router-dom";

function RenderRegistration(props) {
  const [allData, setAllData] = React.useState([]);
  const db = getDatabase();
  const userData = ref(db, '/user-data');
  //effect hook
  React.useEffect(() => {
    const dbTemp = getDatabase();
    const userDataTemp = ref(dbTemp, '/user-data');
    //returns a function that will "unregister" (turn off) the listener
    const unregisterFunction = onValue(userDataTemp, (snapshot) => {
      const allObjects = snapshot.val();
      let allArray = null;
      if (!_.isNull(allObjects)) {
        const allKeys = Object.keys(allObjects);
        allArray = allKeys.map((key) => {
          const singleTaskCopy = {...allObjects[key]}; //copy element at that key
          singleTaskCopy.key = key; //locally save the key string as an "id" for later
          return singleTaskCopy; //the transformed object to store in the array
        });
      }
      //console.log(allArray);
      setAllData(allArray)
    });

    function checkOut() {
      unregisterFunction();
    };

    return checkOut;
  })
  const navigate = useNavigate();
  const[userID, setUserID] = React.useState('');
  const[userEmail, setUserEmail] = React.useState('');
  const[userPass, setUserPass] = React.useState('');
  const[confirmPass, setConfirmPass] = React.useState('');
  const[ErrorMessage, setErrorMessage] = React.useState('');

  function handleIDChange(event) {
    let content = event.target.value;
    setUserID(content);
  }

  function handleEmailChange(event) {
    let content = event.target.value;
    setUserEmail(content);
  }

  function handlePassChange(event) {
    let content = event.target.value;
    setUserPass(content);
  }

  function handleConfirmPassChange(event) {
    let content = event.target.value;
    setConfirmPass(content);
  }

  function handleSubmit() {
    if (userPass !== confirmPass) {
      setErrorMessage("Passwords do not match");
    } else
    if (userID === '' || userEmail === '' || userPass === '' || confirmPass === '') {
      setErrorMessage("Input not valid (must not be empty)");
    } else {
      console.log(allData);
      let currentUser = [];
      if(!_.isNull(allData)) {
        currentUser = allData.filter((user_data) => (user_data.email === userEmail && user_data.user_id === userID))
      }
      console.log(currentUser);
      if (currentUser.length === 0) {
        let newUser = { user_id:userID, email: userEmail, password: userPass, logs: {}};
        firebaseSet(child(userData,userID), newUser);
        navigate("/login");
      } else {
        setErrorMessage("User specifications already exists. Please login instead.");
      }
    }
  }

  return(
    <>
    <header>
        <div className="container text-center mt-5">
          <h1 className="display-3">Register for <span id="title" className="nowrap">My Fitness UI</span></h1>
          <h2 className="fst-italic opacity-50 mt-4">"The brotherhood welcomes thee."</h2>
        </div>
    </header>
    <main>
      <div className="container">
      <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-12 col-lg-6">
            <div className="card mt-3 p-3 pt-0" id="register">
              <h2 className="display-6 text-center mt-3" id="error-msg">{ErrorMessage}</h2>
              <div className="card-body">
                <form className="recs-form">
                  <div className="form-group">
                    <label htmlFor="userID" className="nowrap">User ID</label>
                    <input type="text" className="form-control mt-3" id="userID" placeholder="Enter a valid ID" onChange={handleIDChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="email" className="nowrap">Email</label>
                    <input type="email" className="form-control mt-3" id="email" placeholder="Enter your email" onChange={handleEmailChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control mt-3" id="password" placeholder="Enter your password" onChange={handlePassChange}></input>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" className="form-control mt-3" id="confirm-password" placeholder="Confirm your password" onChange={handleConfirmPassChange}></input>
                  </div>
                </form>
                <button className="btn mt-5 w-100" id="submit-btn" onClick={handleSubmit}>Register</button>
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

export default RenderRegistration;
