import React from "react";
import '../Notification/Notification.css'
import { useState, useEffect } from "react";

function Notification() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.example.com/data", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else if (response.status === 400) {
        setError(
          "Bad Request (400): The server could not understand the request."
        );
      } else if (response.status === 401) {
        setError(
          "Unauthorized (401): Authentication is required or has failed."
        );
      } else if (response.status === 500) {
        setError("Server Error (500): An internal server error has occurred.");
      } else {
        setError(
          `Unexpected Error (${response.status}): ${response.statusText}`
        );
      }
    } catch (err) {
      setError(`Network Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="mini-list">
       <div className="in-list">
        list
       </div>
       <div className="in-list">
        list
       </div>
       <div className="in-list">
        list
       </div>
       
        </div>
    </>
  );
}

export default Notification;
