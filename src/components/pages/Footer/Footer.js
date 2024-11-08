import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom';
import { CiSquareCheck } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { BsFilterLeft } from "react-icons/bs";

function Footer() {
  return (
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
  )
}

export default Footer