import Navbar from "@/components/Navigation/Navbar";
import { theme } from "@/theme";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        overflowY: "overlay",
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default Layout;
