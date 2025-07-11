import React from "react";
import LandingPage from "./pages/LandingPage.jsx";

import { Routes, Route, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from "./pages/Homepage.jsx";
import Navbar from "./components/Navbar.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="sync">
      {location.pathname !== "/" && <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
