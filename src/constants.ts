export enum AppRoutes {
  welcomePageRoute = "/",
  profilePageRoute = "/profile",
  userPageRoute = "/profile/user",
  friendsPageRoute = "/profile/friends",
  messengerPageRoute = "/profile/messenger",
}

export const menuItems = [
  { path: AppRoutes.userPageRoute, text: "Моя страница" },
  { path: AppRoutes.profilePageRoute, text: "Новости" },
  { path: AppRoutes.friendsPageRoute, text: "Друзья" },
  { path: AppRoutes.messengerPageRoute, text: "Мессенджер" },
];
