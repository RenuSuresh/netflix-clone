import axios from "axios";

// to make req to the moview db
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
