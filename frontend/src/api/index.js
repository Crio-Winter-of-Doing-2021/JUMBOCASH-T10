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
