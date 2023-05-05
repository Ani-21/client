import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../shared/Form";
import axios from "../api/axios";

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
      return await request.data;
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
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
