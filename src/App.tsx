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

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.welcomePageRoute} element={<Layout />}>
        {/* public */}
        <Route path="/welcome" element={<WelcomePage />} />

        {/* protected */}
        <Route
          path={AppRoutes.profilePageRoute}
          element={
            <GuardContainer>
              <ProfilePage />
            </GuardContainer>
          }
        >
          <Route path={AppRoutes.userPageRoute} element={<UserProfilePage />} />
          <Route path={AppRoutes.feedPageRoute} element={<FeedPage />} />
          <Route path={AppRoutes.friendsPageRoute} element={<FriendsPage />} />
          <Route
            path={AppRoutes.messengerPageRoute}
            element={<MessengerPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
