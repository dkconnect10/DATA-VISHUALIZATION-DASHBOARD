import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const fetchData = async () => {
  try {
    const response = await api.get('/data/datas'); 
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default api;
