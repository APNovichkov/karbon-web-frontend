import React from "react";

// Import Components
import StoreCard from "./storeCard";

const MostRelevantSection = (props) => {
  let { relevantResult, userAddress } = props;
  return (
    <div>
      <div className="relevant-result-wrapper">
        {relevantResult.map((item) => (
          <StoreCard productData={item} userAddress={userAddress} />
        ))}
      </div>
    </div>
  );
};

export default MostRelevantSection;
