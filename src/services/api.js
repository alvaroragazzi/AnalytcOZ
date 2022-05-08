import axios from "axios";

const api = axios.create({
    baseURL: "https://analytcoz-backend.herokuapp.com/",
});
  
export default api;