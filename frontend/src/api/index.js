import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.token != null) {
    req.headers.authorization = `Bearer ${localStorage.token}`;
  }
  return req;
});

export const login = () => API.get("/auth/user");

export const post_entity = (entityObj, id) =>
  API.post("/entity", {
    username: entityObj.entity_name,
    userType: entityObj.entity_type,
    hostId: id,
    address: entityObj.address,
    mobile: entityObj.phone_no,
  });

export const get_entities = () => API.get("/entity");

export const update_entity = (currentId, entityObj, id) =>
  API.patch(`/entity/${currentId}`, {
    username: entityObj.entity_name,
    userType: entityObj.entity_type,
    hostId: id,
    address: entityObj.address,
    mobile: entityObj.phone_no,
  });

export const get_entityList = () =>
  fetch(`http://localhost:8000/entity/entityList/`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.token}`,
    },
  }).then((data) => data.json());

export const post_transaction = (transactionObj, id) =>
  API.post(`/transaction`, {
    transactionType: transactionObj.transaction_type,
    entityId: transactionObj.entity_id,
    amount: transactionObj.amount,
    hostId: id,
    paymentMode: transactionObj.transaction_mode,
    remarks: transactionObj.transaction_remark,
  });

export const get_transactions = () => API.get(`/transaction`);

export const update_transaction = (currentId, transactionObj, id) =>
  API.patch(`/transaction/${currentId}`, {
    transactionType: transactionObj.transaction_type,
    entityId: transactionObj.entity_id,
    amount: transactionObj.amount,
    hostId: id,
    paymentMode: transactionObj.transaction_mode,
    remarks: transactionObj.transaction_remark,
  });

export const get_balance = () =>
  fetch(`http://localhost:8000/transaction/balance/`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.token}`,
    },
  }).then((data) => data.json());
