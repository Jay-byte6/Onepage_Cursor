import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingFormProvider } from './contexts/LandingFormContext';

// Pages
import Home from './pages/Home';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import Export from './pages/Export';

function App() {
  return (
    <LandingFormProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/export" element={<Export />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </LandingFormProvider>
  );
}

export default App; 