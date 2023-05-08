import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "effector-react";
import { $authorization } from "@/store/authorization";
import { AppRoutes } from "@/constants";

const GuardContainer = () => {
  const store = useStore($authorization);

  return !store.loggedIn ? (
    <Navigate to={AppRoutes.welcomePageRoute} />
  ) : (
    <Outlet />
  );
};

export default GuardContainer;
