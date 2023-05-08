import { useState, memo } from "react";

import {
  Box,
  AppBar,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import { Phonelink, Face } from "@mui/icons-material/";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
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
          <Face onClick={() => setOpen(true)} />
        </Box>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Настройки</MenuItem>
        <MenuItem>Моя страницы</MenuItem>
        <MenuItem>Выйти</MenuItem>
      </Menu>
    </AppBar>
  );
});

export default Navbar;
