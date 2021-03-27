import {
  POST_ENTITY,
  LOGIN,
  LOGOUT,
  UPDATE_ENTITY,
} from "../actions/actionConstants";

const initialState = {
  entity: [],
  id: null,
  isLoggedIn: false,
};

export default function entity(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        entity: action.entity,
        id: action.id,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState;

    case POST_ENTITY:
      return { ...state, entity: [action.entity, ...state.entity] };

    case UPDATE_ENTITY:
      const updated_entity = state.entity.map((entity) =>
        entity._id === action.currentId
          ? {
              ...entity,
              username: action.entityObj.entity_name,
              userType: action.entityObj.entity_type,
              address: action.entityObj.address,
              mobile: action.entityObj.phone_no,
            }
          : entity
      );
      return { ...state, entity: updated_entity };

    default:
      return state;
  }
}
