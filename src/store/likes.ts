import axios from "@/api/axios";
import { createEffect } from "effector";

export const handleLike = createEffect(async (id: string) => {
  const request = await axios.patch(`/posts/${id}/likePost`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await request.data;
});
