import axios from "axios";

export const appJsonApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    withCredentials : false,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const multipartFormApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1',
    withCredentials : false,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });