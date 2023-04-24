import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
    "Cache-Control": "no-cache",
  },
});
export { api };
