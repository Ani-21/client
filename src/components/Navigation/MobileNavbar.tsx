import { NavLink } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { menuItems } from "@/constants";

type MobileNavBarProps = {
  handleClick: VoidFunction;
};

export const MobileNavBar = ({ handleClick }: MobileNavBarProps) => (
  <Box
    sx={{
      position: "absolute",
      top: "40px",
      padding: "16px",
      backgroundColor: "#1E293B",
    }}
  >
    <List
      sx={{
        display: { xs: "block", sm: "none" },
      }}
    >
      {menuItems.map((item, i) => (
        <ListItem disablePadding key={i}>
          <ListItemButton>
            <NavLink
              to={item.path}
              style={{ textDecoration: "none", color: "grey" }}
              onClick={() => handleClick && handleClick()}
            >
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
