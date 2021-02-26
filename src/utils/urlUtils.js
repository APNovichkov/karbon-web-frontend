const BASE_URL = "https://karbon-web-api.dev.novichkov.dev"

export const getSearchUrl = (searchTerm, lat, long) => {
    return `${BASE_URL}/search?searchTerm=${searchTerm}&latitude=${lat}&longitude=${long}`;
}

export const getGMapsDirectionsUrl = (origin, destination) => {
    let gmaps_url = "https://www.google.com/maps/dir/?api=1";

    let formattedOrigin = convertAddressToGoogleUrl(origin);
    let formattedDestination = convertAddressToGoogleUrl(destination);

    return `${gmaps_url}&origin=${formattedOrigin}&destination=${formattedDestination}`;
}   

const convertAddressToGoogleUrl = (addy) => {
    return addy.replace(" ", "+").replace(",", "%2C");
}

const fixedEncodeURIComponent = (str) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
      return '%' + c.charCodeAt(0).toString(16)
    })
  }