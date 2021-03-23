import { POST_ENTITY, LOGIN, LOGOUT } from "../actions/actionConstants";

const initialState = {
  entity: [],
  id: null,
  isLoggedIn: false,
};

export default function entity(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id: action.id,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState;

    case POST_ENTITY:
      console.log("reducer", action.entity);
      return { ...state, entity: [action.entity, ...state.entity] };

    default:
      return state;
  }
}
