import * as api from "../api/index";
import { LOGIN, LOGOUT } from "./actionConstants";

export const login = (id) => async (dispatch) => {
  try {
    const user = await api.login(id);
    dispatch({ type: LOGIN, user: user.data, id });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  return { type: LOGOUT };
};
