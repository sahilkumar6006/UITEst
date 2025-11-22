/**
 * API configuration
 * @file api.ts
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Base API URL - Update this with your actual API endpoint
const BASE_URL = 'https://api.example.com';

/**
 * Create axios instance with default configuration
 */
const apiInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    // const token = await secureStorage.getItem('AUTH_TOKEN');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

export default apiInstance;

