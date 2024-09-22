import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Movie } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const deleteMovieOnDatabase = async (movieId: string) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.delete(`http://localhost:5000/movies/${movieId}`);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Removendo filme do banco de dados...`,
      success: `Filme removido do banco de dados!`,
      error: `Erro ao remover filme do banco de dados.`,
    });

    return data.data as Movie;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error.response, error.message);
      toast.error(error.message);
    }
    console.log(error);
  }
};
