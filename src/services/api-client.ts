import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d49f70e61ad48c9a1e3a8e9d72deaaf",
  },
});
