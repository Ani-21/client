import { Box, Stack } from "@mui/material";
import { UseFormHandleSubmit, SubmitHandler } from "react-hook-form";

type FormProps = {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode[];
  width: string;
  height: string;
};

const Form = ({
  handleSubmit,
  onSubmit,
  children,
  width,
  height,
}: FormProps) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack width={width} height={height}>
          {children}
        </Stack>
      </form>
    </Box>
  );
};

export default Form;
