import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from '../src/pages/AboutPage';
import SubmissionPage from '../src/pages/SubmissionPage';
import Export from '../src/pages/Export';
import Contacte from '../src/pages/Contacte';
import ResourcesPage from '../src/pages/ResourcesPage';
import HomePage from '../src/pages/HomePage';
import ClinicPage from './pages/ClinicPage';
import GetPage from './pages/GetPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/submissions" element={<SubmissionPage />} />
        <Route path="/export-csv" element={<Export />} />
        <Route path="/contact" element={<Contacte />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/details" element={<ClinicPage />} />
        <Route path="/getinvolved" element={<GetPage />} />
      </Routes>
    </Router>
  );
};

export default App;
