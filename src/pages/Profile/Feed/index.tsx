import { Box, Stack } from "@mui/material";

import Post from "@/components/Post";

import { SkeletonPost } from "@/shared/SkeletonPost";
import useFetch from "@/hooks/useFetch";
import { IPost } from "@/models/IPost";

const FeedPage = () => {
  const { data: posts, loading } = useFetch<IPost[]>("/posts");

  if (posts === undefined) return <p>Нет постов</p>;

  const skeletons = Array(3)
    .fill("")
    .map((_, i) => <SkeletonPost key={i} />);

  return (
    <Box>
      <Stack>
        {loading && skeletons}
        {[...posts]?.reverse().map((post) => (
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
