import { Box, Container, Typography } from "@mui/material";
import { theme } from "../../theme";

const Header = () => {
  return (
    <Box
      sx={{
        padding: "10px",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Container>
        <Typography>Welcome</Typography>
      </Container>
    </Box>
  );
};

export default Header;
