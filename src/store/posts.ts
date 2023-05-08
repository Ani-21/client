import { createStore, createEvent, createEffect } from "effector";
import { IPost } from "@/models/IPost";
import axios from "@/api/axios";

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
