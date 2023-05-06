import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { menuItems } from "../constants";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          {menuItems.map((item, i) => (
            <ListItem disablePadding key={i}>
              <ListItemButton>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
