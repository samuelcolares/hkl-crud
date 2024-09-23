import { useQuery, useQueryClient } from "@tanstack/react-query";

import { Movie, MovieWithoutId } from "../types";
import { movieSchema } from "../schemas";
import { z } from "zod";

import { useStore } from "@/src/Providers/store-provider";

import { editMovieOnDatabase } from "../services/edit-movie-on-database";
import { addMovieToDatabase } from "../services/add-movie-to-database";
import { getMovies } from "../queries/get-movies";
import { deleteMovieOnDatabase } from "../services/delete-movie-on-database";
import { generateTimestamp } from "@/src/utils";

const useMovies = () => {
  const queryClient = useQueryClient();
  const { updateMovieOnLocalStorage, removeMovieOnLocalStorage } = useStore();
  const { data: movies = [], status } = useQuery<Movie[], Error>({
    queryKey: ["movies"],
    queryFn: getMovies,
    staleTime: Infinity,
  });

  const addMovie = async (movie: z.infer<typeof movieSchema>) => {
    const content: MovieWithoutId = {
      ...movie,
      createdAt: generateTimestamp(),
      updatedAt: generateTimestamp(),
    };

    const newMovie = await addMovieToDatabase(content);
    addMovieLocal(newMovie);
  };

  const addMovieLocal = (movie: Movie | undefined) => {
    if (!movie) return;
    return queryClient.setQueryData(["movies"], (old: Movie[] = []) => {
      return [movie, ...old];
    });
  };

  const editMovie = async (movie: Movie) => {
    const editedMovie = await editMovieOnDatabase(movie);
    editMovieLocal(editedMovie);
    updateMovieOnLocalStorage(editedMovie);
  };

  const editMovieLocal = (movie: Movie | undefined) => {
    if (!movie) return;
    return queryClient.setQueryData(["movies"], (old: Movie[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldMovie) => oldMovie.id === movie.id
      );

      updatedPeople[index] = movie;

      return updatedPeople;
    });
  };

  const deleteMovie = async (personId: string) => {
    await deleteMovieOnDatabase(personId);
    deleteMovieLocal(personId);
  };

  const deleteMovieLocal = (personId: string | undefined) => {
    if (!personId) return;
    return queryClient.setQueryData(["movies"], (old: Movie[] = []) => {
      const updatedPeople = [...old];
      const index = updatedPeople.findIndex(
        (oldMovie) => oldMovie.id === personId
      );
      removeMovieOnLocalStorage(updatedPeople[index]);
      updatedPeople.splice(index, 1);

      return updatedPeople;
    });
  };

  return {
    status,
    movies,
    addMovie,
    editMovie,
    deleteMovie,
  };
};

export default useMovies;
