import React from "react";
import { useState } from "react";
import home from "../../images/home.png";
import "../../styling/Page_1.css";
function Home() {
  const [properties, setProperties] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [property, setProperty] = useState({
    number: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleAddProperty = () => {
    if (property.number && property.address && property.city) {
      setProperties([...properties, property]);
      setProperty({ number: "", address: "", city: "" }); // Reset the input fields
      setShow(!show);
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  return (
    <>
      {alert ? (
        <div className="alert alert-primary" role="alert">
          Add Successfully
        </div>
      ) : (
        ""
      )}
      <div className="main">
        <div className="container">
          <h2 className="heading-main">Select Property</h2>
          <h2 className="heading-secondary">Property List</h2>
          <ul className="property-list">
            {properties.map((prop, index) => (
              <li key={index} className="property-item">
                <div className="property-info">
                  <img
                    src={home}
                    alt="Property Icon"
                    className="property-icon"
                  />
                  <div>
                    <strong className="property-name">
                      Property {prop.number}
                    </strong>
                    <div className="property-address">{prop.address}</div>
                  </div>
                </div>
                <div>City: {prop.city}</div>
              </li>
            ))}
          </ul>

          <h2 className="property-overview-heading">Property Overview</h2>
          <div className="property-overview">
            <div>Total Properties</div>
            <div className="property-count">{properties.length}</div>
          </div>

          <button
            className="btn btn-danger btn-block btn-add-new"
            onClick={() => setShow(!show)}
          >
            Add New
          </button>

          {show && (
            <div className="form-container">
              <input
                type="text"
                name="number"
                placeholder="Property Number"
                value={property.number}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={property.address}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={property.city}
                onChange={handleChange}
                className="form-control mb-2"
              />
              <button
                onClick={handleAddProperty}
                className="btn btn-primary btn-block form-button"
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
