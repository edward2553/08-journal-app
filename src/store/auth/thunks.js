// son acciones con las cuales yo puedo hacer dispatch, pero estas acciones tienen una tarea asincrona

import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlices";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));

  };
};
