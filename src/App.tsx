import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import ProfilePage from "./pages/Profile";
import WelcomePage from "./pages/Welcome/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/welcome" element={<WelcomePage />} />

        {/* protected */}
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
