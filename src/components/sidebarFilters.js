import React, { useEffect, useState } from "react";

const SidebarFilters = (props) => {

    let {setResultToShow} = props;

  const [isBestPriceSelected, setIsBestPriceSelected] = useState(true);
  const [isClosestLocationSelected, setIsClosestLocationSelected] = useState(false);
  const [isMostRelevantSelected, setIsMostRelevantSelected] = useState(false);

  useEffect(() => {
      setResultToShow("bestprice");
  }, [])

  const handleBestPriceClick = (event) => {
    event.preventDefault();

    setIsBestPriceSelected(true);
    setIsClosestLocationSelected(false);
    setIsMostRelevantSelected(false);

    setResultToShow("bestprice")
  };

  const handleClosestLocationClick = (event) => {
    event.preventDefault();

    setIsBestPriceSelected(false);
    setIsClosestLocationSelected(true);
    setIsMostRelevantSelected(false);

    setResultToShow("closestlocation")
  };

  const handleMostRelevantClick = (event) => {
    event.preventDefault();

    setIsBestPriceSelected(false);
    setIsClosestLocationSelected(false);
    setIsMostRelevantSelected(true);

    setResultToShow("relevant")
  };

  return (
    <div className="sidebar-filters-wrapper">
      <div className="sidebar-filters">
        <div className="sidebar-filters-header">Filters</div>
        <div className="sidebar-filters-items-wrapper">
          <div onClick={handleBestPriceClick} className={`sidebar-filters-item best-price-color ${isBestPriceSelected ? "best-price-selected" : "not-selected-padding"}`}>
            <span className="fas fa-tag"></span> Best Price
          </div>
          <div onClick={handleClosestLocationClick} className={`sidebar-filters-item closest-result-color ${isClosestLocationSelected ? "closest-location-selected" : "not-selected-padding"}`}>
            <span className="fas fa-map-marked-alt"></span> Closest Result
          </div>
          <div onClick={handleMostRelevantClick} className={`sidebar-filters-item most-relevant-color ${isMostRelevantSelected ? "most-relevant-selected" : "not-selected-padding"}`}>
            <span className="far fa-thumbs-up"></span> Most Relevant
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
