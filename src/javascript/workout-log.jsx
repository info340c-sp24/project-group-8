import React, { useState } from 'react';

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
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Workout Log</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="workout">Workout</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="workout"
                                        value={formData.workout}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="intake">Intake</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="intake"
                                        value={formData.intake}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="reps">Reps</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="reps"
                                        value={formData.reps}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sets">Sets</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="sets"
                                        value={formData.sets}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {logs.length > 0 && (
                <div className="row mt-4 justify-content-center">
                    <div className="col-md-4 text-center">
                        <button
                            onClick={handlePrev}
                            className="btn btn-primary me-2"
                            disabled={currentLogIndex === 0}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="btn btn-primary"
                            disabled={currentLogIndex === logs.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            {logs.length > 0 && (
                <div className="row justify-content-center mt-4">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{logs[currentLogIndex].date}</h5>
                                <p className="card-text">
                                    <strong>Workout:</strong> {logs[currentLogIndex].workout}
                                </p>
                                <p className="card-text">
                                    <strong>Intake:</strong> {logs[currentLogIndex].intake}
                                </p>
                                <p className="card-text">
                                    <strong>Reps:</strong> {logs[currentLogIndex].reps}
                                </p>
                                <p className="card-text">
                                    <strong>Sets:</strong> {logs[currentLogIndex].sets}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkoutLog;
