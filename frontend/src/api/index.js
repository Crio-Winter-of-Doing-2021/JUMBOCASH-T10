import axios from "axios";

// const url = "http://localhost:8000/auth/user";

export const login = (id) =>
  axios.get("http://localhost:8000/auth/user", {
    params: {
      id,
    },
  });

export const post_entity = (entityObj, id) =>
  axios.post("http://localhost:8000/entity", {
    username: entityObj.entity_name,
    userType: entityObj.entity_type,
    hostId: id,
    address: entityObj.address,
    mobile: entityObj.phone_no,
  });

export const get_entities = (id) =>
  axios.get(`http://localhost:8000/entity/${id}`);

export const update_entity = (currentId, entityObj, id) =>
  axios.patch(`http://localhost:8000/entity/${currentId}`, {
    username: entityObj.entity_name,
    userType: entityObj.entity_type,
    hostId: id,
    address: entityObj.address,
    mobile: entityObj.phone_no,
  });

export const get_entityList = (id) =>
  fetch(`http://localhost:8000/entityList/${id}`).then((data) => data.json());

export const post_transaction = (transactionObj, id) =>
  axios.post("http://localhost:8000/transaction", {
    transactionType: transactionObj.transaction_type,
    entityId: transactionObj.entity_id,
    amount: transactionObj.amount,
    hostId: id,
    paymentMode: transactionObj.transaction_mode,
    remarks: transactionObj.transaction_remark,
  });

export const get_transactions = (id) =>
  axios.get(`http://localhost:8000/transaction/${id}`);
