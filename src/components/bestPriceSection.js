import React from "react";

// Import components
import StoreCard from "./storeCard";

const BestPriceSection = (props) => {
  let { bestPriceResult, userAddress } = props;

  return (
    <div>
      <div className="best-price-wrapper">
        {/* <div className="best-price-header">
          <span className="fas fa-tag"></span> Best Price
        </div> */}
      </div>
      {bestPriceResult.map((item) => (
        <StoreCard productData={item} userAddress={userAddress} />
      ))}
    </div>
  );
};

export default BestPriceSection;
