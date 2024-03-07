import React from 'react';
import UserSettingsProvider from './components/UserSettingsProvider';
import SettingsForm from './components/SettingsForm';
import ExampleComponent from './components/ExampleComponent';
import withPageTimeTracking from './components/withTimeTracker';
import Tooltip from './components/Tooltip';
import './css/Tooltip.css';
import './css/App.css';


const WrappedComponentWithTimeTracking = withPageTimeTracking(ExampleComponent);

const App = () => {
  return (
    <UserSettingsProvider>
      <div className="container">
        <SettingsForm />

        <Tooltip position="top" text="Top Tooltip">
          <button>Hover me</button>
        </Tooltip>

        <Tooltip position="right" text="Right Tooltip">
          <button>Hover me</button>
        </Tooltip>

        <Tooltip position="bottom" text="Bottom Tooltip">
          <button>Hover me</button>
        </Tooltip>

        <Tooltip position="left" text="Left Tooltip">
          <button>Hover me</button>
        </Tooltip>
      </div>
    </UserSettingsProvider>
  );
};

export default App;