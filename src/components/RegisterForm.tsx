import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@mui/material";
import Form from "../shared/Form";
import axios from "../api/axios";

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
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const request = await axios.post("/auth", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return await request.data;
    } catch (err) {
      throw new Error("Что-то пошло не так");
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
      <label>Город</label>
      <input
        {...register("city", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Город"
      />
      <p>{errors.city?.message}</p>
      <label>Университет</label>
      <input
        {...register("university", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Университет"
      />
      <p>{errors.university?.message}</p>
      <label>Возраст</label>
      <input
        type="number"
        {...register("age", {
          required: "Поле обязательно для заполнения",
        })}
        placeholder="Возраст"
      />
      <p>{errors.age?.message}</p>
      <label>Пароль</label>
      <input
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
      />
      <p>{errors.password?.message}</p>
      <label>Подтверждение пароля</label>
      <input
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
      />
      <p>{errors.confirm_password?.message}</p>
      <Button type="submit">Зарегистрироваться</Button>
    </Form>
  );
};

export default RegisterForm;
