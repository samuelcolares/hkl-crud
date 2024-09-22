import { z } from "zod";
import { movieSchema } from "../schemas";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { Movie } from "../types";
import { simulateServerDelay } from "@/src/utils";

export const addMovieToDatabase = async (movie: z.infer<typeof movieSchema>) => {
  try {
    const withDelay = async () => {
      await simulateServerDelay();
      return await axios.post("http://localhost:5000/movies", movie);
    };

    const data = await toast.promise(withDelay(), {
      loading: `Salvando filme...`,
      success: `Filme salva no banco de dados!`,
      error: `Erro ao adicionar ${movie.title} ao banco de dados.`,
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
