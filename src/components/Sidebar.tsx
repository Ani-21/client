import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Моя страница" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Новости" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Мессенджер" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Друзья" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <WbSunnyIcon />
            <Switch defaultChecked />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
