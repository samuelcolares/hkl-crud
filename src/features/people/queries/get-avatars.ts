import axios from "axios";

export const getAvatars = async () => {
  const response = await axios.get("http://localhost:5000/avatars");
  return response.data;
};
