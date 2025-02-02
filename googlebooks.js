const axios = require('axios');

/**
 * Searches for books using the Google Books API based on the given title.
 * @param {string} title - The title of the book to search for.
 * @returns {object} - Returns an object containing data, status, statusText, headers, and request headers.
 */
async function searchBooks(title) {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
        
        // Returning the required structure
        return {
            data: response.data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            requestHeader: response.config.headers
        };
    } catch (error) {
        console.error('Error fetching data from Google Books API:', error);
        return { 
            error: error.message 
        };
    }
}

module.exports = { searchBooks };
