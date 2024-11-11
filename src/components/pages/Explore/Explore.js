import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Navigation/Navigation.css";
function Explore() {
  return (
    <>
    <div className="navmain">
      <div className="appbox">
        <Header />
        <main className="navcontent">
          <h2>Explore</h2>
        </main>
        <Footer />
      </div>
    </div>
  </>
  )
}

export default Explore;
