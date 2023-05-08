import { createStore, createEvent } from "effector";

import { IUser } from "@/models/IUser";
import { IPost } from "@/models/IPost";

type UserStore = {
  data: IUser;
  friends: IUser[];
  posts: IPost[];
};

// export const $user = createStore<UserStore>({
//     data:
//     friends:
//     posts:
// })
