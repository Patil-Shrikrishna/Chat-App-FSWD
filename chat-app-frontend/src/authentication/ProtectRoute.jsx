import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
