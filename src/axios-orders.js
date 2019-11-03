import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-react-dee76.firebaseio.com/",
});

export default instance;
