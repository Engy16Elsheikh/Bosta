import React, { createContext, useState } from "react";
import axios from "axios";

export const TrackingContext = createContext();

export const TrackingProvider = ({ children }) => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackingNumberChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`https://tracking.bosta.co/shipments/track/67151313`)
      .then((response) => {
        setTrackingInfo(response.data);
        setError(null);
      })
      .catch((error) => {
        setTrackingInfo(null);
        setError("Error retrieving tracking information. Please try again.");
      });
  };

  const trackingContextValue = {
    trackingNumber,
    trackingInfo,
    error,
    handleTrackingNumberChange,
    handleFormSubmit,
  };
  return (
    <TrackingContext.Provider value={trackingContextValue}>
      {children}
    </TrackingContext.Provider>
  );
};