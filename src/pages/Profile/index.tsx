import Rightbar from "@/components/Rightbar";
import Sidebar from "@/components/Sidebar";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProfilePage = () => (
  <Box>
    <Stack direction="row" justifyContent="space-between">
      <Sidebar />
      <Box flex={4} p={2} m={2}>
        <Outlet />
      </Box>
      <Rightbar />
    </Stack>
  </Box>
);

export default ProfilePage;
