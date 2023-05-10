import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";

import useFetch from "@/hooks/useFetch";
import { IFriend } from "@/models/IFriend";
import { UserCard } from "@/shared/cards/User";
import { SkeletonPost } from "@/shared/skeletons/Post";
import { $authorization } from "@/store/authorization";
import { Stack, Link } from "@mui/material";
import useTabTitle from "@/hooks/useTabTitle";

const FriendsPage = () => {
  useTabTitle("Друзья");
  const navigate = useNavigate();
  const authorization = useStore($authorization);
  const { userId } = authorization;
  const { data: friends, loading } = useFetch<IFriend[]>(
    `/users/${userId}/friends`
  );

  if (loading || friends === undefined) return <SkeletonPost />;

  return (
    <Stack>
      {friends?.map((friend) => (
        <Link
          key={friend._id}
          underline="none"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/profile/users/${friend._id}`, { replace: true })
          }
        >
          <UserCard
            id={friend._id}
            username={friend.username}
            university={friend.university}
            isFriend={true}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default FriendsPage;
