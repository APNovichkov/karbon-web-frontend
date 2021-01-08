import React, { useState } from "react";

// Import components
import SearchHeader from "./../components/searchHeader";
import StoreCard from "./../components/storeCard";

const Home = (props) => {
  const [searchItems, setSearchItems] = useState([]);

  return (
    <div className="home-wrapper">
      <SearchHeader />
      <div className="results-wrapper">
          <div className="best-price-wrapper">
              <div className="best-price-header">
                  <span className="fas fa-tag"></span> Best Price
              </div>
          </div>
        <StoreCard />
        <StoreCard />
      </div>
    </div>
  );
};

export default Home;
