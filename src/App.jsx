import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Navbar from './componenets/navbar.jsx';
import Footer from './componenets/fotter.jsx';
import "./App.css"
import AboutUs from './pages/about.jsx';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#about" element={<AboutUs />} />
      </Routes>
      <div id="Footer">
      <Footer />

      </div>

    </Router>
  );
};

export default App;