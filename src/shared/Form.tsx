import { Box, Stack } from "@mui/material";
import { UseFormHandleSubmit, SubmitHandler } from "react-hook-form";

type FormProps = {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode[];
};

const Form = ({ handleSubmit, onSubmit, children }: FormProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ width: "300px", height: "400px" }}>{children}</Stack>
      </form>
    </Box>
  );
};

export default Form;
