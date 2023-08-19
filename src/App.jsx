import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Track from './pages/Track';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';

function App() {
  // Use useEffect to trigger the redirection
  useEffect(() => {
    if (window.location.pathname.startsWith('/admin')) {
      // Redirect to an external URL
      window.location.href = 'https://api.shipsmartlyservices.com/admin';
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Track" element={<Track />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Dashboard/:code" element={<Dashboard />} />
        {/* No need for a route for /admin */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
