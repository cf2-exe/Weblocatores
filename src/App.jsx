/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ProductsDisplay />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
