import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Movie } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const editMovieOnDatabase = async (movie: Movie) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.patch(
        `http://localhost:5000/movies/${movie.id}`,
        movie
      );
    };

    const data = await toast.promise(withDelay(), {
      loading: `Editando informações...`,
      success: `Informações editadas com sucesso!`,
      error: `Erro ao editar ${movie.title} no banco de dados.`,
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
