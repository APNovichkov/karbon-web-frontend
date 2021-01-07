import React, { useEffect, useState } from "react";

const SearchHeader = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchTermEmpty, setIsSearchTermEmpty] = useState(true);

  const handleSubmitSearchTermClick = (event) => {
    event.preventDefault();

    console.log("Searching for term:", searchTerm);
  };

  useEffect(() => {
      console.log("Search term changed to: ", searchTerm);
      if(searchTerm === ""){
        setIsSearchTermEmpty(true);
      }else{
        setIsSearchTermEmpty(false);
      }
  }, [searchTerm])

  return (
    <div className="search-header-wrapper text-center">
      <div className="search-header">
        <div className="logo-wrapper">
          <img src="/assets/images/logo.png" className="search-header-logo" width="100"></img>
        </div>
        <div className="search-header-text-wrapper">
          <div className="search-header-text">Search for Products or Stores</div>
        </div>
        <div className="search-bar-wrapper">
          <form onSubmit={handleSubmitSearchTermClick} className="form-inline search-bar-form">
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              type="text"
              className="search-bar"
            //   className={isSearchTermEmpty ? "search-term-empty search-bar" : "search-term-full search-bar"}
            //   className={`search-bar ${searchTerm === "" ? "search-term-empty" : "search-term-full"}`}
              placeholder="Search..."
            ></input>
            <button type="submit" className="search-bar-button">
              <span className="fas fa-search search-bar-icon"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
