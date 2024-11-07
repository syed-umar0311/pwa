import React from "react";
import "../Navigation/Navigation.css";
import Menu from "../../../images/Menu.png";
import vector from "../../../images/Vector.png";
import navlogo from "../../../images/navlogo.png";
import { Link } from "react-router-dom";
import { CiSquareCheck } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";

function Navigation() {
  return (
    <div className="main">
      <div className="app">
        {/* Header */}
        <header className="header">
          <img src={navlogo} alt="Logo" className="logo" />{" "}
          {/* Add the image */}
          <div className="icons">
            <img src={vector} alt="bell" className="icon" />
            <img src={Menu} alt="nav" className="icon" />
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          <h2>Seasonal Checklist</h2>
        </main>

        {/* Bottom Navigation */}
        <footer className="bottom-nav">
          <Link to="/filter">
            <BsFilterLeft className="nav-icon" />
          </Link>
          <Link to="/check">
            {" "}
            <CiSquareCheck className="nav-icon " />
          </Link>
          <Link to="/home">
            {" "}
            <GoHome className="nav-icon" />
          </Link>
          <Link to="/cart">
            {" "}
            <RiShoppingBag3Line className="nav-icon" />
          </Link>
          <Link to="/login">
            <FiUser className="nav-icon" />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Navigation;
