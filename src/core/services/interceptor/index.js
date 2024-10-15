import axios from "axios";
import {
  clearStorage,
  getItem,
  removeItem,
} from "../../../components/common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  console.log(err);
  if (err.response.status === 401) {
    clearStorage();
    removeItem("token");
    // window.location.pathname = "./";
  }

  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use((opt) => {
  const token = getItem("token") ;
  // const token = getItem("token") ? JSON.parse(getItem("token")) : "";
  if (token) opt.headers.Authorization = "Bearer " + token;
  return opt;
});

export default instance;
