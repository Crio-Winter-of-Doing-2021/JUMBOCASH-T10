import * as api from "../api/index";
import { LOGIN, LOGOUT, POST_ENTITY, UPDATE_ENTITY } from "./actionConstants";

export const login = (id) => async (dispatch) => {
  try {
    const user = await api.login(id);
    const entity = await api.get_entities(id);
    dispatch({ type: LOGIN, user: user.data, entity: entity.data, id });
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

export const update_entity = (currentId, entityObj) => async (dispatch) => {
  try {
    const id = localStorage.logged_in_id;
    const { data } = await api.update_entity(currentId, entityObj, id);
    console.log(data);
    console.log(entityObj);
    dispatch({ type: UPDATE_ENTITY, currentId, entityObj });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
