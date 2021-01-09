import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import PlacesAutocomplete from "./placesAutocomplete";

const SearchHeader = (props) => {
  let { handleSearchClick } = props;

  // User Location Variables
  const [isUserLocated, setIsUserLocated] = useState(false);
  const [locationTerm, setLocationTerm] = useState("");
  const [isLocationExact, setIsLocationExact] = useState();
  const [userCoordinates, setUserCoordinates] = useState();

  const [userAddress, setUserAddress] = useState();

  const [userCity, setUserCity] = useState();
  const [userState, setUserState] = useState();

  const [inputValue, setValue] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchTermEmpty, setIsSearchTermEmpty] = useState(true);

  const handleSubmitSearchTermClick = (event) => {
    event.preventDefault();

    console.log("Searching for term:", searchTerm);
    handleSearchClick(searchTerm);
  };

  const locateUser = (event) => {
    event.preventDefault();

    if ("geolocation" in navigator) {
      console.log("location is available");

      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);

        setIsLocationExact(true);
        setUserCoordinates([position.coords.latitude, position.coords.longitude]);
      });
    }

    console.log("Locating User");
  };

  // const handleSelect = (address) => {
  //   geocodeByAddress(address)
  //     .then((results) => getLatLng(results[0]))
  //     .then((latLng) => console.log("Success", latLng))
  //     .catch((error) => console.error("Error", error));
  // };

  useEffect(() => {
    console.log("Search term changed to: ", searchTerm);
    if (searchTerm === "") {
      setIsSearchTermEmpty(true);
    } else {
      setIsSearchTermEmpty(false);
    }
  }, [searchTerm]);

  return (
    <div className="search-header-wrapper text-center">
      <div className="search-header">
        <div className="logo-wrapper">
          <img src="/assets/images/logo.png" className="search-header-logo" width="100"></img>
        </div>
        <div className="search-header-text-wrapper">
          {isUserLocated ? (
            <div className="search-header-text">
              Search for Products or Stores in{" "}
              <span className="bold-text green-text">
                {userCity}, {userState}
              </span>
            </div>
          ) : (
            <div className="search-header-text">Where do you want to find Products or Stores?</div>
          )}
        </div>
        {isUserLocated ? (
          <div className="search-bar-wrapper">
            <form onSubmit={handleSubmitSearchTermClick} className="form-inline search-bar-form">
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                type="text"
                className="search-bar"
                placeholder="Search..."
              ></input>
              <button type="submit" className="search-bar-button">
                <span className="fas fa-search search-bar-icon"></span>
              </button>
            </form>
          </div>
        ) : (
          <div className="search-bar-wrapper">
            <form className="form-inline search-bar-form">
              <div className="d-flex justify-content-center">
                <div className="search-header-locate-me">
                  <div className="d-flex">
                    <button onClick={(event) => locateUser(event)} className="search-bar-button">
                      <span className="fas fa-location-arrow location-icon"></span>
                    </button>
                    <span className="search-header-text locate-me-text">{"  "}Locate Me</span>
                  </div>
                </div>
                <div className="search-header-find-place">
                  <div className="d-flex">
                    <GooglePlacesAutocomplete
                      style={{ width: "200px" }}
                      selectProps={{
                        userAddress,
                        onChange: setUserAddress,
                      }}
                    />
                    <button type="submit" className="search-bar-button">
                      <span className="fas fa-search search-bar-icon"></span>
                    </button>
                  </div>
                </div>
              </div>

              {/* <input
                value={locationTerm}
                onChange={(event) => setLocationTerm(event.target.value)}
                type="text"
                className="location-input"
                placeholder="Search..."
              ></input> */}
              {/* <PlacesAutocomplete/> */}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHeader;
