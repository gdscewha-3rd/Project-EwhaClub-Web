import useAuth from "../hooks/useAuth";
import { useLocation, Outlet, Navigate } from "react-router-dom";

export const RequiredAuth = () => {
  const location = useLocation();
  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
