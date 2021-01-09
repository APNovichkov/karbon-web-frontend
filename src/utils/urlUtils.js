const BASE_URL = "localhost:5000"

export const getSearchUrl = (searchTerm) => {
    return `${BASE_URL}/search?searchTerm=${searchTerm}`;
}