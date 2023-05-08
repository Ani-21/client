import { useForm, SubmitHandler } from "react-hook-form";

import { Button } from "@mui/material";

import axios from "@/api/axios";
import Form from "@/shared/Form";
import { setLoggedIn } from "@/store/authorization";

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const request = await axios.post("/auth", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      await request.data;
      setLoggedIn(true);
    } catch (err) {
      setLoggedIn(false);
      throw new Error("Что-то пошло не так");
    }
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      width="300px"
      height="400px"
    >
      <label>Логин</label>
      <input
        {...register("username", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Логин"
      />
      <p>{errors.username?.message}</p>
      <label>Пароль</label>
      <input
        {...register("password", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Пароль"
      />
      <p>{errors.password?.message}</p>
      <Button type="submit">Войти</Button>
    </Form>
  );
};

export default LoginForm;
