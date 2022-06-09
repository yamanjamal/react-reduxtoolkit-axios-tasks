import Axios from "../services/Axios";
import { _AuthService } from "../services/Auth.Service";
import { _SnackbarService } from "../services/Snackbar.Service";

export const HttpErrorsInterceptor = () => {

  Axios.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    }, 
    (error) => {
    // Do something with response error
    switch (error.response.status) {
      case 404:
        _SnackbarService.AddSnackbar('error','404 - Not Found')
        break;
      case 401:
        _AuthService.doLogout();
        _SnackbarService.AddSnackbar('warning','401 - Unauthorized')
        break;

      case 422:
        _SnackbarService.AddSnackbar('info','422 - The given data was invalid')
        break;

      case 500:
        _SnackbarService.AddSnackbar('error','500 - Server Error')
        break;

      case 403:
        _SnackbarService.AddSnackbar('info',"403 - You don't have the permission")
        break;

      default:
        _SnackbarService.AddSnackbar('error','Null - Unknown Error')
        break;
    }
      return Promise.reject(error);
    }
  );
}
