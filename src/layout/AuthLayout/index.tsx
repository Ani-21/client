import Navbar from "@/components/Navbar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack sx={{ minHeight: "100vh", overflowY: "overlay" }}>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
