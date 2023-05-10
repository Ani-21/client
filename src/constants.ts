export enum AppRoutes {
  welcomePageRoute = "/",
  profilePageRoute = "/profile",
  userProfilePageRoute = "/profile/user",
  friendsPageRoute = "/profile/friends",
  usersPageRoute = "/profile/users",
  userPageRoute = "/profile/users/:id",
}

export const menuItems = [
  { path: AppRoutes.userProfilePageRoute, text: "Моя страница" },
  { path: AppRoutes.profilePageRoute, text: "Новости" },
  { path: AppRoutes.friendsPageRoute, text: "Друзья" },
  { path: AppRoutes.usersPageRoute, text: "Пользователи" },
];
