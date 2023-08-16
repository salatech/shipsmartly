import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from "./pages/About"
import Track from './pages/Track'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path ='/Track' element={<Track/>} /> 
        <Route path="/Dashboard/:code" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  )
}

export default App
