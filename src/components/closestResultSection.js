import React from "react";

// Import Components
import StoreCard from "./storeCard";

const ClosestResultSection = (props) => {
  let { closestResult, userAddress } = props;

  return (
    <div>
      <div className="closest-result-wrapper">
        {/* <div className="closest-result-header">
          <span className="fas fa-map-marked-alt"></span> Closest Location
        </div> */}
      </div>
      {closestResult.map((item) => (
        <StoreCard productData={item} userAddress={userAddress} />
      ))}
    </div>
  );
};

export default ClosestResultSection;
