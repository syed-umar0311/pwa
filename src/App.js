import React from "react";
import Navigation from "./components/pages/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from '../src/components/pages/Cart/Cart';
import Check from '../src/components/pages/Checklist/Check';
import Explore from './components/pages/Explore/Explore';
import Login from "../src/components/auth/login/Login";
import Signup from "../src/components/auth/signup/Signup";
import AddProperty from "./components/pages/AddProperty/AddProperty";
import User from '../src/components/pages/User/User'
import Search from "./components/pages/Search/Search";
import Home from "./components/pages/Home/Home";
import EditAddress from "./components/pages/EditAddress/EditAddress";
import PasswordChange from '../src/components/pages/Passwordchange/PasswordChange'
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/passwordchange" element={<PasswordChange/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/editaddress" element={<EditAddress/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/Navigation" element={<Navigation/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/check" element={<Check/>} />
          <Route path="/explore" element={<Explore/>} />         
          <Route path="/addproperty" element={<AddProperty/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
