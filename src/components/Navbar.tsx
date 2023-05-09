import { memo } from "react";

import { AppBar, styled, Toolbar, Typography, Button } from "@mui/material";
import { Phonelink, Logout } from "@mui/icons-material/";

import { setLoggedOut } from "@/store/authorization";
import { theme } from "@/theme";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "@/constants";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.dark,
  borderBottom: "1px",
});

const Navbar = memo(() => {
  const navigate = useNavigate();

  const hadnleLogout = () => {
    setLoggedOut();
    navigate(AppRoutes.welcomePageRoute, { replace: true });
  };
  return (
    <AppBar position="sticky" elevation={0}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
            color: theme.palette.primary.contrastText,
          }}
        >
          on.CONNECT
        </Typography>
        <Phonelink
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Button onClick={() => hadnleLogout()}>
          <Logout />
        </Button>
      </StyledToolbar>
    </AppBar>
  );
});

export default Navbar;
