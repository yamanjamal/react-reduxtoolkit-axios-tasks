import { Navigate } from "react-router-dom";
import { _AuthService } from "../services/Auth.Service";

const ShouldNotBeLogged = ({ children }: { children: JSX.Element }) => {
  if (_AuthService.isLoggedIn()) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ShouldNotBeLogged;
