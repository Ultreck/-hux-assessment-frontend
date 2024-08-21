import axios from "axios";
import { useDispatch } from "react-redux";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/hux-assessment/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});




// Interceptor to handle requests
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle responses
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log("Response error:", error.response);
    } else if (error.request) {
      console.log("Request error:", error.request);
    } else {
      console.log("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
