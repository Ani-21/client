import { Button, CardHeader } from "@mui/material";
import { BaseUserCard } from "./BaseUser";
import { DeleteOutline, Add } from "@mui/icons-material";

export type UserCardProps = {
  username: string;
  university: string;
  isFriend: boolean;
  children?: React.ReactNode;
};

export const UserCard = ({
  username,
  university,
  isFriend,
  children,
}: UserCardProps) => {
  return (
    <BaseUserCard username={username}>
      <CardHeader title={username} subheader={university} />
      {children}
      <Button>{isFriend ? <DeleteOutline /> : <Add />}</Button>
    </BaseUserCard>
  );
};
