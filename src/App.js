import React from "react";
import Navigation from "./components/pages/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from '../src/components/pages/Cart/Cart';
import Check from '../src/components/pages/Checklist/Check';
import Explore from './components/pages/Explore/Explore';
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import AddProperty from "./components/pages/AddProperty/AddProperty";
import User from '../src/components/pages/User/User'
import Search from "./components/pages/Search/Search";
import Home from "./components/pages/Home/Home";
import EditAddress from "./components/pages/EditAddress/EditAddress";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AddProperty/>} />
          <Route path="/editaddress" element={<EditAddress/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/addproperty" element={<AddProperty/>} /> */}
          <Route path="/user" element={<User/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Navigation" element={<Navigation/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/check" element={<Check/>} />
          <Route path="/explore" element={<Explore/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
