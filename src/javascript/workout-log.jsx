import React, { useState } from 'react';
import '../css/logs.css'

function WorkoutLog() {
    const [logs, setLogs] = useState([]);
    const [currentLogIndex, setCurrentLogIndex] = useState(0);
    const [formData, setFormData] = useState({
        date: '',
        workout: '',
        intake: '',
        reps: '',
        sets: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLog = {
            date: formData.date,
            workout: formData.workout,
            intake: formData.intake,
            reps: formData.reps,
            sets: formData.sets
        };
        setLogs([...logs, newLog]);
        setFormData({
            date: '',
            workout: '',
            intake: '',
            reps: '',
            sets: ''
        });
    };

    const handlePrev = () => {
        setCurrentLogIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    };

    const handleNext = () => {
        setCurrentLogIndex((prevIndex) =>
            prevIndex < logs.length - 1 ? prevIndex + 1 : logs.length - 1
        );
    };

    return (
        <>
            <header>
                <div className="container text-center mt-5">
                <h1 className="display-3 fw-bold">Workout Logs</h1>
                <h2 className="fst-italic opacity-50 mt-4">"Remember thy legacy."</h2>
                <form id="dateQuery" className="mb-3 wo-logs">
                    <label htmlFor="date-search" className="fw-bold display-6 mt-4">Date Search</label>
                    <input type="date" className="form-control mt-4 w-50 mx-auto" id="date-search"/>
                </form>
                </div>
            </header>
            <main>
                <div className="container mt-5 wo-logs">
                    <div className="row">
                        <div className="col-1 col-lg-2"></div>
                        <div className="col-sm-10 col-lg-8">
                            <div className="card text-center">
                                <h3 className="display-3 card-title fw-bold mt-4">23/05/2024</h3>
                                <div className="card-body text-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <h4 className="display-4 fw-bold">Workouts</h4>
                                        </div>
                                        <div className="col-12 mt-2 mb-3 text-center">
                                            <div className="card mx-5 pb-3">
                                                <div className="card-content">
                                                    <p className="card-text mt-3"><span className="display-4 fw-bold" id="workout-name">Sit-up</span></p>
                                                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-reps">Core</span></p>
                                                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-reps">10</span> Reps</p>
                                                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-sets">10</span>Sets</p>
                                                    <p className="card-text mt-3"><span className="display-6 fw-bold" id="workout-calories">100</span>Cal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-6">
                                    <button id="prevButton" className="fw-bold btn log-btn w-100 ">Previous</button>
                                </div>
                                <div className="col-6">
                                    <button id="nextButton" className="fw-bold btn log-btn w-100">Next</button>
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
                                            <input type="date" className="form-control mt-4" id="date"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workout" className="fw-bold display-6">Workout</label>
                                            <input type="text" className="form-control mt-4" id="workout"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="intake" className="fw-bold display-6">Intake</label>
                                            <input type="text" className="form-control mt-4" id="intake"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="reps" className="fw-bold display-6">Reps</label>
                                            <input type="text" className="form-control mt-4" id="reps"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="sets" className="fw-bold display-6">Sets</label>
                                            <input type="text" className="form-control mt-4" id="sets"/>
                                        </div>
                                        <button type="submit" className="btn mt-4 w-100 text-center fw-bold display-5 log-btn">Submit</button>
                                    </form>
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
