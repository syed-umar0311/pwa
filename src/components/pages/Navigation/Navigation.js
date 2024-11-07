import React from 'react';
import '../Navigation/Navigation.css';
import Menu from '../../../images/Menu.png';
import vector from '../../../images/Vector.png';
import navlogo from '../../../images/navlogo.png'
import { CiSquareCheck } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";








function Navigation() {
  return (
    <div className='main'>
      <div className="app">
        {/* Header */}
        <header className="header">
          <img src={navlogo} alt="Logo" className="logo" /> {/* Add the image */}
          <div className="icons">
            <img src={vector} alt='bell' className="icon" />
            <img src={Menu} alt='nav' className="icon" />
          </div>
        </header>

        {/* Main Content */}
        <main className="content">
          <h2>Seasonal Checklist</h2>
        </main>

        {/* Bottom Navigation */}
        <footer className="bottom-nav">
          <BsFilterLeft className="nav-icon" />
          <CiSquareCheck className="nav-icon " />
          <GoHome className="nav-icon" />
          <RiShoppingBag3Line className="nav-icon" />
          <FiUser className="nav-icon" />
        </footer>
      </div>
    </div>
  );
}

export default Navigation;
