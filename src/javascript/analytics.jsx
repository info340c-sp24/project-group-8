import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { getDatabase, ref, onValue } from "firebase/database";
import '../css/analytics.css';
import { useNavigate } from "react-router-dom";

function GeneralContent(props) {
  const workoutLogs = props.workout;
  const foodLogs = props.food;
  const daysEval = props.daysEval;
  let caloriesOutput = workoutLogs.map((log) => {
    let logValue = log.value;
    let calories = logValue.calories.value;
    return calories;
  });
  let totalCaloriesOutput = 0;
  caloriesOutput.forEach((output) => {
    totalCaloriesOutput = totalCaloriesOutput + parseInt(output);
  });

  let caloriesInput = foodLogs.map((log) => {
    let logValue = log.value;
    let calories = logValue.calories.value;
    return calories;
  });
  let totalCaloriesInput = 0;
  caloriesInput.forEach((input) => {
    totalCaloriesInput = totalCaloriesInput + parseInt(input);
  });

  let output = {
    netCalories: (totalCaloriesInput - totalCaloriesOutput)
  }
  return(
    <div className="col-12">
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
                    <h4 id="avg-cal-net" className="display-3 nowrap">{output.netCalories}</h4> <span>cal</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-4">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Total Evaluated Days</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="rec-weight" className="display-3 nowrap">{daysEval}</h4> <span>days</span>
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
  )
}

