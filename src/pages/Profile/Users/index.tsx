import { useNavigate } from "react-router-dom";

import { Stack, Link } from "@mui/material";

import useFetch from "@/hooks/useFetch";
import { IUser } from "@/models/IUser";
import { UserCard } from "@/shared/cards/User";
import { SkeletonPost } from "@/shared/skeletons/Post";

const UsersPage = () => {
  const { data: users, loading } = useFetch<IUser[]>("/users");
  const navigate = useNavigate();

  if (loading || users === undefined) return <SkeletonPost />;

  return (
    <Stack>
      {users.map((user) => (
        <Link
          key={user._id}
          underline="none"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/profile/users/${user._id}`, { replace: true })
          }
        >
          <UserCard
            id={user._id}
            username={user.username}
            university={user.university}
            isFriend={false}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default UsersPage;
