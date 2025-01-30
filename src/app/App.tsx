import React from 'react';
import MainPage from '../pages/mainPage'
import AboutPage from '../pages/aboutPage'
import InfoPage from '../pages/infoPage'
import ContactsPage from '../pages/contactsPage'
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
  <>
        <Routes>
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
  </>
  );
};

export default App;
