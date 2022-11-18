// son acciones con las cuales yo puedo hacer dispatch, pero estas acciones tienen una tarea asincrona

import { checkingCredentials } from "./authSlices";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};
