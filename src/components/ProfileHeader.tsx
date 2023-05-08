import { Box, Stack, Typography } from "@mui/material";
import { Place, School } from "@mui/icons-material";
import { BaseUserCard } from "@/shared/cards/BaseUser";

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
    <BaseUserCard username={username}>
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
    </BaseUserCard>
  );
};

export default ProfileHeader;
