import { createStore, createEvent } from "effector";

type AuthorizationStore = {
  loggedIn: boolean;
  userId: string;
  token: string;
};

export const setLoggedIn = createEvent<boolean>();
export const setLoggedOut = createEvent();
export const setUserId = createEvent<string>();
export const setToken = createEvent<string>();

export const $authorization = createStore<AuthorizationStore>({
  loggedIn: false,
  userId: "",
  token: "",
})
  .on(setLoggedIn, (state, loggedIn: boolean) => ({
    ...state,
    loggedIn,
  }))
  .on(setToken, (state, token: string) => ({
    ...state,
    token,
  }))
  .on(setLoggedOut, () => ({
    userId: "",
    loggedIn: false,
    token: "",
  }))
  .on(setUserId, (state, userId: string) => ({
    ...state,
    userId,
  }));
