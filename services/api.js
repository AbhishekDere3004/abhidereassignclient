import axios from 'axios';

const API_BASE_URL = 'your_backend_api_url';

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    return response.data; // Return response from the API (e.g., user data or success message).
  } catch (error) {
    if (error.response) {
      // Server responded with a non-2xx status code
      const errorMessage = error.response.data.message; // Customize this based on your API response structure
      throw new Error(errorMessage);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('Network error. Please try again.');
    } else {
      // Something happened in setting up the request
      throw new Error('An error occurred. Please try again.');
    }
  }
};

export const signin = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, credentials);
    return response.data; // Return response from the API (e.g., JWT token or user data).
  } catch (error) {
    if (error.response) {
      // Server responded with a non-2xx status code
      const errorMessage = error.response.data.message; // Customize this based on your API response structure
      throw new Error(errorMessage);
    } else if (error.request) {
      // The request was made but no response was received
      throw new Error('Network error. Please try again.');
    } else {
      // Something happened in setting up the request
      throw new Error('An error occurred. Please try again.');
    }
  }
};
