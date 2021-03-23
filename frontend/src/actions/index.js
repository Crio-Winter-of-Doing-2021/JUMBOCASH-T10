import * as api from "../api/index";
import { LOGIN, LOGOUT, POST_ENTITY } from "./actionConstants";

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

export const post_entity = (entityObj) => async (dispatch) => {
  try {
    const id = localStorage.logged_in_id;
    const { data } = await api.post_entity(entityObj, id);
    console.log(data);
    dispatch({ type: POST_ENTITY, entity: data });
  } catch (error) {
    console.log(error);
  }
};
