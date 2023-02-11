import axiosLib, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axios = axiosLib.create();

axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const { status, data } = error?.response || {};

    if (!status) {
      return Promise.reject(data);
    }

    if (status && status >= 500) {
      toast.error("An unexpected error happened on the server side due to the server.");

      return Promise.reject(data);
    }

    if (status >= 400) {
      toast.error("An error happened due to the client side.");
    }

    return Promise.reject(data);
  }
);

export default axios;
