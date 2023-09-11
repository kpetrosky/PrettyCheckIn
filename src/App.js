import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import VerticalNavBar from './components/pages/VerticalNavBar';
import Header from './components/Header';

// Import your other components for different routes
import About from './components/pages/About';
import Syllabus from './components/pages/Syllabus';
import Homework from './components/pages/Homework';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Wrt101am from './components/pages/Wrt101am';
import Wrt101pm from './components/pages/Wrt101pm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <VerticalNavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Wrt101am/*" element={<Wrt101am />} />
          <Route path="/Wrt101pm/*" element={<Wrt101pm />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
