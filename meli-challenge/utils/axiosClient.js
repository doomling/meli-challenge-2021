import axios from "axios";

const baseURL = "http://localhost:3001/api";

const client = axios.create({
  baseURL,
});

export default client;
