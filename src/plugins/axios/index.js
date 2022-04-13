import axios from 'axios';

const axioInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axioInstance;
