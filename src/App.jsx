import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Setting from "./pages/Setting";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
