import axios from "axios";

export const getMovies= async () => {
  const response = await axios.get("http://localhost:5000/movies");
  return response.data;
};