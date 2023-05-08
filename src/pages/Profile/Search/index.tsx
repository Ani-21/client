import { UserCard } from "@/shared/cards/User";
import { Stack } from "@mui/material";

import { IUser } from "@/models/IUser";
import useFetch from "@/hooks/useFetch";
import { Link } from "react-router-dom";

interface IUserProps extends IUser {
  isFriend: false;
}

const SearchPage = () => {
  const { data: users } = useFetch<IUserProps[]>("/users");

  return (
    <Stack>
      {users?.map((user) => (
        <Link to={user.username}>
          <UserCard
            username={user.username}
            university={user.university}
            isFriend={user.isFriend}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default SearchPage;
