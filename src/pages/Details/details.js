import React, { useContext } from "react";
import { TrackingContext } from "../../contexts/Trakingcontext";
const Details=()=>{
    const {
        trackingNumber,
        trackingInfo,
        status,
        location,
        error,
        handleTrackingNumberChange,
        handleFormSubmit,
      } = useContext(TrackingContext);
    return(
        <div>
        <h2>Tracking Information:</h2>
        <p>Status: {trackingInfo.status}</p>
        <p>Location: {trackingInfo.location}</p>
      </div>
    );
}
export default Details