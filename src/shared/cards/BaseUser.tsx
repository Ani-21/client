import { Box, Avatar } from "@mui/material";

export type BaseCardProps = {
  username: string;
  children?: React.ReactNode;
};

export const BaseUserCard = ({ username, children }: BaseCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Avatar alt={username} sx={{ width: 56, height: 56 }} />
        {children}
      </Box>
    </Box>
  );
};
