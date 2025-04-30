import React, { useEffect } from "react";
import MainPage from "../pages/mainPage";
import WorksPage from "../pages/worksPage";
import Map from "../pages/mapPage";
import { Routes, Route, useLocation } from "react-router-dom";
import VkrPage from "../pages/vkrPage";
import TeachersPage from "../pages/teachersPage";
import ShedulePage from "../pages/shedulePage";


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
        <Route path="/kafedra/raboti_studentov" element={<WorksPage />} />
        <Route path="*" element={<MainPage />} />
        <Route path="/kafedra/karta" element={<Map />} />
        <Route path="/kafedra/vkr" element={<VkrPage />} />
        <Route path="/kafedra/raspisanie" element={<ShedulePage />} />
        <Route path="/kafedra/prepodavateli" element={<TeachersPage />} />
        
      </Routes>
    </>
  );
};

export default App;
