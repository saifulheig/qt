import { Navigate, useLocation } from "react-router-dom";
import useLoggedInUser from "../hooks/useLoggedInUser";
import PropTypes from "prop-types";
import { useCookie } from "../hooks/useCookie";
import { Loader } from "lucide-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useLoggedInUser();
  const { getCookie } = useCookie({ key: "Token", days: 7 });
  const token = getCookie();
  const location = useLocation();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55vh",
        }}
      >
        {/* <progress className="progress w-3/4"></progress> */}
        <div className="flex items-center gap-2">Loading... <Loader className="animate-spin" /></div>
      </div>
    );
  }

  if (user && token) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
