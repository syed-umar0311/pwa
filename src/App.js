import React from "react";
import Navigation from "./components/pages/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from '../src/components/pages/Cart/Cart';
import Check from '../src/components/pages/Checklist/Check';
import Filter from '../src/components/pages/Filter/Filter';
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import Home from '../src/components/pages/Home/Home';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/check" element={<Check />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
