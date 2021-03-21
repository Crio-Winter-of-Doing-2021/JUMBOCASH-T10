import { LOGIN, LOGOUT } from "../actions/actionConstants";

const initialState = {
  user: {},
  id: null,
  isLoggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log(action.user);
      return {
        user: action.user,
        id: action.id,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
