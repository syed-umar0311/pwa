import React from 'react';
import '../Footer/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import { CiSquareCheck } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";

function Footer() {
  const location = useLocation();

  // Helper function to check if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bottom-nav">
      <Link to="/filter">
        <BsFilterLeft className="nav-icon" style={{ color: isActive('/filter') ? 'red' : 'black' }} />
      </Link>
      <Link to="/check">
        <CiSquareCheck className="nav-icon" style={{ color: isActive('/check') ? 'red' : 'black' }} />
      </Link>
      <Link to="/home">
        <GoHome className="nav-icon" style={{ color: isActive('/home') ? 'red' : 'black' }} />
      </Link>
      <Link to="/cart">
        <RiShoppingBag3Line className="nav-icon" style={{ color: isActive('/cart') ? 'red' : 'black' }} />
      </Link>
      <Link to="/login">
        <FiUser className="nav-icon" style={{ color: isActive('/login') ? 'red' : 'black' }} />
      </Link>
    </footer>
  );
}

export default Footer;
