import { Navigate, useLocation } from 'react-router-dom';
import { _AuthService } from '../services/Auth.Service';

const ShouldBeLogged = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();
  
    if (!_AuthService.isLoggedIn()) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={location.pathname} replace />;
    }
    return children;
}

export default ShouldBeLogged
