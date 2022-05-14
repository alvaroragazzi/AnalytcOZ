import axios from "axios";

const api = axios.create({
    baseURL: "https://analytcoz-backend.herokuapp.com",
    withCredentials: true
});
  
export default api;