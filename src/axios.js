import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-clone-8e1fa.cloudfunctions.net/api",
  // "http://127.0.0.1:5001/clone-8e1fa/us-central1/api",
});

export default instance;
