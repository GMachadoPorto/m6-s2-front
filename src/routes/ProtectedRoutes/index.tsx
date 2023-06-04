import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../../hooks";

function ProtectedRoutes() {
  const { user, loadingToken } = useUser();
  const location = useLocation();

  if (loadingToken) {
    return null;
  }

  return Object.keys(user).length !== 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}

export default ProtectedRoutes;
