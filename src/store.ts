import { createEvent, createStore } from "effector";

export const register = createEvent();

export const login = createEvent();

export const logout = createEvent();

type AuthStore = {
  token: string;
  isAuth: boolean;
};

const authStore = createStore<AuthStore>({
  token: "",
  isAuth: false,
});
