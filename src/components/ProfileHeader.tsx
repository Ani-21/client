import { Box, Stack, Avatar, Typography } from "@mui/material";
import { Place, School } from "@mui/icons-material";

type ProfileHeaderProps = {
  username: string;
  location: string;
  university: string;
};

const ProfileHeader = ({
  username,
  location,
  university,
}: ProfileHeaderProps) => {
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
    </Box>
  );
};

export default ProfileHeader;
