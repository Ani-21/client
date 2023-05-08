import { Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Typography variant="h6">Онлайн</Typography>
    </Box>
  );
};

export default Rightbar;
