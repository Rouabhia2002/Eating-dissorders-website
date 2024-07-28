import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from '../src/pages/AboutPage';
import SubmissionPage from '../src/pages/SubmissionPage';
import Export from '../src/pages/Export';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/submissions" element={<SubmissionPage />} />
        <Route path="/export-csv" element={<Export />} />
      </Routes>
    </Router>
  );
};

export default App;
