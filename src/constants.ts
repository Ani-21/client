export enum AppRoutes {
  welcomePageRoute = "/",
  profilePageRoute = "/profile",
  userPageRoute = "/profile/user",
  feedPageRoute = "/profile/feed",
  friendsPageRoute = "/profile/friends",
  messengerPageRoute = "/profile/messenger",
}

export const menuItems = [
  { path: AppRoutes.userPageRoute, text: "Моя страница" },
  { path: AppRoutes.feedPageRoute, text: "Новости" },
  { path: AppRoutes.friendsPageRoute, text: "Друзья" },
  { path: AppRoutes.messengerPageRoute, text: "Мессенджер" },
];
