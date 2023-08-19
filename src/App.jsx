import React from 'react'
import {HashRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from "./pages/About"
import Track from './pages/Track'
import Dashboard from './pages/Dashboard'
import ContactUs from './pages/ContactUs';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Check if the URL path ends with "/admin"
    console.log(window.location.pathname);
    if (window.location.pathname.endsWith('admin')) {
      // Redirect to the admin page URL
      const adminUrl = 'http://api.shipsmartlyservices.com/admin';

      // Redirect to the admin page URL
      window.location.href = adminUrl;
    }
  }, []);
  
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path ='/Track' element={<Track/>} /> 
        <Route path ='/contact' element={<ContactUs/>} /> 
        <Route path="/Dashboard/:code" element={<Dashboard/>} />
        <Route path="admin" element={<Navigate to="http://api.shipsmartlyservices.com/admin" replace />} />
  
      </Routes>
    </HashRouter>
    <Footer />
  </>
  )
}

export default App
