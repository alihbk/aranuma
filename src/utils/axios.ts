import axios, { AxiosInstance } from "axios";
import { baseUrl } from "./const";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let refreshSubscribers: Function[] = [];

const onRefreshed = (accessToken: string) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addSubscriber = (callback: Function) => {
  refreshSubscribers.push(callback);
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response && response.status === 401 && !error.config._retry) {
      if (!isRefreshing) {
        isRefreshing = true;
        const refreshToken = localStorage.getItem("refreshToken");
        try {
          const res = await axios.post(baseUrl + "api/auth/refreshToken", {
            refreshToken: refreshToken,
          });
          const newAccessToken = res.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          onRefreshed(newAccessToken);
          isRefreshing = false;
          return axios(error.config);
        } catch (refreshError) {
          console.error(refreshError);
          window.location.href = "/login";
        }
      }
      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber((accessToken: any) => {
          error.config.headers.Authorization = `Bearer ${accessToken}`;
          resolve(axios(error.config));
        });
      });
      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
