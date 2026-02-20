import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Breadcrum from './components/breadcrum';
import Home from './pages/home';
import Menu from './pages/menu';
import Nosotros from './pages/nosotros';
import Login from './components/login';
function App() {
  

  return (
      <Router>
        <Navbar />
        <Breadcrum />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<div>Contacto</div>} />
        </Routes>
      </Router>
 
    
      
  )
}

export default App
