import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from '../../pages/Home';
import Menu from '../../pages/Menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
