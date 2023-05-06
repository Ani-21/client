import { Button } from "@mui/material";
import { UserCard, UserCardProps } from "./User";
import { DeleteOutline, Add } from "@mui/icons-material";

type PersonProps = UserCardProps & {
  isFriend: boolean;
};

export const PersonCard = ({
  username,
  location,
  university,
  isFriend,
  children,
}: PersonProps) => {
  return (
    <UserCard username={username} location={location} university={university}>
      <Button>{isFriend ? <DeleteOutline /> : <Add/>}</Button>
    </UserCard>
  );
};
PersonCard;
