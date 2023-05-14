import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Typography } from "@mui/material";
import Form from "../../shared/Form";
import axios from "../../api/axios";

import { IToken } from "@/models/IToken";
import { setLoggedIn, setToken, setUserId } from "@/store/authorization";

type FormValues = {
  username: string;
  city: string;
  university: string;
  age: number;
  password: string;
  confirm_password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const request = await axios.post("/register", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const response: IToken = await request.data;
      console.log(response);
      setToken(response.accessToken);
      setUserId(response.userId);
      setLoggedIn(true);
    } catch (err) {
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
      <Typography>Логин</Typography>
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
      <Typography>Город</Typography>
      <Input
        {...register("city", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Город"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.city?.message}</Typography>
      <Typography>Университет</Typography>
      <Input
        {...register("university", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Университет"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.university?.message}</Typography>
      <Typography>Возраст</Typography>
      <Input
        type="number"
        {...register("age", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Возраст"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.age?.message}</Typography>
      <Typography>Пароль</Typography>
      <Input
        type="password"
        {...register("password", {
          required: "Поле обязательно для заполнения",
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
            message:
              "Пароль должен состоять из 8 знаков, заглавной буквы, цифр, разничных символов",
          },
        })}
        placeholder="Пароль"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.password?.message}</Typography>
      <Typography>Подтверждение пароля</Typography>
      <Input
        type="password"
        {...register("confirm_password", {
          required: true,
          validate: (val: string) => {
            if (watch("password") != val) {
              return "Пароли не совпадают";
            }
          },
        })}
        placeholder="Повторите пароль"
        sx={{
          color: "white",
        }}
      />
      <Typography>{errors.confirm_password?.message}</Typography>
      <Button type="submit">Зарегистрироваться</Button>
    </Form>
  );
};

export default RegisterForm;
