import React from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom';
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
    // Check if the URL contains "/admin"
    if (window.location.pathname.startsWith('/admin')){
      // Redirect to the admin page of your API
      window.location.href = 'https://api.shipsmartlyservices.com/admin/';
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
       
      </Routes>
    </HashRouter>
    <Footer />
  </>
  )
}

export default App
