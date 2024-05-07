import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;