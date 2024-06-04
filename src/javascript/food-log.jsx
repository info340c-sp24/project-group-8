import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { getDatabase, ref, onValue, child, push as firebasePush, set as firebaseSet } from 'firebase/database';
import '../css/logs.css'

function LogCard(props) {
    let log = props.log;
    return(
        <div className="col-12 mt-2 mb-3 text-center">
            <div className="card mx-lg-5 mx-2 pb-3">
                <div className="card-content">
                    <p className="card-text mt-3 text-nowrap"><span className="display-4 fw-bold" id="food-name">{log.name}</span></p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="food-calories">{log.calories.value}</span> {log.calories.unit}</p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="food-protein">{log.protein.value}</span> {log.protein.unit} of Protein</p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="food-fat">{log.fat.value}</span> {log.fat.unit} of Fat</p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="food-carb">{log.carb.value}</span> {log.carb.unit} of Carb</p>
                </div>
            </div>
        </div>
    );
}

function FoodLog(props) {
    const user = props.userID;
    const db = getDatabase();
    const currentUserLogs = ref(db, '/user-data/'+user+"/logs");
    const [logData,setLogData] = useState([]);
    const [currDate, setCurrDate] = useState({});
    const navigate = useNavigate();
    //ensure Login and pull from DB. Seed LogData.
    useEffect(() => {
        if(user === null) {
            navigate("/login");
        }
        else {
            const tempCurrentUserLogs = ref(db, '/user-data/'+user+"/logs");
            //returns a function that will "unregister" (turn off) the listener
            const unregisterFunction = onValue(tempCurrentUserLogs, (snapshot) => {
                const allObjects = snapshot.val();
                let allArray = [];
                if (!_.isNull(allObjects)) {
                    console.log("DB Connection success. Seeding allData.")
                    const allKeys = Object.keys(allObjects);
                    allArray = allKeys.map((key) => {
                        const singleTaskCopy = {...allObjects[key]}; //copy element at that key
                        singleTaskCopy.key = key; //locally save the key string as an "id" for later
                        return singleTaskCopy; //the transformed object to store in the array
                    });
                    console.log(allArray);
                    if(!_.isEqual(allArray,logData))
                        setLogData(allArray);
                }
                console.log(allArray);
            });

            function checkOut() {
                unregisterFunction();
            };

            return checkOut;
        }
    }, [logData, db, navigate, currDate, user]);

    //seed currDate as today's date
    if (_.isEmpty(currDate)) {
        console.log("Seeding Today Date")
        let todayDate = new Date();
        console.log(todayDate);
        todayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
        console.log(todayDate);
        let tempTodayDate = {
            year: todayDate.getFullYear(),
            month: todayDate.getMonth() + 1,
            date: todayDate.getDate()
        }
        console.log(tempTodayDate);
        setCurrDate(tempTodayDate);
    }

    //specific logs for currDate from logData
    let currDateString = currDate.month + "-" + currDate.date + "-" + currDate.year ;
    let logDate = logData.filter((dateLog) => {
        return (_.isEqual(dateLog.date,currDate));
    });

    //workoutLogCards to show query results
    let workoutLogCard = [];
    if (logDate.length > 0) {
        console.log("Food Log Cards");
        let count = 0;
        let workoutLogDate = logDate.filter((dateLog) => {
            return(_.isEqual(dateLog.type,'food'));
        });
        console.log(workoutLogDate);

        let workoutArray = [];
        if (!_.isNull(workoutLogDate)) {
            const allKeys = Object.keys(workoutLogDate);
            workoutArray = allKeys.map((key) => {
                const singleTaskCopy = {...workoutLogDate[key]}; //copy element at that key
                singleTaskCopy.key = key; //locally save the key string as an "id" for later
                return singleTaskCopy; //the transformed object to store in the array
            });
        }
        console.log(workoutArray);

        if (workoutArray.length > 0) {
            workoutLogCard = workoutArray.map((foodLog) => {
                console.log(foodLog);
                count++;
                console.log(<LogCard log={foodLog.value} key={count}/>);
                return(<LogCard log={foodLog.value} key={count}/>);
            })
        }
        console.log(workoutLogCard);
    }

    //changing Date for view
    function changeDate(increment) {
        console.log("Increment Date by " + increment);
        let newDate = new Date(currDate.year, (currDate.month-1), currDate.date);
        console.log(newDate);
        newDate.setDate(newDate.getDate() + increment);
        console.log(newDate);
        console.log({
            year: newDate.getFullYear(),
            month: newDate.getMonth() + 1,
            date: newDate.getDate()
        });
        setCurrDate({
            year: newDate.getFullYear(),
            month: newDate.getMonth() + 1,
            date: newDate.getDate()
        });
    }

    //form input data
    const [formData, setFormData] = useState({
        name: null,
        calories: null,
        carb: null,
        protein: null,
        fat: null
    });

    //form update
    const handleChange = (e) => {
        console.log("Handle Change")
        if (e.target.id === "date") {
            let tempDate = e.target.valueAsDate;
            tempDate.setDate(tempDate.getDate() + 1);
            tempDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
            let logDateData = {
                year: tempDate.getFullYear(),
                month: tempDate.getMonth() + 1,
                date: tempDate.getDate()
            };
            console.log(e.target.id + ": "+ tempDate);
            console.log(e.target.id + ": "+ logDateData);
            setFormData({ ...formData, [e.target.id]: logDateData});
        } else {
            console.log(e.target.id + ": "+ e.target.value);
            setFormData({ ...formData, [e.target.id]: e.target.value});
        }
    };

    //checkingEverything
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

    //insert formData to database
    function handleSubmit () {
        console.log("Form Submit");
        console.log("No null:" + checkObjectKeys(formData));
        if(checkObjectKeys(formData)) {
            let logValue = {
                name: formData.name,
                fat: {
                  value:formData.fat,
                  unit:"grams"
                },
                carb: {
                  value:formData.carb,
                  unit:"grams"
                },
                calories: {
                    value:formData.calories,
                    unit:"cal"
                },
                protein: {
                  value:formData.protein,
                  unit:"grams"
                },
            };
            console.log(logValue);
            let logDateData = formData.date;
            console.log(logDateData);
            let logObject = {
                date: logDateData,
                type: 'food',
                value: logValue
            }
            firebasePush(currentUserLogs, logObject)
                .then(() => {
                    setFormData({
                      name: null,
                      calories: null,
                      carb: null,
                      protein: null,
                      fat: null
                    });
                });
        }
    };

    //handle date query show
    function handleQuery(event) {
        let contentDate = event.target.valueAsDate;
        console.log("Query date:" + contentDate);
        contentDate.setDate(contentDate.getDate() + 1);
        console.log("Query date:" + contentDate);
        contentDate = new Date(contentDate.getFullYear(), contentDate.getMonth(), contentDate.getDate());
        console.log({
            year: contentDate.getFullYear(),
            month: contentDate.getMonth() + 1,
            date: contentDate.getDate()
        })
        setCurrDate({
            year: contentDate.getFullYear(),
            month: contentDate.getMonth() + 1,
            date: contentDate.getDate()
        });
    }

    return (
        <>
            <header>
                <div className="container text-center mt-5">
                <h1 className="display-3 fw-bold">Food Logs</h1>
                <h2 className="fst-italic opacity-50 mt-4">"Remember thy legacy."</h2>
                <div className="row mt-4">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <button id="workoutBtn" className="fw-bold btn wo-log-btn w-100 " onClick={()=> navigate("/logs/workout")}>Workout</button>
                    </div>
                    <div className="col-4">
                        <button id="foodBtn" className="fw-bold btn foo-log-btn w-100" onClick={()=> navigate("/logs/food")}>Food</button>
                    </div>
                    <div className="col-2"></div>
                </div>
                <form id="dateQuery" className="mb-3 foo-logs">
                    <label htmlFor="date-search" className="fw-bold display-6 mt-4">Date Search</label>
                    <input type="date" className="form-control mt-4 w-50 mx-auto" id="date-search" onChange={handleQuery}/>
                </form>
                </div>
            </header>
            <main>
                <div className="container mt-5 foo-logs">
                    <div className="row">
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-sm-10 col-lg-8">
                            <div className="card text-center">
                                <h3 className="display-3 card-title fw-bold mt-4">{currDateString}</h3>
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="display-4 fw-bold">Workouts</h4>
                                        </div>
                                        {workoutLogCard}
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <button id="prevButton" className="fw-bold btn foo-log-btn w-100 " onClick={()=> changeDate(-1)}>Previous</button>
                                </div>
                                <div className="col-6">
                                    <button id="nextButton" className="fw-bold btn foo-log-btn w-100" onClick={()=> changeDate(1)}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-sm-10 col-lg-8 mt-5">
                            <div className="card" id="currentCard">
                                {/* <!-- Initial card --> */}
                                <div className="card-body">
                                    <h5 className="card-title text-center display-3 fw-bold">Food Log</h5>
                                    <form id="foodForm">
                                        <div className="mb-3">
                                            <label htmlFor="date" className="fw-bold display-6" >Date</label>
                                            <input type="date" className="form-control mt-4" id="date" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="fw-bold display-6">Food</label>
                                            <input type="text" className="form-control mt-4" id="name" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="calories" className="fw-bold display-6">Calories</label>
                                            <input type="text" className="form-control mt-4" id="calories" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="carb" className="fw-bold display-6">Carb</label>
                                            <input type="text" className="form-control mt-4" id="carb" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="protein" className="fw-bold display-6">Protein</label>
                                            <input type="text" className="form-control mt-4" id="protein" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="fat" className="fw-bold display-6">Fat</label>
                                            <input type="text" className="form-control mt-4" id="fat" onChange={handleChange}/>
                                        </div>
                                    </form>
                                    <button type="submit" className="btn mt-4 w-100 text-center fw-bold display-5 foo-log-btn" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default FoodLog;
