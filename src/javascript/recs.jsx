// This file is to create static components for the recs.js page to put in app.js
import { useNavigate } from 'react-router-dom';
import '../css/recs.css'
import _ from 'lodash';
import React, { useState } from 'react';
import { getDatabase, ref, onValue, child } from 'firebase/database';
//import axios from 'axios'; // Import axios for making HTTP requests for the api

function RecsCard(props) {
  let log = props.exercise;
  return (
    <div className="col-12 mt-2 mb-3 text-center ">
        <div className="card mx-5 pb-3 recommendations-card-answer">
            <div className="card-content lightblue">
                <p className="card-text mt-3"><span className="display-4 fw-bold">{log.name}</span></p>
                <p className="card-text mt-3"><span className="display-6 fw-bold">{log.type}</span></p>
                <p className="card-text mt-3"><span className="display-6 fw-bold">{log.reps}</span> Reps</p>
                <p className="card-text mt-3"><span className="display-6 fw-bold">{log.sets}</span> Sets</p>
                <p className="card-text mt-3"><span className="display-6 fw-bold">{log.caloriesBurnt}</span> Cal</p>
            </div>
        </div>
    </div>
  );
}

// Recommendations component
const Recommendations = (props) => {
  const db = getDatabase();
  const staticData = 'static-data/recs';
  const [params, setParams] = useState({
    type: "cut",
    length: 1
  });
  const [answerData,setAnswerData] = useState({});
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const userID = props.userID;
  React.useEffect(() => {
    if(_.isNull(userID)) {
      navigate("/login");
    } else {
      let targetRef = ref(db, staticData);
      onValue(targetRef, (snapshot) => {
        const allObjects = snapshot.val();
        if (!_.isNull(allObjects) && _.isEmpty(answerData)) {
            console.log("DB Connection success. Seeding allData.")
            setAnswerData(allObjects);
        }
      });
    }
  });
  function handleChange (e) {
    console.log("Handle Change")
    console.log(e.target.id + ": "+ e.target.value);
    setParams({ ...params, [e.target.id]: e.target.value});
  }

  function checkObjectKeys (object) {
    let keys = Object.keys(object);
    let truthValue = true;
    keys.forEach((key) => {
        if(_.isNull(object[key])) {
            truthValue = false;
        }
    });
    return (truthValue && keys.length > 0);
  }

  function handleSubmit() {
    console.log("Form Submit");
    console.log("No null:" + checkObjectKeys(params));
    if(checkObjectKeys(params)) {
      let targetObj = {};
      targetObj = answerData[params.type];
      console.log(targetObj);
      targetObj = targetObj[params.length-1];
      console.log(targetObj);
      let targetArray = targetObj.exercise;
      console.log(targetArray);
      let allKeys = Object.keys(targetArray);
      targetArray = allKeys.map((key) => {
        const singleTaskCopy = {...targetArray[key]}; //copy element at that key
        singleTaskCopy.key = key; //locally save the key string as an "id" for later
        return singleTaskCopy; //the transformed object to store in the array
      });
      let count = 0;
      let arrayResult = targetArray.map((exercise) => {
        count++;
        return <RecsCard exercise={exercise} key={count}/>
      });
      let targetResult = (
        <>
        <h3 className="display-5 fw-bold">Hi, <span>{userID}</span>. This is our exercise recommendation to {params.type} for {params.length} month(s).</h3>
        <h3 className="display-5 fw-bold">All exercises are meant for daily practice for 5 days a week.</h3>
        <div classname="row">
          {arrayResult}
        </div>
        </>
      )
      setAnswer(targetResult);
    }
  }

    return (
      <>
        <header>
          <div className="container text-center mt-5">
            <h1 className="display-3 fw-bold">MyFitness Recommendations</h1>
            <h2 className="fst-italic opacity-50 mt-4">"Success only comes to those who dare to attempt."</h2>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col-1 col-lg-2"></div>
            <div className="col-10 col-lg-8">
              <div className="card w-100 ml-3 mt-5 p-5 pt-2" id="recommendations-card">
                <div className="card-body text-center text-lg-start">
                  <h2 className="display-3 fw-bold text-center" id="recs-question">Your Workout Plan</h2>
                  <div className="row text-center pt-5" >
                    <div className="col-12 mt-5 mb-5" id="recs-answer">
                      {answer}
                    </div>
                    <div className="col-12 mt-5 skyblue">
                    <form className="recs-form">
                      <div className="form-group">
                        <label htmlFor="fitness-goal"><h3 className="display-5 fw-bold">Ask Here!</h3></label>
                        <div className="mb-5 mt-3 row">
                          <div className="col-12 col-md-6">
                          <span className="recs-form skyblue">I want to</span>
                          <select className="form-control mx-2 text-center" id="type" onChange={handleChange}>
                            <option value="" disabled>Select goal</option>
                            <option value="cut">cut</option>
                            <option value="bulk">bulk</option>
                          </select>
                          </div>
                          <div className="col-12 col-md-6">
                          <span>for</span>
                          <select className="form-control mx-2 text-center" id="length" onChange={handleChange}>
                            <option value="" disabled>Select duration (months)</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                          </select>
                          <span>months</span>
                          </div>
                        </div>
                      </div>
                    </form>
                    <button className="btn w-100 fw-bold" id="recs-submit" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 col-lg-2"></div>
          </div>
        </main>
      </>
    );
  };

// Exporting Recommendations
export default Recommendations;
