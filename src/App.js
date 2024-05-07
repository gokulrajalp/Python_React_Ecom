import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componrnts/Home';
import AddProduct from './componrnts/AddProduct';

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
