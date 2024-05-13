import React from 'react';
import Recommendations from './recs';
import Index from './index';
import Workout_log from './workout-log';

function App() {
    return (
      <div>
        <Recommendations />
        <Workout_log />
        <Index />
        {/* import other pages here*/}
      </div>
    );
  }

  export default App;