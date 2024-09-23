import { createContext, useContext, useEffect, useState } from "react";
import { StoreContext as StoreType } from "./store.type";
import { useFavoritePeople } from "../features/people/hooks/use-favorite-people.hook";
import usePeople from "../features/people/hooks/use-people.hook";
import { useFavoriteSongs } from "../features/songs/hooks/use-favorite-songs.hook";
import useSongs from "../features/songs/hooks/use-songs.hook";
import { useFavoriteMovies } from "../features/movies/hooks/use-favorite-movies.hook";
import useMovies from "../features/movies/hooks/use-movies.hook";
import { Movie } from "../features/movies/types";
import { Song } from "../features/songs/types";
import { Person } from "../features/people/types";
import { simulateServerDelay } from "../utils";

const StoreContext = createContext<StoreType>({} as StoreType);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    favoritePeople,
    favoritePerson,
    resetFavoritePeople,
    updatePersonOnLocalStorage,
    isPersonFavorited,
    removePersonOnLocalStorage,
  } = useFavoritePeople();

  const {
    favoriteSong,
    favoriteSongs,
    isSongFavorited,
    removeSongOnLocalStorage,
    resetFavoriteSongs,
    updateSongOnLocalStorage,
  } = useFavoriteSongs();

  const {
    favoriteMovie,
    favoriteMovies,
    isMovieFavorited,
    removeMovieOnLocalStorage,
    resetFavoriteMovies,
    updateMovieOnLocalStorage,
  } = useFavoriteMovies();

  const { people, status: peopleStatus } = usePeople();
  const { songs, status: songsStatus } = useSongs();
  const { movies, status: moviesStatus } = useMovies();

  const searchQuery = (queryString: string) => {
    let status: "empty" | "success";

    const lowerCaseQuery = queryString.toLowerCase();

    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(lowerCaseQuery)
    );

    const filteredSongs = songs.filter(
      (song) =>
        song.name.toLowerCase().includes(lowerCaseQuery) ||
        song.singerOrBand.toLowerCase().includes(lowerCaseQuery)
    );

    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(lowerCaseQuery) ||
        movie.genre.toLowerCase().includes(lowerCaseQuery)
    );

    if (
      filteredMovies.length === 0 &&
      filteredPeople.length === 0 &&
      filteredMovies.length === 0
    ) {
      status = "empty";
    } else {
      status = "success";
    }

    return {
      filteredMovies,
      filteredSongs,
      filteredPeople,
      status,
    };
  };

  return (
    <StoreContext.Provider
      value={{
        people,
        peopleStatus,
        favoritePeople,
        isPersonFavorited,
        favoritePerson,
        resetFavoritePeople,
        updatePersonOnLocalStorage,
        removePersonOnLocalStorage,
        //
        favoriteSong,
        favoriteSongs,
        isSongFavorited,
        removeSongOnLocalStorage,
        resetFavoriteSongs,
        songs,
        songsStatus,
        updateSongOnLocalStorage,
        //
        favoriteMovie,
        favoriteMovies,
        isMovieFavorited,
        movies,
        moviesStatus,
        removeMovieOnLocalStorage,
        resetFavoriteMovies,
        updateMovieOnLocalStorage,
        //
        searchQuery,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
