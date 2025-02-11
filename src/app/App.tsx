import React, { useEffect } from 'react';
import MainPage from '../pages/mainPage'
import AboutPage from '../pages/aboutPage'
import InfoPage from '../pages/infoPage'
import ContactsPage from '../pages/contactsPage'
import Map from '../pages/mapPage'
import { Routes, Route, useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
  <>
        <ScrollToTop />
        <Routes>
          <Route path="/kafedra/contacts" element={<ContactsPage />} />
          <Route path="/kafedra/about" element={<AboutPage />} />
          <Route path="/kafedra/info" element={<InfoPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="/kafedra/map" element={<Map/>} />
        </Routes>
  </>
  );
};

export default App;
