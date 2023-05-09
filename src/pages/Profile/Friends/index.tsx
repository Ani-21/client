import useFetch from "@/hooks/useFetch";
import { IFriend } from "@/models/IFriend";
import { UserCard } from "@/shared/cards/User";
import { $authorization } from "@/store/authorization";
import { Stack } from "@mui/material";
import { useStore } from "effector-react";
import { Link } from "react-router-dom";

const FriendsPage = () => {
  const authorization = useStore($authorization);
  const { userId } = authorization;
  const { data: friends, loading } = useFetch<IFriend[]>(
    `/users/${userId}/friends`
  );

  if (loading || friends === undefined) return <p>Загружаем</p>;

  return (
    <Stack>
      {friends?.map((friend) => (
        <Link to={friend._id}>
          <UserCard
            key={friend._id}
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
