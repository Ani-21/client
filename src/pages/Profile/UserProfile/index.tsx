import { useStore } from "effector-react";
import { Box, Stack } from "@mui/material";

import Post from "@/components/Post";
import PostFrom from "@/components/PostForm";
import ProfileHeader from "@/components/ProfileHeader";

import { $posts } from "@/store/posts";

const UserProfilePage = () => {
  const posts = useStore($posts);
  const filteredPosts = posts.posts.filter((post) => post.username === "Ani");
  return (
    <Stack gap={2}>
      <Box sx={{ mx: "auto" }}>
        <ProfileHeader username="ani" location="russia" university="msu" />
        <PostFrom />
      </Box>
      <Stack>
        {filteredPosts.map((post) => (
          <Post
            key={post.text}
            username={post.username}
            text={post.text}
            timestamp={post.timestamp}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default UserProfilePage;
