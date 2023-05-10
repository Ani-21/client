import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";

import { Stack, Box, Tabs, Tab } from "@mui/material";

import { $authorization } from "@/store/authorization";

import useTabTitle from "@/hooks/useTabTitle";

import RegisterForm from "@/components/Auth/RegisterForm";
import LoginForm from "@/components/Auth/LoginForm";

import { AppRoutes } from "@/constants";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const WelcomePage = () => {
  useTabTitle("Авторизация");
  const store = useStore($authorization);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.loggedIn) {
      navigate(AppRoutes.profilePageRoute, { replace: true });
    }
  }, [navigate, store.loggedIn]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack justifyContent="center" width="100%">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Вход" />
          <Tab label="Регисрация" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <LoginForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RegisterForm />
      </TabPanel>
    </Stack>
  );
};

export default WelcomePage;
