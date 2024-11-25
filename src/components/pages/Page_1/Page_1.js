import React from 'react'
import '../Passwordchange/PasswordChange.css'
function Page_1() {
  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <div className="circle">
            <img
              src="https://via.placeholder.com/80"
              alt="Key Illustration"
              className="image"
            />
          </div>
        </div>
        <h1 className="title">Password Changed Successfully!</h1>
        <p className="description">
          Your changes have been saved! You can now start using the app.
        </p>
        <button className="button">Continue</button>
        <div className="indicator">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default Page_1