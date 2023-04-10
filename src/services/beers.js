import http from "./base-api";

const list = () => http.get("/beers").then((res) => res.data);

export default {
  list,
};
