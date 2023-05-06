import { useLocation, Navigate } from "react-router-dom";
import { useStore } from "effector-react";
import { $authorization } from "../store/authorization";

const GuardContainer = () => {
  const store = useStore($authorization);
  const location = useLocation();

  return store.loggedIn ? (
    <Navigate to="/profile" state={{ from: location }} replace={true} />
  ) : (
    <Navigate to="/welcome" state={{ from: location }} replace />
  );
};

export default GuardContainer;
