import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
//   height: "150px",
//   width: "200px",
    
    borderRadius: "10px",
    marginRight: "29px"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        fullscreenControl={false}
        mapTypeControl={false}
        style={mapStyles}
        initialCenter={{
          lat: this.props.storeCoordinates[0],
          lng: this.props.storeCoordinates[1],
        }}
      >
        <Marker onClick={this.onMarkerClick} name={this.props.storeName} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAU7ULudFXOAtTuR5ix0a7RLgpYYKRDj-U",
})(MapContainer);
