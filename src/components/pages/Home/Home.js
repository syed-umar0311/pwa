import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
function Home() {
  return (
<>
<div className='main'>
  <div className='content'>
    <div className='image'></div>
    <h1>Let's Get Started</h1>
    <p>Organize, track, and manage all 
    your properties in one seamless app.</p>
    <div className='button'>
    <Link to="/login"> <button className='login'>Login</button></Link>
    <Link to="/signup"> <button className='signup'>Sign Up</button></Link>
    </div>
  </div>

</div>
</>
  )
}

export default Home