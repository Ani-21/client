import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input, Typography } from "@mui/material";

import axios from "@/api/axios";
import Form from "@/shared/Form";
import { IToken } from "@/models/IToken";
import { setLoggedIn, setToken, setUserId } from "@/store/authorization";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const request = await axios.post("/auth", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const response: IToken = await request.data;
      setToken(response.accessToken);
      setUserId(response.userId);
      setLoggedIn(true);
    } catch (err) {
      setLoggedIn(false);
      setUserId("");
      throw new Error("Что-то пошло не так");
    } finally {
      reset();
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      width="300px"
      height="400px"
    >
      <Typography>Имя пользователя</Typography>
      <Input
        {...register("username", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Логин"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.username?.message}</Typography>
      <Typography>Пароль</Typography>
      <Input
        {...register("password", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Пароль"
        type="password"
        sx={{
          color: "white",
        }}
      />

      <Typography>{errors.password?.message}</Typography>
      <Button type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;
