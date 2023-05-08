import { memo } from "react";

import { Box, AppBar, styled, Toolbar, Typography } from "@mui/material";

import { Phonelink, Face, Logout } from "@mui/icons-material/";
import { theme } from "@/theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.dark,
  borderBottom: "1px",
});

const Navbar = memo(() => {
  return (
    <AppBar position="sticky" elevation={0}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          on.CONNECT
        </Typography>
        <Phonelink
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Box display="flex">
          <Face />
          <Logout />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
});

export default Navbar;
