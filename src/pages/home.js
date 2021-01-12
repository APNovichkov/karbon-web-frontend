import React, { useState } from "react";
import axios from "axios";

// Import components
import SearchHeader from "./../components/searchHeader";
import StoreCard from "./../components/storeCard";

// Import Utils
import { getSearchUrl } from "../utils/urlUtils";

const Home = (props) => {
  const [searchItems, setSearchItems] = useState([]);
  const [userAddress, setHomeUserAddress] = useState();
  const [isLoadingResults, setIsLoadingResults] = useState(false);

  const handleSearchClick = (searchTerm, userLat, userLong) => {
    console.log("Handling search click with search term: ", searchTerm);

    setIsLoadingResults(true);

    axios.get(getSearchUrl(searchTerm, userLat, userLong)).then((res) => {
      console.log("Response from search: ", res.data);
      setSearchItems(res.data.search_result);
      setIsLoadingResults(false);
    });
  };

  return (
    <div className="home-wrapper">
      <SearchHeader handleSearchClick={handleSearchClick} setHomeUserAddress={setHomeUserAddress} />

      {isLoadingResults && (
        <div className="loading-results-wrapper text-center">
          <img src="/assets/images/logo48.png" className="loading-karbon-logo" id="karbon-logo" />
        </div>
      )}
      {!isLoadingResults && (
        <div className="results-wrapper">
          {searchItems.length > 0 ? (
            <div>
              <div className="best-price-wrapper">
                <div className="best-price-header">
                  <span className="fas fa-tag"></span> Best Price
                </div>
              </div>
              {searchItems.map((item) => (
                <StoreCard productData={item} userAddress={userAddress} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
