import axios from "axios";

const baseURL = "http://160.119.254.236:5085/api/v1";
 
const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

export default Axios;
