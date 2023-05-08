import { UserCard } from "@/shared/cards/User";

const FriendsPage = () => {
  return (
    <>
      <UserCard username="Люба" university="СПбГАСу" isFriend={true} />
      <UserCard username="random" university="СПбГАСу" isFriend={false} />
      <UserCard username="Люба" university="СПбГАСу" isFriend={true} />
      <UserCard username="Люба" university="СПбГАСу" isFriend={true} />
      <UserCard username="Люба" university="СПбГАСу" isFriend={true} />
    </>
  );
};

export default FriendsPage;
