import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { getDatabase, ref, onValue, push as firebasePush} from 'firebase/database';
import '../css/logs.css'

function LogCard(props) {
    let log = props.log;
    return(
        <div className="col-12 mt-2 mb-3 text-center">
            <div className="card mx-5 pb-3">
                <div className="card-content">
                    <p className="card-text mt-3"><span className="display-4 fw-bold" id="workout-name">{log.name}</span></p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-type">{log.type}</span></p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-reps">{log.reps}</span> Reps</p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-sets">{log.sets}</span> Sets</p>
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-calories">{log.calories.value}</span> {log.calories.unit}</p>
                </div>
            </div>
        </div>
    );
}

function WorkoutLog(props) {
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
        console.log(todayDate.getMonth());
        todayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
        console.log(todayDate);
        console.log(todayDate.getMonth());
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
        console.log("Workout Log Cards");
        let count = 0;
        let workoutLogDate = logDate.filter((dateLog) => {
            return(_.isEqual(dateLog.type,'workout'));
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
            workoutLogCard = workoutArray.map((exerciseLog) => {
                console.log(exerciseLog);
                count++;
                console.log(<LogCard log={exerciseLog.value} key={count}/>);
                return(<LogCard log={exerciseLog.value} key={count}/>);
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
        exercise: null,
        type: null,
        date: null,
        outtake: null,
        sets: null,
        reps: null
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
                name: formData.exercise,
                sets: formData.sets,
                reps: formData.reps,
                calories: {
                    value:formData.outtake,
                    unit:"cal"
                },
                type:formData.type
            };
            console.log(logValue);
            let logDateData = formData.date;
            console.log(logDateData);
            let logObject = {
                date: logDateData,
                type: 'workout',
                value: logValue
            }
            firebasePush(currentUserLogs, logObject)
                .then(() => {
                    setFormData({
                        exercise: null,
                        type: null,
                        date: null,
                        outtake: null,
                        sets: null,
                        reps: null
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
                <h1 className="display-3 fw-bold">Workout Logs</h1>
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
                <form id="dateQuery" className="mb-3 wo-logs">
                    <label htmlFor="date-search" className="fw-bold display-6 mt-4">Date Search</label>
                    <input type="date" className="form-control mt-4 w-50 mx-auto" id="date-search" onChange={handleQuery}/>
                </form>
                </div>
            </header>
            <main>
                <div className="container mt-5 wo-logs">
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
                                    <button id="prevButton" className="fw-bold btn wo-log-btn w-100 " onClick={()=> changeDate(-1)}>Previous</button>
                                </div>
                                <div className="col-6">
                                    <button id="nextButton" className="fw-bold btn wo-log-btn w-100" onClick={()=> changeDate(1)}>Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-sm-10 col-lg-8 mt-5">
                            <div className="card" id="currentCard">
                                {/* <!-- Initial card --> */}
                                <div className="card-body">
                                    <h5 className="card-title text-center display-3 fw-bold">Workout Log</h5>
                                    <form id="workoutForm">
                                        <div className="mb-3">
                                            <label htmlFor="date" className="fw-bold display-6" >Date</label>
                                            <input type="date" className="form-control mt-4" id="date" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workout" className="fw-bold display-6">Workout</label>
                                            <input type="text" className="form-control mt-4" id="exercise" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="type" className="fw-bold display-6">Type</label>
                                            <input type="text" className="form-control mt-4" id="type" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="intake" className="fw-bold display-6">Outtake</label>
                                            <input type="text" className="form-control mt-4" id="outtake" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reps" className="fw-bold display-6">Reps</label>
                                            <input type="text" className="form-control mt-4" id="reps" onChange={handleChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="sets" className="fw-bold display-6">Sets</label>
                                            <input type="text" className="form-control mt-4" id="sets" onChange={handleChange}/>
                                        </div>
                                    </form>
                                    <button type="submit" className="btn mt-4 w-100 text-center fw-bold display-5 wo-log-btn" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-lg-2"></div>
                    </div>
                </div>
            </main>
        </>
        // <div className="container mt-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-4">
        //             <div className="card">
        //                 <div className="card-body">
        //                     <h5 className="card-title">Workout Log</h5>
        //                     <form onSubmit={handleSubmit}>
        //                         <div className="mb-3">
        //                             <label htmlFor="date">Date</label>
        //                             <input
        //                                 type="date"
        //                                 className="form-control"
        //                                 id="date"
        //                                 value={formData.date}
        //                                 onChange={handleChange}
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="workout">Workout</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 id="workout"
        //                                 value={formData.workout}
        //                                 onChange={handleChange}
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="intake">Intake</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 id="intake"
        //                                 value={formData.intake}
        //                                 onChange={handleChange}
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="reps">Reps</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 id="reps"
        //                                 value={formData.reps}
        //                                 onChange={handleChange}
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="sets">Sets</label>
        //                             <input
        //                                 type="text"
        //                                 className="form-control"
        //                                 id="sets"
        //                                 value={formData.sets}
        //                                 onChange={handleChange}
        //                             />
        //                         </div>
        //                         <button type="submit" className="btn btn-primary">
        //                             Submit
        //                         </button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {logs.length > 0 && (
        //         <div className="row mt-4 justify-content-center">
        //             <div className="col-md-4 text-center">
        //                 <button
        //                     onClick={handlePrev}
        //                     className="btn btn-primary me-2"
        //                     disabled={currentLogIndex === 0}
        //                 >
        //                     Previous
        //                 </button>
        //                 <button
        //                     onClick={handleNext}
        //                     className="btn btn-primary"
        //                     disabled={currentLogIndex === logs.length - 1}
        //                 >
        //                     Next
        //                 </button>
        //             </div>
        //         </div>
        //     )}
        //     {logs.length > 0 && (
        //         <div className="row justify-content-center mt-4">
        //             <div className="col-md-4">
        //                 <div className="card">
        //                     <div className="card-body">
        //                         <h5 className="card-title">{logs[currentLogIndex].date}</h5>
        //                         <p className="card-text">
        //                             <strong>Workout:</strong> {logs[currentLogIndex].workout}
        //                         </p>
        //                         <p className="card-text">
        //                             <strong>Intake:</strong> {logs[currentLogIndex].intake}
        //                         </p>
        //                         <p className="card-text">
        //                             <strong>Reps:</strong> {logs[currentLogIndex].reps}
        //                         </p>
        //                         <p className="card-text">
        //                             <strong>Sets:</strong> {logs[currentLogIndex].sets}
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
}

export default WorkoutLog;
