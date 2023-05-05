import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <Stack sx={{ minHeight: "100vh", overflowY: "overlay" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Stack>
  );
};

export default Layout;
