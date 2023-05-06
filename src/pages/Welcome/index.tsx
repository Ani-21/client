import { useState } from "react";
import { useStore } from "effector-react";

import { Stack, Box, Tabs, Tab } from "@mui/material";

import { $authorization } from "@/store/authorization";

import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

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
  const store = useStore($authorization);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
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
