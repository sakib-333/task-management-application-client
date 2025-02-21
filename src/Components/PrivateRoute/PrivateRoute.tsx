import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({ children }: any) => {
  const { user, userLoading } = useAuth();
  if (userLoading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
