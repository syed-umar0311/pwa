import React from "react";
import "../AddProperty/AddProperty.css";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';



function AddProperty() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search'); // Navigate to the 'About' page
  };
  
  return (
    <>
      <div className="homemain">
        <div className="homecontainer">
          <h2 className="heading-main">Add Property</h2>
          <h2 className="heading-secondary">Let’s get started! Adding your property helps 
          you stay on top of every detail.</h2>
         

          
          <button className="add-button"  onClick={handleClick}>
            <FiPlus style={{fontSize:"16px", color:"white", marginBottom:"2px"}}/> Add New Property
          </button>

          
        </div>
      </div>
    </>
  );
}

export default AddProperty;
