import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-calories">{log.calories.value}</span> Cal</p>
                </div>
            </div>
        </div>
    );
}

function WorkoutLog(props) {
    const user = props.userObject
    console.log(user);
    const updateUser = props.userUpdateCallback
    let todayDate = new Date();
    const [logData,setLogData] = useState([]);
    const [currDate, setCurrDate] = useState({
        year: todayDate.getFullYear(),
        month: todayDate.getMonth() + 1,
        date: todayDate.getDate()
    });
    let currDateString = currDate.month + "/" + currDate.date + "/" + currDate.year ;
    const navigate = useNavigate();
    useEffect(() => {
        if(user === null) {
            navigate("/login");
        }
        else {
            setLogData(user.logs);
        }
    });
    let logDate = logData.filter((dateLog) => {
        console.log(dateLog);
        console.log(currDateString);
        console.log(dateLog.date === currDateString);
        return (dateLog.date === currDateString);
    });
    console.log(logDate);
    let workoutLogCard = [];
    let count = 0;
    if (logDate.length > 0) {
        let workoutLogDate = logDate[0].workout;
        console.log(workoutLogDate);
        if (workoutLogDate.length > 0) {
            workoutLogCard = workoutLogDate.map((exerciseLog) => {
                console.log(exerciseLog);
                count++;
                console.log(<LogCard log={exerciseLog} key={count}/>);
                return(<LogCard log={exerciseLog}/>);
            })
            console.log(workoutLogCard);
        }
    }
    const [formData, setFormData] = useState({
        exercise: null,
        type: null,
        date: null,
        outtake: null,
        sets: null,
        reps: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    function checkObjectKeys (object) {
        let keys = Object.keys(object);
        let truthValue = true;
        keys.forEach((key) => {
            if(object[key] === null) {
                truthValue = false;
            }
        });
        return (truthValue && keys.length > 0);
    }
    function handleSubmit () {
        if(checkObjectKeys(formData)) {
            let logObject = {
                name:formData.exercise,
                sets:formData.sets,
                reps:formData.reps,
                calories: {
                    value:formData.outtake,
                    unit:"cal"
                },
                type:formData.type
            };
            let logDate = {
                year: logData.date.getFullYear(),
                month: logData.date.getMonth() + 1,
                date: logData.date.getDate()
            };
            let logDateString = logDate.month + "/" + logDate.date + "/" + logDate.year ;
            let logCopy = logData.map(x => x);
            let targetDate = logCopy.filter((log) => {
                return(log.date === logDateString)
            });
            let currDateLog = null;
            if (targetDate.length > 1) {
                 currDateLog = targetDate[0];
            } else {
                 currDateLog = {
                    date: logDateString,
                    workout:[],
                    food:[]
                };
                currDateLog.workout.push(logObject);
                logCopy.push(currDateLog);
            }
            setLogData(logCopy);
            setFormData({
                exercise: null,
                type: null,
                date: null,
                outtake: null,
                sets: null,
                reps: null
            });
            let userCopy = { ...user, "logs": logData};
            updateUser(userCopy);
        }
    };

    function changeDate(increment) {
        let newDate = new Date(currDateString);
        newDate.setDate(newDate.getDate() + increment);
        setCurrDate({
            year: newDate.getFullYear(),
            month: newDate.getMonth() + 1,
            date: newDate.getDate()
        });
    }

    function handleQuery (event) {
        let contentDate = event.target.valueAsDate;
        console.log(contentDate);
        setCurrDate({
            year: contentDate.getFullYear(),
            month: contentDate.getMonth() + 1,
            date: contentDate.getDate() + 1
        });
    }
    return (
        <>
            <header>
                <div className="container text-center mt-5">
                <h1 className="display-3 fw-bold">Workout Logs</h1>
                <h2 className="fst-italic opacity-50 mt-4">"Remember thy legacy."</h2>
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
                                    <button id="prevButton" className="fw-bold btn log-btn w-100 " onClick={()=> changeDate(-1)}>Previous</button>
                                </div>
                                <div className="col-6">
                                    <button id="nextButton" className="fw-bold btn log-btn w-100" onClick={()=> changeDate(1)}>Next</button>
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
                                    <button type="submit" className="btn mt-4 w-100 text-center fw-bold display-5 log-btn" onClick={handleSubmit}>Submit</button>
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
