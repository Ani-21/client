import { createStore, createEvent } from "effector";

type AuthorizationStore = {
  loggedIn: boolean;
};

export const setLoggedIn = createEvent<boolean>();

export const $authorization = createStore<AuthorizationStore>({
  loggedIn: false,
}).on(setLoggedIn, (state, log: boolean) => ({
  ...state,
  loggedIn: log,
}));
