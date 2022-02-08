import axios from "axios";

export default axios.create({
  baseURL: "https://to-dos-app-api.herokuapp.com",
});
