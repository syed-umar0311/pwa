import React, { useState } from 'react';
import '../Search/Search.css';
import { IoChevronBack } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import groups from '../../assets/images/Group.png';

function Search() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const addresses = [
    { id: 1, state: "New South Wales", abbreviation: "NSW", postcode: "2114", fullAddress: "1 Example St, New South Wales, 2114" },
    { id: 2, state: "Victoria", abbreviation: "VIC", postcode: "3260", fullAddress: "2 Example St, Victoria, 3260" },
    { id: 3, state: "Western Australia", abbreviation: "WA", postcode: "0872", fullAddress: "3 Example St, Western Australia, 0872" },
    { id: 4, state: "New South Wales", abbreviation: "NSW", postcode: "2114", fullAddress: "4 Example St, New South Wales, 2114" },
    { id: 5, state: "Victoria", abbreviation: "VIC", postcode: "3260", fullAddress: "5 Example St, Victoria, 3260" },
    { id: 6, state: "Western Australia", abbreviation: "WA", postcode: "0872", fullAddress: "6 Example St, Western Australia, 0872" },
  ];

  const handleItemClick = (address) => {
    navigate('/editaddress', { state: address });
  };

  return (
    <div className="main">
      <div className="container">
        <div className={`search ${isActive ? 'active' : ''}`}>
          <div className="in-search">
            <button className="src-button" onClick={() => setIsActive(false)}>
              <IoChevronBack />
            </button>
            <input
              type="text"
              placeholder="Search.."
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
            />
          </div>
          {!isActive && <img src={groups} alt="group" />}
          {!isActive && <h2>Use my Current Location</h2>}
          {isActive && (
            <ul className="address-list">
              <li
                className="address-item current-location"
                onClick={() => handleItemClick({ id: 0, fullAddress: "Current Location" })}
              >
                <FaLocationCrosshairs />
                <span>Use my Current Location</span>
              </li>
              {addresses.map((address) => (
                <li
                  key={address.id}
                  className="address-item"
                  onClick={() => handleItemClick(address)}
                >
                  <FaLocationDot />
                  <span>
                    {address.state} ({address.abbreviation}), {address.postcode}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
