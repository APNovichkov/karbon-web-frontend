import React from "react";

// Import Components
import StoreCard from "./storeCard";

const MostRelevantSection = (props) => {
  let { relevantResult, userAddress } = props;
  return (
    <div>
      <div className="relevant-result-wrapper">
        {/* <div className="relevant-result-header">
          <span className="far fa-thumbs-up"></span> Most Relevant
        </div> */}
      </div>
      {relevantResult.map((item) => (
        <StoreCard productData={item} userAddress={userAddress} />
      ))}
    </div>
  );
};

export default MostRelevantSection;
