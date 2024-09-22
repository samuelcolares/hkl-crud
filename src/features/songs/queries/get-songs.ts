import axios from "axios";

export const getSongs= async () => {
  const response = await axios.get("http://localhost:5000/songs");
  return response.data;
};