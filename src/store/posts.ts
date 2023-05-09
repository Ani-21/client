import { createStore, createEvent } from "effector";
import { IPost } from "@/models/IPost";

type PostsStore = {
  posts: IPost[];
  newPost: IPost;
};

export const setPosts = createEvent<IPost[]>();

export const $posts = createStore<PostsStore>({
  posts: [],
  newPost: {} as IPost,
}).on(setPosts, (state, posts) => ({
  ...state,
  posts,
}));
