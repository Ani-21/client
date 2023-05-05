import Rightbar from "../../components/Rightbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import { Box, Stack } from "@mui/material";

const ProfilePage = () => (
  <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  </Box>
);

export default ProfilePage;
