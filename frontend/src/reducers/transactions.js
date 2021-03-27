import {
  LOGIN,
  LOGOUT,
  POST_TRANSACTION,
  UPDATE_TRANSACTION,
} from "../actions/actionConstants";

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

    case POST_TRANSACTION:
      return {
        ...state,
        transaction: [action.transaction, ...state.transaction],
      };
    case UPDATE_TRANSACTION:
      const updated_transaction = state.transaction.map((transaction) =>
        transaction._id === action.currentId
          ? {
              ...transaction,
              transactionType: action.transactionObj.transaction_type,
              amount: action.transactionObj.amount,
              paymentMode: action.transactionObj.transaction_mode,
              remarks: action.transactionObj.transaction_remark,
            }
          : transaction
      );
      return { ...state, transaction: updated_transaction };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
