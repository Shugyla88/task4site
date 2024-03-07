import React, { useState } from 'react';
import UserSettingsContext from './UserSettingsContext';

const UserSettingsProvider = ({ children }) => { //пайдаланушы параметрлері үшін контекст провайдері ретінде қызмет етеді.
  const [settings, setSettings] = useState({
    theme: 'light',
    language: 'english',
    displayPreferences: {/* other display preferences */},
  });

  const updateSettings = (newSettings) => {
    setSettings({ ...settings, ...newSettings });
  };

  return (
    <UserSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsProvider;