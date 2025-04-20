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


export const createAxiosInstanceForSSR = (cookie?: string) => {
  return axios.create({
    baseURL: 'http://localhost:4000/api/v1', // یا هر آدرس بک‌اندی که داری
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      ...(cookie ? { Cookie: cookie } : {}), // فقط اگر سمت سرور باشیم
    },
  });
};