import React from "react";

// Import components
import Map from "./../components/map";
import StoreCardTag from "./../components/storeCardTag";

const SAMPLE_STORE = {
  name: "Chevron",
  address: "851 California St, San Francisco, CA 94598",
  storeCoordinates: ["37.906310", "-122.063945"],
  closingHour: "8PM",
  isRecentlyInStock: true,
  productName: "Apple iPhone Charger",
  inStorePrice: 15.99,
  originalPrice: 20.99,
};

const StoreCard = (props) => {

  let {productData} = props;

  return (
    <div className="store-card-wrapper">
      <div className="store-card">
        <div className="row">
          <div className="col-md-6 col-no-padding">
            <div className="store-card-text-wrapper">
              <div className="store-card-store-name">{productData.store_name}</div>
              <div className="store-card-store-address">{productData.address}</div>
              <div className="d-flex justify-content-left store-card-tags-wrapper">
                <StoreCardTag
                  iconClass={"far fa-clock"}
                  colorClass={"aqua-color"}
                  text={`Open until ${productData.closing_hour}:00`}
                />
                <StoreCardTag iconClass={"fas fa-shopping-bag"} colorClass={"blue-color"} text={`Recently in Stock`} />
              </div>
              <div className="store-card-price-section">
                <span className="store-card-in-store-price">${productData.in_store_price}</span> in-store price!{"  "}
                <span className="store-card-original-price">(${productData.original_price})</span>
              </div>
              <div className="store-card-product-name">
                In-store Product Name - "<span className="bold-text">{productData.product_name}"</span>
              </div>
              <button className="store-card-reserve-button">Reserve Now</button>
            </div>
          </div>
          <div className="col-md-6 col-no-padding">
            <div className="store-card-map-wrapper">
              <Map storeCoordinates={productData.store_coordinates} storeName={productData.store_name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
