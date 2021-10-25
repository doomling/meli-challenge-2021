import axios from "axios";

const client = axios.create({
  baseURL: "https://api.mercadolibre.com/",
});

export default client;
