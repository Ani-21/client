import { useStore } from "effector-react";
import { memo } from "react";

import { AppBar, styled, Toolbar, Typography, Button } from "@mui/material";
import { Phonelink, Logout } from "@mui/icons-material/";

import { $authorization, setLoggedOut } from "@/store/authorization";
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
  const store = useStore($authorization);
  const navigate = useNavigate();

  const handleLogout = () => {
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
        {store.loggedIn ? (
          <Button onClick={() => handleLogout()}>
            <Logout />
          </Button>
        ) : null}
      </StyledToolbar>
    </AppBar>
  );
});

export default Navbar;
