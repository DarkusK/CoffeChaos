import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Product from '../../pages/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Menu />} />
        <Route path="/coffee/:id" element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
