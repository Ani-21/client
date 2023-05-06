import Navbar from "@/components/Navbar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack sx={{ minHeight: "100vh", overflowY: "overlay" }}>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default Layout;
