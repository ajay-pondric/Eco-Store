import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return(
    <div className="private-route">
       {
        isAuthenticated ? <Outlet /> :  <Navigate to="/signUp" />
       }
    </div>
  );
};

export default PrivateRoute;
