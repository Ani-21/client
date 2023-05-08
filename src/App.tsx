import { Routes, Route } from "react-router-dom";
import GuardContainer from "./components/GuardContainer";
import Layout from "./layout/Layout";
import FriendsPage from "./pages/Profile/Friends";
import MessengerPage from "./pages/Profile/Messenger";
import ProfilePage from "./pages/Profile";
import WelcomePage from "./pages/Welcome/index";
import { AppRoutes } from "./constants";
import FeedPage from "./pages/Profile/Feed";
import UserProfilePage from "./pages/Profile/UserProfile";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.welcomePageRoute} element={<Layout />}>
        <Route path="/" element={<WelcomePage />} />
      </Route>
      {/* public */}

      {/* protected */}
      <Route element={<AuthLayout />}>
        <Route element={<GuardContainer />}>
          <Route path={AppRoutes.profilePageRoute} element={<ProfilePage />}>
            <Route index element={<FeedPage />} />
            <Route
              path={AppRoutes.userPageRoute}
              element={<UserProfilePage />}
            />
            <Route
              path={AppRoutes.friendsPageRoute}
              element={<FriendsPage />}
            />
            <Route
              path={AppRoutes.messengerPageRoute}
              element={<MessengerPage />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
