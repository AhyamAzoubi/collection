import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";

import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Cart from "./component/Cart";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
