import { createStore, createEvent } from "effector";

type AuthorizationStore = {
  loggedIn: boolean;
  userId: string;
};

export const setLoggedIn = createEvent<boolean>();
export const setLoggedOut = createEvent();
export const setUserId = createEvent<string>();

export const $authorization = createStore<AuthorizationStore>({
  loggedIn: false,
  userId: "",
})
  .on(setLoggedIn, (state, loggedIn: boolean) => ({
    ...state,
    loggedIn,
  }))
  .on(setLoggedOut, () => ({
    userId: "",
    loggedIn: false,
  }))
  .on(setUserId, (state, userId: string) => ({
    ...state,
    userId,
  }));
