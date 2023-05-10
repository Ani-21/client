import { useStore } from "effector-react";
import { Box, Stack } from "@mui/material";

import Post from "@/components/Post";
import PostFrom from "@/components/PostForm";
import ProfileHeader from "@/components/ProfileHeader";

import useFetch from "@/hooks/useFetch";
import useTabTitle from "@/hooks/useTabTitle";

import { IUser } from "@/models/IUser";
import { $authorization } from "@/store/authorization";
import { $posts } from "@/store/posts";

const UserProfilePage = () => {
  useTabTitle("Моя страница");
  const authorization = useStore($authorization);
  const postsStore = useStore($posts);
  const { userId } = authorization;
  const { posts } = postsStore;
  const { data: userInfo, loading } = useFetch<IUser>(`/users/${userId}`);

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
        <PostFrom username={userInfo.username} />
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

export default UserProfilePage;
