import React, { useState } from "react";

// Import components
import StoreCard from "./storeCard";
import Pagination from "./pagination";

const BestPriceSection = (props) => {
  let { bestPriceResult, userAddress } = props;

  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(10);

  return (
    <div>
      <div className="best-price-wrapper">
        {bestPriceResult.slice(startingIndex, endingIndex).map((item) => (
          <StoreCard productData={item} userAddress={userAddress} />
        ))}
      </div>

      <Pagination
        productsLength={bestPriceResult.length}
        setStartingIndex={setStartingIndex}
        setEndingIndex={setEndingIndex}
      />
    </div>
  );
};

export default BestPriceSection;
