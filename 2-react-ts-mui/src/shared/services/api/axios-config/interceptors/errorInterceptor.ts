import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Network error."))
  }
  
  if (error.response?.status === 401) {
    //
  }

  return Promise.reject(error);
}