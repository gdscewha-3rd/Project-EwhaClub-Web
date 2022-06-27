import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation, Outlet, Navigate } from "react-router-dom";

export const RequiredAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to="/likes" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
