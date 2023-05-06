import { PersonCard } from "@/shared/cards/Person";

const FriendsPage = () => {
  return (
    <>
      <PersonCard
        username="Люба"
        location="Санкт-Петербург"
        university="СПбГАСу"
        isFriend={true}
      />
      <PersonCard
        username="random"
        location="Санкт-Петербург"
        university="СПбГАСу"
        isFriend={false}
      />
      <PersonCard
        username="Люба"
        location="Санкт-Петербург"
        university="СПбГАСу"
        isFriend={true}
      />
      <PersonCard
        username="Люба"
        location="Санкт-Петербург"
        university="СПбГАСу"
        isFriend={true}
      />
      <PersonCard
        username="Люба"
        location="Санкт-Петербург"
        university="СПбГАСу"
        isFriend={true}
      />
    </>
  );
};

export default FriendsPage;
