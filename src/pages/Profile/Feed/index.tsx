import { Stack } from "@mui/material";

import Post from "@/components/Post";

import { SkeletonPost } from "@/shared/SkeletonPost";
import useFetch from "@/hooks/useFetch";
import { IPost } from "@/models/IPost";
import { setPosts } from "@/store/posts";

const FeedPage = () => {
  const { data: posts, loading } = useFetch<IPost[]>("/posts");

  const skeletons = Array(3)
    .fill("")
    .map((_, i) => <SkeletonPost key={i} />);

  if (loading || posts === undefined) return <Stack>{skeletons}</Stack>;
  setPosts(posts);

  return (
    <Stack>
      {[...posts]?.reverse().map((post) => {
        return (
          <Post
            key={post._id}
            id={post._id}
            username={post.username}
            text={post.text}
            timestamp={post.timestamp}
            selectedFile={post.selectedFile}
            likeCount={Number(post.likeCount)}
          />
        );
      })}
    </Stack>
  );
};

export default FeedPage;
