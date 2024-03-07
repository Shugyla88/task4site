import React, { useContext } from 'react';
import UserSettingsContext from './UserSettingsContext';
import '../css/SettingsForm.css'; // Import your CSS file

const SettingsForm = () => {
  const { settings, updateSettings } = useContext(UserSettingsContext);

  const handleFormSubmit = (newSettings) => {
    updateSettings(newSettings);
  };

  return (
    <div className={`settings-form-container ${settings.theme}`}>
    <h2 className="form-title">Settings Form</h2>
    <label className="form-label">
      Theme:
      <select
        className="form-select"
        value={settings.theme}
        onChange={(e) => handleFormSubmit({ theme: e.target.value })}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>

    <label className="form-label">
      Language:
      <select
        className="form-select"
        value={settings.language}
        onChange={(e) => handleFormSubmit({ language: e.target.value })}
      >
        <option value="english">English</option>
        <option value="russian">Russian</option>
      </select>
    </label>
  </div>
)};

export default SettingsForm;