function WorkoutContent(props) {
  const daysEval = props.daysEval;
  const workoutLogs = props.workout;
  let uniqueDates = workoutLogs.map((log) => {
    let logDate = log.date.date;
    return logDate;
  });
  console.log("UniqueDates:" + uniqueDates);
  console.log("UniqueDates:" + uniqueDates.length);
  uniqueDates = new Set(uniqueDates);
  console.log("UniqueDates:" + uniqueDates);
  console.log("UniqueDates:" + uniqueDates.length);
  let caloriesOutput = workoutLogs.map((log) => {
    let logValue = log.value;
    let calories = logValue.calories.value;
    return calories;
  });
  let totalCaloriesOutput = 0;
  caloriesOutput.forEach((output) => {
    totalCaloriesOutput = totalCaloriesOutput + parseInt(output);
  });
  return(
    <div className="col-12">
        <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="workout">
          <div className="card-body text-center text-lg-start">
            <h2 className="display-4 nowrap fw-bold">Workout</h2>
            <div className="row text-center">

              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Monthly Workout Streak</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="monthly-wo" className="display-3 nowrap">{uniqueDates.length + "/" + daysEval}</h4> <span>day</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Average Calorie Output</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="avg-cal-out" className="display-3 nowrap">{totalCaloriesOutput / uniqueDates.length}</h4> <span>cal/day</span>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-lg-4 text-center">
                <div className="row p-5">
                  <div className="col-12">
                    <h3>Favourite Excercise</h3>
                  </div>
                  <div className="col-12">
                    <h4 id="fav-exc" className="display-3 nowrap">N/A</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

function FoodContent(props) {
  //const daysEval = props.daysEval;
  const foodLogs = props.food;
  let uniqueDates = foodLogs.map((log) => {
    let logDate = log.date.date;
    return logDate;
  });
  uniqueDates = new Set(uniqueDates);

  let foodDetails = foodLogs.map((log) => {
    let logValue = log.value;
    return logValue;
  });
  let totalProtein = 0;
  let totalFat = 0;
  let totalCarb = 0;
  let totalCaloriesInput = 0;
  foodDetails.forEach((input) => {
    totalCaloriesInput = totalCaloriesInput + parseInt(input.calories.value);
    totalProtein = totalProtein + parseInt(input.calories.value);
    totalFat = totalFat + parseInt(input.calories.value);
    totalCarb = totalCarb + parseInt(input.calories.value);
  });
  return (
    <div className="col-12">
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
                    <h4 id="avg-cal-in" className="display-3 nowrap">{parseInt(totalCaloriesInput / uniqueDates.length)}</h4> <span>cal/day</span>
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
                    <h4 id="avg-carb" className="display-3 nowrap">{1.0 * totalCarb / uniqueDates.length}</h4> <span>grams/day</span>
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
                    <h4 id="avg-prot" className="display-3 nowrap">{1.0 * totalProtein / uniqueDates.length}</h4> <span>grams/day</span>
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
                    <h4 id="avg-fat" className="display-3 nowrap">{1.0 * totalFat / uniqueDates.length}</h4> <span>grams/day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

function AnalyticsContent(props) {
  const logData = props.userData;
  const woLogData = logData.filter((log) => (_.isEqual(log.type,'workout')));
  const fooLogData = logData.filter((log) => (_.isEqual(log.type,'food')));
  return(
    <div className="row">
      <GeneralContent workout={woLogData} food={fooLogData} daysEval={props.daysEval}/>
      <WorkoutContent workout={woLogData} daysEval={props.daysEval}/>
      <FoodContent food={fooLogData} daysEval={props.daysEval}/>
    </div>
  );
}

// {/* <div className="col-xs-12">
//         {/*<!--Hydration Card-->*/}
//         <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="hydro">
//           <div className="card-body text-center text-lg-start">
//             <h2 className="display-4 nowrap fw-bold">Hydration</h2>
//             <div className="row text-center">
//               {/*<!--Content 1: Average Water Intake -->*/}
//               <div className="col-sm-12 col-lg-4 text-center">
//                 <div className="row p-5">
//                   <div className="col-12">
//                     <h3 className="">Average Hydration</h3>
//                   </div>
//                   <div className="col-12">
//                     <h4 id="avg-hydro-in" className="display-3 nowrap">6.5</h4> <span>glasses of water</span>
//                   </div>
//                 </div>
//               </div>
//               {/*<!--Content 2: Hydration Level day -->*/}
//               <div className="col-sm-12 col-lg-4 text-center">
//                 <div className="row p-5">
//                   <div className="col-12">
//                     <h3>Monthly Hydrated day</h3>
//                   </div>
//                   <div className="col-12">
//                     <h4 id="hydro-month" className="display-3 nowrap">20/30</h4> <span>day</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-xs-12">
//         {/*<!--Miscellanous Card-->*/}
//         <div className="card w-100 ml-3 mt-5 p-5 pt-2 card-analytics" id="misc">
//           <div className="card-body text-center text-lg-start">
//             <h2 className="display-4 nowrap fw-bold">Miscellanous</h2>
//             <div className="row text-center">
//               {/*<!--Content 1: Average Hours Sleep Daily -->*/}
//               <div className="col-sm-12 col-lg-4 text-center">
//                 <div className="row p-5">
//                   <div className="col-12">
//                     <h3>Average Sleep Hours</h3>
//                   </div>
//                   <div className="col-12">
//                     <h4 id="avg-hydro-in" className="display-3 nowrap">6.5</h4> <span>hours/day</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}


function Analytics(props) {
  const navigate = useNavigate();
  let user = props.userID;
  const [allData,setAllData] = useState([]);
  const [maxDate, setMaxDate] = useState({});
  useEffect(() => {
    if(user === null) {
      navigate("/login");
    } else {
      const db = getDatabase();
      const userLogsRef = ref(db, "user-data/"+ user + "/logs");
      const unregisterFunction = onValue(userLogsRef, (snapshot) => {
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
    }
  });

  let todayDate = new Date();
  todayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
  todayDate = {
    date: todayDate.getDate(),
    month: todayDate.getMonth() + 1,
    year: todayDate.getFullYear()
  };

  if (_.isEmpty(maxDate)) {
    setMaxDate({
      date: todayDate.date,
      month: todayDate.month,
      year: todayDate.year
    })
  }
  let logData = allData.filter((log) => (_.isEqual(log.date.month,maxDate.month) && _.isEqual(log.date.year,maxDate.year) && log.date.date < maxDate.date));

  function handleQuery(event) {
    let contentDate = event.target.value;
    console.log("Query date:" + contentDate);
    contentDate = contentDate.split('-');
    console.log("Query date:" + contentDate);
    contentDate = new Date(parseInt(contentDate[0]), parseInt(contentDate[1]), 1);
    console.log("Query date:" + contentDate);
    contentDate.setDate(contentDate.getDate()-1);
    console.log("Query date:" + contentDate);
    console.log({
        year: contentDate.getFullYear(),
        month: contentDate.getMonth() + 1,
        date: contentDate.getDate()
    })
    setMaxDate({
        year: contentDate.getFullYear(),
        month: contentDate.getMonth() + 1,
        date: contentDate.getDate()
    });
  }
  return (
    <>
      <header>
        <div className="container text-center mt-5">
          <h1 className="display-3 fw-bold">Analytics</h1>
          <h2 className="fst-italic opacity-50 mt-4">"The unexamined life is not worth living."</h2>
          <form id="dateQuery" className="mb-3">
              <label htmlFor="date-search" className="fw-bold display-6 mt-4">Month Search</label>
              <input type="month" className="form-control mt-4 w-50 mx-auto" id="date-search" onChange={handleQuery}/>
          </form>
        </div>
      </header>

      <main>
        <div className="container">
          <AnalyticsContent userData={logData} daysEval={maxDate.date}/>
        </div>
      </main>
    </>
    );
}

export default Analytics;