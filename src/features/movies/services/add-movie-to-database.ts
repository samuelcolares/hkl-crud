import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Movie, MovieWithoutId } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const addMovieToDatabase = async (movieWithoutId: MovieWithoutId) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.post("http://localhost:5000/movies", movieWithoutId);
    };

    const { data } = await toast.promise(withDelay(), {
      loading: `Salvando filme...`,
      success: `Filme salva no banco de dados!`,
      error: `Erro ao adicionar ${movieWithoutId.title} ao banco de dados.`,
    });

    const createdMovie: Movie = {
      ...movieWithoutId,
      id: data.id as string,
    };

    return createdMovie;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
