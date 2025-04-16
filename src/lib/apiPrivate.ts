import { getCookie } from "@/utils/cookie";
import { AxiosError, AxiosRequestConfig } from "axios";

const apiPrivate = (axiosPrivate : any) => {
    const accessToken = getCookie("accessToken");
    axiosPrivate.interceptors.request.use(
        (config :AxiosRequestConfig) => {
          if ( config.headers && !config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
          config.withCredentials = true;
          return config;
        },
        (error:AxiosError) => Promise.reject(error)
      );
      return axiosPrivate;
  };

export default apiPrivate;