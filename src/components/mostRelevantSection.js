import React, { useState, useEffect, useRef } from "react";

// Import Components
import StoreCard from "./storeCard";
import Pagination from "./pagination";

const MostRelevantSection = (props) => {
  let { relevantResult, userAddress } = props;

  const [startingIndex, setStartingIndex] = useState(0);
  const [endingIndex, setEndingIndex] = useState(10);
  const [toScrollToTop, setToScrollToTop] = useState(false);

  // Scrolling to bottom
  const scrollToTopRef = useRef(null);
  const scrollToTop = () => {
    if (toScrollToTop == true) {
      scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
      setToScrollToTop(false);
    }
  };
  useEffect(scrollToTop, [toScrollToTop]);


  return (
    <div>
      <div ref={scrollToTopRef}></div>
      <div className="relevant-result-wrapper">
        {relevantResult.slice(startingIndex, endingIndex).map((item) => (
          <StoreCard productData={item} userAddress={userAddress} />
        ))}
      </div>
      <Pagination
        productsLength={relevantResult.length}
        setStartingIndex={setStartingIndex}
        setEndingIndex={setEndingIndex}
        setToScrollToTop={setToScrollToTop}
      />
    </div>
  );
};

export default MostRelevantSection;
