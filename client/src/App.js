import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Defaultlayout from './layout/Defaultlayout';
import './responsive.css';

function App() {
  return (
    <Routes>
      {/* Standard-Layout */}
      <Route path="/" element={<Defaultlayout />} />
    </Routes>
  );
}

export default App;
