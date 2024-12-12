
/* eslint-disable no-unused-vars */
import React from 'react'
//import { Navbar } from "./component/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services' element={<Services/>}></Route> */}
      </Routes>
    </Router>
    </>
  );
}
