

import React from 'react';

// import { isTestRunning } from '../shared/global';
import MainPage from '../pages/mainPage'
import AboutPage from '../pages/aboutPage'
import InfoPage from '../pages/infoPage'
import ContactsPage from '../pages/contactsPage'
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
  <>
      <MantineProvider>
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </MantineProvider>
  </>
  );
};

export default App;
