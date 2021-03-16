import React, { useEffect, useState } from "react";
import axios from "axios";

// Import components
import SearchHeader from "./../components/searchHeader";
import StoreCard from "./../components/storeCard";
import LoadingResults from "./../components/loadingResults";
import BestPriceSection from "./../components/bestPriceSection";
import ClosestResultSection from "./../components/closestResultSection";
import RelevantResultSection from "./../components/mostRelevantSection";
import Sidebar from "./../components/sidebar";

// Import Utils
import { getSearchUrl } from "../utils/urlUtils";

const handleOnScroll = (event, setSidebarCoordinates) => {
  // console.log("Position Y: ", window.scrollY);

  setSidebarCoordinates(window.scrollY);
}

const Home = (props) => {
  // API results
  const [relevantResult, setRelevantResult] = useState([]);
  const [bestPriceResult, setBestPriceResult] = useState([]);
  const [closestResult, setClosestResult] = useState([]);

  // User parameters
  const [userAddress, setHomeUserAddress] = useState();

  // Page Functionality
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [toShowResults, setToShowResults] = useState(false);
  const [resultToShow, setResultToShow] = useState("");
  const [sidebarCoordinates, setSidebarCoordinates] = useState();

  const handleSearchClick = (searchTerm, userLat, userLong) => {
    console.log("Handling search click with search term: ", searchTerm);

    setIsLoadingResults(true);

    axios.get(getSearchUrl(searchTerm, userLat, userLong)).then((res) => {
      console.log("Response from search: ", res.data);

      setRelevantResult(res.data.relevant_result);
      setBestPriceResult(res.data.best_price_result);
      setClosestResult(res.data.closest_result);

      setIsLoadingResults(false);
      setToShowResults(true);
    });
  };


  useEffect(() => {
    window.addEventListener("scroll", (event) => handleOnScroll(event, setSidebarCoordinates)) 

    

    return () => window.removeEventListener("scroll", (event) => handleOnScroll(event, setSidebarCoordinates))
  }, [])

  

  return (
    <div className="home-wrapper">
      <SearchHeader handleSearchClick={handleSearchClick} setHomeUserAddress={setHomeUserAddress} />

      {isLoadingResults && <LoadingResults />}

      <div onScroll={handleOnScroll} className="home-content-wrapper">
        {toShowResults && (
          <div className="row">
            <div className="col-xl-3">
              <Sidebar setResultToShow={setResultToShow} sidebarCoordinates={sidebarCoordinates}/>
            </div>
            <div className="col-xl-9">
              <div className="results-wrapper">
                {resultToShow == "bestprice" && (
                  <div>
                    {bestPriceResult.length > 0 && (
                      <BestPriceSection bestPriceResult={bestPriceResult} userAddress={userAddress} />
                    )}
                  </div>
                )}
                {resultToShow == "closestlocation" && (
                  <div>
                    {closestResult.length > 0 && (
                      <ClosestResultSection closestResult={closestResult} userAddress={userAddress} />
                    )}
                  </div>
                )}
                {resultToShow == "relevant" && (
                  <div>
                    {relevantResult.length > 0 && (
                      <RelevantResultSection relevantResult={relevantResult} userAddress={userAddress} />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
