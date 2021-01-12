import React, { useState } from "react";
import axios from "axios";

// Import components
import SearchHeader from "./../components/searchHeader";
import StoreCard from "./../components/storeCard";

// Import Utils
import { getSearchUrl } from "../utils/urlUtils";

const Home = (props) => {
  const [searchItems, setSearchItems] = useState([]);

  const [relevantResult, setRelevantResult] = useState([]);
  const [bestPriceResult, setBestPriceResult] = useState([]);
  const [closestResult, setClosestResult] = useState([]);

  const [userAddress, setHomeUserAddress] = useState();
  const [isLoadingResults, setIsLoadingResults] = useState(false);

  const handleSearchClick = (searchTerm, userLat, userLong) => {
    console.log("Handling search click with search term: ", searchTerm);

    setIsLoadingResults(true);

    axios.get(getSearchUrl(searchTerm, userLat, userLong)).then((res) => {
      console.log("Response from search: ", res.data);

      setRelevantResult(res.data.relevant_result);
      setBestPriceResult(res.data.best_price_result);
      setClosestResult(res.data.closest_result);

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
          {bestPriceResult.length > 0 ? (
            <div>
              <div className="best-price-wrapper">
                <div className="best-price-header">
                  <span className="fas fa-tag"></span> Best Price
                </div>
              </div>
              {bestPriceResult.map((item) => (
                <StoreCard productData={item} userAddress={userAddress} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {bestPriceResult.length > 0 ? (
            <div>
              <div className="closest-result-wrapper">
                <div className="closest-result-header">
                  <span className="fas fa-map-marked-alt"></span> Closest Location
                </div>
              </div>
              {closestResult.map((item) => (
                <StoreCard productData={item} userAddress={userAddress} />
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {relevantResult.length > 0 ? (
            <div>
              <div className="relevant-result-wrapper">
                <div className="relevant-result-header">
                  <span className="far fa-thumbs-up"></span> Most Relevant
                </div>
              </div>
              {relevantResult.map((item) => (
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
