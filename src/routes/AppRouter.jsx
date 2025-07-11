import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Features from '../pages/Features';
import Genrate from '../pages/Genrate';
import SavedEmails from '../pages/SavedEmails';
import Contact from '../pages/Contact';
import MainLayout from '../layout/MainLayout';
import About from '../pages/About';

function AppRouter() {
  return (
    <Routes>
      {/* Main layout wraps all child pages */}
      <Route path="/" element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="about" element={<About />} />
        <Route path="genrate" element={<Genrate />} />
        <Route path="emails" element={<SavedEmails />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
