import React, { useContext } from 'react';
import UserSettingsContext from './UserSettingsContext';
import '../css/DisplaySettings.css';

const DisplaySettings = () => {
  const { settings } = useContext(UserSettingsContext);

  return (
    <div className="display-settings-container">
      <h2 className="settings-title">Display Settings</h2>
      <p className="settings-info">Theme: {settings.theme}</p>
      <p className="settings-info">Language: {settings.language}</p>
    </div>
  );
};

export default DisplaySettings;

//бұл код пайдаланушының параметрлерін көрсетуге
// арналған және ол осы ақпаратқа қол жеткізу үшін контекстті пайдаланады.