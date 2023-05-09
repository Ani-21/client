import { useParams } from "react-router-dom";
import { useStore } from "effector-react";
import { Box, Stack } from "@mui/material";

import Post from "@/components/Post";
import ProfileHeader from "@/components/ProfileHeader";

import useFetch from "@/hooks/useFetch";
import { IUser } from "@/models/IUser";
import { $posts } from "@/store/posts";

const UserPage = () => {
  const { id } = useParams();
  const postsStore = useStore($posts);
  const { posts } = postsStore;
  const { data: userInfo, loading } = useFetch<IUser>(`/users/${id}`);

  if (loading || userInfo === undefined) return <p>Загружаем</p>;

  const userPosts = posts.filter((post) => post.username === userInfo.username);

  return (
    <Stack gap={2}>
      <Box sx={{ mx: "auto" }}>
        <ProfileHeader
          username={userInfo.username}
          location={userInfo.city}
          university={userInfo.university}
        />
      </Box>
      <Stack>
        {[...userPosts].reverse().map((post) => (
          <Post
            key={post._id}
            id={post._id}
            username={post.username}
            text={post.text}
            timestamp={post.timestamp}
            likeCount={post.likeCount}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default UserPage;
