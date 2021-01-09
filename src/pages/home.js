import React, { useState } from "react";

// Import components
import SearchHeader from "./../components/searchHeader";
import StoreCard from "./../components/storeCard";

// Import Utils
import {getSearchUrl} from "../utils/urlUtils";

const Home = (props) => {
  const [searchItems, setSearchItems] = useState([]);

  const handleSearchClick = (searchTerm) => {
    console.log("Handling search click with search term: ", searchTerm);
  }


  return (
    <div className="home-wrapper">
      <SearchHeader handleSearchClick={handleSearchClick}/>
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
