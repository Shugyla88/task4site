import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import withTimeTracker from './components/withTimeTracker'; // Adjust the path based on your project structure

const TimeTrackedApp = withTimeTracker(App);

ReactDOM.render(
  <React.StrictMode>
    <TimeTrackedApp />
  </React.StrictMode>,
  document.getElementById('root')
);