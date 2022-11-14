import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import SignUp from "./pages/signup/SignUp";

function App() {
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      
      </Routes>
    </Router>
  );
}

export default App;
