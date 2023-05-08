export enum AppRoutes {
  welcomePageRoute = "/",
  profilePageRoute = "/profile",
  userPageRoute = "/profile/user/:id",
  friendsPageRoute = "/profile/friends",
  usersPageRoute = "/profile/users",
}

export const menuItems = [
  { path: AppRoutes.userPageRoute, text: "Моя страница" },
  { path: AppRoutes.profilePageRoute, text: "Новости" },
  { path: AppRoutes.friendsPageRoute, text: "Друзья" },
];
