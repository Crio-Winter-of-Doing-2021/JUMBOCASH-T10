import { LOGIN, LOGOUT, POST_TRANSACTION } from "../actions/actionConstants";

const initialState = {
  transaction: [],
  id: null,
  isLoggedIn: false,
};

export default function entity(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        transaction: action.transaction,
        id: action.id,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState;
    case POST_TRANSACTION:
      return {
        ...state,
        transaction: [action.transaction, ...state.transaction],
      };
    default:
      return state;
  }
}
