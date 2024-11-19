import React from 'react'
import '../Header/Header.css'
import Menu from "../../../components/assets/images/Menu.png";
import vector from "../../../components/assets/images/Vector.png";
import navlogo from "../../../components/assets/images/navlogo.png";

function Header() {
  return (
    <header className="navheader">
    <img src={navlogo} alt="Logo" className="navlogo" />{" "}
    {/* Add the image */}
    <div className="navicons">
      <img src={vector} alt="bell" className="navicon" />
      <img src={Menu} alt="nav" className="navicon" />
    </div>
  </header>
  )
}

export default Header