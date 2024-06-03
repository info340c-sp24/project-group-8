// This file is to create static components for the recs.js page to put in app.js
import { useNavigate } from 'react-router-dom';
import '../css/recs.css'
import _ from 'lodash';
import React, { useState } from 'react';
import { getDatabase, ref, onValue, child } from 'firebase/database';
//import axios from 'axios'; // Import axios for making HTTP requests for the api

// Recommendations component
const Recommendations = (props) => {
  const db = getDatabase();
  const staticData = 'static-data/recs';
  const [params, setParams] = useState({
    type: null,
    length: null
  })
  const [answerData,setAnswerData] = useState([]);
  const navigate = useNavigate();
  let user = props.userID;
  React.useEffect(() => {
    if(user === null) {
      navigate("/login");
    }
  });

  let answer = "";
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
      let targetData = staticData + '/' + params.type;
      let targetArray = [];
      let targetRef = ref(db, targetData);
      onValue(targetRef, (snapshot) => {
        const allObjects = snapshot.val();
        if (!_.isNull(allObjects)) {
            console.log("DB Connection success. Seeding allData.")
            const allKeys = Object.keys(allObjects);
            targetArray = allKeys.map((key) => {
                const singleTaskCopy = {...allObjects[key]}; //copy element at that key
                singleTaskCopy.key = key; //locally save the key string as an "id" for later
                return singleTaskCopy; //the transformed object to store in the array
            });
            console.log(targetArray);
        }
      });
      targetArray = targetArray.filter((responseData)=>(_.isEqual(responseData.length, params.length)));
      targetArray = targetArray[0].exercise;
      let allKeys = Object.keys(targetArray);
      targetArray = allKeys.map((key) => {
        const singleTaskCopy = {...targetArray[key]}; //copy element at that key
        singleTaskCopy.key = key; //locally save the key string as an "id" for later
        return singleTaskCopy; //the transformed object to store in the array
      });

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
                    <div className="col-12 mt-5 mb-5">
                      <h3 className="display-5 fw-bold" id="recs-answer">{answerData}</h3>
                    </div>
                    <div className="col-12 mt-5 skyblue">
                    <form className="recs-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="fitness-goal"><h3 className="display-5 fw-bold">Ask Here!</h3></label>
                        <div className="mb-5 mt-3" style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="recs-form skyblue">I want to</span>
                          <select className="form-control mx-2" id="type" onChange={handleChange} value={params.type} style={{ width: 'auto', display: 'inline-block' }}>
                            <option value="" disabled>Select goal</option>
                            <option value="cut">cut</option>
                            <option value="bulk">bulk</option>
                          </select>
                          <span>for</span>
                          <select className="form-control mx-2" id="length" onChange={handleChange} value={params.length} style={{ width: 'auto', display: 'inline-block' }}>
                            <option value="" disabled>Select duration (months)</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                          </select>
                          <span>months</span>
                        </div>
                      </div>
                      <button type="submit" className="btn w-100 fw-bold" id="recs-submit">Submit</button>
                    </form>
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
