// import Axios from "../services/Axios";
import Axios from "axios-observable";
import { _AuthService } from "../services/Auth.Service";

export const HttpHeadersInterceptor = () => {

  Axios.interceptors.request.use(
    (request) => {
      // Do something before request is sent
      const token = _AuthService.getJwtToken();
      if (request.headers) request.headers.Authorization = token ? `Bearer ${token}` : '';
      
      return request;
    }, 
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}
