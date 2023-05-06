import Post from "@/components/Post";
import PostFrom from "@/components/PostForm";
import ProfileHeader from "@/components/ProfileHeader";

import { Box, Stack, Paper, Button, TextareaAutosize } from "@mui/material";

const UserProfilePage = () => {
  return (
    <Stack>
      <Box sx={{ justifyContent: "center" }}>
        <ProfileHeader username="ani" location="russia" university="msu" />
        <PostFrom />
      </Box>
      <Post />
    </Stack>
  );
};

export default UserProfilePage;
