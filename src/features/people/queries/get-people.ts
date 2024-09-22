import axios from "axios";

export const getPeople = async () => {
  const response = await axios.get("http://localhost:5000/people");
  return response.data;
};
