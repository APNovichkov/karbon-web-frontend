const BASE_URL = "http://127.0.0.1:5000"

export const getSearchUrl = (searchTerm, lat, long) => {
    return `${BASE_URL}/search?searchTerm=${searchTerm}&latitude=${lat}&longitude=${long}`;
}