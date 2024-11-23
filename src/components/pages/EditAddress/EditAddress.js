import React, { useState } from "react";
import "../EditAddress/EditAddress.css";
// import { useLocation } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
// import SaveAddress from "../SaveAddress/SaveAddress";
function EditAddress() {
  //   const location = useLocation();
  const [edit, setedit] = useState(true);
  // const address = location.state;
  const address = {
    id: 1,
    state: "New South Wales",
    abbreviation: "NSW",
    postcode: "2114",
    fullAddress: "1 Example St, New South Wales, 2114",
  };
  const save = () => {
    setedit(false);
  };
  return (
    <>
      {edit ? (
        <>
          <div className="main">
            <div className="container">
              <div className="search-top">
                <button className="src-button">
                  <IoChevronBack />
                </button>
                <input type="text" placeholder="Search.." />
              </div>
              <div className="edit">
                {address ? (
                  <>
                    <h2>Please confirm your location</h2>
                    <div className="detail">
                      <div>
                        <FaLocationDot className="icon" />
                      </div>
                      <div className="state">
                        <h1>{address.state}</h1>
                        <h4>
                          {address.fullAddress}, {address.postcode}
                        </h4>
                      </div>
                    </div>
                    <button className="edit-address" onClick={save}>
                      Edit your Address
                    </button>
                  </>
                ) : (
                  <p>Please Add Propety First</p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main">
            <div className="container">
              <div className="search-top">
                <button className="src-button">
                  <IoChevronBack />
                </button>
                <input type="text" placeholder="Search.." />
              </div>

              <div className="save">
                <h1>Address Details</h1>
                <p>Complete address would assist us better in serving you.</p>
                <h2>Select Address Type</h2>
                <div className="save-btn">
                  <button>HOME</button>
                  <button>APARTMENT</button>
                  <button>OFFICE</button>
                  <button>OTHER</button>
                </div>
                <h3>Select Colors</h3>
                <div className="circles">
                  <div className="cir"> </div>
                  <div className="cir"> </div>
                  <div className="cir"> </div>
                  <div className="cir"> </div>
                  <div className="cir"> </div>
                  <div className="cir"> </div>
                </div>
                <h3> Property Name</h3>
                <input type="text" placeholder="Home" required />
                <h3>Complete Address</h3>
                <input type="text" placeholder="Address Line 1" required />
                <input type="text" placeholder="Address Line 2" required />
                <div className="address-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">City/Town</label>
                      <select id="city" className="form-control">
                        <option value="" disabled selected>
                          City
                        </option>
                        {/* Add city options here */}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State/Province</label>
                      <select id="state" className="form-control">
                        <option value="" disabled selected>
                          State
                        </option>
                        {/* Add state options here */}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="postal-code">Postal Code</label>
                      <input
                        id="postal-code"
                        type="code"
                        className="form-control"
                        placeholder="0000"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select id="country" className="form-control">
                        <option value="" disabled selected>
                          Country
                        </option>
                        {/* Add country options here */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditAddress;
