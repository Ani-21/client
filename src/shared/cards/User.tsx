import { Box, Stack, Avatar, Typography } from "@mui/material";
import { Place, School } from "@mui/icons-material";

export type UserCardProps = {
  username: string;
  location: string;
  university: string;
  children?: React.ReactNode;
};

export const UserCard = ({
  username,
  location,
  university,
  children,
}: UserCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar alt={username} src="" sx={{ width: 56, height: 56 }} />
      <Stack sx={{ padding: "10px" }}>
        <Box>
          <Typography variant="h5">{username}</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mr: "5px" }}>
              <Place />
            </Box>
            <Typography sx={{ mr: "10px" }}>{location}</Typography>
            <Box sx={{ marginRight: "5px" }}>
              <School />
            </Box>
            <Typography sx={{ mr: "10px" }}>{university}</Typography>
          </Box>
        </Box>
      </Stack>
      {children}
    </Box>
  );
};
