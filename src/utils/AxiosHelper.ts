import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.request<T>(config);
  return response.data;
};

export const apiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.get<T>(url, config);
  return response.data;
};

export const apiPost = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.post<T>(
    url,
    data,
    config,
  );
  return response.data;
};

export const apiPut = async <T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.put<T>(
    url,
    data,
    config,
  );
  return response.data;
};

export const apiDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance.delete<T>(url, config);
  return response.data;
};
