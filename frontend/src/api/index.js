import axios from "axios";

// const url = "http://localhost:8000/auth/user";

export const login = (id) =>
  axios.get("http://localhost:8000/auth/user", {
    params: {
      id,
    },
  });
