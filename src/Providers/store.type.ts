import { Movie } from "../features/movies/types";
import { Person } from "../features/people/types";
import { Song } from "../features/songs/types";
import { Status } from "../types";

type PeopleContext = {
  people: Person[];
  peopleStatus: Status;
  favoritePeople: Person[];
  isPersonFavorited: (person: Person) => boolean;
  favoritePerson: (person: Person) => void;
  resetFavoritePeople: () => void;
  updatePersonOnLocalStorage: (person: Person | undefined) => void;
  removePersonOnLocalStorage: (person: Person | undefined) => void;
  // favoriteMusic
  // favoriteMovies
};

type SongsContext = {
  songs: Song[];
  songsStatus: Status;
  favoriteSongs: Song[];
  isSongFavorited: (song: Song) => boolean;
  favoriteSong: (song: Song) => void;
  resetFavoriteSongs: () => void;
  updateSongOnLocalStorage: (song: Song | undefined) => void;
  removeSongOnLocalStorage: (song: Song | undefined) => void;
};

type MoviesContext = {
  movies: Movie[];
  moviesStatus: Status;
  favoriteMovies: Movie[];
  isMovieFavorited: (movie: Movie) => boolean;
  favoriteMovie: (movie: Movie) => void;
  resetFavoriteMovies: () => void;
  updateMovieOnLocalStorage: (movie: Movie | undefined) => void;
  removeMovieOnLocalStorage: (movie: Movie | undefined) => void;
};

export type StoreContext = PeopleContext & SongsContext & MoviesContext;
