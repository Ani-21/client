import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { Box, Stack } from "@mui/material";

import axios from "@/api/axios";
import Post from "@/components/Post";

import { $posts, setPosts } from "@/store/posts";
import { SkeletonPost } from "@/shared/SkeletonPost";

const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const posts = useStore($posts);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const request = await axios("/posts");
      const response = await request.data;
      setPosts(response);
    } catch (err) {
      setIsError(true);
      throw new Error("Что-то пошло не так");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const skeletons = Array(3)
    .fill("")
    .map((_, i) => <SkeletonPost key={i} />);

  return (
    <Box>
      <Stack>
        {isLoading && skeletons}
        {[...posts.posts].reverse().map((post) => (
          <Post
            username={post.username}
            text={post.text}
            timestamp={post.timestamp}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default FeedPage;
