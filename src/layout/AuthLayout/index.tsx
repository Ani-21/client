import Navbar from "@/components/Navbar";
import { theme } from "@/theme";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        overflowY: "overlay",
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default AuthLayout;
