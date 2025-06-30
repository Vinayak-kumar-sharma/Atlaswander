import axios from 'axios';

export const fetchJSON = async (url, options = {}) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (err) {
    const status = err.response?.status || 500;
    const message = err.response?.data?.message || err.message;
    // throw new Error(`API Error (${status}): ${message}`);
      throw new Error(`API Error (${status}): ${message}`);
  }
};
